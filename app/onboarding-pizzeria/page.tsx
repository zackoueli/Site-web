"use client";
import { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Section = {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  color: string;
};

const sections: Section[] = [
  { id: "restaurant", emoji: "🔧", title: "Fonctionnement du restaurant", subtitle: "Pour comprendre votre réalité quotidienne", color: "bg-[#FFE234]" },
  { id: "menu", emoji: "🍕", title: "Menu & produits", subtitle: "La base de votre application", color: "bg-[#FF6B35]" },
  { id: "livraison", emoji: "🚚", title: "Livraison & retrait", subtitle: "Click & collect, livraison, zones", color: "bg-[#00D4AA]" },
  { id: "paiement", emoji: "💳", title: "Paiement & commissions", subtitle: "Moyens de paiement et reversements", color: "bg-[#7C3AED] text-white" },
  { id: "ux", emoji: "📲", title: "Expérience client", subtitle: "Design, notifications, fidélité", color: "bg-[#FF3B82]" },
  { id: "gestion", emoji: "🧑‍🍳", title: "Gestion côté restaurant", subtitle: "Comment votre équipe utilise l'app", color: "bg-[#0A0A0A] text-white" },
  { id: "analytics", emoji: "📊", title: "Suivi & statistiques", subtitle: "Ce que vous voulez mesurer", color: "bg-[#FFE234]" },
  { id: "legal", emoji: "⚖️", title: "Légal & conditions", subtitle: "CGV, annulations, RGPD", color: "bg-[#FF6B35]" },
  { id: "commercial", emoji: "🤝", title: "Relation commerciale", subtitle: "Commission, contrat, engagement", color: "bg-[#00D4AA]" },
];

type FormData = Record<string, string>;

export default function OnboardingPizzeria() {
  const [open, setOpen] = useState<string>("restaurant");
  const [form, setForm] = useState<FormData>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function set(key: string, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function radio(key: string, value: string) {
    return (
      <label className="flex items-center gap-2 cursor-pointer group">
        <input
          type="radio"
          name={key}
          value={value}
          checked={form[key] === value}
          onChange={() => set(key, value)}
          className="w-4 h-4 accent-[#FFE234]"
        />
        <span className="text-sm group-hover:font-bold transition-all">{value}</span>
      </label>
    );
  }

  function checkbox(key: string, value: string) {
    const current = form[key] ? form[key].split(",") : [];
    const checked = current.includes(value);
    return (
      <label className="flex items-center gap-2 cursor-pointer group">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            const next = checked ? current.filter((v) => v !== value) : [...current, value];
            set(key, next.join(","));
          }}
          className="w-4 h-4 accent-[#FFE234]"
        />
        <span className="text-sm group-hover:font-bold transition-all">{value}</span>
      </label>
    );
  }

  function field(key: string, label: string, placeholder = "", type: "text" | "textarea" | "email" | "tel" = "text") {
    if (type === "textarea") {
      return (
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold">{label}</label>
          <textarea
            rows={3}
            placeholder={placeholder}
            value={form[key] ?? ""}
            onChange={(e) => set(key, e.target.value)}
            className="brutal-border px-3 py-2 text-sm resize-none focus:outline-none focus:bg-[#FFFBF0] bg-white"
          />
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={form[key] ?? ""}
          onChange={(e) => set(key, e.target.value)}
          className="brutal-border px-3 py-2 text-sm focus:outline-none focus:bg-[#FFFBF0] bg-white"
        />
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const nom = form["contact_nom"] || "Pizzeria (sans nom)";
      const email = form["contact_email"] || "noreply@breizhapp.tech";
      const lignes = Object.entries(form)
        .filter(([k]) => k !== "contact_nom" && k !== "contact_email")
        .map(([k, v]) => `<b>${k}</b> : ${v}`)
        .join("<br/>");
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nom,
          email,
          budget: "📋 Onboarding pizzeria",
          message: lignes,
        }),
      });
      setSent(true);
    } catch {
      // silent fail — données envoyées best-effort
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4 bg-[#FFFBF0]">
        <div className="max-w-lg text-center">
          <CheckCircle className="mx-auto mb-6 text-[#00D4AA]" size={64} />
          <h1 className="text-4xl font-bold mb-4">Merci !</h1>
          <p className="text-gray-600 text-lg">Vos réponses ont bien été envoyées. Je reviens vers vous sous 24h avec une synthèse et les prochaines étapes.</p>
          <p className="mono text-sm text-gray-400 mt-6">// BreizhApp — Brest</p>
        </div>
      </main>
      <Footer />
      </>
    );
  }

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-[#FFFBF0] px-4 py-16">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="mono text-sm font-bold text-gray-500 mb-2">// BreizhApp · onboarding client</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Cahier des charges{" "}
            <span className="bg-[#FF6B35] text-white px-2 brutal-border">pizzeria</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Ce formulaire me permet de cadrer précisément votre projet avant de démarrer le développement.
            Prenez le temps de répondre — plus c'est précis, plus l'app sera adaptée à votre réalité quotidienne.
          </p>
          <div className="mt-4 brutal-border bg-[#FFE234] px-4 py-3 text-sm font-bold">
            ⏱ Temps estimé : 10 à 15 minutes
          </div>
        </div>

        {/* Infos de contact d'abord */}
        <div className="brutal-border brutal-shadow bg-white p-6 mb-4">
          <h2 className="font-bold text-lg mb-4">Vos coordonnées</h2>
          <div className="flex flex-col gap-4">
            {field("contact_nom", "Nom du restaurant *", "Ex : Pizzeria Napoli")}
            {field("contact_prenom", "Votre prénom *", "Ex : Marco")}
            {field("contact_email", "Email *", "votre@email.com", "email")}
            {field("contact_tel", "Téléphone", "06 XX XX XX XX", "tel")}
            {field("contact_adresse", "Adresse du restaurant", "Ex : 12 rue de Siam, Brest")}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Section 1 — Fonctionnement */}
          <SectionBlock section={sections[0]} open={open} setOpen={setOpen}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Avez-vous déjà un système de caisse (POS) ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui", "Non", "En cours de changement"].map((v) => radio("pos_existant", v))}
                </div>
              </div>
              {field("pos_quel", "Si oui, lequel ?", "Ex : Lightspeed, Zelty, L'Addition, aucun...")}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Voulez-vous connecter l'app à votre caisse ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui si possible", "Non", "Je ne sais pas"].map((v) => radio("pos_integration", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Qui gère les commandes dans l'équipe ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Le gérant uniquement", "Les serveurs", "Les cuisiniers", "Plusieurs personnes"].map((v) => checkbox("gestion_equipe", v))}
                </div>
              </div>
              {field("rush_heure", "Vos heures de rush habituelles ?", "Ex : 12h-14h et 19h-22h")}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Combien de commandes par service en moyenne ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Moins de 20", "20 à 50", "50 à 100", "Plus de 100"].map((v) => radio("volume_commandes", v))}
                </div>
              </div>
              {field("fonctionnement_specifique", "Avez-vous des contraintes ou spécificités à nous signaler ?", "Ex : service uniquement le soir, fermé le lundi...", "textarea")}
            </div>
          </SectionBlock>

          {/* Section 2 — Menu */}
          <SectionBlock section={sections[1]} open={open} setOpen={setOpen}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Pouvez-vous fournir votre menu complet ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui, j'ai un fichier prêt", "Oui mais à rédiger", "Non, à construire ensemble"].map((v) => radio("menu_dispo", v))}
                </div>
              </div>
              {field("menu_categories", "Quelles catégories avez-vous ?", "Ex : Pizzas, Entrées, Desserts, Boissons, Menus...")}
              {field("nb_references", "Nombre approximatif de références ?", "Ex : 30 pizzas, 5 desserts, 10 boissons")}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Avez-vous des options sur les produits ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Tailles (S/M/L)", "Suppléments / toppings", "Cuisson", "Allergènes", "Non"].map((v) => checkbox("menu_options", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Certains produits sont-ils parfois indisponibles ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui, souvent", "Rarement", "Non"].map((v) => radio("rupture_stock", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">À quelle fréquence changez-vous les prix ou le menu ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Chaque semaine", "Chaque mois", "Chaque saison", "Très rarement"].map((v) => radio("menu_frequence_maj", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Avez-vous des photos de vos plats ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui, photos pro", "Oui, photos téléphone", "Non, à prévoir"].map((v) => radio("photos_plats", v))}
                </div>
              </div>
              {field("menu_remarques", "Autres remarques sur le menu ?", "Allergènes à afficher, plats du jour, formules...", "textarea")}
            </div>
          </SectionBlock>

          {/* Section 3 — Livraison */}
          <SectionBlock section={sections[2]} open={open} setOpen={setOpen}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Quels modes de retrait proposez-vous ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Click & collect (retrait sur place)", "Livraison à domicile", "Les deux"].map((v) => radio("modes_retrait", v))}
                </div>
              </div>
              {field("zone_livraison", "Zone de livraison (si applicable)", "Ex : Brest centre, rayon 5km, quartiers spécifiques...")}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Frais de livraison ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Gratuit", "Frais fixes", "Variables selon distance", "Offerts à partir d'un montant"].map((v) => radio("frais_livraison", v))}
                </div>
              </div>
              {field("frais_livraison_detail", "Précisez (montant, conditions...)", "Ex : 2€ fixes, gratuit dès 20€ de commande")}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Qui effectue la livraison ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Vous-même / votre équipe", "Prestataire externe", "Les deux"].map((v) => radio("livreur", v))}
                </div>
              </div>
              {field("delai_preparation", "Délai moyen de préparation ?", "Ex : 20 min sur place, 35 min en livraison")}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Voulez-vous un suivi de commande en temps réel pour le client ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui", "Non", "Pas prioritaire"].map((v) => radio("suivi_commande", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Voulez-vous pouvoir activer/désactiver la livraison facilement ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui, c'est important", "Non"].map((v) => radio("toggle_livraison", v))}
                </div>
              </div>
            </div>
          </SectionBlock>

          {/* Section 4 — Paiement */}
          <SectionBlock section={sections[3]} open={open} setOpen={setOpen}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Moyens de paiement acceptés en ligne ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Carte bancaire (Stripe)", "Apple Pay / Google Pay", "Tickets restaurant dématérialisés (Swile, Edenred)", "Paiement à la livraison / retrait"].map((v) => checkbox("paiement_modes", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Le paiement en ligne doit-il être obligatoire ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui, toujours", "Non, optionnel", "Obligatoire pour livraison uniquement"].map((v) => radio("paiement_obligatoire", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Comment souhaitez-vous recevoir vos reversements ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Virement hebdomadaire", "Virement mensuel", "À définir"].map((v) => radio("reversement_frequence", v))}
                </div>
              </div>
              {field("iban", "IBAN pour les reversements (optionnel ici)", "FR76...")}
              <div className="brutal-border bg-[#FFE234] px-4 py-3 text-sm">
                <p className="font-bold mb-1">ℹ️ Rappel commission BreizhApp</p>
                <p>Je prélève <strong>10% TTC</strong> sur chaque commande passée via l'application. Cette commission inclut l'hébergement, la maintenance et le support. Les frais Stripe (~1,5%) s'ajoutent et sont à votre charge.</p>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Êtes-vous ok avec ce modèle de commission ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui", "J'ai des questions", "Je souhaite négocier"].map((v) => radio("commission_ok", v))}
                </div>
              </div>
              {field("paiement_remarques", "Remarques ou questions sur le paiement ?", "", "textarea")}
            </div>
          </SectionBlock>

          {/* Section 5 — UX client */}
          <SectionBlock section={sections[4]} open={open} setOpen={setOpen}>
            <div className="flex flex-col gap-5">
              {field("app_nom", "Nom souhaité pour l'application", "Ex : Pizzeria Napoli, NapoliApp...")}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Avez-vous une charte graphique existante ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui (logo + couleurs)", "Logo uniquement", "Non, à créer avec vous"].map((v) => radio("charte_graphique", v))}
                </div>
              </div>
              {field("couleurs_preferees", "Couleurs préférées pour l'app ?", "Ex : rouge et blanc, noir et or...")}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Fonctionnalités côté client souhaitées ?</label>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Notifications push (promos, statut commande)",
                    "Programme de fidélité (tampons, réductions)",
                    "Codes promo / réductions",
                    "Compte client avec historique",
                    "Avis et notes sur les plats",
                    "Partage sur réseaux sociaux",
                  ].map((v) => checkbox("fonctionnalites_client", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Programme de fidélité : quel modèle ?</label>
                <div className="flex flex-wrap gap-3">
                  {["10 commandes = 1 offerte", "Système de points", "Réduction % dès X€", "Pas de fidélité", "À définir ensemble"].map((v) => radio("fidelite_modele", v))}
                </div>
              </div>
              {field("ux_remarques", "Inspirations ou références d'apps que vous aimez ?", "Ex : j'aime l'app McDonald's pour les commandes...", "textarea")}
            </div>
          </SectionBlock>

          {/* Section 6 — Gestion */}
          <SectionBlock section={sections[5]} open={open} setOpen={setOpen}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Sur quel appareil recevrez-vous les commandes ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Tablette dédiée", "Téléphone", "Ordinateur", "Plusieurs appareils"].map((v) => checkbox("appareil_gestion", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Avez-vous besoin d'imprimer les commandes ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui, imprimante thermique", "Oui mais je n'en ai pas encore", "Non"].map((v) => radio("impression", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Notification sonore à chaque nouvelle commande ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui, indispensable", "Souhaitable", "Non"].map((v) => radio("notif_sonore", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Qui met à jour le menu et les prix ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Le gérant", "Un employé dédié", "Vous via BreizhApp"].map((v) => radio("qui_maj_menu", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Niveau de familiarité avec les outils numériques ?</label>
                <div className="flex flex-wrap gap-3">
                  {["À l'aise", "Moyen", "Besoin d'accompagnement"].map((v) => radio("niveau_numerique", v))}
                </div>
              </div>
              {field("gestion_remarques", "Contraintes particulières pour la gestion ?", "Ex : internet limité en cuisine, pas de tablette...", "textarea")}
            </div>
          </SectionBlock>

          {/* Section 7 — Analytics */}
          <SectionBlock section={sections[6]} open={open} setOpen={setOpen}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Quelles statistiques souhaitez-vous suivre ?</label>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Chiffre d'affaires via l'app",
                    "Nombre de commandes par jour/semaine",
                    "Produits les plus vendus",
                    "Heures de pointe",
                    "Panier moyen",
                    "Nombre de clients actifs",
                    "Taux de fidélisation",
                  ].map((v) => checkbox("analytics_souhaits", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">À quelle fréquence consulteriez-vous ces stats ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Chaque jour", "Chaque semaine", "Chaque mois", "Rarement"].map((v) => radio("analytics_frequence", v))}
                </div>
              </div>
            </div>
          </SectionBlock>

          {/* Section 8 — Légal */}
          <SectionBlock section={sections[7]} open={open} setOpen={setOpen}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Avez-vous déjà des CGV (conditions générales de vente) ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui", "Non, à créer", "Je ne sais pas"].map((v) => radio("cgv_existantes", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Politique d'annulation souhaitée ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Aucune annulation possible après paiement", "Annulation jusqu'à confirmation", "Cas par cas", "À définir"].map((v) => radio("politique_annulation", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Gestion des remboursements ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Remboursement automatique en cas de problème", "Manuel au cas par cas", "Avoir uniquement"].map((v) => radio("remboursements", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Avez-vous un responsable RGPD ou DPO désigné ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui", "Non", "Je ne sais pas ce que c'est"].map((v) => radio("rgpd_dpo", v))}
                </div>
              </div>
              {field("legal_remarques", "Autres points légaux à aborder ?", "", "textarea")}
            </div>
          </SectionBlock>

          {/* Section 9 — Commercial */}
          <SectionBlock section={sections[8]} open={open} setOpen={setOpen}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Souhaitez-vous un contrat écrit ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Oui, obligatoire", "Oui si possible", "Non nécessaire"].map((v) => radio("contrat_ecrit", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Durée d'engagement souhaitée ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Sans engagement", "6 mois minimum", "1 an", "À négocier"].map((v) => radio("duree_engagement", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Quel est votre budget global pour ce projet ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Moins de 500€", "500€ à 1 000€", "1 000€ à 2 000€", "Pas de limite définie"].map((v) => radio("budget", v))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Délai de lancement souhaité ?</label>
                <div className="flex flex-wrap gap-3">
                  {["Le plus vite possible", "Dans 1 mois", "Dans 2 à 3 mois", "Pas de contrainte"].map((v) => radio("delai_lancement", v))}
                </div>
              </div>
              {field("questions_libres", "Des questions ou remarques libres ?", "Tout ce que vous voulez me dire avant qu'on démarre...", "textarea")}
            </div>
          </SectionBlock>

          {/* Submit */}
          <div className="brutal-border brutal-shadow bg-[#0A0A0A] text-[#FFFBF0] p-8 mt-4">
            <p className="mono text-xs text-[#FFE234] font-bold mb-2">// prêt à envoyer ?</p>
            <h3 className="text-2xl font-bold mb-2">Envoyer mes réponses</h3>
            <p className="text-gray-400 text-sm mb-6">Je reçois votre cahier des charges et vous contacte sous 24h pour valider ensemble les points clés avant de démarrer.</p>
            <button
              type="submit"
              disabled={loading}
              className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-8 py-4 font-bold text-lg disabled:opacity-50"
            >
              {loading ? "Envoi en cours..." : "Envoyer le formulaire →"}
            </button>
          </div>
        </form>

      </div>
    </main>
    <Footer />
    </>
  );
}

function SectionBlock({
  section,
  open,
  setOpen,
  children,
}: {
  section: Section;
  open: string;
  setOpen: (id: string) => void;
  children: React.ReactNode;
}) {
  const isOpen = open === section.id;
  return (
    <div className={`brutal-border brutal-shadow bg-white overflow-hidden transition-all`}>
      <button
        type="button"
        onClick={() => setOpen(isOpen ? "" : section.id)}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className={`w-10 h-10 brutal-border flex items-center justify-center text-lg font-bold shrink-0 ${section.color}`}>
          {section.emoji}
        </span>
        <div className="flex-1">
          <p className="font-bold leading-tight">{section.title}</p>
          <p className="text-sm text-gray-500 mono">{section.subtitle}</p>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="px-5 pb-6 border-t-2 border-black pt-5 flex flex-col gap-4">
          {children}
        </div>
      )}
    </div>
  );
}
