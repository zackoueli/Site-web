import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BreizhApp — Développeur application mobile iOS & Android à Brest";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFBF0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "repeating-linear-gradient(0deg,#000 0,#000 1px,transparent 0,transparent 40px),repeating-linear-gradient(90deg,#000 0,#000 1px,transparent 0,transparent 40px)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#0A0A0A",
            color: "#FFE234",
            padding: "10px 20px",
            border: "3px solid #0A0A0A",
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          Développeur freelance · Brest, Bretagne
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#0A0A0A",
            lineHeight: 1.05,
            marginBottom: 24,
          }}
        >
          Votre idée.{"\n"}
          <span style={{ background: "#FFE234", padding: "0 8px" }}>Mon code.</span>{"\n"}
          <span
            style={{
              background: "#FF6B9D",
              color: "white",
              padding: "0 12px",
              border: "3px solid #0A0A0A",
            }}
          >
            Votre app.
          </span>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 26,
            color: "#555",
            marginBottom: 48,
            maxWidth: 700,
          }}
        >
          Application mobile iOS &amp; Android sur mesure. Restaurants, commerces, jeux. Dès 490€.
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              background: "#0A0A0A",
              color: "#FFE234",
              padding: "14px 28px",
              border: "3px solid #0A0A0A",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            breizhapp.tech
          </div>
          <div
            style={{
              background: "#FFE234",
              color: "#0A0A0A",
              padding: "14px 28px",
              border: "3px solid #0A0A0A",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Devis gratuit sous 24h →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
