import "server-only";
import { getDb } from "@/lib/firebaseAdmin";
import { projects as SEED, type Project } from "@/lib/portfolio";

const COLLECTION = "projects";

/** Doc Firestore = Project + métadonnées de tri/dates. */
export type ProjectDoc = Project & {
  id: string;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
};

/** Normalise un doc Firestore en Project sûr (valeurs par défaut). */
function normalize(id: string, data: Record<string, unknown>): ProjectDoc {
  const d = data as Partial<ProjectDoc>;
  return {
    id,
    slug: d.slug ?? id,
    name: d.name ?? "Sans titre",
    service: d.service ?? "site-web",
    tagline: d.tagline ?? "",
    category: d.category ?? "",
    type: d.type ?? "",
    color: d.color ?? "#0A0A0A",
    textColor: d.textColor ?? "#FFFBF0",
    badge: d.badge ?? "",
    icon: d.icon ?? "✦",
    description: d.description ?? "",
    tags: Array.isArray(d.tags) ? d.tags : [],
    image: d.image || undefined,
    previewUrl: d.previewUrl || undefined,
    externalUrl: d.externalUrl || undefined,
    caseIntro: d.caseIntro || undefined,
    services: Array.isArray(d.services) ? d.services : undefined,
    year: d.year || undefined,
    role: d.role || undefined,
    partner: d.partner && d.partner.name ? d.partner : undefined,
    gallery: Array.isArray(d.gallery) ? d.gallery : undefined,
    order: typeof d.order === "number" ? d.order : undefined,
    createdAt: d.createdAt,
    updatedAt: d.updatedAt,
  };
}

/** Seed converti en ProjectDoc, utilisé tant que Firestore est vide ou indisponible. */
function seedDocs(): ProjectDoc[] {
  return SEED.map((p, i) => ({ ...p, id: p.slug, order: i }));
}

/**
 * Tous les projets, triés par `order` puis nom.
 * Lit Firestore ; retombe sur le seed si la collection est vide ou en erreur.
 */
export async function getAllProjects(): Promise<ProjectDoc[]> {
  try {
    const snap = await getDb().collection(COLLECTION).get();
    if (snap.empty) return seedDocs();
    return snap.docs
      .map((doc) => normalize(doc.id, doc.data()))
      .sort(
        (a, b) =>
          (a.order ?? 999) - (b.order ?? 999) || a.name.localeCompare(b.name)
      );
  } catch (err) {
    console.error("[portfolioStore] lecture Firestore échouée, fallback seed:", err);
    return seedDocs();
  }
}

export async function getProjectBySlug(
  slug: string
): Promise<ProjectDoc | null> {
  const all = await getAllProjects();
  return all.find((p) => p.slug === slug) ?? null;
}

export async function getProjectsForService(
  service: string
): Promise<ProjectDoc[]> {
  const all = await getAllProjects();
  return all.filter((p) => p.service === service);
}

// ── Écritures (admin) ──────────────────────────────────────────────

export async function getProjectById(id: string): Promise<ProjectDoc | null> {
  const doc = await getDb().collection(COLLECTION).doc(id).get();
  if (!doc.exists) return null;
  return normalize(doc.id, doc.data() as Record<string, unknown>);
}

export async function createProject(
  data: Partial<Project> & { order?: number }
): Promise<string> {
  const now = new Date().toISOString();
  const ref = await getDb()
    .collection(COLLECTION)
    .add({ ...data, createdAt: now, updatedAt: now });
  return ref.id;
}

export async function updateProject(
  id: string,
  data: Partial<Project> & { order?: number }
): Promise<void> {
  await getDb()
    .collection(COLLECTION)
    .doc(id)
    .set({ ...data, updatedAt: new Date().toISOString() }, { merge: true });
}

export async function deleteProject(id: string): Promise<void> {
  await getDb().collection(COLLECTION).doc(id).delete();
}

/** Copie le seed dans Firestore si la collection est vide (migration one-shot). */
export async function seedIfEmpty(): Promise<number> {
  const db = getDb();
  const snap = await db.collection(COLLECTION).limit(1).get();
  if (!snap.empty) return 0;
  const now = new Date().toISOString();
  const batch = db.batch();
  SEED.forEach((p, i) => {
    const ref = db.collection(COLLECTION).doc(p.slug);
    batch.set(ref, { ...p, order: i, createdAt: now, updatedAt: now });
  });
  await batch.commit();
  return SEED.length;
}
