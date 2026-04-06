"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="brutal-border border-b-[3px] sticky top-0 z-50 bg-[#FFFBF0]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl mono">
          <span className="bg-[#FFE234] brutal-border brutal-shadow px-2 py-0.5 text-sm">
            APP
          </span>
          <span>Mobile Pro</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-1.5 font-semibold hover:bg-black hover:text-[#FFFBF0] transition-colors rounded-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="brutal-btn bg-[#FF6B9D] text-white px-5 py-2 ml-3"
            >
              Devis gratuit →
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden brutal-btn p-2 bg-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden brutal-border border-t-[3px] bg-[#FFFBF0]">
          <ul className="flex flex-col p-4 gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block px-4 py-2 font-semibold brutal-border brutal-shadow bg-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="brutal-btn bg-[#FF6B9D] text-white px-5 py-2 w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Devis gratuit →
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
