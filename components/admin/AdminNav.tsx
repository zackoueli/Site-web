"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const tabs = [
  { href: "/admin", label: "Projets" },
  { href: "/admin/devis", label: "Devis & factures" },
];

export default function AdminNav() {
  const pathname = usePathname() ?? "";
  const router = useRouter();

  function isActive(href: string) {
    if (href === "/admin") return pathname === "/admin" || pathname.startsWith("/admin/projets");
    return pathname.startsWith(href);
  }

  async function logout() {
    await fetch("/api/devis/logout", { method: "POST" });
    router.push("/devis/login");
    router.refresh();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 flex items-center justify-between gap-4 flex-wrap">
      <nav className="flex items-center gap-2">
        {tabs.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className={`px-3 py-1.5 text-sm font-bold border-2 border-black transition-colors ${
              isActive(t.href)
                ? "bg-[#0A0A0A] text-[#FFE234]"
                : "bg-white hover:bg-[#FFE234]"
            }`}
          >
            {t.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-3 text-sm font-bold">
        <Link href="/portfolio" target="_blank" className="hover:underline">
          Voir le portfolio ↗
        </Link>
        <button
          onClick={logout}
          className="border-2 border-black px-3 py-1.5 bg-white hover:bg-red-100"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
}
