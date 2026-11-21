import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },
    ],
  },
  // Pages légales de l'app BreizhApp Games : l'app pointe vers les URLs en .html
  async rewrites() {
    return [
      { source: "/games/confidentialite.html", destination: "/games/confidentialite" },
      { source: "/games/conditions.html", destination: "/games/conditions" },
      { source: "/games/support.html", destination: "/games/support" },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.breizhapp.tech" }],
        destination: "https://breizhapp.tech/:path*",
        permanent: true,
      },
      {
        source: "/devis",
        destination: "/admin/devis",
        permanent: false,
      },
      {
        source: "/portfolio/forno-pizzeria",
        destination: "/portfolio/bunkly",
        permanent: true,
      },
      {
        source: "/blog/comment-fid%C3%A9liser-clients-application-mobile",
        destination: "/blog/comment-fideliser-clients-application-mobile",
        permanent: true,
      },
      {
        source: "/blog/creation-site-pizzeria-brest",
        destination: "/blog/astuces-site-web-pizzeria",
        permanent: true,
      },
      {
        source: "/blog/planity-tarif-prix-abonnement-2025",
        destination: "/blog/cout-reel-planity",
        permanent: true,
      },
      {
        source: "/blog/wix-tarif-prix-abonnement-2025",
        destination: "/blog/cout-reel-site-wix",
        permanent: true,
      },
      {
        source: "/blog/shopify-tarif-prix-abonnement-2025",
        destination: "/blog/cout-reel-site-shopify",
        permanent: true,
      },
      {
        source: "/blog/creation-application-mobile-brest",
        destination: "/blog/application-mobile-brest",
        permanent: true,
      },
      {
        source: "/blog/developpeur-freelance-application-mobile-brest",
        destination: "/blog/application-mobile-brest",
        permanent: true,
      },
      {
        source: "/blog/developpeur-mobile-brest",
        destination: "/blog/application-mobile-brest",
        permanent: true,
      },
      {
        source: "/blog/application-mobile-boutique-vente-en-ligne",
        destination: "/blog/application-mobile-boutique-en-ligne",
        permanent: true,
      },
      {
        source: "/blog/je-veux-creer-une-application-mobile",
        destination: "/blog/comment-creer-une-application-mobile",
        permanent: true,
      },
      // Fusion des articles en doublon (anti-cannibalisation, sept. 2026)
      {
        source: "/blog/application-mobile-coiffeur-salon",
        destination: "/blog/application-mobile-coiffeur",
        permanent: true,
      },
      {
        source: "/blog/application-mobile-fidelite-clients",
        destination: "/blog/comment-fideliser-clients-application-mobile",
        permanent: true,
      },
      {
        source: "/blog/application-mobile-restaurant-bretagne",
        destination: "/blog/application-mobile-restaurant",
        permanent: true,
      },
      {
        source: "/blog/creation-application-mobile-bretagne",
        destination: "/blog/developpeur-application-mobile-bretagne",
        permanent: true,
      },
      {
        source: "/blog/developpeur-application-mobile-finistere",
        destination: "/blog/developpeur-application-mobile-bretagne",
        permanent: true,
      },
      {
        source: "/blog/application-mobile-pas-chere",
        destination: "/blog/combien-coute-application-mobile",
        permanent: true,
      },
      {
        source: "/blog/creer-application-mobile-sans-coder",
        destination: "/blog/no-code-vs-developpeur",
        permanent: true,
      },
      {
        source: "/blog/j-ai-une-idee-d-application-mobile",
        destination: "/blog/comment-creer-une-application-mobile",
        permanent: true,
      },
      {
        source: "/blog/faire-developper-application-mobile",
        destination: "/blog/comment-creer-une-application-mobile",
        permanent: true,
      },
      // Slugs sans année (évite un contenu qui paraît daté dans Google)
      {
        source: "/blog/squarespace-tarif-prix-2025",
        destination: "/blog/squarespace-tarif-prix",
        permanent: true,
      },
      {
        source: "/blog/comparatif-createurs-site-web-prix-2025",
        destination: "/blog/tarif-creation-site-internet",
        permanent: true,
      },
      {
        source: "/blog/tarif-creation-site-internet-2025",
        destination: "/blog/tarif-creation-site-internet",
        permanent: true,
      },
      {
        source: "/services/plateforme",
        destination: "/services/web-app",
        permanent: true,
      },
      // Fusions d'articles du 2026-11-21 (pages sans trafic regroupées dans l'article le plus complet)
      ...([
        ["comparatif-createurs-site-web-prix", "/blog/tarif-creation-site-internet"],
        ["combien-coute-site-web-sur-mesure", "/blog/tarif-creation-site-internet"],
        ["wordpress-vs-sur-mesure", "/blog/tarif-creation-site-internet"],
        ["site-web-artisan-sur-mesure", "/blog/tarif-creation-site-internet"],
        ["developpeur-freelance-quimper", "/blog/developpeur-application-mobile-bretagne"],
        ["developpeur-freelance-rennes", "/blog/developpeur-application-mobile-bretagne"],
        ["creation-site-web-brest", "/blog/developpeur-application-mobile-bretagne"],
        ["panel-admin-restaurant-pizzeria", "/blog/panel-admin-site-web-application-mobile"],
        ["panel-admin-boutique-ecommerce", "/blog/panel-admin-site-web-application-mobile"],
        ["avantages-developpement-application-mobile-cross-platform", "/blog/react-native-vs-flutter"],
        ["notifications-push-application-mobile", "/blog/comment-fideliser-clients-application-mobile"],
        ["captures-ecran-app-store-play-store", "/blog/publier-application-app-store"],
        ["ux-ui-application-mobile-reussie", "/blog/comment-creer-une-application-mobile"],
        ["application-mobile-salle-sport-fitness", "/services/secteur/salle-de-sport"],
      ] as const).map(([slug, destination]) => ({
        source: `/blog/${slug}`,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
