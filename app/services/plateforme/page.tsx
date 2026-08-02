import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedArticles from "@/components/RelatedArticles";
import RelatedProjects from "@/components/RelatedProjects";
import { LayoutDashboard, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Plateforme digitale & back-office sur mesure | BreizhApp",
  description: "Développement de plateformes web sur mesure : espace admin, espace client, multi-rôles. API REST, base de données, authentification. Basé à Brest. Devis gratuit.",
  keywords: [
    "plateforme digitale sur mesure",
    "développement back-office",
    "application web sur mesure brest",
    "espace admin sur mesure",
    "développeur plateforme web freelance",
    "back-office brest",
  ],
  alternates: { canonical: "https://breizhapp.tech/services/plateforme" },
  openGraph: {
    title: "Plateforme digitale & back-office sur mesure",
    description: "Plateformes web sur mesure : espace admin, espace client, multi-rôles. API REST, base de données. Développeur freelance à Brest.",
    url: "https://breizhapp.tech/services/plateforme",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const features = [
  { title: "Multi-rôles", desc: "Admin, manager, client, partenaire — chaque utilisateur voit ce qu'il doit voir." },
  { title: "Panel admin", desc: "Tableau de bord complet pour gérer vos données, utilisateurs et contenus." },
  { title: "Espace client", desc: "Chaque client dispose d'un accès personnel pour suivre ses commandes ou dossiers." },
  { title: "Base de données", desc: "Stockage sécurisé de vos données avec sauvegarde automatique." },
  { title: "API REST", desc: "Connexion avec vos outils existants (CRM, ERP, logiciels métier)." },
  { title: "Authentification sécurisée", desc: "Connexion par email, Google, ou SSO. Gestion des permissions par rôle." },
];

const demoSites = [
  { title: "Bunkly", desc: "Plateforme web avec espace admin et gestion multi-rôles.", url: "https://app.bunkly.co" },
];

const useCases = [
  { emoji: "📦", title: "Gestion de commandes", desc: "Suivi des commandes client, statuts en temps réel, notifications automatiques." },
  { emoji: "👥", title: "Espace membres / abonnés", desc: "Accès à du contenu réservé, facturation récurrente, historique des achats." },
  { emoji: "📊", title: "Dashboard métier", desc: "Indicateurs clés, rapports, exports — centralisés dans un seul outil." },
  { emoji: "🤝", title: "Plateforme de mise en relation", desc: "Gestion de profils, matching, messagerie intégrée, avis." },
];

const process = [
  { step: "01", title: "Cadrage du projet", desc: "On échange sur vos rôles utilisateurs, vos processus métier et les données à gérer. Devis détaillé sous 24h." },
  { step: "02", title: "Architecture & maquettes", desc: "Modélisation de la base de données, des rôles et des écrans clés, validée avec vous avant le développement." },
  { step: "03", title: "Développement sur mesure", desc: "Construction du back-office, des API et des espaces utilisateurs, avec points d'avancement réguliers." },
  { step: "04", title: "Tests, déploiement & formation", desc: "Tests des permissions par rôle, mise en ligne sécurisée et formation complète à l'administration de la plateforme." },
];

const faq = [
  {
    q: "Qu'est-ce qu'une plateforme digitale sur mesure ?",
    a: "C'est une application web qui centralise plusieurs espaces utilisateurs distincts — admin, équipe, client, partenaire — reliés à une même base de données. Contrairement à un site vitrine, elle gère des données dynamiques : commandes, dossiers, utilisateurs, permissions, en temps réel.",
  },
  {
    q: "Comment fonctionne la gestion multi-rôles ?",
    a: "Chaque utilisateur se connecte avec un compte relié à un rôle précis (administrateur, manager, client, partenaire...) et n'accède qu'aux fonctionnalités et données autorisées pour ce rôle. Un client ne voit que son propre espace, tandis qu'un administrateur a une vue complète sur la plateforme. Cette architecture évite les erreurs et sécurise l'accès à vos données sensibles.",
  },
  {
    q: "Quelle différence entre un panel admin et un dashboard ?",
    a: "Le panel admin est l'espace de gestion où vous administrez les données : utilisateurs, contenus, commandes, paramètres. Le dashboard, souvent intégré au panel admin, en est la vue synthétique : indicateurs clés, graphiques, rapports, permettant de suivre l'activité de votre plateforme en un coup d'œil sans fouiller dans chaque module.",
  },
  {
    q: "Combien de temps pour développer une plateforme digitale ?",
    a: "Entre 4 et 8 semaines selon le nombre de rôles, de modules et d'intégrations nécessaires. Une plateforme simple avec espace admin et espace client peut être livrée en 4 semaines, un back-office complexe avec API et multiples rôles jusqu'à 8 semaines.",
  },
  {
    q: "Ma plateforme peut-elle se connecter à mes outils existants ?",
    a: "Oui. Chaque plateforme peut exposer ou consommer une API REST pour échanger des données avec votre CRM, votre ERP, votre outil de facturation ou tout autre logiciel métier déjà utilisé par votre entreprise, évitant ainsi la ressaisie manuelle.",
  },
  {
    q: "Comment est sécurisée l'authentification des utilisateurs ?",
    a: "L'authentification prend en charge la connexion par email/mot de passe, Google, ou SSO selon vos besoins. Les mots de passe sont chiffrés, les sessions sécurisées, et les permissions par rôle empêchent tout accès non autorisé aux données ou fonctionnalités sensibles.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne de la plateforme ?",
    a: "La plateforme est déployée sur une infrastructure sécurisée avec sauvegarde automatique de la base de données. Vous êtes formé à l'administration de chaque espace, et le support ainsi que les évolutions futures peuvent être assurés en continu.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
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

export default function PlateformePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="bg-[#FFFBF0] min-h-screen">

        {/* Hero */}
        <section className="border-b-[3px] border-black py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mono text-sm font-bold text-gray-400 mb-4">// service 03</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#7C3AED] brutal-border p-3">
                <LayoutDashboard size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">Plateforme digitale</h1>
                <p className="text-xl font-bold text-gray-500 mt-1">Back-office · Multi-rôles · Admin</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
              Une application web complète avec plusieurs niveaux d'accès. Vos équipes et vos clients
              disposent chacun de leur espace dédié — tout est centralisé, sécurisé et facile à gérer.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4">
                Demander un devis gratuit
              </a>
              <a href="/portfolio" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-8 py-4">
                Voir les réalisations →
              </a>
            </div>
          </div>
        </section>

        {/* Exemples en direct */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Exemples en <span className="bg-[#FFE234] px-2 brutal-border">direct</span></h2>
            <div className="grid gap-8">
              {demoSites.map(({ title, desc, url }) => (
                <div key={title} className="brutal-border brutal-shadow bg-white overflow-hidden">
                  <div className="border-b-[3px] border-black bg-[#0A0A0A]">
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b-[3px] border-black bg-[#1a1a1a]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <iframe
                        src={url}
                        title={`Démo ${title}`}
                        loading="lazy"
                        className="absolute top-0 left-0 border-0 w-[222%] h-[222%] origin-top-left scale-[0.45]"
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{desc}</p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-btn bg-[#7C3AED] text-white px-4 py-2 text-sm inline-flex items-center gap-2"
                    >
                      Voir en plein écran <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Ce qui est <span className="bg-[#FFE234] px-2 brutal-border">inclus</span></h2>
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

        {/* Cas d'usage */}
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-8">Exemples de projets</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map(({ emoji, title, desc }) => (
                <div key={title} className="border-2 border-gray-800 p-5 hover:border-[#7C3AED] hover:bg-[#7C3AED] transition-all group">
                  <div className="text-3xl mb-3">{emoji}</div>
                  <h3 className="font-bold text-[#FFFBF0] mb-1">{title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-purple-200 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contenu détaillé */}
        <section className="py-16 px-4 bg-gray-50 brutal-border border-t-[3px] border-b-[3px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Développer une <span className="bg-[#FFE234] px-2 brutal-border">plateforme digitale ou un logiciel</span> sur mesure</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Une plateforme digitale n&apos;est pas un site vitrine : c&apos;est un véritable logiciel métier, avec sa propre
              logique, sa base de données et ses règles d&apos;accès. Voici comment ces projets sont conçus et développés.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-3">Gestion multi-rôles</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  La gestion multi-rôles est le cœur d&apos;une plateforme digitale. Chaque utilisateur se connecte avec un
                  compte relié à un rôle précis — administrateur, manager, employé, client, partenaire — et n&apos;a accès
                  qu&apos;aux données et fonctionnalités correspondant à ce rôle. Un client ne voit que son propre espace et
                  ses propres dossiers, un manager accède à la vue de son équipe, tandis que l&apos;administrateur dispose
                  d&apos;une vue complète sur l&apos;ensemble du logiciel. Cette architecture est pensée dès la conception :
                  elle structure la base de données, les permissions et les écrans, et évite les erreurs d&apos;accès aussi
                  bien que les failles de sécurité.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Panel admin et back-office</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Le panel admin est l&apos;espace central depuis lequel vous ou votre équipe pilotez le logiciel au
                  quotidien : gestion des utilisateurs, des commandes, des contenus, des paramètres métier. Il est construit
                  sur mesure autour de vos processus réels, et non calqué sur un back-office générique — les écrans, les
                  filtres et les actions disponibles correspondent exactement à la façon dont vous travaillez. C&apos;est ce
                  qui distingue un back-office sur mesure d&apos;un outil no-code standard : chaque module répond à un besoin
                  métier précis plutôt qu&apos;à une fonctionnalité générique inutilisée.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Dashboard et indicateurs métier</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Au sein du panel admin, le dashboard offre une vue synthétique de l&apos;activité de votre plateforme :
                  chiffre d&apos;affaires, nombre d&apos;utilisateurs actifs, commandes en cours, taux de conversion ou tout
                  autre indicateur clé pour votre métier. Plutôt que de naviguer dans chaque module pour reconstituer une
                  vue d&apos;ensemble, le dashboard centralise les chiffres qui comptent pour piloter votre activité au
                  quotidien, avec des graphiques et des exports adaptés à vos besoins de reporting.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">API REST et intégrations</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Votre plateforme peut exposer ou consommer une API REST pour communiquer avec vos outils existants : CRM,
                  ERP, logiciel de facturation, outil de paiement ou service tiers déjà utilisé par votre entreprise. Cela
                  évite la double saisie et permet à votre logiciel sur mesure de s&apos;intégrer dans votre écosystème
                  technique actuel plutôt que de fonctionner en silo. L&apos;architecture API est documentée et pensée pour
                  évoluer si de nouveaux besoins d&apos;intégration apparaissent après le lancement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Base de données et sécurité</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Toutes les données de votre plateforme — utilisateurs, transactions, contenus — sont stockées dans une
                  base de données sécurisée avec sauvegarde automatique. L&apos;authentification prend en charge la connexion
                  par email, Google ou SSO selon vos besoins, avec des mots de passe chiffrés et des sessions sécurisées.
                  Les permissions par rôle garantissent qu&apos;aucun utilisateur ne peut accéder à des données ou des
                  actions qui ne le concernent pas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Processus */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Comment se déroule le <span className="bg-[#FFE234] px-2 brutal-border">développement de votre plateforme</span></h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Un processus clair en 4 étapes, de vos besoins métier à la mise en ligne du logiciel.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {process.map(({ step, title, desc }) => (
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
        <section className="py-16 px-4 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#FFE234] mb-8">Questions fréquentes — plateforme digitale & logiciel sur mesure</h2>
            <div className="flex flex-col gap-4">
              {faq.map(({ q, a }) => (
                <div key={q} className="border-2 border-gray-800 p-5">
                  <h3 className="font-bold text-[#FFFBF0] mb-2">{q}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto brutal-border brutal-shadow bg-[#7C3AED] p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Votre outil métier sur mesure</h2>
              <p className="text-sm mt-1 text-purple-200">Devis gratuit · Réponse sous 48h · Sans engagement</p>
            </div>
            <a href="/#contact" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 inline-flex items-center gap-2 font-bold">
              Démarrer maintenant <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <RelatedProjects service="plateforme" />

        <RelatedArticles service="plateforme" />

      </main>
      <Footer />
    </>
  );
}
