import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { getAllProjects, getProjectBySlug } from "@/lib/portfolioStore";

// Rendu dynamique : contenu lu depuis Firestore (édité via /admin)
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProjectBySlug(slug);
  if (!p) {
    return { title: "Projet introuvable | BreizhApp" };
  }
  const desc =
    (p.caseIntro ?? p.description ?? "").slice(0, 300) ||
    `Étude de cas : ${p.name} par BreizhApp, développeur freelance à Brest.`;
  const url = `https://breizhapp.tech/portfolio/${p.slug}`;
  return {
    title: `${p.name} — ${p.category || "Réalisation"} | BreizhApp`,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${p.name} — ${p.category || "Réalisation"}`,
      description: desc,
      url,
      type: "article",
      images: p.image
        ? [{ url: p.image.startsWith("http") ? p.image : `https://breizhapp.tech${p.image}` }]
        : [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [project, allProjects] = await Promise.all([
    getProjectBySlug(slug),
    getAllProjects(),
  ]);
  if (!project) notFound();
  return <ProjectCaseStudy project={project} allProjects={allProjects} />;
}
