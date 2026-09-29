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
        image: "https://breizhapp.tech/logo.jpg",
        logo: "https://breizhapp.tech/logo.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "18 Rue du Forestou Huella",
          addressLocality: "Brest",
          addressRegion: "Bretagne",
          postalCode: "29200",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.394538,
          longitude: -4.466814,
        },
        hasMap: "https://maps.app.goo.gl/CjAnZLnTUHZzH5g26",
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
              description: "Application mobile sur mesure iOS et Android, hébergement et support inclus.",
            },
            {
              "@type": "Offer",
              name: "App premium iOS & Android",
              description: "Application mobile complète avec paiement Stripe, panel admin, notifications push.",
            },
            {
              "@type": "Offer",
              name: "App boutique e-commerce",
              description: "Application boutique sans frais d'installation, commission sur les ventes.",
            },
          ],
        },
        sameAs: [
          "https://www.malt.fr/profile/enzoomnes",
          "https://www.instagram.com/breizhappp/",
          "https://www.tiktok.com/@breizhapp",
          "https://www.facebook.com/profile.php?id=61574218054349",
          "https://maps.app.goo.gl/CjAnZLnTUHZzH5g26",
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
