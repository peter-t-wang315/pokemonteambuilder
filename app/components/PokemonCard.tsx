"use client";

import { PokemonSprite } from "./PokemonSprite";
import { Button, Card, Text } from "@radix-ui/themes";

export function PokemonCard({
  PokemonDetails,
}: {
  PokemonDetails: { name: string; id: number };
}) {
  function titleCase(str: string) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <Card key={PokemonDetails.name} className="pokemon-card">
      <Text>{titleCase(PokemonDetails.name)}</Text>
      <PokemonSprite pokemonName={PokemonDetails.name} scale={2} />
    </Card>
  );
}
