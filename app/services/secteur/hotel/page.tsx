import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import Contact from "@/components/Contact";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile hôtel & livret d'accueil digital | BreizhApp",
  description:
    "Application mobile et livret d'accueil digital pour hôtels, chambres d'hôtes, gîtes et locations saisonnières : réservation en ligne, conciergerie digitale, notifications push. Développeur freelance Brest.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/hotel" },
  openGraph: {
    title: "Application mobile hôtel & livret d'accueil digital sur mesure",
    description:
      "App hôtel iOS & Android + livret d'accueil digital : réservation directe, conciergerie, notifications. Zéro commission Booking. Freelance à Brest, devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/secteur/hotel",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://breizhapp.tech/services/secteur/hotel#service",
      name: "Application mobile hôtel & hébergement iOS & Android",
      description:
        "Création d'application mobile pour hôtels, chambres d'hôtes et gîtes : réservation directe, conciergerie digitale, notifications push.",
      provider: { "@id": "https://breizhapp.tech/#business" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://breizhapp.tech/services/application-mobile" },
        { "@type": "ListItem", position: 3, name: "App hôtel", item: "https://breizhapp.tech/services/secteur/hotel" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce qu'un livret d'accueil digital pour hôtel ou location ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "C'est la version numérique du classeur papier posé dans la chambre : codes wifi, règles de la maison, guide des équipements, recommandations locales (restaurants, activités, transports) et contacts utiles. Vos voyageurs y accèdent depuis leur téléphone, sans rien installer, en scannant un QR code ou via votre application.",
          },
        },
        {
          "@type": "Question",
          name: "Livret d'accueil digital ou application mobile : quelle différence ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le livret d'accueil digital est une page web consultable immédiatement, idéale pour informer vos voyageurs pendant leur séjour. L'application mobile va plus loin : réservation directe, conciergerie interactive, notifications push et fidélisation entre deux séjours. Beaucoup d'hôtels et de conciergeries de location combinent les deux.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on intégrer un livret d'accueil existant (Bunkly, etc.) dans notre app hôtel ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. Le livret d'accueil peut être intégré directement dans votre application (via webview ou API) ou rester accessible en marque blanche à part. Je m'adapte à l'outil que vous utilisez déjà ou j'en construis un sur mesure selon vos besoins.",
          },
        },
        {
          "@type": "Question",
          name: "Une application mobile est-elle utile pour une conciergerie de locations saisonnières ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, particulièrement pour gérer plusieurs biens : un livret d'accueil digital par logement, des instructions de check-in/check-out sans contact, des notifications automatiques (code d'accès, rappel de départ) et une conciergerie centralisée pour tous vos voyageurs.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps pour créer une app hôtel avec livret d'accueil digital ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Comptez 3 à 5 semaines pour une application hôtel complète avec réservation directe et conciergerie digitale. L'intégration d'un livret d'accueil existant ou une version simplifiée peut être livrée en 2 à 3 semaines.",
          },
        },
      ],
    },
  ],
};

const features = [
  { title: "Réservation directe", desc: "Vos clients réservent directement dans l'app — zéro commission Booking ou Airbnb." },
  { title: "Conciergerie digitale", desc: "Recommandations locales, services en chambre, demandes spéciales — tout depuis l'app." },
  { title: "Check-in / Check-out", desc: "Simplifiez l'arrivée et le départ avec des processus digitaux fluides." },
  { title: "Notifications push", desc: "Informez vos clients : heure de disponibilité de la chambre, offres spa, événements locaux." },
  { title: "Galerie & visites virtuelles", desc: "Présentez vos chambres et équipements avec photos optimisées et contenu dynamique." },
  { title: "iOS & Android", desc: "Application native sur l'App Store et Google Play, à votre nom et votre charte graphique." },
];

export default function HotelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/services/application-mobile" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-black font-bold">App hôtel</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#7C3AED] mb-4">// secteur hôtellerie & hébergement</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Application mobile<br />
              <span className="bg-[#FFE234] brutal-border px-2">hôtel & hébergement</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Reprenez vos réservations directes face à Booking.com et Airbnb. Votre propre application iOS & Android
              avec conciergerie digitale, réservation sans commission et notifications push personnalisées.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                Devis gratuit sous 24h
              </a>
              <Link href="/blog/application-mobile-hotel-hebergement" className="brutal-btn bg-[#7C3AED] text-white px-8 py-4">
                Guide app hôtel →
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ Zéro commission Booking</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Conciergerie digitale</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Basé à Brest</span>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Fonctionnalités <span className="bg-[#FFE234] px-2 brutal-border">incluses</span></h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <CheckCircle2 size={18} className="text-[#7C3AED] mb-3" />
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Livret d'accueil digital - démo iframe */}
        <section className="py-16 px-4 bg-white brutal-border border-t-[3px] border-b-[3px]">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="mono text-sm font-bold text-[#7C3AED] mb-3">// livret d&apos;accueil digital</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Votre <span className="bg-[#FFE234] px-2 brutal-border">livret d&apos;accueil digital</span> intégré à l&apos;app
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fini le classeur papier posé sur la table de chevet. Vos voyageurs accèdent en un scan à
                toutes les informations utiles : codes wifi, guide des équipements, règles de la maison,
                recommandations de restaurants et d&apos;activités locales, instructions de check-in et check-out.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ce livret d&apos;accueil numérique peut être intégré directement dans votre application mobile
                hôtel ou votre app de conciergerie pour locations saisonnières — une seule expérience,
                accessible sans rien installer.
              </p>
              <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
                <span className="brutal-border px-3 py-1 bg-[#FFFBF0]">✓ Sans contact</span>
                <span className="brutal-border px-3 py-1 bg-[#FFFBF0]">✓ Multi-hébergements</span>
                <span className="brutal-border px-3 py-1 bg-[#FFFBF0]">✓ Accessible par QR code</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="brutal-border brutal-shadow bg-[#0A0A0A] p-3 rounded-[2rem]">
                <iframe
                  src="https://app.bunkly.co/b/NAvq6yDTOe"
                  title="Démo livret d'accueil digital pour hôtel et location"
                  className="rounded-[1.5rem] border-0"
                  style={{ width: 320, height: 640, maxWidth: "100%" }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contenu SEO - locations saisonnières & conciergerie */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              App mobile pour hôtels, chambres d&apos;hôtes et <span className="bg-[#FFE234] px-2 brutal-border">locations saisonnières</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
              <p>
                Que vous gériez un hôtel indépendant, une chambre d&apos;hôtes, un gîte ou plusieurs
                logements en location saisonnière, une application mobile dédiée vous permet de reprendre
                la main sur la relation client : réservation directe sans commission, communication avant,
                pendant et après le séjour, et un livret d&apos;accueil digital toujours à jour.
              </p>
              <p>
                Pour les <strong>conciergeries de location</strong> qui gèrent plusieurs biens, l&apos;application
                centralise l&apos;ensemble des voyageurs : codes d&apos;accès envoyés automatiquement, instructions
                de check-in/check-out sans contact, et un livret d&apos;accueil numérique propre à chaque
                logement — le tout piloté depuis un seul panel d&apos;administration.
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
                { label: "Commission Booking.com évitée", value: "15–18%", sub: "par réservation" },
                { label: "Commission Airbnb évitée", value: "3–16%", sub: "par réservation" },
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


        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes</h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  q: "Qu'est-ce qu'un livret d'accueil digital pour hôtel ou location ?",
                  a: "C'est la version numérique du classeur papier posé dans la chambre : codes wifi, règles de la maison, guide des équipements, recommandations locales et contacts utiles. Vos voyageurs y accèdent depuis leur téléphone, sans rien installer, en scannant un QR code ou via votre application.",
                },
                {
                  q: "Livret d'accueil digital ou application mobile : quelle différence ?",
                  a: "Le livret d'accueil digital est une page consultable immédiatement, idéale pour informer vos voyageurs pendant leur séjour. L'application mobile va plus loin : réservation directe, conciergerie interactive, notifications push et fidélisation entre deux séjours.",
                },
                {
                  q: "Peut-on intégrer un livret d'accueil existant dans notre app hôtel ?",
                  a: "Oui. Le livret peut être intégré directement dans votre application ou rester accessible à part. Je m'adapte à l'outil que vous utilisez déjà ou j'en construis un sur mesure.",
                },
                {
                  q: "Une application mobile est-elle utile pour une conciergerie de locations saisonnières ?",
                  a: "Oui, particulièrement pour gérer plusieurs biens : un livret d'accueil digital par logement, des instructions de check-in/check-out sans contact, des notifications automatiques et une conciergerie centralisée pour tous vos voyageurs.",
                },
                {
                  q: "Combien de temps pour créer une app hôtel avec livret d'accueil digital ?",
                  a: "Comptez 3 à 5 semaines pour une application hôtel complète avec réservation directe et conciergerie digitale. L'intégration d'un livret existant peut être livrée en 2 à 3 semaines.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="brutal-border bg-white p-5">
                  <h3 className="font-bold mb-2">{q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                </div>
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
