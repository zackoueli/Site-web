import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getAllProjects,
  createProject,
} from "@/lib/portfolioStore";

// L'auth est assurée par middleware.ts pour tout /api/admin/*

export async function GET() {
  const items = await getAllProjects();
  return NextResponse.json({ items });
}

export async function POST(req: Request) {
  const data = await req.json();

  if (!data.name || !data.slug) {
    return NextResponse.json(
      { error: "Nom et slug obligatoires" },
      { status: 400 }
    );
  }

  const all = await getAllProjects();
  if (all.some((p) => p.slug === data.slug)) {
    return NextResponse.json(
      { error: "Ce slug existe déjà" },
      { status: 409 }
    );
  }

  const order =
    typeof data.order === "number"
      ? data.order
      : Math.max(0, ...all.map((p) => p.order ?? 0)) + 1;

  const id = await createProject({ ...data, order });

  revalidatePath("/portfolio");
  revalidatePath("/portfolio/[slug]", "page");
  revalidatePath("/sitemap.xml");

  return NextResponse.json({ id });
}
