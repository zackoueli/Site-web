import { NextResponse } from "next/server";
import { getDb } from "@/lib/firebaseAdmin";
import type { DevisData } from "@/components/DevisPDF";

const COLLECTION = "devis";

export async function GET() {
  const db = getDb();
  const snapshot = await db.collection(COLLECTION).orderBy("updatedAt", "desc").get();
  const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return NextResponse.json({ items });
}

export async function POST(req: Request) {
  const data: DevisData = await req.json();

  if (!data.numero || !data.client?.nom) {
    return NextResponse.json({ error: "Données incomplètes" }, { status: 400 });
  }

  const db = getDb();
  const now = new Date().toISOString();
  const docRef = await db.collection(COLLECTION).add({
    ...data,
    createdAt: now,
    updatedAt: now,
  });

  return NextResponse.json({ id: docRef.id });
}
