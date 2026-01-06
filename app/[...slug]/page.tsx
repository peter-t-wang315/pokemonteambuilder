"use client";
import { useEffect, useState } from "react";
import { PokemonSprite } from "@/app/components/PokemonSprite";
import { IGamePokedex } from "@/interfaces/IGamePokedex";
import { GameTitles } from "@/app/data/gameTitles";
import { pokedexes } from "@/app/data/gamePokedexes";
import { Heading, Spinner, Text } from "@radix-ui/themes";
import { useParams, useRouter } from "next/navigation";

export default function GamePage() {
  const router = useRouter();
  const params = useParams();

  const slug = params?.slug;
  const path = Array.isArray(slug) ? slug.join("/") : slug ?? "";
  // const path = Array.isArray(slug) ? slug.join("/") : slug || "";
  const [gamePokedex, setGamePokedex] = useState<IGamePokedex[]>([]);

  useEffect(() => {
    // Have to make sure the path is there because on first load, router.query takes a second to correctly
    // populate and we don't want to redirect to notfound immediately because it hasn't populated on first render.
    // Also, if there is no path, that means we're at the root and shouldn't even be here so it's fine.
    if (path === "") {
      return;
    }

    if (!GameTitles[path]) {
      router.replace("/notfound");
      return;
    }

    const dexSlugs = GameTitles[path].dex_slugs;
    const pokedexData = dexSlugs
      .map((slug) => pokedexes[slug])
      .filter((dex): dex is IGamePokedex => dex !== undefined);
    setGamePokedex(pokedexData);
  }, [path]);

  // If we are just loading the information
  if (!GameTitles[path]) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: 8,
        }}
      >
        <Heading>Loading Pokemon...</Heading>
        <Spinner />
      </div>
    );
  }

  if (gamePokedex.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: 2,
        }}
      >
        <Heading>Errrm something went wrong...</Heading>
        <Text>Don't look at me try refreshing the page Idk.</Text>
      </div>
    );
  }

  return (
    <div>
      {gamePokedex.map((pokedex, i) => (
        <div style={{ display: "flex", flexDirection: "column" }} key={i}>
          <Heading>{pokedex.name}</Heading>
          <div
            style={{
              paddingTop: 16,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 8,
              alignItems: "start",
            }}
          >
            {pokedex.pokemon.map((mon) => (
              <div key={mon.name}>
                {mon.name}
                <PokemonSprite pokemonName={mon.name} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
