export default function SchemaLD() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://votre-domaine.fr/#person",
        name: "App Mobile Pro",
        jobTitle: "Développeur d'applications mobiles freelance",
        description:
          "Création d'applications mobiles iOS et Android sur mesure pour restaurants, commerces et jeux.",
        url: "https://votre-domaine.fr",
        sameAs: [],
      },
      {
        "@type": "Service",
        "@id": "https://votre-domaine.fr/#service",
        name: "Création d'application mobile iOS & Android",
        provider: { "@id": "https://votre-domaine.fr/#person" },
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
        areaServed: "FR",
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
              text: "Une app basique commence à 400€, une app premium à 600€. Devis gratuit disponible.",
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
