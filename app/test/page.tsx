"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PokemonSprite } from "@/app/components/PokemonSprite";
import { IGamePokedex } from "@/interfaces/IGamePokedex";
import { GameTitles } from "@/app/data/gameTitles";
import { pokedexes } from "@/app/data/pokedex/gamePokedexes";
import { Spinner } from "@radix-ui/themes";

export default function GamePage() {
  const router = useRouter();
  const params = useParams();

  const slug = params?.slug;
  const path = Array.isArray(slug) ? slug.join("/") : (slug ?? "");
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
    }

    const dexSlugs = GameTitles[path].dex_slugs;
    const pokedexData = dexSlugs
      .map((slug) => pokedexes[slug])
      .filter((dex): dex is IGamePokedex => dex !== undefined);
    setGamePokedex(pokedexData);
  }, [path]);

  return (
    <main
      style={{
        display: "flex",
        gap: "4",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      Bro please why
      <Spinner style={{ width: "50px", height: "50px", color: "green" }} />
    </main>
  );

  if (!GameTitles[path] || gamePokedex.length === 0) {
    return <div>No pokemon found</div>;
  }

  return (
    <div>
      {gamePokedex.map((pokedex, i) => (
        <div style={{ display: "flex", flexDirection: "column" }} key={i}>
          <h1>{pokedex.name}</h1>
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
