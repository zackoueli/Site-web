import { Code2, MapPin, Zap, Users } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Design sur mesure, choisi ensemble",
    desc: "Je m'inspire de références Pinterest et Dribbble pour vous proposer plusieurs directions visuelles adaptées à votre projet. On choisit ensemble avant de coder.",
  },
  {
    icon: MapPin,
    title: "Basé à Brest, disponible partout",
    desc: "Freelance breton, je travaille avec des clients de toute la Bretagne et au-delà. Réunions en visio, livrables clairs, réponse rapide.",
  },
  {
    icon: Zap,
    title: "Livraison rapide",
    desc: "Un site web en 1 à 2 semaines, une app mobile en 2 à 8 semaines selon la complexité du projet. Des délais tenus, des points d'avancement réguliers.",
  },
  {
    icon: Users,
    title: "Un seul interlocuteur",
    desc: "Vous parlez directement au développeur. Pas de chef de projet intermédiaire, pas de prestation sous-traitée. Vous savez toujours où en est votre projet.",
  },
];

export default function About() {
  return (
    <section id="a-propos" className="py-24 bg-[#FFFBF0] text-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="mb-16">
          <p className="mono text-sm font-bold mb-2 text-gray-400">// qui je suis</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            À{" "}
            <span className="bg-[#FFE234] text-[#0A0A0A] px-3 brutal-border">
              propos
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div>
            <div className="brutal-border brutal-shadow bg-[#0A0A0A] text-[#FFFBF0] p-8 mb-6">
              <p className="font-bold text-2xl leading-snug mb-4">
                Je m'appelle Enzo.
                <br />
                Je conçois des plateformes et des outils
                <br />
                qui améliorent l'expérience client
                <br />
                et créent de la valeur pour votre activité.
              </p>
              <p className="text-sm leading-relaxed text-gray-400">
                Développeur freelance basé à Brest, je travaille avec des artisans, commerçants et entrepreneurs qui veulent une solution digitale pensée pour leur métier, pas une solution générique adaptée à la va-vite.
              </p>
            </div>

            <div className="brutal-border bg-white p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="mono text-xs text-gray-400 w-24 shrink-0">Stack</span>
                <span className="font-bold text-sm">React Native · Next.js · Firebase · Stripe</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="mono text-xs text-gray-400 w-24 shrink-0">Spécialité</span>
                <span className="font-bold text-sm">Apps mobiles & plateformes métier</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="mono text-xs text-gray-400 w-24 shrink-0">Localisation</span>
                <span className="font-bold text-sm">Brest, Bretagne</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="mono text-xs text-gray-400 w-24 shrink-0">Disponibilité</span>
                <span className="inline-flex items-center gap-2 font-bold text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" />
                  Disponible maintenant
                </span>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 gap-4 content-start">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="brutal-border brutal-shadow bg-white p-5">
                <Icon size={20} className="text-[#0A0A0A] mb-3" />
                <h3 className="font-bold text-sm mb-2 leading-tight">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#contact"
            className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-8 py-4 text-base"
          >
            Démarrer mon projet
          </a>
          <a
            href="/portfolio"
            className="brutal-btn bg-[#FFE234] text-[#0A0A0A] px-8 py-4 text-base"
          >
            Voir mes réalisations →
          </a>
        </div>

      </div>
    </section>
  );
}
