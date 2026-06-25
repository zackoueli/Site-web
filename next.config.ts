import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cibler les navigateurs modernes pour éviter les polyfills inutiles
  experimental: {
    browsersListForSwc: true,
  },
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
    ];
  },
};

export default nextConfig;
