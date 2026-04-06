export default function SchemaLD() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://breizhapp.tech/#person",
        name: "BreizhApp",
        jobTitle: "Développeur d'applications mobiles freelance",
        description:
          "Création d'applications mobiles iOS et Android sur mesure pour restaurants, commerces et jeux. Basé à Brest, Bretagne.",
        url: "https://breizhapp.tech",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Brest",
          addressRegion: "Bretagne",
          addressCountry: "FR",
        },
        sameAs: [],
      },
      {
        "@type": "Service",
        "@id": "https://breizhapp.tech/#service",
        name: "Création d'application mobile iOS & Android",
        provider: { "@id": "https://breizhapp.tech/#person" },
        description:
          "Développement d'applications mobiles sur mesure : authentification, boutique, paiement Stripe, notifications push, panel admin.",
        offers: [
          {
            "@type": "Offer",
            name: "App basique",
            price: "400",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: "App premium",
            price: "600",
            priceCurrency: "EUR",
          },
        ],
        areaServed: ["FR", "Brest", "Bretagne"],
        serviceType: "Développement mobile",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Je veux une application mobile, par où commencer ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Contactez-moi avec votre idée. Je vous envoie un devis détaillé sous 48h.",
            },
          },
          {
            "@type": "Question",
            name: "Combien coûte la création d'une application mobile ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Une app commence à 490€ d'installation + 49€/mois. Le prix varie selon les fonctionnalités (paiement, admin, notifications...). Option boutique : 0€ installation + 12% de commission. Devis gratuit et sans engagement.",
            },
          },
          {
            "@type": "Question",
            name: "Est-ce que l'app fonctionnera sur iOS et Android ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, je développe avec React Native pour iOS et Android depuis une seule base de code.",
            },
          },
        ],
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
