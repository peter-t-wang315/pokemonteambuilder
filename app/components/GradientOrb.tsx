interface GradientOrbProps {
  type1: string;
  type2?: string | null;
  opacity?: number;
  size?: number; // as a percentage string or pixel value
  blur?: number; // in pixels
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

export function GradientOrb({
  type1,
  type2 = null,
  opacity = 0.85,
  size = 80,
  blur = 8,
}: GradientOrbProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: `${size}%`,
        aspectRatio: "1 / 1",
        borderRadius: "50%",
        background: `radial-gradient(circle at 25% 25%, ${typeColors[type1?.toLowerCase()]}, transparent 62%),
             radial-gradient(circle at 75% 75%, ${type2 ? typeColors[type2?.toLowerCase()] : typeColors[type1?.toLowerCase()]}, transparent 80%)`,
        filter: `blur(${blur}px)`,
        opacity,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
