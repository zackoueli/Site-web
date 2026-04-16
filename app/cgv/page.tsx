import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — BreizhApp",
  description: "Conditions générales de vente des prestations de développement d'applications mobiles BreizhApp.",
  alternates: { canonical: "https://breizhapp.tech/cgv" },
  robots: { index: false, follow: false },
};

export default function CGV() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-20">
        <div className="mb-10">
          <p className="mono text-sm font-bold text-gray-500 mb-2">// légal</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Conditions Générales{" "}
            <span className="bg-[#FFE234] px-2 brutal-border">de Vente</span>
          </h1>
          <p className="text-sm text-gray-500 mono">Dernière mise à jour : avril 2025</p>
        </div>

        <div className="flex flex-col gap-8 text-[#0A0A0A]">

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">1. Objet et champ d&apos;application</h2>
            <p className="text-gray-700 leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à toutes les prestations de
              développement d&apos;applications mobiles proposées par Enzo Omnes (BreizhApp), auto-entrepreneur,
              à destination de clients professionnels et particuliers.
              Toute commande implique l&apos;acceptation pleine et entière des présentes CGV.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">2. Prestations proposées</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              BreizhApp propose notamment les prestations suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-700 flex flex-col gap-1">
              <li>Conception et développement d&apos;applications mobiles iOS et/ou Android</li>
              <li>Développement d&apos;applications cross-platform (React Native / Expo)</li>
              <li>Intégration de fonctionnalités (paiement, notifications push, géolocalisation…)</li>
              <li>Publication sur l&apos;App Store et/ou Google Play</li>
              <li>Maintenance et évolution d&apos;applications existantes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">3. Devis et commande</h2>
            <p className="text-gray-700 leading-relaxed">
              Tout projet fait l&apos;objet d&apos;un devis gratuit et personnalisé, établi après analyse
              du cahier des charges du client. Le devis est valable <strong>30 jours</strong> à compter
              de sa date d&apos;émission. La commande est confirmée par la signature du devis et le
              versement de l&apos;acompte prévu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">4. Tarifs et paiement</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Les prix sont indiqués en euros TTC. BreizhApp n&apos;est pas assujetti à la TVA (article 293 B du CGI).
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Les conditions de paiement standard sont :
            </p>
            <ul className="list-disc pl-6 text-gray-700 flex flex-col gap-1">
              <li><strong>30 % à la commande</strong> (acompte)</li>
              <li><strong>30 % à mi-projet</strong> (selon livrable intermédiaire défini au devis)</li>
              <li><strong>40 % à la livraison finale</strong></li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              En cas de retard de paiement, des pénalités de retard au taux légal en vigueur seront
              appliquées, ainsi qu&apos;une indemnité forfaitaire de recouvrement de 40 €.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">5. Délais de livraison</h2>
            <p className="text-gray-700 leading-relaxed">
              Les délais de livraison sont définis dans le devis. Ils courent à compter de la réception
              de l&apos;acompte et de tous les éléments nécessaires fournis par le client.
              Tout retard imputable au client (validation tardive, éléments manquants) suspendra
              ces délais sans engager la responsabilité de BreizhApp.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">6. Obligations du client</h2>
            <p className="text-gray-700 leading-relaxed">
              Le client s&apos;engage à fournir dans les délais convenus tous les éléments nécessaires
              à la réalisation du projet (contenus, accès, cahier des charges), à valider les
              livrables dans un délai de 7 jours ouvrés, et à régler les factures aux échéances
              prévues.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">7. Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed">
              Le code source et les livrables sont cédés au client après paiement intégral de la prestation.
              BreizhApp se réserve le droit de mentionner le projet dans son portfolio, sauf accord contraire
              explicite du client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">8. Responsabilité</h2>
            <p className="text-gray-700 leading-relaxed">
              BreizhApp s&apos;engage à réaliser les prestations avec soin et professionnalisme.
              Sa responsabilité est limitée au montant de la prestation concernée.
              BreizhApp ne saurait être tenu responsable des dommages indirects (perte de chiffre
              d&apos;affaires, perte de données…) liés à l&apos;utilisation de l&apos;application livrée.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">9. Résiliation</h2>
            <p className="text-gray-700 leading-relaxed">
              En cas de résiliation à l&apos;initiative du client après démarrage des travaux, l&apos;acompte
              versé reste acquis à BreizhApp. Le client sera facturé du travail effectué jusqu&apos;à la
              date de résiliation, calculé au prorata du devis initial.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">10. Droit applicable et litiges</h2>
            <p className="text-gray-700 leading-relaxed">
              Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable
              sera recherchée en priorité. À défaut, le litige sera porté devant les tribunaux compétents
              de Brest (France).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 border-l-4 border-[#FFE234] pl-3">11. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Pour toute question relative aux présentes CGV :{" "}
              <a href="mailto:breizhapp@outlook.fr" className="underline hover:text-[#0A0A0A]">
                breizhapp@outlook.fr
              </a>
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
