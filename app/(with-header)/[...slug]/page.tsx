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
  CalculateIndividualCoverages,
  GetTypeChartByGeneration,
} from "@/app/teamAdvising/typeCoverage";
import { TypeChart } from "@/app/data/typeChart";

export default function GamePage() {
  const router = useRouter();
  const params = useParams();

  const slug = params?.slug;
  const path = Array.isArray(slug) ? slug.join("/") : (slug ?? "");
  const [gamePokedex, setGamePokedex] = useState<IGamePokedex[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [pokemonTeam, setPokemonTeam] = useState<
    { name: string; id: number; types: string[] }[]
  >(Array(6).fill({ name: "", id: 0, types: [] }));
  const [teamFull, setTeamFull] = useState(false);
  const [gameTypeChart, setGameTypeChart] = useState<TypeChart>({});
  const [defensiveTypesCovered, setDefensiveTypesCovered] = useState<
    Record<string, number>
  >({});
  const [offensiveTypesCovered, setOffensiveTypesCovered] = useState<
    Record<string, number>
  >({});
  const [filterBest, setFilterBest] = useState(false);
  const [filterBestThreshold, setFilterBestThreshold] = useState(0);

  useEffect(() => {
    const activePokemon = pokemonTeam.filter((mon) => mon.name !== "");
    const allTypes = Object.keys(gameTypeChart);

    // If no mons, just make all pokemon neutral.
    if (activePokemon.length === 0 || allTypes.length === 0) {
      const neutral = Object.fromEntries(allTypes.map((t) => [t, 0]));
      setDefensiveTypesCovered({ ...neutral });
      setOffensiveTypesCovered({ ...neutral });
      return;
    }

    const individualCoverages = CalculateIndividualCoverages({
      PokemonGame: path,
      PokemonTeam: activePokemon,
    });

    // 1) Figure out what types our entire team is weak too and covers. Also track what types we've seen.
    // We're essentially just remaking what richi3f's analysis shows.
    const defensiveGaps: Record<string, number> = Object.fromEntries(
      allTypes.map((t) => [t, 0]),
    );
    const offensiveGaps: Record<string, number> = Object.fromEntries(
      allTypes.map((t) => [t, 0]),
    );
    const typesSeen = {
      defensive: new Set<string>(),
      offensive: new Set<string>(),
    };

    // Create richi3f's analysis.
    for (const type of allTypes) {
      for (const coverage of individualCoverages) {
        if (coverage.immune.has(type)) {
          defensiveGaps[type] -= 2;
          typesSeen.defensive.add(type);
        } else if (coverage.resists.has(type)) {
          defensiveGaps[type] -= 1;
          typesSeen.defensive.add(type);
        } else if (coverage.weak.has(type)) {
          defensiveGaps[type] += 1;
          typesSeen.defensive.add(type);
        }

        if (coverage.weakens.has(type)) {
          offensiveGaps[type] -= 1;
          typesSeen.offensive.add(type);
        } else if (coverage.resistedBy.has(type)) {
          offensiveGaps[type] += 1;
          typesSeen.offensive.add(type);
        }
      }
    }

    // Step 2: Score each candidate type by how much it closes gaps AND fills blind spots
    const defensiveTypeScores: Record<string, number> = Object.fromEntries(
      allTypes.map((t) => [t, 0]),
    );
    const offensiveTypeScores: Record<string, number> = Object.fromEntries(
      allTypes.map((t) => [t, 0]),
    );

    // If we haven't seen the type before, that means we have no coverage for that type at all and need to have coverage for it.
    const effectiveDefGap = (t: string) => {
      if (!typesSeen.defensive.has(t)) return 1;
      return defensiveGaps[t];
    };
    const effectiveOffGap = (t: string) => {
      if (!typesSeen.offensive.has(t)) return 1;
      return offensiveGaps[t];
    };

    // Calculate what types actually help to cover what types we've encountered we lose to or win to (the gaps sets).
    for (const type of allTypes) {
      const typeChart = gameTypeChart[type];
      let defScore = 0;
      let offScore = 0;

      typeChart.immune.forEach((t) => {
        const gap = effectiveDefGap(t);
        if (gap > 0) defScore += gap * 2; // immunity is extra valuable
      });
      typeChart.resists.forEach((t) => {
        const gap = effectiveDefGap(t);
        if (gap > 0) defScore += gap * 1;
      });
      typeChart.weak.forEach((t) => {
        const gap = effectiveDefGap(t);
        if (gap > 0) defScore -= gap * 1; // stacks a weakness the team already struggles with
      });

      typeChart.weakens.forEach((t) => {
        const gap = effectiveOffGap(t);
        if (gap > 0) offScore += gap * 1;
      });
      typeChart.resistedBy.forEach((t) => {
        const gap = effectiveOffGap(t);
        if (gap > 0) offScore -= gap * 0.5;
      });

      defensiveTypeScores[type] = defScore;
      offensiveTypeScores[type] = offScore;
    }

    setDefensiveTypesCovered(defensiveTypeScores);
    setOffensiveTypesCovered(offensiveTypeScores);

    const allCombinedScores = Object.keys(defensiveTypeScores)
      .map((type) => {
        const def = defensiveTypeScores[type];
        const off = offensiveTypeScores[type];
        return Math.max(def, off) * 0.7 + Math.min(def, off) * 0.3;
      })
      .filter((score) => score > 0)
      .sort((a, b) => b - a);

    const topIndex = Math.max(0, Math.floor(allCombinedScores.length * 0.2));
    setFilterBestThreshold(allCombinedScores[topIndex] ?? 0);
  }, [pokemonTeam, gameTypeChart]);

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

    // This is to help with team type advising.
    // gameTypeChart holds all the types, if the mon covers a type, subtract from it's total, if it needs coverage, add to it.
    const gameTypeChart = GetTypeChartByGeneration({ PokemonGame: path });
    const teamTypesCovered = Object.keys(gameTypeChart).reduce(
      (acc, type) => {
        acc[type] = 0;
        return acc;
      },
      {} as Record<string, number>,
    );

    setDefensiveTypesCovered(teamTypesCovered);
    setOffensiveTypesCovered(teamTypesCovered);
    setGameTypeChart(gameTypeChart);
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

  function calculateCoverageScore(types: string[]) {
    const defScore = types.reduce(
      (acc, type) => acc + (defensiveTypesCovered[type.toLowerCase()] || 0),
      0,
    );
    const offScore = types.reduce(
      (acc, type) => acc + (offensiveTypesCovered[type.toLowerCase()] || 0),
      0,
    );

    // Take into account both high end offensive and defensive scores. The best coverage it can do gets a higher weight so it's not washed out
    // by it's lower score.
    const combined =
      Math.max(defScore, offScore) * 0.7 + Math.min(defScore, offScore) * 0.3;

    return combined;
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
        <div style={{ display: "flex", width: "100%" }}>
          <Button
            variant="outline"
            style={{ cursor: "pointer", width: "50%" }}
            onClick={() =>
              setPokemonTeam(Array(6).fill({ name: "", id: 0, types: [] }))
            }
          >
            Reset Team
          </Button>
          <Button
            variant="outline"
            style={{ cursor: "pointer", width: "50%" }}
            onClick={() => setFilterBest((prev) => !prev)}
          >
            Filter Best Options
          </Button>
        </div>
      </div>

      {gamePokedex.map((pokedex, i) => {
        const filteredPokemon = pokedex.pokemon
          .map((mon) => {
            const cardData = getPokemonCardData(mon);
            const coverageScore = cardData
              ? calculateCoverageScore(cardData.types)
              : 0;
            return { cardData, coverageScore };
          })
          .filter(({ cardData, coverageScore }) => {
            if (!cardData) return false;
            if (filterBest && coverageScore < filterBestThreshold) return false;
            return true;
          });

        if (filterBest && filteredPokemon.length === 0) return null;

        return (
          <div key={i} style={{ width: "100%" }}>
            <Heading>{pokedex.name}</Heading>
            <div
              className="pokemon-grid"
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(140px, 30%), 1fr))",
                gap: 12,
              }}
            >
              {filteredPokemon.map(({ cardData, coverageScore }) => (
                <PokemonCard
                  key={cardData!.name + cardData!.id}
                  pokemonDetails={cardData!}
                  onClick={onPokemonSelected}
                  coverageScore={coverageScore}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
