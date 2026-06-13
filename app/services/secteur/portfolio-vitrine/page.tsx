import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Application mobile portfolio & vitrine professionnelle | BreizhApp",
  description:
    "Créez votre app vitrine iOS & Android : galerie de réalisations, présentation de services, contact direct, panel admin. Développeur freelance à Brest. Dès 490€.",
  alternates: { canonical: "https://breizhapp.tech/services/secteur/portfolio-vitrine" },
  openGraph: {
    title: "Application mobile portfolio & vitrine professionnelle | BreizhApp",
    description: "App vitrine sur mesure pour artisans, freelances et PME : galerie, services, devis en ligne, notifications. Freelance à Brest, devis gratuit sous 24h.",
    url: "https://breizhapp.tech/services/secteur/portfolio-vitrine",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const features = [
  { title: "Galerie de réalisations", desc: "Présentez vos projets avec photos, descriptions et catégories. Vos clients voient la qualité de votre travail avant même de vous contacter." },
  { title: "Présentation des services", desc: "Chaque prestation détaillée avec ses spécificités, sa fourchette de prix et ses avantages. Clair, structuré, convaincant." },
  { title: "Formulaire de devis intégré", desc: "Vos prospects remplissent un formulaire depuis l'app — vous recevez leur demande par email avec toutes les infos nécessaires pour répondre." },
  { title: "Témoignages clients", desc: "Avis et témoignages affichés directement dans l'app. La preuve sociale est le levier de conversion le plus puissant." },
  { title: "Panel admin pour tout gérer", desc: "Ajoutez des projets, modifiez vos services et mettez à jour vos tarifs depuis votre téléphone. Sans développeur, sans technique." },
  { title: "Notifications push ciblées", desc: "Informez vos clients de vos nouvelles réalisations, de vos disponibilités ou d'une offre ponctuelle." },
];

export default function PortfolioVitrinePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        <nav className="max-w-4xl mx-auto px-4 pt-6 mono text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/services/application-mobile" className="hover:text-black transition-colors">Services</Link>
          <span>/</span>
          <span className="text-black font-bold">App vitrine</span>
        </nav>

        <section className="border-b-[3px] border-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-[#FF6B9D] mb-4">// portfolio & vitrine</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Application mobile<br />
              <span className="bg-[#FF6B9D] text-white brutal-border px-2">vitrine professionnelle</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
              Une app vitrine, c'est votre meilleure carte de visite : disponible 24h/24 dans la poche de vos clients, avec vos réalisations, vos services et un moyen de vous contacter directement. Parfait pour un artisan, un freelance ou une petite entreprise.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">Devis gratuit sous 24h</a>
              <Link href="/blog/application-mobile-artisan-commercant" className="brutal-btn bg-[#FF6B9D] text-white px-8 py-4">Guide app artisan →</Link>
            </div>
            <div className="flex flex-wrap gap-4 mono text-sm text-gray-500">
              <span className="brutal-border px-3 py-1 bg-white">✓ iOS & Android</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Panel admin inclus</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Dès 490€</span>
              <span className="brutal-border px-3 py-1 bg-white">✓ Livraison 2-3 semaines</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Ce qu'inclut votre <span className="bg-[#FFE234] px-2 brutal-border">app vitrine</span></h2>
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

        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-6">Pour qui c'est fait ?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { emoji: "🔨", label: "Artisans", desc: "Plombiers, électriciens, menuisiers, peintres : montrez vos chantiers terminés et recevez des demandes de devis directement." },
                { emoji: "🎨", label: "Créatifs & freelances", desc: "Photographes, graphistes, architectes d'intérieur : votre portfolio dans la poche de chaque prospect." },
                { emoji: "🏢", label: "PME & prestataires", desc: "Agences, cabinets, bureaux d'études : une app professionnelle qui renforce votre crédibilité face à vos concurrents." },
                { emoji: "💆", label: "Thérapeutes & praticiens", desc: "Coachs, ostéopathes, naturopathes : présentez vos approches et permettez la prise de contact directe." },
              ].map(({ emoji, label, desc }) => (
                <div key={label} className="border-2 border-gray-800 p-5 hover:border-[#FF6B9D] transition-colors">
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
                { q: "Une app vitrine, c'est vraiment utile par rapport à un site web ?", a: "Les deux se complètent. Un site web capte le trafic Google, une app mobile convertit les clients acquis grâce aux notifications push et à l'expérience plus fluide. Pour un artisan ou un freelance, l'app crée une présence mémorable que peu de concurrents ont." },
                { q: "Puis-je modifier mon portfolio moi-même ?", a: "Oui, c'est l'un des points clés. Le panel admin vous permet d'ajouter des projets, des photos et des descriptions depuis votre téléphone — sans passer par moi à chaque nouveau chantier." },
                { q: "Combien ça coûte ?", a: "À partir de 490€ pour une app vitrine iOS & Android complète avec panel admin, galerie et formulaire de contact. La formule Premium à 600€ ajoute les notifications push pour tenir vos clients informés." },
                { q: "L'app peut-elle intégrer un système de prise de rendez-vous ?", a: "Oui. La prise de rendez-vous en ligne est une fonctionnalité que j'intègre régulièrement — créneaux disponibles, confirmation automatique, rappels push. C'est inclus dans la formule Premium." },
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
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#FFE234] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Votre app vitrine en 2-3 semaines</h2>
              <p className="text-sm mt-1">Devis gratuit · Réponse sous 24h · Sans engagement · Basé à Brest</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 inline-flex items-center gap-2">
              Demander un devis <ArrowRight size={16} />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
