import { NextResponse } from "next/server";
import { generateAndSaveReport } from "@/lib/seoReport";

export const maxDuration = 60;

/** Rapport SEO hebdomadaire, appelé chaque lundi par le cron Vercel (vercel.json). */
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  try {
    const report = await generateAndSaveReport();
    return NextResponse.json({ id: report.id });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
