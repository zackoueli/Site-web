import { NextResponse } from "next/server";
import { cadenceBlocker, existingPagesFor, fireArticleRoutine } from "@/lib/articleRoutine";

// L'auth est assurée par proxy.ts pour tout /api/admin/*

/**
 * Lance la rédaction d'un article par la routine Claude.
 * Deux garde-fous avant l'envoi : la cadence de publication, puis la cannibalisation
 * (une page reçoit déjà des impressions sur ce mot-clé). Le second peut être levé
 * explicitement avec `force: true` après avoir vu les pages concernées.
 */
export async function POST(req: Request) {
  const { keyword, notes, force } = await req.json();
  const kw = typeof keyword === "string" ? keyword.trim() : "";
  if (kw.length < 3 || kw.length > 120) {
    return NextResponse.json({ error: "Mot-clé manquant ou invalide." }, { status: 400 });
  }

  try {
    const blocked = await cadenceBlocker();
    if (blocked) return NextResponse.json({ error: blocked }, { status: 429 });

    if (!force) {
      const existing = (await existingPagesFor(kw)).filter((p) => p.impressions > 0);
      if (existing.length) return NextResponse.json({ conflict: existing }, { status: 409 });
    }

    const generation = await fireArticleRoutine(kw, typeof notes === "string" ? notes.trim().slice(0, 1000) : "");
    return NextResponse.json({ generation });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
