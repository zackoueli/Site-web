"use client";
import { useMemo, useState } from "react";
import type { PageStat } from "@/lib/seoReport";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastModified: string;
  category: string;
  service: string;
};

const ORIGIN = "https://breizhapp.tech";

/** Limites du skill new-article : title ≤ 60 caractères, meta entre 140 et 160. */
const TITLE_MAX = 60;
const META_MIN = 140;
const META_MAX = 160;

function Length({ n, ok }: { n: number; ok: boolean }) {
  return <span className={`mono text-xs font-bold ${ok ? "text-green-700" : "text-red-700"}`}>{n}</span>;
}

/** Title + meta actuels d'un article, pour les tableaux du rapport. */
export function ArticleCell({ url, title, meta }: { url: string; title: string | null; meta?: ArticleMeta }) {
  return (
    <div>
      <div className="font-bold">{meta?.title ?? title ?? ""}</div>
      {meta && <div className="text-xs text-gray-600 mt-0.5">{meta.description}</div>}
      <a href={url} target="_blank" rel="noreferrer" className="mono text-xs hover:underline break-all">
        {url.replace(ORIGIN, "") || "/"}
      </a>
    </div>
  );
}

type SortKey = "impressions" | "clicks" | "date";

export default function ArticleList({
  articles,
  pages,
}: {
  articles: ArticleMeta[];
  pages: ({ url: string } & PageStat)[] | undefined;
}) {
  const [query, setQuery] = useState("");
  const [onlyIssues, setOnlyIssues] = useState(false);
  const [sort, setSort] = useState<SortKey>("impressions");

  const stats = useMemo(() => new Map((pages ?? []).map((p) => [p.url, p])), [pages]);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles
      .map((a) => {
        const s = stats.get(`${ORIGIN}/blog/${a.slug}`);
        const titleOk = a.title.length <= TITLE_MAX;
        const metaOk = a.description.length >= META_MIN && a.description.length <= META_MAX;
        return { a, s, titleOk, metaOk };
      })
      .filter(({ a }) => !q || `${a.title} ${a.description} ${a.slug}`.toLowerCase().includes(q))
      .filter(({ titleOk, metaOk }) => !onlyIssues || !titleOk || !metaOk)
      .sort((x, y) =>
        sort === "date"
          ? y.a.date.localeCompare(x.a.date)
          : (y.s?.[sort] ?? 0) - (x.s?.[sort] ?? 0)
      );
  }, [articles, stats, query, onlyIssues, sort]);

  const issues = articles.filter(
    (a) => a.title.length > TITLE_MAX || a.description.length < META_MIN || a.description.length > META_MAX
  ).length;

  return (
    <div>
      <div className="flex gap-2 flex-wrap items-center mb-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher dans les titles, metas, slugs…"
          className="border-2 border-black px-3 py-1.5 text-sm flex-1 min-w-[220px]"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="border-2 border-black px-2 py-1.5 text-sm bg-white"
        >
          <option value="impressions">Tri : impressions</option>
          <option value="clicks">Tri : clics</option>
          <option value="date">Tri : plus récents</option>
        </select>
        <label className="text-sm font-bold flex items-center gap-1.5">
          <input type="checkbox" checked={onlyIssues} onChange={(e) => setOnlyIssues(e.target.checked)} />
          Longueurs à revoir ({issues})
        </label>
      </div>
      {!pages && (
        <p className="text-xs text-gray-500 mb-2">
          Statistiques indisponibles pour ce rapport : cliquez sur « Actualiser maintenant ».
        </p>
      )}

      <div className="overflow-x-auto brutal-border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-[#0A0A0A] text-[#FFE234]">
            <tr>
              <th className="text-left px-3 py-2 font-bold">Article ({rows.length})</th>
              <th className="text-left px-3 py-2 font-bold whitespace-nowrap">Title / Meta</th>
              <th className="text-left px-3 py-2 font-bold whitespace-nowrap">Clics 90 j</th>
              <th className="text-left px-3 py-2 font-bold whitespace-nowrap">Impr. 90 j</th>
              <th className="text-left px-3 py-2 font-bold">Position</th>
              <th className="text-left px-3 py-2 font-bold">Dates</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ a, s, titleOk, metaOk }) => (
              <tr key={a.slug} className="border-t-2 border-black align-top">
                <td className="px-3 py-2">
                  <ArticleCell url={`${ORIGIN}/blog/${a.slug}`} title={a.title} meta={a} />
                  <div className="text-xs text-gray-500 mt-1">
                    {a.category} · {a.service}
                  </div>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <Length n={a.title.length} ok={titleOk} /> / <Length n={a.description.length} ok={metaOk} />
                </td>
                <td className="px-3 py-2">{s?.clicks ?? 0}</td>
                <td className="px-3 py-2">{s?.impressions ?? 0}</td>
                <td className="px-3 py-2">{s?.position != null ? s.position.toFixed(1) : "–"}</td>
                <td className="px-3 py-2 text-xs whitespace-nowrap">
                  publié {a.date}
                  <br />
                  modifié {a.lastModified}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Longueurs : title ≤ {TITLE_MAX} caractères, meta entre {META_MIN} et {META_MAX} (règles du skill new-article). En
        rouge : hors limites.
      </p>
    </div>
  );
}
