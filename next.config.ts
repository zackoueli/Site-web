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
    ];
  },
};

export default nextConfig;
