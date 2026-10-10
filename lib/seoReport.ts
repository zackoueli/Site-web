import "server-only";
import { getDb } from "@/lib/firebaseAdmin";
import { searchAnalytics, type GscRow } from "@/lib/gsc";
import { articles, type Article } from "@/lib/blog";
import { SERVICES, SECTEURS } from "@/lib/taxonomy";
import sitemap from "@/app/sitemap";

/**
 * Rapport SEO hebdomadaire (module 9 « corriger l'existant » + revue du lundi).
 * Le rapport classe et suggère, il ne supprime ni ne modifie jamais rien :
 * chaque décision reste à Enzo.
 */

const COLLECTION = "seoReports";
const ORIGIN = "https://breizhapp.tech";

/** Search Console a ~3 jours de retard sur les données consolidées. */
const GSC_LAG_DAYS = 3;
/** En dessous de ce volume, un article est protégé de toute suggestion de suppression. */
const PROTECTED_WORDS = 600;

export type PageStat = { clicks: number; impressions: number; position: number | null };

export type CutCandidate = {
  url: string;
  title: string | null;
  published: string | null;
  words: number | null;
  clicks: number;
  impressions: number;
  position: number | null;
  suggestion: string;
};

export type RepointCandidate = {
  url: string;
  title: string;
  googleQuery: string;
  queryImpressions: number;
  queryClicks: number;
  position: number;
  ctr: number;
  diagnosis: "frappe" | "ia" | "ctr" | "loin";
  advice: string;
};

export type Silo = {
  slug: string;
  label: string;
  hubUrl: string;
  articles: number;
  clicks: number;
  impressions: number;
  orphans: string[];
};

export type SeoReport = {
  id: string;
  createdAt: string;
  periods: {
    current: { start: string; end: string };
    previous: { start: string; end: string };
    long: { start: string; end: string };
  };
  totals: { current: PageStat; previous: PageStat };
  cadence: { lastArticle: { slug: string; title: string; date: string } | null; daysSince: number | null; last28: number };
  weekly: {
    lostClicks: { url: string; before: number; after: number; posBefore: number | null; posAfter: number | null; cause: "position" | "ctr" }[];
    gainedImpressions: { url: string; before: number; after: number; position: number | null }[];
    newTop10: { query: string; position: number; impressions: number; previousPosition: number | null }[];
    wait: { url: string; lastModified: string }[];
  };
  toCut: CutCandidate[];
  toRepoint: RepointCandidate[];
  silos: Silo[];
  opportunities: { query: string; page: string; impressions: number; clicks: number; position: number }[];
};

// ---------- utilitaires ----------

function isoDay(d: Date) {
  return d.toISOString().slice(0, 10);
}

function daysAgo(n: number, from = new Date()) {
  const d = new Date(from);
  d.setUTCDate(d.getUTCDate() - n);
  return d;
}

function daysBetween(a: string, b: Date) {
  return Math.floor((b.getTime() - new Date(a).getTime()) / 86_400_000);
}

/** URL canonique du site, ou null pour les sous-domaines, paginations et URLs parasites. */
function normalizeUrl(raw: string): string | null {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }
  if (url.hostname === "www.breizhapp.tech") url.hostname = "breizhapp.tech";
  if (url.hostname !== "breizhapp.tech" || url.search) return null;
  if (url.pathname.includes("breizhapp.tech")) return null;
  const path = url.pathname.replace(/\/+$/, "") || "/";
  return path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}`;
}


const STOPWORDS = new Set([
  "les", "des", "une", "pour", "avec", "sans", "dans", "sur", "par", "est", "son", "ses", "aux", "que", "qui",
  "comment", "quel", "quelle", "quels", "quelles", "faire", "the", "and", "breizhapp", "2025", "2026",
]);

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length >= 3 && !STOPWORDS.has(t));
}

/** Part des mots de la requête déjà présents dans le title ou le slug (0 à 1). */
function overlap(query: string, target: string) {
  const q = tokens(query);
  if (!q.length) return 1;
  const t = new Set(tokens(target));
  return q.filter((w) => t.has(w) || [...t].some((x) => x.startsWith(w) || w.startsWith(x))).length / q.length;
}

function articleWords(a: Article) {
  const parts: string[] = [];
  for (const s of a.sections) {
    parts.push(...(s.paragraphs ?? []), ...(s.list ?? []));
    for (const sub of s.subsections ?? []) parts.push(...sub.paragraphs);
    if (s.callout) parts.push(s.callout.text);
    if (s.table) parts.push(...s.table.rows.flat());
  }
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

function aggregateByPage(rows: GscRow[]) {
  const map = new Map<string, { clicks: number; impressions: number; posWeight: number }>();
  for (const r of rows) {
    const url = normalizeUrl(r.keys[0]);
    if (!url) continue;
    const cur = map.get(url) ?? { clicks: 0, impressions: 0, posWeight: 0 };
    cur.clicks += r.clicks;
    cur.impressions += r.impressions;
    cur.posWeight += r.position * r.impressions;
    map.set(url, cur);
  }
  const out = new Map<string, PageStat>();
  for (const [url, v] of map) {
    out.set(url, {
      clicks: v.clicks,
      impressions: v.impressions,
      position: v.impressions ? Math.round((v.posWeight / v.impressions) * 10) / 10 : null,
    });
  }
  return out;
}

function sumStats(stats: Iterable<PageStat>): PageStat {
  let clicks = 0;
  let impressions = 0;
  let posWeight = 0;
  for (const s of stats) {
    clicks += s.clicks;
    impressions += s.impressions;
    posWeight += (s.position ?? 0) * s.impressions;
  }
  return { clicks, impressions, position: impressions ? Math.round((posWeight / impressions) * 10) / 10 : null };
}

const round1 = (n: number) => Math.round(n * 10) / 10;

// ---------- construction du rapport ----------

export async function buildReport(now = new Date()): Promise<SeoReport> {
  const end = daysAgo(GSC_LAG_DAYS, now);
  const current = { start: isoDay(daysAgo(27, end)), end: isoDay(end) };
  const previous = { start: isoDay(daysAgo(55, end)), end: isoDay(daysAgo(28, end)) };
  const long = { start: isoDay(daysAgo(89, end)), end: isoDay(end) };

  const [pagesLong, pageQueryLong, pagesCur, pagesPrev, queriesCur, queriesPrev, pageQueryCur] = await Promise.all([
    searchAnalytics({ startDate: long.start, endDate: long.end, dimensions: ["page"] }),
    searchAnalytics({ startDate: long.start, endDate: long.end, dimensions: ["page", "query"], rowLimit: 25000 }),
    searchAnalytics({ startDate: current.start, endDate: current.end, dimensions: ["page"] }),
    searchAnalytics({ startDate: previous.start, endDate: previous.end, dimensions: ["page"] }),
    searchAnalytics({ startDate: current.start, endDate: current.end, dimensions: ["query"] }),
    searchAnalytics({ startDate: previous.start, endDate: previous.end, dimensions: ["query"] }),
    searchAnalytics({ startDate: current.start, endDate: current.end, dimensions: ["page", "query"], rowLimit: 25000 }),
  ]);

  const statsLong = aggregateByPage(pagesLong);
  const statsCur = aggregateByPage(pagesCur);
  const statsPrev = aggregateByPage(pagesPrev);

  const articleByUrl = new Map(articles.map((a) => [`${ORIGIN}/blog/${a.slug}`, a]));
  const siteUrls = (await sitemap())
    .map((e) => ({ url: normalizeUrl(e.url), lastModified: e.lastModified }))
    .filter((e): e is { url: string; lastModified: string | Date | undefined } => !!e.url);

  // --- 1. Pages à couper : 0 clic et < 50 impressions sur 90 jours, hors pages de moins de 3 mois ---
  const toCut: CutCandidate[] = [];
  for (const { url } of siteUrls) {
    const s = statsLong.get(url) ?? { clicks: 0, impressions: 0, position: null };
    if (s.clicks > 0 || s.impressions >= 50) continue;
    const art = articleByUrl.get(url);
    if (art && daysBetween(art.date, now) < 90) continue;
    if (!art && !url.startsWith(`${ORIGIN}/blog/`)) {
      // Pages services, secteurs, portfolio : on ne les supprime pas, on les améliore.
      if (/\/(mentions-legales|politique-de-confidentialite|cgv)$/.test(url)) continue;
      toCut.push({
        url,
        title: null,
        published: null,
        words: null,
        ...s,
        suggestion: "Page structurelle : à garder, renforcer le contenu et les liens internes vers elle.",
      });
      continue;
    }
    const words = art ? articleWords(art) : null;
    let suggestion: string;
    if (words !== null && words >= PROTECTED_WORDS) {
      suggestion = s.impressions === 0
        ? "Article substantiel jamais vu par Google : fusionner avec un article proche (301), pas de suppression."
        : "Article substantiel : réécrire et réorienter, ou fusionner (301). Pas de suppression.";
    } else {
      suggestion = s.impressions === 0
        ? "Article court et invisible : supprimer (301 vers l'article le plus proche) ou fusionner."
        : "Article court : fusionner dans un article plus complet (301) ou réécrire.";
    }
    toCut.push({
      url,
      title: art?.title ?? null,
      published: art?.date ?? null,
      words,
      ...s,
      suggestion,
    });
  }
  // Articles d'abord (seuls vrais candidats), pages structurelles ensuite
  toCut.sort((a, b) => Number(!a.title) - Number(!b.title) || a.impressions - b.impressions);

  // --- 2. Pages à réorienter vers la requête que Google leur donne ---
  const topQueryByPage = new Map<string, GscRow>();
  for (const r of pageQueryLong) {
    const url = normalizeUrl(r.keys[0]);
    if (!url) continue;
    const best = topQueryByPage.get(url);
    if (!best || r.impressions > best.impressions) topQueryByPage.set(url, r);
  }
  const toRepoint: RepointCandidate[] = [];
  for (const [url, row] of topQueryByPage) {
    const art = articleByUrl.get(url);
    if (!art) continue; // les pages services ont leur propre template, on se limite aux articles
    if (row.impressions < 20) continue;
    const query = row.keys[1];
    if (overlap(query, `${art.title} ${art.slug}`) >= 0.6) continue;
    const position = round1(row.position);
    let diagnosis: RepointCandidate["diagnosis"];
    let advice: string;
    if (position <= 3) {
      diagnosis = "ia";
      advice = "Déjà top 3 : si les clics baissent, un aperçu IA répond probablement au-dessus. Ne pas toucher au title.";
    } else if (position < 8) {
      diagnosis = "ctr";
      advice = "Bien placé mais peu cliqué : retravailler title et meta autour de cette requête.";
    } else if (position <= 15) {
      diagnosis = "frappe";
      advice = "Zone de frappe : réécrire H1, meta et 100 premiers mots autour de cette requête, vérifier que le contenu y répond.";
    } else {
      diagnosis = "loin";
      advice = "Encore loin : réorienter puis ajouter des liens internes depuis les articles proches.";
    }
    toRepoint.push({
      url,
      title: art.title,
      googleQuery: query,
      queryImpressions: row.impressions,
      queryClicks: row.clicks,
      position,
      ctr: Math.round(row.ctr * 1000) / 10,
      diagnosis,
      advice,
    });
  }
  const diagOrder = { frappe: 0, ctr: 1, loin: 2, ia: 3 };
  toRepoint.sort((a, b) => diagOrder[a.diagnosis] - diagOrder[b.diagnosis] || b.queryImpressions - a.queryImpressions);

  // --- 3. Silos : un hub (page service/secteur) par thème, ses articles rattachés ---
  const hubs = [...SERVICES, ...SECTEURS];
  const silos: Silo[] = hubs
    .map((h) => {
      const arts = articles.filter((a) => a.service === h.slug);
      const stats = arts.map((a) => statsLong.get(`${ORIGIN}/blog/${a.slug}`) ?? { clicks: 0, impressions: 0, position: null });
      const total = sumStats(stats);
      return {
        slug: h.slug,
        label: h.label,
        hubUrl: `${ORIGIN}${h.href}`,
        articles: arts.length,
        clicks: total.clicks,
        impressions: total.impressions,
        // Articles du silo qui ne font aucun lien vers le hub dans leur texte
        orphans: arts
          .filter((a) => !JSON.stringify(a.sections).includes(`](${h.href})`))
          .map((a) => a.slug),
      };
    })
    .sort((a, b) => b.impressions - a.impressions);

  // --- 4. Revue de la semaine : 28 derniers jours contre les 28 précédents ---
  const allUrls = new Set([...statsCur.keys(), ...statsPrev.keys()]);
  const lostClicks: SeoReport["weekly"]["lostClicks"] = [];
  const gainedImpressions: SeoReport["weekly"]["gainedImpressions"] = [];
  for (const url of allUrls) {
    const c = statsCur.get(url) ?? { clicks: 0, impressions: 0, position: null };
    const p = statsPrev.get(url) ?? { clicks: 0, impressions: 0, position: null };
    if (p.clicks - c.clicks >= 2) {
      const worse = c.position !== null && p.position !== null && c.position - p.position > 2;
      lostClicks.push({
        url,
        before: p.clicks,
        after: c.clicks,
        posBefore: p.position,
        posAfter: c.position,
        cause: worse || c.position === null ? "position" : "ctr",
      });
    }
    if (c.impressions - p.impressions >= 30 && c.impressions >= p.impressions * 1.5) {
      gainedImpressions.push({ url, before: p.impressions, after: c.impressions, position: c.position });
    }
  }
  lostClicks.sort((a, b) => b.before - b.after - (a.before - a.after));
  gainedImpressions.sort((a, b) => b.after - b.before - (a.after - a.before));

  const prevQueryPos = new Map(queriesPrev.map((r) => [r.keys[0], r.position]));
  const newTop10 = queriesCur
    .filter((r) => r.position <= 10 && r.impressions >= 5)
    .filter((r) => {
      const before = prevQueryPos.get(r.keys[0]);
      return before === undefined || before > 10;
    })
    .map((r) => ({
      query: r.keys[0],
      position: round1(r.position),
      impressions: r.impressions,
      previousPosition: prevQueryPos.has(r.keys[0]) ? round1(prevQueryPos.get(r.keys[0])!) : null,
    }))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 20);

  const wait = siteUrls
    .filter((e) => e.lastModified && daysBetween(new Date(e.lastModified).toISOString(), now) < 60)
    .map((e) => ({ url: e.url, lastModified: isoDay(new Date(e.lastModified!)) }))
    .sort((a, b) => b.lastModified.localeCompare(a.lastModified));

  // --- 5. Opportunités : requêtes entre la 4e et la 20e place, à optimiser en priorité ---
  const opportunities = pageQueryCur
    .map((r) => ({ page: normalizeUrl(r.keys[0]), r }))
    .filter((x): x is { page: string; r: GscRow } => !!x.page && x.r.position >= 4 && x.r.position <= 20 && x.r.impressions >= 10)
    .map(({ page, r }) => ({ query: r.keys[1], page, impressions: r.impressions, clicks: r.clicks, position: round1(r.position) }))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 25);

  // --- Cadence de publication ---
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  const last = sorted[0] ?? null;

  return {
    id: isoDay(now),
    createdAt: now.toISOString(),
    periods: { current, previous, long },
    totals: { current: sumStats(statsCur.values()), previous: sumStats(statsPrev.values()) },
    cadence: {
      lastArticle: last ? { slug: last.slug, title: last.title, date: last.date } : null,
      daysSince: last ? daysBetween(last.date, now) : null,
      last28: articles.filter((a) => daysBetween(a.date, now) < 28).length,
    },
    weekly: { lostClicks, gainedImpressions, newTop10, wait },
    toCut,
    toRepoint,
    silos,
    opportunities,
  };
}

// ---------- persistance Firestore ----------

export async function generateAndSaveReport(): Promise<SeoReport> {
  const report = await buildReport();
  await getDb().collection(COLLECTION).doc(report.id).set(report);
  return report;
}

export async function getReport(id?: string): Promise<SeoReport | null> {
  const col = getDb().collection(COLLECTION);
  if (id) {
    const doc = await col.doc(id).get();
    return doc.exists ? (doc.data() as SeoReport) : null;
  }
  const snap = await col.orderBy("createdAt", "desc").limit(1).get();
  return snap.empty ? null : (snap.docs[0].data() as SeoReport);
}

export async function listReportIds(limit = 12): Promise<string[]> {
  const snap = await getDb().collection(COLLECTION).orderBy("createdAt", "desc").limit(limit).select().get();
  return snap.docs.map((d) => d.id);
}

