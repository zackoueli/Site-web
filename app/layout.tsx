import type { Metadata } from "next";
import "./globals.css";
import SchemaLD from "@/components/SchemaLD";

export const metadata: Metadata = {
  title: "BreizhApp — Création d'application mobile iOS & Android sur mesure",
  description:
    "BreizhApp, développeur freelance à Brest (Bretagne) : je crée votre application mobile iOS & Android sur mesure. Restaurants, commerces, jeux, e-commerce. Devis gratuit sous 24h.",
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
  ],
  openGraph: {
    title: "BreizhApp — Création d'application mobile iOS & Android sur mesure",
    description:
      "BreizhApp, développeur freelance à Brest : transformez votre idée en application mobile iOS & Android. Boutique, paiement, notifications. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://breizhapp.tech" },
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
