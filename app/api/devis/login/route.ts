import { NextResponse } from "next/server";
import { createSession } from "@/lib/session";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (!password || password !== process.env.DEVIS_PASSWORD) {
    return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 });
  }

  await createSession();
  return NextResponse.json({ ok: true });
}
