import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Helvetica",
  fonts: [],
});

const BLACK = "#0A0A0A";
const YELLOW = "#FFE234";
const CREAM = "#FFFBF0";
const GRAY = "#666666";
const LIGHTGRAY = "#E5E5E5";

const styles = StyleSheet.create({
  page: {
    backgroundColor: CREAM,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: BLACK,
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 40,
  },
  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: BLACK,
  },
  logoBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  logoBadge: {
    backgroundColor: YELLOW,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderWidth: 2,
    borderColor: BLACK,
  },
  logoBadgeText: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: BLACK,
  },
  logoText: {
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
    color: BLACK,
  },
  docTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 22,
    color: BLACK,
    textAlign: "right",
  },
  docMeta: {
    fontSize: 8,
    color: GRAY,
    textAlign: "right",
    marginTop: 2,
  },
  // Parties
  partiesRow: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 25,
  },
  partyBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: BLACK,
    padding: 12,
  },
  partyBoxYellow: {
    flex: 1,
    borderWidth: 2,
    borderColor: BLACK,
    padding: 12,
    backgroundColor: YELLOW,
  },
  partyLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7,
    color: GRAY,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  partyLabelDark: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7,
    color: BLACK,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  partyName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    color: BLACK,
    marginBottom: 4,
  },
  partyDetail: {
    fontSize: 8,
    color: BLACK,
    lineHeight: 1.5,
  },
  // Table
  tableHeader: {
    flexDirection: "row",
    backgroundColor: BLACK,
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginBottom: 0,
  },
  tableHeaderText: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    color: YELLOW,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: LIGHTGRAY,
  },
  tableRowAlt: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: LIGHTGRAY,
    backgroundColor: "#F5F3E8",
  },
  colDesc: { flex: 4 },
  colQty: { flex: 1, textAlign: "right" },
  colPu: { flex: 1.2, textAlign: "right" },
  colTotal: { flex: 1.2, textAlign: "right" },
  descTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: BLACK,
    marginBottom: 4,
  },
  descBody: {
    fontSize: 8,
    color: GRAY,
    lineHeight: 1.5,
  },
  cellText: {
    fontSize: 9,
    color: BLACK,
  },
  // Totaux
  totalsSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
  },
  totalsBox: {
    width: 220,
    borderWidth: 2,
    borderColor: BLACK,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: LIGHTGRAY,
  },
  totalRowFinal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: BLACK,
  },
  totalLabel: { fontSize: 8, color: GRAY },
  totalValue: { fontSize: 8, color: BLACK, fontFamily: "Helvetica-Bold" },
  totalLabelFinal: { fontSize: 10, color: YELLOW, fontFamily: "Helvetica-Bold" },
  totalValueFinal: { fontSize: 10, color: YELLOW, fontFamily: "Helvetica-Bold" },
  // Acompte
  acompteSection: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: BLACK,
    padding: 12,
    backgroundColor: YELLOW,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  acompteLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: BLACK,
  },
  acompteDetail: {
    fontSize: 8,
    color: BLACK,
    marginTop: 2,
  },
  acompteAmount: {
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
    color: BLACK,
  },
  // Conditions
  conditionsRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },
  condBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: LIGHTGRAY,
    padding: 10,
  },
  condLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7,
    color: GRAY,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 3,
  },
  condValue: {
    fontSize: 8,
    color: BLACK,
  },
  // IBAN
  ibanBox: {
    marginTop: 16,
    borderWidth: 2,
    borderColor: BLACK,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  ibanLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    color: BLACK,
    marginBottom: 2,
  },
  ibanValue: {
    fontSize: 8,
    color: GRAY,
    fontFamily: "Helvetica",
  },
  // Footer
  footer: {
    position: "absolute",
    bottom: 25,
    left: 40,
    right: 40,
    borderTopWidth: 2,
    borderTopColor: BLACK,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 7,
    color: GRAY,
  },
  // Mention légale
  mention: {
    marginTop: 16,
    fontSize: 7,
    color: GRAY,
    lineHeight: 1.6,
  },
  // Signature
  signatureSection: {
    flexDirection: "row",
    gap: 20,
    marginTop: 24,
  },
  signatureBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: BLACK,
    padding: 12,
    minHeight: 80,
  },
  signatureBoxYellow: {
    flex: 1,
    borderWidth: 2,
    borderColor: BLACK,
    padding: 12,
    minHeight: 80,
    backgroundColor: YELLOW,
  },
  signatureLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7,
    color: GRAY,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  signatureLabelDark: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7,
    color: BLACK,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  signatureSubtext: {
    fontSize: 7,
    color: GRAY,
    marginBottom: 30,
  },
  signatureSubtextDark: {
    fontSize: 7,
    color: BLACK,
    marginBottom: 30,
  },
  signatureLine: {
    borderTopWidth: 1,
    borderTopColor: BLACK,
    marginTop: 4,
  },
  signatureLineText: {
    fontSize: 6,
    color: GRAY,
    marginTop: 3,
  },
});

export type DevisData = {
  type: "devis" | "acompte" | "solde";
  numero: string;
  date: string;
  validite?: number;
  client: {
    nom: string;
    email: string;
    adresse: string;
    ville: string;
    siret?: string;
  };
  lignes: {
    titre: string;
    description: string;
    quantite: number;
    prixHT: number;
  }[];
  acompte: number;
  delai: string;
  devisRef?: string;
};

function formatEur(n: number) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}

export function DevisPDF({ data }: { data: DevisData }) {
  const totalHT = data.lignes.reduce((s, l) => s + l.quantite * l.prixHT, 0);
  const montantAcompte = totalHT * (data.acompte / 100);
  const montantSolde = totalHT - montantAcompte;

  const docLabel =
    data.type === "acompte"
      ? "FACTURE D'ACOMPTE"
      : data.type === "solde"
      ? "FACTURE DE SOLDE"
      : "DEVIS";

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.logoBox}>
            <View style={styles.logoBadge}>
              <Text style={styles.logoBadgeText}>BREIZH</Text>
            </View>
            <Text style={styles.logoText}>App</Text>
          </View>
          <View>
            <Text style={styles.docTitle}>{docLabel}</Text>
            <Text style={styles.docMeta}>N° {data.numero}</Text>
            <Text style={styles.docMeta}>Date : {data.date}</Text>
            {data.validite && (
              <Text style={styles.docMeta}>Validité : {data.validite} jours</Text>
            )}
          </View>
        </View>

        {/* PARTIES */}
        <View style={styles.partiesRow}>
          <View style={styles.partyBoxYellow}>
            <Text style={styles.partyLabelDark}>Émetteur</Text>
            <Text style={styles.partyName}>BreizhApp</Text>
            <Text style={styles.partyDetail}>Enzo Omnes</Text>
            <Text style={styles.partyDetail}>121 Kerhernic</Text>
            <Text style={styles.partyDetail}>29870 Lannilis, France</Text>
            <Text style={styles.partyDetail}>enzo.omnes@gmail.com</Text>
            <Text style={styles.partyDetail}>breizhapp.tech</Text>
            <Text style={styles.partyDetail}>SIRET : 10410831100010</Text>
          </View>
          <View style={styles.partyBox}>
            <Text style={styles.partyLabel}>Destinataire</Text>
            <Text style={styles.partyName}>{data.client.nom}</Text>
            <Text style={styles.partyDetail}>{data.client.adresse}</Text>
            <Text style={styles.partyDetail}>{data.client.ville}</Text>
            <Text style={styles.partyDetail}>{data.client.email}</Text>
            {data.client.siret && (
              <Text style={styles.partyDetail}>SIRET : {data.client.siret}</Text>
            )}
          </View>
        </View>

        {/* TABLE */}
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.colDesc]}>Description</Text>
          <Text style={[styles.tableHeaderText, styles.colQty]}>Qté</Text>
          <Text style={[styles.tableHeaderText, styles.colPu]}>P.U. HT</Text>
          <Text style={[styles.tableHeaderText, styles.colTotal]}>Total HT</Text>
        </View>

        {data.lignes.map((ligne, i) => (
          <View key={i} style={i % 2 === 0 ? styles.tableRow : styles.tableRowAlt}>
            <View style={styles.colDesc}>
              <Text style={styles.descTitle}>{ligne.titre}</Text>
              <Text style={styles.descBody}>{ligne.description}</Text>
            </View>
            <Text style={[styles.cellText, styles.colQty]}>{ligne.quantite}</Text>
            <Text style={[styles.cellText, styles.colPu]}>{formatEur(ligne.prixHT)}</Text>
            <Text style={[styles.cellText, styles.colTotal]}>{formatEur(ligne.quantite * ligne.prixHT)}</Text>
          </View>
        ))}

        {/* TOTAUX */}
        <View style={styles.totalsSection}>
          <View style={styles.totalsBox}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total HT</Text>
              <Text style={styles.totalValue}>{formatEur(totalHT)}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>TVA</Text>
              <Text style={styles.totalValue}>0,00 €</Text>
            </View>
            <View style={styles.totalRowFinal}>
              <Text style={styles.totalLabelFinal}>TOTAL TTC</Text>
              <Text style={styles.totalValueFinal}>{formatEur(totalHT)}</Text>
            </View>
          </View>
        </View>

        {/* ACOMPTE / SOLDE */}
        {data.type === "devis" && (
          <View style={styles.acompteSection}>
            <View>
              <Text style={styles.acompteLabel}>Acompte à la commande ({data.acompte}%)</Text>
              <Text style={styles.acompteDetail}>Solde à la livraison : {formatEur(montantSolde)}</Text>
            </View>
            <Text style={styles.acompteAmount}>{formatEur(montantAcompte)}</Text>
          </View>
        )}

        {data.type === "acompte" && (
          <View style={styles.acompteSection}>
            <View>
              <Text style={styles.acompteLabel}>Acompte {data.acompte}% — ref. devis {data.devisRef}</Text>
              <Text style={styles.acompteDetail}>Solde restant dû à la livraison : {formatEur(montantSolde)}</Text>
            </View>
            <Text style={styles.acompteAmount}>{formatEur(montantAcompte)}</Text>
          </View>
        )}

        {data.type === "solde" && (
          <View style={styles.acompteSection}>
            <View>
              <Text style={styles.acompteLabel}>Solde — ref. devis {data.devisRef}</Text>
              <Text style={styles.acompteDetail}>Acompte de {data.acompte}% ({formatEur(montantAcompte)}) déjà réglé</Text>
            </View>
            <Text style={styles.acompteAmount}>{formatEur(montantSolde)}</Text>
          </View>
        )}

        {/* CONDITIONS */}
        <View style={styles.conditionsRow}>
          <View style={styles.condBox}>
            <Text style={styles.condLabel}>Délai de réalisation</Text>
            <Text style={styles.condValue}>{data.delai}</Text>
          </View>
          <View style={styles.condBox}>
            <Text style={styles.condLabel}>Mode de règlement</Text>
            <Text style={styles.condValue}>Virement bancaire</Text>
          </View>
          <View style={styles.condBox}>
            <Text style={styles.condLabel}>Conditions</Text>
            <Text style={styles.condValue}>À réception de facture</Text>
          </View>
        </View>

        {/* IBAN */}
        {(data.type === "acompte" || data.type === "solde") && (
          <View style={styles.ibanBox}>
            <View>
              <Text style={styles.ibanLabel}>Coordonnées bancaires</Text>
              <Text style={styles.ibanValue}>Titulaire : Enzo Omnes</Text>
              <Text style={styles.ibanValue}>IBAN : FR76 1558 9297 2404 3293 3964 090</Text>
            </View>
          </View>
        )}

        {/* MENTION LÉGALE */}
        <Text style={styles.mention}>
          TVA non applicable — Article 293 B du CGI.{"\n"}
          {data.type === "devis"
            ? `Ce devis est valable ${data.validite} jours à compter de sa date d'émission. Tout commencement de prestation vaut acceptation du devis.`
            : "Facture émise par BreizhApp, micro-entrepreneur. Paiement par virement bancaire aux coordonnées ci-dessus."}
        </Text>

        {/* SIGNATURE — uniquement sur le devis */}
        {data.type === "devis" && (
          <View style={styles.signatureSection}>
            <View style={styles.signatureBoxYellow}>
              <Text style={styles.signatureLabelDark}>Émetteur</Text>
              <Text style={styles.signatureSubtextDark}>Enzo Omnes — BreizhApp</Text>
              <View style={styles.signatureLine} />
              <Text style={styles.signatureLineText}>Signature</Text>
            </View>
            <View style={styles.signatureBox}>
              <Text style={styles.signatureLabel}>Client — Bon pour accord</Text>
              <Text style={styles.signatureSubtext}>
                Nom : {data.client.nom}{"\n"}
                Date :
              </Text>
              <View style={styles.signatureLine} />
              <Text style={styles.signatureLineText}>Signature précédée de la mention « Bon pour accord »</Text>
            </View>
          </View>
        )}

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>BreizhApp — breizhapp.tech — enzo.omnes@gmail.com</Text>
          <Text style={styles.footerText}>{docLabel} N° {data.numero} — {data.date}</Text>
        </View>

      </Page>
    </Document>
  );
}
