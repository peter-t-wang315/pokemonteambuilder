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
  // const path = Array.isArray(slug) ? slug.join("/") : slug || "";
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

  // This useEffect calculates type coverages when the team changes.
  // 1) Determine the immunities, resistances, weaknesses, and weakens coverage of each mon.
  // 2) Calculate what types are needed in the team to help cover both defensive and offensive options.
  // useEffect(() => {
  //   const individualCoverages = CalculateIndividualCoverages({
  //     PokemonGame: path,
  //     PokemonTeam: pokemonTeam,
  //   });

  //   const defensiveTeamTypesCovered = Object.keys(gameTypeChart).reduce(
  //     (acc, type) => {
  //       acc[type] = 0;
  //       return acc;
  //     },
  //     {} as Record<string, number>,
  //   );
  //   const offensiveTeamTypesCovered = Object.keys(gameTypeChart).reduce(
  //     (acc, type) => {
  //       acc[type] = 0;
  //       return acc;
  //     },
  //     {} as Record<string, number>,
  //   );

  //   // This is to track what types we've already covered so that we know what 0's in gameTypeChart are because we literally have no coverages for it
  //   // rather than we have a positive and negative coverage on it.
  //   const typesSeen: Record<string, Set<string>> = {
  //     offensive: new Set(),
  //     defensive: new Set(),
  //   };

  //   if (pokemonTeam[0].name === "") return;

  //   // Build the data for the two objects we made before.
  //   individualCoverages.forEach((coverage) => {
  //     // Defensive
  //     coverage.immune.forEach((type: string) => {
  //       const typeChartEntry = gameTypeChart[type];
  //       typeChartEntry.weakens.forEach((type: string) => {
  //         defensiveTeamTypesCovered[type] -= 1;
  //       });
  //       typesSeen.defensive.add(type);
  //     });
  //     coverage.resists.forEach((type: string) => {
  //       const typeChartEntry = gameTypeChart[type];
  //       typeChartEntry.weakens.forEach((type: string) => {
  //         defensiveTeamTypesCovered[type] -= 1;
  //       });
  //       typesSeen.defensive.add(type);
  //     });
  //     coverage.weak.forEach((type: string) => {
  //       const typeChartEntry = gameTypeChart[type];
  //       typeChartEntry.resistedBy.forEach((type: string) => {
  //         defensiveTeamTypesCovered[type] += 1;
  //       });
  //       typesSeen.defensive.add(type);
  //     });

  //     // Offensive
  //     coverage.weakens.forEach((type: string) => {
  //       const typeChartEntry = gameTypeChart[type];
  //       typeChartEntry.weak.forEach((type: string) => {
  //         offensiveTeamTypesCovered[type] -= 1;
  //       });
  //       typesSeen.offensive.add(type);
  //     });
  //     coverage.resistedBy.forEach((type: string) => {
  //       const typeChartEntry = gameTypeChart[type];
  //       typeChartEntry.weak.forEach((type: string) => {
  //         offensiveTeamTypesCovered[type] += 1;
  //       });
  //       typesSeen.offensive.add(type);
  //     });
  //   });

  //   // Now we have to account for the types covered that we're missing.
  //   Object.keys(defensiveTeamTypesCovered).forEach((type) => {
  //     if (!typesSeen.defensive.has(type)) {
  //       const typeChartEntry = gameTypeChart[type];
  //       typeChartEntry.immune.forEach((type: string) => {
  //         const immuneTypeChartEntry = gameTypeChart[type];
  //         immuneTypeChartEntry.weakens.forEach((type: string) => {
  //           defensiveTeamTypesCovered[type] -= 2;
  //         });
  //       });
  //       typeChartEntry.resists.forEach((type: string) => {
  //         const resistTypeChartEntry = gameTypeChart[type];
  //         resistTypeChartEntry.weakens.forEach((type: string) => {
  //           defensiveTeamTypesCovered[type] -= 1;
  //         });
  //       });
  //       typeChartEntry.weak.forEach((type: string) => {
  //         const weakTypeChartEntry = gameTypeChart[type];
  //         weakTypeChartEntry.resistedBy.forEach((type: string) => {
  //           defensiveTeamTypesCovered[type] += 1;
  //         });
  //       });
  //     }
  //   });
  //   Object.keys(offensiveTeamTypesCovered).forEach((type) => {
  //     if (!typesSeen.offensive.has(type)) {
  //       const typeChartEntry = gameTypeChart[type];
  //       typeChartEntry.weakens.forEach((type: string) => {
  //         const weakensTypeChartEntry = gameTypeChart[type];
  //         weakensTypeChartEntry.weak.forEach((type: string) => {
  //           offensiveTeamTypesCovered[type] -= 1;
  //         });
  //       });
  //       typeChartEntry.resistedBy.forEach((type: string) => {
  //         const resistedByTypeChartEntry = gameTypeChart[type];
  //         resistedByTypeChartEntry.weak.forEach((type: string) => {
  //           offensiveTeamTypesCovered[type] += 1;
  //         });
  //       });
  //     }
  //   });

  //   // Now store the team types covered data and just take pokemon types, add the values together and see how needed they are.
  //   setDefensiveTypesCovered(defensiveTeamTypesCovered);
  //   setOffensiveTypesCovered(offensiveTeamTypesCovered);

  //   console.log("Defensive Coverage:", defensiveTeamTypesCovered);
  //   console.log("Offensive Coverage:", offensiveTeamTypesCovered);
  // }, [pokemonTeam]);
  useEffect(() => {
    const activePokemon = pokemonTeam.filter((mon) => mon.name !== "");
    const allTypes = Object.keys(gameTypeChart);

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

    // Step 1: Compute current gaps AND track which types were actually encountered
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

    // Helper: how urgently does the team need coverage for this type?
    // Unseen types (blind spots) are treated as a gap of +1 even though their raw score is 0
    const effectiveDefGap = (t: string) => {
      if (!typesSeen.defensive.has(t)) return 1; // blind spot — nobody handles this
      return defensiveGaps[t];
    };
    const effectiveOffGap = (t: string) => {
      if (!typesSeen.offensive.has(t)) return 1; // blind spot — nobody hits this
      return offensiveGaps[t];
    };

    for (const candidateType of allTypes) {
      const chart = gameTypeChart[candidateType];
      let defScore = 0;
      let offScore = 0;

      chart.immune.forEach((t) => {
        const gap = effectiveDefGap(t);
        if (gap > 0) defScore += gap * 2; // immunity is extra valuable
      });
      chart.resists.forEach((t) => {
        const gap = effectiveDefGap(t);
        if (gap > 0) defScore += gap * 1;
      });
      chart.weak.forEach((t) => {
        const gap = effectiveDefGap(t);
        if (gap > 0) defScore -= gap * 1; // stacks a weakness the team already struggles with
      });

      chart.weakens.forEach((t) => {
        const gap = effectiveOffGap(t);
        if (gap > 0) offScore += gap * 1;
      });
      chart.resistedBy.forEach((t) => {
        const gap = effectiveOffGap(t);
        if (gap > 0) offScore -= gap * 0.5;
      });

      defensiveTypeScores[candidateType] = defScore;
      offensiveTypeScores[candidateType] = offScore;
    }

    setDefensiveTypesCovered(defensiveTypeScores);
    setOffensiveTypesCovered(offensiveTypeScores);

    console.log("Defensive Type Scores:", defensiveTypeScores);
    console.log("Offensive Type Scores:", offensiveTypeScores);
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

  function calculateCoverageColor(types: string[]) {
    const defScore = types.reduce(
      (acc, type) => acc + (defensiveTypesCovered[type.toLowerCase()] || 0),
      0,
    );
    const offScore = types.reduce(
      (acc, type) => acc + (offensiveTypesCovered[type.toLowerCase()] || 0),
      0,
    );

    // Either dimension can carry — a mon that's great offensively but neutral defensively
    // is just as valuable as the reverse
    const combined = (defScore + offScore) / 2;

    if (combined > 8) console.log(types);

    if (combined > 6) return "#1A7D1E";
    if (combined > 3) return "#3DA642";
    if (combined > 0) return "#7BC67E";
    if (combined > -2) return "#F5C842"; // neutral dead zone
    if (combined > -4) return "#E57373";
    return "#8B0000";
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
                  pokemonDetails={cardData}
                  onClick={onPokemonSelected}
                  borderColor={calculateCoverageColor(cardData.types)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
