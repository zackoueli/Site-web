import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getBucket } from "@/lib/firebaseAdmin";

const MAX_BYTES = 8 * 1024 * 1024; // 8 Mo
const ALLOWED = ["image/png", "image/jpeg", "image/webp", "image/avif"];

// Auth via middleware.ts

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file");
  const folder = (form.get("folder") as string) || "portfolio";

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Aucun fichier" }, { status: 400 });
  }
  if (!ALLOWED.includes(file.type)) {
    return NextResponse.json(
      { error: "Format non supporté (PNG, JPEG, WebP, AVIF)" },
      { status: 415 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "Fichier trop lourd (max 8 Mo)" },
      { status: 413 }
    );
  }

  const ext = file.type.split("/")[1].replace("jpeg", "jpg");
  const safeFolder = folder.replace(/[^a-z0-9/_-]/gi, "");
  const path = `${safeFolder}/${Date.now()}-${randomUUID().slice(0, 8)}.${ext}`;

  try {
    const bucket = getBucket();
    const blob = bucket.file(path);
    const buffer = Buffer.from(await file.arrayBuffer());
    const token = randomUUID();

    await blob.save(buffer, {
      contentType: file.type,
      metadata: {
        cacheControl: "public, max-age=31536000, immutable",
        metadata: { firebaseStorageDownloadTokens: token },
      },
    });

    // URL de téléchargement publique style Firebase (pas besoin de rendre le bucket public)
    const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(
      path
    )}?alt=media&token=${token}`;

    return NextResponse.json({ url, path });
  } catch (err) {
    const e = err as Error & { code?: number };
    console.error("[upload] Storage error:", e);
    return NextResponse.json(
      {
        error:
          "Échec de l'envoi vers Firebase Storage. Vérifiez que Storage est activé et que FIREBASE_STORAGE_BUCKET est correct.",
        detail: e.message,
        code: e.code ?? null,
      },
      { status: 500 }
    );
  }
}
