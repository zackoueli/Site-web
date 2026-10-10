import { NextResponse } from "next/server";
import { generateAndSaveReport } from "@/lib/seoReport";

// L'auth est assurée par proxy.ts pour tout /api/admin/*

export const maxDuration = 60;

/** Régénère le rapport SEO à la demande (bouton « Actualiser » de /admin/seo). */
export async function POST() {
  try {
    const report = await generateAndSaveReport();
    return NextResponse.json({ id: report.id });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
