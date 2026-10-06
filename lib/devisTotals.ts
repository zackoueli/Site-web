/** Calculs partagés entre le formulaire admin (DevisManager) et le PDF (DevisPDF). */

export type Remise = {
  libelle: string;
  type: "pourcent" | "montant";
  valeur: number;
};

export const defaultRemise = (): Remise => ({ libelle: "", type: "montant", valeur: 0 });

export function computeTotals(
  lignes: { quantite: number; prixHT: number }[],
  remise: Remise | undefined,
  acompte: number
) {
  const sousTotalHT = lignes.reduce((s, l) => s + l.quantite * l.prixHT, 0);
  const brut = remise ? (remise.type === "pourcent" ? sousTotalHT * (remise.valeur / 100) : remise.valeur) : 0;
  // La remise ne peut ni être négative ni dépasser le sous-total
  const montantRemise = Math.min(Math.max(brut || 0, 0), sousTotalHT);
  const totalHT = sousTotalHT - montantRemise;
  const montantAcompte = totalHT * (acompte / 100);
  return { sousTotalHT, montantRemise, totalHT, montantAcompte, montantSolde: totalHT - montantAcompte };
}

/** Libellé de la remise tel qu'affiché, ex. « Remise partenariat (10 %) ». */
export function remiseLabel(remise: Remise) {
  const libelle = remise.libelle.trim() || "Remise";
  return remise.type === "pourcent" ? `${libelle} (${remise.valeur} %)` : libelle;
}
