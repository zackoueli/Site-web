import FAQItem from "@/components/FAQItem";

const faqs = [
  {
    q: "Je veux une application mobile, par où commencer ?",
    a: "Très simple : contactez-moi avec votre idée, même si elle n'est pas encore précise. Je vous pose des questions pour comprendre vos besoins, puis je vous envoie un devis détaillé sous 48h. On démarre dès validation.",
  },
  {
    q: "Combien coûte la création d'une application mobile ?",
    a: "Une app commence à 490€ d'installation + 49€/mois (hébergement & support inclus). Le prix final dépend des fonctionnalités choisies : paiement, notifications, panel admin, réservation… Pour les boutiques e-commerce, j'ai une offre spéciale à 0€ d'installation avec 12% de commission sur les ventes. Chaque projet est unique, le devis est gratuit et sans engagement.",
  },
  {
    q: "Est-ce que l'app fonctionnera sur iOS et Android ?",
    a: "Oui, je développe avec React Native qui permet de créer une seule application qui tourne nativement sur iOS (iPhone) et Android. Vous économisez le coût d'un double développement.",
  },
  {
    q: "Combien de temps pour créer une application mobile ?",
    a: "Une app basique est livrée en 2 à 4 semaines. Une app premium prend 4 à 8 semaines selon la complexité des fonctionnalités. Je travaille avec des sprints et vous tiens informé à chaque étape.",
  },
  {
    q: "Est-ce que vous publiez l'app sur l'App Store et Google Play ?",
    a: "Oui, le déploiement sur l'App Store (Apple) et le Google Play Store est inclus dans toutes les offres. Je m'occupe de toute la procédure de soumission.",
  },
  {
    q: "Je suis restaurateur / commerçant, est-ce que vous pouvez créer mon app ?",
    a: "Absolument. Je crée régulièrement des apps pour restaurants (réservation, commande en ligne, fidélité), commerçants (boutique, catalogue, abonnements) et maraîchers (paniers hebdomadaires, livraison locale).",
  },
  {
    q: "Qu'est-ce qui est inclus dans le suivi après livraison ?",
    a: "Je reste disponible après livraison — mon objectif est que l'app soit un outil qui vous convient vraiment. Corrections de bugs, ajustements, nouvelles fonctionnalités : on en discute au fil du temps selon vos besoins. Pas de contrat forcé, juste une collaboration continue.",
  },
  {
    q: "Est-ce que je peux avoir un exemple de ce que vous avez déjà réalisé ?",
    a: "Oui ! Consultez mon portfolio sur cette page. Je peux également vous présenter en détail les projets similaires au vôtre lors d'un appel.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-12 text-center">
        <p className="mono text-sm font-bold mb-2">// vos questions</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Questions{" "}
          <span className="bg-[#FFE234] px-2 brutal-border">fréquentes</span>
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((item) => (
          <FAQItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
}
