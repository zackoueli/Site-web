import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { getProjectBySlug } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Paradis Vert — Site web professionnel artisan | BreizhApp",
  description:
    "Étude de cas : création d'un site web professionnel pour Paradis Vert. Galerie réalisations, demande de devis en ligne, gestion des services et back-office admin via Firebase.",
  alternates: { canonical: "https://breizhapp.tech/portfolio/demo-paysagiste" },
};

export default function DemoPaysagistePage() {
  const project = getProjectBySlug("demo-paysagiste");
  if (!project) notFound();
  return <ProjectCaseStudy project={project} />;
}
