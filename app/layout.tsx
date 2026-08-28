import type { Metadata } from "next";
import "./globals.css";
import SchemaLD from "@/components/SchemaLD";
import AudioProvider from "@/components/AudioProvider";
import MusicToggle from "@/components/MusicToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://breizhapp.tech"),
  title: "Création d'application mobile et web sur mesure à Brest - BreizhApp",
  description:
    "Développeur freelance à Brest : je crée votre app iOS & Android sur mesure. Restaurants, commerces, e-commerce. Devis gratuit sous 24h.",
  openGraph: {
    title: "Création d'application mobile et web sur mesure à Brest - BreizhApp",
    description:
      "Développeur freelance à Brest : app iOS & Android sur mesure. Restaurants, commerces, e-commerce. Devis gratuit sous 24h.",
    type: "website",
    locale: "fr_FR",
    url: "https://breizhapp.tech",
    siteName: "BreizhApp",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "BreizhApp — Développeur application mobile iOS & Android à Brest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création d'application mobile et web sur mesure à Brest - BreizhApp",
    description:
      "Développeur freelance à Brest : app iOS & Android sur mesure. Restaurants, commerces, jeux. Devis gratuit sous 24h.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "aRvWxlkeNu2w3Fr4rVLJq1DEARcct2JdMzk5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <SchemaLD />
        <link rel="preconnect" href="https://app.bunkly.co" />
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        <link rel="dns-prefetch" href="https://app.bunkly.co" />
        <link rel="dns-prefetch" href="https://firebasestorage.googleapis.com" />
      </head>
      <body>
        <AudioProvider>
          {children}
          <MusicToggle />
        </AudioProvider>
      </body>
    </html>
  );
}
