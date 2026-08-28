import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { getProjectBySlug } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Histoire Eternelle — Boutique e-commerce bijoux | BreizhApp",
  description:
    "Étude de cas : création d'une boutique e-commerce sur mesure pour Histoire Eternelle - L'Atelier d'Anaïs. Catalogue bijoux, panier, paiement Stripe, espace client, panel admin.",
  alternates: { canonical: "https://breizhapp.tech/portfolio/histoire-eternelle" },
};

export default function HistoireEternellePage() {
  const project = getProjectBySlug("histoire-eternelle");
  if (!project) notFound();
  return <ProjectCaseStudy project={project} />;
}
