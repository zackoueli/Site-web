"use client";
import { useState } from "react";

type Ligne = {
  titre: string;
  description: string;
  quantite: number;
  prixHT: number;
};

const defaultLigne = (): Ligne => ({ titre: "", description: "", quantite: 1, prixHT: 0 });

export default function DevisPage() {
  const [type, setType] = useState<"devis" | "acompte" | "solde">("devis");
  const [numero, setNumero] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [validite, setValidite] = useState(30);
  const [devisRef, setDevisRef] = useState("");
  const [client, setClient] = useState({ nom: "", email: "", adresse: "", ville: "", siret: "" });
  const [lignes, setLignes] = useState<Ligne[]>([defaultLigne()]);
  const [acompte, setAcompte] = useState(30);
  const [delai, setDelai] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalHT = lignes.reduce((s, l) => s + l.quantite * l.prixHT, 0);
  const montantAcompte = totalHT * (acompte / 100);
  const montantSolde = totalHT - montantAcompte;

  function formatEur(n: number) {
    return n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
  }

  function updateLigne(i: number, field: keyof Ligne, value: string | number) {
    setLignes((prev) => prev.map((l, idx) => idx === i ? { ...l, [field]: value } : l));
  }

  function addLigne() {
    setLignes((prev) => [...prev, defaultLigne()]);
  }

  function removeLigne(i: number) {
    setLignes((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function generate() {
    setError("");
    if (!numero || !client.nom || !client.email || !delai || lignes.some(l => !l.titre)) {
      setError("Remplis tous les champs obligatoires.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/generate-devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, numero, date, validite: type === "devis" ? validite : undefined, client, lignes, acompte, delai, devisRef: devisRef || undefined }),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${type}-${numero}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setError("Erreur lors de la génération du PDF.");
    } finally {
      setLoading(false);
    }
  }

  const inputCls = "w-full brutal-border px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFE234]";
  const labelCls = "block text-xs font-bold uppercase tracking-wider mb-1";

  return (
    <main className="min-h-screen bg-[#FFFBF0] px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="brutal-border border-[3px] p-6 mb-8 bg-[#FFE234]">
          <h1 className="text-2xl font-bold">Générateur de devis</h1>
          <p className="text-sm mt-1">BreizhApp · Usage interne</p>
        </div>

        {/* Type de document */}
        <section className="brutal-border border-[2px] p-5 mb-5 bg-white">
          <h2 className="font-bold mb-3 uppercase text-sm tracking-wider">Type de document</h2>
          <div className="flex gap-3">
            {(["devis", "acompte", "solde"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`brutal-border px-4 py-2 text-sm font-bold capitalize transition-all ${type === t ? "bg-[#0A0A0A] text-[#FFE234]" : "bg-white hover:bg-[#FFE234]"}`}
              >
                {t === "devis" ? "Devis" : t === "acompte" ? "Facture d'acompte" : "Facture de solde"}
              </button>
            ))}
          </div>
        </section>

        {/* Infos document */}
        <section className="brutal-border border-[2px] p-5 mb-5 bg-white">
          <h2 className="font-bold mb-4 uppercase text-sm tracking-wider">Informations document</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Numéro *</label>
              <input className={inputCls} value={numero} onChange={e => setNumero(e.target.value)} placeholder="2024-001" />
            </div>
            <div>
              <label className={labelCls}>Date *</label>
              <input type="date" className={inputCls} value={date} onChange={e => setDate(e.target.value)} />
            </div>
            {type === "devis" && (
              <div>
                <label className={labelCls}>Validité (jours)</label>
                <input type="number" className={inputCls} value={validite} onChange={e => setValidite(Number(e.target.value))} min={1} />
              </div>
            )}
            {(type === "acompte" || type === "solde") && (
              <div>
                <label className={labelCls}>Réf. devis</label>
                <input className={inputCls} value={devisRef} onChange={e => setDevisRef(e.target.value)} placeholder="2024-001" />
              </div>
            )}
          </div>
        </section>

        {/* Client */}
        <section className="brutal-border border-[2px] p-5 mb-5 bg-white">
          <h2 className="font-bold mb-4 uppercase text-sm tracking-wider">Client</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className={labelCls}>Nom / Société *</label>
              <input className={inputCls} value={client.nom} onChange={e => setClient(c => ({ ...c, nom: e.target.value }))} placeholder="Nom du client" />
            </div>
            <div className="col-span-2">
              <label className={labelCls}>Email *</label>
              <input type="email" className={inputCls} value={client.email} onChange={e => setClient(c => ({ ...c, email: e.target.value }))} placeholder="client@exemple.fr" />
            </div>
            <div>
              <label className={labelCls}>Adresse</label>
              <input className={inputCls} value={client.adresse} onChange={e => setClient(c => ({ ...c, adresse: e.target.value }))} placeholder="12 rue de la Paix" />
            </div>
            <div>
              <label className={labelCls}>Ville</label>
              <input className={inputCls} value={client.ville} onChange={e => setClient(c => ({ ...c, ville: e.target.value }))} placeholder="75001 Paris, France" />
            </div>
            <div>
              <label className={labelCls}>SIRET (optionnel)</label>
              <input className={inputCls} value={client.siret} onChange={e => setClient(c => ({ ...c, siret: e.target.value }))} placeholder="123 456 789 00010" />
            </div>
          </div>
        </section>

        {/* Lignes */}
        <section className="brutal-border border-[2px] p-5 mb-5 bg-white">
          <h2 className="font-bold mb-4 uppercase text-sm tracking-wider">Prestations</h2>
          <div className="flex flex-col gap-4">
            {lignes.map((ligne, i) => (
              <div key={i} className="brutal-border border-[2px] p-4 bg-[#FFFBF0] relative">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Ligne {i + 1}</span>
                  {lignes.length > 1 && (
                    <button onClick={() => removeLigne(i)} className="text-xs brutal-border px-2 py-0.5 bg-red-100 hover:bg-red-200 font-bold">✕ Supprimer</button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <label className={labelCls}>Titre *</label>
                    <input className={inputCls} value={ligne.titre} onChange={e => updateLigne(i, "titre", e.target.value)} placeholder="Développement application mobile" />
                  </div>
                  <div className="col-span-2">
                    <label className={labelCls}>Description</label>
                    <textarea className={inputCls + " resize-none"} rows={3} value={ligne.description} onChange={e => updateLigne(i, "description", e.target.value)} placeholder="Détail de la prestation..." />
                  </div>
                  <div>
                    <label className={labelCls}>Quantité</label>
                    <input type="number" className={inputCls} value={ligne.quantite} onChange={e => updateLigne(i, "quantite", Number(e.target.value))} min={1} step={1} />
                  </div>
                  <div>
                    <label className={labelCls}>Prix unitaire HT (€)</label>
                    <input type="number" className={inputCls} value={ligne.prixHT} onChange={e => updateLigne(i, "prixHT", Number(e.target.value))} min={0} step={10} />
                  </div>
                </div>
                <div className="mt-2 text-right text-sm font-bold">
                  Total : {formatEur(ligne.quantite * ligne.prixHT)}
                </div>
              </div>
            ))}
          </div>
          <button onClick={addLigne} className="brutal-btn mt-4 px-4 py-2 bg-[#FFE234] text-sm font-bold">+ Ajouter une ligne</button>
        </section>

        {/* Conditions */}
        <section className="brutal-border border-[2px] p-5 mb-5 bg-white">
          <h2 className="font-bold mb-4 uppercase text-sm tracking-wider">Conditions</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Acompte (%)</label>
              <input type="number" className={inputCls} value={acompte} onChange={e => setAcompte(Number(e.target.value))} min={0} max={100} step={5} />
              <p className="text-xs text-gray-500 mt-1">Montant : {formatEur(montantAcompte)}</p>
            </div>
            <div>
              <label className={labelCls}>Délai de réalisation *</label>
              <input className={inputCls} value={delai} onChange={e => setDelai(e.target.value)} placeholder="4 à 6 semaines" />
            </div>
          </div>
        </section>

        {/* Récap */}
        <section className="brutal-border border-[2px] p-5 mb-6 bg-[#0A0A0A] text-[#FFFBF0]">
          <h2 className="font-bold mb-3 uppercase text-sm tracking-wider text-[#FFE234]">Récapitulatif</h2>
          <div className="flex justify-between text-sm mb-1">
            <span>Total HT</span><span className="font-bold">{formatEur(totalHT)}</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Acompte ({acompte}%)</span><span className="font-bold">{formatEur(montantAcompte)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Solde à la livraison</span><span className="font-bold">{formatEur(montantSolde)}</span>
          </div>
        </section>

        {error && (
          <div className="brutal-border border-red-500 bg-red-50 px-4 py-3 text-red-700 text-sm font-bold mb-4">{error}</div>
        )}

        <button
          onClick={generate}
          disabled={loading}
          className="brutal-btn w-full py-4 bg-[#FFE234] text-[#0A0A0A] font-bold text-lg disabled:opacity-50"
        >
          {loading ? "Génération en cours..." : "Générer le PDF →"}
        </button>
      </div>
    </main>
  );
}
