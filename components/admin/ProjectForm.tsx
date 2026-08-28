"use client";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { ProjectDoc } from "@/lib/portfolioStore";

type GalleryItem = { src: string; alt: string; wide?: boolean };

type FormState = {
  name: string;
  slug: string;
  slugTouched: boolean;
  service: string;
  category: string;
  type: string;
  tagline: string;
  description: string;
  color: string;
  textColor: string;
  icon: string;
  tags: string; // séparés par virgule
  previewUrl: string;
  externalUrl: string;
  image: string;
  caseIntro: string;
  services: string; // 1 par ligne
  year: string;
  role: string;
  partnerName: string;
  partnerUrl: string;
  gallery: GalleryItem[];
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function fromDoc(p: ProjectDoc | null): FormState {
  return {
    name: p?.name ?? "",
    slug: p?.slug ?? "",
    slugTouched: !!p,
    service: p?.service ?? "site-web",
    category: p?.category ?? "",
    type: p?.type ?? "",
    tagline: p?.tagline ?? "",
    description: p?.description ?? "",
    color: p?.color ?? "#0A0A0A",
    textColor: p?.textColor ?? "#FFFBF0",
    icon: p?.icon ?? "✦",
    tags: (p?.tags ?? []).join(", "),
    previewUrl: p?.previewUrl ?? "",
    externalUrl: p?.externalUrl ?? "",
    image: p?.image ?? "",
    caseIntro: p?.caseIntro ?? "",
    services: (p?.services ?? []).join("\n"),
    year: p?.year ?? "",
    role: p?.role ?? "",
    partnerName: p?.partner?.name ?? "",
    partnerUrl: p?.partner?.url ?? "",
    gallery: p?.gallery ?? [],
  };
}

function toPayload(f: FormState) {
  const tags = f.tags.split(",").map((t) => t.trim()).filter(Boolean);
  const services = f.services.split("\n").map((t) => t.trim()).filter(Boolean);
  return {
    name: f.name.trim(),
    slug: f.slug.trim() || slugify(f.name),
    service: f.service,
    category: f.category.trim(),
    type: f.type.trim(),
    tagline: f.tagline.trim(),
    description: f.description.trim(),
    color: f.color,
    textColor: f.textColor,
    badge: "",
    icon: f.icon.trim() || "✦",
    tags,
    previewUrl: f.previewUrl.trim() || undefined,
    externalUrl: f.externalUrl.trim() || undefined,
    image: f.image.trim() || undefined,
    caseIntro: f.caseIntro.trim() || undefined,
    services: services.length ? services : undefined,
    year: f.year.trim() || undefined,
    role: f.role.trim() || undefined,
    partner:
      f.partnerName.trim() && f.partnerUrl.trim()
        ? { name: f.partnerName.trim(), url: f.partnerUrl.trim() }
        : undefined,
    gallery: f.gallery.length ? f.gallery : undefined,
  };
}

const field =
  "w-full brutal-border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FFE234]";
const labelCls = "block text-xs font-bold uppercase tracking-wider mb-1";

async function uploadFile(file: File, folder: string): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  fd.append("folder", folder);
  const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
  if (!res.ok) {
    const { error } = await res.json().catch(() => ({ error: "Upload échoué" }));
    throw new Error(error || "Upload échoué");
  }
  const { url } = await res.json();
  return url as string;
}

export default function ProjectForm({
  initial,
  isNew,
  services,
}: {
  initial: ProjectDoc | null;
  isNew: boolean;
  services: { slug: string; label: string }[];
}) {
  const router = useRouter();
  const [f, setF] = useState<FormState>(() => fromDoc(initial));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploadingMain, setUploadingMain] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);

  const slugPreview = useMemo(
    () => f.slug || slugify(f.name) || "…",
    [f.slug, f.name]
  );

  function set<K extends keyof FormState>(k: K, v: FormState[K]) {
    setF((prev) => ({ ...prev, [k]: v }));
  }

  function onName(v: string) {
    setF((prev) => ({
      ...prev,
      name: v,
      slug: prev.slugTouched ? prev.slug : slugify(v),
    }));
  }

  async function onMainImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingMain(true);
    setError("");
    try {
      const url = await uploadFile(file, `portfolio/${slugPreview}`);
      set("image", url);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUploadingMain(false);
      e.target.value = "";
    }
  }

  async function onGalleryFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    setUploadingGallery(true);
    setError("");
    try {
      const uploaded: GalleryItem[] = [];
      for (const file of files) {
        const url = await uploadFile(file, `portfolio/${slugPreview}/gallery`);
        uploaded.push({ src: url, alt: "", wide: false });
      }
      setF((prev) => ({ ...prev, gallery: [...prev.gallery, ...uploaded] }));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUploadingGallery(false);
      e.target.value = "";
    }
  }

  function updateGallery(i: number, patch: Partial<GalleryItem>) {
    setF((prev) => {
      const g = [...prev.gallery];
      g[i] = { ...g[i], ...patch };
      return { ...prev, gallery: g };
    });
  }
  function moveGallery(i: number, dir: -1 | 1) {
    setF((prev) => {
      const g = [...prev.gallery];
      const j = i + dir;
      if (j < 0 || j >= g.length) return prev;
      [g[i], g[j]] = [g[j], g[i]];
      return { ...prev, gallery: g };
    });
  }
  function removeGallery(i: number) {
    setF((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((_, k) => k !== i),
    }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!f.name.trim()) {
      setError("Le nom est obligatoire.");
      return;
    }
    setSaving(true);
    const payload = toPayload(f);
    const url = isNew
      ? "/api/admin/projects"
      : `/api/admin/projects/${initial!.id}`;
    const method = isNew ? "POST" : "PUT";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSaving(false);
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      const { error: msg } = await res
        .json()
        .catch(() => ({ error: "Enregistrement impossible" }));
      setError(msg || "Enregistrement impossible");
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-8 pb-16">
      {error && (
        <p className="brutal-border bg-red-100 text-red-800 font-bold text-sm p-3">
          {error}
        </p>
      )}

      {/* ── Infos de base ── */}
      <fieldset className="brutal-border bg-white p-5">
        <legend className="font-black px-2">Infos de base</legend>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Nom *</label>
            <input
              className={field}
              value={f.name}
              onChange={(e) => onName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={labelCls}>Slug (URL)</label>
            <input
              className={field}
              value={f.slug}
              onChange={(e) => {
                set("slug", slugify(e.target.value));
                set("slugTouched", true);
              }}
            />
            <p className="mono text-[11px] text-gray-500 mt-1">
              /portfolio/{slugPreview}
            </p>
          </div>
          <div>
            <label className={labelCls}>Service</label>
            <select
              className={field}
              value={f.service}
              onChange={(e) => set("service", e.target.value)}
            >
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Catégorie (affichée)</label>
            <input
              className={field}
              value={f.category}
              onChange={(e) => set("category", e.target.value)}
              placeholder="E-commerce, Plateforme web…"
            />
          </div>
          <div>
            <label className={labelCls}>Type (sous-titre)</label>
            <input
              className={field}
              value={f.type}
              onChange={(e) => set("type", e.target.value)}
              placeholder="Boutique en ligne, SaaS…"
            />
          </div>
          <div>
            <label className={labelCls}>Icône (emoji)</label>
            <input
              className={field}
              value={f.icon}
              onChange={(e) => set("icon", e.target.value)}
              maxLength={4}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>Tagline</label>
            <input
              className={field}
              value={f.tagline}
              onChange={(e) => set("tagline", e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>Description courte</label>
            <textarea
              className={`${field} min-h-[80px]`}
              value={f.description}
              onChange={(e) => set("description", e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>Tags (séparés par des virgules)</label>
            <input
              className={field}
              value={f.tags}
              onChange={(e) => set("tags", e.target.value)}
              placeholder="Next.js, Firebase, Stripe"
            />
          </div>
          <div className="flex items-center gap-3">
            <label className={labelCls + " mb-0"}>Couleur</label>
            <input
              type="color"
              value={f.color}
              onChange={(e) => set("color", e.target.value)}
              className="w-12 h-10 border-2 border-black"
            />
            <input
              className={field + " flex-1"}
              value={f.color}
              onChange={(e) => set("color", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <label className={labelCls + " mb-0"}>Texte sur couleur</label>
            <input
              type="color"
              value={f.textColor}
              onChange={(e) => set("textColor", e.target.value)}
              className="w-12 h-10 border-2 border-black"
            />
          </div>
          <div>
            <label className={labelCls}>Lien aperçu live (iframe)</label>
            <input
              className={field}
              value={f.previewUrl}
              onChange={(e) => set("previewUrl", e.target.value)}
              placeholder="https://…"
            />
          </div>
          <div>
            <label className={labelCls}>Lien externe (bouton)</label>
            <input
              className={field}
              value={f.externalUrl}
              onChange={(e) => set("externalUrl", e.target.value)}
              placeholder="https://…"
            />
          </div>
        </div>
      </fieldset>

      {/* ── Image principale ── */}
      <fieldset className="brutal-border bg-white p-5">
        <legend className="font-black px-2">Image principale</legend>
        <div className="flex items-start gap-4 flex-wrap">
          <div
            className="w-48 h-32 border-2 border-black overflow-hidden flex items-center justify-center text-3xl shrink-0"
            style={{ backgroundColor: f.color }}
          >
            {f.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={f.image}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <span>{f.icon}</span>
            )}
          </div>
          <div className="flex-1 min-w-[200px]">
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/avif"
              onChange={onMainImage}
              className="text-sm"
            />
            {uploadingMain && (
              <p className="text-sm font-bold mt-2">Envoi…</p>
            )}
            {f.image && (
              <button
                type="button"
                onClick={() => set("image", "")}
                className="brutal-border px-3 py-1 text-xs font-bold mt-2 bg-red-100 hover:bg-red-200"
              >
                Retirer l&apos;image
              </button>
            )}
            <p className="mono text-[11px] text-gray-500 mt-2 break-all">
              {f.image}
            </p>
          </div>
        </div>
      </fieldset>

      {/* ── Étude de cas ── */}
      <fieldset className="brutal-border bg-white p-5">
        <legend className="font-black px-2">Étude de cas</legend>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className={labelCls}>Intro longue (texte du hero)</label>
            <textarea
              className={`${field} min-h-[140px]`}
              value={f.caseIntro}
              onChange={(e) => set("caseIntro", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls}>Services (1 par ligne)</label>
            <textarea
              className={`${field} min-h-[120px]`}
              value={f.services}
              onChange={(e) => set("services", e.target.value)}
              placeholder={"Concept\nDéveloppement web\nSEO"}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className={labelCls}>Année</label>
              <input
                className={field}
                value={f.year}
                onChange={(e) => set("year", e.target.value)}
                placeholder="2024"
              />
            </div>
            <div>
              <label className={labelCls}>Rôle</label>
              <input
                className={field}
                value={f.role}
                onChange={(e) => set("role", e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className={labelCls}>Partenaire — nom</label>
            <input
              className={field}
              value={f.partnerName}
              onChange={(e) => set("partnerName", e.target.value)}
            />
          </div>
          <div>
            <label className={labelCls}>Partenaire — URL</label>
            <input
              className={field}
              value={f.partnerUrl}
              onChange={(e) => set("partnerUrl", e.target.value)}
            />
          </div>
        </div>
      </fieldset>

      {/* ── Galerie ── */}
      <fieldset className="brutal-border bg-white p-5">
        <legend className="font-black px-2">
          Galerie ({f.gallery.length})
        </legend>
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp,image/avif"
          multiple
          onChange={onGalleryFiles}
          className="text-sm mb-4"
        />
        {uploadingGallery && (
          <p className="text-sm font-bold mb-3">Envoi des images…</p>
        )}
        <ul className="flex flex-col gap-3">
          {f.gallery.map((g, i) => (
            <li
              key={i}
              className="border-2 border-black p-3 flex gap-3 items-start flex-wrap"
            >
              <div
                className="w-32 h-20 border-2 border-black overflow-hidden shrink-0"
                style={{ backgroundColor: f.color }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.src}
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <input
                  className={field}
                  value={g.alt}
                  onChange={(e) => updateGallery(i, { alt: e.target.value })}
                  placeholder="Texte alternatif (description de la capture)"
                />
                <label className="flex items-center gap-2 text-xs font-bold mt-2">
                  <input
                    type="checkbox"
                    checked={!!g.wide}
                    onChange={(e) =>
                      updateGallery(i, { wide: e.target.checked })
                    }
                  />
                  Format large
                </label>
              </div>
              <div className="flex flex-col gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => moveGallery(i, -1)}
                  className="brutal-border px-2 py-1 text-xs font-bold"
                >
                  ↑
                </button>
                <button
                  type="button"
                  onClick={() => moveGallery(i, 1)}
                  className="brutal-border px-2 py-1 text-xs font-bold"
                >
                  ↓
                </button>
                <button
                  type="button"
                  onClick={() => removeGallery(i)}
                  className="brutal-border px-2 py-1 text-xs font-bold bg-red-100"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </fieldset>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving || uploadingMain || uploadingGallery}
          className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 font-bold disabled:opacity-50"
        >
          {saving ? "Enregistrement…" : isNew ? "Créer le projet" : "Enregistrer"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="brutal-border px-6 py-3 font-bold hover:bg-gray-100"
        >
          Annuler
        </button>
      </div>

      {isNew && (
        <p className="text-xs text-gray-500">
          Après création : pensez à demander l&apos;indexation de la nouvelle
          page dans Google Search Console.
        </p>
      )}
    </form>
  );
}
