import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — BreizhApp",
  description: "Mentions légales du site BreizhApp, développeur d'applications mobiles à Brest.",
  alternates: { canonical: "https://breizhapp.tech/mentions-legales" },
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-20">
        <div className="mb-10">
          <p className="mono text-sm font-bold text-gray-500 mb-2">// légal</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Mentions{" "}
            <span className="bg-[#FFE234] px-2 brutal-border">légales</span>
          </h1>
          <p className="text-sm text-gray-500 mono">Dernière mise à jour : avril 2025</p>
        </div>

        <div className="flex flex-col gap-8 text-[#0A0A0A]">

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">1. Éditeur du site</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nom :</strong> Enzo Omnes<br />
              <strong>Statut :</strong> Auto-entrepreneur<br />
              <strong>Activité :</strong> Développement d&apos;applications mobiles<br />
              <strong>Nom commercial :</strong> BreizhApp<br />
              <strong>Siège :</strong> Brest, Finistère (29), Bretagne, France<br />
              <strong>E-mail :</strong>{" "}
              <a href="mailto:contact@breizhapp.tech" className="underline hover:text-[#0A0A0A]">
                contact@breizhapp.tech
              </a><br />
              <strong>SIRET :</strong> [à compléter]<br />
              <strong>Numéro de TVA intracommunautaire :</strong> Non assujetti à la TVA (article 293 B du CGI)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">2. Directeur de la publication</h2>
            <p className="text-gray-700 leading-relaxed">
              Enzo Omnes — <a href="mailto:contact@breizhapp.tech" className="underline">contact@breizhapp.tech</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">3. Hébergement</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site est hébergé par :<br /><br />
              <strong>Vercel Inc.</strong><br />
              340 Pine Street, Suite 701<br />
              San Francisco, CA 94104, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline">
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">4. Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed">
              L&apos;ensemble des contenus présents sur ce site (textes, images, code, logos, visuels)
              sont la propriété exclusive d&apos;Enzo Omnes / BreizhApp, sauf mention contraire.
              Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">5. Liens hypertextes</h2>
            <p className="text-gray-700 leading-relaxed">
              Ce site peut contenir des liens vers des sites tiers. BreizhApp n&apos;est pas responsable
              du contenu de ces sites et ne saurait être tenu responsable des dommages résultant de
              leur consultation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">6. Limitation de responsabilité</h2>
            <p className="text-gray-700 leading-relaxed">
              BreizhApp s&apos;efforce de maintenir les informations publiées sur ce site aussi précises
              que possible. Cependant, BreizhApp ne peut garantir l&apos;exactitude, la complétude ou
              l&apos;actualité des informations diffusées. L&apos;utilisation de ces informations se fait
              sous la responsabilité de l&apos;utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">7. Droit applicable</h2>
            <p className="text-gray-700 leading-relaxed">
              Le présent site et ses mentions légales sont soumis au <strong>droit français</strong>.
              En cas de litige, les tribunaux français seront compétents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">8. Médiation</h2>
            <p className="text-gray-700 leading-relaxed">
              Conformément à l&apos;article L. 612-1 du Code de la consommation, tout consommateur
              peut recourir gratuitement à un médiateur de la consommation. BreizhApp s&apos;engage
              à proposer les coordonnées d&apos;un médiateur agréé sur simple demande à{" "}
              <a href="mailto:contact@breizhapp.tech" className="underline">contact@breizhapp.tech</a>.
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
