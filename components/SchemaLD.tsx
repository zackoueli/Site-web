export default function SchemaLD() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://breizhapp.tech/#business",
        name: "BreizhApp",
        description:
          "Création d'applications mobiles iOS et Android sur mesure pour restaurants, commerces et jeux. Développeur freelance basé à Brest, Bretagne.",
        url: "https://breizhapp.tech",
        telephone: "+33642354886",
        priceRange: "€€",
        image: "https://breizhapp.tech/og-image.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Brest",
          addressRegion: "Bretagne",
          postalCode: "29200",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.3904,
          longitude: -4.4861,
        },
        areaServed: [
          { "@type": "City", name: "Brest" },
          { "@type": "AdministrativeArea", name: "Bretagne" },
          { "@type": "Country", name: "France" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services de développement d'applications mobiles",
          itemListElement: [
            {
              "@type": "Offer",
              name: "App basique iOS & Android",
              price: "490",
              priceCurrency: "EUR",
              description: "Application mobile sur mesure iOS et Android, hébergement et support inclus.",
            },
            {
              "@type": "Offer",
              name: "App premium iOS & Android",
              price: "600",
              priceCurrency: "EUR",
              description: "Application mobile complète avec paiement Stripe, panel admin, notifications push.",
            },
            {
              "@type": "Offer",
              name: "App boutique e-commerce",
              description: "Application boutique sans frais d'installation, 12% de commission sur les ventes.",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "0",
                priceCurrency: "EUR",
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  value: "12",
                  unitCode: "P1",
                  unitText: "% de commission sur les ventes",
                },
              },
            },
          ],
        },
        sameAs: [
          "https://www.malt.fr/profile/enzoomnes",
          "https://www.instagram.com/breizhappp/",
          "https://www.tiktok.com/@breizhapp",
          "https://www.facebook.com/profile.php?id=61574218054349",
        ],
        knowsAbout: [
          "React Native",
          "Développement mobile iOS",
          "Développement mobile Android",
          "Firebase",
          "Stripe",
          "Applications mobiles pour restaurants",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://breizhapp.tech/#website",
        url: "https://breizhapp.tech",
        name: "BreizhApp",
        description: "Développeur freelance application mobile iOS & Android à Brest",
        publisher: { "@id": "https://breizhapp.tech/#business" },
        inLanguage: "fr-FR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
