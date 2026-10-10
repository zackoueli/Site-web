import { NextResponse } from "next/server";
import { publishDraft, rejectDraft } from "@/lib/github";

// L'auth est assurée par proxy.ts pour tout /api/admin/*

/** Publie (fusion sur main) ou refuse un article rédigé par la routine. */
export async function POST(req: Request, { params }: { params: Promise<{ number: string }> }) {
  const number = Number((await params).number);
  const { action, sha, reason } = await req.json();
  if (!Number.isInteger(number)) {
    return NextResponse.json({ error: "Numéro de PR invalide." }, { status: 400 });
  }

  try {
    if (action === "publish") {
      if (typeof sha !== "string") return NextResponse.json({ error: "Commit relu manquant." }, { status: 400 });
      await publishDraft(number, sha);
    } else if (action === "reject") {
      await rejectDraft(number, typeof reason === "string" ? reason.trim().slice(0, 1000) : "");
    } else {
      return NextResponse.json({ error: "Action inconnue." }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
