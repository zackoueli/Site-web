import "server-only";
import { getDb } from "@/lib/firebaseAdmin";
import { searchAnalytics } from "@/lib/gsc";
import { articles } from "@/lib/blog";

/**
 * Lance la routine Claude Code « nouvel article » (claude.ai/code/routines, déclencheur API).
 * La routine applique .claude/skills/new-article du repo et ouvre une pull request :
 * rien n'est publié sur main sans relecture et fusion par Enzo.
 */

const COLLECTION = "seoGenerations";
/** Cadence : jamais deux articles à moins de 3 jours d'intervalle (AGENTS.md). */
export const MIN_DAYS_BETWEEN_ARTICLES = 3;

export type Generation = {
  id: string;
  keyword: string;
  notes: string;
  firedAt: string;
  sessionUrl: string | null;
};

export async function listGenerations(limit = 10): Promise<Generation[]> {
  const snap = await getDb().collection(COLLECTION).orderBy("firedAt", "desc").limit(limit).get();
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Generation, "id">) }));
}

/** Raison de refuser un nouveau lancement, ou null si la cadence le permet. */
export async function cadenceBlocker(now = new Date()): Promise<string | null> {
  const lastArticle = [...articles].sort((a, b) => b.date.localeCompare(a.date))[0];
  if (lastArticle) {
    const days = (now.getTime() - new Date(lastArticle.date).getTime()) / 86_400_000;
    if (days < MIN_DAYS_BETWEEN_ARTICLES) {
      return `Dernier article publié le ${lastArticle.date} : attendez au moins ${MIN_DAYS_BETWEEN_ARTICLES} jours entre deux articles.`;
    }
  }
  const [lastGen] = await listGenerations(1);
  if (lastGen) {
    const days = (now.getTime() - new Date(lastGen.firedAt).getTime()) / 86_400_000;
    if (days < MIN_DAYS_BETWEEN_ARTICLES) {
      return `Un article (« ${lastGen.keyword} ») a déjà été lancé le ${lastGen.firedAt.slice(0, 10)}. Relisez et fusionnez sa PR avant d'en lancer un autre.`;
    }
  }
  return null;
}

/**
 * Pages du site qui reçoivent déjà des impressions pour ce mot-clé (90 jours).
 * Si l'une d'elles en reçoit, on optimise cette page plutôt que d'en créer une nouvelle.
 */
export async function existingPagesFor(keyword: string) {
  const end = new Date(Date.now() - 3 * 86_400_000);
  const start = new Date(end.getTime() - 89 * 86_400_000);
  const rows = await searchAnalytics({
    startDate: start.toISOString().slice(0, 10),
    endDate: end.toISOString().slice(0, 10),
    dimensions: ["page", "query"],
    filters: [{ dimension: "query", operator: "contains", expression: keyword.toLowerCase() }],
    rowLimit: 200,
  });
  const byPage = new Map<string, { clicks: number; impressions: number; positionSum: number }>();
  for (const r of rows) {
    const cur = byPage.get(r.keys[0]) ?? { clicks: 0, impressions: 0, positionSum: 0 };
    cur.clicks += r.clicks;
    cur.impressions += r.impressions;
    cur.positionSum += r.position * r.impressions;
    byPage.set(r.keys[0], cur);
  }
  return [...byPage.entries()]
    .map(([page, v]) => ({
      page,
      clicks: v.clicks,
      impressions: v.impressions,
      position: v.impressions ? Math.round((v.positionSum / v.impressions) * 10) / 10 : null,
    }))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 5);
}

export async function fireArticleRoutine(keyword: string, notes: string): Promise<Generation> {
  const url = process.env.CLAUDE_ROUTINE_URL;
  const token = process.env.CLAUDE_ROUTINE_TOKEN;
  if (!url || !token) throw new Error("Routine non configurée (CLAUDE_ROUTINE_URL / CLAUDE_ROUTINE_TOKEN).");

  const text = [`Mot-clé cible : ${keyword}`, notes ? `Consignes d'Enzo : ${notes}` : ""].filter(Boolean).join("\n");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "anthropic-beta": "experimental-cc-routine-2026-04-01",
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error(`La routine Claude a répondu ${res.status} : ${await res.text()}`);
  const data = await res.json();

  const record = {
    keyword,
    notes,
    firedAt: new Date().toISOString(),
    sessionUrl: data.claude_code_session_url ?? null,
  };
  const ref = await getDb().collection(COLLECTION).add(record);
  return { id: ref.id, ...record };
}
