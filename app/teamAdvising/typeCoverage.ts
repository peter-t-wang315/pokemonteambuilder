import { GameTitles } from "../data/gameTitles";
import { TypeChart, TypeChartByGeneration } from "../data/typeChart";

export function CalculateCoverages({
  PokemonGame,
  PokemonTeam,
}: {
  PokemonGame: string;
  PokemonTeam: { name: string; id: number; types: string[] }[];
}) {
  // Grab the type coverage the game has.
  if (!GameTitles[PokemonGame]) {
    throw new Error("Invalid game title");
  }
  const gameTypeChartGeneration =
    Object.keys(TypeChartByGeneration)
      .map(Number)
      .filter((gen) => gen <= GameTitles[PokemonGame].gen)
      .sort((a, b) => b - a)[0] ?? 100;
  const gameTypeChart: TypeChart =
    TypeChartByGeneration[gameTypeChartGeneration];

  // First we need to calculate each individual Pokemons defensive coverage.
  const coverages = PokemonTeam.reduce<
    Array<{
      immune: Set<string>;
      resists: Set<string>;
      weak: Set<string>;
      weakens: Set<string>;
    }>
  >((acc, pokemon) => {
    let coverage = {
      immune: new Set<string>(),
      resists: new Set<string>(),
      weak: new Set<string>(),
      weakens: new Set<string>(),
    };
    const type1 = pokemon.types[0]?.toLowerCase();
    const type2 = pokemon.types[1]?.toLowerCase() || "";

    coverage.immune = new Set([
      ...(gameTypeChart[type1]?.immune ?? []),
      ...(type2 ? (gameTypeChart[type2]?.immune ?? []) : []),
    ]);
    coverage.resists = new Set([
      ...(gameTypeChart[type1]?.resists ?? []),
      ...(type2 ? (gameTypeChart[type2]?.resists ?? []) : []),
    ]);
    coverage.weak = new Set([
      ...(gameTypeChart[type1]?.weak ?? []),
      ...(type2 ? (gameTypeChart[type2]?.weak ?? []) : []),
    ]);
    coverage.weakens = new Set([
      ...(gameTypeChart[type1]?.weakens ?? []),
      ...(type2 ? (gameTypeChart[type2]?.weakens ?? []) : []),
    ]);

    acc.push(coverage); // Changed from acc.add()
    return acc;
  }, []); // Initialize with empty array

  // Second we calculate the teams overall defensive coverage.
  debugger;
}

export function CalculateTeamOffensiveCoverage({
  PokemonGame,
  PokemonTeam,
}: {
  PokemonGame: string;
  PokemonTeam: { name: string; id: number; types: string[] }[];
}) {}

export function CalculateTeamDefensiveCoverage({
  PokemonGame,
  PokemonTeam,
}: {
  PokemonGame: string;
  PokemonTeam: { name: string; id: number; types: string[] }[];
}) {
  // Grab the type coverage the game has.
  if (!GameTitles[PokemonGame]) {
    throw new Error("Invalid game title");
  }
  const gameTypeChartGeneration =
    Object.keys(TypeChartByGeneration)
      .map(Number)
      .filter((gen) => gen <= GameTitles[PokemonGame].gen)
      .sort((a, b) => b - a)[0] ?? 100;
  const gameTypeChart: TypeChart =
    TypeChartByGeneration[gameTypeChartGeneration];

  // First we need to calculate each individual Pokemons defensive coverage.
  const defensiveCoverages = PokemonTeam.reduce<
    Array<{
      immune: Set<string>;
      resists: Set<string>;
      weak: Set<string>;
      weakens: Set<string>;
    }>
  >((acc, pokemon) => {
    let coverage = {
      immune: new Set<string>(),
      resists: new Set<string>(),
      weak: new Set<string>(),
      weakens: new Set<string>(),
    };
    const type1 = pokemon.types[0]?.toLowerCase();
    const type2 = pokemon.types[1]?.toLowerCase() || "";
    debugger;

    coverage.immune = new Set([
      ...(gameTypeChart[type1]?.immune ?? []),
      ...(type2 ? (gameTypeChart[type2]?.immune ?? []) : []),
    ]);
    coverage.resists = new Set([
      ...(gameTypeChart[type1]?.resists ?? []),
      ...(type2 ? (gameTypeChart[type2]?.resists ?? []) : []),
    ]);
    coverage.weak = new Set([
      ...(gameTypeChart[type1]?.weak ?? []),
      ...(type2 ? (gameTypeChart[type2]?.weak ?? []) : []),
    ]);

    acc.push(coverage); // Changed from acc.add()
    return acc;
  }, []); // Initialize with empty array

  // Second we calculate the teams overall defensive coverage.
}
