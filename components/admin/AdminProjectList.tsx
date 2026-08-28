"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import type { ProjectDoc } from "@/lib/portfolioStore";

export default function AdminProjectList({
  projects,
  usingSeed,
}: {
  projects: ProjectDoc[];
  usingSeed: boolean;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);

  async function importSeed() {
    setSeeding(true);
    const res = await fetch("/api/admin/seed", { method: "POST" });
    setSeeding(false);
    if (res.ok) router.refresh();
    else alert("Import impossible.");
  }

  async function remove(p: ProjectDoc) {
    if (!confirm(`Supprimer définitivement « ${p.name} » ?`)) return;
    setBusy(p.id);
    const res = await fetch(`/api/admin/projects/${p.id}`, { method: "DELETE" });
    setBusy(null);
    if (res.ok) router.refresh();
    else alert("Suppression impossible.");
  }

  return (
    <>
      {usingSeed && (
        <div className="brutal-border bg-[#FFF3C4] p-4 mb-6 text-sm">
          <p className="font-bold mb-1">Base non initialisée</p>
          <p className="text-gray-700 mb-3">
            Les projets affichés proviennent du fichier de code. Importez-les
            dans la base une fois pour pouvoir les modifier ici.
          </p>
          <button
            type="button"
            onClick={importSeed}
            disabled={seeding}
            className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-4 py-2 text-sm font-bold disabled:opacity-50"
          >
            {seeding ? "Import..." : "Importer les projets existants"}
          </button>
        </div>
      )}

      {projects.length === 0 ? (
        <p className="text-gray-600">Aucun projet. Créez-en un.</p>
      ) : (
    <ul className="flex flex-col gap-3">
      {projects.map((p) => (
        <li
          key={p.id}
          className="brutal-border bg-white p-4 flex items-center gap-4 flex-wrap"
        >
          <div
            className="w-14 h-14 rounded-lg shrink-0 overflow-hidden border-2 border-black flex items-center justify-center text-2xl"
            style={{ backgroundColor: p.color }}
          >
            {p.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.image}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <span>{p.icon}</span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="font-black leading-tight">{p.name}</p>
            <p className="mono text-xs text-gray-500 truncate">
              /portfolio/{p.slug} · {p.category || "—"} · {p.service}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/portfolio/${p.slug}`}
              target="_blank"
              className="brutal-border px-3 py-1.5 text-xs font-bold hover:bg-[#FFE234] transition-colors"
            >
              Voir ↗
            </Link>
            <Link
              href={`/admin/projets/${p.id}`}
              className="brutal-border px-3 py-1.5 text-xs font-bold hover:bg-[#FFE234] transition-colors"
            >
              Éditer
            </Link>
            <button
              type="button"
              onClick={() => remove(p)}
              disabled={busy === p.id}
              className="brutal-border px-3 py-1.5 text-xs font-bold bg-red-100 hover:bg-red-200 disabled:opacity-50 transition-colors"
            >
              {busy === p.id ? "..." : "Suppr."}
            </button>
          </div>
        </li>
      ))}
    </ul>
      )}
    </>
  );
}
