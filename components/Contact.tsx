"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Une erreur est survenue. Réessayez ou contactez-moi directement.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left info */}
        <div>
          <p className="mono text-sm font-bold mb-2">// parlons de votre projet</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Lancez votre{" "}
            <span className="bg-[#FF6B9D] text-white px-2 brutal-border">
              application
            </span>
            <br />
            mobile dès aujourd'hui
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Décrivez-moi votre projet : même une idée vague suffit. Je vous
            réponds sous 24h avec un devis clair et sans engagement.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { emoji: "⚡", label: "Réponse sous 24h" },
              { emoji: "💡", label: "Devis gratuit et sans engagement" },
              { emoji: "📱", label: "iOS + Android inclus" },
              { emoji: "🔒", label: "Vos données restent confidentielles" },
            ].map(({ emoji, label }) => (
              <div key={label} className="flex items-center gap-3 font-semibold">
                <span className="text-xl">{emoji}</span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        {sent ? (
          <div className="brutal-border brutal-shadow-lg bg-[#00D4AA] p-10 flex flex-col items-center gap-4 text-center">
            <CheckCircle size={48} />
            <h3 className="text-2xl font-bold">Message envoyé !</h3>
            <p className="font-semibold">
              Je reviens vers vous sous 24h pour discuter de votre projet.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="brutal-border brutal-shadow-lg bg-white p-8 flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-sm" htmlFor="name">Votre nom *</label>
                <input
                  id="name"
                  required
                  type="text"
                  placeholder="Jean Dupont"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="brutal-border p-3 font-medium outline-none focus:bg-[#FFFBF0]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-sm" htmlFor="email">Email *</label>
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="jean@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="brutal-border p-3 font-medium outline-none focus:bg-[#FFFBF0]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-sm" htmlFor="budget">Type de projet</label>
              <select
                id="budget"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="brutal-border p-3 font-medium outline-none focus:bg-[#FFFBF0] bg-white"
              >
                <option value="">Sélectionnez votre type d'app...</option>
                <option value="restaurant">🍽️ Restaurant / Food (commande, réservation)</option>
                <option value="boutique">🛍️ Boutique en ligne / E-commerce</option>
                <option value="maraicher">🌱 Maraîcher / Commerce local</option>
                <option value="jeu">🎮 Jeu mobile</option>
                <option value="portfolio">💼 Portfolio / Vitrine professionnelle</option>
                <option value="reservation">📅 Réservation / Prise de RDV</option>
                <option value="livraison">🚚 Livraison / Logistique</option>
                <option value="social">💬 Réseau social / Communauté</option>
                <option value="sante">🏥 Santé / Bien-être</option>
                <option value="education">📚 Éducation / Formation</option>
                <option value="evenement">🎉 Événementiel / Billetterie</option>
                <option value="autre">✏️ Autre / Je ne sais pas encore</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-sm" htmlFor="message">Décrivez votre projet *</label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="J'ai un restaurant et je voudrais une app pour prendre des réservations et des commandes en ligne..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="brutal-border p-3 font-medium outline-none focus:bg-[#FFFBF0] resize-none"
              />
            </div>

            {error && (
              <p className="brutal-border bg-red-50 border-red-400 text-red-700 p-3 text-sm font-semibold">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="brutal-btn bg-[#0A0A0A] text-[#FFFBF0] px-6 py-3 justify-center text-base"
            >
              {loading ? (
                "Envoi en cours..."
              ) : (
                <>
                  <Send size={16} />
                  Envoyer ma demande
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
