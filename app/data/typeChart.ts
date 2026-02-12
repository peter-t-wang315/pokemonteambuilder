export enum Type {
  normal = "normal",
  fighting = "fighting",
  flying = "flying",
  poison = "poison",
  ground = "ground",
  rock = "rock",
  bug = "bug",
  ghost = "ghost",
  steel = "steel",
  fire = "fire",
  water = "water",
  grass = "grass",
  electric = "electric",
  psychic = "psychic",
  ice = "ice",
  dragon = "dragon",
  dark = "dark",
  fairy = "fairy",
}

interface TypeChartEntry {
  immune: string[]; // Make required with empty array default
  resists: string[];
  weak: string[];
  weakens: string[]; // Make required with empty array default
}

export type TypeChart = Record<string, TypeChartEntry>; // Require all types

interface TypeChartGenerations {
  [generation: number]: TypeChart;
}
// Do I need to worry about types that I'm not effective against?
export const TypeChartByGeneration: TypeChartGenerations = {
  6: {
    normal: {
      immune: ["ghost"],
      resists: [],
      weak: ["fighting"],
      weakens: [],
    },
    fighting: {
      immune: [],
      resists: ["bug", "rock", "dark"],
      weak: ["flying", "fairy", "psychic"],
      weakens: ["normal", "rock", "steel", "ice", "dark"],
    },
    flying: {
      immune: ["ground"],
      resists: ["bug", "fighting", "grass"],
      weak: ["rock", "ice", "electric"],
      weakens: ["fighting", "bug", "grass"],
    },
    poison: {
      immune: [],
      resists: ["fighting", "grass", "bug", "poison", "fairy"],
      weak: ["psychic", "ground"],
      weakens: ["grass", "fairy"],
    },
    ground: {
      immune: ["electric"],
      resists: ["rock", "poison"],
      weak: ["ice", "grass", "water"],
      weakens: ["poison", "rock", "steel", "fire", "electric"],
    },
    rock: {
      immune: [],
      resists: ["fire", "flying", "poison", "normal"],
      weak: ["ground", "grass", "fighting", "steel", "water"],
      weakens: ["flying", "bug", "fire", "ice"],
    },
    bug: {
      immune: [],
      resists: ["ground", "fighting", "grass"],
      weak: ["flying", "rock", "fire"],
      weakens: ["grass", "psychic", "dark"],
    },
    ghost: {
      immune: ["fighting", "normal"],
      resists: ["bug", "poison"],
      weak: ["dark", "ghost"],
      weakens: ["ghost", "psychic"],
    },
    steel: {
      immune: ["poison"],
      resists: [
        "normal",
        "grass",
        "bug",
        "rock",
        "steel",
        "flying",
        "fairy",
        "psychic",
        "dragon",
        "ice",
      ],
      weak: ["ground", "fire", "fighting"],
      weakens: ["rock", "ice", "fairy"],
    },
    fire: {
      immune: [],
      resists: ["grass", "bug", "fire", "steel", "fairy", "ice"],
      weak: ["rock", "ground", "water"],
      weakens: ["bug", "steel", "grass", "ice"],
    },
    water: {
      immune: [],
      resists: ["ice", "fire", "steel", "water"],
      weak: ["electric", "grass"],
      weakens: ["ground", "rock", "fire"],
    },
    grass: {
      immune: [],
      resists: ["electric", "grass", "ground", "water"],
      weak: ["bug", "fire", "poison", "flying", "ice"],
      weakens: ["ground", "rock", "water"],
    },
    electric: {
      immune: [],
      resists: ["flying", "electric", "steel"],
      weak: ["ground"],
      weakens: ["flying", "water"],
    },
    psychic: {
      immune: [],
      resists: ["psychic", "fighting"],
      weak: ["dark", "bug", "ghost"],
      weakens: ["fighting", "poison"],
    },
    ice: {
      immune: [],
      resists: ["ice"],
      weak: ["steel", "rock", "fire", "fighting"],
      weakens: ["flying", "ground", "grass", "dragon"],
    },
    dragon: {
      immune: [],
      resists: ["grass", "electric", "fire", "water"],
      weak: ["ice", "dragon", "fairy"],
      weakens: ["dragon"],
    },
    dark: {
      immune: ["psychic"],
      resists: ["dark", "ghost"],
      weak: ["bug", "fairy", "fighting"],
      weakens: ["ghost", "psychic"],
    },
    fairy: {
      immune: ["dragon"],
      resists: ["bug", "fighting", "dark"],
      weak: ["poison", "steel"],
      weakens: ["fighting", "dragon", "dark"],
    },
  },
  2: {
    normal: {
      immune: ["ghost"],
      resists: [],
      weak: ["fighting"],
      weakens: [],
    },
    fighting: {
      immune: [],
      resists: ["bug", "rock", "dark"],
      weak: ["flying", "psychic"],
      weakens: ["normal", "rock", "steel", "ice", "dark"],
    },
    flying: {
      immune: ["ground"],
      resists: ["bug", "fighting", "grass"],
      weak: ["rock", "ice", "electric"],
      weakens: ["fighting", "bug", "grass"],
    },
    poison: {
      immune: [],
      resists: ["fighting", "grass", "bug", "poison"],
      weak: ["psychic", "ground"],
      weakens: ["grass"],
    },
    ground: {
      immune: ["electric"],
      resists: ["rock", "poison"],
      weak: ["ice", "grass", "water"],
      weakens: ["poison", "rock", "steel", "fire", "electric"],
    },
    rock: {
      immune: [],
      resists: ["fire", "flying", "poison", "normal"],
      weak: ["ground", "grass", "fighting", "steel", "water"],
      weakens: ["flying", "bug", "fire", "ice"],
    },
    bug: {
      immune: [],
      resists: ["ground", "fighting", "grass"],
      weak: ["flying", "rock", "fire"],
      weakens: ["grass", "psychic", "dark"],
    },
    ghost: {
      immune: ["fighting", "normal"],
      resists: ["bug", "poison"],
      weak: ["dark", "ghost"],
      weakens: ["ghost", "psychic"],
    },
    steel: {
      immune: ["poison"],
      resists: [
        "dark",
        "ghost",
        "normal",
        "grass",
        "bug",
        "rock",
        "steel",
        "flying",
        "psychic",
        "dragon",
        "ice",
      ],
      weak: ["ground", "fire", "fighting"],
      weakens: ["rock", "ice"],
    },
    fire: {
      immune: [],
      resists: ["grass", "bug", "fire", "steel", "ice"],
      weak: ["rock", "ground", "water"],
      weakens: ["bug", "steel", "grass", "ice"],
    },
    water: {
      immune: [],
      resists: ["ice", "fire", "steel", "water"],
      weak: ["electric", "grass"],
      weakens: ["ground", "rock", "fire"],
    },
    grass: {
      immune: [],
      resists: ["electric", "grass", "ground", "water"],
      weak: ["bug", "fire", "poison", "flying", "ice"],
      weakens: ["ground", "rock", "water"],
    },
    electric: {
      immune: [],
      resists: ["flying", "electric", "steel"],
      weak: ["ground"],
      weakens: ["flying", "water"],
    },
    psychic: {
      immune: [],
      resists: ["psychic", "fighting"],
      weak: ["dark", "bug", "ghost"],
      weakens: ["fighting", "poison"],
    },
    ice: {
      immune: [],
      resists: ["ice"],
      weak: ["steel", "rock", "fire", "fighting"],
      weakens: ["flying", "ground", "grass", "dragon"],
    },
    dragon: {
      immune: [],
      resists: ["grass", "electric", "fire", "water"],
      weak: ["ice", "dragon"],
      weakens: ["dragon"],
    },
    dark: {
      immune: ["psychic"],
      resists: ["dark", "ghost"],
      weak: ["bug", "fighting"],
      weakens: ["ghost", "psychic"],
    },
  },
  1: {
    normal: {
      immune: ["ghost"],
      resists: [],
      weak: ["fighting"],
      weakens: [],
    },
    fighting: {
      immune: [],
      resists: ["bug", "rock"],
      weak: ["flying", "psychic"],
      weakens: ["normal", "rock", "ice"],
    },
    flying: {
      immune: ["ground"],
      resists: ["bug", "fighting", "grass"],
      weak: ["rock", "ice", "electric"],
      weakens: ["fighting", "bug", "grass"],
    },
    poison: {
      immune: [],
      resists: ["fighting", "grass", "poison"],
      weak: ["bug", "psychic", "ground"],
      weakens: ["bug", "grass"],
    },
    ground: {
      immune: ["electric"],
      resists: ["rock", "poison"],
      weak: ["ice", "grass", "water"],
      weakens: ["poison", "rock", "fire", "electric"],
    },
    rock: {
      immune: [],
      resists: ["fire", "flying", "poison", "normal"],
      weak: ["ground", "grass", "fighting", "water"],
      weakens: ["flying", "bug", "fire", "ice"],
    },
    bug: {
      immune: [],
      resists: ["ground", "fighting", "grass"],
      weak: ["flying", "rock", "fire", "poison"],
      weakens: ["poison", "grass", "psychic"],
    },
    ghost: {
      immune: ["fighting", "normal"],
      resists: ["bug", "poison"],
      weak: ["ghost"],
      weakens: ["ghost"],
    },
    fire: {
      immune: [],
      resists: ["grass", "bug", "fire"],
      weak: ["rock", "ground", "water"],
      weakens: ["bug", "grass", "ice"],
    },
    water: {
      immune: [],
      resists: ["ice", "fire", "water"],
      weak: ["electric", "grass"],
      weakens: ["ground", "rock", "fire"],
    },
    grass: {
      immune: [],
      resists: ["electric", "grass", "ground", "water"],
      weak: ["bug", "fire", "poison", "flying", "ice"],
      weakens: ["ground", "rock", "water"],
    },
    electric: {
      immune: [],
      resists: ["flying", "electric"],
      weak: ["ground"],
      weakens: ["flying", "water"],
    },
    psychic: {
      immune: ["ghost"],
      resists: ["psychic", "fighting"],
      weak: ["bug"],
      weakens: ["fighting", "poison"],
    },
    ice: {
      immune: [],
      resists: ["ice"],
      weak: ["rock", "fire", "fighting"],
      weakens: ["flying", "ground", "grass", "dragon"],
    },
    dragon: {
      immune: [],
      resists: ["grass", "electric", "fire", "water"],
      weak: ["ice", "dragon"],
      weakens: ["dragon"],
    },
  },
};
