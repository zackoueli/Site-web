export default function SchemaFAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Je veux une application mobile, par où commencer ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Très simple : contactez-moi avec votre idée, même si elle n'est pas encore précise. Je vous pose des questions pour comprendre vos besoins, puis je vous envoie un devis détaillé sous 48h. On démarre dès validation.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte la création d'une application mobile ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Une app commence à 490€ d'installation + 49€/mois (hébergement & support inclus). Le prix final dépend des fonctionnalités choisies : paiement, notifications, panel admin, réservation. Pour les boutiques e-commerce, j'ai une offre spéciale à 0€ d'installation avec 12% de commission sur les ventes. Chaque projet est unique, le devis est gratuit et sans engagement.",
        },
      },
      {
        "@type": "Question",
        name: "Est-ce que l'app fonctionnera sur iOS et Android ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, je développe avec React Native qui permet de créer une seule application qui tourne nativement sur iOS (iPhone) et Android. Vous économisez le coût d'un double développement.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps pour créer une application mobile ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Une app basique est livrée en 2 à 4 semaines. Une app premium prend 4 à 8 semaines selon la complexité des fonctionnalités. Je travaille avec des sprints et vous tiens informé à chaque étape.",
        },
      },
      {
        "@type": "Question",
        name: "Est-ce que vous publiez l'app sur l'App Store et Google Play ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, le déploiement sur l'App Store (Apple) et le Google Play Store est inclus dans toutes les offres. Je m'occupe de toute la procédure de soumission.",
        },
      },
      {
        "@type": "Question",
        name: "Je suis restaurateur / commerçant, est-ce que vous pouvez créer mon app ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument. Je crée régulièrement des apps pour restaurants (réservation, commande en ligne, fidélité), commerçants (boutique, catalogue, abonnements) et maraîchers (paniers hebdomadaires, livraison locale).",
        },
      },
      {
        "@type": "Question",
        name: "Qu'est-ce qui est inclus dans le suivi après livraison ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Je reste disponible après livraison. Corrections de bugs, ajustements, nouvelles fonctionnalités : on en discute au fil du temps selon vos besoins. Pas de contrat forcé, juste une collaboration continue.",
        },
      },
      {
        "@type": "Question",
        name: "Est-ce que je peux avoir un exemple de ce que vous avez déjà réalisé ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui ! Consultez mon portfolio sur cette page. Je peux également vous présenter en détail les projets similaires au vôtre lors d'un appel.",
        },
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
