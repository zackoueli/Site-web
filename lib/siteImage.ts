/**
 * Ramène les images du portfolio sur breizhapp.tech pour qu'elles soient
 * indexées dans Google Images au nom du site (et non de firebasestorage.googleapis.com).
 *
 * - Bucket principal (uploads /admin) → /media/<chemin> servi par app/media/[...path]
 * - Anciens buckets des projets clients → copies locales dans /public/portfolio
 */

const FIREBASE_PREFIX = "https://firebasestorage.googleapis.com/v0/b/";

/** Préfixes Storage exposés publiquement par /media. */
export const MEDIA_PREFIXES = ["portfolio/"];

/** Captures des anciens buckets clients, copiées en WebP dans /public. Clé : "<bucket>/<objet>". */
const LEGACY: Record<string, string> = {
  "livret-d-accueil-b98ba.firebasestorage.app/image 22.png": "/portfolio/bunkly/vue-d-ensemble-des-livrets-statut-de-publication-et-statistiques.webp",
  "livret-d-accueil-b98ba.firebasestorage.app/image 23.png": "/portfolio/bunkly/edition-d-un-module-avec-apercu-mobile-en-temps-reel.webp",
  "livret-d-accueil-b98ba.firebasestorage.app/image 24.png": "/portfolio/bunkly/modules-du-livret-reorganisables-en-glisser-deposer.webp",
  "livret-d-accueil-b98ba.firebasestorage.app/image 25.png": "/portfolio/bunkly/traduction-automatique-du-livret-en-plusieurs-langues.webp",
  "livret-d-accueil-b98ba.firebasestorage.app/image 26.png": "/portfolio/bunkly/import-ia-depuis-une-annonce-airbnb-booking-ou-vrbo.webp",
  "fir-boutique-754bb.firebasestorage.app/image 171.png": "/portfolio/histoire-eternelle/dashboard-admin-chiffre-d-affaires-commandes-et-produits-actifs.webp",
  "fir-boutique-754bb.firebasestorage.app/image 231.png": "/portfolio/histoire-eternelle/gestion-des-produits-ajout-prix-et-disponibilite.webp",
  "fir-boutique-754bb.firebasestorage.app/Group 256.png": "/portfolio/histoire-eternelle/suivi-et-traitement-des-commandes-en-temps-reel.webp",
  "fir-boutique-754bb.firebasestorage.app/Group 257.png": "/portfolio/histoire-eternelle/codes-promo-parametrables.webp",
  "fir-boutique-754bb.firebasestorage.app/image 235.png": "/portfolio/histoire-eternelle/moderation-des-avis-clients-avant-publication.webp",
};

/** URL d'image servie depuis breizhapp.tech quand c'est possible, sinon l'URL d'origine. */
export function toSiteImage(url: string): string;
export function toSiteImage(url: string | undefined): string | undefined;
export function toSiteImage(url: string | undefined) {
  if (!url?.startsWith(FIREBASE_PREFIX)) return url;
  const match = url.slice(FIREBASE_PREFIX.length).match(/^([^/]+)\/o\/([^?]+)/);
  if (!match) return url;
  const [, bucket, encodedPath] = match;
  const objectPath = decodeURIComponent(encodedPath);

  const legacy = LEGACY[`${bucket}/${objectPath}`];
  if (legacy) return legacy;

  if (bucket === process.env.FIREBASE_STORAGE_BUCKET && MEDIA_PREFIXES.some((p) => objectPath.startsWith(p))) {
    return `/media/${objectPath.split("/").map(encodeURIComponent).join("/")}`;
  }
  return url;
}
