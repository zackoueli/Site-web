"use client";
import { useState } from "react";
import { Check, CheckCheck, CheckCircle } from "lucide-react";

// ── Questions ─────────────────────────────────────────────
const SERVICES = [
  { id: "mobile", label: "📱 Application mobile" },
  { id: "site", label: "🌐 Site web" },
  { id: "ecommerce", label: "🛍️ Boutique e-commerce" },
  { id: "webapp", label: "🖥️ Web app / logiciel sur mesure" },
  { id: "unknown", label: "🤔 Je ne sais pas encore" },
];

// Fonctionnalités proposées selon les services cochés (dédoublonnées à l'affichage)
const FEATURES: Record<string, string[]> = {
  mobile: ["Comptes utilisateurs", "Paiement en ligne", "Notifications push", "Réservation / prise de RDV", "Géolocalisation / carte", "Panel admin"],
  site: ["Blog / actualités", "Formulaire de devis", "Réservation / prise de RDV", "Site multilingue", "Panel admin"],
  ecommerce: ["Catalogue produits", "Paiement en ligne", "Espace client", "Gestion des stocks", "Livraison / click & collect"],
  webapp: ["Espace admin", "Espace client", "Plusieurs rôles utilisateurs", "Connexion à mes outils (API)", "Tableau de bord"],
};

const STAGES = [
  "Juste une idée",
  "Maquettes ou cahier des charges en cours",
  "Site ou app existant à refaire",
  "Projet existant à faire évoluer",
];

const TIMINGS = [
  "Dès que possible (moins d'un mois)",
  "Dans 1 à 3 mois",
  "Dans 3 à 6 mois",
  "Pas urgent (plus de 6 mois)",
];

const BUDGETS = [
  "Moins de 2 000 €",
  "2 000 € à 5 000 €",
  "5 000 € à 10 000 €",
  "Plus de 10 000 €",
  "Je ne sais pas encore",
];

// Valeur réservée à l'option « Autre », dont le texte libre est rangé dans `other`
const OTHER = "__other";
type ChoiceKey = "services" | "features" | "stage" | "timing" | "budget";

type Answers = {
  services: string[];
  features: string[];
  stage: string;
  timing: string;
  budget: string;
  name: string;
  email: string;
  details: string;
  other: Record<ChoiceKey, string>;
};

const EMPTY: Answers = {
  services: [], features: [], stage: "", timing: "", budget: "",
  name: "", email: "", details: "",
  other: { services: "", features: "", stage: "", timing: "", budget: "" },
};

type StepId = Exclude<keyof Answers, "other">;
const STEPS: StepId[] = ["services", "features", "stage", "timing", "budget", "name", "email", "details"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ProjectEstimator() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const current = STEPS[step];
  const featureOptions = [...new Set(a.services.flatMap((s) => FEATURES[s] ?? []))];
  // Pas de choix de fonctionnalités possible (ex. « Je ne sais pas encore » seul) : on saute l'étape
  const skipFeatures = featureOptions.length === 0;

  const toggle = (key: "services" | "features", value: string) =>
    setA((prev) => {
      const list = prev[key].includes(value) ? prev[key].filter((v) => v !== value) : [...prev[key], value];
      // Si les services changent, on retire les fonctionnalités qui ne correspondent plus
      if (key === "services") {
        const allowed = new Set(list.flatMap((s) => FEATURES[s] ?? []));
        return { ...prev, services: list, features: prev.features.filter((f) => f === OTHER || allowed.has(f)) };
      }
      return { ...prev, [key]: list };
    });

  const isOtherPicked = (key: ChoiceKey) =>
    key === "services" || key === "features" ? a[key].includes(OTHER) : a[key] === OTHER;
  // « Autre » coché : le champ texte doit être rempli
  const otherOk = (key: ChoiceKey) => !isOtherPicked(key) || a.other[key].trim().length > 0;

  const canNext =
    current === "services" ? a.services.length > 0 && otherOk("services") :
    current === "features" ? a.features.length > 0 && otherOk("features") :
    current === "name" ? a.name.trim().length > 1 :
    current === "email" ? EMAIL_RE.test(a.email.trim()) :
    current === "details" ? true :
    Boolean(a[current]) && otherOk(current);

  const go = (dir: 1 | -1) => {
    let next = step + dir;
    if (STEPS[next] === "features" && skipFeatures) next += dir;
    setStep(Math.max(0, Math.min(STEPS.length - 1, next)));
  };

  async function submit() {
    setLoading(true);
    setError("");
    const otherText = (key: ChoiceKey) => `Autre : ${a.other[key].trim()}`;
    const serviceLabels = a.services.map((id) =>
      id === OTHER ? otherText("services") : SERVICES.find((s) => s.id === id)?.label.replace(/^\S+\s/, "") ?? id
    );
    const featureLabels = a.features.map((f) => (f === OTHER ? otherText("features") : f));
    const answer = (key: "stage" | "timing" | "budget") => (a[key] === OTHER ? otherText(key) : a[key]);
    const message = [
      `Services : ${serviceLabels.join(", ")}`,
      featureLabels.length ? `Fonctionnalités : ${featureLabels.join(", ")}` : "",
      `Avancement : ${answer("stage")}`,
      `Lancement : ${answer("timing")}`,
      `Budget : ${answer("budget")}`,
      a.details.trim() ? `\nPrécisions :\n${a.details.trim()}` : "",
    ].filter(Boolean).join("\n");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: a.name.trim(),
          email: a.email.trim(),
          budget: serviceLabels.join(", "),
          message,
          source: "estimation",
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Une erreur est survenue. Réessayez ou écrivez-moi à breizhapp@outlook.fr.");
    } finally {
      setLoading(false);
    }
  }

  const restart = () => { setA(EMPTY); setStep(0); setSent(false); };

  // Barre de progression (on ne compte pas l'étape sautée)
  const total = STEPS.length - (skipFeatures ? 1 : 0);
  const position = step + 1 - (skipFeatures && step > STEPS.indexOf("features") ? 1 : 0);
  const progress = Math.round((position / total) * 100);

  const option = (checked: boolean, label: string, onClick: () => void) => (
    <button
      key={label}
      type="button"
      onClick={onClick}
      aria-pressed={checked}
      className={`flex items-center gap-3 text-left px-3 py-2.5 brutal-border transition-colors ${checked ? "bg-[#FFE234]" : "bg-white hover:bg-[#FFFBF0]"}`}
    >
      <span className={`w-5 h-5 shrink-0 border-2 border-black flex items-center justify-center ${checked ? "bg-[#0A0A0A] text-[#FFE234]" : "bg-white"}`}>
        {checked && <Check size={13} strokeWidth={3} />}
      </span>
      <span className="font-medium">{label}</span>
    </button>
  );

  // Option « Autre » + champ libre affiché quand elle est cochée
  const otherField = (key: ChoiceKey, checked: boolean, onClick: () => void) => (
    <>
      {option(checked, "Autre", onClick)}
      {checked && (
        <input
          autoFocus
          type="text"
          placeholder="Précisez..."
          value={a.other[key]}
          onChange={(e) => setA((prev) => ({ ...prev, other: { ...prev.other, [key]: e.target.value } }))}
          onKeyDown={(e) => e.key === "Enter" && canNext && go(1)}
          className="w-full brutal-border p-3 font-medium outline-none focus:bg-[#FFFBF0]"
        />
      )}
    </>
  );

  const single = (key: "stage" | "timing" | "budget", options: string[]) => (
    <div className="flex flex-col gap-2">
      {options.map((o) => option(a[key] === o, o, () => setA({ ...a, [key]: o })))}
      {otherField(key, a[key] === OTHER, () => setA({ ...a, [key]: OTHER }))}
    </div>
  );

  const QUESTIONS: Record<StepId, { title: string; body: React.ReactNode }> = {
    services: {
      title: "Quel type de projet souhaitez-vous lancer ?",
      body: (
        <div className="flex flex-col gap-2">
          {SERVICES.map((s) => option(a.services.includes(s.id), s.label, () => toggle("services", s.id)))}
          {otherField("services", a.services.includes(OTHER), () => toggle("services", OTHER))}
        </div>
      ),
    },
    features: {
      title: "De quelles fonctionnalités avez-vous besoin ?",
      body: (
        <div className="flex flex-col gap-2">
          {featureOptions.map((f) => option(a.features.includes(f), f, () => toggle("features", f)))}
          {otherField("features", a.features.includes(OTHER), () => toggle("features", OTHER))}
        </div>
      ),
    },
    stage: { title: "Où en êtes-vous dans votre projet ?", body: single("stage", STAGES) },
    timing: { title: "Quand souhaitez-vous lancer ce projet ?", body: single("timing", TIMINGS) },
    budget: { title: "Quel budget prévoyez-vous ?", body: single("budget", BUDGETS) },
    name: {
      title: "Quel est votre nom / prénom ?",
      body: (
        <input
          autoFocus
          type="text"
          autoComplete="name"
          placeholder="Jean Dupont"
          value={a.name}
          onChange={(e) => setA({ ...a, name: e.target.value })}
          onKeyDown={(e) => e.key === "Enter" && canNext && go(1)}
          className="w-full brutal-border p-3 font-medium outline-none focus:bg-[#FFFBF0]"
        />
      ),
    },
    email: {
      title: "Quelle est votre adresse e-mail ?",
      body: (
        <input
          autoFocus
          type="email"
          autoComplete="email"
          placeholder="jean@example.com"
          value={a.email}
          onChange={(e) => setA({ ...a, email: e.target.value })}
          onKeyDown={(e) => e.key === "Enter" && canNext && go(1)}
          className="w-full brutal-border p-3 font-medium outline-none focus:bg-[#FFFBF0]"
        />
      ),
    },
    details: {
      title: "Un détail à ajouter ? (facultatif)",
      body: (
        <textarea
          autoFocus
          rows={4}
          placeholder="Décrivez votre idée en quelques mots..."
          value={a.details}
          onChange={(e) => setA({ ...a, details: e.target.value })}
          className="w-full brutal-border p-3 font-medium outline-none focus:bg-[#FFFBF0] resize-none"
        />
      ),
    },
  };

  const isLast = step === STEPS.length - 1;

  return (
    <section id="tarifs" className="py-24 border-y-[3px] border-black bg-[#FFFBF0]">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* Accroche */}
        <div>
          <p className="mono text-sm font-bold mb-2 text-gray-400">{"// parlons de votre projet"}</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Estimez votre{" "}
            <span className="bg-[#FFE234] px-3 brutal-border">projet</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-md leading-relaxed">
            Application mobile, site web, boutique en ligne ou web app : répondez à quelques questions,
            je vous envoie une estimation personnalisée sous 24h.
          </p>
          <ul className="mt-6 flex flex-col gap-2 font-semibold">
            <li>⏱️ Moins d&apos;une minute</li>
            <li>💡 Estimation gratuite et sans engagement</li>
            <li>📩 Réponse personnalisée sous 24h</li>
          </ul>
        </div>

        {/* Questionnaire */}
        <div className="brutal-border brutal-shadow-lg bg-white p-6 md:p-8 w-full max-w-lg lg:ml-auto">
          {sent ? (
            <div className="flex flex-col items-start gap-4 py-4">
              <CheckCircle size={40} className="text-[#00D4AA]" />
              <p className="mono text-sm font-bold">🎉 Votre demande a bien été envoyée.</p>
              <h3 className="text-3xl font-bold leading-tight">Merci {a.name.trim().split(" ")[0]} !</h3>
              <p className="text-gray-600 leading-relaxed">
                Je regarde votre projet et je reviens vers vous sous 24h avec une estimation personnalisée.
              </p>
              <button type="button" onClick={restart} className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3">
                Faire une nouvelle demande
              </button>
            </div>
          ) : (
            <>
              <div className="h-2 bg-gray-100 border-2 border-black mb-8" aria-hidden>
                <div className="h-full bg-[#FFE234] transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>

              <p className="mono text-xs font-bold text-gray-400 mb-2">Question {position} / {total}</p>
              <h3 className="text-2xl font-bold leading-snug mb-6">{QUESTIONS[current].title}</h3>

              {QUESTIONS[current].body}

              {error && (
                <p className="brutal-border bg-red-50 text-red-700 p-3 text-sm font-semibold mt-4">{error}</p>
              )}

              <div className="flex flex-col gap-3 mt-8">
                <button
                  type="button"
                  disabled={!canNext || loading}
                  onClick={() => (isLast ? submit() : go(1))}
                  className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {loading ? "Envoi en cours..." : isLast ? "Recevoir mon estimation" : "Suivant"}
                </button>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="brutal-btn bg-white text-[#0A0A0A] px-6 py-3 justify-center"
                  >
                    Précédent
                  </button>
                )}
              </div>

              <p className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-5">
                <CheckCheck size={16} className="text-[#00D4AA]" />
                Estimation gratuite et sans engagement.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
