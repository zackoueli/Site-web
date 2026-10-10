"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ArticleDraft } from "@/lib/github";

const BUILD_LABEL: Record<ArticleDraft["buildState"], string> = {
  success: "Build OK",
  pending: "Build en cours…",
  failure: "Build en échec",
  unknown: "Build inconnu",
};

function DraftCard({ draft }: { draft: ArticleDraft }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [rejecting, setRejecting] = useState(false);
  const [reason, setReason] = useState("");
  const [published, setPublished] = useState(false);

  const slug = draft.branch.replace(/^claude\/article-/, "");
  const liveUrl = `https://breizhapp.tech/blog/${slug}`;

  async function act(action: "publish" | "reject") {
    if (action === "publish" && !confirm(`Publier « ${draft.title} » en production ?`)) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/seo/drafts/${draft.number}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, sha: draft.sha, reason }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      if (action === "publish") setPublished(true);
      else router.refresh();
    } catch (e) {
      setError((e as Error).message || "Échec de l’opération.");
    } finally {
      setBusy(false);
    }
  }

  if (published) {
    return (
      <div className="brutal-border bg-white p-4 text-sm">
        <p className="font-bold text-green-700 mb-2">« {draft.title} » est fusionné : Vercel le met en ligne d’ici 2 à 3 minutes.</p>
        <p>
          Dernière étape : demander l’indexation de{" "}
          <a href={liveUrl} target="_blank" rel="noreferrer" className="mono underline">{liveUrl}</a>{" "}
          dans{" "}
          <a
            href={`https://search.google.com/search-console/inspect?resource_id=sc-domain%3Abreizhapp.tech&id=${encodeURIComponent(liveUrl)}`}
            target="_blank"
            rel="noreferrer"
            className="underline font-bold"
          >
            Search Console ↗
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="brutal-border bg-white p-4 space-y-3">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h3 className="font-black">{draft.title}</h3>
          <p className="mono text-xs text-gray-500">
            /blog/{slug} · ouvert le {draft.createdAt.slice(0, 10)} ·{" "}
            <a href={draft.url} target="_blank" rel="noreferrer" className="underline">PR #{draft.number}</a>
          </p>
        </div>
        <span
          className={`text-xs font-bold border-2 border-black px-2 py-0.5 ${
            draft.buildState === "success" ? "bg-green-100" : draft.buildState === "failure" ? "bg-red-100" : "bg-gray-100"
          }`}
        >
          {BUILD_LABEL[draft.buildState]}
        </span>
      </div>

      {draft.body && (
        <details className="text-sm">
          <summary className="cursor-pointer font-bold">Title, meta, plan et affirmations à vérifier</summary>
          <pre className="whitespace-pre-wrap font-sans mt-2 p-3 bg-[#FFFBF0] border-2 border-black">{draft.body}</pre>
        </details>
      )}

      {error && <p className="text-sm font-bold text-red-700">{error}</p>}

      {rejecting ? (
        <div className="space-y-2">
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={2}
            placeholder="Pourquoi ? (laissé en commentaire sur la PR)"
            className="w-full border-2 border-black px-3 py-2 text-sm"
          />
          <div className="flex gap-2">
            <button
              onClick={() => act("reject")}
              disabled={busy}
              className="border-2 border-black px-3 py-1.5 bg-red-100 font-bold text-sm disabled:opacity-50"
            >
              Confirmer le refus
            </button>
            <button onClick={() => setRejecting(false)} className="border-2 border-black px-3 py-1.5 bg-white font-bold text-sm">
              Annuler
            </button>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 flex-wrap items-center">
          {draft.previewUrl ? (
            <a
              href={`${draft.previewUrl.replace(/\/$/, "")}/blog/${slug}`}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-black px-3 py-1.5 bg-white font-bold text-sm hover:bg-[#FFE234]"
            >
              Relire l’aperçu ↗
            </a>
          ) : (
            <span className="text-sm text-gray-500">Aperçu pas encore disponible</span>
          )}
          <button
            onClick={() => act("publish")}
            disabled={busy || draft.buildState !== "success"}
            className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-4 py-1.5 font-bold text-sm disabled:opacity-50"
          >
            {busy ? "…" : "Publier"}
          </button>
          <button
            onClick={() => setRejecting(true)}
            disabled={busy}
            className="border-2 border-black px-3 py-1.5 bg-white font-bold text-sm hover:bg-red-100"
          >
            Refuser
          </button>
        </div>
      )}
    </div>
  );
}

export default function ArticleDrafts({ drafts }: { drafts: ArticleDraft[] | string }) {
  if (typeof drafts === "string") return <p className="text-sm font-bold text-red-700">{drafts}</p>;
  if (!drafts.length) return <p className="text-sm text-gray-500 italic">Aucun article en attente de relecture.</p>;
  return (
    <div className="space-y-4">
      {drafts.map((d) => (
        <DraftCard key={d.number} draft={d} />
      ))}
    </div>
  );
}
