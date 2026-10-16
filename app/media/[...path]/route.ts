import sharp from "sharp";
import { getBucket } from "@/lib/firebaseAdmin";
import { MEDIA_PREFIXES } from "@/lib/siteImage";

/**
 * Sert les images du portfolio (Firebase Storage) depuis breizhapp.tech,
 * pour qu'elles soient indexées dans Google Images au nom du site.
 * Converties en WebP et mises en cache CDN (noms de fichiers uniques → immuables).
 */
export async function GET(_req: Request, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const objectPath = path.join("/");

  if (
    !MEDIA_PREFIXES.some((p) => objectPath.startsWith(p)) ||
    objectPath.includes("..") ||
    !/\.(png|jpe?g|webp|avif)$/i.test(objectPath)
  ) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const [buffer] = await getBucket().file(objectPath).download();
    const webp = await sharp(buffer).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
    return new Response(new Uint8Array(webp), {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, s-maxage=31536000, immutable",
      },
    });
  } catch (err) {
    const e = err as { code?: number };
    if (e.code === 404) return new Response("Not found", { status: 404 });
    console.error("[media] lecture Storage échouée:", err);
    return new Response("Erreur", { status: 500 });
  }
}
