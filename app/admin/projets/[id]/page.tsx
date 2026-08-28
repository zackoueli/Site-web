import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectById } from "@/lib/portfolioStore";
import { SERVICES } from "@/lib/taxonomy";
import ProjectForm from "@/components/admin/ProjectForm";

export const dynamic = "force-dynamic";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const isNew = id === "new";
  const project = isNew ? null : await getProjectById(id);
  if (!isNew && !project) notFound();

  const services = SERVICES.map((s) => ({ slug: s.slug, label: s.label }));

  return (
    <div>
      <Link href="/admin" className="text-sm font-bold hover:underline">
        ← Retour à la liste
      </Link>
      <h1 className="text-2xl font-black mt-3 mb-6">
        {isNew ? "Nouveau projet" : `Éditer — ${project!.name}`}
      </h1>
      <ProjectForm
        initial={project}
        isNew={isNew}
        services={services}
      />
    </div>
  );
}
