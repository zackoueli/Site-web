import "server-only";

/**
 * Pull requests d'articles ouvertes par la routine Claude (branches claude/article-*).
 * Permet de relire l'aperçu Vercel et de publier depuis /admin/seo, sans passer par GitHub.
 * Token : GITHUB_TOKEN, fine-grained, limité au repo, droits Pull requests + Contents en écriture.
 */

const REPO = process.env.GITHUB_REPO || "zackoueli/Site-web";
const BRANCH_PREFIX = "claude/article-";

export type ArticleDraft = {
  number: number;
  title: string;
  body: string;
  branch: string;
  sha: string;
  url: string;
  createdAt: string;
  /** Aperçu Vercel du commit, s'il est déployé. */
  previewUrl: string | null;
  /** "success" quand le build Vercel de la PR est passé. */
  buildState: "success" | "pending" | "failure" | "unknown";
};

export function githubConfigured() {
  return !!process.env.GITHUB_TOKEN;
}

async function gh(path: string, init: RequestInit = {}) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN manquant.");
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init.body ? { "Content-Type": "application/json" } : {}),
    },
    cache: "no-store",
  });
  if (!res.ok) {
    const detail = await res.json().catch(() => ({}));
    throw new Error(`GitHub ${res.status} : ${detail.message ?? res.statusText}`);
  }
  return res.status === 204 ? null : res.json();
}

/** Dernier déploiement Vercel du commit : URL d'aperçu et état du build. */
async function deploymentFor(sha: string): Promise<Pick<ArticleDraft, "previewUrl" | "buildState">> {
  const deployments = await gh(`/repos/${REPO}/deployments?sha=${sha}&per_page=5`);
  if (!deployments.length) return { previewUrl: null, buildState: "pending" };
  const statuses = await gh(`/repos/${REPO}/deployments/${deployments[0].id}/statuses?per_page=1`);
  const s = statuses[0];
  if (!s) return { previewUrl: null, buildState: "pending" };
  const buildState =
    s.state === "success" ? "success" : s.state === "failure" || s.state === "error" ? "failure" : "pending";
  return { previewUrl: s.environment_url || s.target_url || null, buildState };
}

export async function listArticleDrafts(): Promise<ArticleDraft[]> {
  const pulls = await gh(`/repos/${REPO}/pulls?state=open&base=main&per_page=30`);
  const drafts = pulls.filter((p: { head: { ref: string } }) => p.head.ref.startsWith(BRANCH_PREFIX));
  return Promise.all(
    drafts.map(async (p: {
      number: number; title: string; body: string | null; html_url: string; created_at: string;
      head: { ref: string; sha: string };
    }) => {
      const deployment = await deploymentFor(p.head.sha).catch(() => ({ previewUrl: null, buildState: "unknown" as const }));
      return {
        number: p.number,
        title: p.title,
        body: p.body ?? "",
        branch: p.head.ref,
        sha: p.head.sha,
        url: p.html_url,
        createdAt: p.created_at,
        ...deployment,
      };
    })
  );
}

async function getDraft(number: number): Promise<ArticleDraft> {
  const draft = (await listArticleDrafts()).find((d) => d.number === number);
  if (!draft) throw new Error("Cette pull request n'est pas un article en attente.");
  return draft;
}

/**
 * Fusionne la PR sur main (Vercel met alors en production).
 * Refusé tant que le build Vercel de l'aperçu n'a pas réussi. Le sha relu est
 * transmis à GitHub : si la branche a bougé depuis la relecture, la fusion échoue.
 */
export async function publishDraft(number: number, reviewedSha: string) {
  const draft = await getDraft(number);
  if (draft.sha !== reviewedSha) throw new Error("L'article a changé depuis votre relecture : rechargez la page.");
  if (draft.buildState !== "success") throw new Error("Le build de l'aperçu n'a pas réussi : publication bloquée.");
  await gh(`/repos/${REPO}/pulls/${number}/merge`, {
    method: "PUT",
    body: JSON.stringify({ merge_method: "squash", sha: reviewedSha }),
  });
  await gh(`/repos/${REPO}/git/refs/heads/${draft.branch}`, { method: "DELETE" }).catch(() => null);
}

/** Ferme la PR sans publier, en laissant la raison en commentaire. */
export async function rejectDraft(number: number, reason: string) {
  const draft = await getDraft(number);
  if (reason) {
    await gh(`/repos/${REPO}/issues/${number}/comments`, {
      method: "POST",
      body: JSON.stringify({ body: `Refusé depuis l'admin : ${reason}` }),
    });
  }
  await gh(`/repos/${REPO}/pulls/${number}`, { method: "PATCH", body: JSON.stringify({ state: "closed" }) });
  await gh(`/repos/${REPO}/git/refs/heads/${draft.branch}`, { method: "DELETE" }).catch(() => null);
}
