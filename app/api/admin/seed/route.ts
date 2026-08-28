import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { seedIfEmpty } from "@/lib/portfolioStore";

// Migration one-shot : copie les 3 projets du fichier seed dans Firestore
// si la collection est vide. Sans effet ensuite. Auth via middleware.ts.

export async function POST() {
  const count = await seedIfEmpty();
  if (count > 0) {
    revalidatePath("/portfolio");
    revalidatePath("/portfolio/[slug]", "page");
  }
  return NextResponse.json({ inserted: count });
}
