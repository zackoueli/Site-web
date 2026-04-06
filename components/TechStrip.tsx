const techs = [
  "React Native ✦",
  "iOS ✦",
  "Android ✦",
  "Expo ✦",
  "Firebase ✦",
  "Stripe ✦",
  "Push Notifications ✦",
  "API REST ✦",
  "TypeScript ✦",
  "PostgreSQL ✦",
  "App Store ✦",
  "Play Store ✦",
];

export default function TechStrip() {
  const repeated = [...techs, ...techs];

  return (
    <div className="brutal-border border-y-[3px] bg-[#0A0A0A] text-[#FFE234] py-3 overflow-hidden">
      <div className="marquee-track">
        {repeated.map((t, i) => (
          <span key={i} className="mono font-bold text-sm whitespace-nowrap px-6">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
