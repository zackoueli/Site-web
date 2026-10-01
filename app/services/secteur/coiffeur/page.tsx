import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import Contact from "@/components/Contact";
import FAQItem from "@/components/FAQItem";
import PhoneDemo from "@/components/PhoneDemo";
import { Scissors, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile salon de coiffure iOS & Android | BreizhApp",
  description:
    "Développons une application mobile sur mesure pour votre salon de coiffure : réservation en ligne, programme de fidélité, notifications push.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/coiffeur" },
  openGraph: {
    title: "Application mobile salon de coiffure iOS & Android | BreizhApp",
    description:
      "Développons une application mobile sur mesure pour votre salon de coiffure : réservation en ligne, programme de fidélité, notifications push.",
    url: "https://breizhapp.tech/services/secteur/coiffeur",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Combien coûte une application pour un salon de coiffure ?",
    a: "Une application mobile iOS & Android avec réservation, fidélité et notifications démarre à 4 000 €. Si vous avez surtout besoin d'être trouvé sur Google avec la réservation en ligne, un site web sur mesure démarre à 1 500 €. Dans les deux cas, aucune commission sur vos rendez-vous. Devis détaillé sous 24h.",
  },
  {
    q: "Quelle est la différence avec Planity ?",
    a: "Planity est une plateforme : votre salon y apparaît au milieu des concurrents, et vous payez un abonnement tant que vous l'utilisez. Avec BreizhApp, vous obtenez une application à votre nom sur l'App Store et Google Play : vos clientes ne voient que votre salon, et vous êtes propriétaire du code et de votre fichier clients.",
  },
  {
    q: "L'application gère-t-elle plusieurs coiffeurs et leurs agendas ?",
    a: "Oui. Chaque coiffeur ou coloriste a son propre agenda et ses propres prestations. Une cliente peut choisir sa coiffeuse ou prendre le premier créneau libre, sans que les plannings se bloquent entre eux.",
  },
  {
    q: "Comment sont gérées les durées de prestation et les couleurs ?",
    a: "Chaque prestation a sa durée : une coupe homme ne prend pas le même créneau qu'une couleur avec mèches. Pour les colorations, vous pouvez exiger un test d'allergie quelques jours avant, et éviter les couleurs en fin de journée pour ne pas déborder.",
  },
  {
    q: "Comment limiter les rendez-vous non honorés ?",
    a: "Rappel automatique la veille par notification, délai d'annulation que vous fixez, et si vous le souhaitez un acompte en ligne pour les prestations longues. Quand une cliente annule, le créneau redevient réservable tout de suite.",
  },
  {
    q: "J'ai déjà un logiciel de caisse, est-ce compatible ?",
    a: "L'application gère la relation avec vos clientes (réservation, rappels, fidélité, promotions), votre logiciel continue de gérer la caisse. Si votre logiciel propose une API, les deux peuvent être connectés ; sinon ils fonctionnent côte à côte. On regarde ça ensemble lors du premier échange.",
  },
  {
    q: "L'application fonctionne-t-elle pour un barbershop ou plusieurs salons ?",
    a: "Oui. Barbiers, instituts de beauté, ongleries : le principe est le même. Et si vous avez plusieurs salons, la cliente choisit son établissement avant de réserver, chacun avec ses horaires et son équipe.",
  },
  {
    q: "En combien de temps l'application est-elle prête ?",
    a: "Entre 4 et 8 semaines pour une application complète avec réservation et fidélité. Un site web avec réservation en ligne se livre en 2 à 4 semaines.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://breizhapp.tech/services/secteur/coiffeur#service",
      name: "Application mobile salon de coiffure iOS & Android",
      description:
        "Création d'application mobile et de site web sur mesure pour salons de coiffure, barbiers et instituts de beauté : réservation en ligne, fidélité, notifications push. Alternative à Planity.",
      provider: { "@id": "https://breizhapp.tech/#business" },
      areaServed: [{ "@type": "City", name: "Brest" }, { "@type": "AdministrativeArea", name: "Bretagne" }, { "@type": "Country", name: "France" }],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://breizhapp.tech" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://breizhapp.tech/services/application-mobile" },
        { "@type": "ListItem", position: 3, name: "Application mobile salon de coiffure", item: "https://breizhapp.tech/services/secteur/coiffeur" },
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

const bookingSteps = [
  { step: "01", title: "La prestation", desc: "Coupe, brushing, couleur, balayage : la cliente choisit ce qu'elle veut, avec la durée et le prix affichés." },
  { step: "02", title: "Le coiffeur", desc: "Elle choisit sa coiffeuse habituelle ou le premier créneau disponible dans l'équipe." },
  { step: "03", title: "Le créneau", desc: "Seuls les créneaux assez longs pour la prestation choisie sont proposés, 24h/24." },
  { step: "04", title: "La confirmation", desc: "Confirmation immédiate, puis rappel automatique la veille du rendez-vous." },
];

const salonRules = [
  { title: "Une durée par prestation", desc: "Chaque prestation réserve le temps réel dont vous avez besoin, temps de pose compris." },
  { title: "Un agenda par coiffeur", desc: "Chaque membre de l'équipe a ses horaires, ses jours de repos et ses prestations." },
  { title: "Des règles pour les couleurs", desc: "Test d'allergie obligatoire avant une première coloration, pas de couleur en fin de journée." },
  { title: "Vos horaires et fermetures", desc: "Horaires par jour, pause déjeuner, congés et formations bloquent automatiquement l'agenda." },
  { title: "Votre politique d'annulation", desc: "Délai d'annulation, acompte en ligne pour les longues prestations si vous le souhaitez." },
  { title: "Les bonnes infos avant le rendez-vous", desc: "Longueur des cheveux, photo d'inspiration : vous savez à quoi vous attendre avant l'arrivée de la cliente." },
];

const features = [
  { title: "Réservation 24h/24", desc: "Vos clientes réservent depuis leur téléphone à n'importe quelle heure, vous recevez une notification immédiate." },
  { title: "Programme de fidélité", desc: "Carte de fidélité numérique, remises automatiques, offres d'anniversaire, sans carte papier à perdre." },
  { title: "Notifications push", desc: "Rappel de rendez-vous la veille, promotion sur les heures creuses, nouveau soin disponible." },
  { title: "Galerie & lookbook", desc: "Vos réalisations et les tendances de la saison, pour inspirer vos clientes et donner envie de réserver." },
  { title: "Carte des prestations", desc: "Toutes vos prestations et vos tarifs, à jour, consultables à tout moment." },
  { title: "Panel admin", desc: "Agenda, prestations, tarifs, équipe et clientes gérés depuis votre tableau de bord." },
];

const everyday = [
  "Des rendez-vous pris le soir et le dimanche, quand le salon est fermé.",
  "Moins d'appels à prendre les mains dans les cheveux d'une cliente.",
  "Un créneau annulé qui redevient réservable immédiatement.",
  "Une promotion envoyée le mardi matin pour remplir les heures creuses.",
  "Une carte de fidélité que vos clientes ne perdent plus.",
  "L'historique de chaque cliente : ses couleurs, ses prestations, ses habitudes.",
];

export default function CoiffeurPage() {
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
          <span className="text-black font-bold">Application mobile salon de coiffure</span>
        </nav>

        {/* Hero */}
        <section className="border-b-[3px] border-black py-12 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#FF6B9D] brutal-border p-3 shrink-0">
                  <Scissors size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">Application mobile salon de coiffure</h1>
                  <p className="text-xl font-bold text-gray-500 mt-1">Réservation en ligne · Fidélité · Notifications push</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
                Votre propre plateforme de réservation, à votre nom : un site web, une application mobile iOS/Android
                ou les deux. Vos clientes réservent en quelques gestes, cumulent leurs points de fidélité et reçoivent
                vos offres. Vous recevez les réservations sur un dashboard interne. Sans commission sur vos rendez-vous.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                  Demander un devis gratuit
                </a>
                <Link href="/blog/cout-reel-planity" className="brutal-btn bg-[#FF6B9D] text-white px-8 py-4">
                  Coût réel de Planity →
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <PhoneDemo
                src="https://coiffeur.breizhapp.tech/"
                title="Démo de site de salon de coiffure avec réservation en ligne"
              />
              <p className="text-xs text-gray-500 text-center max-w-xs">
                Démo d&apos;un salon de coiffure réalisé par BreizhApp. Naviguez librement.
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
                Je crée des applications mobiles et des sites web sur mesure pour les salons de coiffure, barbiers et
                instituts de beauté : réservation en ligne qui respecte les règles de votre salon, fidélité, rappels
                automatiques et notifications, avec un panel admin pour tout gérer. Je m&apos;appelle Enzo,
                développeur freelance basé à Brest, et je travaille avec des salons partout en France. Un site avec
                réservation démarre à 1 500 €, une application iOS & Android à 4 000 €. Aucune
                commission sur vos rendez-vous, et l&apos;outil comme le fichier clients vous appartiennent.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Livraison</p>
                <p className="text-xl font-bold text-white">2 à 8 semaines</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Budget indicatif</p>
                <p className="text-xl font-bold text-white">Dès 1 500 €</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="mono text-xs font-bold text-gray-500 uppercase mb-1">Commission sur vos rendez-vous</p>
                <p className="text-xl font-bold text-white">0 %</p>
              </div>
            </div>
          </div>
        </section>

        {/* Parcours de réservation */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Vos clientes <span className="bg-[#FFE234] px-2 brutal-border">réservent en quelques gestes</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Plus besoin d&apos;appeler pendant les heures d&apos;ouverture : le rendez-vous se prend en moins d&apos;une minute.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {bookingSteps.map(({ step, title, desc }) => (
                <div key={step} className="brutal-border bg-white p-5">
                  <p className="mono text-xs font-bold text-gray-400 mb-2">{step}</p>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Règles du salon */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-2">Une réservation qui suit les règles de votre salon</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Une application de réservation générique vous impose son fonctionnement. Ici, c&apos;est l&apos;inverse :
              l&apos;outil est construit autour de la façon dont votre salon travaille.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {salonRules.map(({ title, desc }) => (
                <div key={title} className="border-2 border-gray-800 p-5 hover:border-[#FF6B9D] transition-colors">
                  <h3 className="font-bold text-[#FFFBF0] mb-1">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Tout ce dont un <span className="bg-[#FFE234] px-2 brutal-border">salon</span> a besoin</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <CheckCircle2 size={18} className="text-[#FF6B9D] mb-3" />
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application, site web ou les deux */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px] border-b-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Application, <span className="bg-[#FFE234] px-2 brutal-border">site web</span> ou les deux ?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Selon votre salon, la bonne réponse n&apos;est pas toujours une application. Je vous conseille la formule utile, pas la plus chère.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { title: "Un site web avec réservation", desc: "Pour être trouvé sur Google quand on cherche un coiffeur près de chez soi, et réserver sans rien installer. Dès 1 500 €." },
                { title: "Une application mobile", desc: "Pour fidéliser : l'app reste sur le téléphone de vos clientes, avec la carte de fidélité et vos notifications. Dès 4 000 €." },
                { title: "Les deux, reliés", desc: "Le site attire de nouvelles clientes, l'application les fait revenir. Un seul agenda et un seul panel admin pour les deux." },
              ].map(({ title, desc }) => (
                <div key={title} className="brutal-border brutal-shadow bg-white p-5">
                  <h3 className="font-bold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Mockup PC du site coiffeur */}
            <p className="mono text-sm font-bold text-[#FF6B9D] mb-2">{"// exemple de site coiffeur"}</p>
            <div className="brutal-border brutal-shadow bg-[#1a1a1a] rounded-t-xl p-3 pb-0">
              <div className="bg-[#2d2d2d] rounded-t-lg px-4 py-2 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 bg-[#3d3d3d] rounded px-3 py-1 mono text-xs text-gray-400 truncate">
                  coiffeur.breizhapp.tech
                </div>
              </div>
              <div className="w-full overflow-hidden" style={{ height: "520px" }}>
                <iframe
                  src="https://coiffeur.breizhapp.tech/"
                  title="Site salon de coiffure : exemple BreizhApp"
                  className="w-full h-full border-0 block"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="brutal-border border-t-0 bg-[#1a1a1a] h-4 rounded-b-sm" />
            <div className="brutal-border border-t-0 bg-[#2d2d2d] h-3 mx-8 rounded-b-md" />
            <div className="brutal-border border-t-0 bg-[#3d3d3d] h-2 mx-16 rounded-b-lg" />
          </div>
        </section>

        {/* Au quotidien */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Ce que ça change, <span className="bg-[#FFE234] px-2 brutal-border">semaine après semaine</span></h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {everyday.map((item) => (
                <li key={item} className="brutal-border bg-white p-4 flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#FF6B9D] mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Comparatif Planity */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">BreizhApp vs Planity</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "App à votre nom sur l'App Store", breizh: true, planity: false },
                { label: "Programme de fidélité personnalisé", breizh: true, planity: false },
                { label: "Notifications push illimitées", breizh: true, planity: false },
                { label: "Propriété de vos données clients", breizh: true, planity: false },
                { label: "Abonnement fixe sans hausse", breizh: true, planity: false },
                { label: "Réservation en ligne", breizh: true, planity: true },
              ].map(({ label, breizh, planity }) => (
                <div key={label} className="border-2 border-gray-800 p-4 flex items-center justify-between gap-2">
                  <p className="text-sm text-[#FFFBF0]">{label}</p>
                  <div className="flex gap-4 mono text-xs font-bold">
                    <span className={breizh ? "text-[#00D4AA]" : "text-gray-600"}>BreizhApp {breizh ? "✓" : "✗"}</span>
                    <span className={planity ? "text-[#00D4AA]" : "text-gray-600"}>Planity {planity ? "✓" : "✗"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processus */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Comment <span className="bg-[#FFE234] px-2 brutal-border">ça se passe</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">Du premier échange à votre application en ligne, en 4 étapes.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "On échange", desc: "Vos prestations, votre équipe, vos règles de réservation. En visio ou au salon." },
                { step: "02", title: "Devis et maquette", desc: "Devis détaillé sous 24h, puis une maquette aux couleurs de votre salon." },
                { step: "03", title: "Développement", desc: "Je construis l'outil et le teste avec vos vraies prestations et vos vrais horaires." },
                { step: "04", title: "Mise en ligne", desc: "Publication, formation au panel admin et accompagnement des premières semaines." },
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
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes : application coiffeur</h2>
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
              <h2 className="text-2xl font-bold">Votre app salon de coiffure vous attend</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 24h · Basé à Brest</p>
            </div>
            <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2">
              Demander un devis <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <RelatedArticles service="coiffeur" />

        <Contact />

      </main>
      <Footer />
    </>
  );
}
