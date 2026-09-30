import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import Contact from "@/components/Contact";
import FAQItem from "@/components/FAQItem";
import PhoneDemo from "@/components/PhoneDemo";
import PhotoCarousel from "@/components/PhotoCarousel";
import { BedDouble, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile hôtel & livret d'accueil digital | BreizhApp",
  description:
    "Développeur freelance à Brest, je crée l'app de votre hôtel ou gîte : réservation directe, livret d'accueil digital, conciergerie. Devis gratuit sous 24h.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/hotel" },
  openGraph: {
    title: "Application mobile hôtel & livret d'accueil digital | BreizhApp",
    description:
      "Développeur freelance à Brest, je crée l'app de votre hôtel ou gîte : réservation directe, livret d'accueil digital, conciergerie. Devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/secteur/hotel",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Combien coûte une application pour un hôtel ?",
    a: "Une application mobile iOS & Android avec réservation directe et livret d'accueil démarre à 4 000 €. Si vous avez d'abord besoin d'un site web avec réservation en ligne, comptez à partir de 1 500 €. Le prix dépend des fonctionnalités (conciergerie, services payants, plusieurs établissements). Devis détaillé sous 24h.",
  },
  {
    q: "Qu'est-ce qu'un livret d'accueil digital ?",
    a: "C'est la version numérique du classeur posé dans la chambre : codes wifi, règles de la maison, guide des équipements, recommandations locales et contacts utiles. Vos voyageurs y accèdent depuis leur téléphone en scannant un QR code, sans rien installer, ou directement dans votre application.",
  },
  {
    q: "Livret d'accueil digital ou application mobile : quelle différence ?",
    a: "Le livret d'accueil est une page web consultable immédiatement, idéale pendant le séjour. L'application va plus loin : réservation directe, conciergerie, notifications et fidélisation entre deux séjours. Beaucoup d'hébergements combinent les deux.",
  },
  {
    q: "L'application peut-elle remplacer Booking.com ?",
    a: "Pas complètement, et ce n'est pas le but : Booking reste utile pour être découvert. L'application sert à faire réserver en direct les clients qui vous connaissent déjà, sans les 15 à 18 % de commission, et à garder le contact avec eux après leur séjour.",
  },
  {
    q: "Est-ce compatible avec mon logiciel de gestion (PMS) ou mon channel manager ?",
    a: "Si votre logiciel propose une API, l'application peut s'y connecter pour les disponibilités et les réservations. Sinon, elle fonctionne à côté et vous recevez les réservations dans votre panel admin. On vérifie ensemble ce que votre outil permet lors du premier échange.",
  },
  {
    q: "Une application est-elle utile pour une conciergerie de locations saisonnières ?",
    a: "Oui, surtout pour gérer plusieurs biens : un livret d'accueil par logement, des instructions d'arrivée et de départ sans contact, des messages automatiques (code d'accès, rappel de départ) et un seul panel pour tous vos voyageurs.",
  },
  {
    q: "Combien de temps pour créer une application hôtel ?",
    a: "Comptez 3 à 5 semaines pour une application complète avec réservation directe et conciergerie. Un livret d'accueil digital ou un site avec réservation peut être livré en 2 à 3 semaines.",
  },
  {
    q: "Comment mesurer les résultats ?",
    a: "Le panel admin suit les réservations directes, le chiffre d'affaires des services vendus (petit-déjeuner, transferts, activités) et l'utilisation du livret. Vous voyez concrètement ce qui passe par votre outil plutôt que par les plateformes.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://breizhapp.tech/services/secteur/hotel#service",
      name: "Application mobile hôtel & livret d'accueil digital",
      description:
        "Création d'application mobile, de site web et de livret d'accueil digital pour hôtels, chambres d'hôtes, gîtes et conciergeries : réservation directe, conciergerie, notifications push.",
      provider: { "@id": "https://breizhapp.tech/#business" },
      areaServed: [{ "@type": "City", name: "Brest" }, { "@type": "AdministrativeArea", name: "Bretagne" }, { "@type": "Country", name: "France" }],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://breizhapp.tech/services/application-mobile" },
        { "@type": "ListItem", position: 3, name: "Application mobile hôtel", item: "https://breizhapp.tech/services/secteur/hotel" },
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

const challenges = [
  { title: "Des commissions qui pèsent", desc: "15 à 18 % sur Booking, jusqu'à 16 % sur Airbnb : sur une saison, c'est une part importante de la marge qui part aux plateformes." },
  { title: "Peu de réservations en direct", desc: "Même vos clients fidèles repassent par une plateforme, faute d'un moyen simple de réserver chez vous." },
  { title: "Une réception submergée", desc: "Code wifi, heure du petit-déjeuner, parking : les mêmes questions reviennent toute la journée." },
  { title: "Des demandes perdues la nuit", desc: "Une question à 23h, une demande de transfert le dimanche : sans outil, elles restent sans réponse." },
  { title: "Aucun lien après le séjour", desc: "Une fois le client parti, vous n'avez aucun moyen de le recontacter pour sa prochaine venue." },
];

const features = [
  { title: "Réservation directe", desc: "Vos clients réservent chez vous, dans l'app ou sur votre site, sans commission Booking ni Airbnb." },
  { title: "Livret d'accueil digital", desc: "Wifi, équipements, règles, recommandations locales : toujours à jour, accessible par QR code." },
  { title: "Arrivée et départ sans contact", desc: "Instructions d'accès et code envoyés automatiquement, rappel de l'heure de départ." },
  { title: "Services et conciergerie", desc: "Petit-déjeuner, transferts, activités : vos clients les commandent et les paient depuis l'app." },
  { title: "Notifications push", desc: "Chambre prête, offre spa, événement local : le bon message au bon moment du séjour." },
  { title: "Panel admin", desc: "Contenus, services, réservations et voyageurs gérés depuis un seul tableau de bord." },
];

const bunklyPhotos = [
  { src: "/services/application-mobile/app-mobile-2.jpg", alt: "Livret d'accueil Bunkly sur iPhone : accès, horaires, WiFi et marées" },
  { src: "/services/application-mobile/app-mobile-3.jpg", alt: "Services proposés aux voyageurs avec achat du petit-déjeuner dans le livret" },
  { src: "/services/application-mobile/app-mobile-5.jpg", alt: "Présentation du logement et message de bienvenue des hôtes" },
  { src: "/services/application-mobile/app-mobile-6.jpg", alt: "Livret d'accueil avec itinéraire Google Maps et Waze" },
  { src: "/services/application-mobile/app-mobile-1.jpg", alt: "Livret d'accueil digital : accès, horaires, WiFi et météo du logement" },
];

const pitfalls = [
  { title: "Tout miser sur les plateformes", desc: "Elles apportent de la visibilité, mais un hébergement qui n'a aucun canal direct en dépend entièrement." },
  { title: "Une app vide pendant le séjour", desc: "Si l'application ne sert qu'à réserver, personne ne l'ouvre. C'est le livret et les services qui la rendent utile." },
  { title: "Un site pensé pour l'ordinateur", desc: "La majorité des voyageurs réservent et consultent depuis leur téléphone : tout doit être pensé mobile d'abord." },
  { title: "Un outil que vous ne pouvez pas modifier", desc: "Horaires, tarifs, recommandations : si chaque changement passe par un prestataire, l'outil n'est jamais à jour." },
];

export default function HotelPage() {
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
          <span className="text-black font-bold">Application mobile hôtel</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-12 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#7C3AED] brutal-border p-3 shrink-0">
                  <BedDouble size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">Application mobile pour hôtel et hébergement</h1>
                  <p className="text-xl font-bold text-gray-500 mt-1">Réservation directe · Livret d&apos;accueil · Conciergerie</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
                Votre propre outil, à votre nom : un site web, une application mobile iOS/Android ou les deux. Vos
                clients réservent en direct, trouvent toutes les infos du séjour dans leur livret d&apos;accueil digital et
                commandent vos services. Vous gérez tout depuis un panel admin, sans commission Booking.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                  Demander un devis gratuit
                </a>
                <Link href="/blog/application-mobile-hotel-hebergement" className="brutal-btn bg-[#7C3AED] text-white px-8 py-4">
                  Guide app hôtel →
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <PhoneDemo
                src="https://app.bunkly.co/b/villa-les-chataigniers"
                title="Démo de livret d'accueil digital Bunkly pour une location de vacances"
              />
              <p className="text-xs text-gray-500 text-center max-w-xs">
                Livret d&apos;accueil digital Bunkly, développé par BreizhApp. Naviguez librement.
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
                Je crée des applications mobiles, des sites web et des livrets d&apos;accueil digitaux pour les hôtels
                indépendants, chambres d&apos;hôtes, gîtes et conciergeries de locations saisonnières : réservation
                directe, conciergerie, services payants et notifications, avec un panel admin pour tout gérer. Je
                m&apos;appelle Enzo, développeur freelance basé à Brest, et j&apos;ai conçu Bunkly, une plateforme de
                livrets d&apos;accueil utilisée par des hébergeurs. Un site avec réservation démarre à 1 500 €, une
                application iOS & Android à 4 000 €. Aucune commission sur vos réservations, et l&apos;outil comme vos
                données clients vous appartiennent.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Livraison</p>
                <p className="text-xl font-bold text-white">2 à 5 semaines</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Budget indicatif</p>
                <p className="text-xl font-bold text-white">Dès 1 500 €</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Commission sur vos réservations</p>
                <p className="text-xl font-bold text-white">0 %</p>
              </div>
            </div>
          </div>
        </section>

        {/* Défis */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Les défis des <span className="bg-[#FFE234] px-2 brutal-border">hôteliers indépendants</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Ce qu&apos;on retrouve chez la plupart des hébergements, de la chambre d&apos;hôtes à l&apos;hôtel de 40 chambres.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {challenges.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-8">Ce que votre application change</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map(({ title, desc }) => (
                <div key={title} className="border-2 border-gray-800 p-5 hover:border-[#7C3AED] transition-colors">
                  <CheckCircle2 size={18} className="text-[#7C3AED] mb-3" />
                  <h3 className="font-bold text-[#FFFBF0] mb-1">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Livret d'accueil digital */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="mono text-sm font-bold text-[#7C3AED] mb-3">{"// livret d'accueil digital"}</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Un <span className="bg-[#FFE234] px-2 brutal-border">livret d&apos;accueil</span> qui travaille pour vous
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fini le classeur papier sur la table de chevet. En un scan, vos voyageurs trouvent le code wifi, le
                guide des équipements, les règles de la maison, vos adresses préférées et les instructions
                d&apos;arrivée et de départ.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Il peut aussi vendre : petit-déjeuner, transfert depuis la gare, panier local ou activité, commandés
                et payés directement dans le livret. C&apos;est ce que fait Bunkly, la plateforme de livrets
                d&apos;accueil que j&apos;ai développée.
              </p>
              <Link href="/portfolio/bunkly" className="brutal-btn bg-[#7C3AED] text-white px-6 py-3 inline-flex items-center gap-2">
                Voir l&apos;étude de cas Bunkly <ArrowRight size={16} />
              </Link>
            </div>
            <PhotoCarousel
              slides={bunklyPhotos}
              caption="Livrets d'accueil Bunkly utilisés par des locations de vacances."
            />
          </div>
        </section>

        {/* Site, app ou les deux */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px] border-b-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Site web, <span className="bg-[#FFE234] px-2 brutal-border">application</span> ou les deux ?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Je vous conseille la formule utile pour votre établissement, pas la plus chère.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Un site avec réservation", desc: "Pour être trouvé sur Google et recevoir des réservations directes, sans rien installer côté client. Dès 1 500 €." },
                { title: "Une application mobile", desc: "Pour accompagner le séjour et fidéliser : livret, services, notifications, et réservation de la prochaine venue. Dès 4 000 €." },
                { title: "Une plateforme multi-biens", desc: "Pour les conciergeries : un livret et des messages automatiques par logement, pilotés depuis un seul panel." },
              ].map(({ title, desc }) => (
                <div key={title} className="brutal-border brutal-shadow bg-white p-5">
                  <h3 className="font-bold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              Pour les hôtels, chambres d&apos;hôtes et <span className="bg-[#FFE234] px-2 brutal-border">locations saisonnières</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
              <p>
                Hôtel indépendant, chambre d&apos;hôtes, gîte ou camping : un outil à votre nom vous permet de reprendre
                la main sur la relation client. Réservation directe sans commission, communication avant, pendant et
                après le séjour, et un livret d&apos;accueil toujours à jour.
              </p>
              <p>
                Pour les <strong>conciergeries de location</strong> qui gèrent plusieurs biens, l&apos;outil centralise
                tous les voyageurs : codes d&apos;accès envoyés automatiquement, instructions sans contact et un livret
                propre à chaque logement, le tout piloté depuis un seul panel d&apos;administration.
              </p>
            </div>
          </div>
        </section>

        {/* ROI */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Ce que vous économisez</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Commission Booking.com évitée", value: "15–18%", sub: "par réservation directe" },
                { label: "Commission Airbnb évitée", value: "3–16%", sub: "par réservation directe" },
                { label: "Fidélisation client", value: "+30%", sub: "de réservations directes" },
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

        {/* Méthode */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Ma méthode en <span className="bg-[#FFE234] px-2 brutal-border">4 étapes</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">Du premier échange à la mise en ligne, sans intermédiaire.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Cadrage", desc: "Votre établissement, vos canaux de réservation, vos services. Devis détaillé sous 24h." },
                { step: "02", title: "Design", desc: "Maquettes aux couleurs de votre établissement, pensées pour le téléphone d'abord." },
                { step: "03", title: "Développement", desc: "Construction de l'outil avec vos vrais contenus, points d'avancement réguliers." },
                { step: "04", title: "Mise en ligne", desc: "Tests, publication, QR codes pour vos chambres et formation au panel admin." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="brutal-border bg-white p-5">
                  <p className="mono text-xs font-bold text-gray-400 mb-2">{step}</p>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pièges à éviter */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px] border-b-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Les <span className="bg-[#FFE234] px-2 brutal-border">pièges à éviter</span></h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {pitfalls.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes : application mobile hôtel</h2>
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
              <h2 className="text-2xl font-bold">Lancez l&apos;app de votre hébergement</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 24h · Basé à Brest</p>
            </div>
            <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2">
              Demander un devis <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <RelatedArticles service="hotel" />

        <Contact />

      </main>
      <Footer />
    </>
  );
}
