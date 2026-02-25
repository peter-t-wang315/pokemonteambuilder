"use client";

import { GradientOrb } from "./GradientOrb";
import { PokemonSprite } from "./PokemonSprite";
import { Button, Card, Text } from "@radix-ui/themes";

export function PokemonCard({
  pokemonDetails,
  onClick,
  borderColor,
}: {
  pokemonDetails: { name: string; id: number; types: string[] };
  onClick: (pokemon: { name: string; id: number; types: string[] }) => void;
  borderColor?: string;
}) {
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
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Gradient Orb Background */}
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
