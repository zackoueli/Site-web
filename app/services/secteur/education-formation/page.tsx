import type { Metadata } from "next";
import SectorPage, { MockScreen } from "@/components/SectorPage";
import { GraduationCap } from "lucide-react";

const TITLE = "Application mobile éducation & formation | BreizhApp";
const DESCRIPTION =
  "Développeur freelance à Brest, je crée votre plateforme de formation ou app e-learning : cours, quiz, progression, certificats, paiement. Devis gratuit 24h.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://breizhapp.tech/services/secteur/education-formation" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://breizhapp.tech/services/secteur/education-formation",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const faq = [
  {
    q: "Combien coûte une plateforme de formation sur mesure ?",
    a: "Une plateforme web de formation (web app) démarre à 3 000 €, une application mobile iOS & Android à 4 000 €. Le prix dépend des fonctionnalités : quiz, certificats, classes virtuelles, espace formateur, paiement. Devis détaillé sous 24h.",
  },
  {
    q: "Pourquoi pas Teachizy, LearnyBox ou Kajabi ?",
    a: "Ces plateformes permettent de démarrer vite, mais vous payez chaque mois, souvent davantage quand vos apprenants sont nombreux, et vos formations ressemblent à celles de tous les autres. Une plateforme sur mesure suit votre pédagogie, porte votre marque et vous appartient.",
  },
  {
    q: "La plateforme aide-t-elle pour Qualiopi ?",
    a: "Elle peut produire les preuves dont vous avez besoin : suivi de connexion et de progression, résultats aux évaluations, questionnaires de satisfaction et attestations. La certification Qualiopi reste celle de votre organisme, mais la plateforme facilite la traçabilité demandée.",
  },
  {
    q: "Peut-on vendre les formations en ligne ?",
    a: "Oui : paiement unique, en plusieurs fois ou abonnement à une bibliothèque, via Stripe. Vous pouvez aussi créer des accès pour des entreprises clientes qui inscrivent leurs salariés.",
  },
  {
    q: "Les apprenants peuvent-ils suivre les cours sur mobile ?",
    a: "Oui, et c'est tout l'intérêt d'une application : leçons courtes, vidéos téléchargeables pour les suivre hors connexion, quiz et rappels pour ne pas décrocher.",
  },
  {
    q: "Comment fonctionnent les certificats ?",
    a: "Un certificat ou une attestation est généré automatiquement quand l'apprenant a terminé le parcours et réussi les évaluations, avec ses informations et la date.",
  },
  {
    q: "En combien de temps la plateforme est-elle prête ?",
    a: "Entre 4 et 8 semaines selon le nombre de fonctionnalités et d'interfaces (apprenant, formateur, administrateur).",
  },
];

export default function EducationPage() {
  return (
    <SectorPage
      slug="education-formation"
      color="#2563EB"
      icon={GraduationCap}
      breadcrumb="Application éducation & formation"
      h1="Application et plateforme de formation en ligne"
      subtitle="Cours · Quiz · Progression · Certificats"
      intro="Votre propre plateforme de formation, à votre nom : une web app, une application mobile ou les deux. Vos apprenants suivent les cours, passent les quiz et obtiennent leur certificat, depuis leur ordinateur ou leur téléphone. Vous suivez leur progression depuis un tableau de bord, sans abonnement à une plateforme."
      guide={{ href: "/blog/creer-plateforme-digitale-sur-mesure", label: "Créer une plateforme sur mesure" }}
      visual={
        <MockScreen
          kicker="MODULE 3 · 45 %"
          title="Gestion de projet"
          accent="#93C5FD"
          rows={[
            { top: "Vidéo · 8 min", main: "Planifier un projet", badge: "Vu" },
            { top: "Lecture · 5 min", main: "Les outils du planning", badge: "Vu" },
            { top: "Quiz · 10 questions", main: "Évaluation du module", badge: "À faire", muted: true },
            { top: "Classe virtuelle", main: "Jeudi 14h avec Claire", badge: "Inscrit" },
          ]}
          footer={{ kicker: "CERTIFICAT", text: "Débloqué à 100 % du parcours" }}
        />
      }
      enBref="Je crée des plateformes de formation et des applications e-learning sur mesure pour les organismes de formation, formateurs indépendants, écoles, associations et entreprises : cours vidéo, quiz, progression, certificats, classes virtuelles et paiement en ligne. Je m'appelle Enzo, développeur freelance basé à Brest, et je travaille avec des formateurs partout en France. Une plateforme web démarre à 3 000 €, une application mobile à 4 000 €. Pas d'abonnement par apprenant, et la plateforme comme vos contenus vous appartiennent."
      stats={[
        { label: "Livraison", value: "4 à 8 semaines" },
        { label: "Budget indicatif", value: "Dès 3 000 €" },
        { label: "Abonnement par apprenant", value: "Aucun" },
      ]}
      sections={[
        {
          title: "Côté apprenant",
          highlight: "apprenant",
          cols: 3,
          check: true,
          items: [
            { title: "Parcours structurés", desc: "Modules, leçons vidéo, textes et documents, débloqués dans l'ordre que vous choisissez." },
            { title: "Quiz et évaluations", desc: "QCM, exercices et évaluations finales corrigés automatiquement." },
            { title: "Progression visible", desc: "Pourcentage d'avancement, prochaine leçon et reprise là où l'apprenant s'était arrêté." },
            { title: "Hors connexion", desc: "Vidéos téléchargées dans l'application pour apprendre dans le train." },
            { title: "Certificats", desc: "Attestation générée automatiquement à la fin du parcours." },
            { title: "Rappels", desc: "Notifications pour ne pas décrocher et ne pas manquer une classe virtuelle." },
          ],
        },
        {
          title: "Côté formateur et organisme",
          dark: true,
          items: [
            { emoji: "📊", title: "Suivi des apprenants", desc: "Connexions, temps passé, résultats et décrochages repérés tôt." },
            { emoji: "🧾", title: "Traçabilité", desc: "Historique, évaluations et questionnaires de satisfaction, utiles pour Qualiopi." },
            { emoji: "🎥", title: "Classes virtuelles", desc: "Sessions en visio planifiées, inscriptions et replays." },
            { emoji: "🏢", title: "Accès entreprises", desc: "Une entreprise cliente inscrit ses salariés et suit leur progression." },
          ],
        },
        {
          title: "Pour qui ?",
          highlight: "qui",
          items: [
            { emoji: "🎓", title: "Organismes de formation", desc: "Formations financées, traçabilité et parcours en ligne ou mixtes." },
            { emoji: "🧑‍🏫", title: "Formateurs et coachs", desc: "Vendre vos formations en ligne sous votre propre marque." },
            { emoji: "🏫", title: "Écoles et associations", desc: "Cours, devoirs, ressources et communication avec les familles." },
            { emoji: "🏭", title: "Entreprises", desc: "Onboarding des nouveaux salariés et formation interne." },
          ],
        },
      ]}
      choices={[
        { title: "Une plateforme web", desc: "Accessible depuis n'importe quel navigateur, idéale pour les formations longues sur ordinateur. Dès 3 000 €." },
        { title: "Une application mobile", desc: "Pour les leçons courtes, le hors connexion et les rappels sur le téléphone. Dès 4 000 €." },
        { title: "Les deux, reliés", desc: "Le même compte et la même progression sur ordinateur et sur mobile." },
      ]}
      steps={[
        { title: "On échange", desc: "Vos formations, votre public, vos obligations et votre modèle de vente." },
        { title: "Devis et maquettes", desc: "Devis détaillé sous 24h, puis maquettes des parcours apprenant et formateur." },
        { title: "Développement", desc: "Construction de la plateforme et intégration d'un premier parcours." },
        { title: "Mise en ligne", desc: "Publication, formation de votre équipe et accompagnement de la première session." },
      ]}
      faq={faq}
      faqTitle="Questions fréquentes : plateforme de formation en ligne"
      ctaTitle="Lancez votre plateforme de formation"
      serviceName="Application et plateforme de formation en ligne"
      serviceDescription="Création de plateformes de formation et d'applications e-learning sur mesure : cours vidéo, quiz, progression, certificats, classes virtuelles, suivi des apprenants et paiement en ligne."
    />
  );
}
