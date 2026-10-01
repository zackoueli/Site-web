import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import Contact from "@/components/Contact";
import FAQItem from "@/components/FAQItem";
import { Dumbbell, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile salle de sport & fitness | BreizhApp",
  description:
    "Développeur freelance à Brest, je crée l'app de votre salle de sport : réservation de cours, abonnements en ligne, suivi d'entraînement. Devis gratuit 24h.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/salle-de-sport" },
  openGraph: {
    title: "Application mobile salle de sport & fitness | BreizhApp",
    description:
      "Développeur freelance à Brest, je crée l'app de votre salle de sport : réservation de cours, abonnements en ligne, suivi d'entraînement. Devis gratuit 24h.",
    url: "https://breizhapp.tech/services/secteur/salle-de-sport",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Combien coûte une application pour une salle de sport ?",
    a: "Une application iOS & Android avec réservation de cours, abonnements et espace membre démarre à 4 000 €. Un site web avec planning et réservation en ligne démarre à 1 500 €. Le prix dépend des fonctionnalités (suivi d'entraînement, badge d'accès, plusieurs salles). Devis détaillé sous 24h.",
  },
  {
    q: "J'utilise déjà un logiciel de gestion de salle, pourquoi une app sur mesure ?",
    a: "Les logiciels du marché fonctionnent par abonnement mensuel et proposent la même application à toutes les salles, avec votre logo. Une application sur mesure suit vos règles (cours, crédits, niveaux), porte vraiment votre marque et vous appartient. Si votre logiciel propose une API, les deux peuvent être connectés.",
  },
  {
    q: "Mes membres peuvent-ils payer et renouveler leur abonnement dans l'app ?",
    a: "Oui. Abonnement mensuel, carte de 10 séances ou offre annuelle : le paiement passe par Stripe (carte, Apple Pay, Google Pay, prélèvement SEPA). Le membre retrouve son historique et ses factures dans son espace, et je ne prends aucune commission sur vos ventes.",
  },
  {
    q: "L'application peut-elle servir de badge d'accès ?",
    a: "Oui : chaque membre dispose d'un QR code personnel dans l'app, contrôlé à l'accueil ou par une borne. Si votre salle a déjà un système d'accès, on vérifie ensemble s'il peut être relié à l'application.",
  },
  {
    q: "Comment gérer les cours complets et les absences ?",
    a: "Quand un cours est complet, le membre s'inscrit en liste d'attente et reçoit une notification dès qu'une place se libère. Vous fixez un délai d'annulation, et un rappel est envoyé avant chaque cours pour limiter les absences.",
  },
  {
    q: "Le suivi d'entraînement est-il vraiment utile ?",
    a: "C'est ce qui fait ouvrir l'application tous les jours : vos membres notent leurs séances, voient leur progression et suivent les programmes de vos coachs. Sans ça, ils le font sur une autre application, et votre app ne sert qu'à réserver.",
  },
  {
    q: "Comment faire installer l'application à mes membres ?",
    a: "Un QR code à l'accueil et dans les vestiaires, un lien dans l'email de bienvenue, et quelques secondes d'explication par l'équipe au moment de l'inscription. Une version web est aussi possible pour ceux qui ne veulent rien installer.",
  },
  {
    q: "En combien de temps l'application est-elle prête ?",
    a: "Entre 4 et 8 semaines pour une application complète avec réservation et abonnements. Un site avec planning et réservation en ligne se livre en 2 à 4 semaines.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://breizhapp.tech/services/secteur/salle-de-sport#service",
      name: "Application mobile salle de sport & fitness",
      description:
        "Création d'application mobile et de site web sur mesure pour salles de sport, studios fitness, yoga et boxe : réservation de cours, abonnements, badge d'accès, suivi d'entraînement.",
      provider: { "@id": "https://breizhapp.tech/#business" },
      areaServed: [{ "@type": "City", name: "Brest" }, { "@type": "AdministrativeArea", name: "Bretagne" }, { "@type": "Country", name: "France" }],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://breizhapp.tech/services/application-mobile" },
        { "@type": "ListItem", position: 3, name: "Application mobile salle de sport", item: "https://breizhapp.tech/services/secteur/salle-de-sport" },
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

const memberFeatures = [
  { title: "Réservation de cours", desc: "Planning filtrable par cours, coach ou horaire, réservation en un geste et places restantes en direct." },
  { title: "Liste d'attente", desc: "Cours complet ? Le membre est prévenu par notification dès qu'une place se libère." },
  { title: "Badge d'accès", desc: "Un QR code personnel dans le téléphone remplace la carte plastique oubliée dans le vestiaire." },
  { title: "Abonnements en ligne", desc: "Achat, renouvellement et carte de séances payés dans l'app, avec l'historique et les factures." },
  { title: "Notifications", desc: "Rappel avant le cours, cours annulé, nouvelle offre ou fermeture exceptionnelle." },
  { title: "Espace membre", desc: "Profil, abonnement en cours, réservations passées et préférences de notification." },
];

const training = [
  { title: "Carnet de séances", desc: "Charges, séries et répétitions notées pendant l'entraînement, avec la séance précédente affichée à côté." },
  { title: "Courbes de progression", desc: "Record par exercice et évolution semaine après semaine : de quoi motiver à revenir." },
  { title: "Minuteur de repos", desc: "Le temps de récupération entre deux séries, réglable en un geste." },
  { title: "Programmes de vos coachs", desc: "Vos coachs publient leurs programmes et leurs vidéos d'exercices, directement dans l'app." },
  { title: "Défis entre membres", desc: "Classements, badges et défis du mois pour créer une vraie communauté autour de votre salle." },
];

const managerFeatures = [
  { title: "Fréquentation en temps réel", desc: "Nombre de membres présents, heures de pointe et taux de remplissage de chaque cours." },
  { title: "Planning et coachs", desc: "Cours, capacités, salles et coachs gérés en quelques clics, sans refaire l'affichage papier." },
  { title: "Communication directe", desc: "Un message à tous les membres en quelques secondes, ou seulement à ceux d'un cours." },
  { title: "Ventes et abonnements", desc: "Abonnements actifs, renouvellements à venir et chiffre d'affaires, sur un seul tableau de bord." },
];

export default function SalleDesSportPage() {
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
          <span className="text-black font-bold">Application mobile salle de sport</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-12 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#00D4AA] brutal-border p-3 shrink-0">
                  <Dumbbell size={32} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">Application mobile pour salle de sport et fitness</h1>
                  <p className="text-xl font-bold text-gray-500 mt-1">Réservation de cours · Abonnements · Suivi d&apos;entraînement</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
                Votre propre outil, à votre nom : un site web, une application mobile iOS/Android ou les deux. Vos
                membres réservent leurs cours, paient leur abonnement, entrent avec leur téléphone et suivent leurs
                séances. Vous pilotez tout depuis un tableau de bord, sans abonnement à un logiciel générique.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                  Demander un devis gratuit
                </a>
                <Link href="/blog/application-mobile-salle-sport-fitness" className="brutal-btn bg-[#00D4AA] text-[#0A0A0A] px-8 py-4">
                  Guide app fitness →
                </Link>
              </div>
            </div>

            {/* Aperçu illustratif d'écran */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-[280px] rounded-[40px] border-[3px] border-black bg-[#111] p-2.5 shadow-[6px_6px_0_#0A0A0A]">
                <div className="rounded-[32px] bg-[#FFFBF0] overflow-hidden">
                  <div className="bg-[#0A0A0A] text-[#FFFBF0] px-5 pt-6 pb-4">
                    <p className="mono text-[10px] text-[#00D4AA] font-bold">MARDI 14 OCTOBRE</p>
                    <p className="text-xl font-bold">Cours du jour</p>
                  </div>
                  <div className="p-3 flex flex-col gap-2">
                    {[
                      { time: "07:00", name: "Cross training", coach: "Léa", spots: "4 places", full: false },
                      { time: "12:15", name: "Yoga vinyasa", coach: "Tom", spots: "Complet", full: true },
                      { time: "18:30", name: "HIIT", coach: "Léa", spots: "2 places", full: false },
                      { time: "19:30", name: "Boxe débutant", coach: "Karim", spots: "7 places", full: false },
                    ].map(({ time, name, coach, spots, full }) => (
                      <div key={time} className="brutal-border bg-white px-3 py-2 flex items-center justify-between gap-2">
                        <div>
                          <p className="mono text-[10px] text-gray-400 font-bold">{time} · {coach}</p>
                          <p className="text-sm font-bold">{name}</p>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-1 border-2 border-black ${full ? "bg-white" : "bg-[#00D4AA]"}`}>
                          {full ? "Liste d'attente" : spots}
                        </span>
                      </div>
                    ))}
                    <div className="brutal-border bg-[#FFE234] px-3 py-2 mt-1">
                      <p className="mono text-[10px] font-bold">RECORD PERSONNEL</p>
                      <p className="text-sm font-bold">Squat : 92,5 kg (+5 kg)</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center max-w-xs">Aperçu illustratif d&apos;une application de salle de sport.</p>
            </div>
          </div>
        </section>

        {/* En bref */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-10">
            <div className="border-l-4 border-[#FFE234] pl-6">
              <p className="mono text-sm font-bold text-[#FFE234] mb-4">EN BREF</p>
              <p className="text-gray-300 leading-relaxed">
                Je crée des applications mobiles et des sites web sur mesure pour les salles de sport, studios de
                fitness, yoga, pilates, boxe et cross training : réservation de cours, abonnements en ligne, badge
                d&apos;accès, suivi d&apos;entraînement et tableau de bord pour le gérant. Je m&apos;appelle Enzo,
                développeur freelance basé à Brest, et je travaille avec des salles partout en France. Un site avec
                planning et réservation démarre à 1 500 €, une application iOS & Android à 4 000 €. Aucune commission
                sur vos abonnements, et l&apos;application comme votre fichier membres vous appartiennent.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Livraison</p>
                <p className="text-xl font-bold text-white">4 à 8 semaines</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Budget indicatif</p>
                <p className="text-xl font-bold text-white">Dès 1 500 €</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Commission sur vos abonnements</p>
                <p className="text-xl font-bold text-white">0 %</p>
              </div>
            </div>
          </div>
        </section>

        {/* Côté membres */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Côté <span className="bg-[#FFE234] px-2 brutal-border">membres</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Tout ce qu&apos;un membre fait aujourd&apos;hui à l&apos;accueil ou par téléphone, il le fait dans votre application.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {memberFeatures.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <CheckCircle2 size={18} className="text-[#00D4AA] mb-3" />
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suivi d'entraînement */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-2">Le suivi d&apos;entraînement, dans votre app</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Vos membres notent déjà leurs séances quelque part : sur Strong, Hevy, un tableur ou les notes de leur
              téléphone. Autant qu&apos;ils le fassent dans votre application, à vos couleurs, avec les programmes de
              vos coachs. C&apos;est ce qui la fait ouvrir tous les jours, pas seulement pour réserver.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {training.map(({ title, desc }) => (
                <div key={title} className="border-2 border-gray-800 p-5 hover:border-[#00D4AA] transition-colors">
                  <h3 className="font-bold text-[#FFFBF0] mb-1">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Côté gérant */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Côté <span className="bg-[#FFE234] px-2 brutal-border">gérant</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Moins de temps à l&apos;accueil sur les inscriptions et les questions, plus de temps sur le terrain avec vos membres.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {managerFeatures.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <CheckCircle2 size={18} className="text-[#00D4AA] mb-3" />
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types de structure */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Pour quel type de structure ?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { emoji: "🏋️", title: "Salle de musculation", desc: "Badge d'accès, programmes de musculation, suivi des charges et de la progression." },
                { emoji: "🧘", title: "Studio yoga / pilates", desc: "Réservation de cours, listes d'attente, cartes de séances, vidéos d'entraînement." },
                { emoji: "🥊", title: "Salle de boxe / arts martiaux", desc: "Cours par niveau, passages de grade, événements et compétitions." },
                { emoji: "🚴", title: "Studio cycling / HIIT / cross training", desc: "Réservation de vélos ou de places, WOD du jour, classements et défis." },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="border-2 border-gray-800 p-5 hover:border-[#FFE234] hover:bg-[#FFE234] hover:text-[#0A0A0A] transition-all group">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold text-[#FFFBF0] group-hover:text-[#0A0A0A] mb-1">{title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-700 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Site, app ou les deux */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-b-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Site web, <span className="bg-[#FFE234] px-2 brutal-border">application</span> ou les deux ?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Je vous conseille la formule utile pour votre salle, pas la plus chère.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Un site avec planning", desc: "Pour être trouvé sur Google, présenter vos cours et vos tarifs, et prendre les inscriptions en ligne. Dès 1 500 €." },
                { title: "Une application mobile", desc: "Pour le quotidien des membres : réservation, badge, abonnement, notifications et suivi d'entraînement. Dès 4 000 €." },
                { title: "Les deux, reliés", desc: "Le site attire de nouveaux membres, l'application les fait revenir. Un seul planning et un seul tableau de bord." },
              ].map(({ title, desc }) => (
                <div key={title} className="brutal-border brutal-shadow bg-white p-5">
                  <h3 className="font-bold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Comment <span className="bg-[#FFE234] px-2 brutal-border">ça se passe</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">Du premier échange à votre application en ligne, en 4 étapes.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "On échange", desc: "Vos cours, vos formules d'abonnement, votre fonctionnement. À la salle ou en visio." },
                { step: "02", title: "Devis et maquette", desc: "Devis détaillé sous 24h, puis une maquette aux couleurs de votre salle." },
                { step: "03", title: "Développement", desc: "Je construis l'outil avec votre vrai planning et vos vraies formules." },
                { step: "04", title: "Mise en ligne", desc: "Publication, QR codes pour l'accueil, formation de l'équipe au tableau de bord." },
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

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes : application salle de sport</h2>
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
              <h2 className="text-2xl font-bold">Lancez l&apos;app de votre salle de sport</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 24h · Basé à Brest</p>
            </div>
            <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2">
              Demander un devis <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <RelatedArticles service="salle-de-sport" />

        <Contact />

      </main>
      <Footer />
    </>
  );
}
