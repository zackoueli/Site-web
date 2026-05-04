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
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Développeur freelance spécialisé en création d'applications mobiles
            iOS & Android sur mesure.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="https://www.instagram.com/breizhappp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 brutal-border bg-[#FF6B9D] text-white px-4 py-2 text-sm font-bold hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#fff] transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @breizhappp
            </a>
            <a
              href="https://www.tiktok.com/@breizhapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 brutal-border bg-[#0A0A0A] border-white text-white px-4 py-2 text-sm font-bold hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#fff] transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z"/>
              </svg>
              @breizhapp
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574218054349"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 brutal-border bg-[#1877F2] text-white px-4 py-2 text-sm font-bold hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#fff] transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              BreizhApp
            </a>
          </div>
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
        <p>© {year} BreizhApp — Création d&apos;applications mobiles iOS &amp; Android</p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a href="/mentions-legales" className="hover:text-gray-400 transition-colors">Mentions légales</a>
          <a href="/politique-de-confidentialite" className="hover:text-gray-400 transition-colors">Politique de confidentialité</a>
          <a href="/cgv" className="hover:text-gray-400 transition-colors">CGV</a>
        </div>
      </div>
    </footer>
  );
}
