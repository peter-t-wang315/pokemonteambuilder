"use client";
import { Pokedex } from "../data/pokedex";

export function PokemonSprite({
  pokemonName,
  scale = 1,
}: {
  pokemonName: string;
  scale?: number;
}) {
  const cleanedPokemonName = pokemonName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[\s.'’`:-]/g, "");

  const pokedexNumber = Pokedex[cleanedPokemonName].num;
  const width = 40;
  const height = 30;
  const left = (pokedexNumber % 12) * width;
  const top = Math.floor(pokedexNumber / 12) * height;

  return (
    <div
      style={{
        width: width * scale,
        height: height * scale,
        overflow: "hidden",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width,
          height,
          background: `url(/pokemonicons-sheet.png) no-repeat -${left}px -${top}px`,
          imageRendering: "pixelated",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}
