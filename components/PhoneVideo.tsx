interface PhoneVideoProps {
  src: string;
  appName: string;
}

const W = 300;
const H = Math.round(W * (2208 / 1242)); // ratio exact iPhone 8 Plus = 533px

export default function PhoneVideo({ src, appName }: PhoneVideoProps) {
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
          zIndex: 10,
        }}
      />

      {/* Écran vidéo */}
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
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          aria-label={`Démonstration ${appName}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
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

      {/* Bouton power (droite) */}
      <div style={{
        position: "absolute", right: -5, top: 100,
        width: 4, height: 60,
        background: "#2a2a2a", borderRadius: "0 3px 3px 0",
      }} />

      {/* Boutons volume (gauche) */}
      {[80, 145, 195].map((top) => (
        <div key={top} style={{
          position: "absolute", left: -5, top,
          width: 4, height: top === 80 ? 30 : 48,
          background: "#2a2a2a", borderRadius: "3px 0 0 3px",
        }} />
      ))}
    </div>
  );
}
