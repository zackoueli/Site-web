export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastModified?: string;
  category: string;
  service: string;
  /** Image d'illustration (vignette blog + en-tête d'article). Le crédit est requis pour les photos Wikimedia Commons. */
  image?: { src: string; alt: string; credit?: string };
  sections: Section[];
};

type Section = {
  heading?: string;
  paragraphs?: string[];
  /** Sous-parties (H3) avec leurs paragraphes. */
  subsections?: { heading: string; paragraphs: string[] }[];
  list?: string[];
  table?: { head: string[]; rows: string[][] };
  /** Encadré mis en avant (alerte, règle à retenir). */
  callout?: { title?: string; text: string };
  image?: { src: string; alt: string; caption?: string };
};

export const articles: Article[] = [
  {
    slug: "combien-coute-application-mobile",
    image: {
      src: "/blog/combien-coute-application-mobile.jpg",
      alt: "Bureau en bois avec calculatrice, billets et pièces en euros, carnet de croquis de wireframes, café et smartphone posé face contre table",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Application mobile : combien ça coûte en 2026 ?",
    description:
      "Combien coûte une application iOS & Android en 2026 ? Ce qui fait varier le prix, comment lire et comparer un devis, pièges à éviter et frais après.",
    date: "2025-03-15",
    lastModified: "2026-10-01",
    category: "Tarifs",
    sections: [
      {
        paragraphs: [
          "Combien coûte une application mobile ? La question est simple, la réponse beaucoup moins. Pour une application iOS et Android, les devis que vous recevrez peuvent aller de quelques milliers d'euros chez un développeur freelance à 80 000€ dans une grande agence. Et le plus déroutant, c'est que deux devis très éloignés peuvent décrire exactement la même application sur le papier.",
          "Cet écart n'est pas une arnaque. Il s'explique par trois choses : la technologie utilisée, la structure de l'équipe, et surtout ce qui est réellement inclus dans le prix. Dans ce guide, je vous explique ce qui fait varier le budget, comment lire un devis ligne par ligne, et quelles questions poser avant de signer pour ne pas avoir de mauvaise surprise.",
        ],
      },
      {
        heading: "Un devis d'application mobile, c'est quoi ?",
        paragraphs: [
          "Un devis d'application mobile n'est pas un simple prix. C'est le document qui fixe ce qui sera livré, dans quels délais et pour quel budget. C'est lui qui fera foi si, en cours de projet, une fonctionnalité que vous pensiez acquise n'est finalement « pas prévue ».",
          "Un devis sérieux détaille donc chaque poste, au lieu d'afficher un montant global. Voici ce qu'il doit couvrir, au minimum :",
        ],
        table: {
          head: ["Poste", "Ce qu'il couvre"],
          rows: [
            ["Design", "Maquettes des écrans, validées avec vous avant le développement"],
            ["Développement", "L'application elle-même, pour iOS et pour Android"],
            ["Back-end", "Base de données, logique serveur et hébergement"],
            ["Comptes utilisateurs", "Inscription, connexion, mot de passe oublié, éventuellement Google et Apple"],
            ["Intégrations", "Paiement en ligne, outils tiers, API externes"],
            ["Tests", "Vérification de chaque parcours avant la mise en ligne"],
            ["Publication", "Mise en ligne sur l'App Store et Google Play, fiche store comprise"],
            ["Suivi", "Corrections et ajustements des premières semaines après le lancement"],
          ],
        },
        callout: {
          title: "La règle à retenir",
          text: "Ce qui n'est pas écrit dans le devis n'est pas prévu. Soit ce sera absent à la livraison, soit ce sera facturé en supplément plus tard, à un moment où il sera difficile de faire marche arrière.",
        },
      },
      {
        heading: "Pourquoi les prix varient autant",
        paragraphs: [
          "La première raison tient à la façon dont l'application est développée. Une application « 100 % native » demande en réalité deux applications : une écrite pour iOS, une autre pour Android, chacune avec son développeur. React Native, le framework créé par Meta, permet au contraire d'écrire une seule base de code qui fonctionne sur les deux plateformes. Pour la grande majorité des projets, c'est presque deux fois moins de développement, sans différence visible pour l'utilisateur.",
          "La deuxième raison tient à la structure de l'équipe. Une agence emploie plusieurs profils (chef de projet, designer, développeurs iOS, Android et back-end, testeur), chacun facturé à la journée, et ajoute ses frais de structure. Sur un projet de trois mois, l'addition monte vite :",
        ],
        table: {
          head: ["Profil en agence", "Tarif journalier moyen"],
          rows: [
            ["Chef de projet", "400 à 600€"],
            ["Designer UX/UI", "350 à 500€"],
            ["Développeur iOS natif", "500 à 700€"],
            ["Développeur Android natif", "500 à 700€"],
            ["Développeur back-end", "450 à 650€"],
          ],
        },
      },
      {
        paragraphs: [
          "Trois mois avec cinq personnes, et le budget atteint facilement 50 000€ à 80 000€. Un développeur freelance spécialisé en React Native maîtrise au contraire toute la chaîne, du design à la publication sur les stores. Même qualité de code, mais sans intermédiaire, sans frais de structure et avec une seule base de code. C'est la structure qui coûte moins cher, pas la qualité.",
          "La troisième raison, la plus importante, c'est le périmètre : ce qui est inclus dans le devis, et ce qui ne l'est pas. C'est l'objet des parties suivantes.",
        ],
      },
      {
        heading: "Les 6 facteurs qui font varier le budget",
        paragraphs: [
          "À technologie et prestataire égaux, le prix d'une application dépend avant tout de ce qu'elle doit faire. Voici les six facteurs qui pèsent le plus lourd.",
        ],
        subsections: [
          {
            heading: "1. Le nombre d'écrans et le niveau de design",
            paragraphs: [
              "Une application de 5 écrans n'a pas le même coût qu'une application de 20 écrans. Le niveau de finition compte aussi : une interface entièrement dessinée sur mesure, avec des animations, demande plus de temps qu'un design construit à partir de composants existants. Les deux sont possibles, l'important est que le devis dise lequel est prévu.",
            ],
          },
          {
            heading: "2. Les comptes utilisateurs",
            paragraphs: [
              "Dès que vos utilisateurs doivent se connecter, il faut gérer l'inscription, la connexion, le mot de passe oublié et la sécurité des données. Chaque mode de connexion supplémentaire (compte Google, compte Apple) et chaque rôle différent (client, gérant, administrateur) ajoute du travail.",
            ],
          },
          {
            heading: "3. Le back-end et le panel d'administration",
            paragraphs: [
              "La partie invisible de l'application, la base de données et la logique serveur, représente souvent une bonne part du travail. Un panel d'administration, qui vous permet de modifier les contenus sans développeur, en fait partie : il vous rend autonome au quotidien, mais il doit être prévu et chiffré.",
            ],
          },
          {
            heading: "4. Les intégrations avec d'autres outils",
            paragraphs: [
              "Connecter votre application à un logiciel de caisse, un ERP, un CRM ou une API externe représente du travail supplémentaire, très variable selon l'outil. Un chiffrage sérieux suppose d'avoir regardé la documentation de l'outil en question : méfiez-vous d'un prix donné en dix minutes sans cette vérification.",
            ],
          },
          {
            heading: "5. Le paiement et la monétisation",
            paragraphs: [
              "Encaisser des paiements avec Stripe, vendre des abonnements ou des achats dans l'application via les systèmes d'Apple et de Google : chaque modèle a ses règles et sa mise en place. Si votre application doit rapporter de l'argent, cette brique ne doit jamais être « en option ».",
            ],
          },
          {
            heading: "6. La clarté du projet au départ",
            paragraphs: [
              "C'est le facteur le plus sous-estimé. Un projet qui démarre sur une idée floue dérive presque toujours en budget, parce que les besoins se découvrent en cours de route. Prendre le temps de définir les fonctionnalités prioritaires avant de commencer, quitte à garder le reste pour une deuxième version, est le meilleur moyen de tenir le prix annoncé.",
            ],
          },
        ],
      },
      {
        heading: "Freelance, agence ou no-code : quel prestataire ?",
        subsections: [
          {
            heading: "L'agence",
            paragraphs: [
              "Une équipe complète, des process établis et la capacité de mener de gros projets en parallèle. C'est le bon choix pour une application très complexe ou une grande entreprise, avec un budget qui commence généralement autour de 15 000€ et des délais de plusieurs mois.",
            ],
          },
          {
            heading: "Le développeur freelance",
            paragraphs: [
              "Un seul interlocuteur, qui conçoit, développe et publie votre application. Pour une TPE, un commerçant ou un porteur de projet, c'est souvent le meilleur rapport qualité-prix, à condition de choisir quelqu'un qui maîtrise toute la chaîne et qui vous laisse propriétaire du code.",
            ],
          },
          {
            heading: "Les outils no-code",
            paragraphs: [
              "Glide, Adalo ou Bubble permettent d'assembler une application sans coder. C'est utile pour tester une idée très vite, mais le résultat ressemble souvent à un site web déguisé en application, il est limité dès qu'on sort des cas prévus et il dépend d'un abonnement à vie. Apple refuse d'ailleurs régulièrement ce type d'applications sur l'App Store.",
            ],
          },
        ],
        callout: {
          title: "Les offres à fuir",
          text: "Les applications à quelques centaines d'euros sur les plateformes de freelance à bas prix : du code assemblé à la hâte, sans support ni publication réelle sur les stores. À ce prix, ce que vous achetez n'est pas une application, c'est une démo.",
        },
      },
      {
        heading: "Comment comparer deux devis",
        paragraphs: [
          "Devant deux devis très différents, le réflexe est de comparer les montants. C'est une erreur : il faut d'abord comparer ce qui est livré. Un devis à petit prix cache presque toujours des exclusions, rarement écrites noir sur blanc.",
          "Les plus fréquentes : le design qui n'est pas inclus (« vous nous fournissez les maquettes »), des tests réduits au strict minimum, l'hébergement du back-end laissé à votre charge sans que ce soit dit, des retouches limitées à un ou deux allers-retours puis facturées, le paiement dans l'application proposé « en option », la fiche App Store et Google Play oubliée, ou encore aucun suivi après la mise en ligne.",
          "Pour comparer honnêtement, reprenez le tableau des postes plus haut et vérifiez, devis par devis, que chaque ligne est bien couverte. Les écarts de prix s'expliquent alors très vite.",
        ],
      },
      {
        heading: "Les questions à poser avant de signer",
        paragraphs: [
          "Un devis se lit aussi entre les lignes. Ces quelques questions suffisent souvent à distinguer un prestataire sérieux.",
        ],
        subsections: [
          {
            heading: "Qu'est-ce qui n'est pas inclus ?",
            paragraphs: [
              "La réponse en dit souvent plus que le devis lui-même. Un prestataire sérieux vous répond sans hésiter, et le précise par écrit.",
            ],
          },
          {
            heading: "Qui fait le design, et qui développe ?",
            paragraphs: [
              "Une sous-traitance qui n'est pas annoncée rallonge souvent les délais et complique les échanges. Vous devez savoir qui travaille réellement sur votre application.",
            ],
          },
          {
            heading: "Quelles sont les étapes, et quand verrai-je les premiers écrans ?",
            paragraphs: [
              "Un devis sans étapes datées reste une intention. Demandez quand vous verrez les maquettes, puis une première version à tester sur votre téléphone.",
            ],
          },
          {
            heading: "Comment se répartissent les paiements ?",
            paragraphs: [
              "Un acompte à la signature puis des versements à chaque étape, c'est la norme. Devoir tout payer d'avance est un signal d'alarme.",
            ],
          },
          {
            heading: "Serai-je propriétaire de l'application ?",
            paragraphs: [
              "L'application doit être publiée à votre nom, et le code doit vous appartenir. C'est ce qui vous permet de la faire évoluer dans six mois, avec le même prestataire ou un autre.",
            ],
          },
        ],
      },
      {
        heading: "Les frais à prévoir après la création",
        paragraphs: [
          "Le prix de création n'est pas le coût total de votre application. Quelques frais s'ajoutent une fois qu'elle est en ligne :",
        ],
        table: {
          head: ["Poste", "Coût"],
          rows: [
            ["Compte développeur Apple", "99$ par an, obligatoire pour publier sur l'App Store"],
            ["Compte développeur Google Play", "25$, payés une seule fois"],
            ["Hébergement, maintenance et support", "Généralement un abonnement mensuel, qui couvre les mises à jour iOS et Android et les corrections"],
            ["Outils de mesure d'audience", "Optionnels, selon le suivi que vous souhaitez"],
            ["Évolutions", "Nouvelles fonctionnalités ajoutées au fil de vos besoins"],
          ],
        },
      },
      {
        paragraphs: [
          "Après le lancement, le vrai sujet est rarement la panne : une application bien construite ne casse pas tous les mois. Le budget utile sert surtout à faire évoluer l'application à partir des retours de vos utilisateurs, et à la garder compatible avec les nouvelles versions d'iOS et d'Android.",
        ],
      },
      {
        heading: "Mes tarifs",
        paragraphs: [
          "Mes tarifs sont affichés sur la page Application mobile du site, avec le détail de ce qui est inclus. Chaque projet reste unique : décrivez-moi votre idée, même floue, et je vous envoie un devis gratuit et détaillé sous 24h, poste par poste.",
        ],
      },
      {
        heading: "FAQ : prix d'une application mobile en 2026",
        list: [
          "Combien coûte une application mobile en agence ? Entre 15 000€ et 80 000€ selon la complexité, avec des délais de 3 à 12 mois. Chez un développeur freelance React Native, le budget est bien plus bas pour une qualité de code équivalente.",
          "Pourquoi une application coûte-t-elle moins cher chez un freelance ? Une seule personne, une seule base de code pour iOS et Android, pas de marge d'agence. C'est la structure qui coûte moins, pas la qualité.",
          "Comment obtenir un devis d'application mobile fiable ? Décrivez votre projet en quelques lignes : à qui s'adresse l'app, les fonctionnalités indispensables, les connexions ou paiements prévus, les outils à relier. Plus votre demande est précise, plus les devis reçus seront comparables entre eux.",
          "Pourquoi les devis d'application mobile sont-ils si différents ? Parce qu'ils ne comparent pas les mêmes choses : design, tests, back-end, publication ou suivi après le lancement sont inclus dans certains devis et absents des autres. Un prix seul ne veut rien dire sans la liste de ce qui est livré.",
          "Y a-t-il des frais mensuels en plus du prix de création ? Oui : l'hébergement, la maintenance et le support font généralement l'objet d'un abonnement mensuel.",
          "Combien coûte la publication sur l'App Store et Google Play ? La publication est incluse dans mes prestations. Les frais de compte développeur (99$/an chez Apple, 25$ une fois chez Google) sont à votre charge.",
          "Une application no-code est-elle moins chère ? Au départ oui, mais les abonnements (Bubble : de 29$ à 349$/mois) se paient à vie et vous ne possédez jamais votre app. Et les apps no-code sont souvent refusées par l'App Store Apple.",
          "Que se passe-t-il si mon développeur freelance n'est plus disponible ? Si l'application est développée avec des technologies standards comme React Native, que le code vous appartient et qu'il est documenté, un autre développeur peut reprendre le projet. C'est une question à poser avant de signer, quel que soit le prestataire.",
          "En combien de temps une application mobile est-elle livrée ? Quelques semaines selon les fonctionnalités chez un freelance, contre plusieurs mois en agence.",
        ],
      },
    ],
  },
  {
    slug: "application-mobile-restaurant",
    image: {
      src: "/blog/application-mobile-restaurant.jpg",
      alt: "Main tenant un smartphone au-dessus d'une table de restaurant garnie de plats, dans une salle animée aux tons chauds et guirlandes lumineuses",
      credit: "Image : Artlist",
    },
    service: "restaurant",
    title: "Application mobile restaurant : guide complet 2026",
    description:
      "Commande en ligne, fidélité, réservation : tout ce qu'une application restaurant doit avoir, sans commission Uber Eats. Devis gratuit sous 24h.",
    date: "2026-05-11",
    lastModified: "2026-10-01",
    category: "Restaurants",
    sections: [
      {
        paragraphs: [
          "Chaque commande passée sur Uber Eats ou Deliveroo vous coûte entre 20 et 30 % de commission. Pour un restaurant qui tourne bien, c'est plusieurs centaines d'euros par mois qui partent à une plateforme, alors que la plupart de ces clients vous connaissent déjà.",
          "Une application mobile à votre nom permet de récupérer ces commandes, sans commission, tout en gardant le lien avec vos habitués. J'ai développé plusieurs applications pour des restaurateurs et commerçants en Bretagne : voici ce qui fonctionne vraiment, et ce qu'il faut prévoir.",
        ],
      },
      {
        heading: "Pourquoi une application plutôt qu'un simple site web ?",
        paragraphs: [
          "Un site web se consulte dans un navigateur, quand le client pense à vous. Une application, elle, est installée sur son téléphone : votre logo est sur son écran d'accueil, elle peut lui envoyer des notifications et elle reste utilisable même avec une connexion faible.",
          "Pour un restaurant, c'est toute la différence entre un client qui vous oublie entre deux visites et un client qui reçoit « Offre spéciale ce soir » le mercredi à 17h30, au moment où il se demande quoi manger. Le site web reste utile pour être trouvé sur Google ; l'application sert à faire revenir.",
        ],
      },
      {
        heading: "Les fonctionnalités essentielles d'une application restaurant",
        paragraphs: [
          "Toutes les applications de restaurant n'ont pas besoin des mêmes fonctions, mais six briques reviennent dans presque tous les projets.",
        ],
        subsections: [
          {
            heading: "Une carte qui se met à jour en temps réel",
            paragraphs: [
              "Plat du jour, rupture de stock, nouveaux prix : vous modifiez votre menu depuis un panel d'administration, sans passer par un développeur, et le changement est visible immédiatement dans l'application.",
            ],
          },
          {
            heading: "La commande en ligne avec paiement",
            paragraphs: [
              "Vos clients composent leur commande, choisissent leur créneau et paient directement dans l'application par carte, Apple Pay ou Google Pay. Vous recevez la commande instantanément, et l'argent arrive sur votre compte sans commission de plateforme.",
            ],
          },
          {
            heading: "Le programme de fidélité",
            paragraphs: [
              "Tampons numériques, réduction automatique à la dixième commande, cadeau d'anniversaire : la carte de fidélité ne se perd plus au fond d'un portefeuille, et elle donne une vraie raison de commander chez vous plutôt qu'ailleurs.",
            ],
          },
          {
            heading: "La réservation de table",
            paragraphs: [
              "Le client choisit son créneau et le nombre de couverts, puis reçoit une confirmation par email ou par notification. Moins d'appels pendant le service, et un planning de salle toujours à jour.",
            ],
          },
          {
            heading: "Les notifications et les avis",
            paragraphs: [
              "Promotion du jour, nouvelle entrée à la carte, soirée spéciale : les notifications touchent vos clients directement sur leur écran. L'application peut aussi les inviter à laisser un avis après leur commande, ce qui nourrit votre réputation en ligne.",
            ],
          },
        ],
      },
      {
        heading: "Combien coûte une application pour un restaurant ?",
        paragraphs: [
          "Le prix dépend surtout de deux fonctionnalités : la commande en ligne avec paiement intégré, et le programme de fidélité. Une application avec menu et réservation est plus simple qu'une application de commande complète. Mes tarifs sont affichés sur la page Application mobile du site, et je vous envoie un devis détaillé gratuit sous 24h.",
          "Pour mesurer l'intérêt, comparez avec ce que vous versez aujourd'hui aux plateformes : à 15 à 30 % de commission par commande, une application à votre nom s'amortit en général en quelques mois sur un restaurant actif.",
        ],
      },
      {
        heading: "Exemple concret : une pizzeria à Brest",
        paragraphs: [
          "Un client pizzaiolo m'a contacté après avoir fait le calcul : Uber Eats lui coûtait environ 800€ par mois en commissions. Nous avons développé son application en 3 semaines, avec commande en ligne, paiement Stripe et notifications push.",
          "Ses clients habituels ont rapidement basculé sur son application, et il a cessé de payer des commissions sur leurs commandes dès le deuxième mois. Uber Eats reste pour lui un moyen d'être découvert ; son application sert à garder les clients qu'il a déjà.",
        ],
      },
      {
        heading: "Une application adaptée à chaque type d'établissement",
        paragraphs: [
          "Je travaille avec des restaurateurs à Brest, Quimper, Rennes et partout en Bretagne, et chaque type d'établissement a ses priorités.",
        ],
        table: {
          head: ["Établissement", "Fonctionnalités prioritaires"],
          rows: [
            ["Restaurant, brasserie", "Commande sur place par QR code, vente à emporter, fidélité"],
            ["Crêperie", "Menu saisonnier modifiable en temps réel, réservation de groupe"],
            ["Restaurant de fruits de mer", "Disponibilités du jour, commande de plateaux à emporter"],
            ["Bar, bistrot", "Événements, soirées à thème, prévente de billets"],
            ["Traiteur, food truck", "Planning de présence, commande à l'avance, paiement en ligne"],
          ],
        },
      },
      {
        heading: "FAQ : application mobile pour restaurant",
        list: [
          "Une application mobile restaurant remplace-t-elle Uber Eats ? Oui pour vos clients réguliers : elle intègre la commande en ligne avec paiement Stripe. Vos clients commandent directement dans votre app, sans commission à une plateforme tierce.",
          "Combien coûte une app pour un restaurant ? Le tarif dépend des fonctionnalités (commande en ligne, paiement, fidélité, réservation). Mes tarifs sont affichés sur la page Application mobile, avec un devis gratuit sous 24h.",
          "En combien de temps l'application est-elle livrée ? Entre 3 et 5 semaines pour une app restaurant complète avec commande en ligne. Une app menu et réservation est livrée en 2 à 3 semaines.",
          "Puis-je modifier mon menu moi-même ? Oui. Votre app inclut un panel d'administration web depuis lequel vous modifiez votre menu, vos prix et vos horaires en temps réel.",
          "L'app fonctionne-t-elle sur iPhone et Android ? Oui. Une seule application, publiée à la fois sur l'App Store et sur Google Play, accessible à tous vos clients.",
          "Comment mes clients téléchargent-ils l'app ? En cherchant votre nom sur l'App Store ou Google Play, ou en scannant un QR code que vous affichez dans votre restaurant.",
        ],
      },
    ],
  },
  {
    slug: "react-native-vs-flutter",
    image: {
      src: "/blog/react-native-vs-flutter.jpg",
      alt: "Deux smartphones posés côte à côte, l'un avec une coque bleue, l'autre magenta, devant un ordinateur portable affichant du code et un carnet de schéma de navigation",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "React Native vs Flutter 2026 : lequel choisir ?",
    description:
      "React Native ou Flutter pour votre app iOS & Android ? Performance, coût, écosystème : le comparatif complet d'un développeur freelance en 2026.",
    date: "2026-05-11",
    lastModified: "2026-10-01",
    category: "Tech",
    sections: [
      {
        paragraphs: [
          "Quand un client me demande avec quoi je vais développer son application, la question « React Native ou Flutter ? » revient souvent. Ce sont les deux technologies les plus utilisées pour créer une seule application qui fonctionne à la fois sur iPhone et sur Android, et toutes les deux produisent de vraies applications publiées sur les stores.",
          "Elles n'ont pourtant pas les mêmes forces. Voici mon analyse après avoir travaillé avec les deux, et pourquoi j'utilise React Native pour mes projets clients.",
        ],
      },
      {
        heading: "React Native : le JavaScript au service du mobile",
        paragraphs: [
          "React Native est maintenu par Meta, la maison mère de Facebook. Il permet d'écrire l'application en JavaScript ou en TypeScript, les langages du web, et de produire une application native pour iOS et Android à partir d'une seule base de code.",
          "Son premier atout, c'est son écosystème : des milliers de bibliothèques existent déjà pour le paiement, les cartes, les notifications ou l'authentification, et il s'intègre très bien avec Firebase, Stripe ou n'importe quelle API. Son deuxième atout, c'est la rapidité de développement : chaque modification s'affiche en temps réel, sans recompiler l'application.",
          "C'est aussi une technologie éprouvée à grande échelle, utilisée par Facebook, Instagram, Shopify ou Airbnb. Pour un client, cela signifie un outil durable et des développeurs faciles à trouver si un jour le projet doit changer de mains.",
        ],
      },
      {
        heading: "Flutter : le choix de Google",
        paragraphs: [
          "Flutter est développé par Google et utilise le langage Dart. Sa particularité : au lieu d'utiliser les composants du téléphone, il redessine lui-même chaque pixel de l'interface. Il garde ainsi un contrôle total sur le rendu, identique au pixel près sur iOS et Android.",
          "Ce choix lui donne d'excellentes performances graphiques, idéales pour les animations complexes, les interfaces très personnalisées ou les jeux légers. Sa limite tient surtout au langage : Dart est beaucoup moins répandu que JavaScript, ce qui réduit le nombre de bibliothèques et de développeurs disponibles.",
        ],
      },
      {
        heading: "Le comparatif en un coup d'œil",
        table: {
          head: ["Critère", "React Native", "Flutter"],
          rows: [
            ["Créateur", "Meta", "Google"],
            ["Langage", "JavaScript / TypeScript", "Dart"],
            ["Écosystème", "Très riche, issu du web", "Plus restreint"],
            ["Rendu", "Composants natifs du téléphone", "Moteur graphique propre"],
            ["Points forts", "Intégrations, rapidité, recrutement", "Animations, rendu identique partout"],
            ["Idéal pour", "Commerces, services, marketplaces", "Apps très graphiques, jeux légers"],
          ],
        },
      },
      {
        heading: "Mon verdict pour les projets clients",
        paragraphs: [
          "Pour 90 % des projets que je réalise (restaurants, commerces, réservation, marketplaces), React Native est le meilleur choix. L'écosystème est plus riche, l'intégration avec les services tiers est meilleure, et la reprise du projet par un autre développeur sera plus facile si besoin.",
          "Flutter reste un excellent choix pour des applications très graphiques ou des jeux mobiles où le rendu au pixel près est décisif. Dans tous les cas, les deux frameworks produisent de vraies applications natives disponibles sur l'App Store et Google Play, et non des sites web déguisés en application.",
        ],
      },
    ],
  },
  {
    slug: "developpeur-freelance-vs-agence",
    image: {
      src: "/blog/developpeur-freelance-vs-agence.jpg",
      alt: "Image en deux parties : à gauche un développeur freelance seul à son bureau avec des post-it colorés, à droite une agence où plusieurs personnes collaborent devant des écrans",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Freelance vs agence app mobile : lequel choisir ?",
    description:
      "Freelance ou agence pour votre application mobile ? Prix, délais, communication : le comparatif complet pour choisir selon votre budget et votre projet.",
    date: "2026-04-20",
    lastModified: "2026-10-01",
    category: "Conseils",
    sections: [
      {
        paragraphs: [
          "Pour créer une application mobile, deux options se présentent à la plupart des entreprises : faire appel à une agence, ou à un développeur freelance. Le même projet peut être facturé quelques milliers d'euros chez un freelance React Native, livré en quelques semaines, ou 15 000€ à 80 000€ dans une agence, avec des délais de 3 à 12 mois.",
          "Ni l'une ni l'autre n'est meilleure dans l'absolu : tout dépend de la taille de votre projet et de votre budget. Voici comment choisir.",
        ],
      },
      {
        heading: "Ce que propose une agence",
        paragraphs: [
          "Une agence met à votre disposition une équipe complète : chef de projet, designer UX, développeurs front et back-end, testeurs. C'est rassurant, et c'est justifié pour des projets très complexes où plusieurs métiers doivent avancer en parallèle.",
          "Cette organisation a un coût. Les budgets commencent généralement autour de 15 000€ et peuvent atteindre 80 000€, pour des délais de 3 à 12 mois. La communication passe le plus souvent par un chef de projet, qui fait l'intermédiaire avec l'équipe technique. C'est le bon choix pour une grande entreprise ou un projet de grande envergure.",
        ],
      },
      {
        heading: "Ce que propose un développeur freelance spécialisé",
        paragraphs: [
          "Un freelance spécialisé dans le développement mobile couvre l'ensemble du projet : design, développement, back-end et publication sur les stores. Vous avez un interlocuteur unique, qui connaît votre projet de A à Z et avec qui vous échangez directement, sans intermédiaire.",
          "Sans chef de projet, sans commerciaux ni frais de structure, le budget se compte en quelques milliers d'euros selon les fonctionnalités, et les délais en semaines plutôt qu'en mois. C'est la formule la plus adaptée aux TPE, aux PME, aux startups et aux porteurs de projet.",
        ],
        table: {
          head: ["", "Agence", "Freelance spécialisé"],
          rows: [
            ["Budget", "15 000€ à 80 000€", "Quelques milliers d'euros"],
            ["Délais", "3 à 12 mois", "2 à 8 semaines"],
            ["Communication", "Via un chef de projet", "Directe avec le développeur"],
            ["Idéal pour", "Grandes entreprises, projets très complexes", "TPE, PME, startups, porteurs de projet"],
          ],
        },
      },
      {
        heading: "Trois questions pour faire votre choix",
        subsections: [
          {
            heading: "Quel est votre budget ?",
            paragraphs: [
              "En dessous de 5 000€, un freelance spécialisé est la seule option réaliste pour obtenir une vraie application publiée sur les stores. Au-delà de 50 000€, une agence devient pertinente si le projet le justifie.",
            ],
          },
          {
            heading: "Avez-vous besoin d'une équipe intégrée ?",
            paragraphs: [
              "Si votre projet demande en même temps du marketing, une identité de marque complète et du développement, une agence qui réunit ces métiers peut vous simplifier la vie. Si vous avez besoin d'une application, un freelance suffit.",
            ],
          },
          {
            heading: "Quelle réactivité attendez-vous ?",
            paragraphs: [
              "Avec un freelance, vous parlez directement à la personne qui code votre application : une question posée le matin peut être réglée l'après-midi. En agence, chaque demande passe par plusieurs personnes.",
            ],
          },
        ],
      },
      {
        heading: "Ma position",
        paragraphs: [
          "Je suis développeur freelance basé à Brest, spécialisé en React Native. Je travaille avec des restaurateurs, des commerçants et des porteurs de projet qui veulent une vraie application mobile sans le budget d'une grande entreprise.",
          "Si votre projet entre dans cette catégorie, décrivez-le-moi : je vous envoie un devis gratuit et détaillé sous 24h.",
        ],
      },
      {
        heading: "FAQ : freelance ou agence pour une app mobile",
        list: [
          "Pourquoi un freelance est-il moins cher qu'une agence ? Un freelance n'a pas de chef de projet, de commerciaux ni de frais de structure à amortir. Vous payez directement le développeur qui code votre app.",
          "La qualité est-elle la même entre un freelance et une agence ? Oui, si le freelance est spécialisé. React Native, le framework utilisé par Facebook, Shopify et Instagram, est le même outil qu'utilisent les meilleures agences.",
          "Un freelance peut-il gérer tout le projet seul ? Oui : design, développement iOS et Android, back-end, publication sur les stores. Un développeur React Native complet couvre l'ensemble de la chaîne.",
          "Qu'est-ce qui justifie de choisir une agence ? Les projets complexes avec plusieurs équipes simultanées (design, développement, marketing, infrastructure), les budgets de plus de 50 000€ ou les grandes entreprises avec des processus d'achat formalisés.",
          "Comment vérifier le sérieux d'un freelance ? Demandez un portfolio avec des apps publiées sur les stores, des références clients joignables et un devis détaillé poste par poste, pas un tarif forfaitaire flou.",
        ],
      },
    ],
  },
  {
    slug: "cout-reel-site-shopify",
    image: {
      src: "/blog/cout-reel-site-shopify.jpg",
      alt: "Ordinateur portable affichant une boutique en ligne, mini caddie de supermarché rempli de petits colis et cadeaux, carte bancaire et pièces sur un bureau sombre",
      credit: "Image : Artlist",
    },
    service: "ecommerce",
    title: "Shopify 2026 : coût réel, commissions et apps",
    description:
      "Shopify coûte bien plus que son abonnement de base. Commissions, apps payantes, thèmes : le vrai prix sur 2 ans et ce qu'une app sur mesure change pour vous.",
    date: "2026-05-11",
    lastModified: "2026-10-01",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Shopify est la plateforme e-commerce la plus utilisée au monde, avec plus de 4,6 millions de boutiques actives dans 175 pays (source : Shopify Inc., rapport annuel 2024). En France, c'est souvent le premier réflexe pour ouvrir une boutique en ligne rapidement, et pour de bonnes raisons : on peut vendre en quelques jours, sans aucune compétence technique.",
          "Mais après 12 à 24 mois, beaucoup de commerçants réalisent que la facture réelle est bien plus lourde que les 39 €/mois affichés. Entre les applications payantes, les frais de transaction et le thème, le coût total peut être multiplié par quatre ou cinq. Voici l'analyse complète et chiffrée du coût réel d'une boutique Shopify en 2026.",
        ],
      },
      {
        heading: "Les formules Shopify en 2026",
        paragraphs: [
          "Shopify a revu sa grille tarifaire en 2023 et appliqué de nouvelles hausses début 2024. Voici les tarifs en vigueur en facturation mensuelle (source : shopify.com/fr/pricing, juin 2026). Le paiement annuel donne droit à 25 % de réduction sur les trois premières formules.",
        ],
        table: {
          head: ["Formule", "Prix mensuel", "Ce qui change"],
          rows: [
            ["Basic", "39 €", "2 comptes équipe, rapports de base, 2 % de frais hors Shopify Payments"],
            ["Shopify", "105 €", "5 comptes équipe, rapports standards, 1 % de frais"],
            ["Advanced", "399 €", "15 comptes équipe, rapports avancés, 0,5 % de frais"],
            ["Shopify Plus", "dès 2 300 €", "Grandes enseignes, contrat annuel obligatoire"],
          ],
        },
      },
      {
        heading: "Les frais cachés qui doublent la facture",
        paragraphs: [
          "L'abonnement n'est que le point de départ. Une étude de Littledata (2024) portant sur 3 000 boutiques Shopify montre que les marchands dépensent en moyenne 2,3 fois leur abonnement mensuel en applications tierces et frais additionnels.",
          "Le premier poste, c'est le thème. Les 12 thèmes gratuits officiels sont très limités en personnalisation : la plupart des boutiques sérieuses achètent un thème premium, entre 180 € et 450 €. Viennent ensuite les applications. La boutique d'apps Shopify en compte plus de 8 000, et les fonctions que l'on croit acquises sont souvent payantes : avis clients (Yotpo, Trustpilot : 15 à 50 €/mois), SEO (Plug In SEO : 20 €/mois), relance des paniers abandonnés (Klaviyo : 30 à 100 €/mois) ou ventes additionnelles (ReConvert : 15 €/mois).",
          "Il faut aussi compter les frais de transaction de Shopify Payments, de 1,5 % à 2 % selon la formule : sur 10 000 € de chiffre d'affaires mensuel, cela représente 150 à 200 € par mois. S'y ajoutent le nom de domaine (14 €/an), les traductions si vous vendez à l'étranger (une app de traduction coûte 15 à 50 €/mois) et les emails marketing au-delà de 10 000 envois mensuels, où Klaviyo ou Mailchimp deviennent vite nécessaires.",
        ],
      },
      {
        heading: "Le coût total réaliste sur 2 ans",
        paragraphs: [
          "Prenons un commerçant type : formule Basic, 5 000 € de chiffre d'affaires mensuel et trois applications essentielles.",
        ],
        table: {
          head: ["Poste", "Calcul", "Coût sur 2 ans"],
          rows: [
            ["Abonnement Basic", "39 € × 24 mois", "936 €"],
            ["Thème premium", "Achat unique", "300 €"],
            ["Applications", "60 €/mois × 24 mois", "1 440 €"],
            ["Frais Shopify Payments", "1,7 % de 5 000 €, soit 85 €/mois × 24", "2 040 €"],
            ["Nom de domaine", "2 ans", "28 €"],
            ["Total", "", "4 744 €"],
          ],
        },
        callout: {
          title: "Et sans application mobile",
          text: "Ces 4 744 € couvrent une boutique standard, sans développement sur mesure et sans application mobile. Une boutique sur mesure, elle, se paie une fois, sans abonnement ni commission sur vos ventes.",
        },
      },
      {
        heading: "Site mobile ou application : l'écart de performance",
        paragraphs: [
          "Les chiffres de conversion sont l'argument le plus fort en faveur d'une application mobile. Selon une étude Criteo menée en 2024 sur 5 000 commerçants, le taux de conversion moyen tourne autour de 1,5 % à 2,5 % sur un site mobile, contre 3,5 % à 5,5 % dans une application native : deux à trois fois plus. Le panier moyen est lui aussi plus élevé dans l'application, de 20 % à 40 %.",
          "La fidélité suit la même logique : 25 % des utilisateurs d'une application reviennent dans les 30 jours, contre 8 % sur un site mobile (Localytics 2024). Et les notifications push affichent un taux d'ouverture de 7 à 10 %, contre environ 2 % pour les emails (Business of Apps 2024).",
        ],
      },
      {
        heading: "Ce que Shopify seul ne permet pas",
        paragraphs: [
          "Shopify est une excellente plateforme généraliste pour démarrer. Mais elle atteint ses limites quand vous cherchez à vous différencier.",
          "D'abord, Shopify ne fournit pas d'application mobile pour vos clients : une vraie application iOS et Android demande un développement séparé, facturé entre 15 000 € et 80 000 € en agence. Les programmes de fidélité avancés passent par des apps comme Smile.io ou Yotpo Loyalty, à 50 à 200 € par mois, et restent limités. Toute logique métier spécifique (abonnements sur mesure, commandes complexes, connexion à un ERP) suppose un développeur Shopify, facturé 600 à 900 € par jour.",
          "Enfin, il y a la question de la propriété. Shopify est une entreprise canadienne, ce qui peut poser problème si votre politique interne exige un hébergement des données en Europe. Et surtout, vous louez une plateforme : vous ne possédez ni votre boutique ni son code.",
        ],
      },
      {
        heading: "L'alternative : une application e-commerce sur mesure",
        paragraphs: [
          "Pour les commerçants qui veulent une application mobile iOS et Android avec boutique intégrée, je développe une application à votre nom : catalogue, panier, paiement Stripe, gestion des commandes et notifications push.",
          "Pas d'abonnement Shopify ni de commission sur vos ventes : l'application vous appartient. Mes tarifs sont détaillés sur la page E-commerce du site, avec un devis gratuit sous 24h.",
        ],
      },
      {
        heading: "FAQ : coût réel de Shopify en 2026",
        list: [
          "Shopify est-il vraiment à 39 €/mois ? C'est le tarif mensuel de la formule Basic. En pratique, avec les apps, les frais de transaction et le thème, comptez plutôt 150 à 300 €/mois pour une boutique fonctionnelle.",
          "Peut-on créer une app mobile depuis Shopify ? Non directement. Shopify Mobile est une application d'administration pour le marchand, pas une application pour vos clients. Pour une vraie app iOS et Android, il faut un développement séparé.",
          "Shopify Payments est-il disponible en France ? Oui depuis 2022. Il évite les frais de transaction supplémentaires (2 % sur la formule Basic) mais prélève entre 1,5 % et 1,7 % par paiement par carte.",
          "Quand vaut-il mieux une app sur mesure que Shopify ? Dès que vous avez une logique métier spécifique, un besoin de fidélisation fort ou que vous voulez une app mobile. Le sur mesure devient plus rentable à partir de 3 000 à 5 000 € de chiffre d'affaires mensuel.",
        ],
      },
    ],
  },
  {
    slug: "cout-reel-site-wix",
    image: {
      src: "/blog/cout-reel-site-wix.jpg",
      alt: "Personne travaillant sur un ordinateur portable dans un bureau lumineux, carte bancaire et carnet de notes posés à côté",
      credit: "Image : Artlist",
    },
    service: "site-web",
    title: "Wix prix 2026 : combien coûte un site pro ?",
    description:
      "Wix affiche \"gratuit\" mais le prix d'un vrai site pro grimpe vite : abonnement, apps, options. Le coût réel sur 2 ans et l'alternative sur mesure.",
    date: "2026-05-11",
    lastModified: "2026-10-01",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "« Créez votre site gratuitement » : c'est la promesse de Wix, et techniquement elle est vraie. Mais un site Wix gratuit affiche la publicité Wix, s'héberge sur une adresse du type monnom.wixsite.com et offre des fonctionnalités très limitées. Pour une entreprise, ce n'est pas une option sérieuse.",
          "Dès que l'on veut un site professionnel, avec son propre nom de domaine, sans publicité et avec quelques fonctionnalités utiles, la facture change complètement. Voici ce que coûte vraiment un site Wix en 2026, et quand il vaut mieux passer à autre chose.",
        ],
      },
      {
        heading: "Les forfaits payants Wix",
        paragraphs: [
          "Wix propose quatre forfaits Premium. Voici leurs tarifs 2026 en paiement annuel ; comptez 25 à 30 % de plus si vous payez au mois. Tous incluent l'hébergement, et le nom de domaine est offert la première année en paiement annuel.",
        ],
        table: {
          head: ["Forfait", "Prix mensuel (annuel)", "Pour quel usage"],
          rows: [
            ["Light", "environ 17 €", "Site vitrine simple, domaine personnalisé, sans publicité"],
            ["Core", "environ 29 €", "Le forfait nécessaire pour un site pro complet, vente en ligne de base"],
            ["Business", "environ 41 €", "E-commerce complet et paiements en ligne"],
            ["Business Plus", "environ 179 €", "Fonctionnalités avancées et support prioritaire"],
          ],
        },
      },
      {
        heading: "Les coûts supplémentaires souvent ignorés",
        paragraphs: [
          "L'abonnement de base ne couvre pas tout. Le nom de domaine coûte environ 15 € par an une fois la première année passée. Surtout, de nombreuses fonctionnalités que l'on pense incluses (réservations, chat, outils marketing) passent par des applications du Wix Market, chacune avec son propre abonnement mensuel.",
          "D'autres postes s'ajoutent selon votre activité : le plan Wix SEO Booster pour travailler le référencement, 2,5 % de frais de transaction sur chaque vente avec Wix Payments, environ 7 € par mois et par utilisateur pour des adresses email professionnelles via Google Workspace, ou encore un plan payant pour les sauvegardes et restaurations avancées.",
        ],
      },
      {
        heading: "Les limites techniques de Wix",
        paragraphs: [
          "Au-delà du prix, Wix impose des contraintes que beaucoup de clients découvrent trop tard. La plus lourde : il est impossible de déplacer votre site vers un autre hébergeur. Le jour où vous voulez quitter Wix, vous repartez de zéro.",
          "Côté référencement, Wix a fait des progrès, mais reste moins performant qu'un site sur mesure dès que l'on veut travailler le SEO en profondeur. Les sites Wix sont aussi souvent plus lents qu'un site optimisé, ce que Google prend en compte. Enfin, la personnalisation reste limitée aux modèles et à l'éditeur, et aucune application mobile ne peut être créée depuis Wix.",
        ],
      },
      {
        heading: "Le coût total estimé sur 2 ans",
        paragraphs: [
          "Pour un usage professionnel avec le forfait Core, deux applications du Wix Market et des emails professionnels, voici l'addition sur deux ans :",
        ],
        table: {
          head: ["Poste", "Calcul", "Coût sur 2 ans"],
          rows: [
            ["Forfait Core", "environ 29 € × 24 mois", "environ 696 €"],
            ["Nom de domaine", "2 ans", "30 €"],
            ["2 apps Wix Market", "20 €/mois × 24 mois", "480 €"],
            ["Emails Google Workspace", "environ 7 €/mois × 24 mois", "environ 168 €"],
            ["Total", "", "environ 1 370 €"],
          ],
        },
        callout: {
          title: "Pour un site standard",
          text: "Ces 1 370 € paient un site standard, sans fonctionnalité spécifique, que vous ne possédez pas et que vous ne pourrez pas emporter ailleurs.",
        },
      },
      {
        heading: "Quand Wix a du sens, et quand il n'en a pas",
        paragraphs: [
          "Wix est adapté à un site vitrine très simple : présenter son activité, donner ses coordonnées, afficher quelques photos. C'est son terrain de jeu naturel, et pour démarrer avec un petit budget, il remplit son rôle.",
          "En revanche, si vous êtes commerçant, restaurateur, prestataire qui prend des réservations, ou si vous voulez une application mobile, Wix ne suffit plus, et vous payez chaque mois pour ses limites.",
          "Je développe des sites et des applications mobiles sur mesure, des outils qui vous appartiennent vraiment. Décrivez-moi votre projet, je vous envoie un devis gratuit sous 24h.",
        ],
      },
    ],
  },
  {
    slug: "cout-reel-planity",
    image: {
      src: "/blog/cout-reel-planity.jpg",
      alt: "Intérieur moderne de salon de coiffure avec fauteuils, miroirs et éclairage chaleureux",
      credit: "Image : Artlist",
    },
    service: "coiffeur",
    title: "Tarif Planity 2026 : prix, abonnement et SMS",
    description:
      "Combien coûte Planity en 2026 ? Formules, SMS inclus, engagement, hausses de prix et résiliation : ce qu'il faut savoir avant de signer, et les alternatives.",
    date: "2026-05-11",
    lastModified: "2026-10-01",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Combien coûte Planity ? Même en 2026, la page tarifs de Planity n'affiche aucun prix : le montant de l'abonnement est donné par un conseiller, selon votre salon. Ce que l'on sait en revanche, c'est qu'il s'agit d'un abonnement mensuel sans engagement, sans commission sur les rendez-vous et sans frais d'installation, avec un quota de SMS inclus.",
          "Voici tout ce qu'il faut savoir sur le coût réel de Planity, les formules, ce qui est inclus et ce qui ne l'est pas : ce que beaucoup de coiffeurs et d'esthéticiennes auraient aimé lire avant de signer.",
        ],
      },
      {
        heading: "Combien coûte Planity par mois en 2026 ?",
        paragraphs: [
          "Planity propose trois formules sur sa page info.planity.com/tarifs, toutes sans engagement. Le prix exact n'étant pas affiché, il faut prendre rendez-vous avec un conseiller pour l'obtenir.",
        ],
        table: {
          head: ["Formule", "Ce qu'elle comprend"],
          rows: [
            ["Agenda", "Page sur planity.com, réservation en ligne, 300 SMS de rappel par mois, fichier clients, acomptes et prépaiement, bouton de réservation pour vos réseaux sociaux"],
            ["Agenda + Caisse", "Tout l'Agenda, plus un logiciel de caisse certifié NF525, la gestion des stocks, les cartes cadeaux et l'export comptable"],
            ["Agenda + Caisse + TPE", "La plus choisie : tout le reste, plus un terminal de paiement connecté, la suggestion de pourboire et les tickets par email"],
          ],
        },
      },
      {
        paragraphs: [
          "Des options s'ajoutent en supplément : boutique en ligne, site internet personnalisé, module de gestion du temps de travail. Et au-delà des 300 SMS inclus chaque mois, les SMS supplémentaires sont facturés.",
        ],
      },
      {
        heading: "Planity prend-il une commission ?",
        paragraphs: [
          "Planity communique officiellement sur un modèle « sans commission sur vos rendez-vous », ce qui le distingue de plateformes comme Treatwell. Vous payez un abonnement fixe chaque mois, et non un pourcentage par réservation.",
          "Planity est aussi un annuaire public qui apporte de la visibilité à votre salon. Les conditions liées à cette visibilité (référencement, mise en avant) sont définies dans les conditions générales disponibles sur planity.com.",
        ],
      },
      {
        heading: "Le coût de Planity sur un an : comment le calculer",
        paragraphs: [
          "Pour estimer votre budget réel, il faut additionner l'abonnement mensuel communiqué par votre conseiller selon la formule choisie, les SMS envoyés au-delà des 300 inclus chaque mois, et les éventuelles options (boutique, site, gestion du temps). Sur un an, le calcul est donc : abonnement × 12, plus les SMS supplémentaires, plus les options.",
          "Sur deux ans, vous aurez payé chaque mois sans jamais posséder votre outil. Et si vous arrêtez Planity, vous perdez votre visibilité dans l'annuaire ainsi que l'accès à l'historique de réservations hébergé sur la plateforme.",
        ],
      },
      {
        heading: "Ce que l'abonnement Planity ne vous donne pas",
        paragraphs: [
          "Planity apporte une valeur réelle : visibilité sur sa marketplace, gestion du planning, rappels automatiques. Pour un salon qui démarre sans clientèle, c'est une aide concrète.",
          "Mais même après deux ans d'abonnement, vous n'avez pas d'application mobile à votre nom sur l'App Store et Google Play, ni de programme de fidélité personnalisé avec tampons numériques ou réductions automatiques. Vous n'avez aucun contrôle sur le design ni sur l'expérience de vos clientes, et votre page est affichée au milieu de celles de vos concurrents sur planity.com. La communication avec vos clientes passe par des SMS, limités à 300 par mois dans la formule Agenda, et non par des notifications push.",
        ],
        callout: {
          title: "Avant de signer",
          text: "L'historique de vos réservations est hébergé chez Planity. Vérifiez les conditions d'export de vos données dans leurs conditions générales avant de vous engager.",
        },
      },
      {
        heading: "Planity et les hausses de prix",
        paragraphs: [
          "Des hausses tarifaires ont été signalées par des professionnels en 2024 et 2025. C'est le risque de toute solution en location : vous n'êtes pas propriétaire de l'outil, et le prix évolue sans que vous ayez votre mot à dire.",
          "Face à une augmentation, vous pouvez accepter, négocier ou chercher une alternative. Fresha propose un modèle différent, Reservio des fonctionnalités plus limitées, et Google Agenda reste très basique. Une solution intermédiaire consiste à choisir un logiciel de caisse avec un module de réservation intégré. La solution durable, c'est votre propre application, un outil qui vous appartient.",
        ],
      },
      {
        heading: "L'alternative à Planity : l'application de votre salon",
        paragraphs: [
          "Je développe des applications mobiles iOS et Android pour les salons de coiffure, à votre nom, avec votre logo et vos couleurs : réservation en ligne 24h/24, rappels automatiques par notification, programme de fidélité, et panel admin pour gérer vos créneaux, vos prestations et votre équipe.",
          "Vos clientes téléchargent l'application de votre salon, pas un annuaire où vos concurrents sont à un clic. Vos données clients restent chez vous, et l'application vous appartient, même si vous changez un jour de prestataire.",
          "Vous trouverez un exemple concret, fonctionnalités et panel admin compris, sur la page dédiée aux salons de coiffure. Devis gratuit sous 24h.",
        ],
      },
      {
        heading: "FAQ : tarif et utilisation de Planity",
        list: [
          "Combien coûte Planity par mois ? Planity n'affiche pas ses prix : le tarif est communiqué par un conseiller selon la formule (Agenda, Agenda + Caisse, Agenda + Caisse + TPE). Les trois formules sont sans engagement.",
          "Planity prend-il une commission sur les rendez-vous ? Non. Planity annonce un modèle sans commission sur les réservations, sans frais d'installation ni de maintenance. Vous payez un abonnement mensuel.",
          "Combien de SMS sont inclus avec Planity ? La formule Agenda inclut 300 SMS de rappel par mois. Au-delà, les SMS sont facturés en plus.",
          "Peut-on utiliser Planity gratuitement ? Il existe une période d'essai, mais pas de formule gratuite durable pour un usage professionnel.",
          "Comment résilier Planity ? Par lettre recommandée avec accusé de réception à Planity, Service Résiliations, 5 rue Saint Fiacre, 75002 Paris. Préavis de 10 jours pour un abonnement mensuel, 1 mois pour un abonnement annuel.",
          "Quelles sont les vraies alternatives à Planity ? Fresha (modèle différent), Reservio, ou une application mobile sur mesure à votre nom sur l'App Store et Google Play.",
          "Planity a-t-il augmenté ses prix ? Des hausses tarifaires ont été signalées par des professionnels en 2024 et 2025. C'est le risque de tout abonnement logiciel.",
          "Puis-je exporter mes données clients si je quitte Planity ? Vérifiez les conditions dans leurs CGU avant de signer : les données hébergées chez Planity sont supprimées 3 mois après la désactivation du compte.",
        ],
      },
    ],
  },
  // --- Nouveaux articles SEO ---
  {
    slug: "squarespace-tarif-prix",
    image: {
      src: "/blog/squarespace-tarif-prix-2025.jpg",
      alt: "Ordinateur portable ouvert sur un bureau minimaliste en bois clair, café et carnet",
      credit: "Image : Artlist",
    },
    service: "site-web",
    title: "Squarespace prix 2026 : tarifs des 4 formules",
    description:
      "Tarifs Squarespace 2026 : formules Basic, Essentiel, Plus et Advanced, frais de transaction et coûts cachés. Ce que coûte vraiment un site pro, et l'alternative.",
    date: "2026-04-20",
    lastModified: "2026-10-01",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Squarespace est réputé pour ses modèles soignés et son interface élégante : c'est souvent le choix des photographes, des créatifs et des marques qui veulent un beau site sans coder. En 2026, ses formules ont changé de nom et de prix.",
          "Le prix affiché n'est pourtant qu'une partie de l'addition. Entre les frais de transaction, les extensions et les services annexes, voici ce que coûte vraiment un site Squarespace, une fois tous les frais pris en compte.",
        ],
      },
      {
        heading: "Prix des formules Squarespace en 2026",
        paragraphs: [
          "Squarespace propose quatre formules, facturées à l'année ou au mois. Le paiement mensuel revient jusqu'à 40 % plus cher que l'engagement annuel.",
        ],
        table: {
          head: ["Formule", "Paiement annuel", "Paiement mensuel", "Frais sur les ventes"],
          rows: [
            ["Basic", "12 €/mois", "17 €/mois", "2 %"],
            ["Essentiel", "18 €/mois", "24 €/mois", "0 %"],
            ["Plus", "32 €/mois", "42 €/mois", "0 %"],
            ["Advanced", "69 €/mois", "79 €/mois", "0 %"],
          ],
        },
      },
      {
        paragraphs: [
          "La formule Essentiel est celle que Squarespace met en avant ; Plus convient aux boutiques et contenus payants plus avancés, et Advanced débloque toutes les fonctionnalités. Sur toutes les formules, des frais de carte bancaire s'ajoutent à chaque paiement encaissé : un pourcentage plus 0,25 €.",
        ],
      },
      {
        heading: "Les frais de transaction : le piège de la formule Basic",
        paragraphs: [
          "La formule Basic est la moins chère, mais elle prélève 2 % sur chaque vente de votre boutique en ligne. Sur 2 000 € de ventes par mois, cela représente 40 € par mois pour Squarespace, soit 480 € par an en plus de l'abonnement : de quoi rendre la formule Essentiel plus économique dès les premières ventes.",
          "Les contenus payants, comme les espaces membres ou les contenus numériques, supportent des frais encore plus élevés : 7 % en Basic, 5 % en Essentiel et 1 % en Plus. Seule la formule Advanced les supprime complètement. Et dans tous les cas, ces frais s'ajoutent aux frais de carte bancaire.",
        ],
      },
      {
        heading: "Les coûts additionnels de Squarespace",
        paragraphs: [
          "L'abonnement ne couvre pas tout. Les extensions, ces applications tierces qui ajoutent des fonctionnalités, ont chacune leur abonnement mensuel. Les adresses email professionnelles passent par Google Workspace, facturé par utilisateur, et les campagnes d'emailing Squarespace sont aussi en supplément.",
          "Le nom de domaine est offert la première année en paiement annuel, puis à renouveler chaque année. Enfin, si vous prenez des rendez-vous, la prise de rendez-vous passe par Acuity Scheduling, un abonnement séparé.",
        ],
      },
      {
        heading: "Les limites de Squarespace à connaître",
        paragraphs: [
          "La première limite est la plus contraignante : il est impossible de déplacer votre site vers un autre hébergeur. Si vous quittez Squarespace, vous repartez de zéro. Vous restez aussi dans l'éditeur Squarespace pour la personnalisation, et aucune application mobile ne peut être créée depuis la plateforme.",
          "Côté référencement, Squarespace reste moins performant qu'un site Next.js ou WordPress bien optimisé. Enfin, le support se fait uniquement par chat et par email, sans assistance téléphonique.",
        ],
      },
      {
        heading: "Squarespace ou une solution sur mesure ?",
        paragraphs: [
          "Pour un site professionnel, comptez 216 € par an en formule Essentiel et 384 € par an en formule Plus, sans les extensions, les emails ni les frais de transaction. Sur trois ans, vous aurez dépensé entre 650 € et 1 150 € pour un site qui ne vous appartient pas.",
          "Un site sur mesure, ou une application mobile iOS et Android, vous appartient : votre code, vos données, aucune dépendance à une plateforme ni hausse d'abonnement imposée. Décrivez-moi votre projet, je vous envoie un devis gratuit sous 24h.",
        ],
      },
    ],
  },
  {
    slug: "comparatif-createurs-site-web-prix",
    image: {
      src: "/blog/comparatif-createurs-site-web-prix-2025.jpg",
      alt: "Ordinateur portable, tablette et smartphone alignés sur un bureau, chacun affichant un site web",
      credit: "Image : Artlist",
    },
    service: "site-web",
    title: "Wix, Squarespace, Webflow : comparatif prix 2026",
    description:
      "Comparatif prix 2026 : Wix, Squarespace, Webflow, Jimdo, WordPress.com. Quel créateur de site est le moins cher, et quand choisir une solution sur mesure ?",
    date: "2026-04-20",
    lastModified: "2026-10-01",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Vous voulez créer un site professionnel et vous comparez les créateurs de sites ? Wix, Squarespace, Webflow, Jimdo, Ionos, GoDaddy : chaque plateforme a sa grille tarifaire, ses avantages et ses pièges, et les comparer n'est pas simple tant les formules se ressemblent.",
          "Voici le comparatif des prix en 2026, ce que ces outils ont tous en commun, et comment choisir selon votre besoin.",
        ],
      },
      {
        heading: "Prix des créateurs de sites en 2026",
        paragraphs: [
          "Voici les tarifs mensuels des formules adaptées à un site professionnel (domaine personnalisé, sans publicité), en paiement annuel. En paiement mensuel, comptez 20 à 40 % de plus. Les prix évoluent régulièrement : vérifiez-les sur le site de chaque plateforme avant de vous engager.",
        ],
        table: {
          head: ["Plateforme", "Prix mensuel (annuel)", "Pour qui"],
          rows: [
            ["Wix", "Light environ 17 €, Core environ 29 €", "Core est la formule nécessaire pour un site pro complet"],
            ["Squarespace", "Basic 12 €, Essentiel 18 €", "Beaux modèles, 0 % de frais de vente en Essentiel"],
            ["Jimdo", "Start 9 €, Grow 15 €", "Sites simples, SEO et fonctionnalités basiques"],
            ["Ionos MyWebsite", "environ 5 à 10 €", "Petits budgets, souvent une promotion la 1re année"],
            ["GoDaddy", "environ 9 à 10 €", "Offre de base pour démarrer"],
            ["Webflow", "Basic 15 $ (25 $ au mois)", "Designers, courbe d'apprentissage élevée"],
            ["WordPress.com", "Business 25 $", "Plus flexible, extensions installables"],
          ],
        },
      },
      {
        heading: "Le piège commun à tous ces créateurs de sites",
        paragraphs: [
          "Tous ces outils partagent le même modèle économique : vous êtes locataire. Votre site vit sur leurs serveurs, dans leur écosystème. Si la plateforme ferme, augmente ses prix ou change ses conditions, vous n'avez aucun recours, et migrer vers un autre hébergeur est impossible ou très difficile.",
          "Ce modèle a d'autres conséquences. Le référencement est plafonné, un site sur plateforme se classant généralement moins bien qu'un site sur mesure. La personnalisation reste enfermée dans les modèles et les contraintes de l'éditeur. Et sur trois à cinq ans, le coût cumulé dépasse souvent celui d'un site sur mesure.",
        ],
        callout: {
          title: "Et pas d'application mobile",
          text: "Aucun de ces créateurs de sites ne vous permettra de créer une vraie application mobile iOS et Android à votre nom.",
        },
      },
      {
        heading: "Quel créateur de site choisir selon votre besoin ?",
        paragraphs: [
          "Pour un site vitrine simple d'artisan ou de profession libérale, Ionos ou GoDaddy conviennent si le budget est serré, et Squarespace si l'esthétique compte avant tout. Pour une boutique en ligne, Shopify reste la référence, à condition de bien regarder les commissions.",
          "Pour un blog ou un site de contenu, WordPress.com ou la formule Core de Wix font l'affaire. Pour un site très personnalisé, de designer ou d'agence, Webflow est le plus souple. En revanche, si vous voulez aussi une application mobile, aucun de ces outils ne pourra vous suivre.",
        ],
      },
      {
        heading: "L'alternative sur mesure : moins chère sur la durée",
        paragraphs: [
          "Un site sur mesure ou une application mobile développée par un freelance coûte plus cher au départ, mais vous appartient définitivement. Sur trois ans, un site Wix Core à environ 29 € par mois, plus les applications ajoutées, revient facilement à 1 000 € à 1 500 € pour un résultat standard.",
          "Un site sur mesure se rentabilise en quelques années, et vous pouvez le déplacer, le faire évoluer, voire le vendre. Et si vous êtes restaurateur, coiffeur, commerçant ou prestataire de services, une application mobile à votre nom va bien plus loin que n'importe quel créateur de site. Devis gratuit sous 24h.",
        ],
      },
    ],
  },
  {
    slug: "tarif-creation-site-internet",
    image: {
      src: "/blog/tarif-creation-site-internet-2025.jpg",
      alt: "Bureau de designer web avec ordinateur portable, nuancier de couleurs et croquis de maquettes",
      credit: "Image : Artlist",
    },
    service: "site-web",
    title: "Tarif création site internet 2026 : le vrai prix",
    description:
      "Quel est le prix d'un site internet en 2026 ? Constructeur (Wix, Squarespace), WordPress, freelance ou agence : comparatif complet des tarifs de création.",
    date: "2026-04-20",
    lastModified: "2026-10-01",
    category: "Tarifs",
    sections: [
      {
        paragraphs: [
          "« Combien coûte un site internet ? » C'est l'une des questions les plus posées sur Google, et la réponse va de 0 € pour un site Wix gratuit à 80 000 € pour une agence digitale grand compte. Entre les deux, quatre grandes options, chacune avec ses avantages et ses coûts cachés.",
          "Voici un guide honnête des tarifs réels en 2026, pour vous aider à choisir selon votre besoin et votre budget.",
        ],
      },
      {
        heading: "Les quatre options en un coup d'œil",
        table: {
          head: ["Option", "Budget", "Ce que vous obtenez"],
          rows: [
            ["Créateur de site", "9 à 30 €/mois", "Un site rapide à lancer, que vous louez"],
            ["WordPress", "250 à 600 € sur 2 ans", "Un site personnalisable, si vous gérez la technique"],
            ["Freelance", "Quelques centaines à quelques milliers d'euros", "Un site sur mesure qui vous appartient"],
            ["Agence web", "3 000 à 80 000 €", "Une équipe complète pour les gros projets"],
          ],
        },
      },
      {
        heading: "Option 1 : les créateurs de sites (Wix, Squarespace, Jimdo…)",
        paragraphs: [
          "Ces plateformes permettent de créer un site sans coder, ce qui en fait une bonne solution pour un premier site vitrine rapide. Comptez environ 9 à 30 € par mois pour une formule professionnelle, jusqu'à 69 € pour les formules haut de gamme, soit 200 à 750 € sur deux ans pour l'abonnement seul.",
          "Leur avantage est évident : la mise en place est rapide et ne demande aucune compétence technique. Leurs limites aussi : le site ne vous appartient pas, le référencement est limité, aucune application mobile n'est possible et vous êtes enfermé dans la plateforme.",
        ],
      },
      {
        heading: "Option 2 : WordPress avec hébergement",
        paragraphs: [
          "WordPress, installé sur votre propre hébergement, est la solution la plus répandue au monde. Vous choisissez un hébergeur, installez WordPress, ajoutez un thème et le personnalisez.",
          "Le budget se décompose ainsi : 3 à 15 € par mois d'hébergement (OVH, Infomaniak, o2switch), 50 à 150 € pour un thème premium (Astra, Divi, Elementor Pro) et 50 à 200 € par an d'extensions. Si vous faites tout vous-même, comptez 250 à 600 € sur deux ans. Mais la maintenance et la sécurité sont à votre charge, ou à déléguer pour 50 à 150 € par mois, et l'ensemble demande du temps et des compétences techniques.",
        ],
      },
      {
        heading: "Option 3 : un développeur freelance",
        paragraphs: [
          "Un freelance développe votre site sur mesure : design personnalisé, fonctionnalités adaptées à votre activité, référencement optimisé. Vous obtenez exactement ce dont vous avez besoin, ni plus ni moins, et vous êtes propriétaire de votre code, sans dépendre d'une plateforme.",
          "Sur le marché, un site vitrine simple se situe entre 400 € et 1 500 € selon les fonctionnalités, et un site e-commerce entre 800 € et 3 000 €. Une application mobile iOS et Android demande quelques milliers d'euros selon ses fonctionnalités. Site et application peuvent aussi être réalisés dans un seul projet, ce qui revient souvent moins cher que de passer par deux prestataires.",
        ],
      },
      {
        heading: "Option 4 : une agence web",
        paragraphs: [
          "Une agence met à disposition toute une équipe : chef de projet, designer, développeurs, référenceur. C'est adapté aux grandes entreprises et aux projets complexes, avec des budgets à la hauteur : 3 000 € à 15 000 € pour un site vitrine, 8 000 € à 50 000 € pour un site e-commerce et 15 000 € à 80 000 € pour une application mobile, avec des délais de un à six mois.",
        ],
      },
      {
        heading: "Quel tarif choisir selon votre profil ?",
        paragraphs: [
          "Si vous démarrez avec moins de 200 € par an, commencez avec Wix ou Squarespace, en prévoyant de migrer plus tard. Si vous êtes artisan, commerçant ou prestataire de services, un freelance offre le meilleur rapport qualité-prix. Si vous vendez en ligne, regardez Shopify ou une boutique sur mesure.",
          "Si vous avez besoin d'une application mobile, un développeur freelance est la seule option pour moins de 15 000 €. Et si vous êtes une grande entreprise avec plusieurs équipes à coordonner, une agence web reste le choix le plus adapté.",
        ],
      },
      {
        heading: "Mon offre : site web ou application mobile sur mesure",
        paragraphs: [
          "Je suis développeur freelance basé à Brest, spécialisé dans les applications mobiles iOS et Android et les sites web sur mesure. Je travaille avec des TPE, artisans, restaurateurs et commerçants qui veulent une vraie présence numérique sans le budget d'une grande entreprise.",
          "Décrivez-moi votre projet : je vous envoie un devis gratuit et détaillé sous 24h.",
        ],
      },
    ],
  },
  {
    slug: "site-web-restaurant-brest",
    image: {
      src: "/blog/site-web-restaurant-brest.jpg",
      alt: "Table de restaurant dressée près d’une fenêtre avec vue sur un port breton",
      credit: "Image : Artlist",
    },
    service: "restaurant",
    title: "Site web pour restaurant à Brest : guide 2026",
    description:
      "Menu en ligne, réservation, commande à emporter : tout ce qu'un site web de restaurant à Brest doit avoir en 2026. Conseils d'un développeur local.",
    date: "2026-04-25",
    lastModified: "2026-10-01",
    category: "Restaurants",
    sections: [
      {
        paragraphs: [
          "Vous êtes restaurateur à Brest et votre site date de 2018, ou vous n'en avez pas encore ? En 2026, un client qui ne vous trouve pas en ligne choisit simplement le restaurant d'à côté. La décision se prend sur un téléphone, souvent en quelques secondes, entre la carte, les photos et les avis.",
          "Voici ce qu'un bon site de restaurant doit contenir, comment le rendre visible sur Google à Brest, et quand une application mobile devient utile en complément.",
        ],
      },
      {
        heading: "Pourquoi votre site web compte plus que jamais",
        paragraphs: [
          "Les restaurateurs brestois font face à une concurrence numérique forte : TheFork, Google Maps, Tripadvisor, Uber Eats. Ces plateformes captent une partie de votre clientèle et prennent entre 15 et 30 % de commission sur chaque commande ou réservation qu'elles vous apportent.",
          "Un site bien conçu vous permet de reprendre la main. Il vous fait apparaître sur Google quand quelqu'un cherche « restaurant Brest », il vous permet de gérer vos propres réservations, et il peut proposer la commande en ligne sans commission. Les plateformes restent utiles pour être découvert ; votre site sert à convertir directement.",
        ],
      },
      {
        heading: "Les fonctionnalités indispensables en 2026",
        subsections: [
          {
            heading: "Un menu en ligne toujours à jour",
            paragraphs: [
              "Vos clients consultent votre carte depuis leur téléphone avant de venir. Si elle n'est pas en ligne, ou si elle date de la saison dernière, ils vont voir ailleurs. Avec un panel d'administration, vous la mettez à jour vous-même en quelques secondes.",
            ],
          },
          {
            heading: "La réservation et la commande en ligne",
            paragraphs: [
              "Un formulaire de réservation simple, disponible 24h/24 et confirmé automatiquement par email ou SMS, réduit les appels pendant le service. La commande à emporter ou en livraison directement sur votre site vous évite de passer par Uber Eats ou Deliveroo pour vos clients fidèles.",
            ],
          },
          {
            heading: "Des photos qui donnent faim",
            paragraphs: [
              "Une grande partie des clients choisit sur les visuels. Des photos soignées de vos plats et de votre salle valent mieux que n'importe quel texte : c'est souvent elles qui font la différence entre deux restaurants.",
            ],
          },
          {
            heading: "Un site rapide sur mobile",
            paragraphs: [
              "La grande majorité des recherches « restaurant Brest » se font depuis un smartphone. Un site lent ou mal affiché sur téléphone fait fuir les clients, et Google le pénalise dans ses résultats.",
            ],
          },
        ],
      },
      {
        heading: "Ce que coûte un site pour un restaurant",
        paragraphs: [
          "Le budget dépend des fonctionnalités dont vous avez besoin. Un site vitrine avec menu, horaires et contact est la base pour apparaître sur Google. La réservation en ligne réduit les appels, la commande en ligne avec paiement vous affranchit des plateformes de livraison, et une application mobile place votre restaurant directement sur le téléphone de vos clients.",
          "Mes tarifs sont affichés sur les pages Site web et Application mobile du site, et je vous envoie un devis gratuit sous 24h.",
        ],
      },
      {
        heading: "Site web ou application mobile : que choisir ?",
        paragraphs: [
          "Un site web est indexé par Google et accessible sans téléchargement : c'est la base, celle qui vous fait trouver. Une application mobile va plus loin pour vos habitués : notifications (« Offre spéciale ce soir »), programme de fidélité, commande en un clic.",
          "Pour un restaurant à Brest, la combinaison idéale est un site bien référencé pour attirer de nouveaux clients, et une application pour fidéliser la clientèle locale. Je développe les deux depuis Brest : décrivez-moi votre projet, je vous réponds sous 24h.",
        ],
      },
      {
        heading: "Apparaître sur Google quand on cherche « restaurant Brest »",
        paragraphs: [
          "Un site ne sert à rien s'il n'est pas visible. Le premier levier, c'est votre fiche Google Business : complète, vérifiée, avec vos vraies photos et vos horaires exacts, et reliée à votre site.",
          "Viennent ensuite les avis Google, le premier facteur du classement local : invitez chaque client satisfait à en laisser un. Vos textes doivent aussi mentionner Brest, votre quartier (Recouvrance, Saint-Martin, Bellevue…) et votre type de cuisine. Enfin, un site rapide pensé pour le mobile et des données structurées de type Restaurant permettent à Google de comprendre vos horaires, votre menu et votre emplacement.",
        ],
      },
    ],
  },
  {
    slug: "creation-site-pizzeria-brest",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Pizza_in_oven.jpg/960px-Pizza_in_oven.jpg",
      alt: "Pizza en cuisson dans un four",
      credit: "Photo : Dimitri Neyt, domaine public, via Wikimedia Commons",
    },
    service: "restaurant",
    title: "Créer un site web professionnel pour pizzeria à Brest : guide 2026",
    description:
      "Développeur freelance à Brest : je crée votre site web professionnel de pizzeria, avec commande en ligne, menu digital et référencement local. Guide complet.",
    date: "2026-04-25",
    lastModified: "2026-10-01",
    category: "Restaurants",
    sections: [
      {
        paragraphs: [
          "Vous tenez une pizzeria à Brest et vous cherchez à créer un site web professionnel ? Ce guide s'adresse aux pizzaiolos qui veulent récupérer leurs commandes en ligne sans reverser 25 % à Uber Eats ou Just Eat, et apparaître en premier quand un client cherche « pizzeria Brest » sur Google.",
          "Voici ce qu'un site de pizzeria doit contenir, comment le rendre visible localement, et les astuces concrètes qui font vendre plus de pizzas en ligne.",
        ],
      },
      {
        heading: "Le vrai coût des plateformes de livraison",
        paragraphs: [
          "Uber Eats, Just Eat, Deliveroo : ces plateformes apportent de la visibilité au départ, mais à un prix élevé. Elles prennent entre 20 et 30 % de commission sur chaque commande, sans compter les frais d'activation et les campagnes promotionnelles « conseillées ».",
          "Sur une pizza à 14 €, vous reversez entre 2,80 € et 4,20 € à la plateforme. Sur 50 pizzas par soir, ce sont 140 € à 210 € qui ne vous reviennent pas, soit 4 000 € à 6 000 € par mois sur une activité de livraison correcte. Un site avec commande en ligne directe est un investissement unique, qui s'amortit en quelques semaines à ce rythme.",
        ],
      },
      {
        heading: "Ce qu'un site de pizzeria doit avoir",
        paragraphs: [
          "Le cœur du site, c'est le menu : vos pizzas, leurs ingrédients, leurs tailles et leurs prix, lisibles sur un téléphone en trois secondes, avec de belles photos. Autour, la commande en ligne avec le choix entre livraison et emporter, un paiement sécurisé par Stripe et une confirmation automatique par SMS.",
          "Deux détails font une grande différence pendant le coup de feu : afficher une estimation du temps de préparation en temps réel, ce qui réduit fortement les appels, et intégrer des avis clients pour rassurer les nouveaux. Et comme l'immense majorité des commandes de pizzas se fait depuis un smartphone, la version mobile doit être irréprochable.",
          "Enfin, le site doit être relié à votre fiche Google : horaires d'ouverture, zone de livraison et lien de commande directement dans Google Maps.",
        ],
      },
      {
        heading: "Apparaître sur « pizzeria Brest »",
        paragraphs: [
          "Pour les recherches alimentaires, Google affiche en priorité les résultats locaux. Votre position dépend d'abord de votre fiche Google Business : photos récentes, horaires exacts, menu en ligne et réponses aux avis. Les avis eux-mêmes comptent énormément, en nombre comme en qualité : à Brest, une dizaine d'avis 5 étoiles suffit à faire une vraie différence.",
          "Le site joue aussi son rôle. Il doit être rapide (un site Next.js ou WordPress optimisé se charge en moins d'une seconde), mentionner Brest et vos quartiers de livraison (Saint-Marc, Lambézellec, Kerichen…), et contenir des données structurées de type Restaurant pour que Google comprenne votre établissement, vos horaires et votre menu.",
        ],
      },
      {
        heading: "Application mobile ou site web pour une pizzeria ?",
        paragraphs: [
          "Ma recommandation est claire : le site web d'abord. Apparaître sur Google n'est pas négociable, c'est votre premier canal pour trouver de nouveaux clients.",
          "L'application mobile vient ensuite, pour vos habitués : notifications « Pizza du vendredi », programme de fidélité (dix pizzas achetées, une offerte) et commande en un geste. Le site attire, l'application fidélise : les deux se complètent parfaitement.",
        ],
      },
      {
        heading: "5 astuces pour vendre plus de pizzas en ligne",
        paragraphs: [
          "Avoir un site ne suffit pas : quelques réglages font une vraie différence sur le nombre de commandes. Voici ce qui fonctionne le mieux chez les pizzerias que j'accompagne.",
        ],
        subsections: [
          {
            heading: "1. Soignez vos photos",
            paragraphs: [
              "Photographiez vos pizzas en lumière naturelle, de dessus et à 45°, juste après la cuisson. Les photos prises au flash le soir en cuisine font fuir plus qu'elles n'attirent. Une seule bonne séance photo, même au smartphone, suffit pour tout le menu.",
            ],
          },
          {
            heading: "2. Réduisez le menu en ligne",
            paragraphs: [
              "Affichez vos 10 à 15 meilleures ventes plutôt que toute la carte. Un client qui doit faire défiler 40 pizzas sur son téléphone abandonne plus souvent qu'un client face à un choix court et clair.",
            ],
          },
          {
            heading: "3. Suggérez un complément au panier",
            paragraphs: [
              "Une suggestion automatique à l'ajout au panier (« une boisson ? », « un dessert ? ») est le levier qui augmente le plus le panier moyen, sans aucun effort de vente de votre part.",
            ],
          },
          {
            heading: "4. Coupez les commandes avant la fermeture",
            paragraphs: [
              "Arrêtez les commandes en ligne 30 minutes avant l'arrêt réel du four. Vous évitez ainsi les commandes prises trop tard que l'équipe doit refuser au téléphone, première source d'avis négatifs.",
            ],
          },
          {
            heading: "5. Annoncez un temps d'attente réaliste",
            paragraphs: [
              "Un client prévenu de 35 minutes et servi en 30 est content. Un client à qui l'on a promis 20 minutes et qui en attend 35 laisse un avis 2 étoiles. Mieux vaut sous-promettre et sur-livrer.",
            ],
          },
        ],
      },
      {
        heading: "Fidéliser sans y passer vos soirées",
        paragraphs: [
          "La fidélisation d'une pizzeria de quartier ne repose pas sur des outils complexes, mais sur la régularité de quelques actions simples. Le bon moment pour envoyer une notification ou un SMS, c'est le jeudi ou le vendredi en fin d'après-midi, quand se prend la décision « on commande ce soir » ; le mardi ou le mercredi donnent beaucoup moins de résultats.",
          "Plutôt qu'une promotion envoyée à tout le monde, ciblez les clients inactifs depuis 30 jours : un habitué qui a disparu réagit mieux à « on vous a manqué » qu'à une offre générique. Mettre en avant une pizza du moment, qui change chaque mois, donne une raison de revenir et alimente vos publications Google et Instagram sans effort.",
          "Pour les avis, demandez-les juste après la livraison : un lien envoyé par SMS 15 minutes après réception obtient bien plus de réponses qu'un email le lendemain. Et gardez un programme de fidélité simple : un compteur « 9 pizzas sur 10 » bien visible fonctionne mieux qu'un système de points, de paliers et d'exceptions que personne ne comprend.",
        ],
      },
      {
        heading: "Des formules adaptées à votre pizzeria",
        paragraphs: [
          "Je propose plusieurs formules aux pizzerias et restaurants indépendants : un site vitrine avec menu en ligne pour apparaître sur Google, un site avec commande en ligne et paiement Stripe pour recevoir les commandes directement sur votre écran, une application mobile iOS et Android avec notifications et fidélité, ou le pack site et application pour vous affranchir complètement des plateformes.",
          "Je suis basé à Brest et je peux vous rencontrer pour parler de votre projet. Devis gratuit sous 24h.",
        ],
      },
    ],
  },
  {
    slug: "application-mobile-brest",
    image: {
      src: "/blog/application-mobile-brest.jpg",
      alt: "Main tenant un smartphone devant le port de Brest et le pont de Recouvrance en arrière-plan flou",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Application mobile à Brest : agence ou freelance ?",
    description:
      "Créer une application mobile à Brest : agence ou développeur freelance, étapes de A à Z, technologie et erreurs à éviter. Les conseils d'un développeur brestois.",
    date: "2026-04-30",
    lastModified: "2026-10-01",
    category: "Local",
    sections: [
      {
        paragraphs: [
          "Vous êtes restaurateur rue de Siam, coiffeur à Saint-Marc, commerçant aux Halles Saint-Louis ou porteur de projet dans la French Tech Brest ? Une application mobile n'est plus réservée aux grandes enseignes : c'est devenu le moyen le plus direct de toucher vos clients, là où ils passent le plus de temps, sur leur téléphone.",
          "Ce guide couvre tout ce qu'il faut savoir pour créer une application mobile à Brest : à qui confier votre projet, comment se déroule la création, quelle technologie choisir et quels pièges éviter. Il est écrit par un développeur d'applications basé à Brest.",
        ],
      },
      {
        heading: "Pourquoi créer une application pour votre activité ?",
        paragraphs: [
          "Vos clients passent plusieurs heures par jour sur leur smartphone, et l'essentiel de ce temps se passe dans des applications, pas dans un navigateur. Être présent sur leur écran d'accueil, c'est faire partie de leur quotidien.",
          "Concrètement, une application permet à vos clients de commander ou de réserver directement chez vous, sans commission de plateforme ni intermédiaire. Elle vous permet de leur parler par notification (« Offre spéciale ce vendredi », « Nouveau menu disponible »), avec un taux de lecture sans commune mesure avec l'email. Elle remplace la carte de fidélité papier par des tampons virtuels, des réductions automatiques et des offres d'anniversaire qui ne se perdent jamais.",
          "Votre marque gagne aussi en crédibilité, visible et téléchargeable sur l'App Store et Google Play à côté des grandes enseignes. Et grâce au panel d'administration, vous restez autonome : menu, horaires et contenus se modifient sans repasser par un développeur.",
        ],
      },
      {
        heading: "À qui confier la création de votre application ?",
        paragraphs: [
          "Quatre options s'offrent à vous, avec des philosophies très différentes.",
        ],
        table: {
          head: ["Option", "Pour qui", "Ce qu'il faut savoir"],
          rows: [
            ["Agence structurée", "Grandes entreprises, gros projets", "Équipe complète, budget et délais en conséquence"],
            ["Développeur local indépendant", "TPE, restaurateurs, artisans, commerçants", "Interlocuteur unique, délais courts, suivi direct"],
            ["Plateforme no-code", "Tests très rapides", "Apps souvent refusées par Apple, limitées, abonnement à vie"],
            ["Freelance en ligne (Fiverr, Malt)", "Petits budgets", "Qualité variable, pas de rencontre, suivi souvent absent"],
          ],
        },
      },
      {
        heading: "Les étapes de création, de l'idée aux stores",
        paragraphs: [
          "Un projet d'application bien mené suit toujours le même chemin. Le connaître vous permet de dialoguer d'égal à égal avec le professionnel que vous choisirez.",
        ],
        subsections: [
          {
            heading: "1. Le cadrage",
            paragraphs: [
              "On définit qui sont vos utilisateurs, quel problème l'application résout et quelles fonctionnalités sont vraiment indispensables au lancement. C'est l'étape qui évite la plupart des dérapages de budget et de délai.",
            ],
          },
          {
            heading: "2. Les maquettes",
            paragraphs: [
              "Chaque écran est dessiné et validé avec vous avant d'écrire la moindre ligne de code. Modifier une maquette prend quelques minutes ; modifier une application déjà codée prend des jours.",
            ],
          },
          {
            heading: "3. Le développement et les tests",
            paragraphs: [
              "L'application prend vie, avec des points d'avancement réguliers et des versions de test installées sur votre propre téléphone. Elle est ensuite éprouvée sur de vrais appareils iOS et Android, dans de vraies conditions : connexion lente, écrans variés, cas inhabituels.",
            ],
          },
          {
            heading: "4. La publication et le suivi",
            paragraphs: [
              "La soumission sur l'App Store et Google Play, avec leurs règles de validation respectives, est une étape technique souvent sous-estimée. Viennent ensuite les mises à jour de compatibilité avec les nouvelles versions d'iOS et d'Android, les corrections et les évolutions : une application vivante est une application qui dure.",
            ],
          },
        ],
      },
      {
        heading: "Quelle technologie choisir ?",
        paragraphs: [
          "C'est la question technique qui a le plus d'impact sur votre budget et vos délais. Le développement « natif » consiste à créer deux applications distinctes, une pour iOS et une pour Android, avec deux bases de code à maintenir en parallèle.",
          "Le développement cross-platform avec React Native, la technologie créée par Meta et utilisée par Instagram, Airbnb ou Discord, permet de créer une seule application qui fonctionne sur les deux systèmes. Le projet est deux fois plus rapide à développer et à faire évoluer, pour des performances proches du natif.",
          "Pour la quasi-totalité des projets de commerces, de restaurants et de services, le cross-platform est aujourd'hui le choix évident. Le natif pur ne se justifie que pour des besoins très particuliers, comme les jeux 3D exigeants.",
        ],
      },
      {
        heading: "Les erreurs à éviter",
        paragraphs: [
          "La plus fréquente consiste à vouloir tout, tout de suite. Les meilleures applications démarrent avec peu de fonctionnalités, très bien faites, puis évoluent avec les retours des vrais utilisateurs. À l'inverse, copier l'application d'un concurrent fonction par fonction mène rarement loin : une application réussie résout un problème concret de vos clients, elle ne coche pas des cases.",
          "Deux oublis coûtent cher plus tard. Le premier, c'est le panel d'administration : sans lui, chaque changement de menu ou d'horaire demande un développeur. Le second, c'est l'après-livraison : demandez toujours ce qui est prévu pour l'hébergement, le support et les mises à jour de compatibilité.",
          "Enfin, méfiez-vous du no-code « pour tester » : entre les refus de l'App Store et l'abonnement mensuel à vie, le test revient vite plus cher qu'une application sur mesure.",
        ],
      },
      {
        heading: "Brest et le Finistère : un accompagnement de proximité",
        paragraphs: [
          "Je suis basé à Brest et je travaille avec des clients dans tout le Finistère et la Bretagne : Quimper, Landerneau, Morlaix et Brest métropole (Guipavas, Plougastel-Daoulas, Le Relecq-Kerhuon).",
          "Travailler avec un développeur local, c'est pouvoir se retrouver autour d'un café pour poser votre idée, montrer l'avancement de vive voix et ajuster rapidement. Et si vous préférez, tout peut aussi se faire à distance, par appel vidéo et démonstration en ligne.",
          "Vous avez une idée d'application, même floue ? Écrivez-moi : le devis est gratuit, sans engagement, et je réponds sous 24h.",
        ],
      },
      {
        heading: "FAQ : application mobile à Brest",
        list: [
          "Où êtes-vous basé à Brest ? Je travaille depuis Brest (Finistère, 29200). Je peux me déplacer pour vous rencontrer dans toute la Brest métropole : Guipavas, Plougastel-Daoulas, Le Relecq-Kerhuon, Landerneau.",
          "Peut-on travailler à distance sans se rencontrer ? Oui. Une partie de mes clients est suivie entièrement à distance, par appels vidéo, démos en ligne et livraison numérique. La rencontre est un plus, pas une obligation.",
          "Combien de temps faut-il pour créer une application mobile ? Entre 2 et 5 semaines selon la complexité, de la conception à la publication sur l'App Store et Google Play.",
          "Combien coûte une application mobile à Brest ? Cela dépend des fonctionnalités : paiement en ligne, notifications push, réservation, panel admin. Contactez-moi pour un devis gratuit et détaillé sous 24h, adapté à votre projet.",
          "Intervenez-vous en dehors de Brest ? Oui : Quimper, Morlaix, Landerneau, Rennes, et partout en France à distance.",
          "Quelle est la différence entre un développeur à Brest et un freelance en ligne ? La proximité : on peut se rencontrer, je connais le tissu économique local, et je suis joignable sur le même fuseau horaire, dans la même langue, sans ambiguïté.",
        ],
      },
    ],
  },
  {
    slug: "application-mobile-artisan-commercant",
    image: {
      src: "/blog/application-mobile-artisan-commercant.jpg",
      alt: "Artisan dans son atelier consultant un smartphone parmi ses outils sur un établi en bois",
      credit: "Image : Artlist",
    },
    service: "site-web",
    title: "App mobile pour artisan & commerçant : guide",
    description:
      "Boulanger, boucher, fleuriste : pourquoi une application mobile sur mesure dépasse Wix ou Planity pour fidéliser vos clients et booster vos ventes.",
    date: "2026-05-09",
    lastModified: "2026-10-01",
    category: "Guides",
    sections: [
      {
        paragraphs: [
          "Vous êtes artisan ou commerçant de proximité. Votre boutique tourne bien, vous avez une clientèle fidèle, mais vous voyez certains concurrents gagner de nouveaux clients grâce au digital, et vous vous demandez comment faire pareil sans vous ruiner.",
          "Wix, Shopify, Planity, Instagram : on vous a sans doute conseillé ces outils, et certains sont utiles. Mais aucun ne vous donne ce qu'une application à votre nom peut offrir : votre marque, vos données et votre relation client, sans intermédiaire entre vous et vos clients.",
        ],
      },
      {
        heading: "Pourquoi les plateformes génériques ne suffisent plus",
        paragraphs: [
          "Wix et Shopify sont conçus pour tout le monde, ce qui veut dire qu'ils ne sont vraiment adaptés à personne en particulier. Un boulanger n'a pas les mêmes besoins qu'un e-commerçant de mode, et un coiffeur ne gère pas ses rendez-vous comme un restaurant gère ses réservations.",
          "Chaque outil a son terrain. Wix est idéal pour un site vitrine, mais pas pour la gestion quotidienne d'une boutique de proximité. Shopify est pensé pour l'e-commerce pur, avec des commissions et des abonnements d'applications qui s'accumulent. Planity se limite à la prise de rendez-vous dans la beauté, sans personnalisation de marque. Et Instagram est excellent pour la visibilité, mais ne gère ni les commandes ni la fidélité.",
        ],
      },
      {
        heading: "Ce qu'une application sur mesure apporte à un artisan",
        paragraphs: [
          "Une application conçue pour votre commerce contient exactement ce dont vous avez besoin, et rien de superflu. Voici les fonctionnalités les plus demandées par les artisans et commerçants que j'accompagne.",
        ],
        subsections: [
          {
            heading: "Les commandes en direct",
            paragraphs: [
              "Vos clients commandent dans votre application, sans commission à une plateforme : toute la marge reste chez vous. Avec le click & collect, ils commandent à l'avance et vous préparez sans stress.",
            ],
          },
          {
            heading: "La fidélité et les notifications",
            paragraphs: [
              "Tampons virtuels, points cumulés, offres réservées aux habitués : la carte de fidélité devient numérique. Et les notifications vous permettent de prévenir vos clients en temps réel : « Nouvelle fournée ce matin », « Promotions du week-end », « Fermeture exceptionnelle ».",
            ],
          },
          {
            heading: "Un catalogue que vous gérez vous-même",
            paragraphs: [
              "Produits, prix et disponibilités se modifient depuis un panel d'administration, sans repasser par un développeur. Et votre nom apparaît sur l'App Store et Google Play, à côté des grandes enseignes nationales.",
            ],
          },
        ],
      },
      {
        heading: "Boulanger, boucher, fleuriste : des exemples concrets",
        paragraphs: [
          "Chaque métier utilise l'application à sa façon, selon ce qui compte le plus pour ses clients.",
        ],
        table: {
          head: ["Métier", "Usage de l'application"],
          rows: [
            ["Boulangerie", "Commande la veille, click & collect le matin, dixième baguette offerte : zéro gaspillage, zéro attente"],
            ["Boucherie-charcuterie", "Produits du moment, commandes de plateaux pour les fêtes, alertes sur les arrivages exceptionnels"],
            ["Fleuriste", "Bouquets personnalisés réservés à l'avance, rappels pour les grandes occasions, galerie des créations"],
            ["Coiffeur, esthéticienne", "Rendez-vous 24h/24, rappels automatiques, historique des prestations, vente de produits"],
            ["Épicerie, maraîcher", "Panier de saison, abonnement hebdomadaire, points de retrait"],
          ],
        },
      },
      {
        heading: "Combien coûte une application pour un artisan ?",
        paragraphs: [
          "C'est souvent la première question, et la principale crainte : on imagine un budget réservé aux grandes entreprises. Avec un développeur freelance React Native, c'est bien plus accessible qu'en agence. Mes tarifs sont affichés sur la page Application mobile du site.",
          "Trois niveaux reviennent le plus souvent. L'application vitrine, aux couleurs de votre boutique, avec catalogue, comptes clients et publication sur les stores. L'application avec paiement, qui ajoute le paiement en ligne, les notifications et le panel d'administration. Et l'application boutique complète, avec gestion des commandes et des stocks et programme de fidélité.",
        ],
      },
      {
        heading: "Application sur mesure ou abonnement Wix et Shopify : le vrai calcul",
        paragraphs: [
          "Beaucoup de commerçants ne regardent que le prix d'entrée. Voici le coût réel sur 24 mois :",
        ],
        table: {
          head: ["Solution", "Coût sur 24 mois", "Ce qu'il faut savoir"],
          rows: [
            ["Wix Business", "environ 984 € + apps", "Abonnement à vie, fonctionnalités limitées"],
            ["Shopify Basic", "936 € + 2 % par vente + apps", "La facture grossit avec vos ventes"],
            ["Application sur mesure", "Coût de création unique + hébergement", "Vous appartient, 0 % de commission"],
          ],
        },
        callout: {
          title: "Le piège des commissions",
          text: "Pour un commerçant qui vend 2 000 € par mois en ligne, les commissions Shopify représentent 480 € par an, chaque année, sans que la plateforme ne vous appartienne jamais.",
        },
      },
      {
        heading: "Pourquoi choisir un développeur freelance breton ?",
        paragraphs: [
          "Je suis basé à Brest et je travaille avec des artisans et commerçants de Bretagne qui veulent un outil qui leur ressemble, pas un modèle générique conçu à l'autre bout du monde.",
          "Vous avez un interlocuteur unique et joignable, qui connaît votre activité et fait évoluer votre application selon vos besoins réels. Pas de ticket de support, pas de chatbot, pas de centre d'appels. Dites-moi ce que fait votre commerce : je vous propose une solution adaptée, avec un devis gratuit sous 24h.",
        ],
      },
    ],
  },
  {
    slug: "shopify-wix-vs-application-mobile-sur-mesure",
    image: {
      src: "/blog/shopify-wix-vs-application-mobile-sur-mesure.jpg",
      alt: "Ordinateur portable affichant une boutique en ligne et smartphone avec une app e-commerce côte à côte, petit caddie et pièces",
      credit: "Image : Artlist",
    },
    service: "ecommerce",
    title: "Shopify & Wix vs app sur mesure : comparatif",
    description:
      "Coûts cachés, commissions, limitations : ce que Wix et Shopify ne disent pas. Pourquoi une app mobile sur mesure est souvent plus rentable à 24 mois.",
    date: "2026-05-09",
    lastModified: "2026-10-01",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Wix et Shopify dominent la publicité en ligne et passent pour les références incontournables dès qu'un commerçant veut se lancer sur internet. Mais sont-ils vraiment les meilleures options ? Pour qui, et à quel prix réel ?",
          "Je suis développeur freelance spécialisé en applications mobiles à Brest. Régulièrement, des porteurs de projet me contactent après avoir essayé Wix ou Shopify et s'être heurtés à leurs limites. Voici ce que j'ai retenu de ces échanges, chiffres et cas concrets à l'appui.",
        ],
      },
      {
        heading: "Ce que Wix sait faire, et ce qu'il ne peut pas faire",
        paragraphs: [
          "Wix excelle dans un domaine : créer rapidement un site vitrine de plusieurs pages, avec formulaire de contact, sans aucune compétence technique. Un petit catalogue avec paiement en ligne simple reste faisable.",
          "Ses limites apparaissent dès que l'on veut aller plus loin. Wix génère des pages web, pas des applications : impossible d'obtenir une application iOS et Android. Les notifications vers vos clients demandent un abonnement à une application tierce, la personnalisation reste limitée par les modèles, et votre infrastructure reste chez Wix.",
        ],
      },
      {
        heading: "Ce que Shopify sait faire, et ses limites réelles",
        paragraphs: [
          "Shopify est la référence de l'e-commerce. Une boutique complète avec gestion des stocks, des connexions aux grands transporteurs (Colissimo, DHL) et aux marketplaces comme Amazon : pour vendre rapidement, la logistique est bien rodée.",
          "Ses coûts réels sont en revanche rarement affichés clairement. Shopify prélève de 0,5 % à 2 % sur chaque vente selon la formule : sur 10 000 € de ventes mensuelles, cela peut représenter 200 € par mois. La plupart des fonctions avancées (fidélité, avis, offres groupées) passent par des applications à 15 à 50 € par mois chacune. L'application Shopify Mobile reste limitée et peu personnalisable. Et si Shopify suspend votre boutique, pour une fraude présumée ou un changement de politique, vous perdez tout.",
        ],
      },
      {
        heading: "Le vrai coût sur 24 mois",
        paragraphs: [
          "Voici une comparaison réaliste pour un commerce qui réalise 5 000 € de ventes mensuelles en ligne :",
        ],
        table: {
          head: ["Solution", "Coût sur 2 ans", "Résultat"],
          rows: [
            ["Wix Business", "environ 1 700 € (984 € d'abonnement + environ 30 €/mois d'apps)", "Site web adapté au mobile, pas d'application"],
            ["Shopify Basic", "environ 4 000 € (936 € + 2 400 € de commissions + apps)", "Boutique en ligne en location"],
            ["Application sur mesure", "Coût de création unique + hébergement", "Application iOS et Android qui vous appartient, 0 % de commission"],
          ],
        },
        callout: {
          title: "Une facture qui grossit avec vos ventes",
          text: "Avec Shopify, la facture tombe chaque mois et augmente avec votre chiffre d'affaires. Une application sur mesure est un investissement ponctuel : plus vous vendez, plus elle devient rentable.",
        },
      },
      {
        heading: "Ce que les plateformes ne peuvent pas reproduire",
        paragraphs: [
          "Une vraie application mobile offre des capacités que ni Wix ni Shopify ne peuvent égaler. Les notifications arrivent directement sur l'écran de vos clients, avec un taux d'ouverture bien supérieur à celui des emails marketing. L'interface, pensée pour le toucher, est nettement plus rapide qu'un site mobile, et le catalogue reste consultable même sans connexion.",
          "L'application accède aussi aux fonctions du téléphone : caméra pour scanner un QR code, géolocalisation, Face ID ou empreinte digitale. Les utilisateurs d'applications ont des paniers moyens nettement plus élevés que les visiteurs d'un site mobile. Et votre identité de marque est totale : votre logo, vos couleurs, sans le logo d'une plateforme dans un coin.",
        ],
      },
      {
        heading: "Quand choisir Wix ou Shopify malgré tout ?",
        paragraphs: [
          "Wix et Shopify ont leur place. Wix est le bon choix pour un site vitrine simple, monté rapidement, avec moins de 200 € par an de budget et aucune ambition e-commerce ou mobile à court terme. Shopify convient si vous vendez des produits standardisés en grande quantité, avec des besoins logistiques complexes : plusieurs devises, vente internationale, marketplaces.",
          "Une application sur mesure devient le meilleur choix dès que vous avez une relation client à cultiver, une communauté à fidéliser, ou un service qui gagne à une expérience mobile soignée : restaurant, artisan, service local, jeu ou application métier.",
        ],
      },
      {
        heading: "Ce que mes clients ont gagné en passant au sur mesure",
        paragraphs: [
          "Les commerçants qui me contactent après Wix ou Shopify font souvent le même constat : « J'ai payé des abonnements pendant deux ans, et je dépends toujours de la plateforme pour tout. »",
          "Avec une application sur mesure, vous êtes propriétaire de votre outil, de votre base de clients et de votre expérience utilisateur. Si vous voulez changer de prestataire demain, vous le pouvez : vos données vous appartiennent. Décrivez-moi votre projet et votre secteur, je vous réponds sous 24h avec une proposition concrète.",
        ],
      },
    ],
  },
  {
    slug: "application-mobile-boutique-en-ligne",
    image: {
      src: "/blog/application-mobile-boutique-en-ligne.jpg",
      alt: "Personne recevant un colis et signant sur un smartphone devant sa porte",
      credit: "Image : Artlist",
    },
    service: "ecommerce",
    title: "Boutique en ligne : app mobile vs site web",
    description:
      "Application mobile ou site e-commerce ? Conversion, fidélisation, coûts : le guide pour choisir la meilleure solution pour votre boutique en ligne.",
    date: "2026-05-09",
    lastModified: "2026-10-01",
    category: "Guides",
    sections: [
      {
        paragraphs: [
          "Vous vendez en ligne, ou vous voulez vous lancer, et vous hésitez : vaut-il mieux créer un site e-commerce (Shopify, Wix, WooCommerce) ou une application mobile dédiée ?",
          "La réponse dépend de votre situation, mais une tendance est nette : les applications convertissent mieux, fidélisent davantage et génèrent des paniers plus élevés. Voici pourquoi, et comment choisir la bonne approche pour votre boutique.",
        ],
      },
      {
        heading: "Le commerce mobile en chiffres",
        paragraphs: [
          "Le mobile représente désormais plus de 70 % du trafic e-commerce mondial, et environ 78 % des achats en ligne se font depuis un smartphone ou une tablette. Mais il faut distinguer le site mobile, consulté dans un navigateur, de l'application installée sur le téléphone.",
          "Une majorité de consommateurs (57 %) disent préférer acheter dans une application plutôt que sur un site mobile. Et les écarts de performance sont importants : un taux de conversion jusqu'à trois fois supérieur dans les applications, un panier moyen environ deux fois plus élevé, et des notifications bien plus lues que les emails marketing.",
        ],
      },
      {
        heading: "Site e-commerce ou application : les différences clés",
        paragraphs: [
          "Un site e-commerce adapté au mobile fonctionne dans le navigateur ; une application est installée sur l'appareil de votre client. Cette différence technique change beaucoup de choses pour vos ventes.",
        ],
        subsections: [
          {
            heading: "La vitesse",
            paragraphs: [
              "Une application se charge beaucoup plus vite qu'un site mobile, et chaque seconde gagnée se traduit en ventes : un chargement lent fait abandonner une partie des acheteurs avant même qu'ils voient vos produits.",
            ],
          },
          {
            heading: "Les notifications",
            paragraphs: [
              "Seule une application peut afficher un message sur l'écran de verrouillage de vos clients : « Votre commande est expédiée », « Soldes : -30 % ce week-end ». C'est le canal le plus direct pour les faire revenir.",
            ],
          },
          {
            heading: "Les fonctions du téléphone",
            paragraphs: [
              "Scanner de code-barres, paiement Apple Pay et Google Pay, Face ID, géolocalisation : l'application utilise tout ce que le téléphone sait faire. Et le catalogue reste accessible même sans réseau.",
            ],
          },
          {
            heading: "La présence au quotidien",
            paragraphs: [
              "Une application installée, c'est une présence permanente dans la vie de votre client. Un site, c'est seulement quand il pense à y revenir. Votre boutique gagne aussi une vitrine supplémentaire sur l'App Store et Google Play.",
            ],
          },
        ],
      },
      {
        heading: "Quand rester sur un site e-commerce classique ?",
        paragraphs: [
          "Une application n'est pas toujours la meilleure première étape. Si vous démarrez et testez votre marché, un site Shopify ou WooCommerce permet de valider votre offre rapidement, sans gros investissement. Si vous vendez surtout à des professionnels, sachez que les acheteurs B2B commandent souvent depuis un ordinateur de bureau.",
          "De même, un très grand catalogue peu personnalisé (plus de 1 000 produits) fonctionne bien sur le web, et avec un budget très limité, un site vitrine avec panier suffit pour commencer.",
        ],
      },
      {
        heading: "Quand une application devient indispensable",
        paragraphs: [
          "L'application devient la meilleure option quand vous avez une communauté fidèle à entretenir : programme de points, offres exclusives, contenus réservés, elle devient alors le canal privilégié de votre relation client. C'est aussi le cas si vos clients commandent régulièrement (épicerie, produits consommables, abonnements) et méritent une expérience fluide.",
          "Elle s'impose également pour un service local avec réservation ou click & collect, où notifications et géolocalisation font la différence, et quand vous affrontez des enseignes nationales sur votre marché local : une application professionnelle vous place à leur niveau. Enfin, si vos marges sont serrées, ne plus perdre 2 à 3 % de commission sur chaque vente change tout.",
        ],
      },
      {
        heading: "Site web et application : le meilleur des deux",
        paragraphs: [
          "Avoir les deux est souvent la meilleure stratégie à moyen terme. Le site e-commerce attire du trafic depuis Google (référencement naturel, publicité) et vous permet de valider votre offre. L'application, ensuite, fidélise les clients acquis : ceux qui achètent régulièrement la téléchargent, les nouveaux visiteurs continuent d'arriver par le site.",
          "Vous obtenez ainsi deux canaux de vente complémentaires, et une meilleure fidélisation de vos meilleurs clients.",
        ],
      },
      {
        heading: "Combien coûte une application pour une boutique en ligne ?",
        paragraphs: [
          "Le budget dépend de la taille de votre catalogue et des fonctionnalités souhaitées ; mes tarifs sont affichés sur la page E-commerce du site. L'application est à votre nom, sur iOS et Android, avec catalogue, paiement Stripe, gestion des commandes et notifications.",
          "Contrairement à Shopify ou aux marketplaces, aucune commission n'est prélevée sur vos ventes. Le design reprend les couleurs de votre marque, la publication sur l'App Store et Google Play est comprise, et un panel d'administration vous permet de gérer votre catalogue, avec un support humain.",
        ],
      },
      {
        heading: "Conclusion : un investissement rentable",
        paragraphs: [
          "Pour une boutique qui réalise entre 2 000 € et 10 000 € de ventes mensuelles, une application sur mesure devient rentable en quelques mois : meilleure conversion, paniers plus élevés, fidélité accrue, et des notifications qui remplacent avantageusement des campagnes email coûteuses.",
          "Je suis développeur freelance à Brest, spécialisé dans les applications pour commerçants et artisans. Dites-moi ce que vend votre boutique : je vous propose une solution adaptée à votre budget et à votre ambition, avec un devis gratuit sous 24h.",
        ],
      },
      {
        heading: "FAQ : application mobile pour boutique en ligne",
        list: [
          "Peut-on gérer les stocks depuis l'app ? Oui. Le panel admin inclut la gestion des stocks, des variantes produits et des commandes.",
          "L'app gère-t-elle les livraisons ? Oui. Vous configurez les modes de livraison, les zones et les tarifs dans le panel admin.",
          "Peut-on avoir à la fois un site Shopify et une app sur mesure ? Oui : le site Shopify gère le trafic Google, l'app fidélise les clients acquis. Les deux se complètent.",
          "Combien coûte une application pour une boutique en ligne ? Le tarif dépend de la taille du catalogue et des fonctionnalités. Mes tarifs sont affichés sur la page E-commerce, avec un devis détaillé gratuit sous 24h.",
        ],
      },
    ],
  },
  {
    slug: "combien-coute-site-web-sur-mesure",
    image: {
      src: "/blog/combien-coute-site-web-sur-mesure.jpg",
      alt: "Grand écran affichant du code coloré dans un éditeur, clavier mécanique et tasse sur un bureau, ambiance de développement en soirée",
      credit: "Image : Artlist",
    },
    service: "site-web",
    title: "Site web sur mesure : prix réels en 2026",
    description: "Combien coûte un site web sur mesure en 2026 ? Vitrine, e-commerce, plateforme : tarifs réels d'un développeur freelance vs agence. Devis gratuit 48h.",
    date: "2026-05-15",
    lastModified: "2026-10-01",
    category: "Tarifs",
    sections: [
      {
        paragraphs: [
          "Vous avez besoin d'un site web et vous voulez comprendre ce que cela coûte vraiment, sans formules floues ni devis à rallonge. Le prix d'un site sur mesure dépend surtout de ce qu'il doit faire : un site vitrine de cinq pages n'a rien à voir avec une boutique en ligne ou une plateforme avec espace client.",
          "Précision importante : un site sur mesure n'est pas un site Wix ou Shopify. Il est développé de A à Z pour votre activité, sans modèle générique et sans abonnement mensuel à une plateforme. Voici les fourchettes de prix pratiquées par les développeurs freelances en 2026, niveau par niveau.",
        ],
      },
      {
        heading: "Les fourchettes de prix en un coup d'œil",
        table: {
          head: ["Type de site", "Fourchette chez un freelance", "Pour qui"],
          rows: [
            ["Site vitrine", "400 € à 1 500 €", "Présenter son activité et être contacté"],
            ["Site avec blog ou catalogue", "800 € à 2 500 €", "Publier régulièrement, présenter une offre large"],
            ["Site e-commerce", "1 500 € à 5 000 €", "Vendre en ligne sans commission"],
            ["Plateforme avec back-office", "2 000 € à 8 000 €", "Espace client, multi-rôles, outil métier"],
          ],
        },
      },
      {
        paragraphs: [
          "Ce sont des fourchettes de marché, pour vous donner des repères. Mes propres tarifs sont affichés sur la page Site web du site.",
        ],
      },
      {
        heading: "Le site vitrine",
        paragraphs: [
          "Un site vitrine présente votre activité, vos services, vos coordonnées et un formulaire de contact. C'est le minimum indispensable pour exister en ligne de façon professionnelle, et le point de départ de la plupart des entreprises.",
          "Un site vitrine sur mesure compte en général 5 à 10 pages (accueil, services, tarifs, à propos, contact), avec un design unique à vos couleurs plutôt qu'un modèle Wix partagé avec des milliers d'autres sites. Il est optimisé pour le référencement dès le départ (balises, vitesse, structure), parfaitement lisible sur mobile, tablette et ordinateur, et son formulaire de contact arrive directement dans votre boîte mail. La mise en ligne est comprise.",
        ],
      },
      {
        heading: "Le site avec blog ou catalogue",
        paragraphs: [
          "Si vous voulez publier des articles, présenter un catalogue de produits ou de services, ou mettre à jour votre contenu régulièrement, le site gagne en complexité, et en valeur.",
          "On y ajoute un blog que vous alimentez depuis un back-office simple, un catalogue ou un portfolio avec filtres et galeries, et parfois un système de réservation ou de prise de rendez-vous. Le site peut aussi se connecter à vos outils (Google Analytics, Mailchimp, CRM) et proposer un espace membre avec connexion client.",
        ],
      },
      {
        heading: "Le site e-commerce",
        paragraphs: [
          "Une boutique en ligne sur mesure va plus loin que Shopify sur un point essentiel : aucune commission sur vos ventes, là où Shopify prélève de 0,5 % à 2 %, et aucun abonnement mensuel. Le design vous appartient vraiment.",
          "Elle comprend un catalogue avec variantes, stocks et catégories, un parcours d'achat optimisé du panier au paiement (Stripe, Apple Pay, Google Pay, carte bancaire), et un panel d'administration pour gérer commandes, clients et produits. Les emails automatiques de confirmation et de suivi de livraison sont prévus, tout comme le référencement des fiches produits.",
        ],
      },
      {
        heading: "La plateforme web avec back-office",
        paragraphs: [
          "Une plateforme est une véritable application web, avec plusieurs niveaux d'accès : espace administrateur, espace client, tableau de bord et données en temps réel.",
          "Elle repose sur une authentification à plusieurs rôles (administrateur, manager, client, partenaire), un tableau de bord avec indicateurs et rapports exportables, une base de données sécurisée et sauvegardée, et souvent une API pour se connecter à vos outils existants. Des notifications en temps réel et une messagerie interne complètent l'ensemble.",
        ],
      },
      {
        heading: "Sur mesure ou créateur de site : le vrai comparatif",
        paragraphs: [
          "Wix, Squarespace et Shopify semblent moins chers au premier coup d'œil. Sur trois ans, la réalité est différente : le forfait Wix Business, à environ 41 € par mois, revient à près de 1 475 €, sans compter les applications payantes ni les limites du design. Shopify Basic, à 39 € par mois plus 2 % de commission, coûte entre 1 500 € et 4 000 € selon votre chiffre d'affaires.",
          "Un site sur mesure se paie une fois, sans abonnement ni commission, et vous êtes propriétaire de votre code. Vous restez libre de changer d'hébergeur, de design ou de fonctionnalités, sans dépendre d'une plateforme.",
        ],
      },
      {
        heading: "Freelance ou agence ?",
        paragraphs: [
          "Une agence web facture généralement trois à cinq fois plus cher pour un résultat comparable, parce qu'elle paie ses locaux, ses commerciaux et ses chefs de projet. Vous payez l'organisation autant que le code.",
          "Avec un développeur freelance, vous avez un interlocuteur unique, des délais plus courts et un tarif transparent. Chez BreizhApp, je développe moi-même votre site de A à Z, sans sous-traitance et sans surprise.",
        ],
      },
      {
        heading: "Ce qui fait varier le prix",
        paragraphs: [
          "Le tarif final dépend de quelques facteurs que j'évalue lors du devis : le nombre de pages et de fonctionnalités, la présence d'un back-office ou d'un espace d'administration, les intégrations avec d'autres outils (paiement, réservation, CRM, API), la complexité du design selon que vous avez déjà une charte graphique ou non, et le délai souhaité, une livraison express étant possible.",
        ],
      },
      {
        heading: "Comment obtenir un devis précis ?",
        paragraphs: [
          "Décrivez-moi votre projet : votre activité, ce que votre site doit faire et votre budget indicatif. Je vous envoie une proposition concrète, avec le détail des fonctionnalités et le tarif exact.",
          "Pas de formulaire interminable : un email suffit. Je réponds personnellement à chaque demande, et je prends le temps de comprendre votre activité avant de chiffrer.",
        ],
      },
    ],
  },
  {
    slug: "creer-plateforme-digitale-sur-mesure",
    image: {
      src: "/blog/creer-plateforme-digitale-sur-mesure.jpg",
      alt: "Écran affichant un tableau de bord avec graphiques et statistiques, clavier et carnet sur un bureau moderne",
      credit: "Image : Artlist",
    },
    service: "web-app",
    title: "Plateforme digitale sur mesure : guide 2026",
    description: "Créer une plateforme digitale sur mesure : espace admin, espace client, multi-rôles. Fonctionnalités, tarifs et alternatives au no-code. Devis gratuit.",
    date: "2026-05-15",
    lastModified: "2026-10-01",
    category: "Guides",
    sections: [
      {
        paragraphs: [
          "Une plateforme digitale sur mesure est une application web complète qui gère vos processus métier : vos clients ont leur espace, votre équipe a le sien, et vous pilotez l'ensemble depuis un tableau de bord centralisé.",
          "C'est le type de projet qui remplace un empilement d'outils par abonnement (Notion, Airtable, Stripe, Mailchimp) par une solution unique, cohérente et qui vous appartient. Voici ce que recouvre une plateforme, ce qu'elle doit contenir et comment se déroule sa création.",
        ],
      },
      {
        heading: "Qu'est-ce qu'une plateforme digitale ?",
        paragraphs: [
          "Contrairement à un site vitrine ou une boutique en ligne, une plateforme est une application web avec une vraie logique métier. Elle peut prendre plusieurs formes selon votre activité.",
          "La plus courante est l'espace client sécurisé, où chaque client retrouve ses données, ses commandes, ses factures ou ses dossiers, associé à un back-office où votre équipe gère utilisateurs, contenus, commandes et statistiques. D'autres projets prennent la forme d'une plateforme de mise en relation entre prestataires et clients, d'un outil métier interne qui automatise vos devis, votre planning ou votre suivi de production, ou d'un portail partenaires où revendeurs et franchisés accèdent à leurs ressources et à leurs résultats.",
        ],
      },
      {
        heading: "Les fonctionnalités d'une plateforme bien conçue",
        paragraphs: [
          "Chaque projet est différent, mais les mêmes briques reviennent souvent.",
        ],
        subsections: [
          {
            heading: "Les utilisateurs et leurs rôles",
            paragraphs: [
              "Administrateur, manager, client, partenaire : chaque rôle a ses permissions et son interface. La gestion des utilisateurs (invitations, désactivation de comptes, historique des actions) se fait depuis le back-office.",
            ],
          },
          {
            heading: "Les données et le pilotage",
            paragraphs: [
              "Une base de données structurée permet des recherches rapides et des exports CSV ou Excel. Le tableau de bord affiche, pour chaque type d'utilisateur, les indicateurs, graphiques et alertes qui le concernent.",
            ],
          },
          {
            heading: "La communication",
            paragraphs: [
              "Notifications dans l'interface, emails automatiques déclenchés par les événements, messagerie interne entre utilisateurs : les échanges restent dans la plateforme, au lieu de se perdre dans les boîtes mail.",
            ],
          },
          {
            heading: "Les documents et les paiements",
            paragraphs: [
              "Dépôt de documents, d'images ou de contrats stockés en sécurité, génération de devis et de factures, paiement en ligne via Stripe. Et grâce à une API, la plateforme se connecte à vos outils existants : CRM, ERP, logiciel comptable, outils marketing.",
            ],
          },
        ],
      },
      {
        heading: "Sur mesure ou no-code : que choisir ?",
        paragraphs: [
          "Des outils comme Bubble, Glide ou Webflow permettent de créer des applications sans coder. Ils sont réellement utiles pour prototyper vite, mais montrent leurs limites pour un usage professionnel durable.",
          "Le coût d'abord : Bubble facture entre 29 $ et 349 $ par mois en paiement annuel selon l'usage, soit 1 000 $ à 12 500 $ sur trois ans, sans jamais posséder votre code. Les performances ensuite : une plateforme no-code est plus lente qu'une application développée sur mesure, ce qui devient un problème avec de nombreux utilisateurs simultanés. Vous êtes aussi limité aux fonctionnalités de l'outil, et dépendant de lui : s'il ferme ou change ses tarifs, votre plateforme est en danger.",
          "Le développement sur mesure inverse la logique : un coût unique, des performances optimales, des fonctionnalités sans limite, et un code qui vous appartient.",
        ],
      },
      {
        heading: "Combien coûte une plateforme sur mesure ?",
        paragraphs: [
          "Le tarif dépend de la complexité fonctionnelle ; mes tarifs de départ sont affichés sur la page Web app du site. Une plateforme simple, avec espace client et administration de base, n'a pas le même coût qu'une plateforme intermédiaire avec plusieurs rôles, tableau de bord, API et notifications, ni qu'un projet complexe de type marketplace ou SaaS.",
          "Dans tous les cas, je vous envoie un devis détaillé gratuit, et le paiement se fait en deux fois : un acompte de 30 % au démarrage, le solde à la livraison.",
        ],
      },
      {
        heading: "Les étapes de développement",
        paragraphs: [
          "Je travaille en quatre phases pour garantir un résultat conforme à vos attentes.",
        ],
        table: {
          head: ["Phase", "Ce qui se passe"],
          rows: [
            ["1. Conception", "Rôles, parcours utilisateurs, fonctionnalités prioritaires, maquette validée avant de coder"],
            ["2. Back-end", "Base de données, API, authentification, logique métier"],
            ["3. Front-end", "Interface d'administration, espace client, tableau de bord aux couleurs de votre marque"],
            ["4. Tests et livraison", "Recette complète, corrections, mise en ligne sur votre hébergement"],
          ],
        },
      },
      {
        heading: "Exemples de plateformes",
        paragraphs: [
          "Voici le type de projets que je développe : une plateforme de suivi de commandes pour un artisan, où les clients suivent l'avancement et reçoivent des notifications automatiques quand le statut change ; un portail membre pour une association ou un club, avec adhésions en ligne, espace documentaire, événements et messagerie ; un outil de devis et de facturation sur mesure, avec génération automatique de documents, signature électronique et suivi des paiements ; ou encore un tableau de bord de pilotage pour un commerce, avec ventes, stocks et performances par produit en temps réel.",
        ],
      },
      {
        heading: "Pourquoi travailler avec BreizhApp ?",
        paragraphs: [
          "Je suis développeur freelance basé à Brest, spécialisé dans les applications mobiles et les plateformes web sur mesure. Je développe chaque projet moi-même, sans sous-traitance ni intermédiaire.",
          "Décrivez-moi votre projet, les types d'utilisateurs que vous avez et ce que vous voulez qu'ils puissent faire : je vous réponds avec une proposition concrète et un tarif transparent.",
        ],
      },
    ],
  },
  {
    slug: "wordpress-vs-sur-mesure",
    image: {
      src: "/blog/wordpress-vs-sur-mesure.jpg",
      alt: "Deux écrans côte à côte : à gauche un tableau de bord CMS générique, à droite un éditeur de code",
      credit: "Image : Artlist",
    },
    service: "site-web",
    title: "WordPress vs sur mesure : comparatif complet 2026",
    description: "WordPress ou site sur mesure : performances, coûts, SEO, sécurité. Le comparatif complet pour choisir la bonne solution selon votre projet en 2026.",
    date: "2026-05-15",
    lastModified: "2026-10-01",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "WordPress fait tourner une part immense des sites dans le monde, et c'est souvent le premier nom que l'on entend quand on veut créer un site. Pourtant, un site Next.js sur mesure est généralement deux à trois fois plus rapide, obtient des scores Lighthouse de 95 à 100 sur 100 contre 60 à 80 pour WordPress, et ne vous impose ni extensions payantes ni maintenance de sécurité permanente.",
          "Alors, lequel choisir ? Pour les blogs et les sites éditoriaux, WordPress reste pertinent. Pour presque tout le reste, le sur mesure l'emporte. Voici le comparatif complet.",
        ],
      },
      {
        heading: "Ce que WordPress fait bien",
        paragraphs: [
          "WordPress est une solution mature, avec un écosystème immense. Avec un petit budget, un site WordPress peut être opérationnel pour moins de 500 €, grâce à un thème premium et quelques extensions. Et pour le contenu éditorial, c'est son terrain naturel : il a été conçu pour les blogs et les médias.",
          "Son interface d'administration est familière, et permet à n'importe qui de publier sans formation technique. Plus de 60 000 extensions couvrent la plupart des besoins courants (formulaires, SEO, galeries, réservation), et sa communauté est gigantesque : tutoriels, forums et développeurs ne manquent pas.",
        ],
      },
      {
        heading: "Les limites de WordPress en 2026",
        subsections: [
          {
            heading: "La sécurité",
            paragraphs: [
              "WordPress est la première cible des pirates : la grande majorité des sites CMS piratés tournent sous WordPress. Les mises à jour constantes des extensions deviennent une contrainte réelle, et en oublier une suffit à ouvrir une faille.",
            ],
          },
          {
            heading: "La performance",
            paragraphs: [
              "Un site WordPress mal optimisé se charge lentement, et chaque extension ajoutée l'alourdit encore. Les thèmes sont rarement optimisés pour les Core Web Vitals, les indicateurs de vitesse que Google prend en compte dans son classement.",
            ],
          },
          {
            heading: "Les coûts cachés et la maintenance",
            paragraphs: [
              "Thème premium (60 à 300 €), extensions premium (20 à 100 € par an chacune), hébergement adapté (10 à 30 € par mois) et maintenance : le coût réel dépasse souvent 1 000 € par an. Et les mises à jour de WordPress cassent parfois une extension ou le thème, ce qui transforme la maintenance en travail à part entière.",
            ],
          },
          {
            heading: "La personnalisation",
            paragraphs: [
              "Tant que votre besoin reste standard, WordPress suit. Dès qu'il sort des sentiers battus, vous passez votre temps à lutter contre l'outil plutôt qu'à l'utiliser.",
            ],
          },
        ],
      },
      {
        heading: "Les avantages du développement sur mesure",
        paragraphs: [
          "Un site développé sur mesure avec une technologie moderne comme Next.js apporte d'abord la performance : des scores Lighthouse de 95 à 100 sur 100, là où WordPress plafonne généralement à 60 ou 80 sans optimisation lourde. Il est aussi plus sûr, sans extensions vulnérables ni CMS standardisé que les robots savent attaquer.",
          "Vous ne dépendez d'aucune plateforme : pas d'extension qui disparaît, pas de thème abandonné. Le design est unique, et tout ce que vous voulez est possible, sans compromis avec les limites d'une extension. Enfin, un code bien écrit est plus simple à faire évoluer qu'un enchevêtrement d'extensions.",
        ],
      },
      {
        heading: "Les coûts comparés sur 3 ans",
        table: {
          head: ["Solution", "Détail", "Coût sur 3 ans"],
          rows: [
            ["WordPress basique", "Thème 150 € + extensions 300 €/an + hébergement 180 €/an + maintenance 500 €/an", "environ 2 900 €"],
            ["WordPress avec développeur", "1 500 € de développement + 600 €/an de maintenance", "environ 3 300 €"],
            ["Site sur mesure", "Développement unique + hébergement peu coûteux (gratuit sur Vercel pour un petit site)", "Sans extensions ni maintenance imposée"],
          ],
        },
      },
      {
        heading: "Quand choisir WordPress, quand choisir le sur mesure ?",
        paragraphs: [
          "WordPress reste pertinent si vous avez besoin d'un site rapidement, avec un budget minimal et des besoins standards, ou si vous publiez beaucoup de contenu éditorial, comme un blog d'actualité ou un magazine. Si vous avez déjà un site WordPress à faire évoluer, repartir de zéro n'est pas toujours justifié. Et les développeurs WordPress sont nombreux, donc faciles à remplacer.",
          "Le sur mesure s'impose quand votre site est un outil stratégique (e-commerce, plateforme, espace client) où la performance et la sécurité comptent vraiment, quand vous voulez un design qui vous ressemble, ou quand vos fonctionnalités ne sont couvertes correctement par aucune extension. C'est aussi le bon choix si vous pensez long terme et ne voulez pas dépendre d'un éditeur tiers.",
        ],
      },
      {
        heading: "Mon avis de développeur",
        paragraphs: [
          "WordPress est un excellent outil pour ce qu'il a été conçu à faire : gérer du contenu éditorial simplement. Mais pour un site vitrine professionnel, une boutique en ligne ou une plateforme avec des fonctionnalités spécifiques, le sur mesure offre de meilleures performances, plus de sécurité et un coût total souvent inférieur sur trois ans.",
          "Je développe des sites sur mesure avec Next.js depuis plusieurs années. Si vous hésitez, écrivez-moi : je vous donne un avis honnête selon votre cas, sans chercher à vous vendre ce dont vous n'avez pas besoin.",
        ],
      },
      {
        heading: "FAQ : WordPress ou site sur mesure",
        list: [
          "WordPress est-il gratuit ? Le logiciel WordPress est gratuit, mais l'hébergement, le thème premium et les extensions représentent 600 € à 1 500 €/an en usage professionnel réel.",
          "Un site WordPress est-il bien référencé sur Google ? WordPress peut être bien référencé avec les bonnes extensions (Yoast, RankMath), mais un site Next.js sur mesure obtient de meilleurs scores Core Web Vitals, un facteur SEO officiel depuis 2021.",
          "Un site sur mesure est-il plus cher que WordPress ? Pas forcément sur la durée. Un site WordPress avec maintenance représente 2 900 € à 3 300 € sur 3 ans, alors qu'un site sur mesure n'a ni extensions ni maintenance de sécurité à payer chaque année.",
          "Peut-on migrer de WordPress vers un site sur mesure ? Oui. Le contenu (articles, pages) peut être exporté et réintégré. Je gère ce type de migration.",
          "WordPress est-il sécurisé ? C'est le CMS le plus ciblé par les pirates : la grande majorité des CMS piratés tournent sous WordPress. Des mises à jour régulières et un hébergement de qualité réduisent ce risque.",
        ],
      },
    ],
  },
  {
    slug: "no-code-vs-developpeur",
    image: {
      src: "/blog/no-code-vs-developpeur.jpg",
      alt: "Bureau en bois : assemblage de briques de construction colorées d'un côté, ordinateur portable affichant du code de l'autre",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "No-code (Bubble, Glide) ou développeur ?",
    description:
      "Bubble, Glide, Adalo ou développeur sur mesure ? Avantages, limites cachées et coût sur 3 ans : comment choisir entre no-code et développement pour votre projet.",
    date: "2026-05-15",
    lastModified: "2026-10-01",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Bubble, Glide, Adalo, FlutterFlow : les outils no-code promettent de créer des applications sans coder, rapidement et à moindre coût. La promesse est séduisante, surtout quand on a une idée et un budget serré. Mais tient-elle sur la durée ? Et à partir de quand vaut-il mieux faire appel à un développeur ?",
          "Voici un comparatif honnête, basé sur des projets réels, sans discours marketing d'un côté ni de l'autre.",
        ],
      },
      {
        heading: "Les outils no-code : ce qu'ils sont vraiment",
        paragraphs: [
          "Le no-code regroupe des plateformes qui permettent de construire des interfaces et une logique applicative par glisser-déposer, sans écrire de code. Chacune a son terrain de jeu.",
        ],
        table: {
          head: ["Outil", "Usage principal"],
          rows: [
            ["Bubble", "Web apps complexes : marketplaces, SaaS, plateformes de gestion"],
            ["Glide", "Transformer une feuille Google Sheets en application simple"],
            ["Adalo", "Applications iOS et Android à partir de composants prêts à l'emploi"],
            ["FlutterFlow", "No-code basé sur Flutter, avec du code exportable"],
            ["Webflow", "Sites marketing avec animations avancées"],
            ["Thunkable, Bravo Studio, SAP Build", "Autres créateurs d'apps mobiles, de la maquette Figma transformée en app à des outils plus complets"],
          ],
        },
      },
      {
        heading: "Les avantages réels du no-code",
        paragraphs: [
          "Le no-code a de vrais atouts pour certains usages. Le premier, c'est la rapidité : tester une idée en quelques jours, sans développeur, est idéal pour valider un concept avant d'investir. Le deuxième, c'est l'accessibilité : un entrepreneur sans compétence technique peut construire lui-même une première version de son produit.",
          "Le coût de départ est faible, puisqu'il n'y a pas de développeur à payer pour un premier prototype simple, et les modifications sont faciles : changer un écran ou ajouter un champ se fait sans toucher au code.",
        ],
      },
      {
        heading: "Les limites du no-code dont on parle peu",
        paragraphs: [
          "Ces outils ont aussi des contraintes, qui deviennent bloquantes dès que le projet grandit.",
        ],
        subsections: [
          {
            heading: "Un abonnement à vie, et une application que vous louez",
            paragraphs: [
              "Bubble coûte entre 29 $ et 349 $ par mois en paiement annuel selon l'usage, et ce coût augmente à mesure que vos utilisateurs sont plus nombreux. Vous ne possédez jamais votre application : vous la louez. Sur Bubble, il est d'ailleurs impossible d'exporter proprement votre code, ce qui rend toute migration très difficile.",
            ],
          },
          {
            heading: "Des performances qui se dégradent",
            paragraphs: [
              "Les applications Bubble sont nettement plus lentes qu'une application sur mesure, ce qui pèse sur l'expérience utilisateur et le référencement. Et plus la base d'utilisateurs grandit, plus les performances baissent, pendant que les coûts d'abonnement montent.",
            ],
          },
          {
            heading: "Une dépendance totale",
            paragraphs: [
              "Si la plateforme change ses tarifs, ferme ou modifie ses fonctionnalités, votre application est directement touchée, sans que vous ayez la main. Et dès que votre besoin sort du cadre prévu, ou qu'il faut connecter une API complexe ou un logiciel métier, les contournements se multiplient et alourdissent le projet.",
            ],
          },
        ],
      },
      {
        heading: "Les coûts comparés sur 3 ans",
        paragraphs: [
          "Pour une plateforme web avec espace client et espace d'administration, voici la réalité financière sur trois ans :",
        ],
        table: {
          head: ["Solution", "Coût sur 3 ans", "Remarque"],
          rows: [
            ["Bubble Starter (29 $/mois)", "1 044 $", "Limites d'usage vite atteintes"],
            ["Bubble Growth (119 $/mois)", "4 284 $", "Nécessaire dès que l'usage augmente"],
            ["Bubble Team (349 $/mois)", "12 564 $", "Projets avec plusieurs éditeurs"],
            ["Développement sur mesure", "Création unique + hébergement modeste", "Le code vous appartient"],
          ],
        },
        callout: {
          title: "L'écart se réduit vite",
          text: "Dès que votre projet a besoin des formules supérieures de Bubble, la différence de coût avec le sur mesure se réduit en quelques années, et avec le sur mesure, l'application reste à vous.",
        },
      },
      {
        heading: "No-code et applications mobiles",
        paragraphs: [
          "Pour les applications iOS et Android, les limites du no-code sont encore plus marquées. Adalo a une interface simple, mais des performances très limitées que les utilisateurs ressentent immédiatement. FlutterFlow génère du code Flutter exportable, un vrai avantage, mais ce code est difficile à maintenir pour un développeur.",
          "Côté publication, Apple examine plus sévèrement les applications générées automatiquement. Et l'accès aux fonctions du téléphone (caméra, GPS, notifications, Face ID) est souvent impossible ou très limité. Une application React Native sur mesure offre au contraire des performances natives, un accès complet au téléphone et un code maintenable sur le long terme.",
        ],
      },
      {
        heading: "Quand utiliser le no-code ?",
        paragraphs: [
          "Le no-code est pertinent pour valider une idée rapidement avant d'investir dans le sur mesure, en le considérant comme un prototype. Il convient aussi aux besoins simples et standards (un formulaire, un tableau de bord basique, une liste de contacts), aux projets qui n'ont pas encore de revenus et doivent réduire au maximum les coûts de départ, et aux personnes à l'aise techniquement qui ont du temps pour apprendre la plateforme.",
          "C'est enfin une bonne solution pour un outil interne destiné à votre équipe, où les exigences de performance et de design sont moins fortes que pour une application utilisée par vos clients.",
        ],
      },
      {
        heading: "Quand faire appel à un développeur ?",
        paragraphs: [
          "Le sur mesure s'impose dès que votre application est un produit destiné à vos clients, où la qualité et la performance ne se négocient pas, ou dès que vos fonctionnalités métier ne sont couvertes par aucun outil no-code. Il s'impose aussi quand vous avez besoin d'intégrations complexes avec vos outils, ou quand vous pensez long terme : posséder votre code, choisir votre hébergeur, évoluer sans contrainte.",
          "Deux signaux ne trompent pas : votre prototype no-code a validé l'idée et il est temps de construire la vraie version, ou vos utilisateurs se plaignent de lenteurs et de bugs. Enfin, si votre budget de départ est comparable à ce que vous dépenseriez en no-code sur deux ou trois ans, le sur mesure devient le choix évident.",
        ],
      },
      {
        heading: "Ma recommandation",
        paragraphs: [
          "Si vous avez une idée et aucun budget, testez-la avec Glide ou Bubble pour valider le concept. Si elle fonctionne, faites développer une version sur mesure.",
          "Si vous avez un budget et un projet sérieux, investissez directement dans le sur mesure : vous gagnerez du temps, éviterez les frustrations des limites du no-code et posséderez un actif qui vous appartient vraiment. Je suis développeur freelance à Brest ; si vous hésitez, écrivez-moi, je vous donne un avis honnête et un devis gratuit.",
        ],
      },
    ],
  },
  {
    slug: "application-mobile-salle-sport-fitness",
    image: {
      src: "/blog/application-mobile-salle-sport-fitness.jpg",
      alt: "Salle de sport moderne avec machines de musculation et haltères, smartphone posé sur un banc affichant une app de fitness",
      credit: "Image : Artlist",
    },
    service: "salle-de-sport",
    title: "App mobile salle de sport : fonctionnalités 2026",
    description: "App mobile salle de sport : abonnements, réservation de cours, suivi des séances, fidélité. Tarifs et fonctionnalités clés en 2026.",
    date: "2026-05-15",
    lastModified: "2026-10-01",
    category: "Secteurs",
    sections: [
      {
        paragraphs: [
          "En 2026, une salle de sport sans application, c'est une occasion manquée chaque jour. Vos membres réservent leurs cours, paient leur abonnement et suivent leurs entraînements sur leur téléphone : si ce n'est pas dans votre application, c'est dans celle de quelqu'un d'autre.",
          "Inscription en ligne, réservation de cours collectifs, suivi des performances, notifications de nouveaux créneaux : une application bien conçue fidélise vos membres et allège votre charge administrative. Voici les fonctionnalités clés, et ce qu'elles changent pour une salle indépendante.",
        ],
      },
      {
        heading: "Les fonctionnalités indispensables",
        subsections: [
          {
            heading: "Inscription, abonnement et accès",
            paragraphs: [
              "Vos prospects s'inscrivent et paient directement depuis l'application, sans passer à l'accueil. Ils gèrent ensuite leur abonnement en autonomie : renouvellement automatique, pause, changement de formule. Et un QR code dans l'application leur ouvre les portes de la salle, fini les cartes perdues.",
            ],
          },
          {
            heading: "Les cours collectifs",
            paragraphs: [
              "Le planning s'affiche en temps réel, la réservation se fait en un geste, et une liste d'attente prend le relais automatiquement quand un cours est complet. Les notifications préviennent vos membres d'un nouveau cours, d'un changement de planning ou d'une offre.",
            ],
          },
          {
            heading: "Le suivi d'entraînement",
            paragraphs: [
              "Vos membres enregistrent leurs séances, suivent leurs progrès et consultent leur historique. Vos coachs peuvent leur assigner des programmes selon leurs objectifs, et disposent de leur propre espace pour gérer leurs créneaux, voir leurs inscrits et échanger avec leurs élèves.",
            ],
          },
          {
            heading: "Le pilotage de la salle",
            paragraphs: [
              "Un tableau de bord d'administration vous donne le taux de présence, les cours les plus populaires et le taux de départ des abonnés : de quoi ajuster votre planning sur des chiffres, plutôt qu'à l'intuition.",
            ],
          },
        ],
      },
      {
        heading: "Application sur mesure ou logiciel de gestion de salle ?",
        paragraphs: [
          "Des logiciels comme Mindbody, Glofox ou Gymmaster proposent des solutions clés en main. Elles ont un coût récurrent important : Mindbody revient entre 129 € et 349 € par mois, soit 1 548 € à 4 188 € par an, hors modules supplémentaires, et Glofox entre 110 € et 300 € par mois selon la taille de la salle.",
          "Une application sur mesure représente un investissement unique plus l'hébergement, rentabilisé en quelques années face à un abonnement qui ne s'arrête jamais. Elle porte vos couleurs et votre marque, ce qui fidélise mieux qu'un outil générique, et ses fonctionnalités collent exactement à votre offre, que vous fassiez du CrossFit, du yoga, de la natation ou des arts martiaux.",
        ],
      },
      {
        heading: "Ce que ça change pour une salle indépendante",
        paragraphs: [
          "Pour une salle de 200 à 500 membres, les effets se voient vite. Les rappels automatiques réduisent nettement les absences aux cours collectifs, et la plupart des demandes du quotidien (inscription, planning, abonnement) sont traitées dans l'application, sans appel ni passage à l'accueil.",
          "Les membres qui utilisent l'application sont aussi plus fidèles que les autres, et elle ouvre de nouveaux revenus : vente de programmes en ligne, coaching à distance ou produits dérivés.",
        ],
      },
      {
        heading: "Tarifs et délais",
        paragraphs: [
          "Le budget dépend des fonctionnalités et de la taille de votre salle ; mes tarifs sont affichés sur la page Application mobile du site. Une première version réunit l'essentiel : inscription en ligne, réservation de cours, QR code d'accès, notifications et espace d'administration. La version complète ajoute le suivi des séances, les programmes personnalisés, l'espace coach et des statistiques avancées.",
          "Comptez 4 à 8 semaines selon les fonctionnalités. La publication sur iOS et Android, la formation à l'espace d'administration et trois mois de support sont inclus.",
        ],
      },
      {
        heading: "Demandez votre devis gratuit",
        paragraphs: [
          "Je suis développeur freelance basé à Brest, spécialisé dans les applications pour les professionnels du sport et du bien-être. Décrivez-moi votre salle, votre offre et vos besoins : je vous envoie un devis détaillé et gratuit.",
        ],
      },
    ],
  },
  {
    slug: "site-web-artisan-sur-mesure",
    image: {
      src: "/blog/site-web-artisan-sur-mesure.jpg",
      alt: "Établi de menuisier avec outils traditionnels et copeaux de bois, ordinateur portable ouvert affichant un site web",
      credit: "Image : Artlist",
    },
    service: "site-web",
    title: "Site web pour artisan : éviter les constructeurs",
    description: "Site web pour artisan : pourquoi éviter Wix et les constructeurs gratuits. Ce qu'un site sur mesure apporte en SEO local, devis en ligne et crédibilité.",
    date: "2026-05-15",
    lastModified: "2026-10-01",
    category: "Secteurs",
    sections: [
      {
        paragraphs: [
          "Plombier, électricien, menuisier, peintre, maçon : pour un artisan, le site web est la première carte de visite. Avant de vous appeler, vos prospects vous cherchent sur Google, et ce qu'ils trouvent décide s'ils vous contactent, ou s'ils contactent un concurrent.",
          "Wix, Jimdo et les autres créateurs de sites semblent pratiques. Mais ils ont des inconvénients concrets qui pèsent sur votre référencement local et sur votre image professionnelle. Voici pourquoi, et ce qu'un site sur mesure change pour vous.",
        ],
      },
      {
        heading: "Le problème des créateurs de sites pour les artisans",
        paragraphs: [
          "Les sites créés avec Wix, Jimdo ou les offres packagées des annuaires ont d'abord un problème de visibilité : leur structure technique les rend moins bien référencés qu'un site sur mesure, et leur code lourd les ralentit sur mobile, alors que la majorité de vos prospects vous cherchent depuis leur smartphone.",
          "Ils ont ensuite un problème d'image. Un modèle standard se reconnaît immédiatement, et des milliers d'artisans utilisent le même que vous : difficile d'inspirer confiance quand on demande à quelqu'un de vous ouvrir sa maison pour des travaux. Sur les formules gratuites, la mention « propulsé par Wix » n'arrange rien.",
          "Enfin, il y a le coût dans la durée. Le forfait Wix Core coûte environ 29 € par mois, soit près de 350 € par an pour un résultat moyen. Sur cinq ans, vous aurez payé plus de 1 700 € sans rien posséder.",
        ],
      },
      {
        heading: "Ce qu'un site sur mesure apporte à un artisan",
        paragraphs: [
          "Un site développé sur mesure est pensé pour votre activité, votre zone et vos clients. Il est construit pour ressortir sur les recherches qui comptent, comme « plombier Brest » ou « électricien Quimper », avec les bonnes balises, le bon contenu et une structure technique irréprochable. Et si vous intervenez sur plusieurs communes, une page par ville vous fait apparaître sur chacune.",
          "Il met aussi votre travail en valeur. Une galerie de réalisations montre vos chantiers terminés, en photos avant et après. Vos avis Google s'affichent directement sur le site pour rassurer les nouveaux visiteurs. Et un formulaire de demande de devis détaillé vous envoie des demandes qualifiées, directement par email.",
          "Enfin, un site léger se charge en moins d'une seconde sur mobile : c'est un critère clé pour le référencement, et pour que les visiteurs vous contactent plutôt que de repartir.",
        ],
      },
      {
        heading: "Les pages indispensables d'un site d'artisan",
        paragraphs: [
          "Voici la structure que je recommande pour un site d'artisan efficace, à la fois pour le référencement et pour obtenir des demandes.",
        ],
        table: {
          head: ["Page", "Son rôle"],
          rows: [
            ["Accueil", "Votre activité, votre zone, votre argument principal et un bouton d'appel ou de devis bien visible"],
            ["Services", "Une page par prestation, avec les mots que tapent vos clients"],
            ["Réalisations", "Galerie de chantiers commentés, qui prouve votre savoir-faire"],
            ["Zones d'intervention", "Les communes couvertes, avec une page pour les villes principales"],
            ["Contact et devis", "Un formulaire simple : type de travaux, surface, délai souhaité"],
            ["À propos", "Votre parcours, vos certifications, vos assurances"],
          ],
        },
      },
      {
        heading: "Combien coûte un site web pour artisan ?",
        paragraphs: [
          "Le prix dépend du nombre de pages et des fonctionnalités ; mes tarifs sont affichés sur la page Site web du site. Trois niveaux reviennent le plus souvent.",
          "Le site vitrine compte 5 pages, avec formulaire de contact, galerie photos et référencement local, livré en deux semaines. Le site pro y ajoute un formulaire de devis avancé, une galerie de réalisations avec filtres, des pages par ville et un blog pour le référencement, en trois semaines. Le site complet ajoute un espace client, le suivi de chantier en ligne et la génération automatique de devis en PDF, en quatre à cinq semaines.",
          "Dans tous les cas, l'hébergement sur Vercel (rapide et fiable), la configuration du nom de domaine et une formation pour mettre à jour votre contenu sont compris.",
        ],
      },
      {
        heading: "Apparaître en premier sur Google dans votre zone",
        paragraphs: [
          "Le référencement local est la priorité d'un artisan. Sur chaque site, je soigne les titres et descriptions de chaque page avec les mots-clés locaux, et j'ajoute des données structurées de type LocalBusiness, que Google utilise pour afficher votre activité, vos horaires et vos avis.",
          "Je vous aide aussi à créer ou optimiser votre fiche Google Business Profile, le levier le plus puissant pour apparaître dans Google Maps. Avec des pages dédiées à vos communes clés et un site qui se charge en moins d'une seconde, vous mettez toutes les chances de votre côté.",
        ],
      },
      {
        heading: "Demandez votre devis gratuit",
        paragraphs: [
          "Je suis développeur freelance basé à Brest, et je crée des sites pour artisans et commerçants dans toute la Bretagne et en France. Décrivez-moi votre activité, votre zone d'intervention et votre budget : je vous envoie un devis gratuit.",
        ],
      },
    ],
  },
  {
    slug: "application-mobile-hotel-hebergement",
    image: {
      src: "/blog/application-mobile-hotel-hebergement.jpg",
      alt: "Comptoir de réception d'hôtel élégant, smartphone affichant une app de check-in, clés et plante, ambiance hôtellerie haut de gamme",
      credit: "Image : Artlist",
    },
    service: "hotel",
    title: "Application pour hôtel : fonctionnalités clés",
    description:
      "Application mobile pour hôtel, gîte ou camping : check-in digital, conciergerie, room service et réservation directe pour moins dépendre de Booking.",
    date: "2026-05-15",
    lastModified: "2026-10-01",
    category: "Secteurs",
    sections: [
      {
        paragraphs: [
          "Les grandes chaînes hôtelières ont toutes leur application : celle de Hilton Honors compte 40 millions d'utilisateurs actifs, celle de Marriott Bonvoy 50 millions (rapports annuels 2024). Ces applications génèrent des réservations directes, réduisent les commissions versées aux plateformes et fidélisent les voyageurs.",
          "La bonne nouvelle, c'est que les hôtels indépendants, maisons d'hôtes et résidences de tourisme peuvent aujourd'hui accéder aux mêmes outils, pour un investissement à leur échelle. Voici ce qu'il faut savoir avant de se lancer.",
        ],
      },
      {
        heading: "Le marché hôtelier français en chiffres",
        paragraphs: [
          "La France compte environ 17 600 hôtels classés, dont 65 % d'établissements indépendants (Atout France 2024). Les réservations en ligne y pèsent 67 % en 2024, contre 45 % en 2019 (Statista Travel 2024), et Booking.com prélève entre 15 et 25 % de commission sur chacune selon les accords (HOTREC 2024).",
          "Côté voyageurs, 78 % des moins de 45 ans utilisent une application pendant leur séjour (Oracle Hospitality 2024). Et un client qui télécharge l'application d'un hôtel a trois fois plus de chances de réserver en direct son séjour suivant (Revinate 2023). L'enjeu est donc clair : chaque client qui passe par votre application plutôt que par une plateforme améliore votre marge.",
        ],
      },
      {
        heading: "Les fonctionnalités clés d'une application d'hôtel",
        paragraphs: [
          "Voici les fonctionnalités qui ont le plus d'impact, classées par priorité selon les retours d'hôteliers indépendants.",
        ],
        subsections: [
          {
            heading: "Le check-in digital et la clé dans le téléphone",
            paragraphs: [
              "Vos clients s'enregistrent depuis leur téléphone avant d'arriver : le temps d'attente à la réception passe de 6 minutes en moyenne à moins de 90 secondes (Agilysys 2024). Pour aller plus loin, l'accès à la chambre peut se faire par NFC ou QR code, parfois sans changer les serrures.",
            ],
          },
          {
            heading: "La conciergerie et la messagerie",
            paragraphs: [
              "Room service, réservation du spa, demande de serviettes : tout se fait depuis l'application, sans appel. Une messagerie directe remplace les appels et les messages WhatsApp dispersés, avec un historique clair pour toute l'équipe. Les informations pratiques (horaires du petit-déjeuner, règlement, restaurants et activités à proximité) sont toujours à portée de main.",
            ],
          },
          {
            heading: "La fidélité et la réservation directe",
            paragraphs: [
              "Points cumulés à chaque séjour, avantages exclusifs (surclassement, départ tardif), tarif préférentiel en direct : le client a une vraie raison de revenir chez vous sans passer par une plateforme. Et il réserve son prochain séjour directement dans l'application, sans les 15 à 25 % de commission de Booking.com.",
            ],
          },
          {
            heading: "Les notifications",
            paragraphs: [
              "Rappel de départ, offre de prolongation, promotion pour le prochain séjour : les notifications sont bien plus lues que les emails, et arrivent au bon moment du séjour.",
            ],
          },
        ],
      },
      {
        heading: "Moins dépendre de Booking.com : le calcul concret",
        paragraphs: [
          "Booking.com reste indispensable pour la visibilité, mais ses commissions pèsent lourd. Prenons un hôtel de 20 chambres, avec un taux d'occupation de 70 % et un prix moyen de 90 € la nuit, soit environ 460 000 € de chiffre d'affaires annuel.",
        ],
        table: {
          head: ["Scénario", "Résultat"],
          rows: [
            ["60 % des réservations via Booking (commission de 18 %)", "49 680 € de commissions par an"],
            ["L'application fait passer le direct de 40 % à 60 %", "16 560 € d'économie par an"],
          ],
        },
        callout: {
          title: "La clé : un avantage concret",
          text: "Pour que vos clients réservent en direct, offrez-leur une raison tangible : petit-déjeuner offert, surclassement ou départ à 13h. Avec de tels montants en jeu, l'économie de commissions couvre en général l'investissement dès la première année.",
        },
      },
      {
        heading: "Application sur mesure ou solution hôtelière par abonnement ?",
        paragraphs: [
          "Des solutions comme Canary Technologies, ALICE, Benbria ou Oaky proposent des applications hôtelières par abonnement. Canary Technologies coûte 200 à 500 € par mois selon les modules (check-in, ventes additionnelles, messagerie), Oaky 150 à 400 € par mois selon le nombre de chambres, et Benbria Loop est sur devis, estimé entre 300 et 800 € par mois pour un hôtel indépendant (sites des éditeurs, 2026).",
          "Sur trois ans, ces abonnements représentent entre 7 200 € et 28 800 €, sans personnalisation et sans que l'outil vous appartienne. Une application sur mesure est un investissement unique, adapté à la taille de votre établissement, avec votre design, vos fonctionnalités et vos données. Surtout, vous possédez l'application et votre fichier clients, sans dépendre d'un éditeur.",
        ],
      },
      {
        heading: "Une formule adaptée à chaque établissement",
        paragraphs: [
          "Je conçois des applications adaptées à la taille de chaque hébergement ; mes tarifs sont affichés sur la page Application mobile du site.",
        ],
        table: {
          head: ["Établissement", "Fonctionnalités adaptées"],
          rows: [
            ["Maison d'hôtes ou gîte (2 à 5 chambres)", "Informations pratiques, messagerie, livre d'or digital, recommandations locales"],
            ["Hôtel indépendant (10 à 30 chambres)", "Check-in digital, conciergerie, room service, notifications, réservation directe"],
            ["Hôtel boutique ou résidence (30 chambres et plus)", "Tout le reste, plus fidélité complète, clé digitale, tableau de bord multi-chambres, connexion au PMS"],
          ],
        },
      },
      {
        paragraphs: [
          "Comptez 4 à 10 semaines selon les fonctionnalités, publication sur l'App Store et Google Play comprise.",
        ],
      },
      {
        heading: "FAQ : application mobile pour hôtel et hébergement",
        list: [
          "Faut-il remplacer son matériel de réception pour le check-in digital ? Non. Le check-in digital peut fonctionner avec votre équipement existant : un simple QR code imprimé à l'accueil suffit pour commencer. La clé digitale NFC demande des serrures compatibles, mais elle est optionnelle.",
          "L'app est-elle compatible avec mon logiciel de gestion hôtelière (PMS) ? Une connexion au PMS est possible sur les formules avancées (Mews, Protel, Opera). À préciser lors du devis.",
          "Mes clients téléchargeront-ils vraiment l'app ? Le taux d'adoption dépend de votre communication. Les hôtels qui envoient le lien de téléchargement dans l'email de confirmation observent des taux d'adoption de 30 à 50 % dès les premières semaines.",
          "Comment l'app réduit-elle les commissions Booking ? En offrant un avantage exclusif aux clients qui réservent directement dans l'app (remise, surclassement, service offert), vous leur donnez une raison concrète d'éviter les plateformes lors de leur prochain séjour.",
        ],
      },
    ],
  },
  {
    slug: "developpeur-freelance-quimper",
    image: {
      src: "/blog/developpeur-freelance-quimper.jpg",
      alt: "Ordinateur portable sur une table de terrasse de café, flèches de la cathédrale de Quimper en arrière-plan flou, café et carnet",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Développeur freelance à Quimper : web et mobile",
    description: "Développeur freelance à Quimper : applications mobiles iOS & Android, sites web et plateformes digitales sur mesure. Devis gratuit sous 48h, livraison en Bretagne.",
    date: "2026-05-16",
    lastModified: "2026-10-01",
    category: "Local",
    sections: [
      {
        paragraphs: [
          "Vous cherchez un développeur freelance à Quimper pour créer votre application mobile, votre site web ou votre plateforme digitale ? Je suis basé en Bretagne et je travaille régulièrement avec des entreprises du Finistère Sud : Quimper, Concarneau, Pont-l'Abbé, Douarnenez.",
          "Que vous soyez commerçant, artisan, restaurateur ou porteur de projet, voici ce que je peux développer pour vous, comment se déroule un projet, et dans quels délais.",
        ],
      },
      {
        heading: "Ce que je développe pour les entreprises de Quimper",
        paragraphs: [
          "Je crée trois types de projets sur mesure. Les applications mobiles iOS et Android d'abord : application de commande pour un restaurant, de réservation pour un salon, de fidélité pour un commerce, publiée sur l'App Store et Google Play.",
          "Les sites web ensuite : vitrine professionnelle, site avec demande de devis ou blog pour le référencement, développés avec Next.js pour être rapides et bien classés sur Google. Et enfin les plateformes digitales : espace client sécurisé, back-office d'administration ou outil de gestion interne, construits autour de votre activité.",
        ],
      },
      {
        heading: "Pourquoi choisir un développeur basé en Bretagne ?",
        paragraphs: [
          "Travailler avec un développeur breton plutôt qu'avec une agence parisienne ou un prestataire à l'étranger a des avantages concrets. Nous sommes sur le même fuseau horaire, avec les mêmes disponibilités : planifier un appel ou une visio est simple. Je connais aussi le tissu économique local, la saisonnalité touristique du Finistère et les enjeux des commerces bretons.",
          "Vous avez un interlocuteur unique, sans chef de projet intermédiaire ni sous-traitance : je développe votre projet moi-même. Sans les frais généraux d'une agence, je propose des tarifs compétitifs pour une qualité équivalente. Et je suis réactif : un message reçu le matin obtient une réponse dans la journée.",
        ],
      },
      {
        heading: "Tarifs et délais",
        paragraphs: [
          "Mes tarifs, affichés sur les pages services du site, sont les mêmes partout en Bretagne. Le paiement se fait en deux fois : 30 % à la commande, 70 % à la livraison. Voici les délais habituels :",
        ],
        table: {
          head: ["Projet", "Délai de livraison"],
          rows: [
            ["Site vitrine sur mesure", "2 à 3 semaines"],
            ["Application mobile iOS et Android", "4 à 8 semaines"],
            ["Plateforme digitale avec back-office", "6 à 12 semaines"],
          ],
        },
      },
      {
        heading: "Comment se passe un projet à distance ?",
        paragraphs: [
          "La plupart des projets avec des entreprises de Quimper se déroulent à distance, avec des points réguliers en visio ; une rencontre reste possible si vous le souhaitez.",
          "Tout commence par un échange de 30 à 60 minutes pour définir votre projet, vos besoins et vos objectifs. Je vous envoie ensuite un devis détaillé, avec les fonctionnalités, le tarif et le planning prévisionnel. Pendant le développement, je vous partage des versions intermédiaires à valider. Enfin, je m'occupe de la mise en ligne et de votre formation, avec un support après la livraison.",
        ],
      },
      {
        heading: "Demandez votre devis gratuit",
        paragraphs: [
          "Vous êtes à Quimper ou dans le Finistère Sud et vous avez un projet ? Écrivez-moi par email ou via le formulaire de contact : je vous réponds avec une proposition concrète, adaptée à votre budget.",
        ],
      },
    ],
  },
  {
    slug: "developpeur-freelance-rennes",
    image: {
      src: "/blog/developpeur-freelance-rennes.jpg",
      alt: "Ordinateur portable et carnet sur une table, bâtiment historique en pierre (Parlement de Bretagne à Rennes) en arrière-plan flou",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Développeur freelance à Rennes : web et mobile",
    description: "Développeur freelance à Rennes : applications mobiles iOS & Android, sites web et plateformes sur mesure. Basé en Bretagne, devis gratuit sous 48h.",
    date: "2026-05-16",
    lastModified: "2026-10-01",
    category: "Local",
    sections: [
      {
        paragraphs: [
          "Vous cherchez un développeur freelance à Rennes pour votre application mobile, votre site web ou votre plateforme digitale ? Je suis développeur indépendant basé en Bretagne, et j'accompagne des entreprises rennaises dans leurs projets numériques.",
          "Vous avez un interlocuteur unique, de la première discussion à la mise en ligne. Voici ce que je développe, pourquoi un freelance peut être plus intéressant qu'une agence, et dans quels délais.",
        ],
      },
      {
        heading: "Mes services pour les entreprises rennaises",
        paragraphs: [
          "Je propose trois types de développement sur mesure pour les startups, PME et indépendants de Rennes. Les applications mobiles iOS et Android, de l'idée à la publication sur les stores, développées avec React Native pour fonctionner sur iPhone et Android à partir d'une seule base de code.",
          "Les sites web sur mesure, qu'il s'agisse d'une vitrine professionnelle, d'une boutique en ligne ou d'une page de lancement, développés avec Next.js pour la vitesse et le référencement. Et les plateformes digitales : SaaS, espace client, back-office à plusieurs rôles ou outil de gestion interne, adaptés à votre activité.",
        ],
      },
      {
        heading: "Rennes, capitale bretonne du numérique",
        paragraphs: [
          "Rennes est l'une des grandes métropoles françaises, avec un écosystème tech dynamique : startups, scale-ups, grands groupes et PME innovantes. La concurrence pour attirer et garder des clients y est forte, et un outil numérique de qualité fait la différence.",
          "J'y accompagne des profils variés : des startups qui veulent passer d'un prototype no-code à une application sur mesure capable de grandir, des commerces et restaurants qui veulent une application de fidélité ou de commande pour rivaliser avec les grandes chaînes, des artisans qui veulent un site bien classé sur Google à Rennes, et des associations ou structures publiques qui ont besoin d'une plateforme d'inscription ou d'un espace adhérent.",
        ],
      },
      {
        heading: "Freelance ou agence web à Rennes ?",
        paragraphs: [
          "Rennes compte de nombreuses agences web, et le choix n'est pas toujours évident. Travailler directement avec un développeur freelance coûte en général deux à trois fois moins cher, car il n'y a ni frais généraux, ni commerciaux, ni chef de projet : vous payez le développement.",
          "Vous échangez directement avec la personne qui code votre projet, sans perte d'information. Un message envoyé le matin obtient une réponse dans la journée, et je m'adapte à vos contraintes de budget et de planning. Quant à la qualité, elle est comparable : les mêmes technologies (Next.js, React Native) et les mêmes standards de code que les meilleures agences.",
        ],
      },
      {
        heading: "Tarifs et délais",
        paragraphs: [
          "Mes tarifs sont affichés sur les pages services du site, sans surprise. Le paiement se fait en deux fois, avec 30 % à la commande. Voici les délais habituels :",
        ],
        table: {
          head: ["Projet", "Délai de livraison"],
          rows: [
            ["Site vitrine sur mesure", "2 à 3 semaines"],
            ["Site e-commerce sur mesure", "4 à 6 semaines"],
            ["Application mobile iOS et Android", "4 à 8 semaines"],
            ["Plateforme digitale avec back-office", "6 à 12 semaines"],
          ],
        },
      },
      {
        heading: "Demandez votre devis gratuit",
        paragraphs: [
          "Vous avez un projet à Rennes ou en Ille-et-Vilaine ? Écrivez-moi par email ou via le formulaire de contact : je vous réponds avec une proposition concrète et un tarif transparent.",
        ],
      },
    ],
  },
  {
    slug: "creation-site-web-brest",
    image: {
      src: "/blog/creation-site-web-brest.jpg",
      alt: "Ordinateur portable sur une table près d'une fenêtre, port de plaisance de Brest avec voiliers en arrière-plan flou, tasse de café",
      credit: "Image : Artlist",
    },
    service: "site-web",
    title: "Création site web à Brest : tarifs 2026",
    description: "Création site web à Brest : vitrine, e-commerce, plateforme sur mesure. Développeur freelance local, SEO optimisé. Devis gratuit sous 24h.",
    date: "2026-05-16",
    lastModified: "2026-10-01",
    category: "Local",
    sections: [
      {
        paragraphs: [
          "Vous voulez créer un site web à Brest ? Vitrine professionnelle, boutique en ligne ou plateforme avec espace client, je développe des sites sur mesure pour les entreprises brestoises, et je suis votre interlocuteur unique de la première discussion à la mise en ligne.",
          "Voici à quoi sert un site pour une entreprise brestoise, les différents types de sites possibles, comment apparaître sur Google à Brest, et dans quels délais.",
        ],
      },
      {
        heading: "Pourquoi un site sur mesure pour une entreprise brestoise ?",
        paragraphs: [
          "Brest a un tissu économique varié : commerce, restauration, artisanat, tourisme, maritime, tech. Quelle que soit votre activité, vos prospects vous cherchent d'abord sur Google, et votre site est souvent leur premier contact avec vous.",
          "Un site professionnel vous fait apparaître quand on cherche votre métier à Brest, et montre votre sérieux avant même le premier échange. Il reçoit des demandes de devis à toute heure, sans que vous ayez à décrocher. Il vous permet de rivaliser avec les grandes enseignes, et de fidéliser vos clients grâce à un blog, des actualités ou un espace client.",
        ],
      },
      {
        heading: "Les types de sites que je crée à Brest",
        table: {
          head: ["Type de site", "Pour quoi faire", "Délai"],
          rows: [
            ["Landing page", "Une page, un objectif : tester une offre ou une campagne", "Quelques jours"],
            ["Site vitrine", "Présenter votre activité, vos services et vos réalisations", "2 semaines"],
            ["Site pro avec blog", "Attirer des clients via Google, galerie de réalisations, pages de ville", "3 semaines"],
            ["Site e-commerce", "Vendre en ligne avec catalogue, panier et paiement Stripe", "4 à 6 semaines"],
            ["Plateforme web", "Espace client, back-office, outil de gestion", "6 à 10 semaines"],
          ],
        },
      },
      {
        paragraphs: [
          "Mes tarifs sont affichés sur la page Site web du site, sans frais cachés ni abonnement mensuel obligatoire.",
        ],
      },
      {
        heading: "Apparaître en premier sur Google à Brest",
        paragraphs: [
          "Pour les commerces et prestataires brestois, le référencement local est décisif. Sur chaque site, j'optimise les balises pour Brest et ses quartiers (Recouvrance, Saint-Marc, Lambézellec…), et j'ajoute des données structurées de type LocalBusiness pour que Google affiche correctement votre adresse, vos horaires et vos avis.",
          "Je vous aide aussi à créer ou optimiser votre fiche Google Business Profile, celle qui vous fait apparaître dans Google Maps. Je vise systématiquement un score Lighthouse de 95 sur 100 ou plus, car un site qui se charge en moins d'une seconde est favorisé par Google. Et si vous couvrez plusieurs zones du Finistère, des pages dédiées par quartier ou par secteur élargissent votre visibilité.",
        ],
      },
      {
        heading: "Demandez votre devis gratuit à Brest",
        paragraphs: [
          "Je suis basé à Brest et je réponds personnellement à chaque demande. Décrivez-moi votre projet, votre activité, ce que votre site doit faire et votre budget indicatif : je vous envoie un devis détaillé et gratuit.",
        ],
      },
    ],
  },
  {
    slug: "developpeur-application-mobile-bretagne",
    image: {
      src: "/blog/developpeur-application-mobile-bretagne.jpg",
      alt: "Main tenant un smartphone devant la côte de granit rose de Bretagne au coucher du soleil",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Développeur application mobile et web en Bretagne",
    description:
      "Création d'application mobile et web en Bretagne par un développeur basé à Brest : iOS, Android, web app métier. Finistère, Morbihan, Rennes. Devis gratuit sous 48h.",
    date: "2026-05-16",
    lastModified: "2026-10-01",
    category: "Local",
    sections: [
      {
        paragraphs: [
          "Vous cherchez un développeur d'application mobile en Bretagne ? Je suis basé à Brest et j'accompagne des entreprises du Finistère, du Morbihan, des Côtes-d'Armor et d'Ille-et-Vilaine dans la création de leurs outils numériques : applications iOS et Android, sites web sur mesure et plateformes avec back-office.",
          "Voici pourquoi un développeur local fait la différence pour les entreprises bretonnes, les projets que je réalise, et comment nous pouvons travailler ensemble.",
        ],
      },
      {
        heading: "Pourquoi la Bretagne a besoin de développeurs locaux",
        paragraphs: [
          "La Bretagne a une économie riche et variée : agriculture, agroalimentaire, tourisme, commerce, artisanat, pêche, tech. Ces secteurs ont des besoins numériques particuliers, que les agences parisiennes ou les prestataires étrangers ne saisissent pas toujours.",
          "La saisonnalité touristique en est un bon exemple : une application de réservation pour un hôtel breton doit gérer le pic de juillet-août comme le creux de l'hiver. Les commerces de proximité ont leurs propres habitudes de fidélité et de commande locale. Les circuits courts, très développés ici, demandent des outils de paniers, d'abonnements et de vente directe. Et le monde maritime, de la gestion de port au club de voile, a des besoins très spécifiques que je comprends d'autant mieux que je suis breton.",
        ],
      },
      {
        heading: "Mes zones d'intervention",
        paragraphs: [
          "J'interviens dans toute la Bretagne, avec une présence renforcée dans le Finistère.",
        ],
        table: {
          head: ["Département", "Villes principales"],
          rows: [
            ["Finistère (29)", "Brest, Quimper, Morlaix, Landerneau, Douarnenez, Concarneau, Quimperlé, Pont-l'Abbé"],
            ["Morbihan (56)", "Lorient, Vannes, Auray, Pontivy, Ploërmel"],
            ["Côtes-d'Armor (22)", "Saint-Brieuc, Lannion, Dinan, Guingamp"],
            ["Ille-et-Vilaine (35)", "Rennes, Saint-Malo, Fougères, Vitré"],
          ],
        },
      },
      {
        paragraphs: [
          "Je travaille aussi avec des clients partout en France : la plupart des projets peuvent se mener à distance, la localisation n'est donc pas une contrainte.",
        ],
      },
      {
        heading: "Des applications pensées pour les secteurs bretons",
        paragraphs: [
          "Voici des exemples de projets adaptés à l'économie bretonne.",
        ],
        subsections: [
          {
            heading: "Restauration et commerce",
            paragraphs: [
              "Pour un restaurant ou une crêperie : commande en ligne, réservation et fidélité, sans payer de commission aux plateformes de livraison. Pour un maraîcher ou un producteur : paniers hebdomadaires, abonnements, points de retrait et paiement en ligne, pour développer la vente en circuit court.",
            ],
          },
          {
            heading: "Tourisme et hébergement",
            paragraphs: [
              "Pour un hôtel, un camping ou un gîte : réservation directe, conciergerie et notifications, pour moins dépendre de Booking.com. Pour le tourisme et les loisirs : billetterie, guide numérique et réservation d'activités de plein air.",
            ],
          },
          {
            heading: "Artisans, nautisme et associations",
            paragraphs: [
              "Pour un plombier, un électricien ou un menuisier du Finistère : prise de rendez-vous, devis en ligne et suivi de chantier. Pour un club de voile : inscriptions, réservation de bateaux, actualités et licences. Et pour une association ou une collectivité : informations, agenda et signalements.",
            ],
          },
        ],
      },
      {
        heading: "Tarifs et délais",
        paragraphs: [
          "Mes tarifs, affichés sur les pages services du site, sont les mêmes dans toute la Bretagne. Le paiement se fait en deux fois : 30 % à la commande, 70 % à la livraison.",
        ],
        table: {
          head: ["Projet", "Délai de livraison"],
          rows: [
            ["Site vitrine sur mesure", "2 à 3 semaines"],
            ["Application mobile iOS et Android", "4 à 8 semaines"],
            ["Plateforme digitale avec back-office", "6 à 12 semaines"],
          ],
        },
      },
      {
        heading: "Demandez votre devis gratuit",
        paragraphs: [
          "Vous avez un projet en Bretagne ? Écrivez-moi par email ou via le formulaire de contact : je vous réponds avec une proposition concrète, un tarif transparent et un planning réaliste. Basé à Brest, je connais la Bretagne et ses besoins.",
        ],
      },
      {
        heading: "FAQ : développeur application mobile en Bretagne",
        list: [
          "Peut-on se rencontrer ? Oui. Je suis basé à Brest et je me déplace dans le Finistère (Quimper, Morlaix, Landerneau) pour un premier rendez-vous. Pour les autres départements bretons, je privilégie la visio.",
          "Travaillez-vous uniquement en Bretagne ? Non. Je travaille avec des clients de toute la France, mais la proximité avec les entreprises bretonnes facilite les échanges.",
          "Les conditions sont-elles les mêmes à Rennes et à Brest ? Oui, mes tarifs et mes délais sont identiques quelle que soit la localisation de votre entreprise.",
          "Mon app peut-elle être en breton ? Oui, le breton peut être ajouté comme langue secondaire, c'est techniquement simple à intégrer.",
          "Travaillez-vous avec les associations et collectivités ? Oui, je réalise aussi des applications d'information, d'agenda ou de signalement pour les structures publiques et associatives.",
        ],
      },
    ],
  },
  {
    slug: "application-mobile-prise-de-rdv",
    image: {
      src: "/blog/application-mobile-prise-de-rdv.jpg",
      alt: "Main tenant un smartphone affichant un calendrier de rendez-vous, agenda papier et stylo sur le bureau",
      credit: "Image : Artlist",
    },
    service: "reservation-prise-de-rdv",
    title: "App prise de RDV : fini les appels pour réserver",
    description:
      "Vos clients doivent toujours vous appeler pour réserver ? Avec une application de prise de rendez-vous, ils réservent seuls, 24h/24, avec rappels automatiques.",
    date: "2026-05-18",
    lastModified: "2026-10-01",
    category: "Guides",
    sections: [
      {
        paragraphs: [
          "« Mes clients doivent toujours m'appeler pour réserver. » C'est l'une des phrases que j'entends le plus souvent chez les coiffeurs, coachs, thérapeutes et artisans. Le téléphone sonne en pleine prestation, les messages s'accumulent, et le soir vous rappelez les clients un par un pour caler un créneau.",
          "Une application de prise de rendez-vous règle ce problème : vos clients voient vos disponibilités et réservent seuls, à toute heure, pendant que vous travaillez. Dans ce guide, je vous explique ce qu'elle doit faire, les solutions existantes, et comment je crée la vôtre.",
        ],
      },
      {
        heading: "Le vrai coût des réservations par téléphone",
        paragraphs: [
          "Prendre les rendez-vous par téléphone paraît gratuit. En réalité, cela vous coûte du temps, et des clients. Chaque appel interrompt une prestation, une séance ou un chantier. Chaque appel manqué peut être un client perdu, car celui qui tombe sur la messagerie appelle souvent le concurrent suivant. Et vos clients veulent réserver justement quand vous êtes fermé : le soir, le dimanche ou pendant leur pause déjeuner.",
          "S'y ajoute le temps administratif qui s'accumule : rappeler, noter, confirmer, déplacer, autant de temps que vous ne facturez pas. Sans rappel automatique, un client qui oublie son rendez-vous laisse un créneau vide. Et l'agenda papier fait des erreurs : doubles réservations, créneau mal noté, rendez-vous introuvable.",
        ],
      },
      {
        heading: "Ce qu'une application de prise de rendez-vous doit faire",
        subsections: [
          {
            heading: "Un calendrier en temps réel",
            paragraphs: [
              "Vos clients voient vos créneaux réellement disponibles et réservent seuls, 24h/24, sans vous appeler. Si vous avez une équipe, chaque membre gère son propre agenda dans la même interface, et la synchronisation avec Google Agenda ou le calendrier Apple évite les doubles réservations.",
            ],
          },
          {
            heading: "Des rappels et des annulations automatiques",
            paragraphs: [
              "Une notification la veille et le matin du rendez-vous réduit nettement les absences. Si votre client a un imprévu, il annule ou déplace lui-même son rendez-vous, et le créneau est aussitôt remis à disposition.",
            ],
          },
          {
            heading: "Un acompte et un historique client",
            paragraphs: [
              "Pour les prestations longues, un acompte à la réservation sécurise votre créneau. Et pour chaque client, vous retrouvez ses prestations passées, ses préférences et vos notes.",
            ],
          },
        ],
      },
      {
        heading: "Comment ça se passe pour vos clients, et pour vous",
        paragraphs: [
          "Une bonne application de réservation se prend en main en quelques secondes. Votre client ouvre l'application de votre entreprise, à votre nom et à vos couleurs. Il choisit sa prestation et, si besoin, la personne avec qui il veut son rendez-vous. Il ne voit que les créneaux réellement libres, confirme en un geste, puis reçoit un rappel la veille, avec la possibilité de déplacer son rendez-vous lui-même.",
          "De votre côté, vous recevez une notification pour chaque nouvelle réservation, votre agenda est toujours à jour sur votre téléphone, et vos journées ne sont plus interrompues par les appels.",
        ],
      },
      {
        heading: "Les solutions existantes et leurs limites",
        paragraphs: [
          "Plusieurs plateformes proposent la prise de rendez-vous en ligne. Voici un tour d'horizon honnête.",
        ],
        table: {
          head: ["Solution", "Pour qui", "À savoir"],
          rows: [
            ["Doctolib", "Professionnels de santé", "Environ 139 €/mois, surdimensionné pour les autres métiers"],
            ["Planity", "Salons de coiffure et instituts", "Tarif sur devis, sans commission sur les rendez-vous"],
            ["Calendly", "Consultants et coachs", "Gratuit en version de base, mais limité à un type de rendez-vous"],
            ["Acuity Scheduling", "Prestataires de services", "Plus complet, abonnement mensuel, pensé pour le marché anglophone"],
            ["Setmore, SimplyBook", "Usages variés", "Solutions internationales, moins adaptées au marché français"],
          ],
        },
        callout: {
          title: "Le problème commun",
          text: "Avec toutes ces solutions, vous payez un abonnement sans fin, vos données clients sont chez elles, et votre outil ressemble à celui de tous vos concurrents.",
        },
      },
      {
        heading: "Application sur mesure ou plateforme : le bon calcul",
        paragraphs: [
          "Sur trois ans, Doctolib représente plus de 5 000 € à environ 139 € par mois, et Planity un abonnement récurrent sur devis : dans les deux cas, vous payez sans jamais posséder l'outil.",
          "Une application sur mesure est un investissement unique, sans abonnement de plateforme ni commission, et vos données vous appartiennent. Sur quelques années, elle revient moins cher qu'un abonnement qui ne s'arrête jamais. Et comme elle est à votre nom, vos clients ne passent pas par un annuaire où vos concurrents sont à un clic.",
        ],
      },
      {
        heading: "Les métiers qui en profitent le plus",
        paragraphs: [
          "Tous les professionnels qui travaillent par créneaux ont intérêt à digitaliser leur agenda. Les coiffeurs et instituts de beauté, avec leurs prestations de durée variable et leurs colorations longues. Les coachs et thérapeutes, pour les séances individuelles ou en groupe, le paiement en ligne et le suivi des clients. Les artisans et prestataires, avec une durée par type d'intervention, un acompte et une confirmation automatique.",
          "C'est aussi le cas des professionnels de santé, pour les créneaux réservés et les rappels de suivi, et des auto-écoles, pour la réservation des leçons, la gestion des moniteurs et le suivi de la progression.",
        ],
      },
      {
        heading: "Les erreurs à éviter",
        paragraphs: [
          "La première erreur est de ne pas en parler : une application que vos clients ne connaissent pas ne sert à rien. Affichez un QR code au comptoir, ajoutez le lien dans vos messages et sur votre site, et enregistrez sur votre répondeur un message du type « réservez en 30 secondes sur notre application » : chaque appel manqué devient une réservation.",
          "Évitez aussi de demander trop d'informations : nom, téléphone, prestation et créneau suffisent, chaque champ de plus fait abandonner des clients. Ne vous privez pas des rappels, la fonction qui réduit le plus les rendez-vous manqués. Enfin, ne coupez pas le téléphone du jour au lendemain : certains clients, souvent les plus âgés, continueront d'appeler, et c'est normal. L'application réduit les appels, elle ne les interdit pas.",
        ],
      },
      {
        heading: "Je crée votre application de prise de rendez-vous",
        paragraphs: [
          "Je suis développeur freelance à Brest, spécialisé en applications mobiles iOS et Android. Je conçois des applications de réservation pour les indépendants et les petites équipes, pensées pour votre métier : vos prestations, vos durées, vos règles d'annulation. Pas un outil générique partagé avec des milliers d'autres professionnels.",
          "Vous me parlez directement, du premier échange à la publication sur l'App Store et Google Play. Je configure l'application avec vous, je vous montre comment gérer votre agenda en quelques minutes, et je reste disponible après le lancement. Mes tarifs sont affichés sur la page Application mobile du site : décrivez-moi votre activité, je vous envoie un devis gratuit sous 24h.",
        ],
      },
      {
        heading: "FAQ : application de prise de rendez-vous",
        list: [
          "Mes clients vont-ils vraiment réserver sur une application ? Oui, surtout ceux qui réservent régulièrement : ils gagnent du temps et peuvent le faire le soir ou le week-end. Un QR code au comptoir et un message sur votre répondeur suffisent généralement à lancer le mouvement.",
          "Et les clients qui préfèrent appeler ? Vous gardez le téléphone. Vous ajoutez simplement leur rendez-vous vous-même dans l'agenda de l'application, qui reste votre agenda unique.",
          "Puis-je bloquer des créneaux ou prendre des congés ? Oui. Vous fermez les créneaux que vous voulez depuis votre téléphone, ils disparaissent aussitôt de l'application.",
          "Que se passe-t-il si un client ne vient pas ? Les rappels automatiques limitent les oublis. Pour les prestations longues, vous pouvez demander un acompte à la réservation.",
          "Un site web avec un formulaire ne suffit-il pas ? Un formulaire vous oblige encore à rappeler le client pour confirmer. Une application montre les créneaux réellement libres, confirme automatiquement et envoie les rappels.",
          "Combien coûte une application de prise de rendez-vous ? Cela dépend du nombre de praticiens et des options (acompte, fidélité). Mes tarifs sont affichés sur la page Application mobile, avec un devis gratuit sous 24h.",
        ],
      },
    ],
  },
  {
    slug: "cout-maintenance-application-mobile",
    image: {
      src: "/blog/cout-maintenance-application-mobile.jpg",
      alt: "Mains d'un développeur sur un clavier d'ordinateur portable avec du code à l'écran, second écran avec des logs, café et petite trousse à outils",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Maintenance app mobile : coûts réels 2026",
    description: "Combien coûte la maintenance d'une application mobile ? Mises à jour iOS/Android, bugs, hébergement : le vrai coût après la livraison expliqué clairement.",
    date: "2026-05-18",
    lastModified: "2026-10-01",
    category: "Tarifs",
    sections: [
      {
        paragraphs: [
          "Quand on parle du prix d'une application mobile, on pense presque toujours au coût de développement. Mais une fois livrée, l'application continue de vivre : nouvelles versions d'iOS et d'Android, corrections de bugs, hébergement, évolutions. Ces frais sont rarement chiffrés au départ, et c'est souvent là que naissent les mauvaises surprises.",
          "Voici ce que coûte réellement la maintenance d'une application en 2026, ce qui fait varier la facture, et comment la réduire dès le développement.",
        ],
      },
      {
        heading: "Pourquoi une application a besoin de maintenance",
        paragraphs: [
          "Une application mobile n'est pas un document que l'on publie puis que l'on oublie. Son environnement change en permanence, et elle doit suivre.",
          "D'abord, Apple et Google publient chaque année de nouvelles versions de leurs systèmes : une application qui n'est plus compatible peut finir retirée des stores. Les frameworks et bibliothèques utilisés (React Native, Flutter et les autres) évoluent aussi, et des dépendances trop anciennes finissent par créer des failles de sécurité. Les services tiers comme Stripe, Firebase ou Google Maps font évoluer leurs API, ce qui peut casser une intégration du jour au lendemain. Et les stores durcissent régulièrement leurs règles de confidentialité et de sécurité.",
          "Enfin, même avec des tests rigoureux, certains bugs n'apparaissent qu'en conditions réelles, quand des milliers d'utilisateurs se servent de l'application sur des appareils très différents.",
        ],
      },
      {
        heading: "Le coût réel selon le type d'application",
        paragraphs: [
          "Voici une estimation réaliste du coût annuel de maintenance selon la complexité de l'application :",
        ],
        table: {
          head: ["Type d'application", "Coût annuel", "Ce que ça couvre"],
          rows: [
            ["Simple (vitrine, catalogue, 2 à 3 écrans)", "200 € à 500 €", "Mise à jour annuelle des dépendances, compatibilité iOS et Android"],
            ["Intermédiaire (réservation, paiement, notifications)", "500 € à 1 500 €", "Maintenance des intégrations Stripe et Firebase, corrections"],
            ["Complexe (marketplace, multi-rôles, back-office)", "1 500 € à 4 000 €", "Maintenance continue, petites évolutions, surveillance"],
          ],
        },
        callout: {
          title: "Pour comparer",
          text: "Ces montants restent bien inférieurs aux abonnements des logiciels du marché (Planity, Glofox, Mindbody), qui facturent de 1 000 € à 7 000 € par an pour une solution générique.",
        },
      },
      {
        heading: "Ce qui fait varier le coût",
        paragraphs: [
          "Le premier facteur, c'est la qualité du code de départ. Une application bien conçue coûte beaucoup moins cher à maintenir qu'un code écrit à la hâte : c'est l'un des meilleurs arguments pour choisir un développeur sérieux dès le début. Le deuxième, c'est le nombre d'intégrations : chaque service externe (paiement, cartes, messagerie) est une source de maintenance supplémentaire.",
          "Le rythme des systèmes compte aussi : Apple sort une version majeure d'iOS chaque automne, Google plusieurs mises à jour par an. Vos propres besoins jouent également, chaque nouvelle fonctionnalité ayant son coût de développement. Enfin, le niveau d'engagement souhaité change le prix : une correction garantie en 24h coûte plus cher qu'un délai de cinq jours ouvrés.",
        ],
      },
      {
        heading: "Hébergement et infrastructure : ce qu'on oublie de chiffrer",
        paragraphs: [
          "Au-delà du code, votre application a besoin d'une infrastructure pour fonctionner. Pour une application de taille moyenne, elle représente en général entre 100 € et 500 € par an, à intégrer dans votre calcul de rentabilité.",
        ],
        table: {
          head: ["Poste", "Exemples de coûts"],
          rows: [
            ["Base de données", "Firebase (gratuit jusqu'à un certain volume, puis dès 25 €/mois), Supabase (gratuit jusqu'à 500 Mo), PostgreSQL géré (10 à 30 €/mois)"],
            ["Hébergement back-end", "Vercel (gratuit pour un usage standard), Railway (5 à 20 €/mois avec serveur dédié)"],
            ["Stockage de fichiers", "Firebase Storage, AWS S3 ou Cloudinary : 0 à 20 €/mois selon le volume"],
            ["Compte développeur Apple", "99 € par an, obligatoire pour l'App Store"],
            ["Compte développeur Google", "25 € une seule fois"],
          ],
        },
      },
      {
        heading: "Faut-il un contrat de maintenance ?",
        paragraphs: [
          "Deux approches existent. Le contrat de maintenance mensuel, de 100 € à 400 € par mois, couvre les mises à jour, la surveillance et les corrections : le budget est prévisible et sans surprise. La maintenance à la demande, elle, ne se paie que lorsqu'il y a quelque chose à faire : c'est moins cher si votre application est stable, plus risqué si un bug critique survient.",
          "Ma recommandation : une mise à jour annuelle systématique pour la compatibilité iOS et Android, et de la maintenance à la demande pour le reste. C'est le meilleur équilibre entre sécurité et budget.",
        ],
      },
      {
        heading: "Anticipez la maintenance dès le développement",
        paragraphs: [
          "La meilleure façon de réduire les coûts de maintenance, c'est de bien choisir son développeur au départ. Un code propre, documenté et appuyé sur des dépendances stables coûte deux à trois fois moins cher à maintenir qu'une application codée sans rigueur.",
          "Je propose des contrats de maintenance transparents pour toutes les applications que je développe. Le devis de développement et la maintenance sont chiffrés ensemble : vous savez exactement ce que votre application vous coûtera la première année, et les suivantes.",
        ],
      },
    ],
  },
  {
    slug: "progressive-web-app-vs-application-native",
    image: {
      src: "/blog/progressive-web-app-vs-application-native.jpg",
      alt: "Site web responsive affiché sur un ordinateur portable, une tablette et un smartphone disposés sur un bureau, vue de dessus",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "PWA vs native : que choisir en 2026 ?",
    description: "Progressive Web App ou application native iOS/Android ? Performances, coûts, App Store, offline : le comparatif complet pour choisir la bonne solution en 2026.",
    date: "2026-05-18",
    lastModified: "2026-10-01",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Progressive Web App ou application native : c'est l'une des premières questions quand on veut créer une application mobile. Les deux approches ont de vrais avantages, mais aussi des différences de fond que beaucoup de guides passent sous silence, notamment sur les notifications et la présence dans les stores.",
          "Voici un comparatif honnête pour choisir la bonne solution selon votre projet.",
        ],
      },
      {
        heading: "Qu'est-ce qu'une Progressive Web App ?",
        paragraphs: [
          "Une PWA est un site web qui se comporte comme une application. On y accède par une simple adresse, sans passer par l'App Store ou Google Play, et l'utilisateur peut l'ajouter à son écran d'accueil s'il le souhaite. Elle peut fonctionner hors ligne, envoyer des notifications et utiliser certaines fonctions du téléphone.",
          "Son grand atout, c'est la simplicité : un seul code fonctionne sur iOS, Android, ordinateur et tablette, et chaque modification est disponible immédiatement pour tous les utilisateurs, sans validation d'Apple. De grands services l'ont adoptée, comme Twitter Lite, Starbucks, Pinterest ou Uber.",
        ],
      },
      {
        heading: "Qu'est-ce qu'une application native ?",
        paragraphs: [
          "Une application native est développée pour iOS et Android (en Swift, en Kotlin ou avec React Native), téléchargée depuis l'App Store ou Google Play et installée sur l'appareil. Elle accède directement aux ressources du téléphone, ce qui lui donne les meilleures performances et des animations parfaitement fluides.",
          "Elle peut utiliser toutes les fonctions natives : Face ID, NFC, Bluetooth, GPS précis, caméra avancée, capteurs. Ses notifications sont les plus fiables et les plus visibles. Ses interactions respectent les standards d'iOS et d'Android que vos utilisateurs connaissent. Et elle est présente dans les stores, où les utilisateurs la trouvent en cherchant.",
        ],
      },
      {
        heading: "PWA ou native : le comparatif direct",
        table: {
          head: ["Critère", "PWA", "Application native"],
          rows: [
            ["Performances", "Bonnes si bien optimisée", "Excellentes"],
            ["Coût", "Un seul code pour tout", "Un seul code avec React Native, deux en Swift et Kotlin"],
            ["Notifications", "Longtemps très limitées sur iOS, encore en retrait", "Fiables et très visibles"],
            ["App Store et Google Play", "Absente des stores", "Présente, donc trouvable"],
            ["Fonctions avancées", "Bluetooth, NFC, Face ID souvent impossibles", "Accès complet"],
            ["Mises à jour", "Instantanées", "Validation d'Apple (24 à 48h) et mise à jour par l'utilisateur"],
            ["Hors ligne", "Possible", "Possible, et plus fiable"],
            ["Installation", "Facultative, depuis le navigateur", "Depuis le store"],
          ],
        },
      },
      {
        heading: "Quand choisir une PWA",
        paragraphs: [
          "La PWA est pertinente si vous avez déjà un site web et voulez l'améliorer sans créer une application de zéro, ou si votre budget est limité et que vous voulez couvrir mobile et ordinateur avec un seul développement. Elle convient aussi si vous mettez souvent votre contenu à jour et ne voulez pas dépendre de la validation d'Apple.",
          "Elle suppose en revanche que votre projet n'utilise pas de fonctions avancées comme le Bluetooth, le NFC ou Face ID, et que votre public soit à l'aise pour ajouter une application depuis son navigateur plutôt que depuis un store.",
        ],
      },
      {
        heading: "Quand choisir une application native",
        paragraphs: [
          "L'application native s'impose si vous voulez être présent sur l'App Store et Google Play, car la visibilité dans les stores est un vrai canal d'acquisition. C'est aussi le bon choix pour un public grand public, qui a l'habitude de télécharger ses applications depuis le store.",
          "Elle devient indispensable dès que vous avez besoin de notifications fiables (fidélité, rappels de rendez-vous, promotions), ou de fonctions natives comme le scanner de QR code, le Bluetooth, le NFC, le GPS précis ou le paiement Apple Pay et Google Pay. Et quand l'expérience utilisateur fait la différence sur votre marché, elle offre ce qui se fait de mieux.",
        ],
      },
      {
        heading: "Mon choix : React Native, le meilleur des deux mondes",
        paragraphs: [
          "Je développe les applications mobiles avec React Native, un framework qui permet de créer une application iOS et Android à partir d'un seul code. Vous obtenez les performances et les fonctionnalités d'une application native, avec les économies d'une approche multiplateforme.",
          "Si votre projet se prête mieux à une PWA, je vous le dis honnêtement : je préfère vous conseiller la bonne solution plutôt que de vous vendre quelque chose de surdimensionné. Décrivez-moi votre projet, je vous envoie un devis gratuit, PWA ou native.",
        ],
      },
    ],
  },
  {
    slug: "application-mobile-coiffeur",
    image: {
      src: "/blog/application-mobile-coiffeur.jpg",
      alt: "Intérieur de salon de barbier élégant avec fauteuils vintage et miroirs, smartphone sur le comptoir affichant une app de réservation",
      credit: "Image : Artlist",
    },
    service: "coiffeur",
    title: "Application coiffeur : fini les rendez-vous manqués",
    description:
      "Une application à votre nom pour votre salon de coiffure : prise de RDV 24h/24, rappels anti no-show, fidélité, notifications push. L'alternative à Planity.",
    date: "2026-06-01",
    lastModified: "2026-10-01",
    category: "Guides",
    sections: [
      {
        paragraphs: [
          "En France, 67 % des prises de rendez-vous beauté se font désormais en ligne ou sur mobile (Statista 2024). Pourtant, la plupart des salons indépendants dépendent encore d'outils comme Planity ou Treatwell : des plateformes qui mettent votre clientèle à côté de celle de vos concurrents, et dont les abonnements augmentent d'année en année.",
          "Une application à votre nom sur l'App Store et Google Play change la donne. Vos clientes réservent directement chez vous, vos données vous appartiennent, et votre programme de fidélité est entièrement personnalisable. Voici pourquoi, et comment cela fonctionne.",
        ],
      },
      {
        heading: "La coiffure en France en quelques chiffres",
        paragraphs: [
          "La France compte environ 75 000 salons de coiffure (CNEC 2024), dont 90 % sont de petites entreprises indépendantes, avec un chiffre d'affaires moyen de 120 000 à 180 000 € par an selon l'emplacement et la taille.",
          "Deux chiffres résument l'enjeu du digital. Sans rappel automatique, 15 à 20 % des rendez-vous ne sont pas honorés (Treatwell 2023), alors qu'un rappel par SMS ou notification peut réduire ces absences jusqu'à 60 % (Appointy Research 2024). Et 67 % des réservations beauté se font en dehors des horaires d'ouverture du salon (Statista 2024) : si vos clientes ne peuvent pas réserver le soir, elles réservent ailleurs. Enfin, un client fidèle dépense en moyenne trois fois plus qu'un nouveau client sur douze mois (Bain & Company).",
        ],
      },
      {
        heading: "Pourquoi votre propre application plutôt que Planity ou Treatwell ?",
        paragraphs: [
          "Planity et Treatwell sont des annuaires de la beauté : ils attirent des clients qui cherchent « coiffeur près de chez moi », mais ces clients appartiennent à la plateforme, pas à vous. Votre propre application inverse ce rapport de force.",
          "Vos clientes téléchargent l'application de votre salon, pas un annuaire : votre image et leur fidélité en sortent renforcées. Le programme de fidélité se configure librement (tampons numériques, remises automatiques, offre d'anniversaire), ce que Planity ne permet pas. Et les notifications sont illimitées et gratuites, là où les SMS des plateformes se paient à l'unité, entre 0,06 et 0,10 € chacun.",
          "Vos données clients (noms, emails, historique de visites, préférences) sont hébergées sur votre propre infrastructure et ne sont pas revendues. Le coût est prévisible, sans abonnement qui augmente chaque année, et vous n'avez plus à craindre un changement de conditions ou une fermeture de la plateforme.",
        ],
      },
      {
        heading: "Les fonctionnalités d'une application de salon sur mesure",
        subsections: [
          {
            heading: "La réservation et les rappels",
            paragraphs: [
              "Vos clientes choisissent leur créneau, leur prestation et leur coiffeur depuis leur téléphone, 24h/24, sans vous appeler. Un rappel automatique 24h avant le rendez-vous réduit fortement les absences, et un acompte en ligne de 20 % peut, en option, limiter les annulations de dernière minute.",
            ],
          },
          {
            heading: "La vitrine du salon",
            paragraphs: [
              "Une galerie avant/après présente vos créations pour inspirer et convaincre. Le catalogue affiche chaque prestation, de la coupe au balayage en passant par le lissage, avec sa durée et son prix. Vous pouvez aussi vendre vos soins et produits capillaires directement dans l'application.",
            ],
          },
          {
            heading: "La relation avec vos clientes",
            paragraphs: [
              "Le programme de fidélité récompense les habituées (dix visites, un soin offert, points convertibles, offre d'anniversaire automatique). La messagerie permet d'échanger photos de coupe souhaitée et questions sans passer par WhatsApp. Et un avis est demandé après chaque prestation, pour nourrir votre réputation sur Google.",
            ],
          },
          {
            heading: "Le panel d'administration",
            paragraphs: [
              "Depuis un tableau de bord web, vous gérez vos créneaux, vos coiffeurs et vos statistiques. Une heure de prise en main suffit pour gérer vos réservations en autonomie.",
            ],
          },
        ],
      },
      {
        heading: "Comment se passe la création de l'application",
        paragraphs: [
          "Je vous accompagne de A à Z, même sans aucune connaissance technique. Nous définissons d'abord ensemble vos prestations, vos horaires, vos coiffeurs et vos besoins. Je vous montre ensuite une maquette de l'application, que vous validez avant que je commence à coder.",
          "Pendant le développement, je vous présente l'avancement en vidéo à chaque étape importante. Puis je publie l'application sur l'App Store et Google Play, et je vous forme à l'espace d'administration.",
        ],
      },
      {
        heading: "Application sur mesure, Planity ou Treatwell ?",
        table: {
          head: ["Solution", "Coût", "Ce qu'il faut savoir"],
          rows: [
            ["Planity Pro", "Sur devis, non publié", "Hausses de tarifs signalées par de nombreux salons en 2024 et 2025"],
            ["Treatwell Connect", "Environ 50 à 150 €/mois", "Plus une commission sur les réservations apportées par la marketplace"],
            ["Application sur mesure", "Création unique + hébergement", "Sans commission ni hausse d'abonnement imposée"],
          ],
        },
        callout: {
          title: "La vraie différence",
          text: "Avec une application sur mesure, vous possédez l'outil et vos données. Avec Planity ou Treatwell, vous louez un accès.",
        },
      },
      {
        heading: "Ce que comprend l'application de votre salon",
        paragraphs: [
          "L'essentiel est inclus : réservation en ligne, galerie avant/après, catalogue de prestations, rappels, panel d'administration, sur iOS et Android. En option, vous pouvez ajouter le paiement d'acompte avec Stripe, un programme de fidélité complet et la messagerie client.",
          "Comptez 3 à 5 semaines, publication sur l'App Store et Google Play comprise. Mes tarifs sont affichés sur la page Application mobile du site, avec un devis gratuit sous 24h.",
        ],
      },
      {
        heading: "FAQ : application mobile pour salon de coiffure",
        list: [
          "Une app peut-elle vraiment remplacer Planity ? Pour la prise de rendez-vous et la fidélisation, oui. L'application est à votre nom, vos données vous appartiennent et les notifications sont illimitées, des avantages impossibles avec Planity.",
          "Combien coûte l'app par rapport à Planity ? Planity ne publie pas ses tarifs et se paie chaque mois, sans fin. L'app sur mesure est un investissement unique plus l'hébergement, et elle vous appartient. Mes tarifs sont affichés sur la page Application mobile.",
          "Mes clientes devront-elles télécharger une nouvelle app ? Oui : elles cherchent le nom de votre salon sur l'App Store ou Google Play. Un QR code affiché au salon et une story Instagram suffisent généralement à convertir 60 à 70 % de votre clientèle en 30 jours.",
          "L'app gère-t-elle plusieurs coiffeurs ? Oui. Le panel admin permet de gérer plusieurs praticiens, leurs agendas respectifs et leurs statistiques individuelles.",
          "L'app est-elle conforme au RGPD ? Oui. Les données sont hébergées en Europe (Firebase EU) et vous restez propriétaire de votre base clients. Une politique de confidentialité et un bandeau de consentement sont inclus.",
        ],
      },
    ],
  },
  {
    slug: "comment-fideliser-clients-application-mobile",
    image: {
      src: "/blog/comment-fideliser-clients-application-mobile.jpg",
      alt: "Serveur portant un plateau de boissons dans un café lumineux, smartphone au premier plan affichant une app de fidélité",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Fidéliser ses clients avec une app mobile : guide",
    description: "Programme de fidélité numérique via une application mobile : tampons virtuels, push ciblées, offres personnalisées. Guide complet pour commerçants.",
    date: "2026-06-01",
    lastModified: "2026-10-01",
    category: "Guides",
    sections: [
      {
        paragraphs: [
          "Acquérir un nouveau client coûte cinq à sept fois plus cher que d'en fidéliser un existant. Pourtant, la plupart des commerces et restaurants n'ont pas de vrai programme de fidélité, ou se contentent de cartes papier qui finissent au fond d'un sac.",
          "Une application mobile change la donne : grâce aux notifications et aux programmes de points numériques, elle fait revenir vos clients plus souvent. Voici pourquoi la carte papier ne suffit plus, quelles mécaniques fonctionnent vraiment, et comment les mettre en place dans votre commerce.",
        ],
      },
      {
        heading: "Pourquoi la carte de fidélité papier ne suffit plus",
        paragraphs: [
          "Le premier problème est simple : une bonne partie des cartes papier sont perdues ou oubliées avant d'avoir servi. Le client qui la retrouve au fond de son portefeuille trois mois plus tard ne revient pas pour autant.",
          "Le second problème est moins visible, mais plus coûteux : une carte papier ne vous apprend rien. Vous ne savez pas qui sont vos clients les plus fidèles, ni quand ils reviennent, et vous ne pouvez pas les contacter pour leur rappeler qu'il leur reste des points. Sans compter qu'une carte tamponnée à la main est facile à falsifier.",
        ],
      },
      {
        heading: "Les mécaniques de fidélité qui fonctionnent",
        subsections: [
          {
            heading: "Les tampons numériques",
            paragraphs: [
              "Dix achats, un cadeau : la mécanique la plus simple reste souvent la plus efficace. Dans l'application, le compteur est visible en permanence, et il ne se perd jamais.",
            ],
          },
          {
            heading: "Les points et le club VIP",
            paragraphs: [
              "Chaque euro dépensé rapporte des points échangeables contre des remises. Au-delà d'un certain seuil, vos meilleurs clients accèdent à un club VIP avec des offres réservées : une vraie reconnaissance qui donne envie de rester.",
            ],
          },
          {
            heading: "Les notifications au bon moment",
            paragraphs: [
              "Une offre d'anniversaire envoyée automatiquement le jour J, ou une relance qui donne envie de revenir : « Vous avez 8 tampons sur 10, plus que 2 visites pour votre cadeau ! » C'est souvent ce petit rappel qui déclenche la visite suivante.",
            ],
          },
        ],
      },
      {
        heading: "Les résultats observés chez mes clients",
        paragraphs: [
          "Les commerçants et restaurateurs qui ont intégré un programme de fidélité à leur application observent en moyenne une hausse de 20 à 30 % de la fréquence de visite de leurs clients actifs, et nettement moins de clients qui disparaissent sans revenir.",
        ],
      },
      {
        heading: "Ce que ça vous apporte côté gestion",
        paragraphs: [
          "Côté administration, vous disposez d'un vrai tableau de bord. Vous pouvez repérer vos clients VIP, ceux qui ne sont pas venus depuis trois mois, ou ceux qui ont beaucoup de points à utiliser. Vous envoyez alors une notification ciblée, par exemple uniquement aux clients venus plus de cinq fois, plutôt qu'un message à tout le monde.",
          "Les statistiques vous montrent votre taux de fidélisation, la fréquence de visite et le panier moyen de vos fidèles comparé à celui des nouveaux clients. Et vous pouvez exporter vos données à tout moment : vos clients vous appartiennent, contrairement aux plateformes qui gardent les données.",
        ],
      },
      {
        heading: "Les plateformes de fidélité et leurs limites",
        paragraphs: [
          "Des solutions comme Fidall, Stamp Me ou LoyaltyLion existent. Elles ont un coût récurrent, sous forme d'abonnement qui augmente souvent avec le nombre de clients. Votre programme ressemble alors à celui de vos concurrents, avec la même interface et la même expérience, ce qui rend difficile de vous démarquer.",
          "Les règles sont aussi difficiles à adapter exactement à votre fonctionnement, et certaines plateformes utilisent vos données clients à d'autres fins. Une application sur mesure reprend vos couleurs, vos règles et vos données, et vos clients téléchargent votre application, pas celle d'une plateforme.",
        ],
      },
      {
        heading: "Intégrer la fidélité à votre application",
        paragraphs: [
          "Le programme de fidélité s'intègre directement dans votre application, sans seconde application à installer. Dans une application de restaurant, la commande en ligne et la fidélité cohabitent : vos clients cumulent des points à chaque commande. Dans un commerce, l'achat et la récompense se font au même endroit, du catalogue au panier. Et dans un salon de coiffure, la réservation, la carte de points et l'historique des prestations se retrouvent dans la même application.",
        ],
      },
      {
        heading: "FAQ : fidélité client par application mobile",
        list: [
          "Puis-je migrer ma base clients de Planity ou d'une carte papier vers l'app ? Oui. Les clients existants peuvent créer un compte dans l'app et retrouver leur historique si les données sont transférables.",
          "L'app de fidélité fonctionne-t-elle sans internet ? Le solde de points est visible hors ligne. Les transactions sont synchronisées à la reconnexion.",
          "Les notifications sont-elles vraiment efficaces ? Oui. Leur taux d'ouverture est bien supérieur à celui des emails, et une notification bien ciblée génère des visites le jour même.",
          "Combien coûte l'ajout d'un programme de fidélité dans l'app ? Il peut être intégré dès la création de l'app ou ajouté ensuite. Le devis gratuit détaille son coût selon les mécaniques choisies (tampons, points, parrainage).",
        ],
      },
    ],
  },
  {
    slug: "comment-creer-une-application-mobile",
    image: {
      src: "/blog/comment-creer-une-application-mobile.jpg",
      alt: "Main tenant un smartphone affichant un écran d'application, entouré de croquis d'interface papier, post-it et crayon sur un bureau",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Comment créer une application mobile : le guide 2026",
    description:
      "Créer une application mobile iOS & Android étape par étape : valider l'idée, lancer un MVP, préparer le brief, choisir qui la développe, jusqu'à la publication.",
    date: "2026-06-13",
    lastModified: "2026-10-01",
    category: "Guides",
    sections: [
      {
        paragraphs: [
          "Vous voulez créer une application mobile pour votre commerce, pour lancer une idée ou pour équiper votre équipe, mais vous ne savez pas par où commencer. Bonne nouvelle : le chemin est bien balisé, et il ne demande aucune compétence technique de votre part.",
          "Voici, étape par étape, comment se déroule la création d'une application iOS et Android, de l'idée jusqu'à sa publication sur l'App Store et Google Play, avec les décisions à prendre et les erreurs à éviter.",
        ],
      },
      {
        heading: "Valider votre idée avant de foncer",
        paragraphs: [
          "Avoir une idée est facile. Ce qui est difficile, c'est d'en faire une application que des gens utilisent vraiment, et la différence se joue dans la façon de la mettre en place, pas dans l'idée elle-même.",
          "Avant de penser aux écrans, posez-vous une seule question : à quel problème concret votre application répond-elle ? Qui a ce problème, à quelle fréquence, et que fait cette personne aujourd'hui pour s'en sortir sans vous ? S'il n'y a pas de vrai besoin derrière, ou si vous ne savez pas qui l'a, le reste du projet repose sur des bases fragiles.",
          "Ensuite, avancez par petites étapes. Inspirez-vous côté design sur Pinterest, Dribbble ou Refero pour repérer une direction visuelle, plutôt que de partir d'une page blanche. Construisez une première version volontairement simple, centrée sur ce besoin, et lancez-la sans attendre d'avoir tout prévu. Dès vos quatre ou cinq premiers utilisateurs actifs, demandez-leur ce qui leur manque, ajoutez ces retours un par un, et recommencez : les meilleures fonctionnalités viennent de vos utilisateurs, parce qu'elles répondent à un besoin réel.",
        ],
      },
      {
        heading: "J'ai une idée de service : commencer par un MVP",
        paragraphs: [
          "« J'ai une idée de service, mais je ne sais pas comment la lancer. » Dans ce cas, je conseille presque toujours la même chose : ne pas construire l'application complète tout de suite, mais un MVP, pour Minimum Viable Product, ou produit minimum viable.",
          "Un MVP, c'est la version la plus simple de votre application qui rend déjà le service promis à de vrais utilisateurs. Ce n'est ni une maquette ni un prototype, mais une vraie application publiée, réduite à l'essentiel. Pour une application de réservation de cours de sport, par exemple, le MVP permet de consulter le planning et de réserver sa place ; le paiement en ligne, les abonnements et le classement des membres viendront ensuite.",
          "Cette approche a quatre avantages. Vous testez votre idée sur le terrain, avec des utilisateurs qui vous disent si le service répond à un vrai besoin. Vous limitez le risque, sans investir dans dix fonctionnalités avant de savoir lesquelles serviront. Vous lancez plus vite, en quelques semaines plutôt qu'en plusieurs mois. Et chaque nouvelle fonctionnalité est ajoutée parce qu'elle a été demandée, pas devinée. Mon rôle est de vous aider à trier ce qui doit figurer dans la première version : c'est souvent la décision la plus importante du projet.",
        ],
      },
      {
        heading: "Les questions à trancher avant de vous lancer",
        subsections: [
          {
            heading: "iOS, Android ou les deux ?",
            paragraphs: [
              "Viser les deux plateformes dès le départ évite de refaire le travail plus tard. Les technologies multiplateformes actuelles permettent de développer une seule fois pour toucher tous les utilisateurs.",
            ],
          },
          {
            heading: "Une vraie application ou un simple site mobile ?",
            paragraphs: [
              "Une application présente sur l'App Store et Google Play inspire davantage confiance, et elle peut relancer vos utilisateurs par notification, là où un site est consulté une fois puis oublié.",
            ],
          },
          {
            heading: "Quelles fonctionnalités pour la première version ?",
            paragraphs: [
              "Mieux vaut lister deux ou trois fonctionnalités essentielles pour démarrer, puis enrichir l'application progressivement une fois lancée.",
            ],
          },
          {
            heading: "Qui va s'en occuper ?",
            paragraphs: [
              "Un développeur freelance spécialisé ou une agence : le choix dépend de la taille du projet et de votre budget. Nous y revenons plus bas.",
            ],
          },
        ],
      },
      {
        heading: "Préparer votre brief avant le premier contact",
        paragraphs: [
          "Pas besoin d'être technique ni de rédiger un cahier des charges : quelques lignes suffisent pour obtenir un devis précis. Décrivez le problème que l'application résout et pour qui, sa fonctionnalité principale puis les fonctionnalités secondaires si vous en avez, et les plateformes visées.",
          "Ajoutez votre budget approximatif et votre délai idéal, et citez quelques applications que vous aimez : elles donnent au développeur une référence visuelle immédiate.",
        ],
      },
      {
        heading: "Les 6 étapes de création d'une application mobile",
        table: {
          head: ["Étape", "Ce qui se passe"],
          rows: [
            ["1. Cadrage", "Vous décrivez votre idée, même imprécise. L'échange clarifie les fonctionnalités et fixe un périmètre réaliste pour la première version"],
            ["2. Devis", "Une estimation précise du délai et du contenu, avant tout engagement"],
            ["3. Design", "Les écrans sont maquettés et validés avec vous un par un, avant d'écrire la moindre ligne de code"],
            ["4. Développement", "L'application est codée, et vous recevez des versions de test régulières sur votre téléphone"],
            ["5. Tests", "L'application est éprouvée sur de vrais appareils iOS et Android avant la mise en ligne"],
            ["6. Publication", "Soumission à l'App Store et à Google Play, avec quelques jours de validation, parfois plus pour une première soumission"],
          ],
        },
      },
      {
        heading: "Les erreurs à éviter",
        paragraphs: [
          "La plus courante consiste à vouloir tout mettre dans la première version : une application trop ambitieuse au départ prend plus de temps à livrer et retarde les premiers retours d'utilisateurs. La deuxième, c'est de négliger les maquettes : passer directement au développement sans avoir validé le design entraîne des retouches coûteuses ensuite.",
          "Choisir une technologie uniquement native, iOS ou Android, double le travail pour toucher les deux plateformes, alors qu'une approche multiplateforme permet de développer une seule fois. Enfin, n'oubliez pas la maintenance : une application a besoin de mises à jour régulières (compatibilité avec les nouvelles versions d'iOS et d'Android, corrections, évolutions), un suivi à anticiper dès le départ.",
        ],
      },
      {
        heading: "Freelance, agence ou no-code : qui va créer votre application ?",
        paragraphs: [
          "Une agence mobilise une équipe complète (chef de projet, designer, développeurs iOS et Android, testeur), avec un coût de structure important. Elle convient aux projets très complexes qui demandent plusieurs développeurs en parallèle, avec des budgets de 15 000 € à 80 000 € et trois à six mois de délai.",
          "Un développeur freelance spécialisé en multiplateforme fait le même travail seul, avec une seule base de code pour les deux plateformes, en quelques semaines. Vous échangez directement avec la personne qui développe votre application, sans intermédiaire.",
          "Le no-code (Glide, Adalo, Bubble) est utile pour tester une idée en quelques jours, mais il impose un abonnement à vie, limite l'accès aux fonctions du téléphone et se heurte souvent à des refus sur l'App Store. Enfin, des plateformes comme Malt ou Upwork aident à trouver un freelance : vérifiez alors les avis et le portfolio mobile, et privilégiez quelqu'un dans votre fuseau horaire.",
        ],
      },
      {
        heading: "Créer votre application à Brest et partout en France",
        paragraphs: [
          "Basé à Brest, j'accompagne des porteurs de projet dans toute la Bretagne et partout en France. Créer une application ne demande aucun déplacement : le cadrage, les validations et le suivi se font en visio ou par écrit.",
          "Vous avez une idée d'application, même encore floue ? Écrivez-moi pour un premier échange : le devis est gratuit et sans engagement, et je vous réponds sous 24h.",
        ],
      },
      {
        heading: "FAQ : comment créer une application mobile",
        list: [
          "Faut-il avoir une idée précise avant de contacter un développeur ? Non. Une idée générale suffit pour un premier échange : le cadrage sert justement à préciser et prioriser les fonctionnalités.",
          "Qu'est-ce qu'un MVP d'application mobile ? C'est la première version de votre application, réduite aux fonctionnalités indispensables, publiée pour de vrais utilisateurs. Elle permet de valider votre idée rapidement avant d'investir dans une version complète.",
          "Faut-il un business plan avant de contacter un développeur ? Non. Une description claire du problème et de l'utilisateur cible suffit pour obtenir un devis.",
          "Mon idée peut-elle être copiée si j'en parle à un développeur ? Le risque est très faible en pratique. Si vous êtes inquiet, un accord de confidentialité (NDA) peut être signé avant le brief.",
          "Faut-il payer l'App Store et Google Play ? Oui : 99$ par an pour le compte développeur Apple et 25$ une seule fois pour Google Play. La publication elle-même est incluse dans mes prestations.",
          "Combien de temps prend la création d'une application mobile ? Cela dépend du nombre de fonctionnalités et de leur complexité : un développeur vous donne un délai précis après le cadrage du projet.",
          "Mon application sera-t-elle disponible sur iPhone et Android ? Avec une technologie multiplateforme comme React Native, une seule base de code fonctionne sur iOS et Android, ce qui permet de toucher tous les utilisateurs sans double développement.",
          "Comment se déroule le suivi pendant le développement ? Vous recevez des versions de test régulières sur votre téléphone, vous donnez vos retours, et les ajustements sont faits jusqu'à ce que l'application vous convienne.",
          "Que se passe-t-il après la publication de l'app ? Un suivi de maintenance permet de garder l'application compatible avec les nouvelles versions d'iOS et Android, de corriger les éventuels bugs et d'ajouter de nouvelles fonctionnalités.",
        ],
      },
    ],
  },
  {
    slug: "creer-photobooth-digital-guide-complet",
    image: {
      src: "/blog/creer-photobooth-digital-guide-complet.jpg",
      alt: "Borne photobooth élégante avec anneau lumineux et tablette lors d'un événement festif, bokeh coloré, personnes en arrière-plan flou",
      credit: "Image : Artlist",
    },
    service: "web-app",
    title: "Photobooth digital : logiciel, application et guide 2026",
    description: "Photobooth digital : fonctionnement, achat ou location, choix du logiciel, et comment une application sur mesure équipe loueurs et photographes pros.",
    date: "2026-06-23",
    lastModified: "2026-10-01",
    category: "Guides",
    sections: [
      {
        paragraphs: [
          "Un photobooth, ou photo booth, est une borne photo automatisée qui permet aux invités d'un événement de se prendre en photo, seuls ou en groupe, avec des cadres et des filtres personnalisés, puis de récupérer leur cliché imprimé ou envoyé sur leur téléphone. C'est devenu un incontournable des mariages, des soirées d'entreprise et des fêtes privées.",
          "En France, le marché de la location de photobooth a progressé de 35 % entre 2020 et 2024 (Federation of European Photographers 2024), porté par la démocratisation des tablettes et des imprimantes compactes. Que vous cherchiez à louer un photobooth pour un événement, à en acheter un pour lancer votre activité, ou à équiper votre parc de location d'un logiciel professionnel, ce guide fait le tour du sujet.",
        ],
      },
      {
        heading: "Achat, location ou logiciel sur mesure ?",
        paragraphs: [
          "Trois profils cherchent une solution photobooth, avec des besoins très différents. Si vous organisez un événement ponctuel (mariage, anniversaire, soirée d'entreprise), la location d'un photobooth clé en main auprès d'un prestataire local est la solution la plus simple : aucun matériel ni logiciel à acheter.",
          "Si vous êtes photographe ou loueur et voulez investir dans votre propre matériel, l'achat d'un photobooth (tablette, imprimante et logiciel) devient rentable dès quelques événements par mois, à condition que le logiciel soit fiable et personnalisable.",
          "Enfin, si vous êtes déjà loueur ou photographe professionnel et cherchez à vous démarquer, c'est là qu'une application sur mesure fait la différence. Je développe le logiciel photobooth, l'application que vos clients utilisent le jour J, pour que vous proposiez une location haut de gamme sous votre propre marque : vos modèles, votre identité, vos fonctionnalités, plutôt qu'un logiciel générique partagé par tous les loueurs.",
        ],
      },
      {
        heading: "Comment fonctionne un photobooth digital ?",
        paragraphs: [
          "Un photobooth digital repose sur trois éléments, pilotés par une application : une interface de déclenchement (tablette, smartphone ou borne), un système de capture (caméra intégrée ou appareil photo externe) et un système de distribution de la photo (impression, email ou QR code).",
          "Concrètement, l'invité choisit un cadre, lance le compte à rebours et prend sa photo. L'application applique le filtre ou le cadre choisi, ajoute le logo de l'événement et génère la photo finale. Celle-ci est imprimée en quelques secondes, envoyée par email, accessible par QR code ou ajoutée à la galerie partagée. Pendant ce temps, le panel d'administration enregistre tout (nombre de photos, partages, photos populaires), et l'organisateur peut suivre l'activité en direct depuis son téléphone.",
        ],
      },
      {
        heading: "Le matériel nécessaire",
        paragraphs: [
          "Voici les composants d'un photobooth digital, du plus simple au plus complet.",
        ],
        table: {
          head: ["Matériel", "Rôle et intérêt"],
          rows: [
            ["Tablette ou iPad", "L'option la plus simple : l'application s'installe directement et la caméra capture la photo. Idéale pour les petits événements"],
            ["Appareil photo reflex ou hybride", "Qualité d'image nettement supérieure, connecté en USB ou Wi-Fi : chaque cliché arrive automatiquement dans l'application"],
            ["Imprimante à sublimation thermique", "Formats 10×15 cm ou bande de 3 photos 10×30 cm, impression en 8 à 15 secondes, en USB ou Wi-Fi"],
            ["Trépied ou borne", "Maintient la tablette à hauteur d'yeux, avec ou sans fond photo"],
            ["Anneau lumineux ou éclairage", "Améliore nettement la qualité des photos, surtout en intérieur"],
          ],
        },
      },
      {
        heading: "Application mobile ou application web ?",
        paragraphs: [
          "Côté logiciel, deux approches sont possibles. L'application mobile native, installée sur un iPad ou une tablette Android, fonctionne en mode kiosque (l'invité ne peut pas en sortir), imprime directement et se connecte à un appareil photo. Son grand atout est le mode hors ligne complet : les photos sont stockées sur place puis synchronisées dès le retour de la connexion, ce qui est indispensable dans les salles de réception ou domaines ruraux sans Wi-Fi fiable. C'est l'option idéale pour les loueurs qui l'utilisent régulièrement.",
          "L'application web progressive (PWA), elle, s'ouvre depuis n'importe quel navigateur, sans installation. La photo est générée sur un serveur puis distribuée par QR code ou email, et les mises à jour sont instantanées. C'est très pratique pour un événement ponctuel, à condition de disposer d'une connexion internet stable.",
        ],
      },
      {
        heading: "Les fonctionnalités d'une application photobooth sur mesure",
        paragraphs: [
          "Une application développée pour votre activité contient exactement ce dont vous avez besoin. La photo se prend avec la caméra de la tablette ou avec un appareil photo externe connecté en USB ou en Wi-Fi. Les cadres et filtres sont personnalisables aux couleurs de l'événement (logo, date, texte) et modifiables depuis le panel d'administration, sans toucher au code. L'impression part directement vers une imprimante compatible (DNP, HiTi, Mitsubishi, Canon Selphy) en 8 à 15 secondes.",
          "L'invité reçoit aussi sa photo en quelques secondes par email, SMS ou QR code, sans créer de compte, et une galerie en ligne partagée rassemble toutes les photos de l'événement. Le branding client est complet (écran d'accueil, cadres, animations, page de partage) et se reconfigure pour chaque événement. Enfin, un mode hors ligne stocke les photos sur place et les synchronise automatiquement au retour de la connexion.",
        ],
      },
      {
        heading: "Le photobooth de mariage : ce qu'attendent les couples",
        paragraphs: [
          "Le mariage représente 60 à 70 % du marché du photobooth en France (Mariages.net 2024), et les attentes des couples sont précises. Ils veulent d'abord une personnalisation totale : un cadre aux couleurs du mariage, avec les prénoms, la date et le lieu, créé spécialement pour eux. Ils veulent ensuite un partage instantané, sans application à télécharger, par QR code ou SMS.",
          "L'impression reste très appréciée : 78 % des couples qui louent un photobooth choisissent une formule avec impression (Studiophotomaton.fr 2024), la photo 10×15 cm étant un souvenir concret. Et le lendemain, un lien envoyé aux invités leur permet de retrouver et télécharger toutes les photos de la soirée.",
        ],
      },
      {
        heading: "Le photobooth pour les événements d'entreprise",
        paragraphs: [
          "Les entreprises ont des exigences particulières. Le branding doit être fort et cohérent : chaque photo partagée sur les réseaux porte le logo et les couleurs de l'entreprise, ce qui renforce la marque naturellement. L'email saisi pour recevoir la photo peut alimenter une base marketing, avec un consentement RGPD intégré au formulaire, et transiter automatiquement vers votre outil d'emailing ou votre CRM, ce que seule une application sur mesure permet.",
          "Les statistiques d'usage (photos prises, taux de partage, pics d'activité) nourrissent le bilan de l'événement. Et pour les entreprises soumises à des exigences strictes, les photos peuvent être hébergées uniquement sur des serveurs situés dans l'Union européenne.",
        ],
      },
      {
        heading: "Ce qui est inclus dans une application photobooth sur mesure",
        paragraphs: [
          "Je développe des applications photobooth pour les photographes, loueurs et organisateurs d'événements, chaque projet étant adapté à votre matériel et à votre usage. La base comprend la prise de photo avec la tablette, les cadres personnalisables, l'envoi par QR code ou email, la galerie partagée et le panel d'administration, sur iOS et/ou Android.",
          "En option, j'ajoute l'impression directe avec votre imprimante (DNP, HiTi, Canon Selphy), la connexion à un appareil photo reflex ou hybride, et un branding multi-clients pour les loueurs, qui permet de configurer le modèle de chaque client sans redévelopper l'application. Comptez 3 à 6 semaines selon les fonctionnalités, publication sur l'App Store et Google Play comprise, avec un support mensuel pour l'hébergement de la galerie, les mises à jour iOS et Android et l'assistance technique.",
        ],
      },
      {
        heading: "FAQ : photobooth digital et application sur mesure",
        list: [
          "Faut-il acheter ou louer un photobooth ? Pour un événement unique, la location auprès d'un prestataire local est plus simple. Pour une activité régulière (photographe, loueur), l'achat du matériel devient rentable, à condition d'avoir un logiciel photobooth fiable derrière.",
          "Quel logiciel photobooth choisir ? Les solutions génériques du marché conviennent pour démarrer, mais elles limitent le branding et les fonctionnalités. Une application développée sur mesure vous permet de proposer un service différenciant à vos clients, avec votre propre marque.",
          "L'app fonctionne-t-elle sans connexion internet ? Oui. En mode natif, les photos sont stockées localement et la galerie se synchronise automatiquement à la reconnexion, ce qui est indispensable dans les salles de réception ou domaines ruraux.",
          "Quelles imprimantes sont compatibles ? Les imprimantes à sublimation thermique (DNP, HiTi, Mitsubishi, Canon Selphy) sont les plus courantes et les mieux supportées. Je vérifie la compatibilité avec votre matériel avant de démarrer.",
          "Mon appareil photo reflex peut-il être connecté à l'app ? Oui. La connexion est possible en USB (protocole PTP/MTP) ou en Wi-Fi selon les modèles Canon, Nikon et Sony. À préciser lors du devis.",
          "Puis-je changer les cadres et templates moi-même ? Oui. Le panel admin vous permet de créer et modifier vos modèles graphiques sans toucher au code : import d'image, position du texte, couleurs.",
          "L'app sera-t-elle disponible sur l'App Store ? Oui, publiée sous votre compte développeur Apple et Google (ou le mien si vous n'en avez pas encore). Pour la galerie, vos invités n'ont rien à installer : le QR code ouvre directement le navigateur.",
          "Puis-je l'utiliser pour plusieurs événements avec des branding différents ? Oui. Le panel admin permet de créer un profil par événement avec son propre modèle : c'est l'usage principal des loueurs qui proposent un photobooth à plusieurs clients.",
          "Combien coûte une application photobooth sur mesure ? Le tarif dépend du matériel à intégrer (imprimante, appareil photo externe) et des fonctionnalités souhaitées. Contactez-moi pour un devis gratuit sous 24h.",
        ],
      },
    ],
  },
  {
    slug: "panel-admin-site-web-application-mobile",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Grafana_dashboard_%282016%29.png/960px-Grafana_dashboard_%282016%29.png",
      alt: "Tableau de bord d'administration avec graphiques et statistiques",
      credit: "Image : Linux Screenshots, CC BY 2.0, via Wikimedia Commons",
    },
    service: "application-mobile",
    title: "Panel admin site web & application mobile : le guide",
    description:
      "Chaque site et application BreizhApp inclut un panel d'administration sur mesure : menu, commandes, statistiques. Gérez tout en autonomie totale.",
    date: "2026-06-29",
    lastModified: "2026-10-01",
    category: "Conseils",
    sections: [
      {
        paragraphs: [
          "Quand je livre un site web ou une application mobile, je ne livre pas seulement des écrans. Je livre aussi un outil de gestion complet, accessible depuis n'importe quel navigateur, que vous utilisez seul, sans jamais avoir à me recontacter pour une modification.",
          "C'est ce qu'on appelle le panel d'administration, ou back-office. Voici ce qu'il contient concrètement, des exemples réels, et pourquoi c'est l'un des éléments les plus importants d'un projet numérique.",
        ],
      },
      {
        heading: "Qu'est-ce qu'un panel d'administration ?",
        paragraphs: [
          "Le panel d'administration est une interface web privée, accessible uniquement à vous et, si besoin, aux membres de votre équipe. Il vous permet de piloter votre activité en temps réel : ajouter un produit, confirmer une commande, voir vos revenus de la semaine, gérer vos rendez-vous.",
          "Il est développé sur mesure pour votre projet. Ce n'est pas un outil générique comme Shopify ou WordPress qu'il faut apprivoiser, mais un tableau de bord pensé pour votre cas précis, avec uniquement les fonctions dont vous avez besoin.",
        ],
      },
      {
        heading: "Ce que contient le panel selon votre activité",
        paragraphs: [
          "Les fonctionnalités varient selon le projet, mais voici les modules les plus courants.",
        ],
        table: {
          head: ["Module", "Ce qu'il vous permet de faire"],
          rows: [
            ["Tableau de bord", "Chiffre d'affaires de la semaine, nombre de commandes ou de rendez-vous, produit ou prestation le plus demandé"],
            ["Produits ou menu", "Ajouter, modifier, supprimer des articles, changer les prix, activer ou désactiver un produit en un clic"],
            ["Commandes", "Suivre les commandes en temps réel, changer leur statut, contacter le client"],
            ["Rendez-vous", "Confirmer ou refuser une demande, voir la répartition par membre de l'équipe, bloquer des créneaux"],
            ["Codes promo", "Créer des réductions en pourcentage ou en montant fixe, avec une date d'expiration"],
            ["Messages", "Recevoir les messages envoyés depuis le site ou l'application"],
            ["Galerie photos", "Ajouter ou retirer des visuels sans développeur"],
            ["Équipe", "Ajouter un collaborateur, définir ses accès, suivre son activité"],
            ["Statistiques", "Commandes par période, meilleures ventes, revenus mensuels"],
          ],
        },
      },
      {
        heading: "Exemple concret : le panel d'un salon de coiffure",
        paragraphs: [
          "Pour Aurum Studio, un salon de coiffure, le panel affiche en temps réel le chiffre d'affaires confirmé de la semaine, le nombre de rendez-vous en attente de confirmation, le coiffeur le plus demandé et la prestation la plus réservée.",
          "Depuis le panel, le gérant confirme ou refuse les rendez-vous, gère les prestations et leurs tarifs, bloque des créneaux pour une fermeture exceptionnelle et consulte la répartition des rendez-vous par membre de l'équipe. Tout cela depuis un navigateur, sur téléphone ou ordinateur, sans jamais ouvrir de code.",
        ],
      },
      {
        heading: "Exemple concret : le panel d'une pizzeria",
        paragraphs: [
          "Pour une pizzeria, le panel va plus loin. Il centralise la gestion du menu (40 produits répartis entre pizzas, pâtes, antipasti, desserts et boissons), les commandes en temps réel avec leur statut de préparation, les réservations de table, les horaires d'ouverture, les codes promo, les livreurs et les statistiques de vente.",
          "Chaque produit s'active ou se désactive en un clic, ce qui est précieux quand un ingrédient vient à manquer. Et un plat peut être mis en avant sur la page d'accueil sans retoucher le site.",
        ],
      },
      {
        heading: "Exemple concret : le panel d'une boutique en ligne",
        paragraphs: [
          "Pour Histoire Eternelle, une bijouterie en ligne, le panel permet de gérer le catalogue par catégories, de suivre les commandes et leur statut, de créer des codes promo, de répondre aux messages des clients et de gérer les photos de la boutique.",
          "L'objectif est toujours le même : que la gérante pilote son activité en toute autonomie, sans avoir à m'appeler pour changer un prix ou ajouter une photo.",
        ],
      },
      {
        heading: "Pourquoi il est inclus dans chaque projet BreizhApp",
        paragraphs: [
          "Un site ou une application sans panel d'administration, c'est un outil qui vous rend dépendant du développeur pour la moindre modification. C'est long, coûteux, et cela freine votre réactivité.",
          "Je construis donc tous mes projets avec un back-office dès le départ, parce que votre autonomie n'est pas négociable. Aucune modification ne vous est facturée pour changer un prix, un texte ou une photo. Le panel s'ouvre depuis n'importe quel appareil, sans installation, avec une interface pensée pour des non-développeurs et plusieurs comptes si vous avez une équipe. Vos données sont stockées sur Firebase, sécurisées et sauvegardées.",
        ],
      },
      {
        heading: "FAQ : le panel d'administration BreizhApp",
        list: [
          "Est-ce que le panel admin est compris dans le prix ? Oui. Le panel d'administration est inclus dans toutes les offres BreizhApp, sans supplément.",
          "Puis-je donner accès à un employé ? Oui. Je peux créer plusieurs comptes avec des niveaux d'accès différents selon votre organisation.",
          "Est-ce que je dois être à l'aise avec l'informatique ? Non. L'interface est conçue pour être utilisée sans formation technique. Si besoin, je vous accompagne lors de la livraison.",
          "Que se passe-t-il si j'ai un problème avec le panel ? Je suis joignable par WhatsApp et email. Le support est inclus dans l'abonnement mensuel.",
          "Le panel fonctionne-t-il sur téléphone ? Oui. Le panel s'adapte à tous les écrans : smartphone, tablette et ordinateur.",
        ],
      },
    ],
  },
  {
    slug: "panel-admin-salon-coiffure",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Inside_the_Hair_Salon_%285577833869%29.jpg/960px-Inside_the_Hair_Salon_%285577833869%29.jpg",
      alt: "Intérieur d'un salon de coiffure avec fauteuils",
      credit: "Photo : johnrosman, CC BY 2.0, via Wikimedia Commons",
    },
    service: "coiffeur",
    title: "Panel admin salon de coiffure : RDV, prestations, équipe",
    description:
      "Le panel d'administration inclus pour les salons de coiffure : rendez-vous, prestations, équipe, galerie et messages depuis un seul tableau de bord.",
    date: "2026-06-29",
    lastModified: "2026-10-01",
    category: "Secteurs",
    sections: [
      {
        paragraphs: [
          "Chaque site web et chaque application que je développe pour un salon de coiffure inclut un panel d'administration complet. Vous gérez votre activité en toute autonomie, depuis n'importe quel appareil, sans jamais avoir besoin de me recontacter pour une modification.",
          "Voici exactement ce que contient ce panel, écran par écran, avec des captures du panel d'un vrai salon.",
        ],
      },
      {
        heading: "Le tableau de bord : votre activité en un coup d'œil",
        paragraphs: [
          "La première page affiche les indicateurs clés de votre semaine : le chiffre d'affaires confirmé, le nombre de rendez-vous en attente de validation, le coiffeur le plus demandé et la prestation la plus réservée.",
          "Vous y voyez aussi la répartition des rendez-vous entre les membres de l'équipe et le classement de vos meilleures prestations sur la période.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/coiffeur-60625.firebasestorage.app/o/image%201.png?alt=media&token=7b42d1a9-def3-461c-b2d8-f874d3b3ee81",
          alt: "Tableau de bord panel admin salon de coiffure BreizhApp",
          caption: "Tableau de bord : CA semaine, RDV en attente, top coiffeur et top prestation",
        },
      },
      {
        heading: "Les rendez-vous : confirmer, refuser, suivre",
        paragraphs: [
          "La section Rendez-vous liste toutes les demandes reçues, avec le nom du client, la prestation demandée, le coiffeur souhaité, la date et l'heure. Vous confirmez ou refusez en un clic, et le client reçoit une notification automatique.",
          "Vous pouvez filtrer par coiffeur, par date ou par statut pour ne jamais laisser passer une demande.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/coiffeur-60625.firebasestorage.app/o/image%202.png?alt=media&token=0d1dd08a-f5b7-4fa4-b229-edbb4c5fbd70",
          alt: "Gestion des rendez-vous panel admin coiffeur BreizhApp",
          caption: "Vue Rendez-vous : liste, statuts et confirmation en un clic",
        },
      },
      {
        heading: "Les prestations : votre catalogue de services",
        paragraphs: [
          "Depuis la section Prestations, vous ajoutez, modifiez ou supprimez chaque service proposé par votre salon : nom, description, durée, prix et coiffeurs associés.",
          "Vous pouvez aussi désactiver une prestation sans la supprimer, ce qui est pratique quand une offre est temporairement indisponible.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/coiffeur-60625.firebasestorage.app/o/image%203.png?alt=media&token=fab4712a-7c4f-4fdd-a13d-8c9448bc1d7c",
          alt: "Gestion des prestations panel admin salon de coiffure",
          caption: "Catalogue de prestations : durée, prix et coiffeurs associés",
        },
      },
      {
        heading: "L'équipe : vos coiffeurs et leurs accès",
        paragraphs: [
          "La section Équipe vous permet d'ajouter ou de retirer un membre du personnel, de définir ses créneaux de disponibilité et de lui attribuer les prestations qu'il réalise.",
          "Chaque coiffeur peut avoir son propre accès au panel pour gérer son agenda, sans voir les données des autres.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/coiffeur-60625.firebasestorage.app/o/image%204.png?alt=media&token=a73bb391-d8e0-4a54-9a6c-c1e4ae5d93dc",
          alt: "Gestion de l'équipe panel admin coiffeur BreizhApp",
          caption: "Section Équipe : membres, disponibilités et prestations attribuées",
        },
      },
      {
        heading: "La galerie : vos photos mises à jour en autonomie",
        paragraphs: [
          "La galerie vous permet d'ajouter ou de supprimer des photos de vos réalisations directement depuis le panel, sans développeur, pour garder un portfolio toujours frais.",
          "Les photos sont stockées sur Firebase et s'affichent instantanément sur votre site ou votre application.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/coiffeur-60625.firebasestorage.app/o/image%205.png?alt=media&token=b3277470-57d7-4f7b-8532-9cc2a69677a1",
          alt: "Gestion galerie photos panel admin salon de coiffure",
          caption: "Galerie : ajout et suppression de photos de réalisations",
        },
      },
      {
        heading: "Les messages : les demandes de vos clients",
        paragraphs: [
          "Tous les messages envoyés depuis le formulaire de contact de votre site ou de votre application arrivent dans cette section. Vous gardez une trace de chaque demande, sans passer par votre boîte mail.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/coiffeur-60625.firebasestorage.app/o/image%206.png?alt=media&token=735d357f-4414-4e7d-b784-0bd5ec1a5443",
          alt: "Messagerie panel admin coiffeur BreizhApp",
          caption: "Messagerie : tous les messages clients centralisés",
        },
      },
      {
        heading: "Les fermetures : congés et jours exceptionnels",
        paragraphs: [
          "La section Fermetures vous permet de bloquer des périodes d'indisponibilité : congés, jours fériés, fermetures exceptionnelles. Aucune réservation n'est possible sur ces créneaux.",
          "Vos clientes voient ainsi vos disponibilités réelles au moment de prendre rendez-vous.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/coiffeur-60625.firebasestorage.app/o/image%207.png?alt=media&token=c8ff0d91-37de-4b12-8e99-fbf6fcb81dec",
          alt: "Gestion des fermetures panel admin salon de coiffure",
          caption: "Fermetures : congés et jours exceptionnels bloqués automatiquement",
        },
      },
      {
        heading: "Un panel inclus dans chaque projet de salon",
        paragraphs: [
          "Ce panel d'administration est livré avec chaque site ou application que je développe pour un salon de coiffure, inclus dans le tarif, sans supplément.",
          "Il s'ouvre depuis un ordinateur, une tablette ou un smartphone, avec une interface pensée pour un usage quotidien sans formation. Chaque coiffeur peut avoir son compte, les données sont sécurisées et sauvegardées sur Firebase, et le support est compris dans l'abonnement mensuel.",
        ],
      },
      {
        heading: "FAQ : le panel d'administration pour coiffeur",
        list: [
          "Le panel est-il inclus dans le prix ? Oui. Le panel d'administration complet est inclus dans toutes les offres BreizhApp pour les salons de coiffure.",
          "Mes coiffeurs peuvent-ils avoir leur propre accès ? Oui. Je crée un compte par membre de l'équipe avec les droits adaptés.",
          "Puis-je modifier mes tarifs moi-même ? Oui. Vous modifiez vos prestations et leurs prix depuis la section Prestations, sans faire appel à un développeur.",
          "Les clients sont-ils notifiés quand je confirme un RDV ? Oui. Une notification ou un email est envoyé automatiquement au client à chaque changement de statut.",
          "Le panel fonctionne-t-il sur téléphone ? Oui. Le panel s'adapte à tous les écrans.",
        ],
      },
    ],
  },
  {
    slug: "panel-admin-restaurant-pizzeria",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Wood-fired_Pizza_Oven_at_Baronessa_Italian_Restaurant.jpg/960px-Wood-fired_Pizza_Oven_at_Baronessa_Italian_Restaurant.jpg",
      alt: "Four à pizza au feu de bois dans un restaurant italien",
      credit: "Photo : Zacatillo1, CC BY-SA 4.0, via Wikimedia Commons",
    },
    service: "restaurant",
    title: "Panel admin restaurant & pizzeria : menu et commandes",
    description:
      "Le panel d'administration inclus pour restaurants et pizzerias : menu, commandes, réservations, horaires, codes promo, livreurs et statistiques.",
    date: "2026-06-29",
    lastModified: "2026-10-01",
    category: "Secteurs",
    sections: [
      {
        paragraphs: [
          "Chaque application mobile et site web que je développe pour un restaurant ou une pizzeria inclut un panel d'administration complet. Vous pilotez votre activité en temps réel depuis n'importe quel appareil, sans avoir besoin de faire appel à un développeur pour la moindre modification.",
          "Voici les 10 modules du panel, capture par capture.",
        ],
      },
      {
        heading: "Commandes : suivez chaque commande en temps réel",
        paragraphs: [
          "La section Commandes centralise toutes les commandes passées depuis votre application ou votre site. Vous voyez le détail de chaque commande, le statut de préparation, le mode de livraison et les coordonnées du client.",
          "Vous mettez à jour le statut en un clic : reçue, en préparation, en livraison, livrée.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/pizzeria2-8057e.firebasestorage.app/o/image%208.png?alt=media&token=92d7ca24-a6e5-45f6-bc2d-b481d87e4349",
          alt: "Gestion des commandes panel admin pizzeria BreizhApp",
          caption: "Commandes : suivi en temps réel avec statut et détail client",
        },
      },
      {
        heading: "Menu : modifiez vos produits, prix et disponibilités",
        paragraphs: [
          "La section Menu liste l'intégralité de votre catalogue, réparti par catégories : Pizzas, Pastas, Antipasti, Desserts, Boissons, Suppléments. Pour chaque produit, vous pouvez modifier le nom, la description, le prix, la photo, activer ou désactiver la disponibilité et le mettre en avant sur la page d'accueil.",
          "Un produit en rupture d'ingrédient ? Vous le désactivez en un toggle. Il disparaît du menu client immédiatement.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/pizzeria2-8057e.firebasestorage.app/o/image%209.png?alt=media&token=6250154b-d30c-4111-9d3d-7a1b53697a52",
          alt: "Gestion du menu panel admin restaurant BreizhApp",
          caption: "Menu : 40 produits, toggle disponibilité et mise en avant en un clic",
        },
      },
      {
        heading: "Réservations : gérez les tables et les groupes",
        paragraphs: [
          "La section Réservations liste toutes les demandes de table reçues avec le nombre de couverts, la date, l'heure et les coordonnées du client. Vous confirmez ou refusez chaque demande, le client est notifié automatiquement.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/pizzeria2-8057e.firebasestorage.app/o/image%2010.png?alt=media&token=c9830477-4c1d-4192-9324-bf646ca7c979",
          alt: "Gestion des réservations panel admin restaurant BreizhApp",
          caption: "Réservations : confirmation ou refus avec notification automatique au client",
        },
      },
      {
        heading: "Horaires : mettez à jour vos horaires d'ouverture",
        paragraphs: [
          "Vous définissez vos horaires d'ouverture jour par jour depuis cette section. Les horaires s'affichent en temps réel sur votre site et dans votre application. Fermeture exceptionnelle ? Vous bloquez le créneau en quelques secondes.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/pizzeria2-8057e.firebasestorage.app/o/image%2011.png?alt=media&token=7727e288-5dd9-496f-b1b3-4fcd428829bd",
          alt: "Gestion des horaires panel admin restaurant BreizhApp",
          caption: "Horaires : ouverture jour par jour, mis à jour en temps réel sur le site",
        },
      },
      {
        heading: "Codes promo : créez vos offres en quelques clics",
        paragraphs: [
          "La section Codes promo vous permet de créer des réductions en pourcentage ou en montant fixe, avec une date d'expiration et un nombre d'utilisations maximum. Idéal pour une offre de lancement, une promotion du weekend ou une récompense client.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/pizzeria2-8057e.firebasestorage.app/o/image%2012.png?alt=media&token=3c49f102-3be5-43cf-be02-8624faef6d1c",
          alt: "Codes promo panel admin pizzeria BreizhApp",
          caption: "Codes promo : réduction en % ou montant fixe, date d'expiration paramétrable",
        },
      },
      {
        heading: "Livreurs : gérez votre équipe de livraison",
        paragraphs: [
          "Si vous proposez la livraison à domicile, la section Livreurs vous permet d'ajouter vos livreurs, de leur attribuer des commandes et de suivre leur activité. Chaque livreur peut accéder à l'application depuis son téléphone pour voir ses livraisons du jour.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/pizzeria2-8057e.firebasestorage.app/o/image%2013.png?alt=media&token=d1603c4a-1952-4cbc-9ab8-6286c97c4994",
          alt: "Gestion des livreurs panel admin restaurant BreizhApp",
          caption: "Livreurs : gestion de l'équipe et attribution des commandes",
        },
      },
      {
        heading: "Statistiques : analysez votre activité",
        paragraphs: [
          "La section Statistiques affiche vos données de vente sur la période de votre choix : nombre de commandes, chiffre d'affaires, produits les plus commandés, heures de pointe. Ces données vous aident à ajuster votre menu et vos horaires.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/pizzeria2-8057e.firebasestorage.app/o/image%2014.png?alt=media&token=e3140706-626a-435d-9feb-bfbf9f8c2482",
          alt: "Statistiques panel admin restaurant pizzeria BreizhApp",
          caption: "Statistiques : CA, commandes et top produits sur la période choisie",
        },
      },
      {
        heading: "Messagerie : centralisez vos échanges clients",
        paragraphs: [
          "Tous les messages envoyés depuis votre site ou application arrivent dans la messagerie du panel. Vous répondez directement depuis l'interface, sans jongler entre différentes boîtes mail.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/pizzeria2-8057e.firebasestorage.app/o/image%2015.png?alt=media&token=163b5c12-a423-43fc-8862-2c10877cf095",
          alt: "Messagerie panel admin restaurant BreizhApp",
          caption: "Messagerie : tous les échanges clients centralisés dans le panel",
        },
      },
      {
        heading: "Photos : mettez à jour vos visuels en autonomie",
        paragraphs: [
          "Ajoutez ou supprimez des photos de votre restaurant, de vos plats ou de votre équipe directement depuis le panel. Les visuels s'affichent instantanément sur votre site et dans votre application.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/pizzeria2-8057e.firebasestorage.app/o/image%2016.png?alt=media&token=999da8b8-c263-4142-8b20-6dd232d33ba7",
          alt: "Galerie photos panel admin pizzeria BreizhApp",
          caption: "Photos : upload et suppression de visuels sans faire appel au développeur",
        },
      },
      {
        heading: "À propos : personnalisez la présentation de votre établissement",
        paragraphs: [
          "La section À propos vous permet de modifier le texte de présentation de votre restaurant, vos coordonnées, votre adresse et les informations qui s'affichent sur la page de présentation de votre site ou application.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/pizzeria2-8057e.firebasestorage.app/o/image%2017.png?alt=media&token=7bb95b3f-9ed1-4fb6-a414-2df423b4344d",
          alt: "Section à propos panel admin restaurant BreizhApp",
          caption: "À propos : présentation, coordonnées et adresse modifiables en autonomie",
        },
      },
      {
        heading: "Ce panel est inclus dans chaque projet restaurant",
        paragraphs: [
          "Ce panel d'administration est livré avec chaque site ou application que je développe pour un restaurant ou une pizzeria, inclus dans le tarif, sans supplément.",
          "Il s'ouvre depuis un ordinateur, une tablette ou un smartphone, avec une interface pensée pour un usage quotidien sans formation. Vous êtes prévenu en temps réel à chaque nouvelle commande ou réservation, vos données sont sécurisées sur Firebase, et le support est compris dans l'abonnement mensuel.",
        ],
      },
      {
        heading: "FAQ : le panel d'administration pour restaurant",
        list: [
          "Le panel est-il inclus dans le prix ? Oui. Le panel d'administration complet est inclus dans toutes les offres BreizhApp pour les restaurants.",
          "Puis-je modifier mon menu moi-même ? Oui. Vous ajoutez, modifiez et supprimez des produits depuis la section Menu, sans faire appel à un développeur.",
          "Les clients sont-ils notifiés quand je confirme leur commande ? Oui. Une notification push est envoyée automatiquement au client à chaque changement de statut.",
          "Mes livreurs peuvent-ils accéder au panel ? Oui. Chaque livreur a son propre accès limité à ses livraisons du jour.",
          "Le panel fonctionne-t-il sur téléphone ? Oui. Le panel s'adapte à tous les écrans.",
        ],
      },
    ],
  },
  {
    slug: "panel-admin-boutique-ecommerce",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Luxer_One_Parcel_Lockers_-_Package_Delivery_%2854123579861%29.jpg/960px-Luxer_One_Parcel_Lockers_-_Package_Delivery_%2854123579861%29.jpg",
      alt: "Casiers de retrait de colis e-commerce",
      credit: "Photo : Tony Webster, CC BY 2.0, via Wikimedia Commons",
    },
    service: "ecommerce",
    title: "Panel admin e-commerce : produits, commandes et avis",
    description:
      "Le panel d'administration inclus dans chaque boutique en ligne : produits, commandes, codes promo, avis clients et messagerie depuis un seul tableau de bord.",
    date: "2026-06-29",
    lastModified: "2026-10-01",
    category: "Secteurs",
    sections: [
      {
        paragraphs: [
          "Chaque boutique en ligne que je développe inclut un panel d'administration complet. Vous gérez votre catalogue, vos commandes et vos clients en totale autonomie, sans jamais avoir besoin de faire appel à un développeur pour la moindre modification.",
          "Voici les 8 modules du panel, capture par capture.",
        ],
      },
      {
        heading: "Dashboard : votre boutique en un coup d'œil",
        paragraphs: [
          "La page d'accueil du panel affiche vos indicateurs clés : chiffre d'affaires, nombre de commandes et nombre de produits actifs. Les dernières commandes sont listées directement sur le tableau de bord pour que vous puissiez les traiter sans naviguer.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/fir-boutique-754bb.firebasestorage.app/o/image%20171.png?alt=media&token=0b58df62-b2a0-4154-9d5f-37028df9a118",
          alt: "Dashboard panel admin boutique e-commerce BreizhApp",
          caption: "Dashboard : CA, commandes, produits et dernières ventes en temps réel",
        },
      },
      {
        heading: "Produits : gérez votre catalogue en autonomie",
        paragraphs: [
          "La section Produits liste l'intégralité de votre catalogue. Pour chaque article, vous modifiez le nom, la description, le prix, les photos, le stock et la catégorie. Vous activez ou désactivez un produit en un clic sans le supprimer.",
          "Besoin d'ajouter un nouveau bijou ou une nouvelle collection ? Vous le faites directement depuis le panel, sans passer par un développeur.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/fir-boutique-754bb.firebasestorage.app/o/image%20231.png?alt=media&token=7a678b6e-9968-4496-8566-9c53b16fa0c9",
          alt: "Gestion des produits panel admin boutique en ligne BreizhApp",
          caption: "Produits : ajout, modification, prix et disponibilité en autonomie totale",
        },
      },
      {
        heading: "Catégories : organisez votre catalogue",
        paragraphs: [
          "La section Catégories vous permet de créer et d'organiser les familles de produits de votre boutique. Chaque catégorie s'affiche dans la navigation de votre site pour guider vos clients vers ce qu'ils cherchent.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/fir-boutique-754bb.firebasestorage.app/o/image%20232.png?alt=media&token=84bf1909-e871-45e4-afcf-2fc63f78f0bf",
          alt: "Gestion des catégories panel admin e-commerce BreizhApp",
          caption: "Catégories : organisation du catalogue et navigation client",
        },
      },
      {
        heading: "Commandes : traitez chaque vente en temps réel",
        paragraphs: [
          "La section Commandes centralise toutes les ventes avec le détail de chaque commande, le statut de traitement, le mode de livraison et les coordonnées de l'acheteur. Vous mettez à jour le statut et le client est notifié automatiquement.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/fir-boutique-754bb.firebasestorage.app/o/Group%20256.png?alt=media&token=def1d244-a682-4f31-b171-393225977ccc",
          alt: "Gestion des commandes panel admin boutique e-commerce BreizhApp",
          caption: "Commandes : suivi en temps réel avec statut et notification client automatique",
        },
      },
      {
        heading: "Codes promo : créez vos offres promotionnelles",
        paragraphs: [
          "Créez des codes de réduction en pourcentage ou en montant fixe, avec une date d'expiration et un nombre d'utilisations maximum. Idéal pour une offre de lancement, une vente flash ou une récompense client fidèle.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/fir-boutique-754bb.firebasestorage.app/o/Group%20257.png?alt=media&token=a3445f31-8795-42df-9e71-11fa1802c81e",
          alt: "Codes promo panel admin boutique en ligne BreizhApp",
          caption: "Codes promo : réduction en % ou montant fixe, durée et limite d'utilisation",
        },
      },
      {
        heading: "Messagerie : répondez à vos clients depuis le panel",
        paragraphs: [
          "Tous les messages envoyés depuis votre boutique arrivent dans la messagerie du panel. Vous centralisez vos échanges sans jongler entre différentes boîtes mail ou outils.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/fir-boutique-754bb.firebasestorage.app/o/image%20173.png?alt=media&token=2983ac78-a682-4c00-8d7c-e6e358c5a971",
          alt: "Messagerie panel admin boutique e-commerce BreizhApp",
          caption: "Messagerie : échanges clients centralisés dans le panel",
        },
      },
      {
        heading: "Avis clients : gérez votre réputation",
        paragraphs: [
          "La section Avis centralise les avis laissés par vos clients sur vos produits. Vous les modérez depuis le panel avant publication, pour garder le contrôle sur ce qui s'affiche sur votre boutique.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/fir-boutique-754bb.firebasestorage.app/o/image%20235.png?alt=media&token=e3a5d0a0-3eef-4de7-ba09-9f6b5d5e098a",
          alt: "Avis clients panel admin boutique en ligne BreizhApp",
          caption: "Avis clients : modération avant publication pour garder le contrôle",
        },
      },
      {
        heading: "Photos : mettez à jour vos visuels en autonomie",
        paragraphs: [
          "Ajoutez ou supprimez des photos de votre boutique, de vos produits ou de votre univers de marque directement depuis le panel. Les visuels s'affichent instantanément sur votre site.",
        ],
        image: {
          src: "https://firebasestorage.googleapis.com/v0/b/fir-boutique-754bb.firebasestorage.app/o/image%20236.png?alt=media&token=d6341f5b-3948-4132-a4ff-eeaa5aeee829",
          alt: "Photos panel admin boutique e-commerce BreizhApp",
          caption: "Photos : upload et gestion des visuels sans faire appel au développeur",
        },
      },
      {
        heading: "Ce panel est inclus dans chaque boutique BreizhApp",
        paragraphs: [
          "Ce panel d'administration est livré avec chaque boutique en ligne que je développe, inclus dans le tarif, sans supplément.",
          "Il s'ouvre depuis un ordinateur, une tablette ou un smartphone, avec une interface pensée pour un usage quotidien sans formation. Le paiement sécurisé par Stripe est intégré, vos données sont protégées sur Firebase, et le support est compris dans l'abonnement mensuel.",
        ],
      },
      {
        heading: "FAQ : le panel d'administration e-commerce",
        list: [
          "Le panel est-il inclus dans le prix ? Oui. Le panel d'administration complet est inclus dans toutes les offres BreizhApp pour les boutiques en ligne.",
          "Puis-je ajouter des produits moi-même ? Oui. Vous ajoutez, modifiez et supprimez des produits depuis la section Produits, sans faire appel à un développeur.",
          "Les clients sont-ils notifiés quand je traite leur commande ? Oui. Une notification ou un email est envoyé automatiquement au client à chaque changement de statut de commande.",
          "Puis-je modérer les avis avant qu'ils s'affichent ? Oui. Chaque avis passe par la section Avis du panel avant d'être publié sur votre boutique.",
          "Le panel fonctionne-t-il sur téléphone ? Oui. Le panel s'adapte à tous les écrans.",
        ],
      },
    ],
  },
  {
    slug: "notifications-push-application-mobile",
    image: {
      src: "/blog/notifications-push-application-mobile.jpg",
      alt: "Gros plan d'une main tenant un smartphone dont l'écran verrouillé affiche une bannière de notification, lumière intérieure douce",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Notifications push : faire revenir vos clients dans l'app",
    description:
      "Notifications push mobile : fonctionnement, exemples par secteur et bonnes pratiques. La fonctionnalité qui sépare une app utilisée d'une app oubliée.",
    date: "2026-07-03",
    lastModified: "2026-10-01",
    category: "Tech",
    sections: [
      {
        paragraphs: [
          "Une application sans notifications push, c'est un commerce qui n'a jamais le numéro de téléphone de ses clients. Vous pouvez avoir la plus belle application du monde : si personne n'y repense après le premier téléchargement, elle finit oubliée dans un dossier.",
          "Les notifications sont le seul canal qui rappelle votre existence à l'utilisateur sans qu'il ait à ouvrir l'application de lui-même. C'est la fonctionnalité qui transforme une application installée une fois en un outil utilisé chaque semaine. Voici comment elles fonctionnent, et comment bien s'en servir.",
        ],
      },
      {
        heading: "Qu'est-ce qu'une notification push, concrètement ?",
        paragraphs: [
          "Une notification push est un message qui s'affiche sur l'écran de verrouillage ou en haut de l'écran du téléphone, même quand l'application est fermée. Contrairement à un SMS ou à un email, elle ne coûte rien à l'envoi, et son taux d'ouverture est nettement supérieur, souvent trois à cinq fois plus élevé qu'un email marketing.",
          "Techniquement, l'application s'enregistre dès son installation auprès d'un service de notification, Firebase Cloud Messaging, qui fonctionne pour iOS comme pour Android. Le propriétaire de l'application peut ensuite déclencher un envoi à la main depuis son panel d'administration, ou automatiquement selon un événement : nouvelle commande, rendez-vous à venir, promotion du jour.",
        ],
      },
      {
        heading: "Des exemples concrets par secteur",
        paragraphs: [
          "Le bon message au bon moment fait toute la différence. Voici comment j'intègre les notifications selon le métier de mes clients.",
        ],
        table: {
          head: ["Secteur", "Notification type"],
          rows: [
            ["Restaurant", "« Votre commande est prête ! », envoyée automatiquement dès le changement de statut dans le panel"],
            ["Coiffeur, institut", "Rappel de rendez-vous 24h avant, pour réduire les absences sans passer un coup de fil"],
            ["Boutique en ligne", "Promotion flash, ou retour en stock d'un produit mis en favori"],
            ["Salle de sport", "Fin d'abonnement proche, ou rappel d'une séance programmée"],
            ["Hôtel, location saisonnière", "Horaires d'arrivée rappelés la veille du séjour"],
          ],
        },
      },
      {
        heading: "Plus efficace qu'un post Instagram ou un email",
        paragraphs: [
          "Un post sur les réseaux sociaux dépend d'un algorithme qui décide qui le voit. Un email arrive dans une boîte de réception saturée, quand il ne finit pas dans les spams. La notification, elle, s'affiche directement sur l'écran verrouillé du téléphone de votre client, sans intermédiaire et sans algorithme à contourner.",
          "C'est aussi un canal qui vous appartient : une fois l'application installée, vous ne dépendez plus d'une plateforme pour recontacter vos clients.",
        ],
      },
      {
        heading: "Les bonnes pratiques pour ne pas être désinstallé",
        paragraphs: [
          "La première règle est de personnaliser le message : « Votre commande n°482 est prête » est bien plus utile que « Une notification vous attend ». La deuxième, de limiter la fréquence : hors messages transactionnels, une à deux notifications par semaine au maximum, au-delà de quoi les désinstallations augmentent.",
          "Privilégiez les messages transactionnels (confirmation, rappel de rendez-vous), toujours mieux perçus que les promotions, et ciblez vos envois plutôt que d'envoyer la même offre à tout le monde. Enfin, testez l'heure d'envoi : une notification à 8h du matin ou en plein repas a moins de chances d'être bien reçue.",
        ],
      },
      {
        heading: "Comment j'intègre les notifications dans vos projets",
        paragraphs: [
          "Chaque application que je développe en React Native peut intégrer les notifications via Firebase Cloud Messaging, la solution la plus fiable, et gratuite, pour iOS et Android. L'envoi se pilote depuis le panel d'administration inclus dans votre projet : vous rédigez et envoyez vos notifications sans aucune compétence technique.",
          "Le devis est gratuit et sans engagement. Décrivez-moi votre projet, même flou, je vous réponds sous 24h.",
        ],
      },
      {
        heading: "FAQ : notifications push sur application mobile",
        list: [
          "Les notifications push sont-elles payantes ? Non, l'envoi via Firebase Cloud Messaging est gratuit, quel que soit le volume.",
          "Puis-je envoyer une notification à un seul client ou à tous mes clients ? Les deux : selon la configuration de votre panel admin, vous ciblez un utilisateur précis ou l'ensemble de votre base.",
          "Les notifications fonctionnent-elles si l'app est fermée ? Oui, c'est justement leur intérêt : elles s'affichent même quand l'application n'est pas ouverte.",
          "Combien coûte l'intégration des notifications push dans mon app ? Elles s'intègrent dès la création de l'app ou en option ensuite. Leur coût est détaillé dans le devis gratuit, envoyé sous 24h.",
          "Les utilisateurs peuvent-ils désactiver les notifications ? Oui, à tout moment depuis les réglages de leur téléphone, d'où l'importance de ne pas en abuser.",
        ],
      },
    ],
  },
  {
    slug: "ux-ui-application-mobile-reussie",
    image: {
      src: "/blog/ux-ui-application-mobile-reussie.jpg",
      alt: "Plan de travail de conception UX/UI d'application mobile : smartphone affichant une interface épurée, croquis de wireframes et nuancier de couleurs",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "UX/UI application mobile : ce qui fait rester vos clients",
    description:
      "Les principes UX/UI d'une application mobile réussie : navigation intuitive, rapidité, cohérence visuelle. Pour que vos clients restent au-delà de 10 secondes.",
    date: "2026-07-03",
    lastModified: "2026-10-01",
    category: "Tech",
    sections: [
      {
        paragraphs: [
          "Un utilisateur décide de garder ou de désinstaller une application dans les dix premières secondes. Ce jugement instantané ne repose pas sur les fonctionnalités, mais sur l'expérience : est-ce clair, est-ce rapide, est-ce agréable ?",
          "L'UX, l'expérience utilisateur, et l'UI, l'interface utilisateur, font souvent toute la différence entre une application qui génère des réservations et une application installée puis oubliée. Voici les principes qui comptent vraiment, et les erreurs qui font fuir.",
        ],
      },
      {
        heading: "UX et UI : deux choses différentes, mais indissociables",
        paragraphs: [
          "L'UI, c'est ce que l'œil voit : les couleurs, les boutons, la typographie, les icônes. L'UX, c'est ce que l'utilisateur ressent en se servant de l'application : trouve-t-il facilement ce qu'il cherche, comprend-il où appuyer, l'application répond-elle vite ?",
          "Une application peut être belle mais frustrante à utiliser, ou l'inverse. Les deux doivent donc être pensées ensemble, dès la conception.",
        ],
      },
      {
        heading: "Les principes d'une bonne expérience mobile",
        subsections: [
          {
            heading: "Tout à portée de pouce",
            paragraphs: [
              "Les actions principales doivent être accessibles d'une seule main, sans changer sa prise du téléphone. Et les actions clés (réserver, commander, contacter) ne devraient jamais demander plus de trois gestes.",
            ],
          },
          {
            heading: "La rapidité",
            paragraphs: [
              "Un écran doit s'afficher en moins de deux secondes : au-delà, une grande partie des utilisateurs abandonne. Chaque action doit aussi produire une réaction immédiate (bouton qui réagit, chargement visible, confirmation claire), pour que l'utilisateur sache que sa demande a été prise en compte.",
            ],
          },
          {
            heading: "La cohérence et la lisibilité",
            paragraphs: [
              "Les mêmes couleurs, les mêmes boutons et les mêmes comportements sur tous les écrans permettent à l'utilisateur de ne jamais se sentir perdu. Des textes courts et lisibles, avec une hiérarchie claire entre titre, contenu et actions, font le reste.",
            ],
          },
        ],
      },
      {
        heading: "Les erreurs qui font fuir les utilisateurs",
        paragraphs: [
          "Certaines erreurs reviennent très souvent dans les applications développées à la hâte ou avec des outils no-code génériques. La plus courante est le formulaire d'inscription trop long : demandez le strict nécessaire, le profil se complétera plus tard. Vient ensuite l'écran surchargé, avec tant d'options que l'action principale se noie.",
          "L'absence de retour visuel laisse l'utilisateur dans le doute après chaque appui. Des textes trop petits deviennent illisibles sur un petit écran. Et une navigation incohérente, avec un bouton retour qui change de place ou des gestes différents d'un écran à l'autre, suffit à faire abandonner.",
        ],
      },
      {
        heading: "Comment je conçois l'expérience de vos applications",
        paragraphs: [
          "Avant de coder le moindre écran, je définis le parcours utilisateur : quelle est l'action prioritaire que le client doit pouvoir faire (réserver, commander, appeler), et je construis l'interface autour de cet objectif.",
          "Chaque application que je développe en React Native suit les règles de conception natives d'iOS (Human Interface Guidelines) et d'Android (Material Design). Résultat : l'application est intuitive dès la première ouverture, sans que l'utilisateur ait à apprendre à s'en servir. Le devis est gratuit et sans engagement, et je vous réponds sous 24h.",
        ],
      },
      {
        heading: "FAQ : UX/UI d'une application mobile",
        list: [
          "Quelle est la différence entre UX et UI ? L'UI concerne l'apparence visuelle (couleurs, boutons), l'UX concerne le ressenti et la facilité d'utilisation globale de l'app.",
          "Pourquoi le temps de chargement est-il si important ? Au-delà de 2 à 3 secondes de chargement, une grande partie des utilisateurs quitte l'application avant même de voir le contenu.",
          "Une app développée en no-code a-t-elle une bonne UX ? Rarement : les modèles génériques ne s'adaptent pas à votre parcours client et donnent souvent une expérience impersonnelle.",
          "L'UX/UI est-elle incluse dans le prix de développement ? Oui, la conception de l'interface et du parcours utilisateur est incluse dans toutes mes offres.",
          "Combien de temps prend la conception UX/UI d'une app ? Comptez 3 à 5 jours pour définir le parcours et les écrans avant le développement, selon la complexité du projet.",
        ],
      },
    ],
  },
  {
    slug: "captures-ecran-app-store-play-store",
    image: {
      src: "/blog/captures-ecran-app-store-play-store.jpg",
      alt: "Smartphone affichant une grille d'icônes d'applications à côté d'un ordinateur portable avec un outil de design ouvert, sur un bureau lumineux",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Captures d'écran App Store & Play Store : le guide",
    description:
      "Créer des captures d'écran qui convertissent sur l'App Store et Google Play : formats requis, bonnes pratiques et erreurs à éviter pour être téléchargé.",
    date: "2026-07-03",
    lastModified: "2026-10-01",
    category: "Guides",
    sections: [
      {
        paragraphs: [
          "Avant de télécharger une application, un utilisateur regarde en moyenne trois à cinq captures d'écran sur sa fiche App Store ou Google Play. C'est souvent ce qui décide s'il appuie sur « Installer » ou s'il passe à l'application concurrente juste en dessous.",
          "Des captures mal cadrées, sans contexte, ou de simples copies d'écran brutes font perdre des téléchargements, même quand l'application est excellente. Voici les formats à respecter, ce qui fait une bonne capture, et les erreurs à éviter.",
        ],
      },
      {
        heading: "Les formats requis par chaque store",
        paragraphs: [
          "Apple et Google imposent des formats précis, qui varient selon la taille d'écran des appareils.",
        ],
        table: {
          head: ["Store", "Exigences"],
          rows: [
            ["App Store (iOS)", "Captures obligatoires pour iPhone 6,9 pouces (1320 × 2868 px) et 6,5 pouces, plus iPad si l'application est compatible tablette"],
            ["Google Play (Android)", "Au moins 2 captures, de 320 à 3840 px, au format conseillé 16:9 ou 9:16"],
            ["Les deux", "De 2 à 10 captures, et une vidéo de présentation de 15 à 30 secondes possible"],
          ],
        },
        callout: {
          title: "Utilisez tout l'espace",
          text: "Les deux stores acceptent jusqu'à 10 captures : ne vous arrêtez pas à deux. Une vidéo de présentation augmente aussi sensiblement le nombre de téléchargements.",
        },
      },
      {
        heading: "Ce qui fait une capture qui convertit",
        paragraphs: [
          "La différence ne tient pas à la qualité de l'application, mais à la mise en scène de ses écrans. Ajoutez un titre court au-dessus de chaque capture (« Réservez en 2 clics », « Suivez votre commande en temps réel ») plutôt qu'une copie d'écran nue, et mettez en avant le bénéfice plutôt que la fonction technique : « Ne ratez plus un rendez-vous » parle davantage que « Notifications activées ».",
          "Pensez la série comme une histoire : la première capture donne envie, les suivantes détaillent les bénéfices clés. Présentez les écrans dans un téléphone plutôt qu'en plein cadre, pour un rendu plus professionnel, et restez fidèle à votre identité visuelle, avec les couleurs et polices de votre logo et de votre site.",
        ],
      },
      {
        heading: "Les erreurs qui font fuir avant même le téléchargement",
        paragraphs: [
          "Des captures floues ou en basse résolution sont rédhibitoires sur les écrans actuels. Des textes trop longs deviennent illisibles en miniature, dans les résultats de recherche. Des captures qui ne montrent pas le vrai écran d'accueil donnent à l'utilisateur l'impression d'avoir été trompé une fois l'application installée. Et sans capture centrée sur l'action principale (réserver, commander, acheter), l'utilisateur ne comprend pas tout de suite à quoi sert l'application.",
        ],
      },
      {
        heading: "Comment je gère ça pour mes clients",
        paragraphs: [
          "La création des captures d'écran pour l'App Store et Google Play fait partie de la publication de chaque application que je développe. Je prépare les visuels aux bons formats, avec des titres et une mise en scène adaptés à votre secteur, avant la soumission aux deux stores.",
          "Le devis est gratuit et sans engagement. Décrivez-moi votre projet, je vous réponds sous 24h.",
        ],
      },
      {
        heading: "FAQ : captures d'écran App Store et Google Play",
        list: [
          "Combien de captures d'écran dois-je fournir ? Entre 2 et 10 par plateforme. Je recommande d'en utiliser au moins 5 pour raconter une histoire complète.",
          "Puis-je utiliser les mêmes captures pour l'App Store et le Google Play Store ? Les tailles diffèrent, mais le contenu et la mise en scène peuvent rester identiques, simplement redimensionnés.",
          "Faut-il ajouter du texte sur les captures ? Oui, un court titre par capture augmente nettement les téléchargements par rapport à des copies d'écran nues.",
          "La création des captures est-elle incluse dans le prix de développement ? Oui, dans toutes mes offres : la publication sur les stores inclut la préparation des visuels.",
          "Une vidéo de présentation est-elle nécessaire ? Pas obligatoire, mais recommandée : elle augmente généralement le taux de téléchargement par rapport aux captures seules.",
        ],
      },
    ],
  },
  {
    slug: "publier-application-app-store",
    image: {
      src: "/blog/publier-application-app-store.jpg",
      alt: "iPhone posé sur un bureau clair et épuré affichant une page d'App Store, ordinateur portable légèrement en retrait, café, esthétique minimaliste",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Publier son application sur l'App Store : guide 2026",
    description:
      "Publier une application iOS sur l'App Store : compte développeur, délais de validation, règles Apple et erreurs qui font rejeter une app.",
    date: "2026-07-03",
    lastModified: "2026-10-01",
    category: "Guides",
    sections: [
      {
        paragraphs: [
          "Publier une application sur l'App Store est plus exigeant que sur Google Play. Apple examine manuellement chaque application avant sa mise en ligne, et une part importante des premières soumissions est refusée, le plus souvent pour des raisons évitables.",
          "Voici les étapes réelles de la publication, telles que je les gère pour chaque client, du compte développeur à la mise en ligne, avec les motifs de refus les plus fréquents.",
        ],
      },
      {
        heading: "Étape 1 : créer un compte développeur Apple",
        paragraphs: [
          "Le compte Apple Developer Program coûte 99 $ par an, à la charge du propriétaire de l'application : c'est votre compte, et l'application vous appartient. Si vous publiez au nom d'une entreprise, l'inscription demande un numéro D-U-N-S, qui peut prendre plusieurs jours à obtenir. C'est souvent l'étape la plus longue de tout le processus, alors mieux vaut l'anticiper.",
        ],
      },
      {
        heading: "Étape 2 : préparer la fiche dans App Store Connect",
        paragraphs: [
          "Une fois le compte validé, la publication se prépare dans App Store Connect, le back-office d'Apple. La fiche comprend le nom de l'application et son sous-titre (30 caractères chacun au maximum), la description complète, les mots-clés de recherche et la catégorie.",
          "Il faut aussi fournir les captures d'écran aux formats requis pour iPhone, et pour iPad si l'application est compatible, une politique de confidentialité, obligatoire même pour une application simple, ainsi que vos coordonnées et des informations de test pour les vérificateurs d'Apple.",
        ],
      },
      {
        heading: "Étape 3 : la validation par Apple",
        paragraphs: [
          "Apple examine chaque application à la main avant de la publier. Le délai moyen est de 24 à 48h, mais il peut atteindre une semaine en cas de refus suivi d'une nouvelle soumission.",
          "Les vérificateurs testent l'application comme un vrai utilisateur : ils créent un compte, parcourent les écrans et testent le paiement s'il y en a un. Toute fonctionnalité cassée ou trompeuse entraîne un refus immédiat.",
        ],
      },
      {
        heading: "Les motifs de refus les plus fréquents",
        paragraphs: [
          "Le premier motif est technique : une application qui plante, ou un bug bloquant pendant le test. Viennent ensuite les contenus incomplets (écrans vides, boutons qui ne mènent nulle part, texte provisoire de type « Lorem ipsum ») et l'absence de politique de confidentialité, ou un lien cassé vers celle-ci.",
          "Apple refuse aussi les applications qui annoncent dans leur description une fonctionnalité absente, et celles qui vendent du contenu numérique sans passer par son système de paiement, sur lequel Apple prélève une commission de 15 à 30 %. Enfin, une application qui se contente d'afficher un site web dans une coquille vide est de plus en plus souvent rejetée.",
        ],
      },
      {
        heading: "Comment je gère la publication pour mes clients",
        paragraphs: [
          "La publication sur l'App Store est incluse dans toutes mes offres. Je prépare la fiche complète et les captures d'écran, et je gère les échanges avec Apple si une précision est demandée pendant l'examen. Vous ne payez que les 99 $ par an du compte développeur, qui reste à votre nom.",
          "Comme je développe en React Native avec une vraie logique applicative, et non une simple coquille web, le taux d'acceptation dès la première soumission est nettement plus élevé qu'avec un outil no-code générique. Le devis est gratuit et sans engagement, et je vous réponds sous 24h.",
        ],
      },
      {
        heading: "FAQ : publier une application sur l'App Store",
        list: [
          "Combien coûte la publication sur l'App Store ? Le compte développeur Apple coûte 99$/an. La publication elle-même est incluse dans mes offres de développement.",
          "Combien de temps prend la validation Apple ? En moyenne 24 à 48h, jusqu'à une semaine en cas de rejet et de correction.",
          "Pourquoi mon app a-t-elle été rejetée ? Les causes les plus fréquentes sont les bugs, le contenu incomplet ou l'absence de politique de confidentialité.",
          "Puis-je publier une app no-code sur l'App Store ? C'est possible mais risqué : Apple rejette de plus en plus les applications qui ressemblent à une simple coquille de site web.",
          "Qui est propriétaire du compte développeur et de l'app publiée ? Vous. Le compte est ouvert à votre nom et reste votre propriété, même après la fin de notre collaboration.",
        ],
      },
    ],
  },
  {
    slug: "publier-application-google-play-store",
    image: {
      src: "/blog/publier-application-google-play-store.jpg",
      alt: "Smartphone Android posé sur un bureau clair à côté d'une figurine du robot Android vert et d'un ordinateur portable, esthétique épurée",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Publier son application sur Google Play : guide 2026",
    description:
      "Publier une application Android sur le Google Play Store : compte développeur, fiche Play Console, délais de validation et publication sans rejet.",
    date: "2026-07-03",
    lastModified: "2026-10-01",
    category: "Guides",
    sections: [
      {
        paragraphs: [
          "Publier une application sur Google Play est en général plus rapide et moins strict que sur l'App Store d'Apple. Mais quelques étapes méritent d'être anticipées, notamment pour un nouveau compte développeur, sous peine de mauvaises surprises au moment de la mise en ligne.",
          "Voici le processus complet, tel que je le mène pour chaque projet.",
        ],
      },
      {
        heading: "Étape 1 : créer un compte développeur Google Play",
        paragraphs: [
          "Le compte Google Play Console coûte 25 $, payés une seule fois, là où Apple facture 99 $ chaque année. L'inscription se fait en quelques minutes avec un compte Google.",
        ],
        callout: {
          title: "Le piège des nouveaux comptes",
          text: "Depuis 2023, Google impose aux nouveaux comptes développeurs une phase de test fermé avec au moins 12 testeurs actifs pendant 14 jours avant d'autoriser la publication publique. Il faut le prévoir dans le planning.",
        },
      },
      {
        heading: "Étape 2 : préparer la fiche Google Play",
        paragraphs: [
          "La fiche se construit dans la Google Play Console, l'équivalent d'App Store Connect côté Android. Elle comprend un titre de 30 caractères, une description courte de 80 caractères et une description complète de 4 000 caractères, au moins deux captures d'écran (jusqu'à huit recommandées) et une icône haute résolution.",
          "Il faut aussi choisir la catégorie, remplir le questionnaire obligatoire de classification du contenu, fournir une politique de confidentialité dès que l'application collecte la moindre donnée, et compléter la fiche « Sécurité des données », qui détaille les données collectées et leur usage.",
        ],
      },
      {
        heading: "Étape 3 : la validation par Google",
        paragraphs: [
          "Contrairement à Apple, Google valide les applications de façon largement automatisée. C'est généralement plus rapide : quelques heures pour une mise à jour, jusqu'à 7 jours pour une toute première publication depuis un nouveau compte.",
          "Google continue aussi de surveiller l'application après sa publication : un pic de désinstallations, des avis négatifs en série ou un comportement suspect peuvent déclencher un nouvel examen.",
        ],
      },
      {
        heading: "Les motifs de refus ou de suspension",
        paragraphs: [
          "Le motif le plus fréquent est une fiche « Sécurité des données » incomplète, ou incohérente avec ce que fait réellement l'application. Viennent ensuite les demandes de permissions excessives, comme l'accès à la caméra sans aucune fonction photo, et une politique de confidentialité absente ou un lien invalide.",
          "Google sanctionne aussi les fiches trompeuses, dont les captures ne correspondent pas à l'application réelle, et les applications qui se contentent de rediriger vers un site web sans apporter de valeur propre sur mobile.",
        ],
      },
      {
        heading: "Comment je gère la publication pour mes clients",
        paragraphs: [
          "La publication sur Google Play est incluse dans toutes mes offres. Je prépare la fiche complète dans la Play Console, je gère la phase de test fermé obligatoire et la fiche « Sécurité des données ». Le compte développeur reste à votre nom et sous votre contrôle, et vous ne payez que les 25 $ à Google, une seule fois.",
          "Le devis est gratuit et sans engagement. Décrivez-moi votre projet, je vous réponds sous 24h.",
        ],
      },
      {
        heading: "FAQ : publier une application sur Google Play",
        list: [
          "Combien coûte la publication sur le Google Play Store ? Le compte développeur Google coûte 25$, payés une seule fois. La publication elle-même est incluse dans mes offres.",
          "Combien de temps prend la validation Google ? Quelques heures pour une mise à jour, jusqu'à 7 jours pour une première publication.",
          "Qu'est-ce que la phase de test fermé obligatoire ? Depuis 2023, Google impose 12 testeurs actifs pendant 14 jours minimum avant d'autoriser un nouveau compte à publier publiquement.",
          "La publication sur Google Play est-elle plus simple que sur l'App Store ? Globalement oui, la validation est plus automatisée et moins stricte que celle d'Apple.",
          "Qui est propriétaire du compte développeur Google Play ? Vous. Le compte est ouvert à votre nom et reste votre propriété.",
        ],
      },
    ],
  },
  {
    slug: "avantages-developpement-application-mobile-cross-platform",
    image: {
      src: "/blog/avantages-developpement-application-mobile-cross-platform.jpg",
      alt: "Un iPhone et un smartphone Android côte à côte affichant la même mise en page floutée, ordinateur portable avec du code en arrière-plan",
      credit: "Image : Artlist",
    },
    service: "application-mobile",
    title: "Application mobile cross-platform : les avantages",
    description:
      "Les avantages du développement cross-platform : une seule base de code pour iOS et Android, des délais réduits et une expérience utilisateur optimale.",
    date: "2026-07-18",
    lastModified: "2026-10-01",
    category: "Tech",
    sections: [
      {
        paragraphs: [
          "Une application cross-platform est une application mobile développée à partir d'une seule base de code, qui fonctionne à la fois sur iOS et sur Android. C'est l'approche que j'utilise avec React Native pour tous mes projets d'application mobile.",
          "À l'inverse, une application native est codée deux fois : en Swift pour iOS, en Kotlin pour Android. Au moment de choisir un développeur ou une agence, la question revient donc toujours : faut-il viser le natif ou le cross-platform ? Voici les vrais avantages de chaque approche, et pourquoi le cross-platform convient à la grande majorité des projets.",
        ],
      },
      {
        heading: "Les bénéfices du développement cross-platform",
        paragraphs: [
          "Le choix du cross-platform n'est pas qu'une question de coût. Trois bénéfices concrets reviennent sur mes projets clients.",
        ],
        subsections: [
          {
            heading: "Du temps et du budget économisés",
            paragraphs: [
              "Une seule base de code à écrire, tester et maintenir suffit pour toucher tous les utilisateurs mobiles, sur iPhone comme sur Android. En natif, il faudrait deux équipes, ou deux développements distincts.",
            ],
          },
          {
            heading: "Une expérience identique sur les deux plateformes",
            paragraphs: [
              "Les fonctionnalités, le design et les comportements sont les mêmes sur iOS et Android. Aucun de vos utilisateurs n'a droit à une version au rabais.",
            ],
          },
          {
            heading: "Une maintenance simplifiée",
            paragraphs: [
              "Une correction de bug ou une nouvelle fonctionnalité se déploie en une seule fois pour les deux plateformes, au lieu d'être développée et testée deux fois.",
            ],
          },
        ],
      },
      {
        heading: "Cross-platform ou natif : la comparaison",
        paragraphs: [
          "Le développement natif garde de vrais avantages, mais dans des cas plus rares qu'on ne le pense.",
        ],
        table: {
          head: ["", "Natif", "Cross-platform"],
          rows: [
            ["Bases de code", "Deux, à développer et maintenir en parallèle", "Une seule"],
            ["Budget et délais", "Doublés pour chaque évolution", "Un seul développement"],
            ["Performances", "Maximales, utiles pour les jeux 3D", "Très proches du natif avec React Native"],
            ["Fonctions matérielles", "Accès le plus direct aux dernières nouveautés", "Accès à l'essentiel des fonctions du téléphone"],
            ["Publication", "Deux projets séparés", "Simultanée sur l'App Store et Google Play"],
          ],
        },
      },
      {
        heading: "Les usages du cross-platform",
        paragraphs: [
          "Le cross-platform s'est imposé comme le choix par défaut pour la plupart des applications d'entreprise. Instagram, Discord ou Shopify utilisent des technologies cross-platform pour tout ou partie de leurs applications : la preuve que ce n'est pas une solution d'entrée de gamme.",
          "Il convient aux applications de commerce et d'e-commerce (catalogue, paiement, notifications), aux applications de réservation et de service (rendez-vous, créneaux, rappels automatiques), et aux applications communautaires ou de contenu (profils, messagerie, fil d'actualité), qui doivent évoluer vite sur les deux plateformes à la fois. Pour un restaurant, un artisan ou une salle de sport, il permet d'obtenir une application complète sur iOS et Android sans multiplier les coûts.",
        ],
      },
      {
        heading: "Pourquoi faire appel à un spécialiste",
        paragraphs: [
          "Faire appel à une agence ou à un développeur freelance spécialisé en cross-platform permet d'aller plus vite qu'en recrutant une équipe interne. Vous profitez d'une expertise déjà rodée sur React Native, sans délai de recrutement.",
          "C'est aussi l'assurance d'un code propre, documenté et évolutif, un point clé si vous comptez faire grandir votre application avec de nouvelles fonctionnalités, ou la confier un jour à une autre équipe.",
        ],
      },
      {
        heading: "En résumé",
        paragraphs: [
          "Le cross-platform est aujourd'hui l'option la plus pertinente pour la grande majorité des projets d'application mobile : il touche tous les utilisateurs, iOS et Android, avec un seul développement, une expérience homogène et une maintenance simplifiée. Le natif garde sa place pour des cas très particuliers, qui demandent des performances ou des fonctions matérielles de pointe.",
          "Vous avez un projet d'application ? Écrivez-moi pour en parler : le devis est gratuit et sans engagement, et je vous réponds sous 24h.",
        ],
      },
      {
        heading: "FAQ : développement d'application mobile cross-platform",
        list: [
          "Le cross-platform est-il aussi performant que le natif ? Pour la grande majorité des usages (commerce, réservation, contenu, communauté), oui. Seules les applications aux besoins matériels très spécifiques (jeux 3D avancés, réalité augmentée poussée) gardent un écart de performance notable.",
          "Quelle technologie utilisez-vous pour le cross-platform ? React Native, le framework le plus mature et le plus utilisé pour le développement d'applications sur mesure, par des startups comme par de grandes entreprises comme Instagram ou Shopify.",
          "Puis-je migrer une app native existante vers le cross-platform ? Oui, en repartant du fonctionnement de l'app existante. Chaque cas est différent : j'étudie la faisabilité lors d'un premier échange.",
          "Le cross-platform convient-il à toutes les tailles de projet ? Oui. C'est même l'option recommandée pour la majorité des projets, des applications vitrines aux plateformes plus complexes avec paiement et gestion de plusieurs utilisateurs.",
        ],
      },
    ],
  },
  {
    slug: "mettre-en-place-paiement-en-ligne-commerce",
    image: {
      src: "/blog/mettre-en-place-paiement-en-ligne-commerce.jpg",
      alt: "Terminal de paiement et carte bancaire sur un comptoir de boutique, smartphone affichant un écran de confirmation de paiement flouté",
      credit: "Image : Artlist",
    },
    service: "ecommerce",
    title: "Paiement en ligne pour commerce : Stripe, SumUp ou autre ?",
    description:
      "Comparatif Stripe vs SumUp pour encaisser en ligne : commissions, fonctionnement, intégration sur un site web ou une application mobile.",
    date: "2026-08-06",
    lastModified: "2026-10-01",
    category: "Comparatifs",
    sections: [
      {
        paragraphs: [
          "Accepter le paiement en ligne, c'est souvent le déclic qui transforme une simple présence sur internet en véritable outil de vente. Un client qui peut payer en deux gestes depuis son téléphone commande bien plus facilement qu'un client qui doit appeler ou passer en boutique.",
          "Mais entre Stripe, SumUp, PayPal et les autres, difficile de savoir laquelle choisir, ni comment elle s'intègre concrètement à votre site ou à votre application. Voici comment j'aborde la question pour chaque commerce que j'accompagne.",
        ],
      },
      {
        heading: "Pourquoi mettre en place un paiement en ligne ?",
        paragraphs: [
          "Pour un commerce, le paiement en ligne répond à plusieurs besoins concrets : vendre à distance sans dépendre d'une plateforme, sécuriser un acompte pour une réservation, ou simplement accélérer le passage en caisse depuis un smartphone.",
          "C'est aussi le meilleur moyen d'échapper aux commissions élevées des plateformes de livraison ou de réservation, tout en gardant une relation directe avec vos clients.",
        ],
      },
      {
        heading: "Stripe, SumUp, PayPal : quelle différence ?",
        paragraphs: [
          "Ces trois solutions encaissent une carte bancaire en ligne, mais elles ne répondent pas exactement aux mêmes usages.",
        ],
        table: {
          head: ["Solution", "Points forts", "Idéale pour"],
          rows: [
            ["Stripe", "La plus flexible : paiements uniques, abonnements, remboursements, conforme PCI-DSS, intégrée au code du site ou de l'application", "Une intégration sur mesure, avec le meilleur contrôle sur l'expérience de paiement"],
            ["SumUp", "Connue pour ses terminaux de caisse, propose aussi des liens de paiement et un module e-commerce", "Les commerces déjà équipés d'un terminal SumUp qui veulent une solution simple"],
            ["PayPal", "Très connu des particuliers, il rassure les acheteurs peu habitués au paiement par carte", "Un complément à Stripe, plutôt qu'un remplacement"],
          ],
        },
      },
      {
        paragraphs: [
          "Stripe est la solution que j'utilise le plus souvent, car c'est elle qui offre le meilleur contrôle sur l'expérience de paiement. SumUp est plus simple à mettre en place, mais moins personnalisable qu'une intégration Stripe sur mesure.",
        ],
      },
      {
        heading: "Comment fonctionnent les commissions",
        paragraphs: [
          "Chaque solution prélève une commission sur chaque transaction, généralement composée d'un pourcentage du montant et d'un petit montant fixe. Ce fonctionnement est commun à Stripe, SumUp et PayPal, et aucune n'impose d'abonnement pour encaisser en ligne, contrairement à certaines plateformes e-commerce clé en main.",
          "À titre indicatif, la commission tourne généralement autour de 1,5 % à 2,9 % du montant, parfois complétée de quelques centimes par paiement, pour une carte bancaire française ou européenne standard. Le taux réel dépend de votre volume, du type de carte (française, européenne, internationale), du canal (en ligne ou terminal) et des options activées (abonnements, protection contre la fraude).",
        ],
        callout: {
          title: "Vérifiez les tarifs du moment",
          text: "Ces taux évoluent régulièrement et varient d'un prestataire à l'autre. Consultez toujours la grille à jour sur le site officiel de Stripe, SumUp ou PayPal au moment de la mise en place.",
        },
      },
      {
        heading: "Le paiement en ligne sur un site web",
        paragraphs: [
          "Sur un site web, Stripe s'intègre directement dans le code : le formulaire de paiement sécurisé s'affiche sur votre site, sans rediriger le client vers une page externe qui casserait la confiance. Le client saisit sa carte, valide, et vous recevez la commande instantanément, avec si besoin un email de confirmation automatique.",
          "L'intégration peut couvrir un paiement simple (un produit, un service, un acompte), un panier complet avec plusieurs articles, ou un abonnement pour un service facturé chaque mois.",
        ],
      },
      {
        heading: "Le paiement en ligne dans une application mobile",
        paragraphs: [
          "Dans une application iOS et Android, le principe est le même, mais l'intégration technique diffère : le paiement passe par le kit Stripe adapté au mobile, avec la possibilité d'ajouter Apple Pay et Google Pay pour payer en un seul geste, sans ressaisir sa carte.",
          "C'est particulièrement utile pour une application de commande, de réservation avec acompte ou de vente de produits, où la rapidité du paiement influe directement sur les ventes : plus le geste est simple, plus le client va au bout de sa commande.",
        ],
      },
      {
        heading: "Les erreurs à éviter",
        paragraphs: [
          "La première erreur consiste à rediriger le client vers une page externe qui ne ressemble pas à votre site : la confiance baisse et les abandons de panier augmentent. Un paiement intégré à votre design rassure davantage. La deuxième, c'est de ne proposer que la carte bancaire : ajouter Apple Pay et Google Pay réduit nettement les abandons, surtout sur mobile.",
          "Ne stockez jamais vous-même les numéros de carte : Stripe et SumUp s'en chargent, à condition d'utiliser leurs outils d'intégration officiels plutôt qu'un formulaire fait maison, ce qui garantit la conformité PCI-DSS. Enfin, n'oubliez pas la confirmation automatique : un email ou une notification immédiate rassure le client et vous évite bien des questions.",
        ],
      },
      {
        heading: "Comment je mets en place votre système de paiement",
        paragraphs: [
          "Je m'occupe de l'intégration du paiement de bout en bout, sur un site web, une application mobile, ou les deux : création du compte Stripe, intégration technique sécurisée, configuration d'Apple Pay et Google Pay si besoin, et tests réels avant la mise en ligne. Vous restez propriétaire de votre compte de paiement et de vos données financières : je me contente de le connecter proprement à votre site ou à votre application.",
          "Basé à Brest, j'accompagne aussi bien des commerces locaux que des projets partout en France, avec un devis gratuit et détaillé sous 24h.",
        ],
      },
      {
        heading: "FAQ : paiement en ligne pour un commerce",
        list: [
          "Stripe ou SumUp, lequel choisir ? Stripe convient mieux à une intégration sur mesure sur un site web ou une application mobile. SumUp est pertinent si vous utilisez déjà son terminal de paiement en boutique et souhaitez une solution simple en complément.",
          "Le paiement en ligne est-il obligatoire pour vendre sur internet ? Non, mais c'est ce qui transforme un site vitrine en véritable outil de vente : sans lui, le client doit vous contacter pour finaliser sa commande, ce qui réduit fortement les ventes.",
          "Puis-je proposer Apple Pay et Google Pay sur mon site ou mon app ? Oui, ces deux moyens de paiement s'ajoutent facilement à une intégration Stripe, aussi bien sur un site web que dans une application mobile.",
          "Est-ce sécurisé de faire gérer le paiement par un développeur freelance ? Oui, à condition que l'intégration passe par les outils officiels de Stripe ou SumUp : le développeur ne manipule ni ne stocke jamais vos données bancaires, tout transite de façon chiffrée par le prestataire de paiement.",
          "Combien de temps prend la mise en place d'un paiement en ligne ? Quelques jours suffisent pour une intégration simple sur un site existant. Sur un projet neuf (site ou application), le paiement est intégré directement dans le planning de développement.",
        ],
      },
    ],
  },
  {
    slug: "optimiser-efficacite-site-web-professionnel",
    image: {
      src: "/blog/optimiser-efficacite-site-web-professionnel.jpg",
      alt: "Développeur face à plusieurs écrans affichant un audit de performance web avec alertes d'erreurs critiques et de site lent",
    },
    service: "site-web",
    title: "Optimiser l'efficacité de son site web professionnel",
    description:
      "Vitesse de chargement, parcours client, mobile : les leviers concrets pour qu'un site web pro convertisse vraiment. Guide pratique, sans jargon technique.",
    date: "2026-09-03",
    lastModified: "2026-10-01",
    category: "Guides",
    sections: [
      {
        paragraphs: [
          "Avoir un site web ne suffit pas. Beaucoup de commerçants et d'artisans ont un site en ligne depuis des années, mais il ne leur apporte presque aucun client. Le problème n'est presque jamais esthétique : c'est la vitesse, le parcours ou l'absence de suivi qui font perdre des clients sans qu'on s'en rende compte.",
          "Voici les leviers qui font vraiment la différence sur l'efficacité d'un site professionnel, dans l'ordre où je les vérifie sur les projets que j'accompagne.",
        ],
      },
      {
        heading: "Pourquoi un site « joli » ne suffit pas",
        paragraphs: [
          "Un site peut avoir un design soigné et rater complètement son objectif. Son efficacité se mesure à ce qu'il produit (appels, rendez-vous, ventes), pas à son apparence.",
          "Trois causes reviennent presque toujours : un chargement trop lent, qui fait partir le visiteur avant même qu'il ait vu la page ; un parcours confus, qui ne mène nulle part ; et un site mal adapté au mobile, alors que la majorité des visiteurs arrivent depuis un téléphone.",
        ],
      },
      {
        heading: "Les leviers qui comptent vraiment",
        paragraphs: [
          "Pas besoin de tout refaire : quelques points concentrent l'essentiel de l'impact. Le premier, c'est la vitesse. Chaque seconde de chargement en trop fait fuir une partie des visiteurs, surtout sur mobile en 4G.",
          "Le deuxième, c'est un parcours clair : en quelques secondes, le visiteur doit comprendre quoi faire, appeler, réserver ou commander. Le troisième, c'est une version mobile irréprochable, avec des boutons accessibles au pouce, un texte lisible sans zoomer et des formulaires courts.",
          "Viennent ensuite un contenu à jour (horaires, coordonnées, prestations), car une information fausse ruine la confiance immédiatement, et le référencement local : apparaître dans les recherches « près de moi » pèse souvent plus que le design sur le nombre de visites.",
        ],
      },
      {
        heading: "Comment procéder, étape par étape",
        paragraphs: [
          "L'optimisation d'un site existant suit un ordre précis, pour ne pas perdre de temps sur les détails avant d'avoir réglé les fondations.",
        ],
        table: {
          head: ["Étape", "Ce qu'on fait"],
          rows: [
            ["1. Mesurer", "Temps de chargement, affichage mobile, présence dans les recherches locales"],
            ["2. Accélérer", "Alléger les images, revoir l'hébergement, retirer le code superflu"],
            ["3. Simplifier", "Réduire le nombre de clics avant de pouvoir contacter ou commander"],
            ["4. Tester", "Vérifier chaque page sur un vrai téléphone, pas seulement sur ordinateur"],
            ["5. Suivre", "Mesurer combien de visiteurs deviennent réellement des clients"],
          ],
        },
      },
      {
        heading: "Les erreurs à éviter",
        paragraphs: [
          "Sur les sites que j'audite, les mêmes erreurs reviennent. Des animations ou vidéos lourdes ralentissent tout le site pour un effet visuel minime. Le numéro de téléphone ou le formulaire de contact est caché en bas d'une page interminable. Un site monté avec un créateur généraliste n'a jamais été testé en vitesse une fois le contenu ajouté.",
          "Le référencement local (fiche Google, adresse, zone d'intervention) est négligé au profit du design. Et surtout, on ne revient jamais sur le site une fois publié, alors que des ajustements réguliers font toute la différence dans la durée.",
        ],
      },
      {
        heading: "Un site pensé pour votre activité, à Brest et en Bretagne",
        paragraphs: [
          "Développeur freelance basé à Brest, j'accompagne des artisans, commerçants et restaurateurs du Finistère et de toute la Bretagne dans la création et l'optimisation de sites sur mesure, pensés dès le départ pour la vitesse et la conversion plutôt que retouchés après coup.",
          "Un audit rapide suffit souvent à repérer ce qui freine un site existant. Envoyez-moi l'adresse de votre site actuel : je vous réponds sous 24h avec un devis gratuit.",
        ],
      },
      {
        heading: "FAQ : efficacité d'un site web professionnel",
        list: [
          "Comment savoir si mon site web est efficace ? En comparant le nombre de visiteurs au nombre de contacts ou de ventes générés. Un site efficace transforme une part significative de ses visites en actions concrètes.",
          "La vitesse de chargement a-t-elle vraiment un impact sur les ventes ? Oui : un site lent fait partir une partie des visiteurs avant même l'affichage complet de la page, surtout sur mobile.",
          "Faut-il refaire tout le site pour l'optimiser ? Rarement. La plupart du temps, corriger la vitesse, le parcours et l'affichage mobile suffit à améliorer nettement les résultats, sans repartir de zéro.",
          "Un site fait avec un constructeur en ligne peut-il être efficace ? Cela dépend surtout de son poids et de sa structure une fois le contenu ajouté. Un site sur mesure permet un contrôle plus fin sur la vitesse et le référencement local.",
          "Le référencement local est-il vraiment important pour un site professionnel ? Oui, surtout pour les commerces et artisans qui dépendent d'une clientèle de proximité : apparaître dans les recherches locales génère souvent plus de visites qu'un bon classement national.",
        ],
      },
    ],
  },
  {
    slug: "analyse-technique-site-zevent",
    image: {
      src: "/blog/analyse-technique-site-zevent.jpg",
      alt: "Trois développeurs devant plusieurs écrans affichant un audit technique du site ZEVENT, avec relevés de structure et de contraste",
    },
    service: "site-web",
    title: "Site du ZEVENT : analyse technique complète",
    description:
      "Comment est construit le site du ZEVENT ? Stack, performance, design : ce qui est bien fait, ce qui pourrait être amélioré et les astuces web à retenir.",
    date: "2026-09-03",
    lastModified: "2026-10-01",
    category: "Tech",
    sections: [
      {
        paragraphs: [
          "Je regarde régulièrement comment sont construits les sites qui encaissent beaucoup de trafic en peu de temps. Le ZEVENT en fait partie : un pic massif de visiteurs pendant trois jours, un compteur de dons qui doit rester juste à la seconde près, et des centaines de streamers à afficher en même temps. C'est un excellent cas d'étude.",
          "J'ai examiné le code reçu par le navigateur, les fichiers chargés et le comportement de la page. Voici ce que j'en retiens, dans l'ordre où je l'ai remarqué.",
        ],
      },
      {
        heading: "Les technologies en un coup d'œil",
        paragraphs: [
          "Le site tourne sur React, avec React Router pour la navigation entre les pages et Vite pour la compilation. C'est le trio le plus courant en 2026 pour ce type de projet : rapide à développer, et rapide à charger une fois compilé.",
          "Le code est découpé en petits morceaux chargés à la demande : un fichier pour la page concert, un pour les streamers, un pour la boutique. Quand vous arrivez sur l'accueil, votre navigateur ne télécharge donc pas le code de la page zPlace, que vous ne visiterez peut-être jamais.",
        ],
      },
      {
        heading: "Ce qui est vraiment bien fait",
        subsections: [
          {
            heading: "UnoCSS plutôt que Tailwind",
            paragraphs: [
              "Ce moteur de CSS « atomique », plus récent, ne génère que les styles réellement utilisés sur la page. Sur un site qui doit tenir sous une forte charge, chaque kilo-octet économisé compte.",
            ],
          },
          {
            heading: "Umami plutôt que Google Analytics",
            paragraphs: [
              "Un script de mesure d'audience léger, sans cookie tiers, qui respecte le visiteur sans le suivre à travers dix autres sites.",
            ],
          },
          {
            heading: "Cloudflare devant tout le site",
            paragraphs: [
              "Cache agressif (24h sur le HTML), HTTP/3 activé et protection contre les robots : pour un événement qui reçoit un pic de trafic ponctuel et massif, c'est exactement l'architecture qu'il faut.",
            ],
          },
        ],
      },
      {
        heading: "Ce qui pourrait être amélioré",
        paragraphs: [
          "Rien n'est parfait, et un point m'a sauté aux yeux : tout le contenu est construit dans le navigateur. La page arrive presque vide, puis React la construit en JavaScript. Pour un visiteur avec une connexion lente ou un vieux téléphone, cela signifie un écran noir de plus, le temps que le script se charge et s'exécute.",
          "Sans rendu côté serveur, chaque page dépend aussi du JavaScript pour exister aux yeux d'un moteur de recherche. Pour un site tourné vers une communauté déjà acquise, ce n'est pas dramatique. Pour un site qui vit du référencement naturel, ce choix coûterait cher en visibilité.",
        ],
      },
      {
        heading: "Le design : simple et efficace",
        paragraphs: [
          "Fond noir, vert néon (#00BD00) en accent, et une police personnalisée (Switzer) au style graffiti pour le logo. Rien de sophistiqué, mais tout est cohérent avec l'univers gaming et streaming de l'événement.",
          "Le bouton « Faire un don » est en dégradé doré, seul élément chaud sur un fond froid : impossible de le manquer. Sur mobile, la barre de navigation en bas d'écran reprend les codes d'une application plutôt que d'un site classique, un choix pertinent puisque l'essentiel du trafic arrive depuis un téléphone, pendant que le stream tourne sur un autre écran.",
        ],
      },
      {
        heading: "Ce que j'en retiens pour un projet client",
        paragraphs: [
          "Cette architecture est taillée pour un cas précis : un pic de trafic éphémère, un public déjà acquis (les fans suivent l'événement sur Twitter, Twitch ou Discord, pas via Google), et un besoin de développer vite plutôt que d'être référencé dans la durée.",
          "Pour un artisan ou un commerçant qui veut être trouvé par de nouveaux clients sur Google, ce choix ne conviendrait pas : le rendu côté serveur devient indispensable pour bien référencer chaque page. Tout l'intérêt est d'adapter la technologie au vrai objectif du site, plutôt que de suivre une mode.",
          "Si vous vous demandez si l'architecture de votre site ou de votre application est adaptée à votre objectif, je peux y jeter un œil. Devis gratuit sous 24h.",
        ],
      },
      {
        heading: "FAQ : analyse technique d'un site web",
        list: [
          "Qu'est-ce que le rendu côté client (CSR) ? C'est quand la page arrive presque vide au navigateur, et que le contenu est ensuite construit par du JavaScript exécuté localement. Rapide à développer, mais plus lent à afficher pour le visiteur et moins bien vu des moteurs de recherche.",
          "Pourquoi le référencement naturel est-il plus difficile sur un site en React pur ? Parce que les robots des moteurs de recherche doivent exécuter le JavaScript pour voir le contenu réel, ce qui complique et ralentit l'indexation par rapport à une page HTML déjà complète à l'arrivée.",
          "Cloudflare, à quoi ça sert concrètement ? C'est un réseau de serveurs répartis dans le monde qui met le site en cache et le protège des pics de trafic ou des attaques. Le visiteur reçoit la page depuis le serveur le plus proche de lui, donc plus vite.",
          "Faut-il toujours utiliser React pour un site web professionnel ? Non. Pour un site qui vit du référencement local (artisan, commerçant, restaurateur), une architecture avec rendu côté serveur est presque toujours préférable : elle affiche un contenu lisible par Google dès la première requête.",
          "Comment savoir si mon site a les mêmes limites techniques ? Un audit rapide du code source et du temps de chargement suffit à le voir. Envoyez-moi l'adresse de votre site, je vous donne un retour concret.",
        ],
      },
    ],
  },
  {
    slug: "transformer-site-web-en-application-mobile",
    service: "application-mobile",
    title: "Transformer son site web en application mobile",
    description:
      "Vous avez un site et voulez une application ? PWA, app « coquille », hybride ou native : les options pour transformer votre site, et comment bien choisir.",
    date: "2026-09-24",
    lastModified: "2026-10-01",
    category: "Guides",
    sections: [
      {
        paragraphs: [
          "« J'ai un site, mais j'aimerais avoir une application. » C'est une phrase que j'entends souvent de la part de commerçants, restaurateurs et indépendants. Leurs clients les trouvent sur Google, mais une fois la page fermée, ils les oublient.",
          "Bonne nouvelle : vous ne repartez pas de zéro. Votre site contient déjà l'essentiel, vos contenus, votre catalogue et vos clients. Dans ce guide, je vous explique les différentes façons de le transformer en application, celle que je recommande, et comment je m'y prends concrètement.",
        ],
      },
      {
        heading: "Avant tout : avez-vous vraiment besoin d'une application ?",
        paragraphs: [
          "C'est la première question que je pose, et je préfère être honnête : toutes les entreprises n'ont pas besoin d'une application. Si votre site est une simple vitrine (présentation, horaires, contact), vos clients ne l'installeront pas, et Apple risque même de la refuser. Dans ce cas, je vous conseillerai plutôt d'améliorer votre site.",
          "Une application devient en revanche un vrai levier si vos clients reviennent souvent (ils commandent, réservent ou rachètent chaque semaine ou chaque mois), si vous voulez pouvoir les recontacter facilement (promotions, nouveautés, créneaux libérés, rappels de rendez-vous), ou si vous gérez des comptes clients avec un historique, des points de fidélité ou des abonnements.",
          "Elle s'impose aussi si vous avez besoin des fonctions du téléphone (appareil photo, géolocalisation, scan de QR code, Face ID), ou si elle doit fonctionner là où le réseau est faible : sur un chantier, en magasin ou en déplacement.",
        ],
      },
      {
        heading: "Ce qu'une application apporte que votre site ne sait pas faire",
        paragraphs: [
          "Un site sert à être trouvé ; une application sert à faire revenir. Les deux sont complémentaires : le site vous amène de nouveaux clients depuis Google, l'application les fidélise.",
          "Concrètement, votre logo prend place sur l'écran d'accueil de vos clients, à un geste de votre offre, là où un site est vite oublié. Les notifications vous permettent de les prévenir d'une promotion ou d'un créneau libre, directement sur leur écran. Ils peuvent scanner un QR code en boutique, envoyer une photo, trouver le point de retrait le plus proche ou se connecter avec Face ID.",
          "Le catalogue, la carte de fidélité ou les informations pratiques restent consultables sans réseau. L'application offre un espace sans onglets ni publicités, où l'attention reste sur votre offre. Et la présence sur l'App Store et Google Play donne une image sérieuse et professionnelle.",
        ],
      },
      {
        heading: "Les façons de transformer votre site en application",
        paragraphs: [
          "Plusieurs approches existent, de la plus légère à la plus complète, et elles ne donnent pas du tout le même résultat pour vos clients.",
        ],
        table: {
          head: ["Approche", "Principe", "Limites"],
          rows: [
            ["PWA (Progressive Web App)", "Votre site s'installe sur l'écran d'accueil comme une application", "Absente de l'App Store ; sur iPhone, notifications seulement si le site a été ajouté à l'écran d'accueil"],
            ["Application « coquille »", "Des outils en ligne (Appy Pie, webtoapp, PandaSuite…) affichent votre site dans une application, par abonnement", "Même site en moins fluide ; Apple refuse les simples sites reconditionnés (règle 4.2)"],
            ["Application hybride", "Le code web est placé dans un conteneur d'application (Capacitor, Cordova)", "Plus solide, mais l'expérience reste souvent celle d'un site"],
            ["Native multiplateforme (React Native)", "Une vraie application mobile, iPhone et Android en un seul développement, connectée à votre site", "L'approche que j'utilise"],
            ["100 % native (Swift et Kotlin)", "Deux applications distinctes, les meilleures performances", "Budget doublé, réservé aux très gros projets"],
          ],
        },
      },
      {
        heading: "Pourquoi je recommande React Native",
        paragraphs: [
          "Après avoir testé les différentes approches, je développe mes applications en React Native, un framework créé par Meta. Pour une petite entreprise ou un commerce, c'est le meilleur équilibre.",
          "Un seul développement suffit pour l'App Store et Google Play, sans avoir à choisir une plateforme au départ. Le résultat est une vraie application, fluide et pensée pour le pouce, qui passe sans difficulté la validation d'Apple et de Google. Elle se connecte à votre site pour récupérer vos produits, vos contenus et vos comptes clients, sans double saisie, et accède à tout le téléphone : notifications, appareil photo, géolocalisation, Apple Pay et Google Pay. Enfin, elle évolue facilement : on lance une première version simple, puis on ajoute des fonctionnalités selon les retours de vos clients.",
        ],
      },
      {
        heading: "Ce que vous gardez de votre site, et ce que je refais",
        paragraphs: [
          "Transformer votre site en application ne veut pas dire le jeter : l'application s'appuie dessus. Vous gardez votre site et votre nom de domaine, qui continuent de vous amener des clients depuis Google, ainsi que vos contenus et vos données (produits, articles, clients, commandes), auxquels l'application se connecte.",
          "Ce que je refais, c'est l'interface : des écrans pensés pour un petit écran, avec une barre de navigation en bas, facile à atteindre avec le pouce. Je fais aussi le tri, car l'historique de votre entreprise ou vos mentions légales n'ont pas leur place en première page d'une application. Je garde votre identité (couleurs, logo, ton) dans un design adapté au mobile, et j'ajoute ce que le site ne sait pas faire : notifications, fidélité, connexion rapide, mode hors ligne.",
        ],
      },
      {
        heading: "Comment je transforme votre site, étape par étape",
        paragraphs: [
          "Vous n'avez besoin d'aucune compétence technique ni de cahier des charges : je m'en occupe avec vous.",
        ],
        table: {
          head: ["Étape", "Ce qui se passe"],
          rows: [
            ["1. Audit", "J'analyse la technologie de votre site (WordPress, Shopify, sur mesure…), ce que vos clients y font le plus, et comment l'application récupérera vos données"],
            ["2. Fonctionnalités", "Nous définissons ce que l'application doit faire de plus que le site, en commençant par 2 ou 3 fonctionnalités vraiment utiles"],
            ["3. Maquettes", "Je dessine les écrans et vous les validez un par un, avant d'écrire la moindre ligne de code"],
            ["4. Développement", "Je construis l'application et la connecte à votre site ; vous testez des versions intermédiaires sur votre téléphone"],
            ["5. Tests", "L'application est vérifiée sur de vrais iPhone et Android avant la mise en ligne"],
            ["6. Publication", "Je prépare les fiches App Store et Google Play et je gère les échanges avec Apple et Google jusqu'à la validation"],
            ["7. Lancement et suivi", "QR code en boutique, message sur votre site et vos réseaux, puis mises à jour pour suivre les nouvelles versions d'iOS et d'Android"],
          ],
        },
      },
      {
        heading: "Les erreurs que je vois souvent",
        paragraphs: [
          "La plus fréquente consiste à recopier le site tel quel : une application qui affiche les mêmes pages n'apporte rien à vos clients, et risque d'être refusée par Apple. À l'inverse, abandonner le site est une autre erreur, puisque c'est lui qui vous amène de nouveaux clients depuis Google. Et une application déconnectée du site, où il faut saisir produits et horaires deux fois, finit toujours par être délaissée.",
          "Vouloir tout mettre dans la première version perd l'utilisateur : mieux vaut lancer simple, puis enrichir. Abuser des notifications fait désinstaller l'application, alors que quelques messages utiles sont appréciés. Enfin, iOS et Android évoluent chaque année : une application doit être mise à jour pour continuer à fonctionner.",
        ],
      },
      {
        heading: "Pourquoi me confier la transformation de votre site",
        paragraphs: [
          "Je suis développeur freelance à Brest, spécialisé en applications mobiles iOS et Android. Avec moi, vous parlez directement à la personne qui conçoit et développe votre application, du premier échange à la publication, sans chef de projet entre nous.",
          "Je pars de votre site pour créer une application connectée à vos données, sans double saisie. Je vous dis honnêtement si une application vaut le coup pour votre activité, je m'occupe de la publication sur les stores et je reste disponible après le lancement. Vous trouverez des exemples de mes réalisations sur la page Portfolio.",
          "Mes tarifs sont affichés sur la page Application mobile du site. Envoyez-moi l'adresse de votre site : je vous fais un premier retour et un devis gratuit sous 24h. J'accompagne des clients à Brest, dans toute la Bretagne et partout en France.",
        ],
      },
      {
        heading: "FAQ : transformer son site en application mobile",
        list: [
          "Faut-il garder mon site web si j'ai une application ? Oui. Le site vous amène de nouveaux clients via Google, l'application les fait revenir. Les deux fonctionnent ensemble et partagent les mêmes données.",
          "Mon site WordPress ou Shopify peut-il devenir une application ? Oui, dans la plupart des cas. Ces plateformes permettent de récupérer les contenus et les produits pour les afficher dans une application. Un rapide audit de votre site permet de le confirmer.",
          "Apple peut-il refuser mon application ? Oui, si elle se contente d'afficher votre site : la règle 4.2 de l'App Store demande qu'une application aille au-delà d'un site web reconditionné. Une vraie application pensée pour le mobile ne pose pas ce problème, et je gère la validation pour vous.",
          "Une PWA ou un simple raccourci sur l'écran d'accueil suffit-il ? Pour un besoin simple, parfois oui, et je vous le dirai. Mais sans présence sur l'App Store et avec des notifications limitées sur iPhone, une PWA fidélise moins bien qu'une vraie application.",
          "Faut-il commencer par iPhone ou par Android ? Avec React Native, pas besoin de choisir : la même application est publiée sur l'App Store et sur Google Play.",
          "Faut-il un cahier des charges ? Non. Une description de votre activité et l'adresse de votre site suffisent. Je définis le périmètre avec vous pendant l'audit.",
          "Combien de temps faut-il pour transformer mon site en application ? Quelques semaines selon les fonctionnalités. Le délai précis est donné dans le devis, après l'audit de votre site.",
          "Combien ça coûte ? Cela dépend des fonctionnalités et de la technologie de votre site. Mes tarifs sont affichés sur la page Application mobile, avec un devis gratuit et détaillé sous 24h.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Articles rattachés à un service ou secteur donné (slug de lib/taxonomy.ts). */
export function getArticlesForService(service: string): Article[] {
  return articles.filter((a) => a.service === service);
}
