import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile événementiel & billetterie iOS & Android | BreizhApp",
  description:
    "Créez votre app événementielle sur mesure : billetterie, QR code d'entrée, programme, networking, notifications. Sans commission Eventbrite. Dès 490€.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/evenementiel-billetterie" },
  openGraph: {
    title: "Application mobile événementiel & billetterie | BreizhApp",
    description: "App événementielle iOS & Android sur mesure : billetterie, QR codes, programme, notifications. Sans Eventbrite. Freelance Brest, devis gratuit.",
    url: "https://breizhapp.tech/services/secteur/evenementiel-billetterie",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const features = [
  { title: "Billetterie intégrée", desc: "Vente de billets directement dans l'app via Stripe. Tarifs multiples, codes promo, capacités limitées — tout est géré automatiquement." },
  { title: "QR codes d'entrée", desc: "Chaque billet génère un QR code unique. À l'entrée, vous scannez depuis votre téléphone pour valider en une seconde." },
  { title: "Programme & planning", desc: "Horaires, intervenants, salles, descriptions de sessions — vos participants ont tout le programme dans leur poche et reçoivent les changements en temps réel." },
  { title: "Notifications live", desc: "Informez vos participants en temps réel : début de session, changement de salle, annonce surprise. Plus besoin de sonorisation pour les messages d'organisation." },
  { title: "Networking entre participants", desc: "Profils des participants, messagerie interne, échange de contacts — transformez votre événement en opportunité de rencontres professionnelles." },
  { title: "Statistiques & contrôle", desc: "Taux de scan, billets vendus par type, heure de pointe des entrées — suivez vos données en temps réel depuis votre dashboard." },
];

export default function EvenementielPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        <nav className="max-w-4xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/services/application-mobile" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-black font-bold">App événementiel</span>
        </nav>

        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#FF3B82] mb-4">// événementiel & billetterie</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Application mobile<br />
              <span className="bg-[#FF3B82] text-white brutal-border px-2">événementiel & billetterie</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Eventbrite prend entre 3,5% et 6,5% sur chaque billet vendu. Pour un événement à 1 000 participants à 30€, c'est entre 1 000€ et 2 000€ de commission envolés. Votre propre app de billetterie, c'est 490€ une fois — et vous gardez tout.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">Devis gratuit sous 24h</a>
              <Link href="/blog/combien-coute-application-mobile" className="brutal-btn bg-[#FF3B82] text-white px-8 py-4">Voir les tarifs →</Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ Sans commission Eventbrite</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ QR codes d'entrée</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Billetterie Stripe</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Ce qu'inclut votre <span className="bg-[#FFE234] px-2 brutal-border">app événementielle</span></h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map(({ title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <CheckCircle2 size={18} className="text-[#FF3B82] mb-3" />
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Pour quel type d'événement ?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { emoji: "🎤", label: "Conférences & salons", desc: "Programme multi-scènes, intervenants, networking entre participants, plan du lieu interactif." },
                { emoji: "🎶", label: "Concerts & festivals", desc: "Billetterie multi-tarifs, QR codes infalsifiables, line-up dynamique mis à jour en temps réel." },
                { emoji: "🏃", label: "Courses & événements sportifs", desc: "Inscriptions, dossards, résultats en direct, classements par catégorie." },
                { emoji: "🎓", label: "Séminaires & formations", desc: "Programme par salle et par créneau, liste des participants, évaluations post-session." },
              ].map(({ emoji, label, desc }) => (
                <div key={label} className="border-2 border-gray-800 p-5 hover:border-[#FF3B82] transition-colors">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold text-[#FFFBF0] mb-1">{label}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Questions fréquentes</h2>
            <div className="flex flex-col gap-4">
              {[
                { q: "Le scan des QR codes fonctionne-t-il sans connexion internet ?", a: "Partiellement. L'app peut télécharger la liste des billets valides en amont et les valider en mode hors ligne. Les données sont synchronisées quand la connexion revient — utile dans des lieux avec une mauvaise couverture réseau." },
                { q: "Peut-on avoir plusieurs types de billets (VIP, early bird, standard) ?", a: "Oui. Vous créez autant de types de billets que nécessaire avec leurs prix, leurs quotas et leurs dates de vente. L'app gère les ruptures automatiquement et passe au tarif suivant." },
                { q: "Comment gérer les remboursements de billets ?", a: "Via Stripe. Vous définissez votre politique de remboursement et les remboursements se font en quelques clics depuis votre dashboard. Le délai de traitement dépend de la banque du client (5 à 10 jours ouvrés en général)." },
                { q: "L'app peut-elle être réutilisée pour plusieurs éditions de l'événement ?", a: "Oui, c'est l'intérêt d'une app sur mesure. Vous payez le développement une fois et vous réutilisez l'app à chaque nouvelle édition — vous mettez à jour le programme et la billetterie depuis votre dashboard." },
              ].map(({ q, a }) => (
                <div key={q} className="brutal-border bg-white p-5">
                  <h3 className="font-bold mb-2">{q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FF3B82] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Votre app événementielle sans commission</h2>
              <p className="text-sm mt-1 text-pink-200">Devis gratuit · Réponse sous 24h · Sans engagement · Basé à Brest</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 inline-flex items-center gap-2">
              Demander un devis <ArrowRight size={16} />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
