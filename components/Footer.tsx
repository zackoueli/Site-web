export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="brutal-border border-t-[3px] bg-[#0A0A0A] text-[#FFFBF0]">
      {/* CTA banner */}
      <div className="border-b-[3px] border-[#FFE234] bg-[#FFE234] text-[#0A0A0A] py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-bold text-xl">Prêt à créer votre application mobile ?</p>
            <p className="text-sm">Devis gratuit · Réponse sous 24h</p>
          </div>
          <a href="#contact" className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3">
            Démarrer maintenant →
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="font-bold text-xl mono mb-3 flex items-center gap-2">
            <span className="bg-[#FFE234] text-[#0A0A0A] px-2 py-0.5 text-sm brutal-border border-[#FFE234]">BREIZH</span>
            App
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Développeur freelance spécialisé en création d'applications mobiles
            iOS & Android sur mesure.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="font-bold mb-3 text-[#FFE234]">Navigation</p>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            {[
              ["Services", "/#services"],
              ["Portfolio", "/#portfolio"],
              ["Tarifs", "/#tarifs"],
              ["Blog", "/blog"],
              ["FAQ", "/#faq"],
              ["Contact", "/#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#FFFBF0] transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="font-bold mb-3 text-[#FFE234]">Spécialités</p>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            {[
              "Application restaurant",
              "Application e-commerce",
              "Application maraîcher",
              "Jeu mobile",
              "App sur mesure",
            ].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 px-4 text-center text-sm text-gray-600 mono">
        © {year} BreizhApp — Création d'applications mobiles iOS & Android
      </div>
    </footer>
  );
}
