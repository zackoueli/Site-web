import type { Metadata } from "next";
import "./globals.css";
import SchemaLD from "@/components/SchemaLD";

export const metadata: Metadata = {
  metadataBase: new URL("https://breizhapp.tech"),
  title: "BreizhApp — Développeur app mobile iOS & Android",
  description:
    "Développeur freelance à Brest : je crée votre app iOS & Android sur mesure dès 490€. Restaurants, commerces, e-commerce. Devis gratuit sous 24h.",
  keywords: [
    "création application mobile",
    "développeur application mobile",
    "application mobile sur mesure",
    "créer une app mobile",
    "application iOS Android",
    "développeur freelance application mobile",
    "application mobile Brest",
    "application mobile Bretagne",
    "développeur mobile Brest",
    "application restaurant",
    "application ecommerce mobile",
    "je veux une application mobile",
    "React Native freelance",
    "application mobile pas cher",
    "développeur application mobile Finistère",
  ],
  openGraph: {
    title: "BreizhApp — Création d'application mobile iOS & Android sur mesure",
    description:
      "Développeur freelance à Brest : app iOS & Android sur mesure dès 490€. Restaurants, commerces, e-commerce. Devis gratuit sous 24h.",
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
    title: "BreizhApp — Création d'application mobile iOS & Android sur mesure",
    description:
      "Développeur freelance à Brest : app iOS & Android sur mesure dès 490€. Restaurants, commerces, jeux. Devis gratuit sous 24h.",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
