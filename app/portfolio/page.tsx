import PortfolioGrid from "@/components/PortfolioGrid";
import { getAllProjects } from "@/lib/portfolioStore";

// Métadonnées SEO dans app/portfolio/layout.tsx
// Rendu dynamique : la liste est lue depuis Firestore (édité via /admin)
export const dynamic = "force-dynamic";

export default async function PortfolioPage() {
  const projects = await getAllProjects();
  return <PortfolioGrid projects={projects} />;
}
