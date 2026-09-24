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
        destination: "/blog/comparatif-createurs-site-web-prix",
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
    ];
  },
};

export default nextConfig;
