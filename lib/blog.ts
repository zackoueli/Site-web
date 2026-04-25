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
      "Prix d'une app iOS & Android selon les fonctionnalités : paiement Stripe, notifications push. Grille tarifaire réelle d'un développeur freelance à Brest.",
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
    title: "App mobile restaurant : guide complet 2025",
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
      "React Native vs Flutter : performance, coût, écosystème — comparatif pour créer une app iOS & Android. Le point de vue d'un développeur freelance.",
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
    title: "Freelance vs agence mobile : que choisir en 2025 ?",
    description:
      "Comparez les avantages d'un développeur mobile freelance face à une agence digitale : prix, délais, communication, qualité. Guide pour faire le bon choix.",
    date: "2026-04-20",
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
      "Abonnement, commissions, thèmes, apps payantes : le coût réel d'un site Shopify comparé à une solution sur mesure développée par un freelance.",
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
      "Wix semble gratuit, mais un site pro avec domaine et fonctionnalités coûte bien plus cher. Analyse complète des tarifs Wix en 2025.",
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
    title: "Planity : coût réel pour un salon en 2025",
    description:
      "Planity prélève une commission sur chaque réservation. Coût réel sur la durée et comparatif avec une application mobile sur mesure pour salon.",
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
      "Une vraie app iOS & Android professionnelle pour moins de 1 000€ : oui, c'est possible. Comment et à qui s'adresser en 2025.",
    date: "2026-04-20",
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
  // --- Nouveaux articles SEO ---
  {
    slug: "planity-tarif-prix-abonnement-2025",
    title: "Planity tarif 2025 : prix et commissions décryptés",
    description:
      "Planity tarif 2025 : prix de l'abonnement, commissions et frais cachés. Alternative moins chère pour les salons de coiffure et instituts.",
    date: "2026-04-20",
    readTime: "6 min",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Vous cherchez à connaître le tarif de Planity avant de vous engager ? Vous avez raison de creuser. L'abonnement mensuel n'est que la partie visible de la facture. Voici tout ce que vous devez savoir sur les prix Planity en 2025, sans langue de bois.",
        ],
      },
      {
        heading: "Quel est le prix de l'abonnement Planity en 2025 ?",
        paragraphs: [
          "Planity propose plusieurs formules d'abonnement en fonction du nombre de praticiens et des fonctionnalités incluses. En 2025, les tarifs Planity se situent entre 29€ et 79€/mois selon la formule choisie.",
        ],
        list: [
          "Formule Solo (1 praticien) : environ 29–39€/mois — agenda en ligne, rappels automatiques",
          "Formule Équipe (2–5 praticiens) : environ 49–69€/mois — multi-agenda, statistiques",
          "Formule Salon Pro : environ 69–79€/mois — fonctionnalités avancées, gestion des stocks",
          "Frais d'installation/onboarding : parfois facturés en plus selon la formule",
        ],
      },
      {
        heading: "La commission Planity : ce qu'on vous dit moins",
        paragraphs: [
          "Ce qui distingue Planity d'un simple logiciel de réservation, c'est son annuaire. Planity référence votre salon et vous envoie de nouvelles clientes. En échange, une commission est prélevée sur ces réservations générées par la plateforme.",
          "Cette commission peut représenter 20% de la prestation pour les nouvelles clientes. Sur un soin à 50€, c'est 10€ qui part directement à Planity — en plus de votre abonnement mensuel.",
        ],
        list: [
          "Commission sur les nouvelles clientes via l'annuaire : ~20% du premier rendez-vous",
          "Pas de commission sur les clientes existantes réservant via votre lien direct",
          "Les rappels SMS peuvent être limités sur les formules de base",
          "Augmentation de tarifs possible sans préavis important",
        ],
      },
      {
        heading: "Combien coûte Planity sur 1 an ? Sur 2 ans ?",
        paragraphs: [
          "Prenons un salon avec 2 praticiens, abonnement à 59€/mois, et 8 nouvelles clientes/mois via l'annuaire Planity à 45€ de prestation en moyenne :",
        ],
        list: [
          "Abonnement annuel : 59€ × 12 = 708€/an",
          "Commissions annuaire (20% × 8 × 45€) × 12 mois : 864€/an",
          "Coût réel annuel : environ 1 572€/an",
          "Sur 2 ans : environ 3 144€ — sans jamais posséder quoi que ce soit",
        ],
      },
      {
        heading: "Ce que l'abonnement Planity ne vous donne pas",
        list: [
          "Pas d'application mobile à votre nom sur l'App Store et Google Play",
          "Pas de programme de fidélité personnalisé (tampons numériques, réductions automatiques)",
          "Vos données clients appartiennent en partie à Planity",
          "Aucun contrôle sur le design et l'expérience client",
          "Dépendance totale : si Planity ferme ou augmente ses prix, vous repartez de zéro",
        ],
      },
      {
        heading: "L'alternative à Planity : votre propre application mobile",
        paragraphs: [
          "Pour un prix similaire à 2 ans d'abonnement Planity, je développe une application mobile iOS & Android à votre nom avec : réservation en ligne, rappels automatiques par notification push, programme de fidélité, panel admin pour gérer vos créneaux.",
          "Tarif : 490€ une fois + 49€/mois. Zéro commission. L'app vous appartient à 100%.",
          "Sur 2 ans, c'est 490€ + (49€ × 24) = 1 666€ — pour une solution qui vous appartient, à vos couleurs, avec vos données.",
          "Devis gratuit sous 24h — contactez-moi avec votre projet.",
        ],
      },
    ],
  },
  {
    slug: "wix-tarif-prix-abonnement-2025",
    title: "Wix tarif 2025 : coût réel d'un site pro",
    description:
      "Prix Wix 2025 : abonnement Core, Business, Elite — ce que coûte vraiment Wix pour un site pro. Comparatif avec une solution sur mesure à partir de 490€.",
    date: "2026-04-20",
    readTime: "6 min",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "\"Créez votre site gratuitement\" — le slogan de Wix est séduisant. Mais dès que vous avez besoin d'un nom de domaine propre, d'un site sans pub Wix et de vraies fonctionnalités, les tarifs montent rapidement. Voici le prix réel de Wix en 2025.",
        ],
      },
      {
        heading: "Prix des abonnements Wix en 2025",
        paragraphs: [
          "Wix propose 4 plans principaux pour les sites vitrine et e-commerce :",
        ],
        list: [
          "Plan Light : 13€/mois — domaine propre, sans pub Wix, 2 Go de stockage (trop limité pour un usage pro)",
          "Plan Core : 17€/mois — 50 Go de stockage, analytics de base, 5 formulaires",
          "Plan Business : 25€/mois — e-commerce inclus, paiements en ligne, 100 Go de stockage",
          "Plan Business Elite : 159€/mois — performances avancées, support prioritaire",
          "Plan gratuit : sous-domaine wixsite.com + publicité Wix affichée — inutilisable pour un professionnel",
        ],
      },
      {
        heading: "Les frais cachés de Wix que personne ne mentionne",
        paragraphs: [
          "L'abonnement n'est que la base. Voici ce qui s'accumule dès que vous voulez un site vraiment professionnel :",
        ],
        list: [
          "Nom de domaine : ~15€/an (offert 1 an sur certains plans, puis facturé)",
          "Wix App Market : fonctionnalités essentielles (réservation, chat, avis, marketing) à 5–30€/mois chacune",
          "Emails pro Google Workspace : 6€/mois/utilisateur (non inclus)",
          "Wix Payments : 2,5% de frais de transaction sur chaque vente",
          "Templates premium : certains sont payants entre 49€ et 200€",
          "Support téléphonique : uniquement sur les plans les plus chers",
        ],
      },
      {
        heading: "Wix : les vraies limites techniques",
        paragraphs: [
          "Au-delà du prix, Wix a des contraintes que vous découvrirez seulement après avoir construit votre site :",
        ],
        list: [
          "Verrouillage total : impossible de migrer votre site Wix vers un autre hébergeur",
          "SEO inférieur : malgré les améliorations, les sites Wix se positionnent moins bien qu'un site Next.js ou WordPress optimisé",
          "Temps de chargement : les sites Wix sont souvent lents, ce qui pénalise le référencement Google",
          "Pas d'application mobile native possible depuis Wix",
          "Personnalisation plafonnée : vous restez limité par l'éditeur Wix",
        ],
      },
      {
        heading: "Combien coûte Wix sur 2 ans ? (calcul réel)",
        list: [
          "Plan Core (17€/mois) × 24 = 408€",
          "Nom de domaine × 2 ans = 30€",
          "2 apps Wix Market (20€/mois) × 24 = 480€",
          "Emails Google Workspace (6€/mois) × 24 = 144€",
          "Total estimé sur 2 ans : 1 062€ — pour un site standard sans aucune fonctionnalité sur mesure",
        ],
      },
      {
        heading: "Pourquoi choisir une application mobile sur mesure plutôt que Wix ?",
        paragraphs: [
          "Si vous êtes artisan, restaurateur, coiffeur, prestataire de service ou commerçant : Wix ne vous donnera jamais une application mobile à votre nom sur l'App Store.",
          "Pour 490€ + 49€/mois, je développe une application iOS & Android sur mesure, avec votre charte graphique, vos fonctionnalités, et sans aucun verrouillage. Votre code, vos données, votre application.",
          "Devis gratuit sous 24h — décrivez votre projet et je vous réponds.",
        ],
      },
    ],
  },
  {
    slug: "shopify-tarif-prix-abonnement-2025",
    title: "Shopify tarif 2025 : coût réel d'une boutique en ligne",
    description:
      "Prix Shopify 2025 : abonnement Basic, Advanced, commissions et apps. Coût total réel d'une boutique Shopify et alternative sur mesure.",
    date: "2026-04-20",
    readTime: "7 min",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Shopify est la référence mondiale de l'e-commerce. Mais entre l'abonnement, les commissions sur les transactions, les apps obligatoires et les thèmes premium, le coût réel d'un site Shopify en 2025 dépasse largement ce qu'affichent les pages tarifaires officielles.",
        ],
      },
      {
        heading: "Prix des abonnements Shopify en 2025",
        paragraphs: [
          "Shopify propose 5 plans. Voici les tarifs 2025 (en paiement mensuel) :",
        ],
        list: [
          "Basic : 39€/mois — idéal pour démarrer, 2% de frais de transaction sans Shopify Payments",
          "Shopify : 105€/mois — rapports standards, jusqu'à 5 comptes staff, 1% de frais de transaction",
          "Advanced : 399€/mois — rapports avancés, livraison calculée par transporteur, 0,5% de transaction",
          "Shopify Plus : à partir de 2 300€/mois — pour les grandes enseignes",
          "Starter : 5€/mois — vente via liens et réseaux sociaux uniquement (pas de boutique complète)",
        ],
      },
      {
        heading: "Les frais de transaction Shopify : ce que ça coûte vraiment",
        paragraphs: [
          "Si vous n'utilisez pas Shopify Payments (disponible uniquement dans certains pays), des frais de transaction s'appliquent en plus des frais du prestataire de paiement :",
        ],
        list: [
          "Plan Basic : 2% par transaction — sur 5 000€/mois de CA = 100€/mois de frais Shopify seuls",
          "Plan Shopify : 1% par transaction",
          "Plan Advanced : 0,5% par transaction",
          "Frais Stripe ou PayPal en plus : environ 1,4% + 0,25€ par transaction européenne",
        ],
      },
      {
        heading: "Les coûts cachés d'une boutique Shopify",
        list: [
          "Thème premium : 150€ à 400€ (les thèmes gratuits sont très limités en design et fonctionnalités)",
          "Apps indispensables : avis produits, upsell, récupération panier abandonné, SEO avancé — 50 à 200€/mois cumulés",
          "Nom de domaine : 14€/an (non inclus dans l'abonnement)",
          "Email marketing : Klaviyo ou Mailchimp, à partir de 20€/mois",
          "Développeur Shopify pour les customisations : 400–600€/jour",
          "Traductions multilingues : module payant requis hors plan Advanced",
        ],
      },
      {
        heading: "Coût réel Shopify sur 2 ans (plan Basic réaliste)",
        list: [
          "Abonnement Basic × 24 : 39€ × 24 = 936€",
          "Thème premium : 250€ (une fois)",
          "Apps cumulées 50€/mois × 24 : 1 200€",
          "Nom de domaine × 2 ans : 28€",
          "Frais de transaction 2% sur 3 000€/mois × 24 mois : 1 440€",
          "Total sur 2 ans : environ 3 854€ — sans aucune ligne de code personnalisée",
        ],
      },
      {
        heading: "Ce que Shopify ne peut pas faire",
        list: [
          "Application mobile native iOS & Android à votre nom : impossible sans développement séparé",
          "Personnalisation profonde de la logique métier sans développeur Liquid/Shopify",
          "Propriété de votre infrastructure : vous êtes locataire chez Shopify",
          "Hébergement des données en Europe si requis par votre politique RGPD",
          "Expérience client vraiment différenciante face à des milliers de boutiques qui utilisent les mêmes thèmes",
        ],
      },
      {
        heading: "L'alternative : une boutique mobile sur mesure sans abonnement Shopify",
        paragraphs: [
          "Pour les commerçants qui veulent une boutique en ligne + une application mobile iOS & Android, je propose l'offre App Boutique : 0€ d'installation, 12% de commission sur les ventes uniquement — comme Shopify, mais avec une vraie app mobile à votre nom.",
          "Aucun abonnement mensuel. Aucun frais de transaction fixe. Vous ne payez que quand vous vendez.",
          "Contactez-moi pour un devis gratuit — je vous réponds sous 24h.",
        ],
      },
    ],
  },
  {
    slug: "squarespace-tarif-prix-2025",
    title: "Squarespace tarif 2025 : prix des abonnements et vraie valeur",
    description:
      "Prix Squarespace 2025 : plans Personal, Business, Commerce — ce que coûte vraiment Squarespace pour un site pro. Comparatif avec une solution sur mesure.",
    date: "2026-04-20",
    readTime: "5 min",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Squarespace est réputé pour ses templates soignés et son interface élégante. Mais quel est le vrai prix de Squarespace en 2025, une fois tous les frais additionnels pris en compte ?",
        ],
      },
      {
        heading: "Prix des plans Squarespace en 2025",
        paragraphs: [
          "Squarespace facture en abonnement annuel ou mensuel. Les tarifs mensuels sont :",
        ],
        list: [
          "Personal : 16€/mois (annuel) ou 23€/mois — site vitrine, domaine inclus 1 an, pas de vente en ligne",
          "Business : 23€/mois (annuel) ou 33€/mois — e-commerce avec 3% de commission par vente",
          "Commerce Basic : 28€/mois (annuel) — e-commerce sans commission, fonctionnalités boutique avancées",
          "Commerce Advanced : 52€/mois (annuel) — abonnements, ventes en gros, API avancée",
        ],
      },
      {
        heading: "La commission de 3% sur le plan Business",
        paragraphs: [
          "Le plan Business est le plus choisi par défaut — mais il prélève 3% sur chaque vente. Sur 2 000€/mois de CA, c'est 60€/mois de commission qui part à Squarespace, soit 720€/an en plus de l'abonnement.",
          "Pour supprimer cette commission, il faut passer au plan Commerce Basic (28€/mois) — ce qui fait vite grimper la facture réelle.",
        ],
      },
      {
        heading: "Les coûts additionnels Squarespace",
        list: [
          "Extensions Squarespace (apps tierces) : 5–20€/mois par extension",
          "Emails Google Workspace : 6€/mois/utilisateur",
          "Campagnes email marketing Squarespace : à partir de 7€/mois",
          "Domaine après la 1ère année : 20–30€/an",
          "Squarespace Scheduling (prise de rendez-vous) : en supplément",
        ],
      },
      {
        heading: "Les limites de Squarespace à connaître",
        list: [
          "Impossible de migrer votre site vers un autre hébergeur",
          "Pas d'application mobile native possible",
          "Personnalisation très limitée : vous restez dans l'éditeur Squarespace",
          "SEO moins performant qu'un site Next.js ou WordPress bien optimisé",
          "Support uniquement par chat et email — pas de téléphone",
        ],
      },
      {
        heading: "Squarespace vs une solution sur mesure",
        paragraphs: [
          "Squarespace coûte entre 400€ et 750€/an pour un plan pro, sans compter extensions et commissions. En 2 ans, vous avez dépensé entre 800€ et 1 500€ pour un site qui ne vous appartient pas.",
          "Pour un budget similaire, je développe un site sur mesure ou une application mobile iOS & Android à partir de 490€, avec votre code, vos données, et zéro dépendance à une plateforme.",
          "Devis gratuit sous 24h — contactez-moi.",
        ],
      },
    ],
  },
  {
    slug: "comparatif-createurs-site-web-prix-2025",
    title: "Wix, Squarespace, Webflow : comparatif prix 2025",
    description:
      "Comparatif prix 2025 : Wix, Squarespace, Webflow, Jimdo. Quel constructeur de site web est le moins cher et quelle alternative choisir ?",
    date: "2026-04-20",
    readTime: "8 min",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Vous voulez créer un site web professionnel et vous comparez les prix des constructeurs de site ? Wix, Squarespace, Webflow, Jimdo, Ionos, GoDaddy — chaque plateforme a sa propre grille tarifaire, avec ses avantages et ses pièges. Voici le comparatif complet des prix en 2025.",
        ],
      },
      {
        heading: "Tableau des prix des constructeurs de site web en 2025",
        paragraphs: [
          "Voici les tarifs d'entrée pour un site professionnel (avec domaine propre, sans pub, fonctionnalités e-commerce si applicable) :",
        ],
        list: [
          "Wix Core : 17€/mois (204€/an) — site vitrine pro, stockage 50 Go",
          "Squarespace Personal : 16€/mois (192€/an) — site vitrine, pas de vente en ligne",
          "Jimdo Business : 15€/mois (180€/an) — site vitrine, SEO basique",
          "Ionos Essentiel : 6€/mois (72€/an) — entrée de gamme, fonctionnalités très limitées",
          "GoDaddy Basic : 10€/mois (120€/an) — site vitrine, intégrations limitées",
          "Webflow Basic : 18€/mois (216€/an) — pour designers, courbe d'apprentissage élevée",
          "WordPress.com Business : 25€/mois (300€/an) — plugins inclus, plus flexible",
        ],
      },
      {
        heading: "Le piège commun à tous ces constructeurs",
        paragraphs: [
          "Tous ces outils partagent le même modèle économique : vous êtes locataire. Votre site vit sur leurs serveurs, dans leur écosystème. Si la plateforme ferme, augmente ses prix ou change ses conditions — vous n'avez aucun recours.",
          "Et aucun de ces constructeurs ne vous permettra jamais de créer une vraie application mobile iOS & Android native à votre nom.",
        ],
        list: [
          "Verrouillage plateforme : impossible ou très difficile de migrer vers un autre hébergeur",
          "SEO plafonné : les sites sur plateforme sont moins bien référencés que les sites sur mesure",
          "Personnalisation limitée : vous restez dans les templates et contraintes de l'éditeur",
          "Coût cumulé : sur 3–5 ans, le total dépasse souvent le coût d'un site sur mesure",
          "Pas d'application mobile native possible",
        ],
      },
      {
        heading: "Quel constructeur de site choisir selon votre besoin ?",
        list: [
          "Site vitrine simple (artisan, professionnel libéral) : Ionos ou GoDaddy si budget serré, Squarespace si vous voulez du beau",
          "Boutique e-commerce : Shopify reste la référence, mais regardez les commissions",
          "Blog ou site de contenu : WordPress.com ou Wix Core",
          "Site très personnalisé (designers, agences) : Webflow",
          "Vous voulez une application mobile en plus : aucun de ces outils ne peut le faire",
        ],
      },
      {
        heading: "L'alternative sur mesure : moins cher sur la durée",
        paragraphs: [
          "Un site sur mesure ou une application mobile développée par un freelance coûte plus cher en une fois — mais vous appartient définitivement.",
          "Sur 3 ans, un site Wix à 17€/mois + apps cumulées vous coûte facilement 1 500€ à 2 000€ pour un résultat standard. Un site sur mesure à 800€ est rentabilisé dès la 2ème année — et vous pouvez le déplacer, le faire évoluer, le vendre.",
          "Et si vous êtes restaurateur, salon de coiffure, commerçant ou prestataire de services : une application mobile iOS & Android à partir de 490€ remplace avantageusement n'importe quel constructeur de site.",
          "Devis gratuit sous 24h — contactez-moi avec votre projet.",
        ],
      },
    ],
  },
  {
    slug: "tarif-creation-site-internet-2025",
    title: "Tarif création site internet 2025 : le vrai prix",
    description:
      "Quel est le prix d'un site internet en 2025 ? Freelance, agence, constructeur DIY (Wix, Squarespace) — comparatif complet des tarifs de création de site web.",
    date: "2026-04-20",
    readTime: "7 min",
    category: "Tarifs",
    sections: [
      {
        paragraphs: [
          "\"Combien coûte un site internet ?\" — c'est l'une des questions les plus posées sur Google. Et la réponse varie de 0€ (Wix gratuit) à 80 000€ (agence digitale grand compte). Voici un guide honnête des tarifs réels en 2025, selon votre besoin et votre budget.",
        ],
      },
      {
        heading: "Option 1 : les constructeurs de site (Wix, Squarespace, Jimdo…)",
        paragraphs: [
          "Les plateformes DIY permettent de créer un site sans coder. Idéales pour un premier site vitrine rapide.",
        ],
        list: [
          "Tarif : 6€ à 30€/mois selon la plateforme et le plan",
          "Sur 2 ans : 150€ à 900€ (abonnement seul, sans apps supplémentaires)",
          "Avantages : rapide à mettre en place, pas de compétences techniques requises",
          "Inconvénients : site non propriétaire, SEO limité, pas d'app mobile possible, verrouillage plateforme",
        ],
      },
      {
        heading: "Option 2 : WordPress avec hébergement",
        paragraphs: [
          "WordPress (self-hosted) est la solution la plus répandue dans le monde. Vous installez WordPress sur votre hébergeur, vous choisissez un thème, et vous personnalisez.",
        ],
        list: [
          "Hébergement : 3€ à 15€/mois (OVH, Infomaniak, o2switch)",
          "Thème premium : 50€ à 150€ (WPAstra, Divi, Elementor Pro)",
          "Plugins indispensables : 50€ à 200€/an cumulés",
          "Maintenance et sécurité : à gérer soi-même ou à déléguer (50–150€/mois)",
          "Total sur 2 ans (DIY) : 250€ à 600€ — mais demande du temps et des compétences techniques",
        ],
      },
      {
        heading: "Option 3 : un développeur freelance",
        paragraphs: [
          "Un freelance développe votre site sur mesure : design personnalisé, fonctionnalités spécifiques, SEO optimisé. Vous obtenez exactement ce dont vous avez besoin, ni plus ni moins.",
        ],
        list: [
          "Site vitrine simple : 400€ à 1 500€ selon les fonctionnalités",
          "Site e-commerce : 800€ à 3 000€",
          "Application mobile iOS & Android : 490€ à 2 000€ (BreizhApp)",
          "Site + app mobile : bundle possible à partir de 800€",
          "Avantages : sur mesure, SEO optimisé, vous possédez votre code, pas de verrouillage",
        ],
      },
      {
        heading: "Option 4 : une agence web",
        paragraphs: [
          "Une agence met à disposition toute une équipe : chef de projet, designer, développeurs, référenceur. Adapté aux grandes entreprises avec des budgets conséquents.",
        ],
        list: [
          "Site vitrine : 3 000€ à 15 000€",
          "Site e-commerce : 8 000€ à 50 000€",
          "Application mobile : 15 000€ à 80 000€",
          "Délais : 1 à 6 mois",
          "Adapté pour : grandes entreprises, projets complexes avec équipes multiples",
        ],
      },
      {
        heading: "Quel tarif choisir selon votre profil ?",
        list: [
          "Vous démarrez et avez un budget < 200€/an : commencez par Wix ou Squarespace, mais prévoyez de migrer",
          "Vous êtes artisan, commerçant, prestataire de service : un freelance à 490–800€ est le meilleur rapport qualité/prix",
          "Vous vendez en ligne : Shopify ou une boutique mobile sur mesure (0€ + commission)",
          "Vous avez besoin d'une app mobile : seul un développeur freelance peut vous l'offrir pour moins de 15 000€",
          "Vous êtes une grande entreprise : une agence web",
        ],
      },
      {
        heading: "Mon offre : site ou app mobile à partir de 490€",
        paragraphs: [
          "Je suis développeur freelance basé à Brest, spécialisé dans les applications mobiles iOS & Android. Je travaille avec des TPE, artisans, restaurateurs et commerçants qui veulent une vraie présence numérique sans le budget d'une grande entreprise.",
          "App Starter à 490€, App Premium à 600€, App Boutique à 0€ d'installation (12% sur les ventes). Devis gratuit sous 24h.",
        ],
      },
    ],
  },
  {
    slug: "site-web-restaurant-brest",
    title: "Site web pour restaurant à Brest : guide 2025",
    description:
      "Menu en ligne, réservation, commande à emporter : tout ce qu'un site web de restaurant à Brest doit avoir en 2025. Tarifs et conseils d'un développeur local.",
    date: "2026-04-25",
    readTime: "6 min",
    category: "Restaurants",
    sections: [
      {
        paragraphs: [
          "Vous êtes restaurateur à Brest et votre site web date de 2018 — ou vous n'en avez pas encore ? En 2025, un client qui ne vous trouve pas en ligne choisit le restaurant d'à côté. Voici ce qu'un bon site de restaurant doit avoir, et ce que ça coûte vraiment.",
        ],
      },
      {
        heading: "Pourquoi un site web ne suffit plus pour un restaurant à Brest",
        paragraphs: [
          "Les restaurateurs brestois font face à une concurrence numérique forte : TheFork, Google Maps, Tripadvisor, Uber Eats... Ces plateformes captent votre clientèle et prennent entre 15% et 30% de commission sur chaque commande ou réservation.",
          "Un site web bien conçu vous permet de reprendre la main : apparaître en premier sur Google quand quelqu'un cherche \"restaurant Brest\", gérer vos propres réservations, et proposer la commande en ligne sans commission.",
        ],
      },
      {
        heading: "Les fonctionnalités indispensables en 2025",
        list: [
          "Menu en ligne à jour : vos clients consultent votre carte depuis leur téléphone avant de venir — si elle n'est pas là, ils vont ailleurs",
          "Réservation en ligne 24h/24 : formulaire simple avec confirmation automatique par email et SMS",
          "Commande à emporter ou livraison : directement sur votre site, sans passer par Uber Eats ou Deliveroo",
          "Photos professionnelles de vos plats et de votre salle : 70% des clients décident sur les visuels",
          "Fiche Google Business optimisée : liée à votre site, avec vos horaires, votre adresse et vos avis",
          "Site rapide sur mobile : 80% des recherches \"restaurant Brest\" se font depuis un smartphone",
        ],
      },
      {
        heading: "Ce que coûte un site web pour un restaurant à Brest",
        paragraphs: [
          "Il existe trois niveaux de prix selon vos besoins :",
        ],
        list: [
          "Site vitrine simple (menu, horaires, contact) : 400€ à 800€ chez un freelance local — suffisant pour apparaître sur Google",
          "Site avec réservation en ligne : 800€ à 1 500€ — idéal pour réduire les appels téléphoniques",
          "Site + commande en ligne avec paiement : 1 200€ à 2 500€ — pour s'affranchir des plateformes",
          "Application mobile iOS & Android à partir de 490€ : votre restaurant directement sur le téléphone de vos clients",
        ],
      },
      {
        heading: "Site web ou application mobile : que choisir ?",
        paragraphs: [
          "Un site web est indexé par Google et accessible sans téléchargement — c'est la base. Une application mobile va plus loin : notifications push (\"Offre spéciale ce soir\"), programme de fidélité, commande en un clic pour les clients réguliers.",
          "Pour un restaurant à Brest, la combinaison idéale est un site web bien référencé + une application mobile pour fidéliser la clientèle locale.",
          "Je développe les deux depuis Brest. Devis gratuit sous 24h — décrivez votre projet.",
        ],
      },
      {
        heading: "Le référencement local : apparaître sur Google quand on cherche \"restaurant Brest\"",
        paragraphs: [
          "Un site web ne suffit pas s'il n'est pas visible. Voici les éléments clés pour apparaître en tête des résultats locaux :",
        ],
        list: [
          "Fiche Google Business complète et vérifiée avec vos vraies photos",
          "Mentions de Brest, du quartier (Recouvrance, Saint-Martin, Bellevue...) et de votre type de cuisine dans vos textes",
          "Avis Google : invitez chaque client satisfait à en laisser un — c'est le facteur n°1 pour le ranking local",
          "Site rapide et mobile-first : Google pénalise les sites lents dans les résultats locaux",
          "Données structurées Restaurant (schema.org) : informent Google sur vos horaires, votre menu et votre localisation",
        ],
      },
    ],
  },
  {
    slug: "application-mobile-restaurant-bretagne",
    title: "App mobile restaurant en Bretagne : guide 2025",
    description:
      "App mobile pour restaurant en Bretagne : fonctionnalités, tarifs et retour sur investissement. Guide par un développeur freelance basé à Brest.",
    date: "2026-04-25",
    readTime: "7 min",
    category: "Restaurants",
    sections: [
      {
        paragraphs: [
          "Les restaurateurs bretons sont de plus en plus nombreux à sauter le pas : avoir leur propre application mobile plutôt que de dépendre de Uber Eats, TheFork ou Planity. Moins de commission, plus de fidélité client, une image plus professionnelle.",
          "Je suis développeur freelance basé à Brest, et je travaille avec des restaurants, crêperies, bars et commerces alimentaires en Bretagne. Voici ce que vous devez savoir avant de vous lancer.",
        ],
      },
      {
        heading: "Pourquoi une application mobile pour votre restaurant en Bretagne ?",
        paragraphs: [
          "La Bretagne a une culture gastronomique forte — crêperies, fruits de mer, restaurants bistronomiques — et une clientèle locale fidèle. Une application mobile bien conçue transforme un client de passage en habitué.",
        ],
        list: [
          "Notifications push : prévenez vos clients du plat du jour, d'une soirée spéciale ou d'une offre limitée — directement sur leur téléphone",
          "Programme de fidélité numérique : tampons virtuels, réductions automatiques à la 10ème visite, cadeaux d'anniversaire",
          "Commande en ligne sans commission : gardez 100% de vos recettes au lieu de reverser 15 à 30% à Uber Eats",
          "Réservation de table 24h/24 avec confirmation automatique",
          "Carte du menu toujours à jour, modifiable en temps réel depuis votre panel admin",
        ],
      },
      {
        heading: "Combien coûte une application mobile pour un restaurant breton ?",
        paragraphs: [
          "C'est souvent la première question. Et la réponse est bien moins effrayante que ce que les restaurateurs imaginent.",
        ],
        list: [
          "App Starter à 490€ + 49€/mois : application iOS & Android avec menu, réservation, notifications push, panel admin",
          "App Premium à 600€ + 49€/mois : tout le Starter + commande en ligne avec paiement Stripe, programme de fidélité",
          "App Boutique à 0€ d'installation : pour les restaurants avec livraison, 12% sur les ventes — zéro risque au départ",
          "Délai de livraison : 3 à 5 semaines selon les fonctionnalités",
        ],
      },
      {
        heading: "Retour sur investissement : les chiffres réels",
        paragraphs: [
          "Un restaurateur de Brest m'a contacté après avoir calculé qu'Uber Eats lui coûtait environ 600€ par mois en commissions (20% sur 3 000€ de commandes livraison). Il a investi 600€ dans une application mobile avec commande en ligne.",
          "En deux mois, ses clients réguliers avaient basculé sur l'app. Les commissions Uber Eats ont chuté de 60%. L'app était rentabilisée.",
        ],
        list: [
          "Économie sur commissions Uber Eats/Deliveroo : 200€ à 1 000€/mois selon le volume",
          "Augmentation de la fréquence de visite grâce aux notifications push : +15 à 25% observés",
          "Programme de fidélité : augmente la valeur client sur 12 mois",
          "Image professionnelle différenciante face aux concurrents sans app",
        ],
      },
      {
        heading: "Exemples de restaurants et commerces alimentaires accompagnés en Bretagne",
        paragraphs: [
          "Je travaille avec des restaurateurs sur Brest, Quimper, Rennes et le reste de la Bretagne. Les profils typiques :",
        ],
        list: [
          "Restaurants et brasseries : commande sur place via QR code, commande à emporter, programme de fidélité",
          "Crêperies : menu saisonnier modifiable en temps réel, réservation de groupe",
          "Restaurants de fruits de mer : disponibilité en temps réel, commande de plateau pour enlèvement",
          "Bars et bistrots : événements, soirées à thème, préventes de billets via l'app",
          "Traiteurs et food trucks : planning de présence, commande à l'avance, paiement en ligne",
        ],
      },
      {
        heading: "Par où commencer ?",
        paragraphs: [
          "La première étape est un appel ou un échange par message pour définir vos besoins. Je vous pose les bonnes questions : volume de commandes, clientèle, fonctionnalités prioritaires, budget.",
          "Sous 48h, vous recevez un devis détaillé avec le périmètre exact, les délais et le prix final. Pas de surprise.",
          "Contactez-moi pour un devis gratuit — je réponds sous 24h, même le weekend.",
        ],
      },
    ],
  },
  {
    slug: "creation-site-pizzeria-brest",
    title: "Site web pizzeria à Brest : tarifs et guide 2025",
    description:
      "Site web pour votre pizzeria à Brest : commande en ligne, menu digital, référencement local. Tarifs et conseils d'un développeur freelance brestois.",
    date: "2026-04-25",
    readTime: "6 min",
    category: "Restaurants",
    sections: [
      {
        paragraphs: [
          "Vous avez une pizzeria à Brest et vous voulez récupérer vos commandes en ligne sans payer 25% à Uber Eats ou Just Eat ? Ou simplement apparaître en premier quand quelqu'un cherche \"pizzeria Brest\" sur Google ? Ce guide vous explique exactement ce qu'il faut faire — et ce que ça coûte.",
        ],
      },
      {
        heading: "Le problème des plateformes de livraison pour les pizzerias brestoises",
        paragraphs: [
          "Uber Eats, Just Eat, Deliveroo : ces plateformes vous apportent de la visibilité au départ, mais à un prix élevé. Entre 20% et 30% de commission sur chaque commande, plus les frais d'activation et les campagnes promotionnelles \"conseillées\".",
          "Sur une pizza à 14€, vous reversez entre 2,80€ et 4,20€ à la plateforme. Sur 50 pizzas par soir, c'est 140€ à 210€ qui ne vous reviennent pas — soit 4 000€ à 6 000€ par mois sur une activité de livraison correcte.",
          "Un site avec commande en ligne directe vous coûte quelques centaines d'euros une fois. L'amortissement est immédiat.",
        ],
      },
      {
        heading: "Ce qu'un site web de pizzeria doit avoir à Brest",
        list: [
          "Menu en ligne avec photos : vos pizzas, leurs ingrédients, leurs tailles et leurs prix — accessibles depuis un téléphone en 3 secondes",
          "Commande en ligne avec choix livraison ou emporter : paiement sécurisé par Stripe, confirmation automatique par SMS",
          "Estimation du temps de préparation en temps réel : réduit les appels téléphoniques pendant le coup de feu",
          "Page Google optimisée : heures d'ouverture, zone de livraison, lien de commande directement dans Google Maps",
          "Avis clients intégrés : widget Google Reviews ou système d'avis interne pour rassurer les nouveaux clients",
          "Version mobile parfaite : 85% des commandes de pizzas se font depuis un smartphone",
        ],
      },
      {
        heading: "Référencement local : comment apparaître sur \"pizzeria Brest\" ?",
        paragraphs: [
          "Google affiche en priorité les résultats locaux pour les recherches alimentaires. Voici ce qui détermine votre position :",
        ],
        list: [
          "Fiche Google Business complète : photos récentes, horaires exacts, réponses aux avis, menu uploadé",
          "Avis Google en quantité et en qualité : demandez à chaque client satisfait de laisser un avis — 10 avis 5 étoiles font une vraie différence à Brest",
          "Site rapide et bien structuré : Google pénalise les sites lents — un site Next.js ou WordPress optimisé charge en moins d'une seconde",
          "Contenu local : mentionnez Brest, vos quartiers de livraison (Saint-Marc, Lambézellec, Kerichen...), et les événements locaux",
          "Schema markup Restaurant : données structurées qui informent Google sur votre type d'établissement, vos horaires et votre menu",
        ],
      },
      {
        heading: "Application mobile ou site web : que choisir pour une pizzeria ?",
        paragraphs: [
          "Pour une pizzeria à Brest, ma recommandation est claire :",
        ],
        list: [
          "Site web en priorité : apparaître sur Google est non-négociable — c'est le premier canal d'acquisition",
          "Application mobile en complément : pour les clients réguliers, les notifications \"Pizza du vendredi\" et le programme de fidélité (ex. 10 pizzas achetées = 1 offerte)",
          "L'app fidélise, le site acquiert — les deux se complètent parfaitement",
        ],
      },
      {
        heading: "Tarifs pour la création d'un site de pizzeria à Brest",
        paragraphs: [
          "Je propose des formules adaptées aux pizzerias et restaurants indépendants :",
        ],
        list: [
          "Site vitrine + menu en ligne : à partir de 490€ — idéal pour apparaître sur Google et présenter votre carte",
          "Site + commande en ligne avec paiement Stripe : à partir de 800€ — vos clients commandent directement, vous recevez les commandes sur votre écran",
          "Application mobile iOS & Android : à partir de 490€ + 49€/mois — notifications push, programme de fidélité, commande intégrée",
          "Pack site + app mobile : à partir de 900€ — la solution complète pour s'affranchir des plateformes",
          "Devis gratuit sous 24h — je suis à Brest et je peux vous rencontrer pour discuter de votre projet",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
