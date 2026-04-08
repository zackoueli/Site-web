export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  sections: Section[];
};

type Section = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export const articles: Article[] = [
  {
    slug: "combien-coute-application-mobile",
    title: "Combien coûte une application mobile en 2025 ?",
    description:
      "Prix d'une app iOS & Android selon les fonctionnalités : commande en ligne, paiement Stripe, notifications push. Grille tarifaire réelle d'un développeur freelance à Brest.",
    date: "2025-03-15",
    readTime: "5 min",
    category: "Tarifs",
    sections: [
      {
        paragraphs: [
          "C'est souvent la première question que me posent les restaurateurs, commerçants ou porteurs de projets qui me contactent. Et la réponse honnête est : ça dépend. Mais ça dépend de facteurs très concrets, pas de l'humeur du prestataire.",
          "Voici une grille réelle basée sur les projets que je réalise en tant que développeur freelance à Brest.",
        ],
      },
      {
        heading: "Les postes de coût d'une application mobile",
        paragraphs: [
          "Une application mobile se compose de plusieurs briques : l'interface (ce que voit l'utilisateur), la logique métier (ce que fait l'app), et le backend (la base de données, les APIs). Chaque brique a un coût.",
        ],
        list: [
          "Interface & design : 100–200€ selon la complexité des écrans",
          "Authentification (connexion/inscription) : inclus dans toutes mes offres",
          "Paiement Stripe intégré : +100€",
          "Notifications push : +50€",
          "Panel d'administration web : +150€",
          "Déploiement App Store + Google Play : inclus",
        ],
      },
      {
        heading: "Mes grilles tarifaires",
        paragraphs: [
          "Je propose trois formules principales adaptées à la majorité des projets que je rencontre.",
        ],
        list: [
          "App Starter à 490€ : application iOS & Android avec design sur mesure, authentification, contenu dynamique, hébergement et support inclus à 49€/mois",
          "App Premium à 600€ : tout le Starter + paiement Stripe, notifications push, panel admin web",
          "App Boutique à 0€ d'installation : pour les e-commerçants, je prends 12% de commission sur les ventes — zéro risque financier au départ",
        ],
      },
      {
        heading: "Ce qui fait vraiment varier le prix",
        paragraphs: [
          "Au-delà des fonctionnalités, deux facteurs influencent fortement le coût final :",
        ],
        list: [
          "La complexité de la logique métier : une app de réservation avec créneaux horaires et rappels automatiques demande plus de travail qu'un simple catalogue produits",
          "Les intégrations tierces : connecter votre app à un logiciel de caisse, un ERP ou une API externe représente du travail supplémentaire",
          "Le nombre d'écrans : une app de 5 écrans n'a pas le même coût qu'une app de 20 écrans",
        ],
      },
      {
        heading: "Agence vs freelance : pourquoi l'écart de prix est énorme",
        paragraphs: [
          "Une agence digitale facture généralement entre 15 000€ et 80 000€ pour une application mobile. Ce n'est pas du vol : il y a un chef de projet, un designer, un développeur iOS, un développeur Android, des frais de structure.",
          "En tant que freelance spécialisé React Native, je fais tout ça seul avec une technologie cross-platform. Une seule base de code tourne sur iOS et Android. Résultat : vous obtenez la même qualité pour 30 à 60 fois moins cher.",
          "Le devis est gratuit et sans engagement. Contactez-moi avec votre idée, même floue — je vous réponds sous 24h.",
        ],
      },
    ],
  },
  {
    slug: "application-mobile-restaurant",
    title: "Application mobile pour restaurant : tout ce qu'il faut savoir",
    description:
      "Commande en ligne, carte interactive, programme de fidélité, réservation de table : les fonctionnalités indispensables d'une app mobile pour restaurant en 2025.",
    date: "2025-03-22",
    readTime: "6 min",
    category: "Restaurants",
    sections: [
      {
        paragraphs: [
          "Avoir son propre application mobile en tant que restaurateur, c'est reprendre le contrôle face aux plateformes comme Uber Eats et Deliveroo qui prennent jusqu'à 30% de commission sur chaque commande.",
          "J'ai développé plusieurs applications pour des restaurateurs et commerçants en Bretagne. Voici ce qui fonctionne vraiment.",
        ],
      },
      {
        heading: "Pourquoi une app mobile plutôt qu'un site web ?",
        paragraphs: [
          "Un site web est accessible depuis un navigateur. Une application mobile est installée sur le téléphone de votre client — elle envoie des notifications push, fonctionne hors ligne, et est présente visuellement sur l'écran d'accueil.",
          "Pour un restaurant, c'est la différence entre un client qui vous oublie entre deux visites, et un client qui reçoit une notification \"Offre spéciale ce soir\" le mercredi à 17h30.",
        ],
      },
      {
        heading: "Les fonctionnalités essentielles",
        list: [
          "Carte et menu dynamique : modifiez votre menu en temps réel depuis un panel admin, sans passer par un développeur",
          "Commande en ligne avec paiement Stripe : vos clients commandent et paient directement dans l'app, vous recevez la commande instantanément",
          "Programme de fidélité : tampons numériques, réductions automatiques, cadeaux au bout de X commandes",
          "Réservation de table : formulaire de réservation avec créneaux, confirmation par email et SMS automatiques",
          "Notifications push : promos du jour, nouvelles entrées au menu, événements spéciaux",
          "Avis clients intégrés : encouragez les retours directement dans l'app",
        ],
      },
      {
        heading: "Combien ça coûte pour un restaurant ?",
        paragraphs: [
          "Pour un restaurant, je propose typiquement l'offre App Starter (490€ + 49€/mois) ou App Premium (600€ + 49€/mois) selon si vous avez besoin de la commande en ligne avec paiement.",
          "Comparé aux 15 à 30% prélevés par Uber Eats sur chaque commande, une app maison s'amortit dès vos premières semaines d'utilisation.",
        ],
      },
      {
        heading: "Exemple concret : une pizzeria à Brest",
        paragraphs: [
          "Un client m'a contacté après avoir calculé qu'Uber Eats lui coûtait environ 800€ par mois en commissions. Nous avons développé son app en 3 semaines avec commande en ligne, paiement Stripe et notifications push.",
          "Résultat : il a récupéré ses clients habituels sur son app propre et a économisé ses frais de commission dès le deuxième mois.",
        ],
      },
    ],
  },
  {
    slug: "react-native-vs-flutter",
    title: "React Native vs Flutter en 2025 : quel framework choisir ?",
    description:
      "Comparatif complet React Native et Flutter pour créer une application mobile iOS & Android. Performance, coût, écosystème — le point de vue d'un développeur freelance.",
    date: "2025-04-01",
    readTime: "7 min",
    category: "Tech",
    sections: [
      {
        paragraphs: [
          "Quand un client me demande avec quoi je développe son application, la question React Native vs Flutter revient souvent. Voici mon analyse après avoir travaillé avec les deux.",
        ],
      },
      {
        heading: "React Native — JavaScript pour le mobile",
        paragraphs: [
          "React Native est maintenu par Meta (Facebook). Il permet de coder en JavaScript/TypeScript et de produire une application native pour iOS et Android depuis une seule base de code.",
          "C'est le framework que j'utilise pour tous mes projets. Voici pourquoi.",
        ],
        list: [
          "Écosystème JavaScript massif : des milliers de librairies disponibles",
          "Hot reload ultra-rapide : voir les modifications en temps réel sans recompiler",
          "Courbe d'apprentissage douce pour les développeurs web",
          "Utilisé par Facebook, Instagram, Shopify, Airbnb",
          "Excellente intégration avec Firebase, Stripe, et les APIs REST",
        ],
      },
      {
        heading: "Flutter — Dart pour le mobile",
        paragraphs: [
          "Flutter est développé par Google. Il utilise le langage Dart et redessine lui-même chaque pixel de l'interface, ce qui lui donne un contrôle total sur le rendu.",
        ],
        list: [
          "Performances graphiques excellentes, idéal pour les animations complexes",
          "Rendu identique sur iOS et Android garanti",
          "Dart est un langage moins répandu que JavaScript",
          "Idéal pour les apps avec interfaces très personnalisées ou jeux légers",
        ],
      },
      {
        heading: "Mon verdict pour les projets clients",
        paragraphs: [
          "Pour 90% des projets que je réalise — restaurants, commerces, marketplaces — React Native est le meilleur choix. L'écosystème est plus riche, le recrutement futur est plus facile, et l'intégration avec les services tiers est meilleure.",
          "Flutter est un excellent choix pour des apps très graphiques ou des jeux mobiles où le rendu pixel-perfect est critique.",
          "Dans tous les cas, les deux frameworks produisent de vraies applications natives disponibles sur l'App Store et Google Play — pas des sites web déguisés.",
        ],
      },
    ],
  },
  {
    slug: "developpeur-freelance-vs-agence",
    title: "Développeur freelance vs agence mobile : que choisir en 2025 ?",
    description:
      "Comparez les avantages d'un développeur mobile freelance face à une agence digitale : prix, délais, communication, qualité. Guide pour faire le bon choix.",
    date: "2025-04-05",
    readTime: "5 min",
    category: "Conseils",
    sections: [
      {
        paragraphs: [
          "Vous avez un projet d'application mobile et vous hésitez entre contacter une agence ou un freelance. Les deux options ont leurs avantages — voici comment choisir selon votre situation.",
        ],
      },
      {
        heading: "Ce que propose une agence",
        paragraphs: [
          "Une agence met à disposition une équipe pluridisciplinaire : chef de projet, UX designer, développeurs front et back, testeurs. C'est rassurant, et ça se justifie pour des projets très complexes.",
        ],
        list: [
          "Budget minimum : généralement 15 000€ à 80 000€",
          "Délais : 3 à 12 mois selon la taille du projet",
          "Communication : via un chef de projet intermédiaire",
          "Idéal pour : grandes entreprises, projets complexes avec équipes multiples",
        ],
      },
      {
        heading: "Ce que propose un développeur freelance spécialisé",
        paragraphs: [
          "Un freelance spécialisé en développement mobile couvre l'ensemble du projet — design, développement, déploiement. Vous avez un interlocuteur unique qui connaît votre projet de A à Z.",
        ],
        list: [
          "Budget : 400€ à 2 000€ selon les fonctionnalités",
          "Délais : 2 à 8 semaines",
          "Communication : directe avec le développeur, sans intermédiaire",
          "Idéal pour : TPE, PME, startups, porteurs de projets",
        ],
      },
      {
        heading: "3 questions pour faire votre choix",
        list: [
          "Quel est votre budget ? En dessous de 5 000€, un freelance spécialisé est la seule option viable",
          "Avez-vous besoin d'une équipe intégrée ? Si votre projet nécessite du marketing, du design de marque et du développement simultanément, une agence peut être adaptée",
          "Quelle réactivité attendez-vous ? Avec un freelance, vous avez accès direct à la personne qui code — les retours sont immédiats",
        ],
      },
      {
        heading: "Ma position",
        paragraphs: [
          "Je suis développeur freelance basé à Brest, spécialisé React Native. Je travaille avec des restaurateurs, des commerçants et des porteurs de projets qui veulent une vraie application mobile sans le budget d'une grande entreprise.",
          "Si votre projet rentre dans cette catégorie, contactez-moi pour un devis gratuit sous 24h.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
