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
  {
    slug: "cout-reel-site-shopify",
    title: "Shopify : le coût réel d'un site e-commerce en 2025",
    description:
      "Abonnement, commissions, thèmes, apps payantes... Découvrez ce que coûte vraiment un site Shopify par rapport à une solution sur mesure développée par un freelance.",
    date: "2026-04-15",
    readTime: "6 min",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Shopify est souvent présenté comme LA solution e-commerce accessible à tous. Et c'est vrai — en apparence. Mais après 12 à 24 mois d'utilisation, beaucoup de commerçants réalisent que la facture réelle est bien plus lourde que prévu.",
          "Je suis développeur freelance à Brest. Voici ce que mes clients m'ont appris sur le coût réel d'un site Shopify, chiffres à l'appui.",
        ],
      },
      {
        heading: "L'abonnement de base : 39€/mois minimum",
        paragraphs: [
          "Shopify propose plusieurs formules. Le plan Basic démarre à 39€/mois (environ 468€/an). Le plan Shopify monte à 105€/mois, et le plan Advanced à 399€/mois.",
          "Mais ce n'est que le début.",
        ],
        list: [
          "Basic : 39€/mois — fonctionnalités limitées, 2% de frais de transaction si vous n'utilisez pas Shopify Payments",
          "Shopify : 105€/mois — rapports standards, jusqu'à 5 comptes staff",
          "Advanced : 399€/mois — rapports avancés, jusqu'à 15 comptes staff",
          "Shopify Plus (grands comptes) : à partir de 2 300€/mois",
        ],
      },
      {
        heading: "Les frais cachés qui s'accumulent",
        paragraphs: [
          "L'abonnement est juste la porte d'entrée. Voici ce que personne ne vous dit au moment de l'inscription :",
        ],
        list: [
          "Thème premium : entre 150€ et 400€ en achat unique (les thèmes gratuits sont limités)",
          "Apps indispensables : avis clients, SEO avancé, upsell, récupération de panier abandonné — comptez 50 à 200€/mois en apps cumulées",
          "Nom de domaine : 14€/an (à ajouter)",
          "Frais de transaction Shopify Payments : 0,5% à 2% selon votre plan",
          "Traductions et multidevises : module payant requis hors plan Advanced",
          "Support prioritaire : payant au-delà du plan de base",
        ],
      },
      {
        heading: "Le coût total sur 2 ans",
        paragraphs: [
          "Faisons le calcul réaliste pour un commerçant qui démarre sur le plan Basic avec quelques apps essentielles :",
        ],
        list: [
          "Abonnement Basic 2 ans : 39€ × 24 = 936€",
          "Thème premium : 250€ (une fois)",
          "Apps cumulées (50€/mois) : 50€ × 24 = 1 200€",
          "Nom de domaine : 28€",
          "Frais de transaction (estimé à 1% sur 5 000€/mois de CA) : 1 200€",
          "Total sur 2 ans : environ 3 614€ — sans avoir développé une seule fonctionnalité sur mesure",
        ],
      },
      {
        heading: "Ce que vous n'aurez jamais avec Shopify",
        paragraphs: [
          "Shopify reste une plateforme généraliste. Elle ne peut pas s'adapter à des besoins spécifiques sans développement custom, qui nécessite un développeur Shopify (facturé à la journée).",
        ],
        list: [
          "Application mobile native (iOS & Android) : impossible sans développement séparé",
          "Logique métier très spécifique : abonnements sur mesure, systèmes de fidélité complexes",
          "Hébergement de données en Europe si requis par votre RGPD interne",
          "Propriété totale de votre code et de votre infrastructure",
        ],
      },
      {
        heading: "L'alternative : une app e-commerce sur mesure",
        paragraphs: [
          "Pour les commerçants qui veulent une application mobile iOS & Android avec boutique intégrée, je propose l'offre App Boutique : 0€ d'installation, 12% de commission sur les ventes uniquement.",
          "Pas d'abonnement mensuel, pas de frais cachés. Vous ne payez que quand vous vendez. C'est le modèle inverse de Shopify.",
          "Devis gratuit sous 24h — contactez-moi avec votre projet.",
        ],
      },
    ],
  },
  {
    slug: "cout-reel-site-wix",
    title: "Wix : le coût réel d'un site web en 2025",
    description:
      "Wix semble gratuit au départ, mais un vrai site professionnel avec nom de domaine, sans pub et avec les bonnes fonctionnalités coûte bien plus cher. Analyse complète.",
    date: "2026-04-15",
    readTime: "5 min",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "\"Créez votre site gratuitement\" — c'est le slogan de Wix. Et techniquement, c'est vrai. Mais un site Wix gratuit affiche la publicité Wix, s'héberge sur un sous-domaine en monnom.wixsite.com, et offre des fonctionnalités très limitées.",
          "Pour un usage professionnel, voici ce que ça coûte vraiment.",
        ],
      },
      {
        heading: "Les plans payants Wix",
        paragraphs: [
          "Wix propose une gamme d'abonnements. Voici les principaux plans pertinents pour un usage pro en 2025 :",
        ],
        list: [
          "Light (ex-Combo) : 13€/mois — domaine personnalisé, sans pub, 2 Go de stockage",
          "Core (ex-Unlimited) : 17€/mois — 50 Go de stockage, 5 formulaires",
          "Business : 25€/mois — e-commerce inclus, paiements en ligne",
          "Business Elite : 159€/mois — fonctionnalités avancées, priorité support",
        ],
      },
      {
        heading: "Les coûts supplémentaires souvent ignorés",
        paragraphs: [
          "L'abonnement de base ne couvre pas tout. Voici les postes qui font grimper la facture :",
        ],
        list: [
          "Nom de domaine : environ 15€/an (offert la première année sur certains plans)",
          "Applications Wix Market : de nombreuses fonctionnalités (réservations, chat, marketing) nécessitent des apps tierces à 5–30€/mois chacune",
          "Wix SEO Booster : plan payant recommandé pour optimiser le référencement",
          "Wix Payments : 2,5% de frais de transaction sur chaque vente",
          "Emails professionnels via Google Workspace : 6€/mois/utilisateur en plus",
          "Sauvegarde et restauration avancées : plan payant supplémentaire",
        ],
      },
      {
        heading: "Les limites techniques de Wix",
        paragraphs: [
          "Au-delà du prix, Wix impose des contraintes techniques importantes que beaucoup de clients découvrent trop tard :",
        ],
        list: [
          "Impossible de migrer votre site vers un autre hébergeur — vous êtes enfermé dans l'écosystème Wix",
          "SEO limité : malgré les améliorations, Wix reste moins performant qu'un site sur mesure pour le référencement avancé",
          "Performances : les sites Wix sont souvent plus lents qu'un site optimisé, ce qui pénalise le SEO",
          "Pas d'application mobile native possible depuis Wix",
          "Personnalisation limitée : vous êtes contraint aux templates et à l'éditeur Wix",
        ],
      },
      {
        heading: "Coût total estimé sur 2 ans (usage pro)",
        list: [
          "Plan Core (17€/mois) × 24 : 408€",
          "Nom de domaine : 30€",
          "2 apps Wix Market (20€/mois) × 24 : 480€",
          "Emails Google Workspace (6€/mois) × 24 : 144€",
          "Total : environ 1 062€ — pour un site standard, sans fonctionnalité spécifique",
        ],
      },
      {
        heading: "Quand Wix a du sens — et quand il n'en a pas",
        paragraphs: [
          "Wix est adapté pour un site vitrine très simple : présenter son activité, donner ses coordonnées, afficher quelques photos. C'est son terrain de jeu naturel.",
          "En revanche, si vous êtes commerçant, restaurateur, prestataire de services qui prend des réservations, ou si vous voulez une application mobile : Wix ne suffit pas — et vous payez pour ses limites.",
          "Je développe des applications mobiles et des sites sur mesure pour des budgets à partir de 490€, avec une solution qui vous appartient vraiment. Contactez-moi pour un devis gratuit.",
        ],
      },
    ],
  },
  {
    slug: "cout-reel-planity",
    title: "Planity : le coût réel pour un salon de coiffure ou d'esthétique en 2025",
    description:
      "Planity prend une commission sur chaque réservation en ligne. Découvrez ce que ça coûte vraiment sur la durée, et pourquoi une application mobile sur mesure peut être plus rentable.",
    date: "2026-04-15",
    readTime: "5 min",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Planity est la plateforme de référence pour les réservations en ligne dans les salons de coiffure, instituts de beauté et centres bien-être. Elle est adoptée par des milliers de professionnels en France.",
          "Mais à quel prix ? Voici l'analyse que beaucoup de professionnels auraient aimé lire avant de s'engager.",
        ],
      },
      {
        heading: "Le modèle tarifaire Planity",
        paragraphs: [
          "Planity propose un abonnement mensuel avec différentes formules selon le nombre de praticiens et les fonctionnalités. Les tarifs varient entre 30€ et 80€/mois selon la formule choisie.",
          "Ce qui distingue Planity des autres outils : la plateforme génère aussi des réservations via son propre annuaire (comme une marketplace). Sur ces réservations issues de l'annuaire Planity, une commission est prélevée.",
        ],
        list: [
          "Abonnement mensuel : entre 30€ et 80€/mois selon la formule",
          "Commission sur les nouvelles clientes via l'annuaire Planity : environ 20% du premier rendez-vous",
          "Frais de rappel SMS : souvent inclus dans les plans supérieurs, limités dans les plans de base",
          "Formation et onboarding : parfois facturés en supplément",
        ],
      },
      {
        heading: "Le calcul sur 2 ans pour un salon moyen",
        paragraphs: [
          "Prenons un salon de coiffure avec 2 praticiens, 30 réservations/mois via Planity, dont 5 nouvelles clientes amenées par l'annuaire Planity à 40€ de prestation en moyenne :",
        ],
        list: [
          "Abonnement mensuel (50€) × 24 : 1 200€",
          "Commission annuaire (20% × 5 clientes × 40€) × 24 mois : 960€",
          "Coût total estimé sur 2 ans : 2 160€",
          "Et vous ne possédez ni les données clients, ni l'application, ni la relation directe avec votre clientèle",
        ],
      },
      {
        heading: "Ce que Planity vous apporte — et ce qu'il ne vous donne pas",
        paragraphs: [
          "Planity offre une réelle valeur : visibilité sur sa marketplace, gestion des plannings, rappels automatiques. Pour un salon qui démarre, c'est une aide concrète.",
          "Mais sur le long terme, les limites sont importantes :",
        ],
        list: [
          "Dépendance : si Planity augmente ses tarifs ou change ses conditions, vous n'avez pas de recours",
          "Pas d'application mobile à votre nom et à vos couleurs",
          "Pas de programme de fidélité personnalisé",
          "Vos clientes restent en partie clientes de Planity, pas uniquement les vôtres",
          "Aucun contrôle sur l'expérience utilisateur et le design",
        ],
      },
      {
        heading: "L'alternative : votre propre application mobile",
        paragraphs: [
          "Pour 490€ + 49€/mois, je développe une application mobile iOS & Android à votre nom, avec votre logo, votre charte graphique — avec réservation en ligne, rappels automatiques par push, programme de fidélité et panel admin pour gérer vos créneaux.",
          "Vous gardez 100% de vos clientes, sans commission sur aucun rendez-vous. L'app vous appartient.",
          "Sur 2 ans, le coût est comparable à Planity — mais vous avez un actif numérique qui vous appartient, pas une location permanente.",
          "Contactez-moi pour un devis gratuit et personnalisé.",
        ],
      },
    ],
  },
  {
    slug: "application-mobile-pas-chere",
    title: "Application mobile pas chère : mythe ou réalité en 2025 ?",
    description:
      "Est-il possible d'avoir une vraie application iOS & Android professionnelle pour moins de 1 000€ ? Oui — à condition de savoir à qui s'adresser et ce que vous demandez.",
    date: "2026-04-15",
    readTime: "6 min",
    category: "Tarifs",
    sections: [
      {
        paragraphs: [
          "\"Application mobile pas chère\" — des milliers de personnes cherchent cette expression chaque mois. Et pour cause : les agences digitales affichent des devis à 15 000€, 30 000€, parfois 80 000€ pour une application mobile.",
          "Pourtant, des dizaines de restaurateurs, coiffeurs, commerçants et porteurs de projets me commandent des applications iOS & Android fonctionnelles pour 490€ ou 600€. Comment est-ce possible ?",
        ],
      },
      {
        heading: "Pourquoi les agences facturent-elles si cher ?",
        paragraphs: [
          "Ce n'est pas une arnaque. Une agence emploie plusieurs personnes : chef de projet, UX designer, développeur iOS (Swift), développeur Android (Kotlin), développeur backend, testeur. Chaque personne est facturée à la journée.",
          "Une app développée par une équipe de 5 personnes pendant 3 mois = un coût réel. Les marges d'agence font le reste.",
        ],
        list: [
          "Chef de projet : 400–600€/jour",
          "UX Designer : 350–500€/jour",
          "Développeur iOS natif : 500–700€/jour",
          "Développeur Android natif : 500–700€/jour",
          "Développeur backend : 450–650€/jour",
          "3 mois × 5 personnes = facilement 50 000€ à 80 000€",
        ],
      },
      {
        heading: "Pourquoi un freelance React Native peut faire la même chose pour moins",
        paragraphs: [
          "React Native est un framework JavaScript développé par Meta qui permet de créer une seule base de code qui fonctionne à la fois sur iOS et Android. Plus besoin d'un développeur iOS ET d'un développeur Android.",
          "En tant que développeur freelance spécialisé, je maîtrise l'ensemble de la chaîne : design, développement, backend, déploiement sur les stores. Zéro intermédiaire, zéro chef de projet, zéro marge d'agence.",
        ],
        list: [
          "Une seule base de code pour iOS et Android — deux fois moins de développement",
          "Pas de frais de structure ni de marges d'agence",
          "Technologies modernes et éprouvées : React Native, Expo, Supabase",
          "Déploiement App Store & Google Play inclus",
          "Support et mises à jour inclus dans l'abonnement mensuel",
        ],
      },
      {
        heading: "Ce qu'on entend par \"pas chère\" — et les pièges à éviter",
        paragraphs: [
          "\"Pas chère\" ne veut pas dire \"bâclée\". Il faut distinguer :",
        ],
        list: [
          "Fuyez les plateformes \"no-code app builder\" (Glide, Adalo, Bubble) : ce sont des sites web déguisés en app — souvent refusés par Apple et très limités",
          "Fuyez les freelances sur Fiverr à 50€ : vous obtiendrez du code copié-collé, sans support, sans déploiement réel",
          "Une app React Native à 490€ est une vraie application native — elle passe les validations Apple et Google, elle est publiée sur les stores, elle fonctionne hors ligne",
        ],
      },
      {
        heading: "Mes tarifs pour une application mobile pas chère",
        list: [
          "App Starter à 490€ : iOS & Android, design sur mesure, authentification, contenu dynamique, hébergement + support à 49€/mois",
          "App Premium à 600€ : Starter + paiement Stripe, notifications push, panel admin web",
          "App Boutique à 0€ d'installation : pour les e-commerçants, 12% sur les ventes uniquement — zéro risque",
        ],
      },
      {
        heading: "Pour qui c'est fait ?",
        paragraphs: [
          "Ces tarifs sont pensés pour les TPE, les artisans, les restaurateurs, les prestataires de services et les porteurs de projets qui veulent tester leur idée sans hypothéquer leur activité.",
          "Si votre projet nécessite une équipe de 10 développeurs et une refonte totale de votre SI — une agence sera plus adaptée. Mais pour 95% des projets que je reçois, une app bien faite à 490€ répond parfaitement au besoin.",
          "Devis gratuit et sans engagement. Contactez-moi avec votre idée, même floue — je vous réponds sous 24h.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
