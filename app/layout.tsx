import type { Metadata } from "next";
import "./globals.css";
import SchemaLD from "@/components/SchemaLD";

export const metadata: Metadata = {
  title: "Création d'application mobile iOS & Android | Sur mesure",
  description:
    "Vous avez une idée d'application mobile ? Je la crée. iOS & Android sur mesure pour restaurants, commerces, jeux. Auth, paiement, boutique, admin. Devis gratuit.",
  keywords: [
    "création application mobile",
    "développeur application mobile",
    "application mobile sur mesure",
    "créer une app mobile",
    "application iOS Android",
    "développeur freelance application mobile",
    "application restaurant",
    "application ecommerce mobile",
    "je veux une application mobile",
  ],
  openGraph: {
    title: "Création d'application mobile iOS & Android | Sur mesure",
    description:
      "Transformez votre idée en application mobile. iOS & Android, boutique, paiement, notifications. Dès 400€.",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://votre-domaine.fr" },
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
