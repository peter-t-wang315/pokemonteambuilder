import { useRouter } from "next/router";
import { GameTitles } from "../app/data/gameTitles";
import { useEffect, useState } from "react";
import { fetchGamesPokedex } from "@/app/testing/request";
import { PokemonSprite } from "@/app/components/PokemonSprite";
import { IGamePokedex } from "@/interfaces/IGamePokedex";

export default function GamePage() {
  const router = useRouter();
  const { slug } = router.query;
  const path = Array.isArray(slug) ? slug.join("/") : slug || "";
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

    fetchAndFormatPokedexData();
  }, [path]);

  async function fetchAndFormatPokedexData() {
    if (!GameTitles[path]?.pokeAPIPokedexId) {
      return;
    }

    const pokedexData = await fetchGamesPokedex({
      pokedexNum: GameTitles[path].pokeAPIPokedexId,
      fetchNationalDex: !!GameTitles[path]?.firstPokedexNumber,
    });

    // If pokedexData
    if (!Array.isArray(pokedexData)) {
      setGamePokedex([pokedexData as IGamePokedex]);
      return;
    }

    // Now that we've retrieved the pokedex data, we need to now format the national dex so that it doesn't show duplicate mons from the other dexes.
    const combinedNonNationalDexes = pokedexData
      .slice(0, -1)
      .flatMap((dex: IGamePokedex) => dex.pokemon_entries)
      .reduce((acc, entry) => {
        acc[entry.pokemon_species.name] = entry;
        return acc;
      }, {} as Record<string, (typeof pokedexData)[0]["pokemon_entries"][0]>);

    setGamePokedex(pokedexData as IGamePokedex[]);
  }

  if (!GameTitles[path] || gamePokedex.length === 0) {
    return <div>No pokemon found</div>;
  }

  return (
    <div>
      {gamePokedex.map((pokedex) => (
        <div
          style={{ display: "flex", flexDirection: "column" }}
          key={pokedex.id}
        >
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
            {pokedex.pokemon_entries.map((mon) => (
              <div key={mon.pokemon_species.name}>
                {mon.pokemon_species.name}
                <PokemonSprite pokemonName={mon.pokemon_species.name} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
