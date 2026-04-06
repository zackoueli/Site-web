"use client";
import { useState } from "react";

interface PhoneVideoProps {
  src: string;
  appName: string;
}

const W = 300;
const H = Math.round(W * (2208 / 1242));

export default function PhoneVideo({ src, appName }: PhoneVideoProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        width: W + 16,
        height: H + 28,
        background: "#111",
        borderRadius: 44,
        border: "3px solid #0A0A0A",
        boxShadow: "6px 6px 0px #0A0A0A",
        padding: "14px 8px",
        position: "relative",
        boxSizing: "border-box",
        flexShrink: 0,
      }}
    >
      {/* Dynamic Island */}
      <div
        style={{
          position: "absolute",
          top: 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 90,
          height: 24,
          background: "#000",
          borderRadius: 16,
          zIndex: 20,
        }}
      />

      {/* Écran */}
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: 36,
          position: "relative",
          background: "#000",
        }}
      >
        {/* ── Skeleton loader — fade out quand la vidéo joue ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#0a0a0a",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            opacity: loaded ? 0 : 1,
            transition: "opacity 0.5s ease",
            pointerEvents: loaded ? "none" : "auto",
          }}
        >
            {/* Animated logo */}
            <div
              style={{
                width: 56,
                height: 56,
                border: "3px solid #FFE234",
                borderRadius: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "pulse-border 1.2s ease-in-out infinite",
              }}
            >
              <span style={{ fontSize: 24 }}>📱</span>
            </div>

            {/* Barre de chargement neu-brutalism */}
            <div
              style={{
                width: 100,
                height: 6,
                background: "#1a1a1a",
                border: "2px solid #333",
                borderRadius: 0,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  background: "#FFE234",
                  animation: "loading-bar 1.4s ease-in-out infinite",
                }}
              />
            </div>

            <span
              style={{
                color: "#555",
                fontSize: 10,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              CHARGEMENT...
            </span>
        </div>

        {/* Keyframes injectés inline */}
        <style>{`
          @keyframes loading-bar {
            0%   { width: 0%; margin-left: 0; }
            50%  { width: 60%; margin-left: 20%; }
            100% { width: 0%; margin-left: 100%; }
          }
          @keyframes pulse-border {
            0%, 100% { box-shadow: 3px 3px 0 #FFE234; }
            50%       { box-shadow: 6px 6px 0 #FF6B9D; }
          }
        `}</style>

        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          onPlaying={() => setLoaded(true)}
          onCanPlay={() => setLoaded(true)}
          aria-label={`Démonstration ${appName}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Home indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 6,
            left: "50%",
            transform: "translateX(-50%)",
            width: 80,
            height: 4,
            background: "rgba(255,255,255,0.35)",
            borderRadius: 999,
            zIndex: 10,
          }}
        />
      </div>

      {/* Bouton power */}
      <div style={{ position: "absolute", right: -5, top: 100, width: 4, height: 60, background: "#2a2a2a", borderRadius: "0 3px 3px 0" }} />
      {[80, 145, 195].map((top) => (
        <div key={top} style={{ position: "absolute", left: -5, top, width: 4, height: top === 80 ? 30 : 48, background: "#2a2a2a", borderRadius: "3px 0 0 3px" }} />
      ))}
    </div>
  );
}
