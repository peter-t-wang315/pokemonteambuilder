"use client";
import { useEffect, useState } from "react";
import { IGamePokedex } from "@/interfaces/IGamePokedex";
import { GameTitles } from "@/app/data/gameTitles";
import { pokedexes } from "@/app/data/pokedex/gamePokedexes";
import { Button, Heading, Spinner, Text } from "@radix-ui/themes";
import { useParams, useRouter } from "next/navigation";
import { PokemonCard } from "@/app/components/PokemonCard";
import { PokemonTeamCard } from "@/app/components/PokemonTeamCard";
import { Pokedex } from "@/app/data/pokedex/pokedex";
import {
  CalculateCoverages,
  CalculateTeamDefensiveCoverage,
} from "@/app/teamAdvising/typeCoverage";

export default function GamePage() {
  const router = useRouter();
  const params = useParams();

  const slug = params?.slug;
  const path = Array.isArray(slug) ? slug.join("/") : (slug ?? "");
  // const path = Array.isArray(slug) ? slug.join("/") : slug || "";
  const [gamePokedex, setGamePokedex] = useState<IGamePokedex[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [pokemonTeam, setPokemonTeam] = useState<
    { name: string; id: number; types: string[] }[]
  >(Array(6).fill({ name: "", id: 0, types: [] }));
  const [teamFull, setTeamFull] = useState(false);

  useEffect(() => {
    CalculateCoverages({
      PokemonGame: path,
      PokemonTeam: pokemonTeam,
    });
  }, [pokemonTeam]);

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
    setDataLoaded(true);
  }, [path]);

  function onPokemonSelected(pokemon: {
    name: string;
    id: number;
    types: string[];
  }) {
    // Find the first available team slot.
    const emptySlotIndex = pokemonTeam.findIndex((mon) => mon.name === "");

    // TODO: If team is full, show a message or something.
    if (emptySlotIndex === -1) {
      setTeamFull(true);
      return;
    }

    setPokemonTeam((prevTeam) => {
      const newTeam = [...prevTeam];
      newTeam[emptySlotIndex] = pokemon;
      return newTeam;
    });
  }

  function onPokemonDeselected(pokemon: {
    name: string;
    id: number;
    types: string[];
  }) {
    setPokemonTeam((prevTeam) => {
      const newTeam = prevTeam.map((mon) =>
        mon.name === pokemon.name ? { name: "", id: 0, types: [] } : mon,
      );
      return newTeam;
    });
  }

  function getPokemonCardData(PokemonDetails: {
    name: string;
    id: number;
  }): { name: string; id: number; types: string[] } | null {
    const key = PokemonDetails.name
      .toLowerCase()
      .normalize("NFD") // decompose accented chars (é → e + ́)
      .replace(/[\u0300-\u036f]/g, "") // strip accent marks
      .replace(/[^a-z0-9]/g, "");
    const entry = Pokedex[key];

    if (!entry) return null;

    return {
      name: PokemonDetails.name,
      id: PokemonDetails.id,
      types: entry.types,
    };
  }

  // If we are just loading the information
  if (!GameTitles[path] || !dataLoaded) {
    return (
      <div className="page-went-wrong">
        <Heading>Loading Pokemon...</Heading>
        <Spinner size={"3"} />
      </div>
    );
  }

  if (gamePokedex.length === 0) {
    return (
      <div className="page-went-wrong" style={{ flexDirection: "column" }}>
        <Heading>Errrm something went wrong...</Heading>
        <Text>Don't look at me try refreshing the page Idk.</Text>
      </div>
    );
  }

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 52,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      {/* Idk why this div is needed but it wraps the team so that it doesn't overflow weirdly */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          width: "100%",
          gap: 16,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Heading>Your Team</Heading>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
          }}
        >
          {pokemonTeam.map((mon, i) => (
            <PokemonTeamCard
              key={"team-slot-" + i}
              PokemonDetails={mon}
              onClick={onPokemonDeselected}
            />
          ))}
        </div>
        <Button
          variant="outline"
          style={{ cursor: "pointer" }}
          onClick={() =>
            setPokemonTeam(Array(6).fill({ name: "", id: 0, types: [] }))
          }
        >
          Reset Team
        </Button>
      </div>

      {gamePokedex.map((pokedex, i) => (
        <div key={i} style={{ width: "100%" }}>
          <Heading>{pokedex.name}</Heading>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 16,
            }}
          >
            {pokedex.pokemon.map((mon) => {
              const cardData = getPokemonCardData(mon);

              if (!cardData) return null;

              return (
                <PokemonCard
                  key={cardData.name + cardData.id}
                  PokemonDetails={cardData}
                  onClick={onPokemonSelected}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
