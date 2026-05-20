import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio · Réalisations app mobile & site web | BreizhApp",
  description:
    "Découvrez les applications mobiles iOS & Android et sites web réalisés par BreizhApp à Brest : Forno Pizzeria, Histoire Éternelle et plus. Développeur freelance.",
  keywords: [
    "portfolio développeur application mobile",
    "réalisations app mobile brest",
    "exemples applications iOS Android",
    "développeur freelance brest portfolio",
  ],
  alternates: { canonical: "https://breizhapp.tech/portfolio" },
  openGraph: {
    title: "Portfolio · Réalisations app mobile & site web",
    description: "Applications mobiles iOS & Android et sites web réalisés par BreizhApp, développeur freelance à Brest.",
    url: "https://breizhapp.tech/portfolio",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
