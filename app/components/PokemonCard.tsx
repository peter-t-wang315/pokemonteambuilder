"use client";

import { GradientOrb } from "./GradientOrb";
import { PokemonSprite } from "./PokemonSprite";
import { Card, Text } from "@radix-ui/themes";

export function PokemonCard({
  pokemonDetails,
  onClick,
  coverageScore,
}: {
  pokemonDetails: { name: string; id: number; types: string[] };
  onClick: (pokemon: { name: string; id: number; types: string[] }) => void;
  coverageScore?: number;
}) {
  function getCoverageStyle(score?: number): {
    borderColor: string;
    boxShadow: string;
  } {
    if (score === undefined)
      return { borderColor: "#3a3a3a", boxShadow: "none" };
    if (score > 7)
      return { borderColor: "#00C853", boxShadow: "0 0 12px #00C853aa" };
    if (score > 4)
      return { borderColor: "#64DD17", boxShadow: "0 0 8px #64DD17aa" };
    if (score > 2)
      return { borderColor: "#91ff00", boxShadow: "0 0 4px #91ff00" };
    if (score > -2) return { borderColor: "#FFD600", boxShadow: "none" };
    if (score > -4)
      return { borderColor: "#FF6D00", boxShadow: "0 0 4px #FF6D00aa" };
    if (score > -7)
      return { borderColor: "#DD2C00", boxShadow: "0 0 8px #DD2C00aa" };
    return { borderColor: "#B71C1C", boxShadow: "0 0 12px #B71C1Caa" };
  }

  function getCoverageBadge(
    score?: number,
  ): { icon: string; color: string } | null {
    if (score === undefined) return null;
    if (score > 7) return { icon: "✦✦", color: "#FFD700" }; // gold
    if (score > 4) return { icon: "✦", color: "#C0C0C0" }; // silver
    return null;
  }

  const { borderColor, boxShadow } = getCoverageStyle(coverageScore);
  const badge = getCoverageBadge(coverageScore);

  function formatName(str: string) {
    return str
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <Card
      key={pokemonDetails.name}
      className="pokemon-card"
      onClick={() => onClick(pokemonDetails)}
      style={{
        position: "relative",
        overflow: "hidden",
        border: `2px solid ${borderColor}`,
        boxShadow,
        transition: "box-shadow 0.2s ease",
      }}
    >
      {badge && (
        <div
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: badge.color,
              filter: `drop-shadow(0 0 4px ${badge.color})`,
            }}
          >
            {badge.icon}
          </span>
        </div>
      )}
      <GradientOrb
        type1={pokemonDetails.types[0]}
        type2={pokemonDetails.types[1]}
      />

      {pokemonDetails.name !== "" && (
        <Text style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          {formatName(pokemonDetails.name)}
        </Text>
      )}
      <PokemonSprite pokemonName={pokemonDetails.name} scale={2} />
    </Card>
  );
}
