export const Type = new Set([
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
]);

export interface ITypeChartEntry {
  immune: Set<string>; // Make required with empty set default
  resists: Set<string>;
  weak: Set<string>;
  weakens: Set<string>; // Make required with empty set default
}

export type TypeChart = Record<string, ITypeChartEntry>; // Require all types

interface TypeChartGenerations {
  [generation: number]: TypeChart;
}
// Do I need to worry about types that I'm not effective against?
export const TypeChartByGeneration: TypeChartGenerations = {
  6: {
    normal: {
      immune: new Set(["ghost"]),
      resists: new Set([]),
      weak: new Set(["fighting"]),
      weakens: new Set([]),
    },
    fighting: {
      immune: new Set([]),
      resists: new Set(["bug", "rock", "dark"]),
      weak: new Set(["flying", "fairy", "psychic"]),
      weakens: new Set(["normal", "rock", "steel", "ice", "dark"]),
    },
    flying: {
      immune: new Set(["ground"]),
      resists: new Set(["bug", "fighting", "grass"]),
      weak: new Set(["rock", "ice", "electric"]),
      weakens: new Set(["fighting", "bug", "grass"]),
    },
    poison: {
      immune: new Set([]),
      resists: new Set(["fighting", "grass", "bug", "poison", "fairy"]),
      weak: new Set(["psychic", "ground"]),
      weakens: new Set(["grass", "fairy"]),
    },
    ground: {
      immune: new Set(["electric"]),
      resists: new Set(["rock", "poison"]),
      weak: new Set(["ice", "grass", "water"]),
      weakens: new Set(["poison", "rock", "steel", "fire", "electric"]),
    },
    rock: {
      immune: new Set([]),
      resists: new Set(["fire", "flying", "poison", "normal"]),
      weak: new Set(["ground", "grass", "fighting", "steel", "water"]),
      weakens: new Set(["flying", "bug", "fire", "ice"]),
    },
    bug: {
      immune: new Set([]),
      resists: new Set(["ground", "fighting", "grass"]),
      weak: new Set(["flying", "rock", "fire"]),
      weakens: new Set(["grass", "psychic", "dark"]),
    },
    ghost: {
      immune: new Set(["fighting", "normal"]),
      resists: new Set(["bug", "poison"]),
      weak: new Set(["dark", "ghost"]),
      weakens: new Set(["ghost", "psychic"]),
    },
    steel: {
      immune: new Set(["poison"]),
      resists: new Set([
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
      ]),
      weak: new Set(["ground", "fire", "fighting"]),
      weakens: new Set(["rock", "ice", "fairy"]),
    },
    fire: {
      immune: new Set([]),
      resists: new Set(["grass", "bug", "fire", "steel", "fairy", "ice"]),
      weak: new Set(["rock", "ground", "water"]),
      weakens: new Set(["bug", "steel", "grass", "ice"]),
    },
    water: {
      immune: new Set([]),
      resists: new Set(["ice", "fire", "steel", "water"]),
      weak: new Set(["electric", "grass"]),
      weakens: new Set(["ground", "rock", "fire"]),
    },
    grass: {
      immune: new Set([]),
      resists: new Set(["electric", "grass", "ground", "water"]),
      weak: new Set(["bug", "fire", "poison", "flying", "ice"]),
      weakens: new Set(["ground", "rock", "water"]),
    },
    electric: {
      immune: new Set([]),
      resists: new Set(["flying", "electric", "steel"]),
      weak: new Set(["ground"]),
      weakens: new Set(["flying", "water"]),
    },
    psychic: {
      immune: new Set([]),
      resists: new Set(["psychic", "fighting"]),
      weak: new Set(["dark", "bug", "ghost"]),
      weakens: new Set(["fighting", "poison"]),
    },
    ice: {
      immune: new Set([]),
      resists: new Set(["ice"]),
      weak: new Set(["steel", "rock", "fire", "fighting"]),
      weakens: new Set(["flying", "ground", "grass", "dragon"]),
    },
    dragon: {
      immune: new Set([]),
      resists: new Set(["grass", "electric", "fire", "water"]),
      weak: new Set(["ice", "dragon", "fairy"]),
      weakens: new Set(["dragon"]),
    },
    dark: {
      immune: new Set(["psychic"]),
      resists: new Set(["dark", "ghost"]),
      weak: new Set(["bug", "fairy", "fighting"]),
      weakens: new Set(["ghost", "psychic"]),
    },
    fairy: {
      immune: new Set(["dragon"]),
      resists: new Set(["bug", "fighting", "dark"]),
      weak: new Set(["poison", "steel"]),
      weakens: new Set(["fighting", "dragon", "dark"]),
    },
  },
  2: {
    normal: {
      immune: new Set(["ghost"]),
      resists: new Set([]),
      weak: new Set(["fighting"]),
      weakens: new Set([]),
    },
    fighting: {
      immune: new Set([]),
      resists: new Set(["bug", "rock", "dark"]),
      weak: new Set(["flying", "psychic"]),
      weakens: new Set(["normal", "rock", "steel", "ice", "dark"]),
    },
    flying: {
      immune: new Set(["ground"]),
      resists: new Set(["bug", "fighting", "grass"]),
      weak: new Set(["rock", "ice", "electric"]),
      weakens: new Set(["fighting", "bug", "grass"]),
    },
    poison: {
      immune: new Set([]),
      resists: new Set(["fighting", "grass", "bug", "poison"]),
      weak: new Set(["psychic", "ground"]),
      weakens: new Set(["grass"]),
    },
    ground: {
      immune: new Set(["electric"]),
      resists: new Set(["rock", "poison"]),
      weak: new Set(["ice", "grass", "water"]),
      weakens: new Set(["poison", "rock", "steel", "fire", "electric"]),
    },
    rock: {
      immune: new Set([]),
      resists: new Set(["fire", "flying", "poison", "normal"]),
      weak: new Set(["ground", "grass", "fighting", "steel", "water"]),
      weakens: new Set(["flying", "bug", "fire", "ice"]),
    },
    bug: {
      immune: new Set([]),
      resists: new Set(["ground", "fighting", "grass"]),
      weak: new Set(["flying", "rock", "fire"]),
      weakens: new Set(["grass", "psychic", "dark"]),
    },
    ghost: {
      immune: new Set(["fighting", "normal"]),
      resists: new Set(["bug", "poison"]),
      weak: new Set(["dark", "ghost"]),
      weakens: new Set(["ghost", "psychic"]),
    },
    steel: {
      immune: new Set(["poison"]),
      resists: new Set([
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
      ]),
      weak: new Set(["ground", "fire", "fighting"]),
      weakens: new Set(["rock", "ice"]),
    },
    fire: {
      immune: new Set([]),
      resists: new Set(["grass", "bug", "fire", "steel", "ice"]),
      weak: new Set(["rock", "ground", "water"]),
      weakens: new Set(["bug", "steel", "grass", "ice"]),
    },
    water: {
      immune: new Set([]),
      resists: new Set(["ice", "fire", "steel", "water"]),
      weak: new Set(["electric", "grass"]),
      weakens: new Set(["ground", "rock", "fire"]),
    },
    grass: {
      immune: new Set([]),
      resists: new Set(["electric", "grass", "ground", "water"]),
      weak: new Set(["bug", "fire", "poison", "flying", "ice"]),
      weakens: new Set(["ground", "rock", "water"]),
    },
    electric: {
      immune: new Set([]),
      resists: new Set(["flying", "electric", "steel"]),
      weak: new Set(["ground"]),
      weakens: new Set(["flying", "water"]),
    },
    psychic: {
      immune: new Set([]),
      resists: new Set(["psychic", "fighting"]),
      weak: new Set(["dark", "bug", "ghost"]),
      weakens: new Set(["fighting", "poison"]),
    },
    ice: {
      immune: new Set([]),
      resists: new Set(["ice"]),
      weak: new Set(["steel", "rock", "fire", "fighting"]),
      weakens: new Set(["flying", "ground", "grass", "dragon"]),
    },
    dragon: {
      immune: new Set([]),
      resists: new Set(["grass", "electric", "fire", "water"]),
      weak: new Set(["ice", "dragon"]),
      weakens: new Set(["dragon"]),
    },
    dark: {
      immune: new Set(["psychic"]),
      resists: new Set(["dark", "ghost"]),
      weak: new Set(["bug", "fighting"]),
      weakens: new Set(["ghost", "psychic"]),
    },
  },
  1: {
    normal: {
      immune: new Set(["ghost"]),
      resists: new Set([]),
      weak: new Set(["fighting"]),
      weakens: new Set([]),
    },
    fighting: {
      immune: new Set([]),
      resists: new Set(["bug", "rock"]),
      weak: new Set(["flying", "psychic"]),
      weakens: new Set(["normal", "rock", "ice"]),
    },
    flying: {
      immune: new Set(["ground"]),
      resists: new Set(["bug", "fighting", "grass"]),
      weak: new Set(["rock", "ice", "electric"]),
      weakens: new Set(["fighting", "bug", "grass"]),
    },
    poison: {
      immune: new Set([]),
      resists: new Set(["fighting", "grass", "poison"]),
      weak: new Set(["bug", "psychic", "ground"]),
      weakens: new Set(["bug", "grass"]),
    },
    ground: {
      immune: new Set(["electric"]),
      resists: new Set(["rock", "poison"]),
      weak: new Set(["ice", "grass", "water"]),
      weakens: new Set(["poison", "rock", "fire", "electric"]),
    },
    rock: {
      immune: new Set([]),
      resists: new Set(["fire", "flying", "poison", "normal"]),
      weak: new Set(["ground", "grass", "fighting", "water"]),
      weakens: new Set(["flying", "bug", "fire", "ice"]),
    },
    bug: {
      immune: new Set([]),
      resists: new Set(["ground", "fighting", "grass"]),
      weak: new Set(["flying", "rock", "fire", "poison"]),
      weakens: new Set(["poison", "grass", "psychic"]),
    },
    ghost: {
      immune: new Set(["fighting", "normal"]),
      resists: new Set(["bug", "poison"]),
      weak: new Set(["ghost"]),
      weakens: new Set(["ghost"]),
    },
    fire: {
      immune: new Set([]),
      resists: new Set(["grass", "bug", "fire"]),
      weak: new Set(["rock", "ground", "water"]),
      weakens: new Set(["bug", "grass", "ice"]),
    },
    water: {
      immune: new Set([]),
      resists: new Set(["ice", "fire", "water"]),
      weak: new Set(["electric", "grass"]),
      weakens: new Set(["ground", "rock", "fire"]),
    },
    grass: {
      immune: new Set([]),
      resists: new Set(["electric", "grass", "ground", "water"]),
      weak: new Set(["bug", "fire", "poison", "flying", "ice"]),
      weakens: new Set(["ground", "rock", "water"]),
    },
    electric: {
      immune: new Set([]),
      resists: new Set(["flying", "electric"]),
      weak: new Set(["ground"]),
      weakens: new Set(["flying", "water"]),
    },
    psychic: {
      immune: new Set(["ghost"]),
      resists: new Set(["psychic", "fighting"]),
      weak: new Set(["bug"]),
      weakens: new Set(["fighting", "poison"]),
    },
    ice: {
      immune: new Set([]),
      resists: new Set(["ice"]),
      weak: new Set(["rock", "fire", "fighting"]),
      weakens: new Set(["flying", "ground", "grass", "dragon"]),
    },
    dragon: {
      immune: new Set([]),
      resists: new Set(["grass", "electric", "fire", "water"]),
      weak: new Set(["ice", "dragon"]),
      weakens: new Set(["dragon"]),
    },
  },
};
