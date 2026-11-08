import type { Locale } from "@/lib/i18n";
import { buildGlobe } from "@/lib/globe";

/* Locais de exemplo monitorados no globo (lon, lat). */
const sites: [number, number][] = [
  [-47.4, -20.5], // Franca
  [-46.6, -23.5], // São Paulo
  [-43.2, -22.9], // Rio de Janeiro
  [-49.3, -25.4], // Curitiba
  [-38.5, -12.97], // Salvador
  [-60.0, -3.1], // Manaus
  [-58.4, -34.6], // Buenos Aires
  [-9.1, 38.7], // Lisboa
  [-74.0, 40.7], // Nova York
];
const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [2, 4],
  [0, 5],
  [3, 6],
  [2, 7],
  [1, 8],
];

const globe = buildGlobe({ size: 420, lon0: -45, lat0: -8, sites, links });

export function GlobeArt() {
  return (
    <svg viewBox="0 0 420 420" className="h-auto w-full max-w-[26rem]" role="img" aria-label="Globo com locais monitorados">
      <defs>
        <radialGradient id="g-fill" cx="38%" cy="32%" r="75%">
          <stop offset="0" stopColor="#1b2b40" />
          <stop offset="1" stopColor="#0e1724" />
        </radialGradient>
      </defs>
      <circle cx="210" cy="210" r="208" fill="url(#g-fill)" stroke="#2e425b" />
      <path d={globe.graticule} fill="none" stroke="#5cd6ec" strokeOpacity="0.13" strokeWidth="0.8" />
      {globe.arcs.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#5cd6ec" strokeOpacity="0.55" strokeWidth="1.1" strokeDasharray="3 4" />
      ))}
      {globe.points.map((p, i) => {
        const tone = i === 5 ? "#ff6f8e" : "#3fd99a";
        return (
          <g key={i}>
            <circle
              className="globe-pulse"
              cx={p.x}
              cy={p.y}
              r="3"
              fill={tone}
              style={{ "--d": `${i * 0.35}s` } as React.CSSProperties}
            />
            <circle cx={p.x} cy={p.y} r="3.4" fill={tone} stroke="#0c131c" strokeWidth="1.5" />
          </g>
        );
      })}
    </svg>
  );
}

export function TerminalArt({ locale }: { locale: Locale }) {
  const hint = locale === "pt" ? "# dica: quem está escrevendo tanto log?" : "# hint: who is writing so many logs?";
  return (
    <div
      className="overflow-hidden rounded-xl border border-cable bg-night font-mono text-[0.7rem] leading-[1.75] text-muted"
      role="img"
      aria-label={locale === "pt" ? "Terminal mostrando disco cheio" : "Terminal showing a full disk"}
    >
      <div className="border-b border-cable px-4 py-2 text-faint">cenario-01: disco-cheio</div>
      <pre className="overflow-x-auto px-4 py-3">
        <span className="text-signal">$</span> <span className="text-paper">df -h /var</span>
        {"\n"}Filesystem  Size  Used Avail <span>Use%</span>
        {"\n"}/dev/sda1    20G   20G     0 <span className="font-medium text-crit">100%</span>
        {"\n"}
        <span className="text-faint">{hint}</span>
        {"\n"}
        <span className="text-signal">$</span> <span className="text-paper">du -sh /var/log/* | sort -h | tail -1</span>
        {"\n"}19G  /var/log/app/debug.log
      </pre>
    </div>
  );
}

const times = ["08:40:12", "08:41:03", "08:41:09", "08:42:30"];

export function FleetArt({ locale }: { locale: Locale }) {
  const rows =
    locale === "pt"
      ? [
          { host: "estacao-01", state: "sincronizando", tone: "text-ok" },
          { host: "estacao-02", state: "não abre", tone: "text-crit" },
          { host: "estacao-02", state: "reparo aplicado", tone: "text-signal" },
          { host: "estacao-03", state: "sincronizando", tone: "text-ok" },
        ]
      : [
          { host: "station-01", state: "syncing", tone: "text-ok" },
          { host: "station-02", state: "won't open", tone: "text-crit" },
          { host: "station-02", state: "repair applied", tone: "text-signal" },
          { host: "station-03", state: "syncing", tone: "text-ok" },
        ];
  return (
    <ol
      className="overflow-hidden rounded-xl border border-cable bg-night font-mono text-[0.7rem]"
      aria-label={locale === "pt" ? "Linha do tempo de um reparo automático" : "Timeline of an automatic repair"}
    >
      {rows.map((r, i) => (
        <li key={i} className="flex items-center justify-between gap-3 border-b border-cable px-4 py-2.5 last:border-b-0">
          <span className="text-faint">{times[i]}</span>
          <span className="flex-1 text-paper">{r.host}</span>
          <span className={r.tone}>{r.state}</span>
        </li>
      ))}
    </ol>
  );
}

export function PetArt({ locale }: { locale: Locale }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-cable bg-[#dfe5ee] shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)]">
      {/* eslint-disable-next-line @next/next/no-img-element -- export estático sem otimização de imagem */}
      <img
        src="/pestinha.webp"
        width={320}
        height={320}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full max-w-[20rem]"
        alt={
          locale === "pt"
            ? "Animações do Pestinha: pensando, guarda-chuva na chuva, festa, diário, obedecer e recusar"
            : "Pestinha animations: thinking, umbrella in the rain, party, diary, obeying and refusing"
        }
      />
    </div>
  );
}
