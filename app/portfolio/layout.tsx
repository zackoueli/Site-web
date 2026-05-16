import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations — Sites web & applications mobiles | BreizhApp",
  description:
    "Découvrez les projets créés par BreizhApp : applications mobiles iOS & Android, boutiques e-commerce, sites web artisans. Développeur freelance à Brest.",
  alternates: { canonical: "https://breizhapp.tech/portfolio" },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
