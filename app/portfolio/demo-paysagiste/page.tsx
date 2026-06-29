import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Paradis Vert — Site web professionnel artisan | BreizhApp",
  description: "Étude de cas : création d'un site web professionnel pour Paradis Vert. Galerie réalisations, demande de devis en ligne, gestion des services et back-office admin via Firebase.",
};

const features = [
  { icon: "🌿", title: "Présentation des services", desc: "Chaque prestation (tonte, élagage, débroussaillage, nettoyage, entretien, bois) présentée avec photo et description — images modifiables depuis l'admin." },
  { icon: "📸", title: "Galerie réalisations", desc: "Portfolio photo des chantiers réalisés, avec gestion dynamique depuis le back-office sans toucher au code." },
  { icon: "📝", title: "Demande de devis en ligne", desc: "Formulaire de devis détaillé : type de prestation, surface, localisation — la demande arrive directement dans la boîte mail du paysagiste." },
  { icon: "📰", title: "Blog actualités", desc: "Publication d'articles et actualités depuis l'admin pour alimenter le référencement naturel et informer les clients." },
  { icon: "🎥", title: "Vidéo héro personnalisable", desc: "La vidéo de fond de la page d'accueil est modifiable depuis l'admin via une URL — sans intervention du développeur." },
  { icon: "🔧", title: "Panel admin Firebase", desc: "Interface d'administration complète : modification des textes, des photos, des services et des réalisations en temps réel." },
  { icon: "📍", title: "SEO local optimisé", desc: "Balises et contenus optimisés pour Biscarrosse et les Landes — pour apparaître en premier sur les recherches locales." },
  { icon: "📱", title: "100% responsive", desc: "Design fluide sur mobile, tablette et desktop — adapté aux clients qui cherchent depuis leur smartphone sur le chantier." },
];

const stack = [
  { label: "Framework", value: "Next.js App Router" },
  { label: "Base de données", value: "Firebase Firestore" },
  { label: "Authentification", value: "Firebase Auth" },
  { label: "Stockage", value: "Firebase Storage" },
  { label: "Style", value: "CSS personnalisé" },
  { label: "Typographie", value: "Instrument Serif + DM Sans" },
  { label: "Déploiement", value: "Vercel" },
  { label: "Formulaires", value: "Email via API Route" },
];

export default function DemoPaysagistePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Hero */}
        <section className="border-b-[3px] border-black bg-[#2D5016]">
          <div className="max-w-4xl mx-auto px-4 py-20">
            <a href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold mb-8 hover:underline text-[#A8D05A]">
              <ArrowLeft size={14} /> Retour aux réalisations
            </a>
            <p className="mono text-sm font-bold text-green-400 mb-4">// réalisation · site web professionnel</p>
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <div className="brutal-border px-3 py-1 text-xs font-bold bg-[#A8D05A] text-[#1a3a08]">
                SITE WEB
              </div>
              <div className="brutal-border px-3 py-1 text-xs font-bold bg-white text-[#0A0A0A]">
                ARTISAN
              </div>
              <div className="brutal-border px-3 py-1 text-xs font-bold bg-white text-[#0A0A0A]">
                FIREBASE
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Paradis Vert
            </h1>
            <p className="text-xl font-medium mb-2 text-green-300">
              Site vitrine professionnel pour paysagiste — Biscarrosse, Landes
            </p>
            <p className="text-green-100 leading-relaxed max-w-2xl mb-8">
              Site web complet pour un paysagiste professionnel : présentation des services, galerie de réalisations, demande de devis en ligne et panel admin Firebase pour tout gérer sans développeur.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://demo.paysagiste.breizhapp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn px-6 py-3 font-bold inline-flex items-center gap-2 bg-[#A8D05A] text-[#1a3a08]"
              >
                Voir le site en ligne <ExternalLink size={14} />
              </a>
              <a href="/#contact" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 font-bold">
                Un projet similaire ?
              </a>
            </div>
          </div>
        </section>

        {/* Aperçu visuel */}
        <section className="py-16 px-4 bg-[#F0F5E8]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-[#1a3a08]">Identité visuelle</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { name: "Vert foncé", hex: "#2D5016" },
                { name: "Vert clair", hex: "#A8D05A" },
                { name: "Blanc cassé", hex: "#F8F5EE" },
                { name: "Gris texte", hex: "#3D3D3D" },
              ].map(({ name, hex }) => (
                <div key={hex} className="brutal-border p-4 flex flex-col items-center gap-2 bg-white">
                  <div className="w-12 h-12 brutal-border" style={{ backgroundColor: hex }} />
                  <span className="text-xs font-bold">{name}</span>
                  <span className="text-xs mono text-gray-500">{hex}</span>
                </div>
              ))}
            </div>
            <div className="brutal-border bg-white p-5">
              <p className="text-sm font-bold mb-1">Typographie</p>
              <p className="text-2xl mb-1" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>Instrument Serif</p>
              <p className="text-sm text-gray-500">Serif élégant pour les titres · DM Sans pour le contenu</p>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4 bg-[#FFFBF0]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">
              Fonctionnalités <span className="bg-[#A8D05A] px-2 brutal-border">développées</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map(({ icon, title, desc }) => (
                <div key={title} className="brutal-border bg-white p-5">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-bold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Panel admin */}
        <section className="py-16 px-4 bg-[#FFFBF0]">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-gray-500 mb-2">// inclus dans le projet</p>
            <h2 className="text-2xl font-bold mb-2">
              Panel admin <span className="bg-[#A8D05A] brutal-border px-2">inclus</span>
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              Le paysagiste gère son site en autonomie totale depuis son back-office Firebase. Pas besoin de faire appel au développeur pour modifier une photo, mettre à jour un service ou publier une actualité.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "🖼️", label: "Galerie réalisations", desc: "Ajout et suppression de photos de chantiers en temps réel" },
                { icon: "🛠️", label: "Services", desc: "Modification des prestations, descriptions et photos depuis le panel" },
                { icon: "🎥", label: "Vidéo héro", desc: "Mise à jour de la vidéo de la page d'accueil via une URL" },
                { icon: "📰", label: "Blog & actualités", desc: "Publication d'articles pour alimenter le référencement" },
                { icon: "📝", label: "Demandes de devis", desc: "Réception et consultation des demandes clients dans le panel" },
                { icon: "📍", label: "Informations", desc: "Coordonnées, zones d'intervention et textes modifiables à tout moment" },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="brutal-border bg-white p-5">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-bold mb-1 text-sm">{label}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack technique */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#A8D05A] mb-8">Stack technique</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {stack.map(({ label, value }) => (
                <div key={label} className="border-2 border-gray-800 p-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-sm font-bold text-[#FFFBF0]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce type de site est fait pour */}
        <section className="py-16 px-4 bg-[#FFFBF0]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              Idéal pour les <span className="bg-[#FFE234] px-2 brutal-border">artisans & prestataires</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { emoji: "🌱", label: "Paysagistes", desc: "Présentation des services, galerie chantiers, devis en ligne" },
                { emoji: "🔨", label: "Artisans du bâtiment", desc: "Plombiers, électriciens, peintres, menuisiers, maçons" },
                { emoji: "🧹", label: "Services à domicile", desc: "Nettoyage, jardinage, dépannage, bricolage" },
              ].map(({ emoji, label, desc }) => (
                <div key={label} className="brutal-border bg-white p-5">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold mb-1">{label}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#2D5016] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Vous êtes artisan ou prestataire ?</h2>
              <p className="text-sm mt-1 text-green-300">Site vitrine sur mesure dès 490€ — devis gratuit sous 48h</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#A8D05A] text-[#1a3a08] px-6 py-3 font-bold inline-flex items-center gap-2">
              Démarrer mon projet →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
