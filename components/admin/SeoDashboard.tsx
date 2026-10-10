"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { SeoReport } from "@/lib/seoReport";
import type { Generation } from "@/lib/articleRoutine";
import type { ArticleDraft } from "@/lib/github";
import ArticleDrafts from "@/components/admin/ArticleDrafts";

const ORIGIN = "https://breizhapp.tech";

type Tab = "publier" | "semaine" | "couper" | "reorienter" | "silos" | "article";

type Conflict = { page: string; clicks: number; impressions: number; position: number | null };

function path(url: string) {
  return url.replace(ORIGIN, "") || "/";
}

function PageLink({ url }: { url: string }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="mono text-xs hover:underline break-all">
      {path(url)}
    </a>
  );
}

function pos(p: number | null) {
  return p === null ? "–" : p.toFixed(1);
}

function Delta({ cur, prev }: { cur: number; prev: number }) {
  const d = cur - prev;
  if (d === 0) return <span className="text-gray-500">=</span>;
  return <span className={d > 0 ? "text-green-700" : "text-red-700"}>{d > 0 ? `+${d}` : d}</span>;
}

function Stat({ label, cur, prev }: { label: string; cur: number; prev: number }) {
  return (
    <div className="brutal-border bg-white p-3">
      <div className="text-xs font-bold uppercase text-gray-500">{label}</div>
      <div className="text-2xl font-black">
        {cur} <span className="text-sm"><Delta cur={cur} prev={prev} /></span>
      </div>
    </div>
  );
}

function Section({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-black">{title}</h2>
      {hint && <p className="text-sm text-gray-600 mb-3">{hint}</p>}
      {children}
    </section>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-500 italic">{children}</p>;
}

function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto brutal-border bg-white">
      <table className="w-full text-sm">
        <thead className="bg-[#0A0A0A] text-[#FFE234]">
          <tr>
            {head.map((h) => (
              <th key={h} className="text-left px-3 py-2 font-bold whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t-2 border-black align-top">
              {r.map((c, j) => (
                <td key={j} className="px-3 py-2">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SeoDashboard({
  report,
  reportIds,
  generations,
  cadenceBlocked,
  routineConfigured,
  drafts,
}: {
  report: SeoReport | null;
  reportIds: string[];
  generations: Generation[];
  cadenceBlocked: string | null;
  routineConfigured: boolean;
  drafts: ArticleDraft[] | string;
}) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>(Array.isArray(drafts) && drafts.length ? "publier" : "semaine");
  const [refreshing, setRefreshing] = useState(false);
  const [refreshError, setRefreshError] = useState("");

  const [keyword, setKeyword] = useState("");
  const [notes, setNotes] = useState("");
  const [sending, setSending] = useState(false);
  const [genError, setGenError] = useState("");
  const [conflict, setConflict] = useState<Conflict[] | null>(null);
  const [launched, setLaunched] = useState<Generation | null>(null);

  async function refresh() {
    setRefreshing(true);
    setRefreshError("");
    try {
      const res = await fetch("/api/admin/seo/report", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      router.push("/admin/seo");
      router.refresh();
    } catch (e) {
      setRefreshError((e as Error).message || "Échec de la génération du rapport.");
    } finally {
      setRefreshing(false);
    }
  }

  async function launch(force: boolean) {
    setSending(true);
    setGenError("");
    try {
      const res = await fetch("/api/admin/seo/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword, notes, force }),
      });
      const data = await res.json();
      if (res.status === 409) {
        setConflict(data.conflict);
        return;
      }
      if (!res.ok) throw new Error(data.error);
      setConflict(null);
      setLaunched(data.generation);
      setKeyword("");
      setNotes("");
      router.refresh();
    } catch (e) {
      setGenError((e as Error).message || "Échec du lancement.");
    } finally {
      setSending(false);
    }
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: "semaine", label: "Semaine" },
    { id: "couper", label: `À couper${report ? ` (${report.toCut.length})` : ""}` },
    { id: "reorienter", label: `À réorienter${report ? ` (${report.toRepoint.length})` : ""}` },
    { id: "silos", label: "Silos" },
    { id: "article", label: "Nouvel article" },
    { id: "publier", label: `À publier${Array.isArray(drafts) ? ` (${drafts.length})` : ""}` },
  ];

  return (
    <div>
      {/* En-tête : rapport affiché, historique, actualisation */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div className="text-sm">
          {report ? (
            <>
              Rapport du <strong>{report.id}</strong> · données du {report.periods.current.start} au{" "}
              {report.periods.current.end}, comparées aux 28 jours précédents
            </>
          ) : (
            "Aucun rapport pour l'instant."
          )}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {reportIds.length > 1 && (
            <select
              className="border-2 border-black px-2 py-1.5 text-sm bg-white"
              value={report?.id ?? ""}
              onChange={(e) => router.push(`/admin/seo?r=${e.target.value}`)}
            >
              {reportIds.map((id) => (
                <option key={id} value={id}>{id}</option>
              ))}
            </select>
          )}
          <button
            onClick={refresh}
            disabled={refreshing}
            className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-4 py-2 font-bold disabled:opacity-50"
          >
            {refreshing ? "Analyse en cours…" : "Actualiser maintenant"}
          </button>
        </div>
      </div>
      {refreshError && <p className="text-sm text-red-700 font-bold mb-4">{refreshError}</p>}

      {report && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <Stat label="Clics (28 j)" cur={report.totals.current.clicks} prev={report.totals.previous.clicks} />
          <Stat label="Impressions (28 j)" cur={report.totals.current.impressions} prev={report.totals.previous.impressions} />
          <div className="brutal-border bg-white p-3">
            <div className="text-xs font-bold uppercase text-gray-500">Position moy.</div>
            <div className="text-2xl font-black">{pos(report.totals.current.position)}</div>
          </div>
          <div className="brutal-border bg-white p-3">
            <div className="text-xs font-bold uppercase text-gray-500">Articles (28 j)</div>
            <div className="text-2xl font-black">{report.cadence.last28}</div>
            {report.cadence.daysSince !== null && (
              <div className="text-xs">dernier il y a {report.cadence.daysSince} j</div>
            )}
          </div>
        </div>
      )}

      <nav className="flex gap-2 flex-wrap mb-6">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-1.5 text-sm font-bold border-2 border-black ${
              tab === t.id ? "bg-[#0A0A0A] text-[#FFE234]" : "bg-white hover:bg-[#FFE234]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {!report && tab !== "article" && tab !== "publier" && (
        <Empty>Cliquez sur « Actualiser maintenant » pour générer le premier rapport. Il se régénère ensuite chaque lundi.</Empty>
      )}

      {report && tab === "semaine" && (
        <>
          <Section
            title="Pages qui perdent des clics"
            hint="Position en baisse : il faut une meilleure page. Position stable mais CTR en baisse : revoir le title, ou un aperçu IA s'affiche au-dessus. Jamais la même correction."
          >
            {report.weekly.lostClicks.length ? (
              <Table
                head={["Page", "Clics", "Position", "Cause", "À faire"]}
                rows={report.weekly.lostClicks.map((p) => [
                  <PageLink key="u" url={p.url} />,
                  `${p.before} → ${p.after}`,
                  `${pos(p.posBefore)} → ${pos(p.posAfter)}`,
                  p.cause === "position" ? "Classement" : "CTR",
                  p.cause === "position" ? "Améliorer le contenu, ajouter des liens internes" : "Retravailler title et meta",
                ])}
              />
            ) : (
              <Empty>Aucune page ne perd plus de 2 clics.</Empty>
            )}
          </Section>

          <Section
            title="Pages dont les impressions décollent"
            hint="Elles viennent d'entrer dans les résultats visibles. Passer du top 10 au top 3 est le gain le moins cher : à optimiser en priorité (si elles ne sont pas en attente)."
          >
            {report.weekly.gainedImpressions.length ? (
              <Table
                head={["Page", "Impressions", "Position"]}
                rows={report.weekly.gainedImpressions.map((p) => [
                  <PageLink key="u" url={p.url} />,
                  `${p.before} → ${p.after}`,
                  pos(p.position),
                ])}
              />
            ) : (
              <Empty>Pas de forte hausse cette période.</Empty>
            )}
          </Section>

          <Section title="Requêtes entrées dans le top 10">
            {report.weekly.newTop10.length ? (
              <Table
                head={["Requête", "Position", "Avant", "Impressions"]}
                rows={report.weekly.newTop10.map((q) => [q.query, pos(q.position), pos(q.previousPosition), q.impressions])}
              />
            ) : (
              <Empty>Aucune nouvelle requête dans le top 10.</Empty>
            )}
          </Section>

          <Section
            title="Opportunités : requêtes entre la 4e et la 20e place"
            hint="Une page reçoit déjà des impressions : on optimise cette page plutôt que d'écrire un nouvel article."
          >
            {report.opportunities.length ? (
              <Table
                head={["Requête", "Page", "Impressions", "Clics", "Position"]}
                rows={report.opportunities.map((o) => [o.query, <PageLink key="u" url={o.page} />, o.impressions, o.clicks, pos(o.position)])}
              />
            ) : (
              <Empty>Aucune opportunité détectée.</Empty>
            )}
          </Section>

          <Section
            title={`En attente (${report.weekly.wait.length})`}
            hint="Modifiées il y a moins de 60 jours : Google n'a pas fini de les réévaluer. Ne pas y toucher."
          >
            {report.weekly.wait.length ? (
              <ul className="text-sm space-y-1">
                {report.weekly.wait.map((w) => (
                  <li key={w.url}>
                    <span className="mono text-xs text-gray-500 mr-2">{w.lastModified}</span>
                    <PageLink url={w.url} />
                  </li>
                ))}
              </ul>
            ) : (
              <Empty>Aucune page récemment modifiée.</Empty>
            )}
          </Section>
        </>
      )}

      {report && tab === "couper" && (
        <Section
          title="Pages à couper, fusionner ou réécrire"
          hint="0 clic et moins de 50 impressions sur 90 jours, articles de moins de 3 mois exclus. Les articles de 600 mots ou plus ne sont jamais proposés à la suppression. La décision finale est la vôtre : rien n'est supprimé automatiquement."
        >
          {report.toCut.length ? (
            <Table
              head={["Page", "Publié", "Mots", "Impr.", "Position", "Suggestion"]}
              rows={report.toCut.map((p) => [
                <div key="u">
                  {p.title && <div className="font-bold">{p.title}</div>}
                  <PageLink url={p.url} />
                </div>,
                p.published ?? "–",
                p.words ?? "–",
                p.impressions,
                pos(p.position),
                p.suggestion,
              ])}
            />
          ) : (
            <Empty>Aucune page morte. Bien joué.</Empty>
          )}
        </Section>
      )}

      {report && tab === "reorienter" && (
        <Section
          title="Pages à réorienter vers la requête que Google leur donne"
          hint="Articles dont la requête principale (90 jours) n'est pas celle du title. Changer H1, meta et 100 premiers mots, et vérifier que le contenu répond vraiment à cette requête."
        >
          {report.toRepoint.length ? (
            <Table
              head={["Article", "Requête Google", "Impr.", "Position", "CTR", "Diagnostic"]}
              rows={report.toRepoint.map((p) => [
                <div key="u">
                  <div className="font-bold">{p.title}</div>
                  <PageLink url={p.url} />
                </div>,
                <strong key="q">{p.googleQuery}</strong>,
                p.queryImpressions,
                pos(p.position),
                `${p.ctr} %`,
                p.advice,
              ])}
            />
          ) : (
            <Empty>Tous les articles sont alignés sur la requête que Google leur attribue.</Empty>
          )}
        </Section>
      )}

      {report && tab === "silos" && (
        <Section
          title="Silos : une page pilier par thème"
          hint="Chaque page service ou secteur est le hub de ses articles. « Sans lien vers le hub » : articles du silo qui ne citent pas leur page pilier dans le texte."
        >
          <Table
            head={["Hub", "Articles", "Clics (90 j)", "Impr. (90 j)", "Sans lien vers le hub"]}
            rows={report.silos.map((s) => [
              <div key="h">
                <div className="font-bold">{s.label}</div>
                <PageLink url={s.hubUrl} />
              </div>,
              s.articles,
              s.clicks,
              s.impressions,
              s.orphans.length ? (
                <ul key="o" className="mono text-xs space-y-0.5">
                  {s.orphans.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              ) : (
                "–"
              ),
            ])}
          />
        </Section>
      )}

      {tab === "publier" && (
        <Section
          title="Articles à relire et publier"
          hint="Rédigés par la routine Claude. Relisez l’aperçu, puis « Publier » met l’article en production. Publication bloquée tant que le build de l’aperçu n’a pas réussi."
        >
          <ArticleDrafts drafts={drafts} />
        </Section>
      )}

      {tab === "article" && (
        <>
          <Section
            title="Lancer la rédaction d'un article"
            hint="Claude Code applique le skill new-article du repo (anti-cannibalisation, template, maillage, sitemap, build) et ouvre une pull request. Rien n'est publié avant que vous ayez relu l'aperçu Vercel et fusionné la PR."
          >
            {!routineConfigured && (
              <p className="text-sm font-bold text-red-700 mb-3">
                Routine non configurée : renseigner CLAUDE_ROUTINE_URL et CLAUDE_ROUTINE_TOKEN.
              </p>
            )}
            {cadenceBlocked && <p className="text-sm font-bold text-red-700 mb-3">{cadenceBlocked}</p>}

            <div className="brutal-border bg-white p-4 space-y-3">
              <label className="block">
                <span className="text-sm font-bold">Mot-clé cible</span>
                <input
                  value={keyword}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                    setConflict(null);
                  }}
                  placeholder="ex. application mobile boulangerie"
                  className="mt-1 w-full border-2 border-black px-3 py-2"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold">Consignes (facultatif)</span>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Angle, exemple client à citer, élément original à inclure…"
                  className="mt-1 w-full border-2 border-black px-3 py-2"
                />
              </label>

              {conflict && (
                <div className="border-2 border-black bg-[#FFE234] p-3 text-sm">
                  <p className="font-bold mb-2">
                    Ces pages reçoivent déjà des impressions sur ce mot-clé. Optimiser l’une d’elles est
                    généralement préférable à un nouvel article (risque de cannibalisation).
                  </p>
                  <ul className="mb-3 space-y-1">
                    {conflict.map((c) => (
                      <li key={c.page}>
                        <PageLink url={c.page} /> · {c.impressions} impr. · {c.clicks} clics · position {pos(c.position)}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => launch(true)}
                    disabled={sending}
                    className="border-2 border-black px-3 py-1.5 bg-white font-bold hover:bg-red-100 disabled:opacity-50"
                  >
                    Lancer quand même
                  </button>
                </div>
              )}

              {genError && <p className="text-sm font-bold text-red-700">{genError}</p>}
              {launched && (
                <p className="text-sm font-bold text-green-700">
                  Routine lancée pour « {launched.keyword} ».{" "}
                  {launched.sessionUrl && (
                    <a href={launched.sessionUrl} target="_blank" rel="noreferrer" className="underline">
                      Suivre la session
                    </a>
                  )}
                </p>
              )}

              <button
                onClick={() => launch(false)}
                disabled={sending || !routineConfigured || !!cadenceBlocked || keyword.trim().length < 3}
                className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-4 py-2 font-bold disabled:opacity-50"
              >
                {sending ? "Vérification…" : "Générer l'article"}
              </button>
            </div>
          </Section>

          <Section title="Derniers lancements">
            {generations.length ? (
              <Table
                head={["Date", "Mot-clé", "Session"]}
                rows={generations.map((g) => [
                  g.firedAt.slice(0, 10),
                  g.keyword,
                  g.sessionUrl ? (
                    <a key="s" href={g.sessionUrl} target="_blank" rel="noreferrer" className="underline">
                      Ouvrir
                    </a>
                  ) : (
                    "–"
                  ),
                ])}
              />
            ) : (
              <Empty>Aucun article lancé depuis l’admin.</Empty>
            )}
          </Section>
        </>
      )}
    </div>
  );
}
