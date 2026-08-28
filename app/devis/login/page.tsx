"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/devis/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Mot de passe incorrect.");
        return;
      }
      router.push(searchParams.get("next") || "/admin");
      router.refresh();
    } catch {
      setError("Erreur de connexion.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#FFFBF0] px-4 py-10 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="brutal-border border-[3px] p-6 bg-white w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4">Espace devis</h1>
        <label className="block text-xs font-bold uppercase tracking-wider mb-1">Mot de passe</label>
        <input
          type="password"
          autoFocus
          className="w-full brutal-border px-3 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFE234]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-600 text-sm font-bold mb-3">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="brutal-btn w-full py-3 bg-[#FFE234] text-[#0A0A0A] font-bold disabled:opacity-50"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </main>
  );
}

export default function DevisLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
