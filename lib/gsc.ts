import "server-only";
import { SignJWT, importPKCS8 } from "jose";

/**
 * Client minimal de l'API Google Search Console (lecture seule).
 * Authentification par compte de service : GSC_CLIENT_EMAIL / GSC_PRIVATE_KEY,
 * à défaut celui de Firebase. L'email du compte doit être ajouté comme
 * utilisateur de la propriété dans Search Console (Paramètres > Utilisateurs).
 */

const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const TOKEN_URL = "https://oauth2.googleapis.com/token";

export const GSC_SITE = process.env.GSC_SITE_URL || "sc-domain:breizhapp.tech";

export type GscRow = {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

let cached: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cached && cached.expiresAt > Date.now() + 60_000) return cached.token;

  const clientEmail = process.env.GSC_CLIENT_EMAIL || process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = (process.env.GSC_PRIVATE_KEY || process.env.FIREBASE_PRIVATE_KEY)?.replace(/\\n/g, "\n");
  if (!clientEmail || !privateKey) {
    throw new Error("Compte de service manquant (GSC_CLIENT_EMAIL / GSC_PRIVATE_KEY ou variables Firebase).");
  }

  const key = await importPKCS8(privateKey, "RS256");
  const assertion = await new SignJWT({ scope: SCOPE })
    .setProtectedHeader({ alg: "RS256", typ: "JWT" })
    .setIssuer(clientEmail)
    .setAudience(TOKEN_URL)
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(key);

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  if (!res.ok) throw new Error(`Token Google refusé (${res.status}) : ${await res.text()}`);

  const { access_token, expires_in } = await res.json();
  cached = { token: access_token, expiresAt: Date.now() + expires_in * 1000 };
  return access_token;
}

/** Requête Search Analytics. Dates au format YYYY-MM-DD. */
export async function searchAnalytics(params: {
  startDate: string;
  endDate: string;
  dimensions: ("page" | "query" | "date")[];
  rowLimit?: number;
  filters?: { dimension: "page" | "query"; operator: "equals" | "contains"; expression: string }[];
}): Promise<GscRow[]> {
  const token = await getAccessToken();
  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        startDate: params.startDate,
        endDate: params.endDate,
        dimensions: params.dimensions,
        rowLimit: params.rowLimit ?? 5000,
        type: "web",
        ...(params.filters ? { dimensionFilterGroups: [{ filters: params.filters }] } : {}),
      }),
      cache: "no-store",
    }
  );
  if (res.status === 403) {
    const detail = await res.text();
    throw new Error(
      detail.includes("has not been used") || detail.includes("disabled")
        ? "API Search Console désactivée dans le projet Google Cloud du compte de service : l'activer dans la console Google Cloud."
        : "Accès Search Console refusé : ajoutez l'email du compte de service comme utilisateur de la propriété."
    );
  }
  if (!res.ok) throw new Error(`Search Console a répondu ${res.status} : ${await res.text()}`);
  const data = await res.json();
  return data.rows ?? [];
}
