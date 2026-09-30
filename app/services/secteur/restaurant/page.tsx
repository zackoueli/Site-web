import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import Contact from "@/components/Contact";
import FAQItem from "@/components/FAQItem";
import PhoneDemo from "@/components/PhoneDemo";
import { UtensilsCrossed, CheckCircle2, ArrowRight, ShoppingBag, Bike } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile pour restaurant à Brest | BreizhApp",
  description:
    "Développeur freelance à Brest, je crée l'app de votre restaurant : commande en ligne, fidélité, notifications push. Devis gratuit sous 24h.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/restaurant" },
  openGraph: {
    title: "Application mobile pour restaurant à Brest | BreizhApp",
    description:
      "Développeur freelance à Brest, je crée l'app de votre restaurant : commande en ligne, fidélité, notifications push. Devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/secteur/restaurant",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Combien coûte une application mobile pour un restaurant ?",
    a: "À partir de 4 000 €, pour une application iOS & Android avec menu, commande en ligne et panel admin. Le tarif final dépend des fonctionnalités : livraison, fidélité, réservation de table, plusieurs établissements. Je vous envoie un devis détaillé sous 24h, sans engagement.",
  },
  {
    q: "En combien de temps l'application est-elle livrée ?",
    a: "Entre 3 et 5 semaines pour une application complète avec commande en ligne et paiement. Une application plus simple (menu, horaires, réservation) peut être livrée en 2 à 3 semaines.",
  },
  {
    q: "Est-ce que l'app remplace Uber Eats ou Deliveroo ?",
    a: "Pour vos clients réguliers, oui : ils commandent directement dans votre application et vous ne payez aucune commission sur ces ventes, contre 20 à 30 % sur les plateformes. Beaucoup de restaurants gardent Uber Eats pour se faire découvrir, et utilisent leur app pour faire revenir les clients sans commission.",
  },
  {
    q: "Puis-je proposer le click & collect et la livraison ?",
    a: "Oui, les deux. Vous choisissez vos créneaux de retrait, vos zones et frais de livraison, un montant minimum de commande, et vous pouvez fermer les commandes en un clic lors d'un coup de feu.",
  },
  {
    q: "Quels moyens de paiement sont acceptés ?",
    a: "Carte bancaire, Apple Pay et Google Pay via Stripe, la solution de paiement la plus utilisée et sécurisée du marché. Vous pouvez aussi autoriser le paiement sur place au retrait. L'argent arrive directement sur votre compte, je ne prends aucune commission.",
  },
  {
    q: "Puis-je modifier mon menu moi-même ?",
    a: "Oui. Depuis votre panel admin, vous modifiez vos plats, prix, photos, horaires et plats du jour à tout moment, sans republier l'app sur les stores et sans passer par moi.",
  },
  {
    q: "Mes clients doivent-ils télécharger l'app pour commander ?",
    a: "Ce n'est pas obligatoire : en plus de l'App Store et de Google Play, l'application peut avoir une version web accessible par un simple lien ou QR code sur vos tables et vos flyers. Pratique pour un client pressé qui veut commander tout de suite.",
  },
  {
    q: "À qui appartient l'application ?",
    a: "À vous. L'app est publiée à votre nom sur les stores, vous êtes propriétaire du code et de votre fichier clients. Pas d'abonnement à une plateforme de création d'app qui peut changer ses prix ou fermer du jour au lendemain.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "Je vous forme au panel admin, puis j'assure l'hébergement, le support et les mises à jour de compatibilité avec les nouvelles versions d'iOS et d'Android. Les évolutions (nouvelle fonctionnalité, deuxième établissement) se font au fil de vos besoins.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://breizhapp.tech/services/secteur/restaurant#service",
      name: "Application mobile pour restaurant à Brest",
      description:
        "Création d'application mobile sur mesure pour restaurants : commande en ligne, click & collect, livraison, fidélité, notifications push. Sans commission sur les ventes.",
      provider: { "@id": "https://breizhapp.tech/#business" },
      areaServed: [{ "@type": "City", name: "Brest" }, { "@type": "AdministrativeArea", name: "Bretagne" }],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://breizhapp.tech/services/application-mobile" },
        { "@type": "ListItem", position: 3, name: "Application mobile restaurant Brest", item: "https://breizhapp.tech/services/secteur/restaurant" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

const whyOwnApp = [
  { emoji: "🎨", title: "Votre marque, pas celle d'une plateforme", desc: "Vos couleurs, votre logo, vos photos. Sur Uber Eats, vous êtes un restaurant parmi cent autres ; dans votre app, le client ne voit que vous." },
  { emoji: "📣", title: "Un lien direct avec vos clients", desc: "Vous récupérez les coordonnées de vos clients et vous pouvez leur écrire quand vous voulez : plat du jour, soirée spéciale, fermeture exceptionnelle." },
  { emoji: "💶", title: "Zéro commission sur vos ventes", desc: "Les plateformes prennent 20 à 30 % de chaque commande. Avec votre app, le montant payé par le client arrive entièrement sur votre compte." },
];

const features = [
  { title: "Menu et carte dynamiques", desc: "Plats, photos, allergènes, options (taille, suppléments) et plat du jour, modifiables en quelques secondes." },
  { title: "Commande en ligne", desc: "Le client compose son panier, choisit son créneau et paie dans l'app. Vous recevez la commande instantanément." },
  { title: "Click & collect", desc: "Créneaux de retrait configurables et limite de commandes par créneau pour ne pas saturer la cuisine." },
  { title: "Livraison", desc: "Zones de livraison, frais et minimum de commande par zone, suivi de l'état de la commande par le client." },
  { title: "Réservation de table", desc: "Réservation avec choix du créneau et du nombre de couverts, confirmation automatique par email ou notification." },
  { title: "iOS, Android et web", desc: "Publication sur l'App Store et Google Play, plus une version web accessible par lien ou QR code." },
];

const growth = [
  { title: "Programme de fidélité", desc: "Carte de fidélité numérique : une pizza offerte à la 10e commande, une réduction pour l'anniversaire du client." },
  { title: "Notifications push", desc: "« Ce soir, happy hour jusqu'à 20h » directement sur l'écran de vos clients, bien plus lu qu'un email." },
  { title: "Codes promo", desc: "Réductions sur un plat, sur la première commande ou sur un créneau creux, avec date de fin." },
  { title: "Commande en un clic", desc: "Le client retrouve sa commande habituelle et la repasse en un geste, idéal pour les habitués du midi." },
];

export default function RestaurantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/services/application-mobile" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-black font-bold">Application mobile restaurant Brest</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-12 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#FF6B35] brutal-border p-3 shrink-0">
                  <UtensilsCrossed size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">Application mobile pour restaurant à Brest</h1>
                  <p className="text-xl font-bold text-gray-500 mt-1">Commande en ligne · Click & collect · Fidélité</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
                Vos clients commandent directement chez vous, depuis leur téléphone, sans passer par Uber Eats.
                Je crée l&apos;application iOS & Android de votre restaurant, à vos couleurs, sans commission sur vos ventes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                  Demander un devis gratuit
                </a>
                <Link href="/portfolio" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-8 py-4">
                  Voir les réalisations →
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <PhoneDemo
                src="https://demo.pizzeria.breizhapp.tech/"
                title="Démo d'application de commande en ligne pour une pizzeria"
              />
              <p className="text-xs text-gray-500 text-center max-w-xs">
                Démo d&apos;une application de pizzeria : menu, panier et paiement. Naviguez librement.
              </p>
            </div>
          </div>
        </section>

        {/* En bref */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-10">
            <div className="border-l-4 border-[#FFE234] pl-6">
              <p className="mono text-sm font-bold text-[#FFE234] mb-4">EN BREF</p>
              <p className="text-gray-300 leading-relaxed">
                Je crée des applications mobiles sur mesure pour les restaurants, pizzerias, crêperies, food trucks et
                traiteurs : menu, commande en ligne, click & collect, livraison, fidélité et notifications push, avec un
                panel admin pour tout gérer vous-même. Je m&apos;appelle Enzo, développeur freelance basé à Brest, et
                je travaille avec les restaurateurs de tout le Finistère et de la Bretagne. Une application restaurant
                démarre à 4 000 € et se livre en 3 à 5 semaines. Elle est publiée à votre nom, vous êtes propriétaire
                du code et de votre fichier clients, et vous ne payez aucune commission sur vos ventes.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Livraison</p>
                <p className="text-xl font-bold text-white">3 à 5 semaines</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Budget indicatif</p>
                <p className="text-xl font-bold text-white">Dès 4 000 €</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Commission sur vos ventes</p>
                <p className="text-xl font-bold text-white">0 %</p>
              </div>
            </div>
          </div>
        </section>

        {/* Click & collect et livraison */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Vos clients veulent <span className="bg-[#FFE234] px-2 brutal-border">commander depuis leur téléphone</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              À emporter ou livré, le repas se commande de plus en plus sur mobile. Votre application couvre les deux, selon votre façon de travailler.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="brutal-border brutal-shadow bg-white p-6">
                <ShoppingBag size={24} className="text-[#FF6B35] mb-3" />
                <h3 className="font-bold text-lg mb-2">Click & collect</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Le client commande et paie à l&apos;avance, choisit son heure de retrait et passe récupérer son repas
                  sans attendre. Vous fixez vos créneaux et le nombre de commandes par créneau, pour que la cuisine suive.
                </p>
              </div>
              <div className="brutal-border brutal-shadow bg-white p-6">
                <Bike size={24} className="text-[#FF6B35] mb-3" />
                <h3 className="font-bold text-lg mb-2">Livraison</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Vous livrez avec votre propre livreur : vous définissez vos zones, vos frais et votre minimum de commande.
                  Le client suit l&apos;état de sa commande, de la préparation à la livraison.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi votre propre app */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-2">Pourquoi votre propre application plutôt qu&apos;Uber Eats ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Les plateformes vous apportent des clients, mais elles gardent la relation et une grosse part de la marge.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {whyOwnApp.map(({ emoji, title, desc }) => (
                <div key={title} className="border-2 border-gray-800 p-5 hover:border-[#FFE234] transition-colors">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold text-[#FFFBF0] mb-2">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Ce qu&apos;inclut votre <span className="bg-[#FFE234] px-2 brutal-border">application restaurant</span></h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <CheckCircle2 size={18} className="text-[#FF6B35] mb-3" />
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back-office */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px] border-b-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Un <span className="bg-[#FFE234] px-2 brutal-border">panel admin</span> pensé pour le service</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Pendant le rush, vous n&apos;avez pas le temps de chercher un bouton. Le back-office va droit à l&apos;essentiel.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Les commandes en temps réel</h3>
                <p className="text-gray-700 leading-relaxed">
                  Chaque nouvelle commande sonne sur la tablette ou le téléphone du restaurant. Vous l&apos;acceptez,
                  indiquez le temps de préparation, puis la passez en « prête » : le client est prévenu automatiquement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">La maîtrise de votre charge</h3>
                <p className="text-gray-700 leading-relaxed">
                  Plat en rupture, cuisine débordée ou fermeture exceptionnelle : vous masquez un plat ou suspendez les
                  commandes en un clic, et vous les réouvrez aussi vite.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Votre fichier clients et vos chiffres</h3>
                <p className="text-gray-700 leading-relaxed">
                  Historique des commandes, plats les plus vendus, chiffre d&apos;affaires par jour et liste de vos clients :
                  des données qui vous appartiennent, au lieu de rester chez une plateforme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Faire revenir les clients */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Faites <span className="bg-[#FFE234] px-2 brutal-border">revenir vos clients</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Une application installée sur le téléphone de vos clients, c&apos;est une vitrine qu&apos;ils voient tous les jours.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {growth.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <CheckCircle2 size={18} className="text-[#FF6B35] mb-3" />
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Combien économisez-vous ?</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Commission Uber Eats évitée", value: "20–30%", sub: "par commande passée dans votre app" },
                { label: "Amortissement moyen", value: "2 mois", sub: "pour un restaurant actif" },
                { label: "Économie annuelle estimée", value: "2 000–8 000€", sub: "selon le volume" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="border-2 border-gray-800 p-5 hover:border-[#FFE234] transition-colors">
                  <p className="text-3xl font-bold text-[#FFE234] mb-1">{value}</p>
                  <p className="text-sm text-[#FFFBF0] font-bold">{label}</p>
                  <p className="text-xs text-gray-400 mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes : application mobile pour restaurant</h2>
            <div className="flex flex-col gap-3">
              {faq.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Lancez l&apos;app de votre restaurant</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 24h · Sans engagement · Basé à Brest</p>
            </div>
            <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2">
              Demander un devis <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <RelatedArticles service="restaurant" />

        <Contact />

      </main>
      <Footer />
    </>
  );
}
