import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getProjectById,
  updateProject,
  deleteProject,
} from "@/lib/portfolioStore";

function revalidateAll() {
  revalidatePath("/portfolio");
  revalidatePath("/portfolio/[slug]", "page");
  revalidatePath("/sitemap.xml");
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) {
    return NextResponse.json({ error: "Projet introuvable" }, { status: 404 });
  }
  return NextResponse.json(project);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await req.json();

  if (!data.name || !data.slug) {
    return NextResponse.json(
      { error: "Nom et slug obligatoires" },
      { status: 400 }
    );
  }

  const existing = await getProjectById(id);
  if (!existing) {
    return NextResponse.json({ error: "Projet introuvable" }, { status: 404 });
  }

  await updateProject(id, data);
  revalidateAll();
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await deleteProject(id);
  revalidateAll();
  return NextResponse.json({ ok: true });
}
