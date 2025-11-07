"use client";
import { Button, Text } from "@radix-ui/themes";
import { fetchAllGames, fetchGamesPokedex } from "./request";
import { useEffect, useState } from "react";
import { PokemonSprite } from "../components/PokemonSprite";

export default function TestingPage() {
  const [pokemon, setPokemon] = useState<
    { entry_number: number; pokemon_species: { name: string; url: string } }[]
  >([]);

  useEffect(() => {
    (async () => {
      const data = await fetchGamesPokedex();
      setPokemon(data.pokemon_entries);
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <Text>Click me big guy bruddah.</Text>
      <Button
        onClick={async () => {
          const x = await fetchAllGames();
          console.log(x);
        }}
        variant="soft"
        radius="full"
      >
        Here bruh.
      </Button>
      <div
        style={{
          paddingTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 8,
          alignItems: "start",
        }}
      >
        {pokemon.map((mon) => {
          return (
            <div key={mon.pokemon_species.name}>
              {mon.pokemon_species.name}
              <PokemonSprite
                key={mon.pokemon_species.name}
                pokemonName={mon.pokemon_species.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
