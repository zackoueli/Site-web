import Link from "next/link";
import Image from "next/image";
import { resolveTaxonomySlug, type ServiceSlug } from "@/lib/taxonomy";

/**
 * Bandeau « Découvrez mes services de … » inséré dans les articles de blog :
 * photo d'une réalisation à gauche, accroche et bouton vers le service (ou secteur) de l'article.
 */

const BANNERS: Record<ServiceSlug, { title: string; text: string; image: string; alt: string }> = {
  "application-mobile": {
    title: "Découvrez mes services de création d'application mobile",
    text: "Design, interface utilisateur, back-office, compte utilisateur, API... je mets en place vos idées.",
    image: "/services/application-mobile/app-mobile-1.jpg",
    alt: "Application mobile développée par BreizhApp, affichée sur un iPhone",
  },
  "site-web": {
    title: "Découvrez mes services de création de site web",
    text: "Un site sur mesure, rapide et pensé pour être trouvé sur Google.",
    image: "/portfolio/demo-paysagiste.png",
    alt: "Site vitrine Paradis Vert réalisé par BreizhApp",
  },
  ecommerce: {
    title: "Découvrez mes services de création de boutique en ligne",
    text: "Votre boutique sur mesure, sans abonnement ni commission sur vos ventes.",
    image: "/services/histoire-eternelle-hero.png",
    alt: "Boutique en ligne Histoire Eternelle réalisée par BreizhApp",
  },
  "web-app": {
    title: "Découvrez mes services de développement de web app",
    text: "Votre outil métier ou back-office, construit autour de votre activité.",
    image: "/portfolio/bunkly.png",
    alt: "Plateforme Bunkly développée par BreizhApp",
  },
};

/** Photo plus parlante pour certains secteurs. */
const SECTOR_IMAGE: Record<string, string> = {
  hotel: "/services/application-mobile/app-mobile-2.jpg",
};

export default function BlogServiceShowcase({ service }: { service: string }) {
  const taxon = resolveTaxonomySlug(service);
  if (!taxon) return null;

  const banner = BANNERS[taxon.service];
  const isSector = taxon.href.includes("/secteur/");
  const image = SECTOR_IMAGE[service] ?? banner.image;

  return (
    <Link
      href={taxon.href}
      className="group my-6 brutal-border brutal-shadow bg-[#0A0A0A] text-[#FFFBF0] overflow-hidden grid sm:grid-cols-[2fr_3fr] hover:-translate-y-0.5 transition-transform"
    >
      <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[190px] border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-black bg-white">
        <Image src={image} alt={banner.alt} fill sizes="(min-width: 640px) 290px, 100vw" className="object-cover" />
      </div>
      <div className="p-5 flex flex-col justify-center gap-2">
        <p className="text-lg font-bold leading-snug">{banner.title}</p>
        <p className="text-sm text-gray-400">
          {banner.text}
          {isSector && <> Offre dédiée : {taxon.label.toLowerCase()}.</>}
        </p>
        <span className="mt-2 inline-flex self-start brutal-btn bg-[#FFE234] text-[#0A0A0A] px-4 py-2 text-sm font-bold group-hover:bg-white transition-colors">
          {isSector ? `Voir l'offre ${taxon.label}` : "Découvrir"} →
        </span>
      </div>
    </Link>
  );
}
