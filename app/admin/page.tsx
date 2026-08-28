import Link from "next/link";
import { getAllProjects } from "@/lib/portfolioStore";
import AdminProjectList from "@/components/admin/AdminProjectList";

export const dynamic = "force-dynamic";

export default async function AdminHome() {
  const projects = await getAllProjects();
  const usingSeed = projects.every((p) => !p.updatedAt); // aucun doc Firestore encore

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <h1 className="text-2xl font-black">Projets ({projects.length})</h1>
        <Link
          href="/admin/projets/new"
          className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-4 py-2 font-bold"
        >
          + Nouveau projet
        </Link>
      </div>

      <AdminProjectList projects={projects} usingSeed={usingSeed} />
    </div>
  );
}
