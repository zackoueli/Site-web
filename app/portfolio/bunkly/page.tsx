import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { getProjectBySlug } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Bunkly — Plateforme de livrets d'accueil digitaux | BreizhApp",
  description:
    "Bunkly : plateforme SaaS de création de livrets d'accueil digitaux pour hôtes. Traduction automatique, templates design, dashboard. Réalisé par BreizhApp.",
  alternates: { canonical: "https://breizhapp.tech/portfolio/bunkly" },
};

export default function BunklyPortfolioPage() {
  const project = getProjectBySlug("bunkly");
  if (!project) notFound();
  return <ProjectCaseStudy project={project} />;
}
