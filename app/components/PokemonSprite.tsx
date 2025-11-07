"use client";
import { Pokedex } from "../data/pokedex";
import { PokemonAltSprite } from "../data/pokemonAltSprite";

export function PokemonSprite({ pokemonName }: { pokemonName: string }) {
  // Because we're doing things with static images, it is better to not use state here and just deal with the constants directly.
  const cleanedPokemonName = pokemonName.toLowerCase().replace(/[\s.-]/g, "");
  const pokedexNumber =
    PokemonAltSprite[cleanedPokemonName] || Pokedex[cleanedPokemonName].num;
  const width = 40;
  const height = 30;
  const left = (pokedexNumber % 12) * width;
  const top = Math.floor(pokedexNumber / 12) * height;

  return (
    <span
      style={{
        display: "inline-block",
        background: `
          transparent 
          url(/pokemonicons-sheet.png) 
          no-repeat 
          scroll 
          -${left}px -${top}px
        `,
        width,
        height,
        overflow: "visible",
      }}
    />
  );
}
