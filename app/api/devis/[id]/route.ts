import { NextResponse } from "next/server";
import { getDb } from "@/lib/firebaseAdmin";
import type { DevisData } from "@/components/DevisPDF";

const COLLECTION = "devis";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const db = getDb();
  const doc = await db.collection(COLLECTION).doc(id).get();

  if (!doc.exists) {
    return NextResponse.json({ error: "Devis introuvable" }, { status: 404 });
  }

  return NextResponse.json({ id: doc.id, ...doc.data() });
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data: DevisData = await req.json();

  if (!data.numero || !data.client?.nom) {
    return NextResponse.json({ error: "Données incomplètes" }, { status: 400 });
  }

  const db = getDb();
  const docRef = db.collection(COLLECTION).doc(id);
  const existing = await docRef.get();

  if (!existing.exists) {
    return NextResponse.json({ error: "Devis introuvable" }, { status: 404 });
  }

  await docRef.update({ ...data, updatedAt: new Date().toISOString() });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const db = getDb();
  await db.collection(COLLECTION).doc(id).delete();
  return NextResponse.json({ ok: true });
}
