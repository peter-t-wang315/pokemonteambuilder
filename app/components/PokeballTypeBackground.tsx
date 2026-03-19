interface GradientOrbProps {
  type1?: string;
  type2?: string | null;
  opacity?: number;
  size?: number;
}

export const typeColors: Record<string, string> = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

export function PokeballTypeBackground({
  type1 = "",
  type2 = null,
  opacity = 0.85,
  size = 80,
}: GradientOrbProps) {
  const color1 = typeColors[type1?.toLowerCase()] ?? "#A8A878";
  const color2 = type2
    ? (typeColors[type2.toLowerCase()] ?? "#A8A878")
    : color1;

  const id = `pb-${type1}-${type2 ?? "mono"}`;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(-30deg)",
        width: `${size}%`,
        aspectRatio: "1 / 1",
        opacity,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <clipPath id={`${id}-top`}>
            <rect x="0" y="0" width="100" height="50" />
          </clipPath>
          <clipPath id={`${id}-bottom`}>
            <rect x="0" y="50" width="100" height="50" />
          </clipPath>
        </defs>

        {/* Top half */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill={color1}
          fillOpacity="0.65"
          clipPath={`url(#${id}-top)`}
        />

        {/* Bottom half */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill={color2}
          fillOpacity="0.65"
          clipPath={`url(#${id}-bottom)`}
        />

        {/* Dividing band */}
        <line x1="4" y1="50" x2="96" y2="50" stroke="#222" strokeWidth="8" />

        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="#222"
          strokeWidth="4"
        />

        {/* Center button */}
        <circle
          cx="50"
          cy="50"
          r="14"
          fill={type1 !== "" ? "#b3b3b3" : "#222"}
          stroke="#222"
          strokeWidth="8"
        />
      </svg>
    </div>
  );
}
