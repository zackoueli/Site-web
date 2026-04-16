import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité — BreizhApp",
  description: "Politique de confidentialité et gestion des données personnelles de BreizhApp.",
  alternates: { canonical: "https://breizhapp.tech/politique-de-confidentialite" },
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-20">
        <div className="mb-10">
          <p className="mono text-sm font-bold text-gray-500 mb-2">// légal</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Politique de{" "}
            <span className="bg-[#FFE234] px-2 brutal-border">confidentialité</span>
          </h1>
          <p className="text-sm text-gray-500 mono">Dernière mise à jour : avril 2025</p>
        </div>

        <div className="flex flex-col gap-8 text-[#0A0A0A]">

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">1. Responsable du traitement</h2>
            <p className="text-gray-700 leading-relaxed">
              Le responsable du traitement des données personnelles collectées via ce site est :<br /><br />
              <strong>Enzo Omnes</strong> — Auto-entrepreneur<br />
              Activité : Développement d'applications mobiles (BreizhApp)<br />
              Brest, Bretagne, France<br />
              Contact : <a href="mailto:contact@breizhapp.tech" className="underline hover:text-[#0A0A0A]">contact@breizhapp.tech</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">2. Données collectées</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Les données collectées via le formulaire de contact sont :
            </p>
            <ul className="list-disc pl-6 text-gray-700 flex flex-col gap-1">
              <li>Nom et prénom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Message et description du projet</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Aucune donnée de navigation n&apos;est collectée (pas de cookies de tracking, pas de Google Analytics).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">3. Finalités du traitement</h2>
            <p className="text-gray-700 leading-relaxed">
              Les données collectées sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-6 text-gray-700 flex flex-col gap-1 mt-3">
              <li>Répondre à votre demande de devis ou de renseignements</li>
              <li>Établir un devis commercial</li>
              <li>Assurer le suivi de la relation client</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">4. Base légale</h2>
            <p className="text-gray-700 leading-relaxed">
              Le traitement repose sur votre <strong>consentement</strong> (article 6.1.a du RGPD),
              exprimé par l&apos;envoi volontaire du formulaire de contact.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">5. Durée de conservation</h2>
            <p className="text-gray-700 leading-relaxed">
              Vos données sont conservées pendant <strong>3 ans</strong> à compter du dernier contact,
              puis supprimées. En cas de relation contractuelle, les données sont conservées
              5 ans après la fin du contrat conformément aux obligations légales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">6. Partage des données</h2>
            <p className="text-gray-700 leading-relaxed">
              Vos données ne sont <strong>jamais vendues ni cédées</strong> à des tiers.
              Elles peuvent être transmises à des sous-traitants techniques (hébergeur, outil d&apos;envoi d&apos;e-mail)
              dans le strict cadre de la prestation, conformément au RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">7. Vos droits</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-700 flex flex-col gap-1">
              <li><strong>Droit d&apos;accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
              <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@breizhapp.tech" className="underline">contact@breizhapp.tech</a>.
              En cas de litige, vous pouvez saisir la{" "}
              <strong>CNIL</strong> sur{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline">cnil.fr</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">8. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site n&apos;utilise <strong>aucun cookie de tracking ou publicitaire</strong>.
              Des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">9. Sécurité</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
              vos données contre tout accès non autorisé, perte ou divulgation (chiffrement HTTPS,
              accès restreint aux données).
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t-2 border-black">
          <Link href="/" className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-6 py-3 inline-block">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
