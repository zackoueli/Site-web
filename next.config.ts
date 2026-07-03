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
        source: "/blog/application-photobooth-sur-mesure",
        destination: "/blog/creer-photobooth-digital-guide-complet",
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
    ];
  },
};

export default nextConfig;
