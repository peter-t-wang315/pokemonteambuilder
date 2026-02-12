import { IGamePokedex } from "@/interfaces/IGamePokedex";

export const pokedexes: {
  [key: string]: IGamePokedex;
} = {
  kanto_home: {
    name: "Kanto Region",
    pokemon: [
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 3,
        name: "venusaur-mega",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 6,
        name: "charizard-mega-x",
      },
      {
        id: 6,
        name: "charizard-mega-y",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 9,
        name: "blastoise-mega",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 15,
        name: "beedrill-mega",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 18,
        name: "pidgeot-mega",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 19,
        name: "rattata-alola",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 20,
        name: "raticate-alola",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 26,
        name: "raichu-alola",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 27,
        name: "sandshrew-alola",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 28,
        name: "sandslash-alola",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 37,
        name: "vulpix-alola",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 38,
        name: "ninetales-alola",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 50,
        name: "diglett-alola",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 51,
        name: "dugtrio-alola",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 52,
        name: "meowth-alola",
      },
      {
        id: 52,
        name: "meowth-galar",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 53,
        name: "persian-alola",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 58,
        name: "growlithe-hisui",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 59,
        name: "arcanine-hisui",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 65,
        name: "alakazam-mega",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 74,
        name: "geodude-alola",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 75,
        name: "graveler-alola",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 76,
        name: "golem-alola",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 77,
        name: "ponyta-galar",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 78,
        name: "rapidash-galar",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 79,
        name: "slowpoke-galar",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 80,
        name: "slowbro-mega",
      },
      {
        id: 80,
        name: "slowbro-galar",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 83,
        name: "farfetch’d-galar",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 88,
        name: "grimer-alola",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 89,
        name: "muk-alola",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 94,
        name: "gengar-mega",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 100,
        name: "voltorb-hisui",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 101,
        name: "electrode-hisui",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 103,
        name: "exeggutor-alola",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 105,
        name: "marowak-alola",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 110,
        name: "weezing-galar",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 115,
        name: "kangaskhan-mega",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 122,
        name: "mr. mime-galar",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 127,
        name: "pinsir-mega",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 128,
        name: "tauros-paldea-combat",
      },
      {
        id: 128,
        name: "tauros-paldea-blaze",
      },
      {
        id: 128,
        name: "tauros-paldea-aqua",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 130,
        name: "gyarados-mega",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 142,
        name: "aerodactyl-mega",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 144,
        name: "articuno-galar",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 145,
        name: "zapdos-galar",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 146,
        name: "moltres-galar",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 150,
        name: "mewtwo-mega-x",
      },
      {
        id: 150,
        name: "mewtwo-mega-y",
      },
      {
        id: 151,
        name: "mew",
      },
    ],
  },
  johto_home: {
    name: "Johto Region",
    pokemon: [
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 157,
        name: "typhlosion-hisui",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 181,
        name: "ampharos-mega",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 194,
        name: "wooper-paldea",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 199,
        name: "slowking-galar",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 208,
        name: "steelix-mega",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 211,
        name: "qwilfish-hisui",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 212,
        name: "scizor-mega",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 214,
        name: "heracross-mega",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 215,
        name: "sneasel-hisui",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 222,
        name: "corsola-galar",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 229,
        name: "houndoom-mega",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 248,
        name: "tyranitar-mega",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 251,
        name: "celebi",
      },
    ],
  },
  hoenn_home: {
    name: "Hoenn Region",
    pokemon: [
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 254,
        name: "sceptile-mega",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 257,
        name: "blaziken-mega",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 260,
        name: "swampert-mega",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 263,
        name: "zigzagoon-galar",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 264,
        name: "linoone-galar",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 282,
        name: "gardevoir-mega",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 302,
        name: "sableye-mega",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 303,
        name: "mawile-mega",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 306,
        name: "aggron-mega",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 308,
        name: "medicham-mega",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 310,
        name: "manectric-mega",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 319,
        name: "sharpedo-mega",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 323,
        name: "camerupt-mega",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 334,
        name: "altaria-mega",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 351,
        name: "castform-sunny",
      },
      {
        id: 351,
        name: "castform-rainy",
      },
      {
        id: 351,
        name: "castform-snowy",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 354,
        name: "banette-mega",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 359,
        name: "absol-mega",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 362,
        name: "glalie-mega",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 373,
        name: "salamence-mega",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 376,
        name: "metagross-mega",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 380,
        name: "latias-mega",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 381,
        name: "latios-mega",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 382,
        name: "kyogre-primal",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 383,
        name: "groudon-primal",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 384,
        name: "rayquaza-mega",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
      {
        id: 386,
        name: "deoxys-attack",
      },
      {
        id: 386,
        name: "deoxys-defense",
      },
      {
        id: 386,
        name: "deoxys-speed",
      },
    ],
  },
  sinnoh_home: {
    name: "Sinnoh Region",
    pokemon: [
      {
        id: 387,
        name: "turtwig",
      },
      {
        id: 388,
        name: "grotle",
      },
      {
        id: 389,
        name: "torterra",
      },
      {
        id: 390,
        name: "chimchar",
      },
      {
        id: 391,
        name: "monferno",
      },
      {
        id: 392,
        name: "infernape",
      },
      {
        id: 393,
        name: "piplup",
      },
      {
        id: 394,
        name: "prinplup",
      },
      {
        id: 395,
        name: "empoleon",
      },
      {
        id: 396,
        name: "starly",
      },
      {
        id: 397,
        name: "staravia",
      },
      {
        id: 398,
        name: "staraptor",
      },
      {
        id: 399,
        name: "bidoof",
      },
      {
        id: 400,
        name: "bibarel",
      },
      {
        id: 401,
        name: "kricketot",
      },
      {
        id: 402,
        name: "kricketune",
      },
      {
        id: 403,
        name: "shinx",
      },
      {
        id: 404,
        name: "luxio",
      },
      {
        id: 405,
        name: "luxray",
      },
      {
        id: 406,
        name: "budew",
      },
      {
        id: 407,
        name: "roserade",
      },
      {
        id: 408,
        name: "cranidos",
      },
      {
        id: 409,
        name: "rampardos",
      },
      {
        id: 410,
        name: "shieldon",
      },
      {
        id: 411,
        name: "bastiodon",
      },
      {
        id: 412,
        name: "burmy",
      },
      {
        id: 413,
        name: "wormadam",
      },
      {
        id: 413,
        name: "wormadam-sandy",
      },
      {
        id: 413,
        name: "wormadam-trash",
      },
      {
        id: 414,
        name: "mothim",
      },
      {
        id: 415,
        name: "combee",
      },
      {
        id: 416,
        name: "vespiquen",
      },
      {
        id: 417,
        name: "pachirisu",
      },
      {
        id: 418,
        name: "buizel",
      },
      {
        id: 419,
        name: "floatzel",
      },
      {
        id: 420,
        name: "cherubi",
      },
      {
        id: 421,
        name: "cherrim",
      },
      {
        id: 421,
        name: "cherrim-sunshine",
      },
      {
        id: 422,
        name: "shellos",
      },
      {
        id: 423,
        name: "gastrodon",
      },
      {
        id: 424,
        name: "ambipom",
      },
      {
        id: 425,
        name: "drifloon",
      },
      {
        id: 426,
        name: "drifblim",
      },
      {
        id: 427,
        name: "buneary",
      },
      {
        id: 428,
        name: "lopunny",
      },
      {
        id: 428,
        name: "lopunny-mega",
      },
      {
        id: 429,
        name: "mismagius",
      },
      {
        id: 430,
        name: "honchkrow",
      },
      {
        id: 431,
        name: "glameow",
      },
      {
        id: 432,
        name: "purugly",
      },
      {
        id: 433,
        name: "chingling",
      },
      {
        id: 434,
        name: "stunky",
      },
      {
        id: 435,
        name: "skuntank",
      },
      {
        id: 436,
        name: "bronzor",
      },
      {
        id: 437,
        name: "bronzong",
      },
      {
        id: 438,
        name: "bonsly",
      },
      {
        id: 439,
        name: "mime jr.",
      },
      {
        id: 440,
        name: "happiny",
      },
      {
        id: 441,
        name: "chatot",
      },
      {
        id: 442,
        name: "spiritomb",
      },
      {
        id: 443,
        name: "gible",
      },
      {
        id: 444,
        name: "gabite",
      },
      {
        id: 445,
        name: "garchomp",
      },
      {
        id: 445,
        name: "garchomp-mega",
      },
      {
        id: 446,
        name: "munchlax",
      },
      {
        id: 447,
        name: "riolu",
      },
      {
        id: 448,
        name: "lucario",
      },
      {
        id: 448,
        name: "lucario-mega",
      },
      {
        id: 449,
        name: "hippopotas",
      },
      {
        id: 450,
        name: "hippowdon",
      },
      {
        id: 451,
        name: "skorupi",
      },
      {
        id: 452,
        name: "drapion",
      },
      {
        id: 453,
        name: "croagunk",
      },
      {
        id: 454,
        name: "toxicroak",
      },
      {
        id: 455,
        name: "carnivine",
      },
      {
        id: 456,
        name: "finneon",
      },
      {
        id: 457,
        name: "lumineon",
      },
      {
        id: 458,
        name: "mantyke",
      },
      {
        id: 459,
        name: "snover",
      },
      {
        id: 460,
        name: "abomasnow",
      },
      {
        id: 460,
        name: "abomasnow-mega",
      },
      {
        id: 461,
        name: "weavile",
      },
      {
        id: 462,
        name: "magnezone",
      },
      {
        id: 463,
        name: "lickilicky",
      },
      {
        id: 464,
        name: "rhyperior",
      },
      {
        id: 465,
        name: "tangrowth",
      },
      {
        id: 466,
        name: "electivire",
      },
      {
        id: 467,
        name: "magmortar",
      },
      {
        id: 468,
        name: "togekiss",
      },
      {
        id: 469,
        name: "yanmega",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 472,
        name: "gliscor",
      },
      {
        id: 473,
        name: "mamoswine",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 475,
        name: "gallade",
      },
      {
        id: 475,
        name: "gallade-mega",
      },
      {
        id: 476,
        name: "probopass",
      },
      {
        id: 477,
        name: "dusknoir",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 480,
        name: "uxie",
      },
      {
        id: 481,
        name: "mesprit",
      },
      {
        id: 482,
        name: "azelf",
      },
      {
        id: 483,
        name: "dialga",
      },
      {
        id: 483,
        name: "dialga-origin",
      },
      {
        id: 484,
        name: "palkia",
      },
      {
        id: 484,
        name: "palkia-origin",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 486,
        name: "regigigas",
      },
      {
        id: 487,
        name: "giratina",
      },
      {
        id: 487,
        name: "giratina-origin",
      },
      {
        id: 488,
        name: "cresselia",
      },
      {
        id: 489,
        name: "phione",
      },
      {
        id: 490,
        name: "manaphy",
      },
      {
        id: 491,
        name: "darkrai",
      },
      {
        id: 492,
        name: "shaymin",
      },
      {
        id: 492,
        name: "shaymin-sky",
      },
      {
        id: 493,
        name: "arceus",
      },
      {
        id: 493,
        name: "arceus-fighting",
      },
      {
        id: 493,
        name: "arceus-flying",
      },
      {
        id: 493,
        name: "arceus-poison",
      },
      {
        id: 493,
        name: "arceus-ground",
      },
      {
        id: 493,
        name: "arceus-rock",
      },
      {
        id: 493,
        name: "arceus-bug",
      },
      {
        id: 493,
        name: "arceus-ghost",
      },
      {
        id: 493,
        name: "arceus-steel",
      },
      {
        id: 493,
        name: "arceus-fire",
      },
      {
        id: 493,
        name: "arceus-water",
      },
      {
        id: 493,
        name: "arceus-grass",
      },
      {
        id: 493,
        name: "arceus-electric",
      },
      {
        id: 493,
        name: "arceus-psychic",
      },
      {
        id: 493,
        name: "arceus-ice",
      },
      {
        id: 493,
        name: "arceus-dragon",
      },
      {
        id: 493,
        name: "arceus-dark",
      },
      {
        id: 493,
        name: "arceus-fairy",
      },
    ],
  },
  unova_home: {
    name: "Unova Region",
    pokemon: [
      {
        id: 494,
        name: "victini",
      },
      {
        id: 495,
        name: "snivy",
      },
      {
        id: 496,
        name: "servine",
      },
      {
        id: 497,
        name: "serperior",
      },
      {
        id: 498,
        name: "tepig",
      },
      {
        id: 499,
        name: "pignite",
      },
      {
        id: 500,
        name: "emboar",
      },
      {
        id: 501,
        name: "oshawott",
      },
      {
        id: 502,
        name: "dewott",
      },
      {
        id: 503,
        name: "samurott",
      },
      {
        id: 503,
        name: "samurott-hisui",
      },
      {
        id: 504,
        name: "patrat",
      },
      {
        id: 505,
        name: "watchog",
      },
      {
        id: 506,
        name: "lillipup",
      },
      {
        id: 507,
        name: "herdier",
      },
      {
        id: 508,
        name: "stoutland",
      },
      {
        id: 509,
        name: "purrloin",
      },
      {
        id: 510,
        name: "liepard",
      },
      {
        id: 511,
        name: "pansage",
      },
      {
        id: 512,
        name: "simisage",
      },
      {
        id: 513,
        name: "pansear",
      },
      {
        id: 514,
        name: "simisear",
      },
      {
        id: 515,
        name: "panpour",
      },
      {
        id: 516,
        name: "simipour",
      },
      {
        id: 517,
        name: "munna",
      },
      {
        id: 518,
        name: "musharna",
      },
      {
        id: 519,
        name: "pidove",
      },
      {
        id: 520,
        name: "tranquill",
      },
      {
        id: 521,
        name: "unfezant",
      },
      {
        id: 522,
        name: "blitzle",
      },
      {
        id: 523,
        name: "zebstrika",
      },
      {
        id: 524,
        name: "roggenrola",
      },
      {
        id: 525,
        name: "boldore",
      },
      {
        id: 526,
        name: "gigalith",
      },
      {
        id: 527,
        name: "woobat",
      },
      {
        id: 528,
        name: "swoobat",
      },
      {
        id: 529,
        name: "drilbur",
      },
      {
        id: 530,
        name: "excadrill",
      },
      {
        id: 531,
        name: "audino",
      },
      {
        id: 531,
        name: "audino-mega",
      },
      {
        id: 532,
        name: "timburr",
      },
      {
        id: 533,
        name: "gurdurr",
      },
      {
        id: 534,
        name: "conkeldurr",
      },
      {
        id: 535,
        name: "tympole",
      },
      {
        id: 536,
        name: "palpitoad",
      },
      {
        id: 537,
        name: "seismitoad",
      },
      {
        id: 538,
        name: "throh",
      },
      {
        id: 539,
        name: "sawk",
      },
      {
        id: 540,
        name: "sewaddle",
      },
      {
        id: 541,
        name: "swadloon",
      },
      {
        id: 542,
        name: "leavanny",
      },
      {
        id: 543,
        name: "venipede",
      },
      {
        id: 544,
        name: "whirlipede",
      },
      {
        id: 545,
        name: "scolipede",
      },
      {
        id: 546,
        name: "cottonee",
      },
      {
        id: 547,
        name: "whimsicott",
      },
      {
        id: 548,
        name: "petilil",
      },
      {
        id: 549,
        name: "lilligant",
      },
      {
        id: 549,
        name: "lilligant-hisui",
      },
      {
        id: 550,
        name: "basculin",
      },
      {
        id: 550,
        name: "basculin-blue-striped",
      },
      {
        id: 550,
        name: "basculin-white-striped",
      },
      {
        id: 551,
        name: "sandile",
      },
      {
        id: 552,
        name: "krokorok",
      },
      {
        id: 553,
        name: "krookodile",
      },
      {
        id: 554,
        name: "darumaka",
      },
      {
        id: 554,
        name: "darumaka-galar",
      },
      {
        id: 555,
        name: "darmanitan",
      },
      {
        id: 555,
        name: "darmanitan-zen",
      },
      {
        id: 555,
        name: "darmanitan-galar",
      },
      {
        id: 555,
        name: "darmanitan-galar-zen",
      },
      {
        id: 556,
        name: "maractus",
      },
      {
        id: 557,
        name: "dwebble",
      },
      {
        id: 558,
        name: "crustle",
      },
      {
        id: 559,
        name: "scraggy",
      },
      {
        id: 560,
        name: "scrafty",
      },
      {
        id: 561,
        name: "sigilyph",
      },
      {
        id: 562,
        name: "yamask",
      },
      {
        id: 562,
        name: "yamask-galar",
      },
      {
        id: 563,
        name: "cofagrigus",
      },
      {
        id: 564,
        name: "tirtouga",
      },
      {
        id: 565,
        name: "carracosta",
      },
      {
        id: 566,
        name: "archen",
      },
      {
        id: 567,
        name: "archeops",
      },
      {
        id: 568,
        name: "trubbish",
      },
      {
        id: 569,
        name: "garbodor",
      },
      {
        id: 570,
        name: "zorua",
      },
      {
        id: 570,
        name: "zorua-hisui",
      },
      {
        id: 571,
        name: "zoroark",
      },
      {
        id: 571,
        name: "zoroark-hisui",
      },
      {
        id: 572,
        name: "minccino",
      },
      {
        id: 573,
        name: "cinccino",
      },
      {
        id: 574,
        name: "gothita",
      },
      {
        id: 575,
        name: "gothorita",
      },
      {
        id: 576,
        name: "gothitelle",
      },
      {
        id: 577,
        name: "solosis",
      },
      {
        id: 578,
        name: "duosion",
      },
      {
        id: 579,
        name: "reuniclus",
      },
      {
        id: 580,
        name: "ducklett",
      },
      {
        id: 581,
        name: "swanna",
      },
      {
        id: 582,
        name: "vanillite",
      },
      {
        id: 583,
        name: "vanillish",
      },
      {
        id: 584,
        name: "vanilluxe",
      },
      {
        id: 585,
        name: "deerling",
      },
      {
        id: 586,
        name: "sawsbuck",
      },
      {
        id: 587,
        name: "emolga",
      },
      {
        id: 588,
        name: "karrablast",
      },
      {
        id: 589,
        name: "escavalier",
      },
      {
        id: 590,
        name: "foongus",
      },
      {
        id: 591,
        name: "amoonguss",
      },
      {
        id: 592,
        name: "frillish",
      },
      {
        id: 593,
        name: "jellicent",
      },
      {
        id: 594,
        name: "alomomola",
      },
      {
        id: 595,
        name: "joltik",
      },
      {
        id: 596,
        name: "galvantula",
      },
      {
        id: 597,
        name: "ferroseed",
      },
      {
        id: 598,
        name: "ferrothorn",
      },
      {
        id: 599,
        name: "klink",
      },
      {
        id: 600,
        name: "klang",
      },
      {
        id: 601,
        name: "klinklang",
      },
      {
        id: 602,
        name: "tynamo",
      },
      {
        id: 603,
        name: "eelektrik",
      },
      {
        id: 604,
        name: "eelektross",
      },
      {
        id: 605,
        name: "elgyem",
      },
      {
        id: 606,
        name: "beheeyem",
      },
      {
        id: 607,
        name: "litwick",
      },
      {
        id: 608,
        name: "lampent",
      },
      {
        id: 609,
        name: "chandelure",
      },
      {
        id: 610,
        name: "axew",
      },
      {
        id: 611,
        name: "fraxure",
      },
      {
        id: 612,
        name: "haxorus",
      },
      {
        id: 613,
        name: "cubchoo",
      },
      {
        id: 614,
        name: "beartic",
      },
      {
        id: 615,
        name: "cryogonal",
      },
      {
        id: 616,
        name: "shelmet",
      },
      {
        id: 617,
        name: "accelgor",
      },
      {
        id: 618,
        name: "stunfisk",
      },
      {
        id: 618,
        name: "stunfisk-galar",
      },
      {
        id: 619,
        name: "mienfoo",
      },
      {
        id: 620,
        name: "mienshao",
      },
      {
        id: 621,
        name: "druddigon",
      },
      {
        id: 622,
        name: "golett",
      },
      {
        id: 623,
        name: "golurk",
      },
      {
        id: 624,
        name: "pawniard",
      },
      {
        id: 625,
        name: "bisharp",
      },
      {
        id: 626,
        name: "bouffalant",
      },
      {
        id: 627,
        name: "rufflet",
      },
      {
        id: 628,
        name: "braviary",
      },
      {
        id: 628,
        name: "braviary-hisui",
      },
      {
        id: 629,
        name: "vullaby",
      },
      {
        id: 630,
        name: "mandibuzz",
      },
      {
        id: 631,
        name: "heatmor",
      },
      {
        id: 632,
        name: "durant",
      },
      {
        id: 633,
        name: "deino",
      },
      {
        id: 634,
        name: "zweilous",
      },
      {
        id: 635,
        name: "hydreigon",
      },
      {
        id: 636,
        name: "larvesta",
      },
      {
        id: 637,
        name: "volcarona",
      },
      {
        id: 638,
        name: "cobalion",
      },
      {
        id: 639,
        name: "terrakion",
      },
      {
        id: 640,
        name: "virizion",
      },
      {
        id: 641,
        name: "tornadus",
      },
      {
        id: 641,
        name: "tornadus-therian",
      },
      {
        id: 642,
        name: "thundurus",
      },
      {
        id: 642,
        name: "thundurus-therian",
      },
      {
        id: 643,
        name: "reshiram",
      },
      {
        id: 644,
        name: "zekrom",
      },
      {
        id: 645,
        name: "landorus",
      },
      {
        id: 645,
        name: "landorus-therian",
      },
      {
        id: 646,
        name: "kyurem",
      },
      {
        id: 646,
        name: "kyurem-white",
      },
      {
        id: 646,
        name: "kyurem-black",
      },
      {
        id: 647,
        name: "keldeo",
      },
      {
        id: 647,
        name: "keldeo-resolute",
      },
      {
        id: 648,
        name: "meloetta",
      },
      {
        id: 648,
        name: "meloetta-pirouette",
      },
      {
        id: 649,
        name: "genesect",
      },
    ],
  },
  kalos_home: {
    name: "Kalos Region",
    pokemon: [
      {
        id: 650,
        name: "chespin",
      },
      {
        id: 651,
        name: "quilladin",
      },
      {
        id: 652,
        name: "chesnaught",
      },
      {
        id: 653,
        name: "fennekin",
      },
      {
        id: 654,
        name: "braixen",
      },
      {
        id: 655,
        name: "delphox",
      },
      {
        id: 656,
        name: "froakie",
      },
      {
        id: 657,
        name: "frogadier",
      },
      {
        id: 658,
        name: "greninja",
      },
      {
        id: 658,
        name: "greninja-ash",
      },
      {
        id: 659,
        name: "bunnelby",
      },
      {
        id: 660,
        name: "diggersby",
      },
      {
        id: 661,
        name: "fletchling",
      },
      {
        id: 662,
        name: "fletchinder",
      },
      {
        id: 663,
        name: "talonflame",
      },
      {
        id: 666,
        name: "vivillon",
      },
      {
        id: 666,
        name: "vivillon-fancy",
      },
      {
        id: 666,
        name: "vivillon-pokeball",
      },
      {
        id: 667,
        name: "litleo",
      },
      {
        id: 668,
        name: "pyroar",
      },
      {
        id: 669,
        name: "flabébé",
      },
      {
        id: 670,
        name: "floette",
      },
      {
        id: 671,
        name: "florges",
      },
      {
        id: 672,
        name: "skiddo",
      },
      {
        id: 673,
        name: "gogoat",
      },
      {
        id: 674,
        name: "pancham",
      },
      {
        id: 675,
        name: "pangoro",
      },
      {
        id: 676,
        name: "furfrou",
      },
      {
        id: 677,
        name: "espurr",
      },
      {
        id: 678,
        name: "meowstic",
      },
      {
        id: 678,
        name: "meowstic-f",
      },
      {
        id: 679,
        name: "honedge",
      },
      {
        id: 680,
        name: "doublade",
      },
      {
        id: 681,
        name: "aegislash",
      },
      {
        id: 681,
        name: "aegislash-blade",
      },
      {
        id: 682,
        name: "spritzee",
      },
      {
        id: 683,
        name: "aromatisse",
      },
      {
        id: 684,
        name: "swirlix",
      },
      {
        id: 685,
        name: "slurpuff",
      },
      {
        id: 686,
        name: "inkay",
      },
      {
        id: 687,
        name: "malamar",
      },
      {
        id: 688,
        name: "binacle",
      },
      {
        id: 689,
        name: "barbaracle",
      },
      {
        id: 690,
        name: "skrelp",
      },
      {
        id: 691,
        name: "dragalge",
      },
      {
        id: 692,
        name: "clauncher",
      },
      {
        id: 693,
        name: "clawitzer",
      },
      {
        id: 694,
        name: "helioptile",
      },
      {
        id: 695,
        name: "heliolisk",
      },
      {
        id: 696,
        name: "tyrunt",
      },
      {
        id: 697,
        name: "tyrantrum",
      },
      {
        id: 698,
        name: "amaura",
      },
      {
        id: 699,
        name: "aurorus",
      },
      {
        id: 700,
        name: "sylveon",
      },
      {
        id: 701,
        name: "hawlucha",
      },
      {
        id: 702,
        name: "dedenne",
      },
      {
        id: 703,
        name: "carbink",
      },
      {
        id: 704,
        name: "goomy",
      },
      {
        id: 705,
        name: "sliggoo",
      },
      {
        id: 705,
        name: "sliggoo-hisui",
      },
      {
        id: 706,
        name: "goodra",
      },
      {
        id: 706,
        name: "goodra-hisui",
      },
      {
        id: 707,
        name: "klefki",
      },
      {
        id: 708,
        name: "phantump",
      },
      {
        id: 709,
        name: "trevenant",
      },
      {
        id: 710,
        name: "pumpkaboo",
      },
      {
        id: 711,
        name: "gourgeist",
      },
      {
        id: 712,
        name: "bergmite",
      },
      {
        id: 713,
        name: "avalugg",
      },
      {
        id: 713,
        name: "avalugg-hisui",
      },
      {
        id: 714,
        name: "noibat",
      },
      {
        id: 715,
        name: "noivern",
      },
      {
        id: 716,
        name: "xerneas",
      },
      {
        id: 717,
        name: "yveltal",
      },
      {
        id: 718,
        name: "zygarde",
      },
      {
        id: 718,
        name: "zygarde-10%",
      },
      {
        id: 718,
        name: "zygarde-complete",
      },
      {
        id: 719,
        name: "diancie",
      },
      {
        id: 719,
        name: "diancie-mega",
      },
      {
        id: 720,
        name: "hoopa",
      },
      {
        id: 720,
        name: "hoopa-unbound",
      },
      {
        id: 721,
        name: "volcanion",
      },
    ],
  },
  alola_home: {
    name: "Alola Region",
    pokemon: [
      {
        id: 722,
        name: "rowlet",
      },
      {
        id: 723,
        name: "dartrix",
      },
      {
        id: 724,
        name: "decidueye",
      },
      {
        id: 724,
        name: "decidueye-hisui",
      },
      {
        id: 725,
        name: "litten",
      },
      {
        id: 726,
        name: "torracat",
      },
      {
        id: 727,
        name: "incineroar",
      },
      {
        id: 728,
        name: "popplio",
      },
      {
        id: 729,
        name: "brionne",
      },
      {
        id: 730,
        name: "primarina",
      },
      {
        id: 731,
        name: "pikipek",
      },
      {
        id: 732,
        name: "trumbeak",
      },
      {
        id: 733,
        name: "toucannon",
      },
      {
        id: 734,
        name: "yungoos",
      },
      {
        id: 735,
        name: "gumshoos",
      },
      {
        id: 736,
        name: "grubbin",
      },
      {
        id: 737,
        name: "charjabug",
      },
      {
        id: 738,
        name: "vikavolt",
      },
      {
        id: 739,
        name: "crabrawler",
      },
      {
        id: 740,
        name: "crabominable",
      },
      {
        id: 741,
        name: "oricorio",
      },
      {
        id: 741,
        name: "oricorio-pom-pom",
      },
      {
        id: 741,
        name: "oricorio-pa'u",
      },
      {
        id: 741,
        name: "oricorio-sensu",
      },
      {
        id: 742,
        name: "cutiefly",
      },
      {
        id: 743,
        name: "ribombee",
      },
      {
        id: 744,
        name: "rockruff",
      },
      {
        id: 745,
        name: "lycanroc",
      },
      {
        id: 745,
        name: "lycanroc-midnight",
      },
      {
        id: 745,
        name: "lycanroc-dusk",
      },
      {
        id: 746,
        name: "wishiwashi",
      },
      {
        id: 746,
        name: "wishiwashi-school",
      },
      {
        id: 747,
        name: "mareanie",
      },
      {
        id: 748,
        name: "toxapex",
      },
      {
        id: 749,
        name: "mudbray",
      },
      {
        id: 750,
        name: "mudsdale",
      },
      {
        id: 751,
        name: "dewpider",
      },
      {
        id: 752,
        name: "araquanid",
      },
      {
        id: 753,
        name: "fomantis",
      },
      {
        id: 754,
        name: "lurantis",
      },
      {
        id: 755,
        name: "morelull",
      },
      {
        id: 756,
        name: "shiinotic",
      },
      {
        id: 757,
        name: "salandit",
      },
      {
        id: 758,
        name: "salazzle",
      },
      {
        id: 759,
        name: "stufful",
      },
      {
        id: 760,
        name: "bewear",
      },
      {
        id: 761,
        name: "bounsweet",
      },
      {
        id: 762,
        name: "steenee",
      },
      {
        id: 763,
        name: "tsareena",
      },
      {
        id: 764,
        name: "comfey",
      },
      {
        id: 765,
        name: "oranguru",
      },
      {
        id: 766,
        name: "passimian",
      },
      {
        id: 767,
        name: "wimpod",
      },
      {
        id: 768,
        name: "golisopod",
      },
      {
        id: 769,
        name: "sandygast",
      },
      {
        id: 770,
        name: "palossand",
      },
      {
        id: 771,
        name: "pyukumuku",
      },
      {
        id: 772,
        name: "type: null",
      },
      {
        id: 773,
        name: "silvally",
      },
      {
        id: 773,
        name: "silvally-fighting",
      },
      {
        id: 773,
        name: "silvally-flying",
      },
      {
        id: 773,
        name: "silvally-poison",
      },
      {
        id: 773,
        name: "silvally-ground",
      },
      {
        id: 773,
        name: "silvally-rock",
      },
      {
        id: 773,
        name: "silvally-bug",
      },
      {
        id: 773,
        name: "silvally-ghost",
      },
      {
        id: 773,
        name: "silvally-steel",
      },
      {
        id: 773,
        name: "silvally-fire",
      },
      {
        id: 773,
        name: "silvally-water",
      },
      {
        id: 773,
        name: "silvally-grass",
      },
      {
        id: 773,
        name: "silvally-electric",
      },
      {
        id: 773,
        name: "silvally-psychic",
      },
      {
        id: 773,
        name: "silvally-ice",
      },
      {
        id: 773,
        name: "silvally-dragon",
      },
      {
        id: 773,
        name: "silvally-dark",
      },
      {
        id: 773,
        name: "silvally-fairy",
      },
      {
        id: 774,
        name: "minior",
      },
      {
        id: 775,
        name: "komala",
      },
      {
        id: 776,
        name: "turtonator",
      },
      {
        id: 777,
        name: "togedemaru",
      },
      {
        id: 778,
        name: "mimikyu",
      },
      {
        id: 779,
        name: "bruxish",
      },
      {
        id: 780,
        name: "drampa",
      },
      {
        id: 781,
        name: "dhelmise",
      },
      {
        id: 782,
        name: "jangmo-o",
      },
      {
        id: 783,
        name: "hakamo-o",
      },
      {
        id: 784,
        name: "kommo-o",
      },
      {
        id: 785,
        name: "tapu koko",
      },
      {
        id: 786,
        name: "tapu lele",
      },
      {
        id: 787,
        name: "tapu bulu",
      },
      {
        id: 788,
        name: "tapu fini",
      },
      {
        id: 789,
        name: "cosmog",
      },
      {
        id: 790,
        name: "cosmoem",
      },
      {
        id: 791,
        name: "solgaleo",
      },
      {
        id: 792,
        name: "lunala",
      },
      {
        id: 793,
        name: "nihilego",
      },
      {
        id: 794,
        name: "buzzwole",
      },
      {
        id: 795,
        name: "pheromosa",
      },
      {
        id: 796,
        name: "xurkitree",
      },
      {
        id: 797,
        name: "celesteela",
      },
      {
        id: 798,
        name: "kartana",
      },
      {
        id: 799,
        name: "guzzlord",
      },
      {
        id: 800,
        name: "necrozma",
      },
      {
        id: 800,
        name: "necrozma-dusk-mane",
      },
      {
        id: 800,
        name: "necrozma-dawn-wings",
      },
      {
        id: 800,
        name: "necrozma-ultra",
      },
      {
        id: 801,
        name: "magearna",
      },
      {
        id: 801,
        name: "magearna-original",
      },
      {
        id: 802,
        name: "marshadow",
      },
      {
        id: 803,
        name: "poipole",
      },
      {
        id: 804,
        name: "naganadel",
      },
      {
        id: 805,
        name: "stakataka",
      },
      {
        id: 806,
        name: "blacephalon",
      },
      {
        id: 807,
        name: "zeraora",
      },
    ],
  },
  other_home: {
    name: "Unknown Origins",
    pokemon: [
      {
        id: 808,
        name: "meltan",
      },
      {
        id: 809,
        name: "melmetal",
      },
    ],
  },
  galar_home: {
    name: "Galar Region",
    pokemon: [
      {
        id: 810,
        name: "grookey",
      },
      {
        id: 811,
        name: "thwackey",
      },
      {
        id: 812,
        name: "rillaboom",
      },
      {
        id: 813,
        name: "scorbunny",
      },
      {
        id: 814,
        name: "raboot",
      },
      {
        id: 815,
        name: "cinderace",
      },
      {
        id: 816,
        name: "sobble",
      },
      {
        id: 817,
        name: "drizzile",
      },
      {
        id: 818,
        name: "inteleon",
      },
      {
        id: 819,
        name: "skwovet",
      },
      {
        id: 820,
        name: "greedent",
      },
      {
        id: 821,
        name: "rookidee",
      },
      {
        id: 822,
        name: "corvisquire",
      },
      {
        id: 823,
        name: "corviknight",
      },
      {
        id: 824,
        name: "blipbug",
      },
      {
        id: 825,
        name: "dottler",
      },
      {
        id: 826,
        name: "orbeetle",
      },
      {
        id: 827,
        name: "nickit",
      },
      {
        id: 828,
        name: "thievul",
      },
      {
        id: 829,
        name: "gossifleur",
      },
      {
        id: 830,
        name: "eldegoss",
      },
      {
        id: 831,
        name: "wooloo",
      },
      {
        id: 832,
        name: "dubwool",
      },
      {
        id: 833,
        name: "chewtle",
      },
      {
        id: 834,
        name: "drednaw",
      },
      {
        id: 835,
        name: "yamper",
      },
      {
        id: 836,
        name: "boltund",
      },
      {
        id: 837,
        name: "rolycoly",
      },
      {
        id: 838,
        name: "carkol",
      },
      {
        id: 839,
        name: "coalossal",
      },
      {
        id: 840,
        name: "applin",
      },
      {
        id: 841,
        name: "flapple",
      },
      {
        id: 842,
        name: "appletun",
      },
      {
        id: 843,
        name: "silicobra",
      },
      {
        id: 844,
        name: "sandaconda",
      },
      {
        id: 845,
        name: "cramorant",
      },
      {
        id: 846,
        name: "arrokuda",
      },
      {
        id: 847,
        name: "barraskewda",
      },
      {
        id: 848,
        name: "toxel",
      },
      {
        id: 849,
        name: "toxtricity",
      },
      {
        id: 849,
        name: "toxtricity-low-key",
      },
      {
        id: 850,
        name: "sizzlipede",
      },
      {
        id: 851,
        name: "centiskorch",
      },
      {
        id: 852,
        name: "clobbopus",
      },
      {
        id: 853,
        name: "grapploct",
      },
      {
        id: 854,
        name: "sinistea",
      },
      {
        id: 855,
        name: "polteageist",
      },
      {
        id: 856,
        name: "hatenna",
      },
      {
        id: 857,
        name: "hattrem",
      },
      {
        id: 858,
        name: "hatterene",
      },
      {
        id: 859,
        name: "impidimp",
      },
      {
        id: 860,
        name: "morgrem",
      },
      {
        id: 861,
        name: "grimmsnarl",
      },
      {
        id: 862,
        name: "obstagoon",
      },
      {
        id: 863,
        name: "perrserker",
      },
      {
        id: 864,
        name: "cursola",
      },
      {
        id: 865,
        name: "sirfetch’d",
      },
      {
        id: 866,
        name: "mr. rime",
      },
      {
        id: 867,
        name: "runerigus",
      },
      {
        id: 868,
        name: "milcery",
      },
      {
        id: 869,
        name: "alcremie",
      },
      {
        id: 870,
        name: "falinks",
      },
      {
        id: 871,
        name: "pincurchin",
      },
      {
        id: 872,
        name: "snom",
      },
      {
        id: 873,
        name: "frosmoth",
      },
      {
        id: 874,
        name: "stonjourner",
      },
      {
        id: 875,
        name: "eiscue",
      },
      {
        id: 875,
        name: "eiscue-noice",
      },
      {
        id: 876,
        name: "indeedee",
      },
      {
        id: 876,
        name: "indeedee-f",
      },
      {
        id: 877,
        name: "morpeko",
      },
      {
        id: 877,
        name: "morpeko-hangry",
      },
      {
        id: 878,
        name: "cufant",
      },
      {
        id: 879,
        name: "copperajah",
      },
      {
        id: 880,
        name: "dracozolt",
      },
      {
        id: 881,
        name: "arctozolt",
      },
      {
        id: 882,
        name: "dracovish",
      },
      {
        id: 883,
        name: "arctovish",
      },
      {
        id: 884,
        name: "duraludon",
      },
      {
        id: 885,
        name: "dreepy",
      },
      {
        id: 886,
        name: "drakloak",
      },
      {
        id: 887,
        name: "dragapult",
      },
      {
        id: 888,
        name: "zacian",
      },
      {
        id: 888,
        name: "zacian-crowned",
      },
      {
        id: 889,
        name: "zamazenta",
      },
      {
        id: 889,
        name: "zamazenta-crowned",
      },
      {
        id: 890,
        name: "eternatus",
      },
      {
        id: 890,
        name: "eternatus-eternamax",
      },
      {
        id: 891,
        name: "kubfu",
      },
      {
        id: 892,
        name: "urshifu",
      },
      {
        id: 892,
        name: "urshifu-rapid-strike",
      },
      {
        id: 893,
        name: "zarude",
      },
      {
        id: 894,
        name: "regieleki",
      },
      {
        id: 895,
        name: "regidrago",
      },
      {
        id: 896,
        name: "glastrier",
      },
      {
        id: 897,
        name: "spectrier",
      },
      {
        id: 898,
        name: "calyrex",
      },
      {
        id: 898,
        name: "calyrex-ice",
      },
      {
        id: 898,
        name: "calyrex-shadow",
      },
    ],
  },
  kalos_central: {
    name: "Central Kalos Pokédex",
    pokemon: [
      {
        id: 650,
        name: "chespin",
      },
      {
        id: 651,
        name: "quilladin",
      },
      {
        id: 652,
        name: "chesnaught",
      },
      {
        id: 653,
        name: "fennekin",
      },
      {
        id: 654,
        name: "braixen",
      },
      {
        id: 655,
        name: "delphox",
      },
      {
        id: 656,
        name: "froakie",
      },
      {
        id: 657,
        name: "frogadier",
      },
      {
        id: 658,
        name: "greninja",
      },
      {
        id: 659,
        name: "bunnelby",
      },
      {
        id: 660,
        name: "diggersby",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 661,
        name: "fletchling",
      },
      {
        id: 662,
        name: "fletchinder",
      },
      {
        id: 663,
        name: "talonflame",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 666,
        name: "vivillon",
      },
      {
        id: 666,
        name: "vivillon-fancy",
      },
      {
        id: 666,
        name: "vivillon-pokeball",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 511,
        name: "pansage",
      },
      {
        id: 512,
        name: "simisage",
      },
      {
        id: 513,
        name: "pansear",
      },
      {
        id: 514,
        name: "simisear",
      },
      {
        id: 515,
        name: "panpour",
      },
      {
        id: 516,
        name: "simipour",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 399,
        name: "bidoof",
      },
      {
        id: 400,
        name: "bibarel",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 412,
        name: "burmy",
      },
      {
        id: 413,
        name: "wormadam",
      },
      {
        id: 413,
        name: "wormadam-sandy",
      },
      {
        id: 413,
        name: "wormadam-trash",
      },
      {
        id: 414,
        name: "mothim",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 130,
        name: "gyarados-mega",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 667,
        name: "litleo",
      },
      {
        id: 668,
        name: "pyroar",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 447,
        name: "riolu",
      },
      {
        id: 448,
        name: "lucario",
      },
      {
        id: 448,
        name: "lucario-mega",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 282,
        name: "gardevoir-mega",
      },
      {
        id: 475,
        name: "gallade",
      },
      {
        id: 669,
        name: "flabébé",
      },
      {
        id: 670,
        name: "floette",
      },
      {
        id: 671,
        name: "florges",
      },
      {
        id: 406,
        name: "budew",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 407,
        name: "roserade",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 415,
        name: "combee",
      },
      {
        id: 416,
        name: "vespiquen",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 3,
        name: "venusaur-mega",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 6,
        name: "charizard-mega-x",
      },
      {
        id: 6,
        name: "charizard-mega-y",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 9,
        name: "blastoise-mega",
      },
      {
        id: 672,
        name: "skiddo",
      },
      {
        id: 673,
        name: "gogoat",
      },
      {
        id: 674,
        name: "pancham",
      },
      {
        id: 675,
        name: "pangoro",
      },
      {
        id: 676,
        name: "furfrou",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 559,
        name: "scraggy",
      },
      {
        id: 560,
        name: "scrafty",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 65,
        name: "alakazam-mega",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 677,
        name: "espurr",
      },
      {
        id: 678,
        name: "meowstic",
      },
      {
        id: 678,
        name: "meowstic-f",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 679,
        name: "honedge",
      },
      {
        id: 680,
        name: "doublade",
      },
      {
        id: 681,
        name: "aegislash",
      },
      {
        id: 681,
        name: "aegislash-blade",
      },
      {
        id: 543,
        name: "venipede",
      },
      {
        id: 544,
        name: "whirlipede",
      },
      {
        id: 545,
        name: "scolipede",
      },
      {
        id: 531,
        name: "audino",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 453,
        name: "croagunk",
      },
      {
        id: 454,
        name: "toxicroak",
      },
      {
        id: 580,
        name: "ducklett",
      },
      {
        id: 581,
        name: "swanna",
      },
      {
        id: 682,
        name: "spritzee",
      },
      {
        id: 683,
        name: "aromatisse",
      },
      {
        id: 684,
        name: "swirlix",
      },
      {
        id: 685,
        name: "slurpuff",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 446,
        name: "munchlax",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 308,
        name: "medicham-mega",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 610,
        name: "axew",
      },
      {
        id: 611,
        name: "fraxure",
      },
      {
        id: 612,
        name: "haxorus",
      },
      {
        id: 719,
        name: "diancie",
      },
      {
        id: 720,
        name: "hoopa",
      },
      {
        id: 721,
        name: "volcanion",
      },
    ],
  },
  kalos_coastal: {
    name: "Coastal Kalos Pokédex",
    pokemon: [
      {
        id: 425,
        name: "drifloon",
      },
      {
        id: 426,
        name: "drifblim",
      },
      {
        id: 619,
        name: "mienfoo",
      },
      {
        id: 620,
        name: "mienshao",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 359,
        name: "absol-mega",
      },
      {
        id: 686,
        name: "inkay",
      },
      {
        id: 687,
        name: "malamar",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 688,
        name: "binacle",
      },
      {
        id: 689,
        name: "barbaracle",
      },
      {
        id: 557,
        name: "dwebble",
      },
      {
        id: 558,
        name: "crustle",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 690,
        name: "skrelp",
      },
      {
        id: 691,
        name: "dragalge",
      },
      {
        id: 692,
        name: "clauncher",
      },
      {
        id: 693,
        name: "clawitzer",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 551,
        name: "sandile",
      },
      {
        id: 552,
        name: "krokorok",
      },
      {
        id: 553,
        name: "krookodile",
      },
      {
        id: 694,
        name: "helioptile",
      },
      {
        id: 695,
        name: "heliolisk",
      },
      {
        id: 449,
        name: "hippopotas",
      },
      {
        id: 450,
        name: "hippowdon",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 464,
        name: "rhyperior",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 527,
        name: "woobat",
      },
      {
        id: 528,
        name: "swoobat",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 115,
        name: "kangaskhan-mega",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 303,
        name: "mawile-mega",
      },
      {
        id: 696,
        name: "tyrunt",
      },
      {
        id: 697,
        name: "tyrantrum",
      },
      {
        id: 698,
        name: "amaura",
      },
      {
        id: 699,
        name: "aurorus",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 142,
        name: "aerodactyl-mega",
      },
      {
        id: 597,
        name: "ferroseed",
      },
      {
        id: 598,
        name: "ferrothorn",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 310,
        name: "manectric-mega",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 229,
        name: "houndoom-mega",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 700,
        name: "sylveon",
      },
      {
        id: 587,
        name: "emolga",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 469,
        name: "yanmega",
      },
      {
        id: 701,
        name: "hawlucha",
      },
      {
        id: 561,
        name: "sigilyph",
      },
      {
        id: 622,
        name: "golett",
      },
      {
        id: 623,
        name: "golurk",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 476,
        name: "probopass",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 538,
        name: "throh",
      },
      {
        id: 539,
        name: "sawk",
      },
      {
        id: 396,
        name: "starly",
      },
      {
        id: 397,
        name: "staravia",
      },
      {
        id: 398,
        name: "staraptor",
      },
      {
        id: 434,
        name: "stunky",
      },
      {
        id: 435,
        name: "skuntank",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 702,
        name: "dedenne",
      },
      {
        id: 433,
        name: "chingling",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 439,
        name: "mime jr.",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 577,
        name: "solosis",
      },
      {
        id: 578,
        name: "duosion",
      },
      {
        id: 579,
        name: "reuniclus",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 524,
        name: "roggenrola",
      },
      {
        id: 525,
        name: "boldore",
      },
      {
        id: 526,
        name: "gigalith",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 703,
        name: "carbink",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 181,
        name: "ampharos-mega",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 127,
        name: "pinsir-mega",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 214,
        name: "heracross-mega",
      },
      {
        id: 417,
        name: "pachirisu",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 441,
        name: "chatot",
      },
      {
        id: 458,
        name: "mantyke",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 594,
        name: "alomomola",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
    ],
  },
  kalos_mountain: {
    name: "Mountain Kalos Pokédex",
    pokemon: [
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 443,
        name: "gible",
      },
      {
        id: 444,
        name: "gabite",
      },
      {
        id: 445,
        name: "garchomp",
      },
      {
        id: 445,
        name: "garchomp-mega",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 451,
        name: "skorupi",
      },
      {
        id: 452,
        name: "drapion",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 704,
        name: "goomy",
      },
      {
        id: 705,
        name: "sliggoo",
      },
      {
        id: 706,
        name: "goodra",
      },
      {
        id: 588,
        name: "karrablast",
      },
      {
        id: 589,
        name: "escavalier",
      },
      {
        id: 616,
        name: "shelmet",
      },
      {
        id: 617,
        name: "accelgor",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 455,
        name: "carnivine",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 94,
        name: "gengar-mega",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 618,
        name: "stunfisk",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 509,
        name: "purrloin",
      },
      {
        id: 510,
        name: "liepard",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 504,
        name: "patrat",
      },
      {
        id: 505,
        name: "watchog",
      },
      {
        id: 624,
        name: "pawniard",
      },
      {
        id: 625,
        name: "bisharp",
      },
      {
        id: 707,
        name: "klefki",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 430,
        name: "honchkrow",
      },
      {
        id: 590,
        name: "foongus",
      },
      {
        id: 591,
        name: "amoonguss",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 418,
        name: "buizel",
      },
      {
        id: 419,
        name: "floatzel",
      },
      {
        id: 550,
        name: "basculin",
      },
      {
        id: 550,
        name: "basculin-blue-striped",
      },
      {
        id: 708,
        name: "phantump",
      },
      {
        id: 709,
        name: "trevenant",
      },
      {
        id: 710,
        name: "pumpkaboo",
      },
      {
        id: 710,
        name: "pumpkaboo-small",
      },
      {
        id: 710,
        name: "pumpkaboo-large",
      },
      {
        id: 710,
        name: "pumpkaboo-super",
      },
      {
        id: 711,
        name: "gourgeist",
      },
      {
        id: 711,
        name: "gourgeist-small",
      },
      {
        id: 711,
        name: "gourgeist-large",
      },
      {
        id: 711,
        name: "gourgeist-super",
      },
      {
        id: 607,
        name: "litwick",
      },
      {
        id: 608,
        name: "lampent",
      },
      {
        id: 609,
        name: "chandelure",
      },
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 462,
        name: "magnezone",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 568,
        name: "trubbish",
      },
      {
        id: 569,
        name: "garbodor",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 473,
        name: "mamoswine",
      },
      {
        id: 712,
        name: "bergmite",
      },
      {
        id: 713,
        name: "avalugg",
      },
      {
        id: 613,
        name: "cubchoo",
      },
      {
        id: 614,
        name: "beartic",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 582,
        name: "vanillite",
      },
      {
        id: 583,
        name: "vanillish",
      },
      {
        id: 584,
        name: "vanilluxe",
      },
      {
        id: 459,
        name: "snover",
      },
      {
        id: 460,
        name: "abomasnow",
      },
      {
        id: 460,
        name: "abomasnow-mega",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 461,
        name: "weavile",
      },
      {
        id: 532,
        name: "timburr",
      },
      {
        id: 533,
        name: "gurdurr",
      },
      {
        id: 534,
        name: "conkeldurr",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 306,
        name: "aggron-mega",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 248,
        name: "tyranitar-mega",
      },
      {
        id: 631,
        name: "heatmor",
      },
      {
        id: 632,
        name: "durant",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 615,
        name: "cryogonal",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 714,
        name: "noibat",
      },
      {
        id: 715,
        name: "noivern",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 472,
        name: "gliscor",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 354,
        name: "banette-mega",
      },
      {
        id: 570,
        name: "zorua",
      },
      {
        id: 571,
        name: "zoroark",
      },
      {
        id: 574,
        name: "gothita",
      },
      {
        id: 575,
        name: "gothorita",
      },
      {
        id: 576,
        name: "gothitelle",
      },
      {
        id: 438,
        name: "bonsly",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 463,
        name: "lickilicky",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 212,
        name: "scizor-mega",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 621,
        name: "druddigon",
      },
      {
        id: 633,
        name: "deino",
      },
      {
        id: 634,
        name: "zweilous",
      },
      {
        id: 635,
        name: "hydreigon",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 716,
        name: "xerneas",
      },
      {
        id: 717,
        name: "yveltal",
      },
      {
        id: 718,
        name: "zygarde",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 150,
        name: "mewtwo-mega-x",
      },
      {
        id: 150,
        name: "mewtwo-mega-y",
      },
    ],
  },
  hoenn_oras: {
    name: "Hoenn Pokédex",
    pokemon: [
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 254,
        name: "sceptile-mega",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 257,
        name: "blaziken-mega",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 260,
        name: "swampert-mega",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 282,
        name: "gardevoir-mega",
      },
      {
        id: 475,
        name: "gallade",
      },
      {
        id: 475,
        name: "gallade-mega",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 65,
        name: "alakazam-mega",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 130,
        name: "gyarados-mega",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 476,
        name: "probopass",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 302,
        name: "sableye-mega",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 303,
        name: "mawile-mega",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 306,
        name: "aggron-mega",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 308,
        name: "medicham-mega",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 310,
        name: "manectric-mega",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 462,
        name: "magnezone",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 406,
        name: "budew",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 407,
        name: "roserade",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 319,
        name: "sharpedo-mega",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 323,
        name: "camerupt-mega",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 334,
        name: "altaria-mega",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 351,
        name: "castform-sunny",
      },
      {
        id: 351,
        name: "castform-rainy",
      },
      {
        id: 351,
        name: "castform-snowy",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 354,
        name: "banette-mega",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 477,
        name: "dusknoir",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 433,
        name: "chingling",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 359,
        name: "absol-mega",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 127,
        name: "pinsir-mega",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 214,
        name: "heracross-mega",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 464,
        name: "rhyperior",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 362,
        name: "glalie-mega",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 373,
        name: "salamence-mega",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 376,
        name: "metagross-mega",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 380,
        name: "latias-mega",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 381,
        name: "latios-mega",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 382,
        name: "kyogre-primal",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 383,
        name: "groudon-primal",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 384,
        name: "rayquaza-mega",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
      {
        id: 386,
        name: "deoxys-attack",
      },
      {
        id: 386,
        name: "deoxys-defense",
      },
      {
        id: 386,
        name: "deoxys-speed",
      },
    ],
  },
  alola: {
    name: "Alola Pokédex",
    pokemon: [
      {
        id: 722,
        name: "rowlet",
      },
      {
        id: 723,
        name: "dartrix",
      },
      {
        id: 724,
        name: "decidueye",
      },
      {
        id: 725,
        name: "litten",
      },
      {
        id: 726,
        name: "torracat",
      },
      {
        id: 727,
        name: "incineroar",
      },
      {
        id: 728,
        name: "popplio",
      },
      {
        id: 729,
        name: "brionne",
      },
      {
        id: 730,
        name: "primarina",
      },
      {
        id: 731,
        name: "pikipek",
      },
      {
        id: 732,
        name: "trumbeak",
      },
      {
        id: 733,
        name: "toucannon",
      },
      {
        id: 734,
        name: "yungoos",
      },
      {
        id: 735,
        name: "gumshoos",
      },
      {
        id: 19,
        name: "rattata-alola",
      },
      {
        id: 20,
        name: "raticate-alola",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu-alola",
      },
      {
        id: 736,
        name: "grubbin",
      },
      {
        id: 737,
        name: "charjabug",
      },
      {
        id: 738,
        name: "vikavolt",
      },
      {
        id: 438,
        name: "bonsly",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 440,
        name: "happiny",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 446,
        name: "munchlax",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 80,
        name: "slowbro-mega",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 65,
        name: "alakazam-mega",
      },
      {
        id: 52,
        name: "meowth-alola",
      },
      {
        id: 53,
        name: "persian-alola",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 462,
        name: "magnezone",
      },
      {
        id: 88,
        name: "grimer-alola",
      },
      {
        id: 89,
        name: "muk-alola",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 739,
        name: "crabrawler",
      },
      {
        id: 740,
        name: "crabominable",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 94,
        name: "gengar-mega",
      },
      {
        id: 425,
        name: "drifloon",
      },
      {
        id: 426,
        name: "drifblim",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 429,
        name: "mismagius",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 50,
        name: "diglett-alola",
      },
      {
        id: 51,
        name: "dugtrio-alola",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 627,
        name: "rufflet",
      },
      {
        id: 628,
        name: "braviary",
      },
      {
        id: 629,
        name: "vullaby",
      },
      {
        id: 630,
        name: "mandibuzz",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 741,
        name: "oricorio",
      },
      {
        id: 741,
        name: "oricorio-pom-pom",
      },
      {
        id: 741,
        name: "oricorio-pa'u",
      },
      {
        id: 741,
        name: "oricorio-sensu",
      },
      {
        id: 742,
        name: "cutiefly",
      },
      {
        id: 743,
        name: "ribombee",
      },
      {
        id: 548,
        name: "petilil",
      },
      {
        id: 549,
        name: "lilligant",
      },
      {
        id: 546,
        name: "cottonee",
      },
      {
        id: 547,
        name: "whimsicott",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 130,
        name: "gyarados-mega",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 524,
        name: "roggenrola",
      },
      {
        id: 525,
        name: "boldore",
      },
      {
        id: 526,
        name: "gigalith",
      },
      {
        id: 703,
        name: "carbink",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 302,
        name: "sableye-mega",
      },
      {
        id: 744,
        name: "rockruff",
      },
      {
        id: 745,
        name: "lycanroc",
      },
      {
        id: 745,
        name: "lycanroc-midnight",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 456,
        name: "finneon",
      },
      {
        id: 457,
        name: "lumineon",
      },
      {
        id: 746,
        name: "wishiwashi",
      },
      {
        id: 746,
        name: "wishiwashi-school",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 747,
        name: "mareanie",
      },
      {
        id: 748,
        name: "toxapex",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 373,
        name: "salamence-mega",
      },
      {
        id: 506,
        name: "lillipup",
      },
      {
        id: 507,
        name: "herdier",
      },
      {
        id: 508,
        name: "stoutland",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 700,
        name: "sylveon",
      },
      {
        id: 749,
        name: "mudbray",
      },
      {
        id: 750,
        name: "mudsdale",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 751,
        name: "dewpider",
      },
      {
        id: 752,
        name: "araquanid",
      },
      {
        id: 753,
        name: "fomantis",
      },
      {
        id: 754,
        name: "lurantis",
      },
      {
        id: 755,
        name: "morelull",
      },
      {
        id: 756,
        name: "shiinotic",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 594,
        name: "alomomola",
      },
      {
        id: 661,
        name: "fletchling",
      },
      {
        id: 662,
        name: "fletchinder",
      },
      {
        id: 663,
        name: "talonflame",
      },
      {
        id: 757,
        name: "salandit",
      },
      {
        id: 758,
        name: "salazzle",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak-alola",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 115,
        name: "kangaskhan-mega",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 467,
        name: "magmortar",
      },
      {
        id: 759,
        name: "stufful",
      },
      {
        id: 760,
        name: "bewear",
      },
      {
        id: 761,
        name: "bounsweet",
      },
      {
        id: 762,
        name: "steenee",
      },
      {
        id: 763,
        name: "tsareena",
      },
      {
        id: 764,
        name: "comfey",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 127,
        name: "pinsir-mega",
      },
      {
        id: 765,
        name: "oranguru",
      },
      {
        id: 766,
        name: "passimian",
      },
      {
        id: 704,
        name: "goomy",
      },
      {
        id: 705,
        name: "sliggoo",
      },
      {
        id: 706,
        name: "goodra",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 351,
        name: "castform-sunny",
      },
      {
        id: 351,
        name: "castform-rainy",
      },
      {
        id: 351,
        name: "castform-snowy",
      },
      {
        id: 767,
        name: "wimpod",
      },
      {
        id: 768,
        name: "golisopod",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 769,
        name: "sandygast",
      },
      {
        id: 770,
        name: "palossand",
      },
      {
        id: 408,
        name: "cranidos",
      },
      {
        id: 409,
        name: "rampardos",
      },
      {
        id: 410,
        name: "shieldon",
      },
      {
        id: 411,
        name: "bastiodon",
      },
      {
        id: 566,
        name: "archen",
      },
      {
        id: 567,
        name: "archeops",
      },
      {
        id: 564,
        name: "tirtouga",
      },
      {
        id: 565,
        name: "carracosta",
      },
      {
        id: 708,
        name: "phantump",
      },
      {
        id: 709,
        name: "trevenant",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 476,
        name: "probopass",
      },
      {
        id: 771,
        name: "pyukumuku",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 772,
        name: "type: null",
      },
      {
        id: 773,
        name: "silvally",
      },
      {
        id: 773,
        name: "silvally-fighting",
      },
      {
        id: 773,
        name: "silvally-flying",
      },
      {
        id: 773,
        name: "silvally-poison",
      },
      {
        id: 773,
        name: "silvally-ground",
      },
      {
        id: 773,
        name: "silvally-rock",
      },
      {
        id: 773,
        name: "silvally-bug",
      },
      {
        id: 773,
        name: "silvally-ghost",
      },
      {
        id: 773,
        name: "silvally-steel",
      },
      {
        id: 773,
        name: "silvally-fire",
      },
      {
        id: 773,
        name: "silvally-water",
      },
      {
        id: 773,
        name: "silvally-grass",
      },
      {
        id: 773,
        name: "silvally-electric",
      },
      {
        id: 773,
        name: "silvally-psychic",
      },
      {
        id: 773,
        name: "silvally-ice",
      },
      {
        id: 773,
        name: "silvally-dragon",
      },
      {
        id: 773,
        name: "silvally-dark",
      },
      {
        id: 773,
        name: "silvally-fairy",
      },
      {
        id: 718,
        name: "zygarde",
      },
      {
        id: 718,
        name: "zygarde-10%",
      },
      {
        id: 718,
        name: "zygarde-complete",
      },
      {
        id: 568,
        name: "trubbish",
      },
      {
        id: 569,
        name: "garbodor",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 774,
        name: "minior",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 376,
        name: "metagross-mega",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 674,
        name: "pancham",
      },
      {
        id: 675,
        name: "pangoro",
      },
      {
        id: 775,
        name: "komala",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 776,
        name: "turtonator",
      },
      {
        id: 777,
        name: "togedemaru",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 466,
        name: "electivire",
      },
      {
        id: 74,
        name: "geodude-alola",
      },
      {
        id: 75,
        name: "graveler-alola",
      },
      {
        id: 76,
        name: "golem-alola",
      },
      {
        id: 551,
        name: "sandile",
      },
      {
        id: 552,
        name: "krokorok",
      },
      {
        id: 553,
        name: "krookodile",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 443,
        name: "gible",
      },
      {
        id: 444,
        name: "gabite",
      },
      {
        id: 445,
        name: "garchomp",
      },
      {
        id: 445,
        name: "garchomp-mega",
      },
      {
        id: 707,
        name: "klefki",
      },
      {
        id: 778,
        name: "mimikyu",
      },
      {
        id: 779,
        name: "bruxish",
      },
      {
        id: 780,
        name: "drampa",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 359,
        name: "absol-mega",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 362,
        name: "glalie-mega",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 461,
        name: "weavile",
      },
      {
        id: 27,
        name: "sandshrew-alola",
      },
      {
        id: 28,
        name: "sandslash-alola",
      },
      {
        id: 37,
        name: "vulpix-alola",
      },
      {
        id: 38,
        name: "ninetales-alola",
      },
      {
        id: 582,
        name: "vanillite",
      },
      {
        id: 583,
        name: "vanillish",
      },
      {
        id: 584,
        name: "vanilluxe",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 781,
        name: "dhelmise",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 319,
        name: "sharpedo-mega",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor-alola",
      },
      {
        id: 782,
        name: "jangmo-o",
      },
      {
        id: 783,
        name: "hakamo-o",
      },
      {
        id: 784,
        name: "kommo-o",
      },
      {
        id: 587,
        name: "emolga",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 212,
        name: "scizor-mega",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 430,
        name: "honchkrow",
      },
      {
        id: 447,
        name: "riolu",
      },
      {
        id: 448,
        name: "lucario",
      },
      {
        id: 448,
        name: "lucario-mega",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 142,
        name: "aerodactyl-mega",
      },
      {
        id: 785,
        name: "tapu koko",
      },
      {
        id: 786,
        name: "tapu lele",
      },
      {
        id: 787,
        name: "tapu bulu",
      },
      {
        id: 788,
        name: "tapu fini",
      },
      {
        id: 789,
        name: "cosmog",
      },
      {
        id: 790,
        name: "cosmoem",
      },
      {
        id: 791,
        name: "solgaleo",
      },
      {
        id: 792,
        name: "lunala",
      },
      {
        id: 793,
        name: "nihilego",
      },
      {
        id: 794,
        name: "buzzwole",
      },
      {
        id: 795,
        name: "pheromosa",
      },
      {
        id: 796,
        name: "xurkitree",
      },
      {
        id: 797,
        name: "celesteela",
      },
      {
        id: 798,
        name: "kartana",
      },
      {
        id: 799,
        name: "guzzlord",
      },
      {
        id: 800,
        name: "necrozma",
      },
      {
        id: 801,
        name: "magearna",
      },
      {
        id: 802,
        name: "marshadow",
      },
    ],
  },
  alola_scan: {
    name: "Island Scan Pokémon",
    pokemon: [
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 633,
        name: "deino",
      },
      {
        id: 634,
        name: "zweilous",
      },
      {
        id: 635,
        name: "hydreigon",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 599,
        name: "klink",
      },
      {
        id: 600,
        name: "klang",
      },
      {
        id: 601,
        name: "klinklang",
      },
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 607,
        name: "litwick",
      },
      {
        id: 608,
        name: "lampent",
      },
      {
        id: 609,
        name: "chandelure",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 403,
        name: "shinx",
      },
      {
        id: 404,
        name: "luxio",
      },
      {
        id: 405,
        name: "luxray",
      },
      {
        id: 679,
        name: "honedge",
      },
      {
        id: 680,
        name: "doublade",
      },
      {
        id: 681,
        name: "aegislash",
      },
      {
        id: 681,
        name: "aegislash-blade",
      },
      {
        id: 543,
        name: "venipede",
      },
      {
        id: 544,
        name: "whirlipede",
      },
      {
        id: 545,
        name: "scolipede",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 574,
        name: "gothita",
      },
      {
        id: 575,
        name: "gothorita",
      },
      {
        id: 576,
        name: "gothitelle",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 473,
        name: "mamoswine",
      },
      {
        id: 577,
        name: "solosis",
      },
      {
        id: 578,
        name: "duosion",
      },
      {
        id: 579,
        name: "reuniclus",
      },
      {
        id: 406,
        name: "budew",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 407,
        name: "roserade",
      },
      {
        id: 396,
        name: "starly",
      },
      {
        id: 397,
        name: "staravia",
      },
      {
        id: 398,
        name: "staraptor",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 610,
        name: "axew",
      },
      {
        id: 611,
        name: "fraxure",
      },
      {
        id: 612,
        name: "haxorus",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 464,
        name: "rhyperior",
      },
      {
        id: 532,
        name: "timburr",
      },
      {
        id: 533,
        name: "gurdurr",
      },
      {
        id: 534,
        name: "conkeldurr",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 468,
        name: "togekiss",
      },
      {
        id: 540,
        name: "sewaddle",
      },
      {
        id: 541,
        name: "swadloon",
      },
      {
        id: 542,
        name: "leavanny",
      },
      {
        id: 495,
        name: "snivy",
      },
      {
        id: 496,
        name: "servine",
      },
      {
        id: 497,
        name: "serperior",
      },
      {
        id: 501,
        name: "oshawott",
      },
      {
        id: 502,
        name: "dewott",
      },
      {
        id: 503,
        name: "samurott",
      },
      {
        id: 498,
        name: "tepig",
      },
      {
        id: 499,
        name: "pignite",
      },
      {
        id: 500,
        name: "emboar",
      },
      {
        id: 602,
        name: "tynamo",
      },
      {
        id: 603,
        name: "eelektrik",
      },
      {
        id: 604,
        name: "eelektross",
      },
    ],
  },
  alola_usum: {
    name: "Alola Pokédex",
    pokemon: [
      {
        id: 722,
        name: "rowlet",
      },
      {
        id: 723,
        name: "dartrix",
      },
      {
        id: 724,
        name: "decidueye",
      },
      {
        id: 725,
        name: "litten",
      },
      {
        id: 726,
        name: "torracat",
      },
      {
        id: 727,
        name: "incineroar",
      },
      {
        id: 728,
        name: "popplio",
      },
      {
        id: 729,
        name: "brionne",
      },
      {
        id: 730,
        name: "primarina",
      },
      {
        id: 731,
        name: "pikipek",
      },
      {
        id: 732,
        name: "trumbeak",
      },
      {
        id: 733,
        name: "toucannon",
      },
      {
        id: 734,
        name: "yungoos",
      },
      {
        id: 735,
        name: "gumshoos",
      },
      {
        id: 19,
        name: "rattata-alola",
      },
      {
        id: 20,
        name: "raticate-alola",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 427,
        name: "buneary",
      },
      {
        id: 428,
        name: "lopunny",
      },
      {
        id: 428,
        name: "lopunny-mega",
      },
      {
        id: 686,
        name: "inkay",
      },
      {
        id: 687,
        name: "malamar",
      },
      {
        id: 570,
        name: "zorua",
      },
      {
        id: 571,
        name: "zoroark",
      },
      {
        id: 676,
        name: "furfrou",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu-alola",
      },
      {
        id: 736,
        name: "grubbin",
      },
      {
        id: 737,
        name: "charjabug",
      },
      {
        id: 738,
        name: "vikavolt",
      },
      {
        id: 438,
        name: "bonsly",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 440,
        name: "happiny",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 446,
        name: "munchlax",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 80,
        name: "slowbro-mega",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 65,
        name: "alakazam-mega",
      },
      {
        id: 52,
        name: "meowth-alola",
      },
      {
        id: 53,
        name: "persian-alola",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 462,
        name: "magnezone",
      },
      {
        id: 88,
        name: "grimer-alola",
      },
      {
        id: 89,
        name: "muk-alola",
      },
      {
        id: 439,
        name: "mime jr.",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 739,
        name: "crabrawler",
      },
      {
        id: 740,
        name: "crabominable",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 94,
        name: "gengar-mega",
      },
      {
        id: 425,
        name: "drifloon",
      },
      {
        id: 426,
        name: "drifblim",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 430,
        name: "honchkrow",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 714,
        name: "noibat",
      },
      {
        id: 715,
        name: "noivern",
      },
      {
        id: 50,
        name: "diglett-alola",
      },
      {
        id: 51,
        name: "dugtrio-alola",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 627,
        name: "rufflet",
      },
      {
        id: 628,
        name: "braviary",
      },
      {
        id: 629,
        name: "vullaby",
      },
      {
        id: 630,
        name: "mandibuzz",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 701,
        name: "hawlucha",
      },
      {
        id: 741,
        name: "oricorio",
      },
      {
        id: 741,
        name: "oricorio-pom-pom",
      },
      {
        id: 741,
        name: "oricorio-pa'u",
      },
      {
        id: 741,
        name: "oricorio-sensu",
      },
      {
        id: 742,
        name: "cutiefly",
      },
      {
        id: 743,
        name: "ribombee",
      },
      {
        id: 669,
        name: "flabébé",
      },
      {
        id: 670,
        name: "floette",
      },
      {
        id: 671,
        name: "florges",
      },
      {
        id: 548,
        name: "petilil",
      },
      {
        id: 549,
        name: "lilligant",
      },
      {
        id: 546,
        name: "cottonee",
      },
      {
        id: 547,
        name: "whimsicott",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 130,
        name: "gyarados-mega",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 524,
        name: "roggenrola",
      },
      {
        id: 525,
        name: "boldore",
      },
      {
        id: 526,
        name: "gigalith",
      },
      {
        id: 703,
        name: "carbink",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 302,
        name: "sableye-mega",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 303,
        name: "mawile-mega",
      },
      {
        id: 744,
        name: "rockruff",
      },
      {
        id: 745,
        name: "lycanroc",
      },
      {
        id: 745,
        name: "lycanroc-midnight",
      },
      {
        id: 745,
        name: "lycanroc-dusk",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 456,
        name: "finneon",
      },
      {
        id: 457,
        name: "lumineon",
      },
      {
        id: 746,
        name: "wishiwashi",
      },
      {
        id: 746,
        name: "wishiwashi-school",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 747,
        name: "mareanie",
      },
      {
        id: 748,
        name: "toxapex",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 458,
        name: "mantyke",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 373,
        name: "salamence-mega",
      },
      {
        id: 506,
        name: "lillipup",
      },
      {
        id: 507,
        name: "herdier",
      },
      {
        id: 508,
        name: "stoutland",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 700,
        name: "sylveon",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 181,
        name: "ampharos-mega",
      },
      {
        id: 749,
        name: "mudbray",
      },
      {
        id: 750,
        name: "mudsdale",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 751,
        name: "dewpider",
      },
      {
        id: 752,
        name: "araquanid",
      },
      {
        id: 753,
        name: "fomantis",
      },
      {
        id: 754,
        name: "lurantis",
      },
      {
        id: 755,
        name: "morelull",
      },
      {
        id: 756,
        name: "shiinotic",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 550,
        name: "basculin",
      },
      {
        id: 550,
        name: "basculin-blue-striped",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 594,
        name: "alomomola",
      },
      {
        id: 661,
        name: "fletchling",
      },
      {
        id: 662,
        name: "fletchinder",
      },
      {
        id: 663,
        name: "talonflame",
      },
      {
        id: 757,
        name: "salandit",
      },
      {
        id: 758,
        name: "salazzle",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak-alola",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 115,
        name: "kangaskhan-mega",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 467,
        name: "magmortar",
      },
      {
        id: 636,
        name: "larvesta",
      },
      {
        id: 637,
        name: "volcarona",
      },
      {
        id: 759,
        name: "stufful",
      },
      {
        id: 760,
        name: "bewear",
      },
      {
        id: 761,
        name: "bounsweet",
      },
      {
        id: 762,
        name: "steenee",
      },
      {
        id: 763,
        name: "tsareena",
      },
      {
        id: 764,
        name: "comfey",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 127,
        name: "pinsir-mega",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 765,
        name: "oranguru",
      },
      {
        id: 766,
        name: "passimian",
      },
      {
        id: 704,
        name: "goomy",
      },
      {
        id: 705,
        name: "sliggoo",
      },
      {
        id: 706,
        name: "goodra",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 351,
        name: "castform-sunny",
      },
      {
        id: 351,
        name: "castform-rainy",
      },
      {
        id: 351,
        name: "castform-snowy",
      },
      {
        id: 767,
        name: "wimpod",
      },
      {
        id: 768,
        name: "golisopod",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 769,
        name: "sandygast",
      },
      {
        id: 770,
        name: "palossand",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 408,
        name: "cranidos",
      },
      {
        id: 409,
        name: "rampardos",
      },
      {
        id: 410,
        name: "shieldon",
      },
      {
        id: 411,
        name: "bastiodon",
      },
      {
        id: 566,
        name: "archen",
      },
      {
        id: 567,
        name: "archeops",
      },
      {
        id: 564,
        name: "tirtouga",
      },
      {
        id: 565,
        name: "carracosta",
      },
      {
        id: 696,
        name: "tyrunt",
      },
      {
        id: 697,
        name: "tyrantrum",
      },
      {
        id: 698,
        name: "amaura",
      },
      {
        id: 699,
        name: "aurorus",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 248,
        name: "tyranitar-mega",
      },
      {
        id: 708,
        name: "phantump",
      },
      {
        id: 709,
        name: "trevenant",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 476,
        name: "probopass",
      },
      {
        id: 771,
        name: "pyukumuku",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 772,
        name: "type: null",
      },
      {
        id: 773,
        name: "silvally",
      },
      {
        id: 773,
        name: "silvally-fighting",
      },
      {
        id: 773,
        name: "silvally-flying",
      },
      {
        id: 773,
        name: "silvally-poison",
      },
      {
        id: 773,
        name: "silvally-ground",
      },
      {
        id: 773,
        name: "silvally-rock",
      },
      {
        id: 773,
        name: "silvally-bug",
      },
      {
        id: 773,
        name: "silvally-ghost",
      },
      {
        id: 773,
        name: "silvally-steel",
      },
      {
        id: 773,
        name: "silvally-fire",
      },
      {
        id: 773,
        name: "silvally-water",
      },
      {
        id: 773,
        name: "silvally-grass",
      },
      {
        id: 773,
        name: "silvally-electric",
      },
      {
        id: 773,
        name: "silvally-psychic",
      },
      {
        id: 773,
        name: "silvally-ice",
      },
      {
        id: 773,
        name: "silvally-dragon",
      },
      {
        id: 773,
        name: "silvally-dark",
      },
      {
        id: 773,
        name: "silvally-fairy",
      },
      {
        id: 803,
        name: "poipole",
      },
      {
        id: 804,
        name: "naganadel",
      },
      {
        id: 718,
        name: "zygarde",
      },
      {
        id: 718,
        name: "zygarde-10%",
      },
      {
        id: 718,
        name: "zygarde-complete",
      },
      {
        id: 568,
        name: "trubbish",
      },
      {
        id: 569,
        name: "garbodor",
      },
      {
        id: 572,
        name: "minccino",
      },
      {
        id: 573,
        name: "cinccino",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 605,
        name: "elgyem",
      },
      {
        id: 606,
        name: "beheeyem",
      },
      {
        id: 774,
        name: "minior",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 376,
        name: "metagross-mega",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 674,
        name: "pancham",
      },
      {
        id: 675,
        name: "pangoro",
      },
      {
        id: 775,
        name: "komala",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 776,
        name: "turtonator",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 229,
        name: "houndoom-mega",
      },
      {
        id: 702,
        name: "dedenne",
      },
      {
        id: 777,
        name: "togedemaru",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 310,
        name: "manectric-mega",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 466,
        name: "electivire",
      },
      {
        id: 74,
        name: "geodude-alola",
      },
      {
        id: 75,
        name: "graveler-alola",
      },
      {
        id: 76,
        name: "golem-alola",
      },
      {
        id: 551,
        name: "sandile",
      },
      {
        id: 552,
        name: "krokorok",
      },
      {
        id: 553,
        name: "krookodile",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 443,
        name: "gible",
      },
      {
        id: 444,
        name: "gabite",
      },
      {
        id: 445,
        name: "garchomp",
      },
      {
        id: 445,
        name: "garchomp-mega",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 622,
        name: "golett",
      },
      {
        id: 623,
        name: "golurk",
      },
      {
        id: 707,
        name: "klefki",
      },
      {
        id: 778,
        name: "mimikyu",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 354,
        name: "banette-mega",
      },
      {
        id: 592,
        name: "frillish",
      },
      {
        id: 593,
        name: "jellicent",
      },
      {
        id: 779,
        name: "bruxish",
      },
      {
        id: 780,
        name: "drampa",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 359,
        name: "absol-mega",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 362,
        name: "glalie-mega",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 461,
        name: "weavile",
      },
      {
        id: 27,
        name: "sandshrew-alola",
      },
      {
        id: 28,
        name: "sandslash-alola",
      },
      {
        id: 37,
        name: "vulpix-alola",
      },
      {
        id: 38,
        name: "ninetales-alola",
      },
      {
        id: 582,
        name: "vanillite",
      },
      {
        id: 583,
        name: "vanillish",
      },
      {
        id: 584,
        name: "vanilluxe",
      },
      {
        id: 559,
        name: "scraggy",
      },
      {
        id: 560,
        name: "scrafty",
      },
      {
        id: 624,
        name: "pawniard",
      },
      {
        id: 625,
        name: "bisharp",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 781,
        name: "dhelmise",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 319,
        name: "sharpedo-mega",
      },
      {
        id: 690,
        name: "skrelp",
      },
      {
        id: 691,
        name: "dragalge",
      },
      {
        id: 692,
        name: "clauncher",
      },
      {
        id: 693,
        name: "clawitzer",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor-alola",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 619,
        name: "mienfoo",
      },
      {
        id: 620,
        name: "mienshao",
      },
      {
        id: 782,
        name: "jangmo-o",
      },
      {
        id: 783,
        name: "hakamo-o",
      },
      {
        id: 784,
        name: "kommo-o",
      },
      {
        id: 587,
        name: "emolga",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 212,
        name: "scizor-mega",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 214,
        name: "heracross-mega",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 424,
        name: "ambipom",
      },
      {
        id: 667,
        name: "litleo",
      },
      {
        id: 668,
        name: "pyroar",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 429,
        name: "mismagius",
      },
      {
        id: 621,
        name: "druddigon",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 463,
        name: "lickilicky",
      },
      {
        id: 447,
        name: "riolu",
      },
      {
        id: 448,
        name: "lucario",
      },
      {
        id: 448,
        name: "lucario-mega",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 142,
        name: "aerodactyl-mega",
      },
      {
        id: 785,
        name: "tapu koko",
      },
      {
        id: 786,
        name: "tapu lele",
      },
      {
        id: 787,
        name: "tapu bulu",
      },
      {
        id: 788,
        name: "tapu fini",
      },
      {
        id: 789,
        name: "cosmog",
      },
      {
        id: 790,
        name: "cosmoem",
      },
      {
        id: 791,
        name: "solgaleo",
      },
      {
        id: 792,
        name: "lunala",
      },
      {
        id: 793,
        name: "nihilego",
      },
      {
        id: 805,
        name: "stakataka",
      },
      {
        id: 806,
        name: "blacephalon",
      },
      {
        id: 794,
        name: "buzzwole",
      },
      {
        id: 795,
        name: "pheromosa",
      },
      {
        id: 796,
        name: "xurkitree",
      },
      {
        id: 797,
        name: "celesteela",
      },
      {
        id: 798,
        name: "kartana",
      },
      {
        id: 799,
        name: "guzzlord",
      },
      {
        id: 800,
        name: "necrozma",
      },
      {
        id: 800,
        name: "necrozma-dusk-mane",
      },
      {
        id: 800,
        name: "necrozma-dawn-wings",
      },
      {
        id: 800,
        name: "necrozma-ultra",
      },
      {
        id: 801,
        name: "magearna",
      },
      {
        id: 802,
        name: "marshadow",
      },
      {
        id: 807,
        name: "zeraora",
      },
    ],
  },
  alola_scan_usum: {
    name: "Island Scan Pokémon",
    pokemon: [
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 3,
        name: "venusaur-mega",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 6,
        name: "charizard-mega-x",
      },
      {
        id: 6,
        name: "charizard-mega-y",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 9,
        name: "blastoise-mega",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 208,
        name: "steelix-mega",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 607,
        name: "litwick",
      },
      {
        id: 608,
        name: "lampent",
      },
      {
        id: 609,
        name: "chandelure",
      },
      {
        id: 666,
        name: "vivillon",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 15,
        name: "beedrill-mega",
      },
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 254,
        name: "sceptile-mega",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 257,
        name: "blaziken-mega",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 260,
        name: "swampert-mega",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 282,
        name: "gardevoir-mega",
      },
      {
        id: 475,
        name: "gallade",
      },
      {
        id: 475,
        name: "gallade-mega",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 679,
        name: "honedge",
      },
      {
        id: 680,
        name: "doublade",
      },
      {
        id: 681,
        name: "aegislash",
      },
      {
        id: 681,
        name: "aegislash-blade",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 18,
        name: "pidgeot-mega",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 464,
        name: "rhyperior",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 473,
        name: "mamoswine",
      },
      {
        id: 387,
        name: "turtwig",
      },
      {
        id: 388,
        name: "grotle",
      },
      {
        id: 389,
        name: "torterra",
      },
      {
        id: 390,
        name: "chimchar",
      },
      {
        id: 391,
        name: "monferno",
      },
      {
        id: 392,
        name: "infernape",
      },
      {
        id: 393,
        name: "piplup",
      },
      {
        id: 394,
        name: "prinplup",
      },
      {
        id: 395,
        name: "empoleon",
      },
      {
        id: 610,
        name: "axew",
      },
      {
        id: 611,
        name: "fraxure",
      },
      {
        id: 612,
        name: "haxorus",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 306,
        name: "aggron-mega",
      },
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 540,
        name: "sewaddle",
      },
      {
        id: 541,
        name: "swadloon",
      },
      {
        id: 542,
        name: "leavanny",
      },
      {
        id: 602,
        name: "tynamo",
      },
      {
        id: 603,
        name: "eelektrik",
      },
      {
        id: 604,
        name: "eelektross",
      },
      {
        id: 650,
        name: "chespin",
      },
      {
        id: 651,
        name: "quilladin",
      },
      {
        id: 652,
        name: "chesnaught",
      },
      {
        id: 653,
        name: "fennekin",
      },
      {
        id: 654,
        name: "braixen",
      },
      {
        id: 655,
        name: "delphox",
      },
      {
        id: 656,
        name: "froakie",
      },
      {
        id: 657,
        name: "frogadier",
      },
      {
        id: 658,
        name: "greninja",
      },
      {
        id: 658,
        name: "greninja-ash",
      },
    ],
  },
  alola_wormhole_usum: {
    name: "Ultra Wormhole Pokémon",
    pokemon: [
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 150,
        name: "mewtwo-mega-x",
      },
      {
        id: 150,
        name: "mewtwo-mega-y",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 469,
        name: "yanmega",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 308,
        name: "medicham-mega",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 334,
        name: "altaria-mega",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 380,
        name: "latias-mega",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 381,
        name: "latios-mega",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 382,
        name: "kyogre-primal",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 383,
        name: "groudon-primal",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 384,
        name: "rayquaza-mega",
      },
      {
        id: 418,
        name: "buizel",
      },
      {
        id: 419,
        name: "floatzel",
      },
      {
        id: 449,
        name: "hippopotas",
      },
      {
        id: 450,
        name: "hippowdon",
      },
      {
        id: 451,
        name: "skorupi",
      },
      {
        id: 452,
        name: "drapion",
      },
      {
        id: 459,
        name: "snover",
      },
      {
        id: 460,
        name: "abomasnow",
      },
      {
        id: 460,
        name: "abomasnow-mega",
      },
      {
        id: 480,
        name: "uxie",
      },
      {
        id: 481,
        name: "mesprit",
      },
      {
        id: 482,
        name: "azelf",
      },
      {
        id: 483,
        name: "dialga",
      },
      {
        id: 484,
        name: "palkia",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 486,
        name: "regigigas",
      },
      {
        id: 487,
        name: "giratina",
      },
      {
        id: 487,
        name: "giratina-origin",
      },
      {
        id: 488,
        name: "cresselia",
      },
      {
        id: 531,
        name: "audino",
      },
      {
        id: 531,
        name: "audino-mega",
      },
      {
        id: 557,
        name: "dwebble",
      },
      {
        id: 558,
        name: "crustle",
      },
      {
        id: 561,
        name: "sigilyph",
      },
      {
        id: 580,
        name: "ducklett",
      },
      {
        id: 581,
        name: "swanna",
      },
      {
        id: 618,
        name: "stunfisk",
      },
      {
        id: 638,
        name: "cobalion",
      },
      {
        id: 639,
        name: "terrakion",
      },
      {
        id: 640,
        name: "virizion",
      },
      {
        id: 641,
        name: "tornadus",
      },
      {
        id: 641,
        name: "tornadus-therian",
      },
      {
        id: 642,
        name: "thundurus",
      },
      {
        id: 642,
        name: "thundurus-therian",
      },
      {
        id: 643,
        name: "reshiram",
      },
      {
        id: 644,
        name: "zekrom",
      },
      {
        id: 645,
        name: "landorus",
      },
      {
        id: 645,
        name: "landorus-therian",
      },
      {
        id: 646,
        name: "kyurem",
      },
      {
        id: 646,
        name: "kyurem-white",
      },
      {
        id: 646,
        name: "kyurem-black",
      },
      {
        id: 688,
        name: "binacle",
      },
      {
        id: 689,
        name: "barbaracle",
      },
      {
        id: 694,
        name: "helioptile",
      },
      {
        id: 695,
        name: "heliolisk",
      },
      {
        id: 716,
        name: "xerneas",
      },
      {
        id: 717,
        name: "yveltal",
      },
    ],
  },
  kanto_lgpe: {
    name: "Kanto Pokédex",
    pokemon: [
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 3,
        name: "venusaur-mega",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 6,
        name: "charizard-mega-x",
      },
      {
        id: 6,
        name: "charizard-mega-y",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 9,
        name: "blastoise-mega",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 15,
        name: "beedrill-mega",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 18,
        name: "pidgeot-mega",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 19,
        name: "rattata-alola",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 20,
        name: "raticate-alola",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 26,
        name: "raichu-alola",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 27,
        name: "sandshrew-alola",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 28,
        name: "sandslash-alola",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 37,
        name: "vulpix-alola",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 38,
        name: "ninetales-alola",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 50,
        name: "diglett-alola",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 51,
        name: "dugtrio-alola",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 52,
        name: "meowth-alola",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 53,
        name: "persian-alola",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 65,
        name: "alakazam-mega",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 74,
        name: "geodude-alola",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 75,
        name: "graveler-alola",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 76,
        name: "golem-alola",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 80,
        name: "slowbro-mega",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 88,
        name: "grimer-alola",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 89,
        name: "muk-alola",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 94,
        name: "gengar-mega",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 103,
        name: "exeggutor-alola",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 105,
        name: "marowak-alola",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 115,
        name: "kangaskhan-mega",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 127,
        name: "pinsir-mega",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 130,
        name: "gyarados-mega",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 142,
        name: "aerodactyl-mega",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 150,
        name: "mewtwo-mega-x",
      },
      {
        id: 150,
        name: "mewtwo-mega-y",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 808,
        name: "meltan",
      },
      {
        id: 809,
        name: "melmetal",
      },
    ],
  },
  galar: {
    name: "Galar Pokédex",
    pokemon: [
      {
        id: 810,
        name: "grookey",
      },
      {
        id: 811,
        name: "thwackey",
      },
      {
        id: 812,
        name: "rillaboom",
      },
      {
        id: 813,
        name: "scorbunny",
      },
      {
        id: 814,
        name: "raboot",
      },
      {
        id: 815,
        name: "cinderace",
      },
      {
        id: 816,
        name: "sobble",
      },
      {
        id: 817,
        name: "drizzile",
      },
      {
        id: 818,
        name: "inteleon",
      },
      {
        id: 824,
        name: "blipbug",
      },
      {
        id: 825,
        name: "dottler",
      },
      {
        id: 826,
        name: "orbeetle",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 736,
        name: "grubbin",
      },
      {
        id: 737,
        name: "charjabug",
      },
      {
        id: 738,
        name: "vikavolt",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 821,
        name: "rookidee",
      },
      {
        id: 822,
        name: "corvisquire",
      },
      {
        id: 823,
        name: "corviknight",
      },
      {
        id: 819,
        name: "skwovet",
      },
      {
        id: 820,
        name: "greedent",
      },
      {
        id: 519,
        name: "pidove",
      },
      {
        id: 520,
        name: "tranquill",
      },
      {
        id: 521,
        name: "unfezant",
      },
      {
        id: 827,
        name: "nickit",
      },
      {
        id: 828,
        name: "thievul",
      },
      {
        id: 263,
        name: "zigzagoon-galar",
      },
      {
        id: 264,
        name: "linoone-galar",
      },
      {
        id: 862,
        name: "obstagoon",
      },
      {
        id: 831,
        name: "wooloo",
      },
      {
        id: 832,
        name: "dubwool",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 833,
        name: "chewtle",
      },
      {
        id: 834,
        name: "drednaw",
      },
      {
        id: 509,
        name: "purrloin",
      },
      {
        id: 510,
        name: "liepard",
      },
      {
        id: 835,
        name: "yamper",
      },
      {
        id: 836,
        name: "boltund",
      },
      {
        id: 659,
        name: "bunnelby",
      },
      {
        id: 660,
        name: "diggersby",
      },
      {
        id: 572,
        name: "minccino",
      },
      {
        id: 573,
        name: "cinccino",
      },
      {
        id: 761,
        name: "bounsweet",
      },
      {
        id: 762,
        name: "steenee",
      },
      {
        id: 763,
        name: "tsareena",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 406,
        name: "budew",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 407,
        name: "roserade",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 595,
        name: "joltik",
      },
      {
        id: 596,
        name: "galvantula",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 582,
        name: "vanillite",
      },
      {
        id: 583,
        name: "vanillish",
      },
      {
        id: 584,
        name: "vanilluxe",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 473,
        name: "mamoswine",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 749,
        name: "mudbray",
      },
      {
        id: 750,
        name: "mudsdale",
      },
      {
        id: 557,
        name: "dwebble",
      },
      {
        id: 558,
        name: "crustle",
      },
      {
        id: 622,
        name: "golett",
      },
      {
        id: 623,
        name: "golurk",
      },
      {
        id: 517,
        name: "munna",
      },
      {
        id: 518,
        name: "musharna",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 759,
        name: "stufful",
      },
      {
        id: 760,
        name: "bewear",
      },
      {
        id: 459,
        name: "snover",
      },
      {
        id: 460,
        name: "abomasnow",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 674,
        name: "pancham",
      },
      {
        id: 675,
        name: "pangoro",
      },
      {
        id: 599,
        name: "klink",
      },
      {
        id: 600,
        name: "klang",
      },
      {
        id: 601,
        name: "klinklang",
      },
      {
        id: 415,
        name: "combee",
      },
      {
        id: 416,
        name: "vespiquen",
      },
      {
        id: 436,
        name: "bronzor",
      },
      {
        id: 437,
        name: "bronzong",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 475,
        name: "gallade",
      },
      {
        id: 425,
        name: "drifloon",
      },
      {
        id: 426,
        name: "drifblim",
      },
      {
        id: 829,
        name: "gossifleur",
      },
      {
        id: 830,
        name: "eldegoss",
      },
      {
        id: 420,
        name: "cherubi",
      },
      {
        id: 421,
        name: "cherrim",
      },
      {
        id: 421,
        name: "cherrim-sunshine",
      },
      {
        id: 434,
        name: "stunky",
      },
      {
        id: 435,
        name: "skuntank",
      },
      {
        id: 535,
        name: "tympole",
      },
      {
        id: 536,
        name: "palpitoad",
      },
      {
        id: 537,
        name: "seismitoad",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 477,
        name: "dusknoir",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 550,
        name: "basculin",
      },
      {
        id: 550,
        name: "basculin-blue-striped",
      },
      {
        id: 746,
        name: "wishiwashi",
      },
      {
        id: 746,
        name: "wishiwashi-school",
      },
      {
        id: 771,
        name: "pyukumuku",
      },
      {
        id: 568,
        name: "trubbish",
      },
      {
        id: 569,
        name: "garbodor",
      },
      {
        id: 850,
        name: "sizzlipede",
      },
      {
        id: 851,
        name: "centiskorch",
      },
      {
        id: 837,
        name: "rolycoly",
      },
      {
        id: 838,
        name: "carkol",
      },
      {
        id: 839,
        name: "coalossal",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 529,
        name: "drilbur",
      },
      {
        id: 530,
        name: "excadrill",
      },
      {
        id: 524,
        name: "roggenrola",
      },
      {
        id: 525,
        name: "boldore",
      },
      {
        id: 526,
        name: "gigalith",
      },
      {
        id: 532,
        name: "timburr",
      },
      {
        id: 533,
        name: "gurdurr",
      },
      {
        id: 534,
        name: "conkeldurr",
      },
      {
        id: 527,
        name: "woobat",
      },
      {
        id: 528,
        name: "swoobat",
      },
      {
        id: 714,
        name: "noibat",
      },
      {
        id: 715,
        name: "noivern",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 846,
        name: "arrokuda",
      },
      {
        id: 847,
        name: "barraskewda",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 52,
        name: "meowth-galar",
      },
      {
        id: 863,
        name: "perrserker",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 868,
        name: "milcery",
      },
      {
        id: 869,
        name: "alcremie",
      },
      {
        id: 742,
        name: "cutiefly",
      },
      {
        id: 743,
        name: "ribombee",
      },
      {
        id: 597,
        name: "ferroseed",
      },
      {
        id: 598,
        name: "ferrothorn",
      },
      {
        id: 710,
        name: "pumpkaboo",
      },
      {
        id: 711,
        name: "gourgeist",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 700,
        name: "sylveon",
      },
      {
        id: 840,
        name: "applin",
      },
      {
        id: 841,
        name: "flapple",
      },
      {
        id: 842,
        name: "appletun",
      },
      {
        id: 677,
        name: "espurr",
      },
      {
        id: 678,
        name: "meowstic",
      },
      {
        id: 678,
        name: "meowstic-f",
      },
      {
        id: 684,
        name: "swirlix",
      },
      {
        id: 685,
        name: "slurpuff",
      },
      {
        id: 682,
        name: "spritzee",
      },
      {
        id: 683,
        name: "aromatisse",
      },
      {
        id: 751,
        name: "dewpider",
      },
      {
        id: 752,
        name: "araquanid",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 83,
        name: "farfetch’d-galar",
      },
      {
        id: 865,
        name: "sirfetch’d",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 453,
        name: "croagunk",
      },
      {
        id: 454,
        name: "toxicroak",
      },
      {
        id: 559,
        name: "scraggy",
      },
      {
        id: 560,
        name: "scrafty",
      },
      {
        id: 618,
        name: "stunfisk-galar",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 767,
        name: "wimpod",
      },
      {
        id: 768,
        name: "golisopod",
      },
      {
        id: 688,
        name: "binacle",
      },
      {
        id: 689,
        name: "barbaracle",
      },
      {
        id: 222,
        name: "corsola-galar",
      },
      {
        id: 864,
        name: "cursola",
      },
      {
        id: 859,
        name: "impidimp",
      },
      {
        id: 860,
        name: "morgrem",
      },
      {
        id: 861,
        name: "grimmsnarl",
      },
      {
        id: 856,
        name: "hatenna",
      },
      {
        id: 857,
        name: "hattrem",
      },
      {
        id: 858,
        name: "hatterene",
      },
      {
        id: 757,
        name: "salandit",
      },
      {
        id: 758,
        name: "salazzle",
      },
      {
        id: 624,
        name: "pawniard",
      },
      {
        id: 625,
        name: "bisharp",
      },
      {
        id: 538,
        name: "throh",
      },
      {
        id: 539,
        name: "sawk",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing-galar",
      },
      {
        id: 438,
        name: "bonsly",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 468,
        name: "togekiss",
      },
      {
        id: 446,
        name: "munchlax",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 546,
        name: "cottonee",
      },
      {
        id: 547,
        name: "whimsicott",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 464,
        name: "rhyperior",
      },
      {
        id: 574,
        name: "gothita",
      },
      {
        id: 575,
        name: "gothorita",
      },
      {
        id: 576,
        name: "gothitelle",
      },
      {
        id: 577,
        name: "solosis",
      },
      {
        id: 578,
        name: "duosion",
      },
      {
        id: 579,
        name: "reuniclus",
      },
      {
        id: 588,
        name: "karrablast",
      },
      {
        id: 589,
        name: "escavalier",
      },
      {
        id: 616,
        name: "shelmet",
      },
      {
        id: 617,
        name: "accelgor",
      },
      {
        id: 605,
        name: "elgyem",
      },
      {
        id: 606,
        name: "beheeyem",
      },
      {
        id: 613,
        name: "cubchoo",
      },
      {
        id: 614,
        name: "beartic",
      },
      {
        id: 627,
        name: "rufflet",
      },
      {
        id: 628,
        name: "braviary",
      },
      {
        id: 629,
        name: "vullaby",
      },
      {
        id: 630,
        name: "mandibuzz",
      },
      {
        id: 451,
        name: "skorupi",
      },
      {
        id: 452,
        name: "drapion",
      },
      {
        id: 607,
        name: "litwick",
      },
      {
        id: 608,
        name: "lampent",
      },
      {
        id: 609,
        name: "chandelure",
      },
      {
        id: 686,
        name: "inkay",
      },
      {
        id: 687,
        name: "malamar",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 461,
        name: "weavile",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 556,
        name: "maractus",
      },
      {
        id: 561,
        name: "sigilyph",
      },
      {
        id: 447,
        name: "riolu",
      },
      {
        id: 448,
        name: "lucario",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 778,
        name: "mimikyu",
      },
      {
        id: 878,
        name: "cufant",
      },
      {
        id: 879,
        name: "copperajah",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 592,
        name: "frillish",
      },
      {
        id: 593,
        name: "jellicent",
      },
      {
        id: 747,
        name: "mareanie",
      },
      {
        id: 748,
        name: "toxapex",
      },
      {
        id: 845,
        name: "cramorant",
      },
      {
        id: 848,
        name: "toxel",
      },
      {
        id: 849,
        name: "toxtricity",
      },
      {
        id: 849,
        name: "toxtricity-low-key",
      },
      {
        id: 843,
        name: "silicobra",
      },
      {
        id: 844,
        name: "sandaconda",
      },
      {
        id: 449,
        name: "hippopotas",
      },
      {
        id: 450,
        name: "hippowdon",
      },
      {
        id: 632,
        name: "durant",
      },
      {
        id: 631,
        name: "heatmor",
      },
      {
        id: 694,
        name: "helioptile",
      },
      {
        id: 695,
        name: "heliolisk",
      },
      {
        id: 701,
        name: "hawlucha",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 610,
        name: "axew",
      },
      {
        id: 611,
        name: "fraxure",
      },
      {
        id: 612,
        name: "haxorus",
      },
      {
        id: 562,
        name: "yamask",
      },
      {
        id: 562,
        name: "yamask-galar",
      },
      {
        id: 867,
        name: "runerigus",
      },
      {
        id: 563,
        name: "cofagrigus",
      },
      {
        id: 679,
        name: "honedge",
      },
      {
        id: 680,
        name: "doublade",
      },
      {
        id: 681,
        name: "aegislash",
      },
      {
        id: 681,
        name: "aegislash-blade",
      },
      {
        id: 77,
        name: "ponyta-galar",
      },
      {
        id: 78,
        name: "rapidash-galar",
      },
      {
        id: 854,
        name: "sinistea",
      },
      {
        id: 855,
        name: "polteageist",
      },
      {
        id: 876,
        name: "indeedee",
      },
      {
        id: 876,
        name: "indeedee-f",
      },
      {
        id: 708,
        name: "phantump",
      },
      {
        id: 709,
        name: "trevenant",
      },
      {
        id: 755,
        name: "morelull",
      },
      {
        id: 756,
        name: "shiinotic",
      },
      {
        id: 765,
        name: "oranguru",
      },
      {
        id: 766,
        name: "passimian",
      },
      {
        id: 877,
        name: "morpeko",
      },
      {
        id: 877,
        name: "morpeko-hangry",
      },
      {
        id: 870,
        name: "falinks",
      },
      {
        id: 780,
        name: "drampa",
      },
      {
        id: 776,
        name: "turtonator",
      },
      {
        id: 777,
        name: "togedemaru",
      },
      {
        id: 872,
        name: "snom",
      },
      {
        id: 873,
        name: "frosmoth",
      },
      {
        id: 852,
        name: "clobbopus",
      },
      {
        id: 853,
        name: "grapploct",
      },
      {
        id: 871,
        name: "pincurchin",
      },
      {
        id: 458,
        name: "mantyke",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 712,
        name: "bergmite",
      },
      {
        id: 713,
        name: "avalugg",
      },
      {
        id: 781,
        name: "dhelmise",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 439,
        name: "mime jr.",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 122,
        name: "mr. mime-galar",
      },
      {
        id: 866,
        name: "mr. rime",
      },
      {
        id: 554,
        name: "darumaka-galar",
      },
      {
        id: 555,
        name: "darmanitan-galar",
      },
      {
        id: 555,
        name: "darmanitan-galar-zen",
      },
      {
        id: 874,
        name: "stonjourner",
      },
      {
        id: 875,
        name: "eiscue",
      },
      {
        id: 875,
        name: "eiscue-noice",
      },
      {
        id: 884,
        name: "duraludon",
      },
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 880,
        name: "dracozolt",
      },
      {
        id: 881,
        name: "arctozolt",
      },
      {
        id: 882,
        name: "dracovish",
      },
      {
        id: 883,
        name: "arctovish",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 772,
        name: "type: null",
      },
      {
        id: 773,
        name: "silvally",
      },
      {
        id: 773,
        name: "silvally-fighting",
      },
      {
        id: 773,
        name: "silvally-flying",
      },
      {
        id: 773,
        name: "silvally-poison",
      },
      {
        id: 773,
        name: "silvally-ground",
      },
      {
        id: 773,
        name: "silvally-rock",
      },
      {
        id: 773,
        name: "silvally-bug",
      },
      {
        id: 773,
        name: "silvally-ghost",
      },
      {
        id: 773,
        name: "silvally-steel",
      },
      {
        id: 773,
        name: "silvally-fire",
      },
      {
        id: 773,
        name: "silvally-water",
      },
      {
        id: 773,
        name: "silvally-grass",
      },
      {
        id: 773,
        name: "silvally-electric",
      },
      {
        id: 773,
        name: "silvally-psychic",
      },
      {
        id: 773,
        name: "silvally-ice",
      },
      {
        id: 773,
        name: "silvally-dragon",
      },
      {
        id: 773,
        name: "silvally-dark",
      },
      {
        id: 773,
        name: "silvally-fairy",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 633,
        name: "deino",
      },
      {
        id: 634,
        name: "zweilous",
      },
      {
        id: 635,
        name: "hydreigon",
      },
      {
        id: 704,
        name: "goomy",
      },
      {
        id: 705,
        name: "sliggoo",
      },
      {
        id: 706,
        name: "goodra",
      },
      {
        id: 782,
        name: "jangmo-o",
      },
      {
        id: 783,
        name: "hakamo-o",
      },
      {
        id: 784,
        name: "kommo-o",
      },
      {
        id: 885,
        name: "dreepy",
      },
      {
        id: 886,
        name: "drakloak",
      },
      {
        id: 887,
        name: "dragapult",
      },
      {
        id: 888,
        name: "zacian",
      },
      {
        id: 888,
        name: "zacian-crowned",
      },
      {
        id: 889,
        name: "zamazenta",
      },
      {
        id: 889,
        name: "zamazenta-crowned",
      },
      {
        id: 890,
        name: "eternatus",
      },
      {
        id: 890,
        name: "eternatus-eternamax",
      },
    ],
  },
  galar_armor: {
    name: "Isle of Armor Pokédex",
    pokemon: [
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 79,
        name: "slowpoke-galar",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 80,
        name: "slowbro-galar",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 199,
        name: "slowking-galar",
      },
      {
        id: 427,
        name: "buneary",
      },
      {
        id: 428,
        name: "lopunny",
      },
      {
        id: 440,
        name: "happiny",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 753,
        name: "fomantis",
      },
      {
        id: 754,
        name: "lurantis",
      },
      {
        id: 661,
        name: "fletchling",
      },
      {
        id: 662,
        name: "fletchinder",
      },
      {
        id: 663,
        name: "talonflame",
      },
      {
        id: 403,
        name: "shinx",
      },
      {
        id: 404,
        name: "luxio",
      },
      {
        id: 405,
        name: "luxray",
      },
      {
        id: 707,
        name: "klefki",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 626,
        name: "bouffalant",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 463,
        name: "lickilicky",
      },
      {
        id: 621,
        name: "druddigon",
      },
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 543,
        name: "venipede",
      },
      {
        id: 544,
        name: "whirlipede",
      },
      {
        id: 545,
        name: "scolipede",
      },
      {
        id: 590,
        name: "foongus",
      },
      {
        id: 591,
        name: "amoonguss",
      },
      {
        id: 764,
        name: "comfey",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 465,
        name: "tangrowth",
      },
      {
        id: 26,
        name: "raichu-alola",
      },
      {
        id: 570,
        name: "zorua",
      },
      {
        id: 571,
        name: "zoroark",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 891,
        name: "kubfu",
      },
      {
        id: 892,
        name: "urshifu",
      },
      {
        id: 892,
        name: "urshifu-rapid-strike",
      },
      {
        id: 587,
        name: "emolga",
      },
      {
        id: 702,
        name: "dedenne",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 462,
        name: "magnezone",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 506,
        name: "lillipup",
      },
      {
        id: 507,
        name: "herdier",
      },
      {
        id: 508,
        name: "stoutland",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 769,
        name: "sandygast",
      },
      {
        id: 770,
        name: "palossand",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 744,
        name: "rockruff",
      },
      {
        id: 745,
        name: "lycanroc",
      },
      {
        id: 745,
        name: "lycanroc-midnight",
      },
      {
        id: 745,
        name: "lycanroc-dusk",
      },
      {
        id: 619,
        name: "mienfoo",
      },
      {
        id: 620,
        name: "mienshao",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 27,
        name: "sandshrew-alola",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 28,
        name: "sandslash-alola",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 105,
        name: "marowak-alola",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 551,
        name: "sandile",
      },
      {
        id: 552,
        name: "krokorok",
      },
      {
        id: 553,
        name: "krookodile",
      },
      {
        id: 636,
        name: "larvesta",
      },
      {
        id: 637,
        name: "volcarona",
      },
      {
        id: 690,
        name: "skrelp",
      },
      {
        id: 691,
        name: "dragalge",
      },
      {
        id: 692,
        name: "clauncher",
      },
      {
        id: 693,
        name: "clawitzer",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 548,
        name: "petilil",
      },
      {
        id: 549,
        name: "lilligant",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 103,
        name: "exeggutor-alola",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 893,
        name: "zarude",
      },
    ],
  },
  galar_crown: {
    name: "Crown Tundra Pokédex",
    pokemon: [
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 466,
        name: "electivire",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 467,
        name: "magmortar",
      },
      {
        id: 531,
        name: "audino",
      },
      {
        id: 615,
        name: "cryogonal",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 442,
        name: "spiritomb",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 696,
        name: "tyrunt",
      },
      {
        id: 697,
        name: "tyrantrum",
      },
      {
        id: 698,
        name: "amaura",
      },
      {
        id: 699,
        name: "aurorus",
      },
      {
        id: 554,
        name: "darumaka",
      },
      {
        id: 555,
        name: "darmanitan",
      },
      {
        id: 555,
        name: "darmanitan-zen",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 443,
        name: "gible",
      },
      {
        id: 444,
        name: "gabite",
      },
      {
        id: 445,
        name: "garchomp",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 703,
        name: "carbink",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 564,
        name: "tirtouga",
      },
      {
        id: 565,
        name: "carracosta",
      },
      {
        id: 566,
        name: "archen",
      },
      {
        id: 567,
        name: "archeops",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 894,
        name: "regieleki",
      },
      {
        id: 895,
        name: "regidrago",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 144,
        name: "articuno-galar",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 145,
        name: "zapdos-galar",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 146,
        name: "moltres-galar",
      },
      {
        id: 638,
        name: "cobalion",
      },
      {
        id: 639,
        name: "terrakion",
      },
      {
        id: 640,
        name: "virizion",
      },
      {
        id: 896,
        name: "glastrier",
      },
      {
        id: 897,
        name: "spectrier",
      },
      {
        id: 898,
        name: "calyrex",
      },
      {
        id: 898,
        name: "calyrex-ice",
      },
      {
        id: 898,
        name: "calyrex-shadow",
      },
    ],
  },
  galar_other: {
    name: "Other Pokémon",
    pokemon: [
      {
        id: 37,
        name: "vulpix-alola",
      },
      {
        id: 38,
        name: "ninetales-alola",
      },
      {
        id: 50,
        name: "diglett-alola",
      },
      {
        id: 51,
        name: "dugtrio-alola",
      },
      {
        id: 52,
        name: "meowth-alola",
      },
      {
        id: 53,
        name: "persian-alola",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 251,
        name: "celebi",
      },
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 422,
        name: "shellos",
      },
      {
        id: 423,
        name: "gastrodon",
      },
      {
        id: 480,
        name: "uxie",
      },
      {
        id: 481,
        name: "mesprit",
      },
      {
        id: 482,
        name: "azelf",
      },
      {
        id: 483,
        name: "dialga",
      },
      {
        id: 484,
        name: "palkia",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 486,
        name: "regigigas",
      },
      {
        id: 487,
        name: "giratina",
      },
      {
        id: 487,
        name: "giratina-origin",
      },
      {
        id: 488,
        name: "cresselia",
      },
      {
        id: 494,
        name: "victini",
      },
      {
        id: 618,
        name: "stunfisk",
      },
      {
        id: 641,
        name: "tornadus",
      },
      {
        id: 641,
        name: "tornadus-therian",
      },
      {
        id: 642,
        name: "thundurus",
      },
      {
        id: 642,
        name: "thundurus-therian",
      },
      {
        id: 643,
        name: "reshiram",
      },
      {
        id: 644,
        name: "zekrom",
      },
      {
        id: 645,
        name: "landorus",
      },
      {
        id: 645,
        name: "landorus-therian",
      },
      {
        id: 646,
        name: "kyurem",
      },
      {
        id: 646,
        name: "kyurem-white",
      },
      {
        id: 646,
        name: "kyurem-black",
      },
      {
        id: 647,
        name: "keldeo",
      },
      {
        id: 647,
        name: "keldeo-resolute",
      },
      {
        id: 649,
        name: "genesect",
      },
      {
        id: 716,
        name: "xerneas",
      },
      {
        id: 717,
        name: "yveltal",
      },
      {
        id: 718,
        name: "zygarde",
      },
      {
        id: 718,
        name: "zygarde-10%",
      },
      {
        id: 718,
        name: "zygarde-complete",
      },
      {
        id: 719,
        name: "diancie",
      },
      {
        id: 721,
        name: "volcanion",
      },
      {
        id: 722,
        name: "rowlet",
      },
      {
        id: 723,
        name: "dartrix",
      },
      {
        id: 724,
        name: "decidueye",
      },
      {
        id: 725,
        name: "litten",
      },
      {
        id: 726,
        name: "torracat",
      },
      {
        id: 727,
        name: "incineroar",
      },
      {
        id: 728,
        name: "popplio",
      },
      {
        id: 729,
        name: "brionne",
      },
      {
        id: 730,
        name: "primarina",
      },
      {
        id: 785,
        name: "tapu koko",
      },
      {
        id: 786,
        name: "tapu lele",
      },
      {
        id: 787,
        name: "tapu bulu",
      },
      {
        id: 788,
        name: "tapu fini",
      },
      {
        id: 789,
        name: "cosmog",
      },
      {
        id: 790,
        name: "cosmoem",
      },
      {
        id: 791,
        name: "solgaleo",
      },
      {
        id: 792,
        name: "lunala",
      },
      {
        id: 793,
        name: "nihilego",
      },
      {
        id: 794,
        name: "buzzwole",
      },
      {
        id: 795,
        name: "pheromosa",
      },
      {
        id: 796,
        name: "xurkitree",
      },
      {
        id: 797,
        name: "celesteela",
      },
      {
        id: 798,
        name: "kartana",
      },
      {
        id: 799,
        name: "guzzlord",
      },
      {
        id: 800,
        name: "necrozma",
      },
      {
        id: 800,
        name: "necrozma-dusk-mane",
      },
      {
        id: 800,
        name: "necrozma-dawn-wings",
      },
      {
        id: 801,
        name: "magearna",
      },
      {
        id: 801,
        name: "magearna-original",
      },
      {
        id: 802,
        name: "marshadow",
      },
      {
        id: 803,
        name: "poipole",
      },
      {
        id: 804,
        name: "naganadel",
      },
      {
        id: 805,
        name: "stakataka",
      },
      {
        id: 806,
        name: "blacephalon",
      },
      {
        id: 807,
        name: "zeraora",
      },
      {
        id: 808,
        name: "meltan",
      },
      {
        id: 809,
        name: "melmetal",
      },
    ],
  },
  hisui: {
    name: "Hisui Pokédex",
    pokemon: [
      {
        id: 722,
        name: "rowlet",
      },
      {
        id: 723,
        name: "dartrix",
      },
      {
        id: 724,
        name: "decidueye-hisui",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion-hisui",
      },
      {
        id: 501,
        name: "oshawott",
      },
      {
        id: 502,
        name: "dewott",
      },
      {
        id: 503,
        name: "samurott-hisui",
      },
      {
        id: 399,
        name: "bidoof",
      },
      {
        id: 400,
        name: "bibarel",
      },
      {
        id: 396,
        name: "starly",
      },
      {
        id: 397,
        name: "staravia",
      },
      {
        id: 398,
        name: "staraptor",
      },
      {
        id: 403,
        name: "shinx",
      },
      {
        id: 404,
        name: "luxio",
      },
      {
        id: 405,
        name: "luxray",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 700,
        name: "sylveon",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 425,
        name: "drifloon",
      },
      {
        id: 426,
        name: "drifblim",
      },
      {
        id: 401,
        name: "kricketot",
      },
      {
        id: 402,
        name: "kricketune",
      },
      {
        id: 418,
        name: "buizel",
      },
      {
        id: 419,
        name: "floatzel",
      },
      {
        id: 412,
        name: "burmy",
      },
      {
        id: 413,
        name: "wormadam",
      },
      {
        id: 413,
        name: "wormadam-sandy",
      },
      {
        id: 413,
        name: "wormadam-trash",
      },
      {
        id: 414,
        name: "mothim",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 899,
        name: "wyrdeer",
      },
      {
        id: 446,
        name: "munchlax",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 390,
        name: "chimchar",
      },
      {
        id: 391,
        name: "monferno",
      },
      {
        id: 392,
        name: "infernape",
      },
      {
        id: 427,
        name: "buneary",
      },
      {
        id: 428,
        name: "lopunny",
      },
      {
        id: 420,
        name: "cherubi",
      },
      {
        id: 421,
        name: "cherrim",
      },
      {
        id: 421,
        name: "cherrim-sunshine",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 415,
        name: "combee",
      },
      {
        id: 416,
        name: "vespiquen",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 900,
        name: "kleavor",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 439,
        name: "mime jr.",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 424,
        name: "ambipom",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 422,
        name: "shellos",
      },
      {
        id: 423,
        name: "gastrodon",
      },
      {
        id: 211,
        name: "qwilfish-hisui",
      },
      {
        id: 904,
        name: "overqwil",
      },
      {
        id: 440,
        name: "happiny",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 406,
        name: "budew",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 407,
        name: "roserade",
      },
      {
        id: 455,
        name: "carnivine",
      },
      {
        id: 548,
        name: "petilil",
      },
      {
        id: 549,
        name: "lilligant-hisui",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 465,
        name: "tangrowth",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 453,
        name: "croagunk",
      },
      {
        id: 454,
        name: "toxicroak",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 475,
        name: "gallade",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 469,
        name: "yanmega",
      },
      {
        id: 449,
        name: "hippopotas",
      },
      {
        id: 450,
        name: "hippowdon",
      },
      {
        id: 417,
        name: "pachirisu",
      },
      {
        id: 434,
        name: "stunky",
      },
      {
        id: 435,
        name: "skuntank",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 901,
        name: "ursaluna",
      },
      {
        id: 704,
        name: "goomy",
      },
      {
        id: 705,
        name: "sliggoo-hisui",
      },
      {
        id: 706,
        name: "goodra-hisui",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 464,
        name: "rhyperior",
      },
      {
        id: 438,
        name: "bonsly",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 463,
        name: "lickilicky",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 468,
        name: "togekiss",
      },
      {
        id: 387,
        name: "turtwig",
      },
      {
        id: 388,
        name: "grotle",
      },
      {
        id: 389,
        name: "torterra",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 442,
        name: "spiritomb",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 430,
        name: "honchkrow",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 451,
        name: "skorupi",
      },
      {
        id: 452,
        name: "drapion",
      },
      {
        id: 58,
        name: "growlithe-hisui",
      },
      {
        id: 59,
        name: "arcanine-hisui",
      },
      {
        id: 431,
        name: "glameow",
      },
      {
        id: 432,
        name: "purugly",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 441,
        name: "chatot",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 477,
        name: "dusknoir",
      },
      {
        id: 393,
        name: "piplup",
      },
      {
        id: 394,
        name: "prinplup",
      },
      {
        id: 395,
        name: "empoleon",
      },
      {
        id: 458,
        name: "mantyke",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 550,
        name: "basculin-white-striped",
      },
      {
        id: 902,
        name: "basculegion",
      },
      {
        id: 902,
        name: "basculegion-f",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 37,
        name: "vulpix-alola",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 38,
        name: "ninetales-alola",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 456,
        name: "finneon",
      },
      {
        id: 457,
        name: "lumineon",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 467,
        name: "magmortar",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 462,
        name: "magnezone",
      },
      {
        id: 436,
        name: "bronzor",
      },
      {
        id: 437,
        name: "bronzong",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 466,
        name: "electivire",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 472,
        name: "gliscor",
      },
      {
        id: 443,
        name: "gible",
      },
      {
        id: 444,
        name: "gabite",
      },
      {
        id: 445,
        name: "garchomp",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 476,
        name: "probopass",
      },
      {
        id: 100,
        name: "voltorb-hisui",
      },
      {
        id: 101,
        name: "electrode-hisui",
      },
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 433,
        name: "chingling",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 429,
        name: "mismagius",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 215,
        name: "sneasel-hisui",
      },
      {
        id: 903,
        name: "sneasler",
      },
      {
        id: 461,
        name: "weavile",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 408,
        name: "cranidos",
      },
      {
        id: 409,
        name: "rampardos",
      },
      {
        id: 410,
        name: "shieldon",
      },
      {
        id: 411,
        name: "bastiodon",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 473,
        name: "mamoswine",
      },
      {
        id: 712,
        name: "bergmite",
      },
      {
        id: 713,
        name: "avalugg-hisui",
      },
      {
        id: 459,
        name: "snover",
      },
      {
        id: 460,
        name: "abomasnow",
      },
      {
        id: 570,
        name: "zorua-hisui",
      },
      {
        id: 571,
        name: "zoroark-hisui",
      },
      {
        id: 627,
        name: "rufflet",
      },
      {
        id: 628,
        name: "braviary-hisui",
      },
      {
        id: 447,
        name: "riolu",
      },
      {
        id: 448,
        name: "lucario",
      },
      {
        id: 480,
        name: "uxie",
      },
      {
        id: 481,
        name: "mesprit",
      },
      {
        id: 482,
        name: "azelf",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 486,
        name: "regigigas",
      },
      {
        id: 488,
        name: "cresselia",
      },
      {
        id: 641,
        name: "tornadus",
      },
      {
        id: 641,
        name: "tornadus-therian",
      },
      {
        id: 642,
        name: "thundurus",
      },
      {
        id: 642,
        name: "thundurus-therian",
      },
      {
        id: 645,
        name: "landorus",
      },
      {
        id: 645,
        name: "landorus-therian",
      },
      {
        id: 905,
        name: "enamorus",
      },
      {
        id: 905,
        name: "enamorus-therian",
      },
      {
        id: 483,
        name: "dialga",
      },
      {
        id: 483,
        name: "dialga-origin",
      },
      {
        id: 484,
        name: "palkia",
      },
      {
        id: 484,
        name: "palkia-origin",
      },
      {
        id: 487,
        name: "giratina",
      },
      {
        id: 487,
        name: "giratina-origin",
      },
      {
        id: 489,
        name: "phione",
      },
      {
        id: 490,
        name: "manaphy",
      },
      {
        id: 493,
        name: "arceus",
      },
      {
        id: 493,
        name: "arceus-fighting",
      },
      {
        id: 493,
        name: "arceus-flying",
      },
      {
        id: 493,
        name: "arceus-poison",
      },
      {
        id: 493,
        name: "arceus-ground",
      },
      {
        id: 493,
        name: "arceus-rock",
      },
      {
        id: 493,
        name: "arceus-bug",
      },
      {
        id: 493,
        name: "arceus-ghost",
      },
      {
        id: 493,
        name: "arceus-steel",
      },
      {
        id: 493,
        name: "arceus-fire",
      },
      {
        id: 493,
        name: "arceus-water",
      },
      {
        id: 493,
        name: "arceus-grass",
      },
      {
        id: 493,
        name: "arceus-electric",
      },
      {
        id: 493,
        name: "arceus-psychic",
      },
      {
        id: 493,
        name: "arceus-ice",
      },
      {
        id: 493,
        name: "arceus-dragon",
      },
      {
        id: 493,
        name: "arceus-dark",
      },
      {
        id: 493,
        name: "arceus-fairy",
      },
      {
        id: 491,
        name: "darkrai",
      },
      {
        id: 492,
        name: "shaymin",
      },
      {
        id: 492,
        name: "shaymin-sky",
      },
    ],
  },
  hisui_home: {
    name: "Hisui Region",
    pokemon: [
      {
        id: 899,
        name: "wyrdeer",
      },
      {
        id: 900,
        name: "kleavor",
      },
      {
        id: 901,
        name: "ursaluna",
      },
      {
        id: 901,
        name: "ursaluna-bloodmoon",
      },
      {
        id: 902,
        name: "basculegion",
      },
      {
        id: 902,
        name: "basculegion-f",
      },
      {
        id: 903,
        name: "sneasler",
      },
      {
        id: 904,
        name: "overqwil",
      },
      {
        id: 905,
        name: "enamorus",
      },
      {
        id: 905,
        name: "enamorus-therian",
      },
    ],
  },
  kanto: {
    name: "Kanto Pokédex",
    pokemon: [
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 151,
        name: "mew",
      },
    ],
  },
  johto: {
    name: "New Pokédex",
    pokemon: [
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 251,
        name: "celebi",
      },
    ],
  },
  hoenn: {
    name: "Hoenn Pokédex",
    pokemon: [
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 351,
        name: "castform-sunny",
      },
      {
        id: 351,
        name: "castform-rainy",
      },
      {
        id: 351,
        name: "castform-snowy",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
      {
        id: 386,
        name: "deoxys-speed",
      },
    ],
  },
  national_rse: {
    name: "National Pokédex",
    pokemon: [
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 251,
        name: "celebi",
      },
    ],
  },
  national_frlg: {
    name: "National Pokédex",
    pokemon: [
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 251,
        name: "celebi",
      },
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 351,
        name: "castform-sunny",
      },
      {
        id: 351,
        name: "castform-rainy",
      },
      {
        id: 351,
        name: "castform-snowy",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys-attack",
      },
      {
        id: 386,
        name: "deoxys-defense",
      },
    ],
  },
  sinnoh: {
    name: "Sinnoh Pokédex",
    pokemon: [
      {
        id: 387,
        name: "turtwig",
      },
      {
        id: 388,
        name: "grotle",
      },
      {
        id: 389,
        name: "torterra",
      },
      {
        id: 390,
        name: "chimchar",
      },
      {
        id: 391,
        name: "monferno",
      },
      {
        id: 392,
        name: "infernape",
      },
      {
        id: 393,
        name: "piplup",
      },
      {
        id: 394,
        name: "prinplup",
      },
      {
        id: 395,
        name: "empoleon",
      },
      {
        id: 396,
        name: "starly",
      },
      {
        id: 397,
        name: "staravia",
      },
      {
        id: 398,
        name: "staraptor",
      },
      {
        id: 399,
        name: "bidoof",
      },
      {
        id: 400,
        name: "bibarel",
      },
      {
        id: 401,
        name: "kricketot",
      },
      {
        id: 402,
        name: "kricketune",
      },
      {
        id: 403,
        name: "shinx",
      },
      {
        id: 404,
        name: "luxio",
      },
      {
        id: 405,
        name: "luxray",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 406,
        name: "budew",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 407,
        name: "roserade",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 408,
        name: "cranidos",
      },
      {
        id: 409,
        name: "rampardos",
      },
      {
        id: 410,
        name: "shieldon",
      },
      {
        id: 411,
        name: "bastiodon",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 412,
        name: "burmy",
      },
      {
        id: 413,
        name: "wormadam",
      },
      {
        id: 413,
        name: "wormadam-sandy",
      },
      {
        id: 413,
        name: "wormadam-trash",
      },
      {
        id: 414,
        name: "mothim",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 415,
        name: "combee",
      },
      {
        id: 416,
        name: "vespiquen",
      },
      {
        id: 417,
        name: "pachirisu",
      },
      {
        id: 418,
        name: "buizel",
      },
      {
        id: 419,
        name: "floatzel",
      },
      {
        id: 420,
        name: "cherubi",
      },
      {
        id: 421,
        name: "cherrim",
      },
      {
        id: 421,
        name: "cherrim-sunshine",
      },
      {
        id: 422,
        name: "shellos",
      },
      {
        id: 423,
        name: "gastrodon",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 424,
        name: "ambipom",
      },
      {
        id: 425,
        name: "drifloon",
      },
      {
        id: 426,
        name: "drifblim",
      },
      {
        id: 427,
        name: "buneary",
      },
      {
        id: 428,
        name: "lopunny",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 429,
        name: "mismagius",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 430,
        name: "honchkrow",
      },
      {
        id: 431,
        name: "glameow",
      },
      {
        id: 432,
        name: "purugly",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 433,
        name: "chingling",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 434,
        name: "stunky",
      },
      {
        id: 435,
        name: "skuntank",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 436,
        name: "bronzor",
      },
      {
        id: 437,
        name: "bronzong",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 438,
        name: "bonsly",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 439,
        name: "mime jr.",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 440,
        name: "happiny",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 441,
        name: "chatot",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 442,
        name: "spiritomb",
      },
      {
        id: 443,
        name: "gible",
      },
      {
        id: 444,
        name: "gabite",
      },
      {
        id: 445,
        name: "garchomp",
      },
      {
        id: 446,
        name: "munchlax",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 447,
        name: "riolu",
      },
      {
        id: 448,
        name: "lucario",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 449,
        name: "hippopotas",
      },
      {
        id: 450,
        name: "hippowdon",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 451,
        name: "skorupi",
      },
      {
        id: 452,
        name: "drapion",
      },
      {
        id: 453,
        name: "croagunk",
      },
      {
        id: 454,
        name: "toxicroak",
      },
      {
        id: 455,
        name: "carnivine",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 456,
        name: "finneon",
      },
      {
        id: 457,
        name: "lumineon",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 458,
        name: "mantyke",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 459,
        name: "snover",
      },
      {
        id: 460,
        name: "abomasnow",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 461,
        name: "weavile",
      },
      {
        id: 480,
        name: "uxie",
      },
      {
        id: 481,
        name: "mesprit",
      },
      {
        id: 482,
        name: "azelf",
      },
      {
        id: 483,
        name: "dialga",
      },
      {
        id: 484,
        name: "palkia",
      },
      {
        id: 490,
        name: "manaphy",
      },
    ],
  },
  sinnoh_pt: {
    name: "Platinum Pokédex Expansion",
    pokemon: [
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 472,
        name: "gliscor",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 476,
        name: "probopass",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 475,
        name: "gallade",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 463,
        name: "lickilicky",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 468,
        name: "togekiss",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 462,
        name: "magnezone",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 465,
        name: "tangrowth",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 469,
        name: "yanmega",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 464,
        name: "rhyperior",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 477,
        name: "dusknoir",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 466,
        name: "electivire",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 467,
        name: "magmortar",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 473,
        name: "mamoswine",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 487,
        name: "giratina",
      },
      {
        id: 487,
        name: "giratina-origin",
      },
    ],
  },
  national_dppt: {
    name: "National Pokédex",
    pokemon: [
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 251,
        name: "celebi",
      },
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 351,
        name: "castform-sunny",
      },
      {
        id: 351,
        name: "castform-rainy",
      },
      {
        id: 351,
        name: "castform-snowy",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
      {
        id: 386,
        name: "deoxys-attack",
      },
      {
        id: 386,
        name: "deoxys-defense",
      },
      {
        id: 386,
        name: "deoxys-speed",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 486,
        name: "regigigas",
      },
      {
        id: 488,
        name: "cresselia",
      },
      {
        id: 489,
        name: "phione",
      },
      {
        id: 491,
        name: "darkrai",
      },
      {
        id: 492,
        name: "shaymin",
      },
      {
        id: 492,
        name: "shaymin-sky",
      },
      {
        id: 493,
        name: "arceus",
      },
      {
        id: 493,
        name: "arceus-fighting",
      },
      {
        id: 493,
        name: "arceus-flying",
      },
      {
        id: 493,
        name: "arceus-poison",
      },
      {
        id: 493,
        name: "arceus-ground",
      },
      {
        id: 493,
        name: "arceus-rock",
      },
      {
        id: 493,
        name: "arceus-bug",
      },
      {
        id: 493,
        name: "arceus-ghost",
      },
      {
        id: 493,
        name: "arceus-steel",
      },
      {
        id: 493,
        name: "arceus-fire",
      },
      {
        id: 493,
        name: "arceus-water",
      },
      {
        id: 493,
        name: "arceus-grass",
      },
      {
        id: 493,
        name: "arceus-electric",
      },
      {
        id: 493,
        name: "arceus-psychic",
      },
      {
        id: 493,
        name: "arceus-ice",
      },
      {
        id: 493,
        name: "arceus-dragon",
      },
      {
        id: 493,
        name: "arceus-dark",
      },
    ],
  },
  johto_hgss: {
    name: "Johto Pokédex",
    pokemon: [
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 469,
        name: "yanmega",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 424,
        name: "ambipom",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 463,
        name: "lickilicky",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 465,
        name: "tangrowth",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 473,
        name: "mamoswine",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 251,
        name: "celebi",
      },
    ],
  },
  national_hgss: {
    name: "National Pokédex",
    pokemon: [
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 351,
        name: "castform-sunny",
      },
      {
        id: 351,
        name: "castform-rainy",
      },
      {
        id: 351,
        name: "castform-snowy",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
      {
        id: 386,
        name: "deoxys-attack",
      },
      {
        id: 386,
        name: "deoxys-defense",
      },
      {
        id: 386,
        name: "deoxys-speed",
      },
      {
        id: 387,
        name: "turtwig",
      },
      {
        id: 388,
        name: "grotle",
      },
      {
        id: 389,
        name: "torterra",
      },
      {
        id: 390,
        name: "chimchar",
      },
      {
        id: 391,
        name: "monferno",
      },
      {
        id: 392,
        name: "infernape",
      },
      {
        id: 393,
        name: "piplup",
      },
      {
        id: 394,
        name: "prinplup",
      },
      {
        id: 395,
        name: "empoleon",
      },
      {
        id: 396,
        name: "starly",
      },
      {
        id: 397,
        name: "staravia",
      },
      {
        id: 398,
        name: "staraptor",
      },
      {
        id: 399,
        name: "bidoof",
      },
      {
        id: 400,
        name: "bibarel",
      },
      {
        id: 401,
        name: "kricketot",
      },
      {
        id: 402,
        name: "kricketune",
      },
      {
        id: 403,
        name: "shinx",
      },
      {
        id: 404,
        name: "luxio",
      },
      {
        id: 405,
        name: "luxray",
      },
      {
        id: 406,
        name: "budew",
      },
      {
        id: 407,
        name: "roserade",
      },
      {
        id: 408,
        name: "cranidos",
      },
      {
        id: 409,
        name: "rampardos",
      },
      {
        id: 410,
        name: "shieldon",
      },
      {
        id: 411,
        name: "bastiodon",
      },
      {
        id: 412,
        name: "burmy",
      },
      {
        id: 413,
        name: "wormadam",
      },
      {
        id: 413,
        name: "wormadam-sandy",
      },
      {
        id: 413,
        name: "wormadam-trash",
      },
      {
        id: 414,
        name: "mothim",
      },
      {
        id: 415,
        name: "combee",
      },
      {
        id: 416,
        name: "vespiquen",
      },
      {
        id: 417,
        name: "pachirisu",
      },
      {
        id: 418,
        name: "buizel",
      },
      {
        id: 419,
        name: "floatzel",
      },
      {
        id: 420,
        name: "cherubi",
      },
      {
        id: 421,
        name: "cherrim",
      },
      {
        id: 421,
        name: "cherrim-sunshine",
      },
      {
        id: 422,
        name: "shellos",
      },
      {
        id: 423,
        name: "gastrodon",
      },
      {
        id: 425,
        name: "drifloon",
      },
      {
        id: 426,
        name: "drifblim",
      },
      {
        id: 427,
        name: "buneary",
      },
      {
        id: 428,
        name: "lopunny",
      },
      {
        id: 429,
        name: "mismagius",
      },
      {
        id: 430,
        name: "honchkrow",
      },
      {
        id: 431,
        name: "glameow",
      },
      {
        id: 432,
        name: "purugly",
      },
      {
        id: 433,
        name: "chingling",
      },
      {
        id: 434,
        name: "stunky",
      },
      {
        id: 435,
        name: "skuntank",
      },
      {
        id: 436,
        name: "bronzor",
      },
      {
        id: 437,
        name: "bronzong",
      },
      {
        id: 438,
        name: "bonsly",
      },
      {
        id: 439,
        name: "mime jr.",
      },
      {
        id: 440,
        name: "happiny",
      },
      {
        id: 441,
        name: "chatot",
      },
      {
        id: 442,
        name: "spiritomb",
      },
      {
        id: 443,
        name: "gible",
      },
      {
        id: 444,
        name: "gabite",
      },
      {
        id: 445,
        name: "garchomp",
      },
      {
        id: 446,
        name: "munchlax",
      },
      {
        id: 447,
        name: "riolu",
      },
      {
        id: 448,
        name: "lucario",
      },
      {
        id: 449,
        name: "hippopotas",
      },
      {
        id: 450,
        name: "hippowdon",
      },
      {
        id: 451,
        name: "skorupi",
      },
      {
        id: 452,
        name: "drapion",
      },
      {
        id: 453,
        name: "croagunk",
      },
      {
        id: 454,
        name: "toxicroak",
      },
      {
        id: 455,
        name: "carnivine",
      },
      {
        id: 456,
        name: "finneon",
      },
      {
        id: 457,
        name: "lumineon",
      },
      {
        id: 458,
        name: "mantyke",
      },
      {
        id: 459,
        name: "snover",
      },
      {
        id: 460,
        name: "abomasnow",
      },
      {
        id: 461,
        name: "weavile",
      },
      {
        id: 462,
        name: "magnezone",
      },
      {
        id: 464,
        name: "rhyperior",
      },
      {
        id: 466,
        name: "electivire",
      },
      {
        id: 467,
        name: "magmortar",
      },
      {
        id: 468,
        name: "togekiss",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 472,
        name: "gliscor",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 475,
        name: "gallade",
      },
      {
        id: 476,
        name: "probopass",
      },
      {
        id: 477,
        name: "dusknoir",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 480,
        name: "uxie",
      },
      {
        id: 481,
        name: "mesprit",
      },
      {
        id: 482,
        name: "azelf",
      },
      {
        id: 483,
        name: "dialga",
      },
      {
        id: 484,
        name: "palkia",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 486,
        name: "regigigas",
      },
      {
        id: 487,
        name: "giratina",
      },
      {
        id: 487,
        name: "giratina-origin",
      },
      {
        id: 488,
        name: "cresselia",
      },
      {
        id: 489,
        name: "phione",
      },
      {
        id: 490,
        name: "manaphy",
      },
      {
        id: 491,
        name: "darkrai",
      },
      {
        id: 492,
        name: "shaymin",
      },
      {
        id: 492,
        name: "shaymin-sky",
      },
      {
        id: 493,
        name: "arceus",
      },
      {
        id: 493,
        name: "arceus-fighting",
      },
      {
        id: 493,
        name: "arceus-flying",
      },
      {
        id: 493,
        name: "arceus-poison",
      },
      {
        id: 493,
        name: "arceus-ground",
      },
      {
        id: 493,
        name: "arceus-rock",
      },
      {
        id: 493,
        name: "arceus-bug",
      },
      {
        id: 493,
        name: "arceus-ghost",
      },
      {
        id: 493,
        name: "arceus-steel",
      },
      {
        id: 493,
        name: "arceus-fire",
      },
      {
        id: 493,
        name: "arceus-water",
      },
      {
        id: 493,
        name: "arceus-grass",
      },
      {
        id: 493,
        name: "arceus-electric",
      },
      {
        id: 493,
        name: "arceus-psychic",
      },
      {
        id: 493,
        name: "arceus-ice",
      },
      {
        id: 493,
        name: "arceus-dragon",
      },
      {
        id: 493,
        name: "arceus-dark",
      },
    ],
  },
  unova: {
    name: "Unova Pokédex",
    pokemon: [
      {
        id: 494,
        name: "victini",
      },
      {
        id: 495,
        name: "snivy",
      },
      {
        id: 496,
        name: "servine",
      },
      {
        id: 497,
        name: "serperior",
      },
      {
        id: 498,
        name: "tepig",
      },
      {
        id: 499,
        name: "pignite",
      },
      {
        id: 500,
        name: "emboar",
      },
      {
        id: 501,
        name: "oshawott",
      },
      {
        id: 502,
        name: "dewott",
      },
      {
        id: 503,
        name: "samurott",
      },
      {
        id: 504,
        name: "patrat",
      },
      {
        id: 505,
        name: "watchog",
      },
      {
        id: 506,
        name: "lillipup",
      },
      {
        id: 507,
        name: "herdier",
      },
      {
        id: 508,
        name: "stoutland",
      },
      {
        id: 509,
        name: "purrloin",
      },
      {
        id: 510,
        name: "liepard",
      },
      {
        id: 511,
        name: "pansage",
      },
      {
        id: 512,
        name: "simisage",
      },
      {
        id: 513,
        name: "pansear",
      },
      {
        id: 514,
        name: "simisear",
      },
      {
        id: 515,
        name: "panpour",
      },
      {
        id: 516,
        name: "simipour",
      },
      {
        id: 517,
        name: "munna",
      },
      {
        id: 518,
        name: "musharna",
      },
      {
        id: 519,
        name: "pidove",
      },
      {
        id: 520,
        name: "tranquill",
      },
      {
        id: 521,
        name: "unfezant",
      },
      {
        id: 522,
        name: "blitzle",
      },
      {
        id: 523,
        name: "zebstrika",
      },
      {
        id: 524,
        name: "roggenrola",
      },
      {
        id: 525,
        name: "boldore",
      },
      {
        id: 526,
        name: "gigalith",
      },
      {
        id: 527,
        name: "woobat",
      },
      {
        id: 528,
        name: "swoobat",
      },
      {
        id: 529,
        name: "drilbur",
      },
      {
        id: 530,
        name: "excadrill",
      },
      {
        id: 531,
        name: "audino",
      },
      {
        id: 532,
        name: "timburr",
      },
      {
        id: 533,
        name: "gurdurr",
      },
      {
        id: 534,
        name: "conkeldurr",
      },
      {
        id: 535,
        name: "tympole",
      },
      {
        id: 536,
        name: "palpitoad",
      },
      {
        id: 537,
        name: "seismitoad",
      },
      {
        id: 538,
        name: "throh",
      },
      {
        id: 539,
        name: "sawk",
      },
      {
        id: 540,
        name: "sewaddle",
      },
      {
        id: 541,
        name: "swadloon",
      },
      {
        id: 542,
        name: "leavanny",
      },
      {
        id: 543,
        name: "venipede",
      },
      {
        id: 544,
        name: "whirlipede",
      },
      {
        id: 545,
        name: "scolipede",
      },
      {
        id: 546,
        name: "cottonee",
      },
      {
        id: 547,
        name: "whimsicott",
      },
      {
        id: 548,
        name: "petilil",
      },
      {
        id: 549,
        name: "lilligant",
      },
      {
        id: 550,
        name: "basculin",
      },
      {
        id: 550,
        name: "basculin-blue-striped",
      },
      {
        id: 551,
        name: "sandile",
      },
      {
        id: 552,
        name: "krokorok",
      },
      {
        id: 553,
        name: "krookodile",
      },
      {
        id: 554,
        name: "darumaka",
      },
      {
        id: 555,
        name: "darmanitan",
      },
      {
        id: 555,
        name: "darmanitan-zen",
      },
      {
        id: 556,
        name: "maractus",
      },
      {
        id: 557,
        name: "dwebble",
      },
      {
        id: 558,
        name: "crustle",
      },
      {
        id: 559,
        name: "scraggy",
      },
      {
        id: 560,
        name: "scrafty",
      },
      {
        id: 561,
        name: "sigilyph",
      },
      {
        id: 562,
        name: "yamask",
      },
      {
        id: 563,
        name: "cofagrigus",
      },
      {
        id: 564,
        name: "tirtouga",
      },
      {
        id: 565,
        name: "carracosta",
      },
      {
        id: 566,
        name: "archen",
      },
      {
        id: 567,
        name: "archeops",
      },
      {
        id: 568,
        name: "trubbish",
      },
      {
        id: 569,
        name: "garbodor",
      },
      {
        id: 570,
        name: "zorua",
      },
      {
        id: 571,
        name: "zoroark",
      },
      {
        id: 572,
        name: "minccino",
      },
      {
        id: 573,
        name: "cinccino",
      },
      {
        id: 574,
        name: "gothita",
      },
      {
        id: 575,
        name: "gothorita",
      },
      {
        id: 576,
        name: "gothitelle",
      },
      {
        id: 577,
        name: "solosis",
      },
      {
        id: 578,
        name: "duosion",
      },
      {
        id: 579,
        name: "reuniclus",
      },
      {
        id: 580,
        name: "ducklett",
      },
      {
        id: 581,
        name: "swanna",
      },
      {
        id: 582,
        name: "vanillite",
      },
      {
        id: 583,
        name: "vanillish",
      },
      {
        id: 584,
        name: "vanilluxe",
      },
      {
        id: 585,
        name: "deerling",
      },
      {
        id: 586,
        name: "sawsbuck",
      },
      {
        id: 587,
        name: "emolga",
      },
      {
        id: 588,
        name: "karrablast",
      },
      {
        id: 589,
        name: "escavalier",
      },
      {
        id: 590,
        name: "foongus",
      },
      {
        id: 591,
        name: "amoonguss",
      },
      {
        id: 592,
        name: "frillish",
      },
      {
        id: 593,
        name: "jellicent",
      },
      {
        id: 594,
        name: "alomomola",
      },
      {
        id: 595,
        name: "joltik",
      },
      {
        id: 596,
        name: "galvantula",
      },
      {
        id: 597,
        name: "ferroseed",
      },
      {
        id: 598,
        name: "ferrothorn",
      },
      {
        id: 599,
        name: "klink",
      },
      {
        id: 600,
        name: "klang",
      },
      {
        id: 601,
        name: "klinklang",
      },
      {
        id: 602,
        name: "tynamo",
      },
      {
        id: 603,
        name: "eelektrik",
      },
      {
        id: 604,
        name: "eelektross",
      },
      {
        id: 605,
        name: "elgyem",
      },
      {
        id: 606,
        name: "beheeyem",
      },
      {
        id: 607,
        name: "litwick",
      },
      {
        id: 608,
        name: "lampent",
      },
      {
        id: 609,
        name: "chandelure",
      },
      {
        id: 610,
        name: "axew",
      },
      {
        id: 611,
        name: "fraxure",
      },
      {
        id: 612,
        name: "haxorus",
      },
      {
        id: 613,
        name: "cubchoo",
      },
      {
        id: 614,
        name: "beartic",
      },
      {
        id: 615,
        name: "cryogonal",
      },
      {
        id: 616,
        name: "shelmet",
      },
      {
        id: 617,
        name: "accelgor",
      },
      {
        id: 618,
        name: "stunfisk",
      },
      {
        id: 619,
        name: "mienfoo",
      },
      {
        id: 620,
        name: "mienshao",
      },
      {
        id: 621,
        name: "druddigon",
      },
      {
        id: 622,
        name: "golett",
      },
      {
        id: 623,
        name: "golurk",
      },
      {
        id: 624,
        name: "pawniard",
      },
      {
        id: 625,
        name: "bisharp",
      },
      {
        id: 626,
        name: "bouffalant",
      },
      {
        id: 627,
        name: "rufflet",
      },
      {
        id: 628,
        name: "braviary",
      },
      {
        id: 629,
        name: "vullaby",
      },
      {
        id: 630,
        name: "mandibuzz",
      },
      {
        id: 631,
        name: "heatmor",
      },
      {
        id: 632,
        name: "durant",
      },
      {
        id: 633,
        name: "deino",
      },
      {
        id: 634,
        name: "zweilous",
      },
      {
        id: 635,
        name: "hydreigon",
      },
      {
        id: 636,
        name: "larvesta",
      },
      {
        id: 637,
        name: "volcarona",
      },
      {
        id: 638,
        name: "cobalion",
      },
      {
        id: 639,
        name: "terrakion",
      },
      {
        id: 640,
        name: "virizion",
      },
      {
        id: 641,
        name: "tornadus",
      },
      {
        id: 642,
        name: "thundurus",
      },
      {
        id: 643,
        name: "reshiram",
      },
      {
        id: 644,
        name: "zekrom",
      },
      {
        id: 645,
        name: "landorus",
      },
      {
        id: 646,
        name: "kyurem",
      },
      {
        id: 647,
        name: "keldeo",
      },
      {
        id: 648,
        name: "meloetta",
      },
      {
        id: 648,
        name: "meloetta-pirouette",
      },
      {
        id: 649,
        name: "genesect",
      },
    ],
  },
  national_bw: {
    name: "National Pokédex",
    pokemon: [
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 251,
        name: "celebi",
      },
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 351,
        name: "castform-sunny",
      },
      {
        id: 351,
        name: "castform-rainy",
      },
      {
        id: 351,
        name: "castform-snowy",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
      {
        id: 386,
        name: "deoxys-attack",
      },
      {
        id: 386,
        name: "deoxys-defense",
      },
      {
        id: 386,
        name: "deoxys-speed",
      },
      {
        id: 387,
        name: "turtwig",
      },
      {
        id: 388,
        name: "grotle",
      },
      {
        id: 389,
        name: "torterra",
      },
      {
        id: 390,
        name: "chimchar",
      },
      {
        id: 391,
        name: "monferno",
      },
      {
        id: 392,
        name: "infernape",
      },
      {
        id: 393,
        name: "piplup",
      },
      {
        id: 394,
        name: "prinplup",
      },
      {
        id: 395,
        name: "empoleon",
      },
      {
        id: 399,
        name: "bidoof",
      },
      {
        id: 400,
        name: "bibarel",
      },
      {
        id: 401,
        name: "kricketot",
      },
      {
        id: 402,
        name: "kricketune",
      },
      {
        id: 408,
        name: "cranidos",
      },
      {
        id: 409,
        name: "rampardos",
      },
      {
        id: 410,
        name: "shieldon",
      },
      {
        id: 411,
        name: "bastiodon",
      },
      {
        id: 412,
        name: "burmy",
      },
      {
        id: 413,
        name: "wormadam",
      },
      {
        id: 413,
        name: "wormadam-sandy",
      },
      {
        id: 413,
        name: "wormadam-trash",
      },
      {
        id: 414,
        name: "mothim",
      },
      {
        id: 415,
        name: "combee",
      },
      {
        id: 416,
        name: "vespiquen",
      },
      {
        id: 417,
        name: "pachirisu",
      },
      {
        id: 418,
        name: "buizel",
      },
      {
        id: 419,
        name: "floatzel",
      },
      {
        id: 420,
        name: "cherubi",
      },
      {
        id: 421,
        name: "cherrim",
      },
      {
        id: 421,
        name: "cherrim-sunshine",
      },
      {
        id: 422,
        name: "shellos",
      },
      {
        id: 423,
        name: "gastrodon",
      },
      {
        id: 424,
        name: "ambipom",
      },
      {
        id: 425,
        name: "drifloon",
      },
      {
        id: 426,
        name: "drifblim",
      },
      {
        id: 427,
        name: "buneary",
      },
      {
        id: 428,
        name: "lopunny",
      },
      {
        id: 429,
        name: "mismagius",
      },
      {
        id: 430,
        name: "honchkrow",
      },
      {
        id: 431,
        name: "glameow",
      },
      {
        id: 432,
        name: "purugly",
      },
      {
        id: 433,
        name: "chingling",
      },
      {
        id: 434,
        name: "stunky",
      },
      {
        id: 435,
        name: "skuntank",
      },
      {
        id: 436,
        name: "bronzor",
      },
      {
        id: 437,
        name: "bronzong",
      },
      {
        id: 438,
        name: "bonsly",
      },
      {
        id: 439,
        name: "mime jr.",
      },
      {
        id: 441,
        name: "chatot",
      },
      {
        id: 442,
        name: "spiritomb",
      },
      {
        id: 443,
        name: "gible",
      },
      {
        id: 444,
        name: "gabite",
      },
      {
        id: 445,
        name: "garchomp",
      },
      {
        id: 446,
        name: "munchlax",
      },
      {
        id: 447,
        name: "riolu",
      },
      {
        id: 448,
        name: "lucario",
      },
      {
        id: 449,
        name: "hippopotas",
      },
      {
        id: 450,
        name: "hippowdon",
      },
      {
        id: 451,
        name: "skorupi",
      },
      {
        id: 452,
        name: "drapion",
      },
      {
        id: 453,
        name: "croagunk",
      },
      {
        id: 454,
        name: "toxicroak",
      },
      {
        id: 455,
        name: "carnivine",
      },
      {
        id: 456,
        name: "finneon",
      },
      {
        id: 457,
        name: "lumineon",
      },
      {
        id: 458,
        name: "mantyke",
      },
      {
        id: 459,
        name: "snover",
      },
      {
        id: 460,
        name: "abomasnow",
      },
      {
        id: 461,
        name: "weavile",
      },
      {
        id: 463,
        name: "lickilicky",
      },
      {
        id: 465,
        name: "tangrowth",
      },
      {
        id: 469,
        name: "yanmega",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 472,
        name: "gliscor",
      },
      {
        id: 473,
        name: "mamoswine",
      },
      {
        id: 476,
        name: "probopass",
      },
      {
        id: 477,
        name: "dusknoir",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 480,
        name: "uxie",
      },
      {
        id: 481,
        name: "mesprit",
      },
      {
        id: 482,
        name: "azelf",
      },
      {
        id: 483,
        name: "dialga",
      },
      {
        id: 484,
        name: "palkia",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 486,
        name: "regigigas",
      },
      {
        id: 487,
        name: "giratina",
      },
      {
        id: 487,
        name: "giratina-origin",
      },
      {
        id: 488,
        name: "cresselia",
      },
      {
        id: 489,
        name: "phione",
      },
      {
        id: 490,
        name: "manaphy",
      },
      {
        id: 491,
        name: "darkrai",
      },
      {
        id: 492,
        name: "shaymin",
      },
      {
        id: 492,
        name: "shaymin-sky",
      },
      {
        id: 493,
        name: "arceus",
      },
      {
        id: 493,
        name: "arceus-fighting",
      },
      {
        id: 493,
        name: "arceus-flying",
      },
      {
        id: 493,
        name: "arceus-poison",
      },
      {
        id: 493,
        name: "arceus-ground",
      },
      {
        id: 493,
        name: "arceus-rock",
      },
      {
        id: 493,
        name: "arceus-bug",
      },
      {
        id: 493,
        name: "arceus-ghost",
      },
      {
        id: 493,
        name: "arceus-steel",
      },
      {
        id: 493,
        name: "arceus-fire",
      },
      {
        id: 493,
        name: "arceus-water",
      },
      {
        id: 493,
        name: "arceus-grass",
      },
      {
        id: 493,
        name: "arceus-electric",
      },
      {
        id: 493,
        name: "arceus-psychic",
      },
      {
        id: 493,
        name: "arceus-ice",
      },
      {
        id: 493,
        name: "arceus-dragon",
      },
      {
        id: 493,
        name: "arceus-dark",
      },
    ],
  },
  unova_b2w2: {
    name: "New Unova Pokédex",
    pokemon: [
      {
        id: 494,
        name: "victini",
      },
      {
        id: 495,
        name: "snivy",
      },
      {
        id: 496,
        name: "servine",
      },
      {
        id: 497,
        name: "serperior",
      },
      {
        id: 498,
        name: "tepig",
      },
      {
        id: 499,
        name: "pignite",
      },
      {
        id: 500,
        name: "emboar",
      },
      {
        id: 501,
        name: "oshawott",
      },
      {
        id: 502,
        name: "dewott",
      },
      {
        id: 503,
        name: "samurott",
      },
      {
        id: 504,
        name: "patrat",
      },
      {
        id: 505,
        name: "watchog",
      },
      {
        id: 509,
        name: "purrloin",
      },
      {
        id: 510,
        name: "liepard",
      },
      {
        id: 519,
        name: "pidove",
      },
      {
        id: 520,
        name: "tranquill",
      },
      {
        id: 521,
        name: "unfezant",
      },
      {
        id: 540,
        name: "sewaddle",
      },
      {
        id: 541,
        name: "swadloon",
      },
      {
        id: 542,
        name: "leavanny",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 506,
        name: "lillipup",
      },
      {
        id: 507,
        name: "herdier",
      },
      {
        id: 508,
        name: "stoutland",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 447,
        name: "riolu",
      },
      {
        id: 448,
        name: "lucario",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 531,
        name: "audino",
      },
      {
        id: 511,
        name: "pansage",
      },
      {
        id: 512,
        name: "simisage",
      },
      {
        id: 513,
        name: "pansear",
      },
      {
        id: 514,
        name: "simisear",
      },
      {
        id: 515,
        name: "panpour",
      },
      {
        id: 516,
        name: "simipour",
      },
      {
        id: 543,
        name: "venipede",
      },
      {
        id: 544,
        name: "whirlipede",
      },
      {
        id: 545,
        name: "scolipede",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 462,
        name: "magnezone",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 467,
        name: "magmortar",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 466,
        name: "electivire",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 527,
        name: "woobat",
      },
      {
        id: 528,
        name: "swoobat",
      },
      {
        id: 524,
        name: "roggenrola",
      },
      {
        id: 525,
        name: "boldore",
      },
      {
        id: 526,
        name: "gigalith",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 532,
        name: "timburr",
      },
      {
        id: 533,
        name: "gurdurr",
      },
      {
        id: 534,
        name: "conkeldurr",
      },
      {
        id: 529,
        name: "drilbur",
      },
      {
        id: 530,
        name: "excadrill",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 427,
        name: "buneary",
      },
      {
        id: 428,
        name: "lopunny",
      },
      {
        id: 546,
        name: "cottonee",
      },
      {
        id: 547,
        name: "whimsicott",
      },
      {
        id: 548,
        name: "petilil",
      },
      {
        id: 549,
        name: "lilligant",
      },
      {
        id: 517,
        name: "munna",
      },
      {
        id: 518,
        name: "musharna",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 551,
        name: "sandile",
      },
      {
        id: 552,
        name: "krokorok",
      },
      {
        id: 553,
        name: "krookodile",
      },
      {
        id: 554,
        name: "darumaka",
      },
      {
        id: 555,
        name: "darmanitan",
      },
      {
        id: 555,
        name: "darmanitan-zen",
      },
      {
        id: 550,
        name: "basculin",
      },
      {
        id: 550,
        name: "basculin-blue-striped",
      },
      {
        id: 568,
        name: "trubbish",
      },
      {
        id: 569,
        name: "garbodor",
      },
      {
        id: 572,
        name: "minccino",
      },
      {
        id: 573,
        name: "cinccino",
      },
      {
        id: 627,
        name: "rufflet",
      },
      {
        id: 628,
        name: "braviary",
      },
      {
        id: 629,
        name: "vullaby",
      },
      {
        id: 630,
        name: "mandibuzz",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 557,
        name: "dwebble",
      },
      {
        id: 558,
        name: "crustle",
      },
      {
        id: 559,
        name: "scraggy",
      },
      {
        id: 560,
        name: "scrafty",
      },
      {
        id: 556,
        name: "maractus",
      },
      {
        id: 561,
        name: "sigilyph",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 562,
        name: "yamask",
      },
      {
        id: 563,
        name: "cofagrigus",
      },
      {
        id: 564,
        name: "tirtouga",
      },
      {
        id: 565,
        name: "carracosta",
      },
      {
        id: 566,
        name: "archen",
      },
      {
        id: 567,
        name: "archeops",
      },
      {
        id: 599,
        name: "klink",
      },
      {
        id: 600,
        name: "klang",
      },
      {
        id: 601,
        name: "klinklang",
      },
      {
        id: 406,
        name: "budew",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 407,
        name: "roserade",
      },
      {
        id: 574,
        name: "gothita",
      },
      {
        id: 575,
        name: "gothorita",
      },
      {
        id: 576,
        name: "gothitelle",
      },
      {
        id: 577,
        name: "solosis",
      },
      {
        id: 578,
        name: "duosion",
      },
      {
        id: 579,
        name: "reuniclus",
      },
      {
        id: 415,
        name: "combee",
      },
      {
        id: 416,
        name: "vespiquen",
      },
      {
        id: 587,
        name: "emolga",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 522,
        name: "blitzle",
      },
      {
        id: 523,
        name: "zebstrika",
      },
      {
        id: 418,
        name: "buizel",
      },
      {
        id: 419,
        name: "floatzel",
      },
      {
        id: 570,
        name: "zorua",
      },
      {
        id: 571,
        name: "zoroark",
      },
      {
        id: 580,
        name: "ducklett",
      },
      {
        id: 581,
        name: "swanna",
      },
      {
        id: 588,
        name: "karrablast",
      },
      {
        id: 589,
        name: "escavalier",
      },
      {
        id: 616,
        name: "shelmet",
      },
      {
        id: 617,
        name: "accelgor",
      },
      {
        id: 585,
        name: "deerling",
      },
      {
        id: 586,
        name: "sawsbuck",
      },
      {
        id: 590,
        name: "foongus",
      },
      {
        id: 591,
        name: "amoonguss",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 351,
        name: "castform-sunny",
      },
      {
        id: 351,
        name: "castform-rainy",
      },
      {
        id: 351,
        name: "castform-snowy",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 476,
        name: "probopass",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 636,
        name: "larvesta",
      },
      {
        id: 637,
        name: "volcarona",
      },
      {
        id: 595,
        name: "joltik",
      },
      {
        id: 596,
        name: "galvantula",
      },
      {
        id: 597,
        name: "ferroseed",
      },
      {
        id: 598,
        name: "ferrothorn",
      },
      {
        id: 602,
        name: "tynamo",
      },
      {
        id: 603,
        name: "eelektrik",
      },
      {
        id: 604,
        name: "eelektross",
      },
      {
        id: 592,
        name: "frillish",
      },
      {
        id: 593,
        name: "jellicent",
      },
      {
        id: 594,
        name: "alomomola",
      },
      {
        id: 610,
        name: "axew",
      },
      {
        id: 611,
        name: "fraxure",
      },
      {
        id: 612,
        name: "haxorus",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 605,
        name: "elgyem",
      },
      {
        id: 606,
        name: "beheeyem",
      },
      {
        id: 607,
        name: "litwick",
      },
      {
        id: 608,
        name: "lampent",
      },
      {
        id: 609,
        name: "chandelure",
      },
      {
        id: 631,
        name: "heatmor",
      },
      {
        id: 632,
        name: "durant",
      },
      {
        id: 613,
        name: "cubchoo",
      },
      {
        id: 614,
        name: "beartic",
      },
      {
        id: 615,
        name: "cryogonal",
      },
      {
        id: 641,
        name: "tornadus",
      },
      {
        id: 641,
        name: "tornadus-therian",
      },
      {
        id: 642,
        name: "thundurus",
      },
      {
        id: 642,
        name: "thundurus-therian",
      },
      {
        id: 645,
        name: "landorus",
      },
      {
        id: 645,
        name: "landorus-therian",
      },
      {
        id: 451,
        name: "skorupi",
      },
      {
        id: 452,
        name: "drapion",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 425,
        name: "drifloon",
      },
      {
        id: 426,
        name: "drifblim",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 465,
        name: "tangrowth",
      },
      {
        id: 619,
        name: "mienfoo",
      },
      {
        id: 620,
        name: "mienshao",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 472,
        name: "gliscor",
      },
      {
        id: 624,
        name: "pawniard",
      },
      {
        id: 625,
        name: "bisharp",
      },
      {
        id: 638,
        name: "cobalion",
      },
      {
        id: 639,
        name: "terrakion",
      },
      {
        id: 640,
        name: "virizion",
      },
      {
        id: 535,
        name: "tympole",
      },
      {
        id: 536,
        name: "palpitoad",
      },
      {
        id: 537,
        name: "seismitoad",
      },
      {
        id: 618,
        name: "stunfisk",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 458,
        name: "mantyke",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 436,
        name: "bronzor",
      },
      {
        id: 437,
        name: "bronzong",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 461,
        name: "weavile",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 582,
        name: "vanillite",
      },
      {
        id: 583,
        name: "vanillish",
      },
      {
        id: 584,
        name: "vanilluxe",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 473,
        name: "mamoswine",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 538,
        name: "throh",
      },
      {
        id: 539,
        name: "sawk",
      },
      {
        id: 626,
        name: "bouffalant",
      },
      {
        id: 621,
        name: "druddigon",
      },
      {
        id: 622,
        name: "golett",
      },
      {
        id: 623,
        name: "golurk",
      },
      {
        id: 633,
        name: "deino",
      },
      {
        id: 634,
        name: "zweilous",
      },
      {
        id: 635,
        name: "hydreigon",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 463,
        name: "lickilicky",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 469,
        name: "yanmega",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 455,
        name: "carnivine",
      },
      {
        id: 453,
        name: "croagunk",
      },
      {
        id: 454,
        name: "toxicroak",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 643,
        name: "reshiram",
      },
      {
        id: 644,
        name: "zekrom",
      },
      {
        id: 646,
        name: "kyurem",
      },
      {
        id: 646,
        name: "kyurem-white",
      },
      {
        id: 646,
        name: "kyurem-black",
      },
      {
        id: 647,
        name: "keldeo",
      },
      {
        id: 647,
        name: "keldeo-resolute",
      },
      {
        id: 648,
        name: "meloetta",
      },
      {
        id: 648,
        name: "meloetta-pirouette",
      },
      {
        id: 649,
        name: "genesect",
      },
    ],
  },
  national_b2w2: {
    name: "National Pokédex",
    pokemon: [
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 251,
        name: "celebi",
      },
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
      {
        id: 386,
        name: "deoxys-attack",
      },
      {
        id: 386,
        name: "deoxys-defense",
      },
      {
        id: 386,
        name: "deoxys-speed",
      },
      {
        id: 387,
        name: "turtwig",
      },
      {
        id: 388,
        name: "grotle",
      },
      {
        id: 389,
        name: "torterra",
      },
      {
        id: 390,
        name: "chimchar",
      },
      {
        id: 391,
        name: "monferno",
      },
      {
        id: 392,
        name: "infernape",
      },
      {
        id: 393,
        name: "piplup",
      },
      {
        id: 394,
        name: "prinplup",
      },
      {
        id: 395,
        name: "empoleon",
      },
      {
        id: 396,
        name: "starly",
      },
      {
        id: 397,
        name: "staravia",
      },
      {
        id: 398,
        name: "staraptor",
      },
      {
        id: 399,
        name: "bidoof",
      },
      {
        id: 400,
        name: "bibarel",
      },
      {
        id: 401,
        name: "kricketot",
      },
      {
        id: 402,
        name: "kricketune",
      },
      {
        id: 403,
        name: "shinx",
      },
      {
        id: 404,
        name: "luxio",
      },
      {
        id: 405,
        name: "luxray",
      },
      {
        id: 408,
        name: "cranidos",
      },
      {
        id: 409,
        name: "rampardos",
      },
      {
        id: 410,
        name: "shieldon",
      },
      {
        id: 411,
        name: "bastiodon",
      },
      {
        id: 412,
        name: "burmy",
      },
      {
        id: 413,
        name: "wormadam",
      },
      {
        id: 413,
        name: "wormadam-sandy",
      },
      {
        id: 413,
        name: "wormadam-trash",
      },
      {
        id: 414,
        name: "mothim",
      },
      {
        id: 417,
        name: "pachirisu",
      },
      {
        id: 420,
        name: "cherubi",
      },
      {
        id: 421,
        name: "cherrim",
      },
      {
        id: 421,
        name: "cherrim-sunshine",
      },
      {
        id: 422,
        name: "shellos",
      },
      {
        id: 423,
        name: "gastrodon",
      },
      {
        id: 424,
        name: "ambipom",
      },
      {
        id: 429,
        name: "mismagius",
      },
      {
        id: 430,
        name: "honchkrow",
      },
      {
        id: 431,
        name: "glameow",
      },
      {
        id: 432,
        name: "purugly",
      },
      {
        id: 433,
        name: "chingling",
      },
      {
        id: 434,
        name: "stunky",
      },
      {
        id: 435,
        name: "skuntank",
      },
      {
        id: 438,
        name: "bonsly",
      },
      {
        id: 439,
        name: "mime jr.",
      },
      {
        id: 440,
        name: "happiny",
      },
      {
        id: 441,
        name: "chatot",
      },
      {
        id: 442,
        name: "spiritomb",
      },
      {
        id: 443,
        name: "gible",
      },
      {
        id: 444,
        name: "gabite",
      },
      {
        id: 445,
        name: "garchomp",
      },
      {
        id: 446,
        name: "munchlax",
      },
      {
        id: 449,
        name: "hippopotas",
      },
      {
        id: 450,
        name: "hippowdon",
      },
      {
        id: 456,
        name: "finneon",
      },
      {
        id: 457,
        name: "lumineon",
      },
      {
        id: 459,
        name: "snover",
      },
      {
        id: 460,
        name: "abomasnow",
      },
      {
        id: 464,
        name: "rhyperior",
      },
      {
        id: 468,
        name: "togekiss",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 475,
        name: "gallade",
      },
      {
        id: 477,
        name: "dusknoir",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 480,
        name: "uxie",
      },
      {
        id: 481,
        name: "mesprit",
      },
      {
        id: 482,
        name: "azelf",
      },
      {
        id: 483,
        name: "dialga",
      },
      {
        id: 484,
        name: "palkia",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 486,
        name: "regigigas",
      },
      {
        id: 487,
        name: "giratina",
      },
      {
        id: 487,
        name: "giratina-origin",
      },
      {
        id: 488,
        name: "cresselia",
      },
      {
        id: 489,
        name: "phione",
      },
      {
        id: 490,
        name: "manaphy",
      },
      {
        id: 491,
        name: "darkrai",
      },
      {
        id: 492,
        name: "shaymin",
      },
      {
        id: 492,
        name: "shaymin-sky",
      },
      {
        id: 493,
        name: "arceus",
      },
      {
        id: 493,
        name: "arceus-fighting",
      },
      {
        id: 493,
        name: "arceus-flying",
      },
      {
        id: 493,
        name: "arceus-poison",
      },
      {
        id: 493,
        name: "arceus-ground",
      },
      {
        id: 493,
        name: "arceus-rock",
      },
      {
        id: 493,
        name: "arceus-bug",
      },
      {
        id: 493,
        name: "arceus-ghost",
      },
      {
        id: 493,
        name: "arceus-steel",
      },
      {
        id: 493,
        name: "arceus-fire",
      },
      {
        id: 493,
        name: "arceus-water",
      },
      {
        id: 493,
        name: "arceus-grass",
      },
      {
        id: 493,
        name: "arceus-electric",
      },
      {
        id: 493,
        name: "arceus-psychic",
      },
      {
        id: 493,
        name: "arceus-ice",
      },
      {
        id: 493,
        name: "arceus-dragon",
      },
      {
        id: 493,
        name: "arceus-dark",
      },
    ],
  },
  white_forest: {
    name: "White Forest",
    pokemon: [
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 396,
        name: "starly",
      },
      {
        id: 397,
        name: "staravia",
      },
      {
        id: 398,
        name: "staraptor",
      },
      {
        id: 403,
        name: "shinx",
      },
      {
        id: 404,
        name: "luxio",
      },
      {
        id: 405,
        name: "luxray",
      },
      {
        id: 406,
        name: "budew",
      },
      {
        id: 407,
        name: "roserade",
      },
      {
        id: 440,
        name: "happiny",
      },
      {
        id: 462,
        name: "magnezone",
      },
      {
        id: 464,
        name: "rhyperior",
      },
      {
        id: 466,
        name: "electivire",
      },
      {
        id: 467,
        name: "magmortar",
      },
      {
        id: 468,
        name: "togekiss",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 475,
        name: "gallade",
      },
    ],
  },
  national_xy: {
    name: "National Pokédex",
    pokemon: [
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 251,
        name: "celebi",
      },
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 257,
        name: "blaziken-mega",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 351,
        name: "castform-sunny",
      },
      {
        id: 351,
        name: "castform-rainy",
      },
      {
        id: 351,
        name: "castform-snowy",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 380,
        name: "latias-mega",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 381,
        name: "latios-mega",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
      {
        id: 386,
        name: "deoxys-attack",
      },
      {
        id: 386,
        name: "deoxys-defense",
      },
      {
        id: 386,
        name: "deoxys-speed",
      },
      {
        id: 387,
        name: "turtwig",
      },
      {
        id: 388,
        name: "grotle",
      },
      {
        id: 389,
        name: "torterra",
      },
      {
        id: 390,
        name: "chimchar",
      },
      {
        id: 391,
        name: "monferno",
      },
      {
        id: 392,
        name: "infernape",
      },
      {
        id: 393,
        name: "piplup",
      },
      {
        id: 394,
        name: "prinplup",
      },
      {
        id: 395,
        name: "empoleon",
      },
      {
        id: 401,
        name: "kricketot",
      },
      {
        id: 402,
        name: "kricketune",
      },
      {
        id: 403,
        name: "shinx",
      },
      {
        id: 404,
        name: "luxio",
      },
      {
        id: 405,
        name: "luxray",
      },
      {
        id: 408,
        name: "cranidos",
      },
      {
        id: 409,
        name: "rampardos",
      },
      {
        id: 410,
        name: "shieldon",
      },
      {
        id: 411,
        name: "bastiodon",
      },
      {
        id: 420,
        name: "cherubi",
      },
      {
        id: 421,
        name: "cherrim",
      },
      {
        id: 421,
        name: "cherrim-sunshine",
      },
      {
        id: 422,
        name: "shellos",
      },
      {
        id: 423,
        name: "gastrodon",
      },
      {
        id: 424,
        name: "ambipom",
      },
      {
        id: 427,
        name: "buneary",
      },
      {
        id: 428,
        name: "lopunny",
      },
      {
        id: 429,
        name: "mismagius",
      },
      {
        id: 431,
        name: "glameow",
      },
      {
        id: 432,
        name: "purugly",
      },
      {
        id: 436,
        name: "bronzor",
      },
      {
        id: 437,
        name: "bronzong",
      },
      {
        id: 440,
        name: "happiny",
      },
      {
        id: 442,
        name: "spiritomb",
      },
      {
        id: 456,
        name: "finneon",
      },
      {
        id: 457,
        name: "lumineon",
      },
      {
        id: 465,
        name: "tangrowth",
      },
      {
        id: 466,
        name: "electivire",
      },
      {
        id: 467,
        name: "magmortar",
      },
      {
        id: 468,
        name: "togekiss",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 477,
        name: "dusknoir",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 480,
        name: "uxie",
      },
      {
        id: 481,
        name: "mesprit",
      },
      {
        id: 482,
        name: "azelf",
      },
      {
        id: 483,
        name: "dialga",
      },
      {
        id: 484,
        name: "palkia",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 486,
        name: "regigigas",
      },
      {
        id: 487,
        name: "giratina",
      },
      {
        id: 487,
        name: "giratina-origin",
      },
      {
        id: 488,
        name: "cresselia",
      },
      {
        id: 489,
        name: "phione",
      },
      {
        id: 490,
        name: "manaphy",
      },
      {
        id: 491,
        name: "darkrai",
      },
      {
        id: 492,
        name: "shaymin",
      },
      {
        id: 492,
        name: "shaymin-sky",
      },
      {
        id: 493,
        name: "arceus",
      },
      {
        id: 493,
        name: "arceus-fighting",
      },
      {
        id: 493,
        name: "arceus-flying",
      },
      {
        id: 493,
        name: "arceus-poison",
      },
      {
        id: 493,
        name: "arceus-ground",
      },
      {
        id: 493,
        name: "arceus-rock",
      },
      {
        id: 493,
        name: "arceus-bug",
      },
      {
        id: 493,
        name: "arceus-ghost",
      },
      {
        id: 493,
        name: "arceus-steel",
      },
      {
        id: 493,
        name: "arceus-fire",
      },
      {
        id: 493,
        name: "arceus-water",
      },
      {
        id: 493,
        name: "arceus-grass",
      },
      {
        id: 493,
        name: "arceus-electric",
      },
      {
        id: 493,
        name: "arceus-psychic",
      },
      {
        id: 493,
        name: "arceus-ice",
      },
      {
        id: 493,
        name: "arceus-dragon",
      },
      {
        id: 493,
        name: "arceus-dark",
      },
      {
        id: 493,
        name: "arceus-fairy",
      },
      {
        id: 494,
        name: "victini",
      },
      {
        id: 495,
        name: "snivy",
      },
      {
        id: 496,
        name: "servine",
      },
      {
        id: 497,
        name: "serperior",
      },
      {
        id: 498,
        name: "tepig",
      },
      {
        id: 499,
        name: "pignite",
      },
      {
        id: 500,
        name: "emboar",
      },
      {
        id: 501,
        name: "oshawott",
      },
      {
        id: 502,
        name: "dewott",
      },
      {
        id: 503,
        name: "samurott",
      },
      {
        id: 506,
        name: "lillipup",
      },
      {
        id: 507,
        name: "herdier",
      },
      {
        id: 508,
        name: "stoutland",
      },
      {
        id: 517,
        name: "munna",
      },
      {
        id: 518,
        name: "musharna",
      },
      {
        id: 519,
        name: "pidove",
      },
      {
        id: 520,
        name: "tranquill",
      },
      {
        id: 521,
        name: "unfezant",
      },
      {
        id: 522,
        name: "blitzle",
      },
      {
        id: 523,
        name: "zebstrika",
      },
      {
        id: 529,
        name: "drilbur",
      },
      {
        id: 530,
        name: "excadrill",
      },
      {
        id: 535,
        name: "tympole",
      },
      {
        id: 536,
        name: "palpitoad",
      },
      {
        id: 537,
        name: "seismitoad",
      },
      {
        id: 540,
        name: "sewaddle",
      },
      {
        id: 541,
        name: "swadloon",
      },
      {
        id: 542,
        name: "leavanny",
      },
      {
        id: 546,
        name: "cottonee",
      },
      {
        id: 547,
        name: "whimsicott",
      },
      {
        id: 548,
        name: "petilil",
      },
      {
        id: 549,
        name: "lilligant",
      },
      {
        id: 554,
        name: "darumaka",
      },
      {
        id: 555,
        name: "darmanitan",
      },
      {
        id: 555,
        name: "darmanitan-zen",
      },
      {
        id: 556,
        name: "maractus",
      },
      {
        id: 562,
        name: "yamask",
      },
      {
        id: 563,
        name: "cofagrigus",
      },
      {
        id: 564,
        name: "tirtouga",
      },
      {
        id: 565,
        name: "carracosta",
      },
      {
        id: 566,
        name: "archen",
      },
      {
        id: 567,
        name: "archeops",
      },
      {
        id: 572,
        name: "minccino",
      },
      {
        id: 573,
        name: "cinccino",
      },
      {
        id: 585,
        name: "deerling",
      },
      {
        id: 586,
        name: "sawsbuck",
      },
      {
        id: 592,
        name: "frillish",
      },
      {
        id: 593,
        name: "jellicent",
      },
      {
        id: 595,
        name: "joltik",
      },
      {
        id: 596,
        name: "galvantula",
      },
      {
        id: 599,
        name: "klink",
      },
      {
        id: 600,
        name: "klang",
      },
      {
        id: 601,
        name: "klinklang",
      },
      {
        id: 602,
        name: "tynamo",
      },
      {
        id: 603,
        name: "eelektrik",
      },
      {
        id: 604,
        name: "eelektross",
      },
      {
        id: 605,
        name: "elgyem",
      },
      {
        id: 606,
        name: "beheeyem",
      },
      {
        id: 626,
        name: "bouffalant",
      },
      {
        id: 627,
        name: "rufflet",
      },
      {
        id: 628,
        name: "braviary",
      },
      {
        id: 629,
        name: "vullaby",
      },
      {
        id: 630,
        name: "mandibuzz",
      },
      {
        id: 636,
        name: "larvesta",
      },
      {
        id: 637,
        name: "volcarona",
      },
      {
        id: 638,
        name: "cobalion",
      },
      {
        id: 639,
        name: "terrakion",
      },
      {
        id: 640,
        name: "virizion",
      },
      {
        id: 641,
        name: "tornadus",
      },
      {
        id: 641,
        name: "tornadus-therian",
      },
      {
        id: 642,
        name: "thundurus",
      },
      {
        id: 642,
        name: "thundurus-therian",
      },
      {
        id: 643,
        name: "reshiram",
      },
      {
        id: 644,
        name: "zekrom",
      },
      {
        id: 645,
        name: "landorus",
      },
      {
        id: 645,
        name: "landorus-therian",
      },
      {
        id: 646,
        name: "kyurem",
      },
      {
        id: 646,
        name: "kyurem-white",
      },
      {
        id: 646,
        name: "kyurem-black",
      },
      {
        id: 647,
        name: "keldeo",
      },
      {
        id: 647,
        name: "keldeo-resolute",
      },
      {
        id: 648,
        name: "meloetta",
      },
      {
        id: 648,
        name: "meloetta-pirouette",
      },
      {
        id: 649,
        name: "genesect",
      },
    ],
  },
  national_oras: {
    name: "National Pokédex",
    pokemon: [
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 3,
        name: "venusaur-mega",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 6,
        name: "charizard-mega-x",
      },
      {
        id: 6,
        name: "charizard-mega-y",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 9,
        name: "blastoise-mega",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 15,
        name: "beedrill-mega",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 18,
        name: "pidgeot-mega",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 80,
        name: "slowbro-mega",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 94,
        name: "gengar-mega",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 115,
        name: "kangaskhan-mega",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 142,
        name: "aerodactyl-mega",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 150,
        name: "mewtwo-mega-x",
      },
      {
        id: 150,
        name: "mewtwo-mega-y",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 181,
        name: "ampharos-mega",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 208,
        name: "steelix-mega",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 212,
        name: "scizor-mega",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 229,
        name: "houndoom-mega",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 248,
        name: "tyranitar-mega",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 251,
        name: "celebi",
      },
      {
        id: 387,
        name: "turtwig",
      },
      {
        id: 388,
        name: "grotle",
      },
      {
        id: 389,
        name: "torterra",
      },
      {
        id: 390,
        name: "chimchar",
      },
      {
        id: 391,
        name: "monferno",
      },
      {
        id: 392,
        name: "infernape",
      },
      {
        id: 393,
        name: "piplup",
      },
      {
        id: 394,
        name: "prinplup",
      },
      {
        id: 395,
        name: "empoleon",
      },
      {
        id: 396,
        name: "starly",
      },
      {
        id: 397,
        name: "staravia",
      },
      {
        id: 398,
        name: "staraptor",
      },
      {
        id: 399,
        name: "bidoof",
      },
      {
        id: 400,
        name: "bibarel",
      },
      {
        id: 401,
        name: "kricketot",
      },
      {
        id: 402,
        name: "kricketune",
      },
      {
        id: 403,
        name: "shinx",
      },
      {
        id: 404,
        name: "luxio",
      },
      {
        id: 405,
        name: "luxray",
      },
      {
        id: 408,
        name: "cranidos",
      },
      {
        id: 409,
        name: "rampardos",
      },
      {
        id: 410,
        name: "shieldon",
      },
      {
        id: 411,
        name: "bastiodon",
      },
      {
        id: 412,
        name: "burmy",
      },
      {
        id: 413,
        name: "wormadam",
      },
      {
        id: 413,
        name: "wormadam-sandy",
      },
      {
        id: 413,
        name: "wormadam-trash",
      },
      {
        id: 414,
        name: "mothim",
      },
      {
        id: 415,
        name: "combee",
      },
      {
        id: 416,
        name: "vespiquen",
      },
      {
        id: 417,
        name: "pachirisu",
      },
      {
        id: 418,
        name: "buizel",
      },
      {
        id: 419,
        name: "floatzel",
      },
      {
        id: 420,
        name: "cherubi",
      },
      {
        id: 421,
        name: "cherrim",
      },
      {
        id: 421,
        name: "cherrim-sunshine",
      },
      {
        id: 422,
        name: "shellos",
      },
      {
        id: 423,
        name: "gastrodon",
      },
      {
        id: 424,
        name: "ambipom",
      },
      {
        id: 425,
        name: "drifloon",
      },
      {
        id: 426,
        name: "drifblim",
      },
      {
        id: 427,
        name: "buneary",
      },
      {
        id: 428,
        name: "lopunny",
      },
      {
        id: 428,
        name: "lopunny-mega",
      },
      {
        id: 429,
        name: "mismagius",
      },
      {
        id: 430,
        name: "honchkrow",
      },
      {
        id: 431,
        name: "glameow",
      },
      {
        id: 432,
        name: "purugly",
      },
      {
        id: 434,
        name: "stunky",
      },
      {
        id: 435,
        name: "skuntank",
      },
      {
        id: 436,
        name: "bronzor",
      },
      {
        id: 437,
        name: "bronzong",
      },
      {
        id: 438,
        name: "bonsly",
      },
      {
        id: 439,
        name: "mime jr.",
      },
      {
        id: 440,
        name: "happiny",
      },
      {
        id: 441,
        name: "chatot",
      },
      {
        id: 442,
        name: "spiritomb",
      },
      {
        id: 443,
        name: "gible",
      },
      {
        id: 444,
        name: "gabite",
      },
      {
        id: 445,
        name: "garchomp",
      },
      {
        id: 445,
        name: "garchomp-mega",
      },
      {
        id: 446,
        name: "munchlax",
      },
      {
        id: 447,
        name: "riolu",
      },
      {
        id: 448,
        name: "lucario",
      },
      {
        id: 448,
        name: "lucario-mega",
      },
      {
        id: 449,
        name: "hippopotas",
      },
      {
        id: 450,
        name: "hippowdon",
      },
      {
        id: 451,
        name: "skorupi",
      },
      {
        id: 452,
        name: "drapion",
      },
      {
        id: 453,
        name: "croagunk",
      },
      {
        id: 454,
        name: "toxicroak",
      },
      {
        id: 455,
        name: "carnivine",
      },
      {
        id: 456,
        name: "finneon",
      },
      {
        id: 457,
        name: "lumineon",
      },
      {
        id: 458,
        name: "mantyke",
      },
      {
        id: 459,
        name: "snover",
      },
      {
        id: 460,
        name: "abomasnow",
      },
      {
        id: 460,
        name: "abomasnow-mega",
      },
      {
        id: 461,
        name: "weavile",
      },
      {
        id: 463,
        name: "lickilicky",
      },
      {
        id: 465,
        name: "tangrowth",
      },
      {
        id: 466,
        name: "electivire",
      },
      {
        id: 467,
        name: "magmortar",
      },
      {
        id: 468,
        name: "togekiss",
      },
      {
        id: 469,
        name: "yanmega",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 472,
        name: "gliscor",
      },
      {
        id: 473,
        name: "mamoswine",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 480,
        name: "uxie",
      },
      {
        id: 481,
        name: "mesprit",
      },
      {
        id: 482,
        name: "azelf",
      },
      {
        id: 483,
        name: "dialga",
      },
      {
        id: 484,
        name: "palkia",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 486,
        name: "regigigas",
      },
      {
        id: 487,
        name: "giratina",
      },
      {
        id: 487,
        name: "giratina-origin",
      },
      {
        id: 488,
        name: "cresselia",
      },
      {
        id: 489,
        name: "phione",
      },
      {
        id: 490,
        name: "manaphy",
      },
      {
        id: 491,
        name: "darkrai",
      },
      {
        id: 492,
        name: "shaymin",
      },
      {
        id: 492,
        name: "shaymin-sky",
      },
      {
        id: 493,
        name: "arceus",
      },
      {
        id: 493,
        name: "arceus-fighting",
      },
      {
        id: 493,
        name: "arceus-flying",
      },
      {
        id: 493,
        name: "arceus-poison",
      },
      {
        id: 493,
        name: "arceus-ground",
      },
      {
        id: 493,
        name: "arceus-rock",
      },
      {
        id: 493,
        name: "arceus-bug",
      },
      {
        id: 493,
        name: "arceus-ghost",
      },
      {
        id: 493,
        name: "arceus-steel",
      },
      {
        id: 493,
        name: "arceus-fire",
      },
      {
        id: 493,
        name: "arceus-water",
      },
      {
        id: 493,
        name: "arceus-grass",
      },
      {
        id: 493,
        name: "arceus-electric",
      },
      {
        id: 493,
        name: "arceus-psychic",
      },
      {
        id: 493,
        name: "arceus-ice",
      },
      {
        id: 493,
        name: "arceus-dragon",
      },
      {
        id: 493,
        name: "arceus-dark",
      },
      {
        id: 493,
        name: "arceus-fairy",
      },
      {
        id: 494,
        name: "victini",
      },
      {
        id: 495,
        name: "snivy",
      },
      {
        id: 496,
        name: "servine",
      },
      {
        id: 497,
        name: "serperior",
      },
      {
        id: 498,
        name: "tepig",
      },
      {
        id: 499,
        name: "pignite",
      },
      {
        id: 500,
        name: "emboar",
      },
      {
        id: 501,
        name: "oshawott",
      },
      {
        id: 502,
        name: "dewott",
      },
      {
        id: 503,
        name: "samurott",
      },
      {
        id: 504,
        name: "patrat",
      },
      {
        id: 505,
        name: "watchog",
      },
      {
        id: 506,
        name: "lillipup",
      },
      {
        id: 507,
        name: "herdier",
      },
      {
        id: 508,
        name: "stoutland",
      },
      {
        id: 509,
        name: "purrloin",
      },
      {
        id: 510,
        name: "liepard",
      },
      {
        id: 511,
        name: "pansage",
      },
      {
        id: 512,
        name: "simisage",
      },
      {
        id: 513,
        name: "pansear",
      },
      {
        id: 514,
        name: "simisear",
      },
      {
        id: 515,
        name: "panpour",
      },
      {
        id: 516,
        name: "simipour",
      },
      {
        id: 517,
        name: "munna",
      },
      {
        id: 518,
        name: "musharna",
      },
      {
        id: 519,
        name: "pidove",
      },
      {
        id: 520,
        name: "tranquill",
      },
      {
        id: 521,
        name: "unfezant",
      },
      {
        id: 522,
        name: "blitzle",
      },
      {
        id: 523,
        name: "zebstrika",
      },
      {
        id: 524,
        name: "roggenrola",
      },
      {
        id: 525,
        name: "boldore",
      },
      {
        id: 526,
        name: "gigalith",
      },
      {
        id: 527,
        name: "woobat",
      },
      {
        id: 528,
        name: "swoobat",
      },
      {
        id: 529,
        name: "drilbur",
      },
      {
        id: 530,
        name: "excadrill",
      },
      {
        id: 531,
        name: "audino",
      },
      {
        id: 531,
        name: "audino-mega",
      },
      {
        id: 532,
        name: "timburr",
      },
      {
        id: 533,
        name: "gurdurr",
      },
      {
        id: 534,
        name: "conkeldurr",
      },
      {
        id: 535,
        name: "tympole",
      },
      {
        id: 536,
        name: "palpitoad",
      },
      {
        id: 537,
        name: "seismitoad",
      },
      {
        id: 538,
        name: "throh",
      },
      {
        id: 539,
        name: "sawk",
      },
      {
        id: 540,
        name: "sewaddle",
      },
      {
        id: 541,
        name: "swadloon",
      },
      {
        id: 542,
        name: "leavanny",
      },
      {
        id: 543,
        name: "venipede",
      },
      {
        id: 544,
        name: "whirlipede",
      },
      {
        id: 545,
        name: "scolipede",
      },
      {
        id: 546,
        name: "cottonee",
      },
      {
        id: 547,
        name: "whimsicott",
      },
      {
        id: 548,
        name: "petilil",
      },
      {
        id: 549,
        name: "lilligant",
      },
      {
        id: 550,
        name: "basculin",
      },
      {
        id: 550,
        name: "basculin-blue-striped",
      },
      {
        id: 551,
        name: "sandile",
      },
      {
        id: 552,
        name: "krokorok",
      },
      {
        id: 553,
        name: "krookodile",
      },
      {
        id: 554,
        name: "darumaka",
      },
      {
        id: 555,
        name: "darmanitan",
      },
      {
        id: 555,
        name: "darmanitan-zen",
      },
      {
        id: 556,
        name: "maractus",
      },
      {
        id: 557,
        name: "dwebble",
      },
      {
        id: 558,
        name: "crustle",
      },
      {
        id: 559,
        name: "scraggy",
      },
      {
        id: 560,
        name: "scrafty",
      },
      {
        id: 561,
        name: "sigilyph",
      },
      {
        id: 562,
        name: "yamask",
      },
      {
        id: 563,
        name: "cofagrigus",
      },
      {
        id: 564,
        name: "tirtouga",
      },
      {
        id: 565,
        name: "carracosta",
      },
      {
        id: 566,
        name: "archen",
      },
      {
        id: 567,
        name: "archeops",
      },
      {
        id: 568,
        name: "trubbish",
      },
      {
        id: 569,
        name: "garbodor",
      },
      {
        id: 570,
        name: "zorua",
      },
      {
        id: 571,
        name: "zoroark",
      },
      {
        id: 572,
        name: "minccino",
      },
      {
        id: 573,
        name: "cinccino",
      },
      {
        id: 574,
        name: "gothita",
      },
      {
        id: 575,
        name: "gothorita",
      },
      {
        id: 576,
        name: "gothitelle",
      },
      {
        id: 577,
        name: "solosis",
      },
      {
        id: 578,
        name: "duosion",
      },
      {
        id: 579,
        name: "reuniclus",
      },
      {
        id: 580,
        name: "ducklett",
      },
      {
        id: 581,
        name: "swanna",
      },
      {
        id: 582,
        name: "vanillite",
      },
      {
        id: 583,
        name: "vanillish",
      },
      {
        id: 584,
        name: "vanilluxe",
      },
      {
        id: 585,
        name: "deerling",
      },
      {
        id: 586,
        name: "sawsbuck",
      },
      {
        id: 587,
        name: "emolga",
      },
      {
        id: 588,
        name: "karrablast",
      },
      {
        id: 589,
        name: "escavalier",
      },
      {
        id: 590,
        name: "foongus",
      },
      {
        id: 591,
        name: "amoonguss",
      },
      {
        id: 592,
        name: "frillish",
      },
      {
        id: 593,
        name: "jellicent",
      },
      {
        id: 594,
        name: "alomomola",
      },
      {
        id: 595,
        name: "joltik",
      },
      {
        id: 596,
        name: "galvantula",
      },
      {
        id: 597,
        name: "ferroseed",
      },
      {
        id: 598,
        name: "ferrothorn",
      },
      {
        id: 599,
        name: "klink",
      },
      {
        id: 600,
        name: "klang",
      },
      {
        id: 601,
        name: "klinklang",
      },
      {
        id: 602,
        name: "tynamo",
      },
      {
        id: 603,
        name: "eelektrik",
      },
      {
        id: 604,
        name: "eelektross",
      },
      {
        id: 605,
        name: "elgyem",
      },
      {
        id: 606,
        name: "beheeyem",
      },
      {
        id: 607,
        name: "litwick",
      },
      {
        id: 608,
        name: "lampent",
      },
      {
        id: 609,
        name: "chandelure",
      },
      {
        id: 610,
        name: "axew",
      },
      {
        id: 611,
        name: "fraxure",
      },
      {
        id: 612,
        name: "haxorus",
      },
      {
        id: 613,
        name: "cubchoo",
      },
      {
        id: 614,
        name: "beartic",
      },
      {
        id: 615,
        name: "cryogonal",
      },
      {
        id: 616,
        name: "shelmet",
      },
      {
        id: 617,
        name: "accelgor",
      },
      {
        id: 618,
        name: "stunfisk",
      },
      {
        id: 619,
        name: "mienfoo",
      },
      {
        id: 620,
        name: "mienshao",
      },
      {
        id: 621,
        name: "druddigon",
      },
      {
        id: 622,
        name: "golett",
      },
      {
        id: 623,
        name: "golurk",
      },
      {
        id: 624,
        name: "pawniard",
      },
      {
        id: 625,
        name: "bisharp",
      },
      {
        id: 626,
        name: "bouffalant",
      },
      {
        id: 627,
        name: "rufflet",
      },
      {
        id: 628,
        name: "braviary",
      },
      {
        id: 629,
        name: "vullaby",
      },
      {
        id: 630,
        name: "mandibuzz",
      },
      {
        id: 631,
        name: "heatmor",
      },
      {
        id: 632,
        name: "durant",
      },
      {
        id: 633,
        name: "deino",
      },
      {
        id: 634,
        name: "zweilous",
      },
      {
        id: 635,
        name: "hydreigon",
      },
      {
        id: 636,
        name: "larvesta",
      },
      {
        id: 637,
        name: "volcarona",
      },
      {
        id: 638,
        name: "cobalion",
      },
      {
        id: 639,
        name: "terrakion",
      },
      {
        id: 640,
        name: "virizion",
      },
      {
        id: 641,
        name: "tornadus",
      },
      {
        id: 641,
        name: "tornadus-therian",
      },
      {
        id: 642,
        name: "thundurus",
      },
      {
        id: 642,
        name: "thundurus-therian",
      },
      {
        id: 643,
        name: "reshiram",
      },
      {
        id: 644,
        name: "zekrom",
      },
      {
        id: 645,
        name: "landorus",
      },
      {
        id: 645,
        name: "landorus-therian",
      },
      {
        id: 646,
        name: "kyurem",
      },
      {
        id: 646,
        name: "kyurem-white",
      },
      {
        id: 646,
        name: "kyurem-black",
      },
      {
        id: 647,
        name: "keldeo",
      },
      {
        id: 647,
        name: "keldeo-resolute",
      },
      {
        id: 648,
        name: "meloetta",
      },
      {
        id: 648,
        name: "meloetta-pirouette",
      },
      {
        id: 649,
        name: "genesect",
      },
      {
        id: 650,
        name: "chespin",
      },
      {
        id: 651,
        name: "quilladin",
      },
      {
        id: 652,
        name: "chesnaught",
      },
      {
        id: 653,
        name: "fennekin",
      },
      {
        id: 654,
        name: "braixen",
      },
      {
        id: 655,
        name: "delphox",
      },
      {
        id: 656,
        name: "froakie",
      },
      {
        id: 657,
        name: "frogadier",
      },
      {
        id: 658,
        name: "greninja",
      },
      {
        id: 659,
        name: "bunnelby",
      },
      {
        id: 660,
        name: "diggersby",
      },
      {
        id: 661,
        name: "fletchling",
      },
      {
        id: 662,
        name: "fletchinder",
      },
      {
        id: 663,
        name: "talonflame",
      },
      {
        id: 666,
        name: "vivillon",
      },
      {
        id: 666,
        name: "vivillon-fancy",
      },
      {
        id: 666,
        name: "vivillon-pokeball",
      },
      {
        id: 667,
        name: "litleo",
      },
      {
        id: 668,
        name: "pyroar",
      },
      {
        id: 669,
        name: "flabébé",
      },
      {
        id: 670,
        name: "floette",
      },
      {
        id: 671,
        name: "florges",
      },
      {
        id: 672,
        name: "skiddo",
      },
      {
        id: 673,
        name: "gogoat",
      },
      {
        id: 674,
        name: "pancham",
      },
      {
        id: 675,
        name: "pangoro",
      },
      {
        id: 676,
        name: "furfrou",
      },
      {
        id: 677,
        name: "espurr",
      },
      {
        id: 678,
        name: "meowstic",
      },
      {
        id: 678,
        name: "meowstic-f",
      },
      {
        id: 679,
        name: "honedge",
      },
      {
        id: 680,
        name: "doublade",
      },
      {
        id: 681,
        name: "aegislash",
      },
      {
        id: 681,
        name: "aegislash-blade",
      },
      {
        id: 682,
        name: "spritzee",
      },
      {
        id: 683,
        name: "aromatisse",
      },
      {
        id: 684,
        name: "swirlix",
      },
      {
        id: 685,
        name: "slurpuff",
      },
      {
        id: 686,
        name: "inkay",
      },
      {
        id: 687,
        name: "malamar",
      },
      {
        id: 688,
        name: "binacle",
      },
      {
        id: 689,
        name: "barbaracle",
      },
      {
        id: 690,
        name: "skrelp",
      },
      {
        id: 691,
        name: "dragalge",
      },
      {
        id: 692,
        name: "clauncher",
      },
      {
        id: 693,
        name: "clawitzer",
      },
      {
        id: 694,
        name: "helioptile",
      },
      {
        id: 695,
        name: "heliolisk",
      },
      {
        id: 696,
        name: "tyrunt",
      },
      {
        id: 697,
        name: "tyrantrum",
      },
      {
        id: 698,
        name: "amaura",
      },
      {
        id: 699,
        name: "aurorus",
      },
      {
        id: 700,
        name: "sylveon",
      },
      {
        id: 701,
        name: "hawlucha",
      },
      {
        id: 702,
        name: "dedenne",
      },
      {
        id: 703,
        name: "carbink",
      },
      {
        id: 704,
        name: "goomy",
      },
      {
        id: 705,
        name: "sliggoo",
      },
      {
        id: 706,
        name: "goodra",
      },
      {
        id: 707,
        name: "klefki",
      },
      {
        id: 708,
        name: "phantump",
      },
      {
        id: 709,
        name: "trevenant",
      },
      {
        id: 710,
        name: "pumpkaboo",
      },
      {
        id: 710,
        name: "pumpkaboo-small",
      },
      {
        id: 710,
        name: "pumpkaboo-large",
      },
      {
        id: 710,
        name: "pumpkaboo-super",
      },
      {
        id: 711,
        name: "gourgeist",
      },
      {
        id: 711,
        name: "gourgeist-small",
      },
      {
        id: 711,
        name: "gourgeist-large",
      },
      {
        id: 711,
        name: "gourgeist-super",
      },
      {
        id: 712,
        name: "bergmite",
      },
      {
        id: 713,
        name: "avalugg",
      },
      {
        id: 714,
        name: "noibat",
      },
      {
        id: 715,
        name: "noivern",
      },
      {
        id: 716,
        name: "xerneas",
      },
      {
        id: 717,
        name: "yveltal",
      },
      {
        id: 718,
        name: "zygarde",
      },
      {
        id: 719,
        name: "diancie",
      },
      {
        id: 719,
        name: "diancie-mega",
      },
      {
        id: 720,
        name: "hoopa",
      },
      {
        id: 720,
        name: "hoopa-unbound",
      },
      {
        id: 721,
        name: "volcanion",
      },
    ],
  },
  national_sm: {
    name: "Other Pokémon",
    pokemon: [
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 3,
        name: "venusaur-mega",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 6,
        name: "charizard-mega-x",
      },
      {
        id: 6,
        name: "charizard-mega-y",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 9,
        name: "blastoise-mega",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 15,
        name: "beedrill-mega",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 18,
        name: "pidgeot-mega",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 150,
        name: "mewtwo-mega-x",
      },
      {
        id: 150,
        name: "mewtwo-mega-y",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 181,
        name: "ampharos-mega",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 208,
        name: "steelix-mega",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 214,
        name: "heracross-mega",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 229,
        name: "houndoom-mega",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 248,
        name: "tyranitar-mega",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 251,
        name: "celebi",
      },
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 254,
        name: "sceptile-mega",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 257,
        name: "blaziken-mega",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 260,
        name: "swampert-mega",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 282,
        name: "gardevoir-mega",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 303,
        name: "mawile-mega",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 306,
        name: "aggron-mega",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 308,
        name: "medicham-mega",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 310,
        name: "manectric-mega",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 323,
        name: "camerupt-mega",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 334,
        name: "altaria-mega",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 354,
        name: "banette-mega",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 380,
        name: "latias-mega",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 381,
        name: "latios-mega",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 382,
        name: "kyogre-primal",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 383,
        name: "groudon-primal",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 384,
        name: "rayquaza-mega",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
      {
        id: 386,
        name: "deoxys-attack",
      },
      {
        id: 386,
        name: "deoxys-defense",
      },
      {
        id: 386,
        name: "deoxys-speed",
      },
      {
        id: 387,
        name: "turtwig",
      },
      {
        id: 388,
        name: "grotle",
      },
      {
        id: 389,
        name: "torterra",
      },
      {
        id: 390,
        name: "chimchar",
      },
      {
        id: 391,
        name: "monferno",
      },
      {
        id: 392,
        name: "infernape",
      },
      {
        id: 393,
        name: "piplup",
      },
      {
        id: 394,
        name: "prinplup",
      },
      {
        id: 395,
        name: "empoleon",
      },
      {
        id: 399,
        name: "bidoof",
      },
      {
        id: 400,
        name: "bibarel",
      },
      {
        id: 401,
        name: "kricketot",
      },
      {
        id: 402,
        name: "kricketune",
      },
      {
        id: 412,
        name: "burmy",
      },
      {
        id: 413,
        name: "wormadam",
      },
      {
        id: 413,
        name: "wormadam-sandy",
      },
      {
        id: 413,
        name: "wormadam-trash",
      },
      {
        id: 414,
        name: "mothim",
      },
      {
        id: 415,
        name: "combee",
      },
      {
        id: 416,
        name: "vespiquen",
      },
      {
        id: 417,
        name: "pachirisu",
      },
      {
        id: 418,
        name: "buizel",
      },
      {
        id: 419,
        name: "floatzel",
      },
      {
        id: 420,
        name: "cherubi",
      },
      {
        id: 421,
        name: "cherrim",
      },
      {
        id: 421,
        name: "cherrim-sunshine",
      },
      {
        id: 422,
        name: "shellos",
      },
      {
        id: 423,
        name: "gastrodon",
      },
      {
        id: 424,
        name: "ambipom",
      },
      {
        id: 427,
        name: "buneary",
      },
      {
        id: 428,
        name: "lopunny",
      },
      {
        id: 428,
        name: "lopunny-mega",
      },
      {
        id: 431,
        name: "glameow",
      },
      {
        id: 432,
        name: "purugly",
      },
      {
        id: 433,
        name: "chingling",
      },
      {
        id: 434,
        name: "stunky",
      },
      {
        id: 435,
        name: "skuntank",
      },
      {
        id: 436,
        name: "bronzor",
      },
      {
        id: 437,
        name: "bronzong",
      },
      {
        id: 439,
        name: "mime jr.",
      },
      {
        id: 441,
        name: "chatot",
      },
      {
        id: 442,
        name: "spiritomb",
      },
      {
        id: 449,
        name: "hippopotas",
      },
      {
        id: 450,
        name: "hippowdon",
      },
      {
        id: 451,
        name: "skorupi",
      },
      {
        id: 452,
        name: "drapion",
      },
      {
        id: 453,
        name: "croagunk",
      },
      {
        id: 454,
        name: "toxicroak",
      },
      {
        id: 455,
        name: "carnivine",
      },
      {
        id: 458,
        name: "mantyke",
      },
      {
        id: 459,
        name: "snover",
      },
      {
        id: 460,
        name: "abomasnow",
      },
      {
        id: 460,
        name: "abomasnow-mega",
      },
      {
        id: 463,
        name: "lickilicky",
      },
      {
        id: 465,
        name: "tangrowth",
      },
      {
        id: 469,
        name: "yanmega",
      },
      {
        id: 472,
        name: "gliscor",
      },
      {
        id: 475,
        name: "gallade",
      },
      {
        id: 475,
        name: "gallade-mega",
      },
      {
        id: 477,
        name: "dusknoir",
      },
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 480,
        name: "uxie",
      },
      {
        id: 481,
        name: "mesprit",
      },
      {
        id: 482,
        name: "azelf",
      },
      {
        id: 483,
        name: "dialga",
      },
      {
        id: 484,
        name: "palkia",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 486,
        name: "regigigas",
      },
      {
        id: 487,
        name: "giratina",
      },
      {
        id: 487,
        name: "giratina-origin",
      },
      {
        id: 488,
        name: "cresselia",
      },
      {
        id: 489,
        name: "phione",
      },
      {
        id: 490,
        name: "manaphy",
      },
      {
        id: 491,
        name: "darkrai",
      },
      {
        id: 492,
        name: "shaymin",
      },
      {
        id: 492,
        name: "shaymin-sky",
      },
      {
        id: 493,
        name: "arceus",
      },
      {
        id: 493,
        name: "arceus-fighting",
      },
      {
        id: 493,
        name: "arceus-flying",
      },
      {
        id: 493,
        name: "arceus-poison",
      },
      {
        id: 493,
        name: "arceus-ground",
      },
      {
        id: 493,
        name: "arceus-rock",
      },
      {
        id: 493,
        name: "arceus-bug",
      },
      {
        id: 493,
        name: "arceus-ghost",
      },
      {
        id: 493,
        name: "arceus-steel",
      },
      {
        id: 493,
        name: "arceus-fire",
      },
      {
        id: 493,
        name: "arceus-water",
      },
      {
        id: 493,
        name: "arceus-grass",
      },
      {
        id: 493,
        name: "arceus-electric",
      },
      {
        id: 493,
        name: "arceus-psychic",
      },
      {
        id: 493,
        name: "arceus-ice",
      },
      {
        id: 493,
        name: "arceus-dragon",
      },
      {
        id: 493,
        name: "arceus-dark",
      },
      {
        id: 493,
        name: "arceus-fairy",
      },
      {
        id: 494,
        name: "victini",
      },
      {
        id: 504,
        name: "patrat",
      },
      {
        id: 505,
        name: "watchog",
      },
      {
        id: 509,
        name: "purrloin",
      },
      {
        id: 510,
        name: "liepard",
      },
      {
        id: 511,
        name: "pansage",
      },
      {
        id: 512,
        name: "simisage",
      },
      {
        id: 513,
        name: "pansear",
      },
      {
        id: 514,
        name: "simisear",
      },
      {
        id: 515,
        name: "panpour",
      },
      {
        id: 516,
        name: "simipour",
      },
      {
        id: 517,
        name: "munna",
      },
      {
        id: 518,
        name: "musharna",
      },
      {
        id: 519,
        name: "pidove",
      },
      {
        id: 520,
        name: "tranquill",
      },
      {
        id: 521,
        name: "unfezant",
      },
      {
        id: 522,
        name: "blitzle",
      },
      {
        id: 523,
        name: "zebstrika",
      },
      {
        id: 527,
        name: "woobat",
      },
      {
        id: 528,
        name: "swoobat",
      },
      {
        id: 529,
        name: "drilbur",
      },
      {
        id: 530,
        name: "excadrill",
      },
      {
        id: 531,
        name: "audino",
      },
      {
        id: 531,
        name: "audino-mega",
      },
      {
        id: 535,
        name: "tympole",
      },
      {
        id: 536,
        name: "palpitoad",
      },
      {
        id: 537,
        name: "seismitoad",
      },
      {
        id: 538,
        name: "throh",
      },
      {
        id: 539,
        name: "sawk",
      },
      {
        id: 550,
        name: "basculin",
      },
      {
        id: 550,
        name: "basculin-blue-striped",
      },
      {
        id: 554,
        name: "darumaka",
      },
      {
        id: 555,
        name: "darmanitan",
      },
      {
        id: 555,
        name: "darmanitan-zen",
      },
      {
        id: 556,
        name: "maractus",
      },
      {
        id: 557,
        name: "dwebble",
      },
      {
        id: 558,
        name: "crustle",
      },
      {
        id: 559,
        name: "scraggy",
      },
      {
        id: 560,
        name: "scrafty",
      },
      {
        id: 561,
        name: "sigilyph",
      },
      {
        id: 562,
        name: "yamask",
      },
      {
        id: 563,
        name: "cofagrigus",
      },
      {
        id: 570,
        name: "zorua",
      },
      {
        id: 571,
        name: "zoroark",
      },
      {
        id: 572,
        name: "minccino",
      },
      {
        id: 573,
        name: "cinccino",
      },
      {
        id: 580,
        name: "ducklett",
      },
      {
        id: 581,
        name: "swanna",
      },
      {
        id: 585,
        name: "deerling",
      },
      {
        id: 586,
        name: "sawsbuck",
      },
      {
        id: 588,
        name: "karrablast",
      },
      {
        id: 589,
        name: "escavalier",
      },
      {
        id: 590,
        name: "foongus",
      },
      {
        id: 591,
        name: "amoonguss",
      },
      {
        id: 592,
        name: "frillish",
      },
      {
        id: 593,
        name: "jellicent",
      },
      {
        id: 595,
        name: "joltik",
      },
      {
        id: 596,
        name: "galvantula",
      },
      {
        id: 597,
        name: "ferroseed",
      },
      {
        id: 598,
        name: "ferrothorn",
      },
      {
        id: 605,
        name: "elgyem",
      },
      {
        id: 606,
        name: "beheeyem",
      },
      {
        id: 613,
        name: "cubchoo",
      },
      {
        id: 614,
        name: "beartic",
      },
      {
        id: 615,
        name: "cryogonal",
      },
      {
        id: 616,
        name: "shelmet",
      },
      {
        id: 617,
        name: "accelgor",
      },
      {
        id: 618,
        name: "stunfisk",
      },
      {
        id: 619,
        name: "mienfoo",
      },
      {
        id: 620,
        name: "mienshao",
      },
      {
        id: 621,
        name: "druddigon",
      },
      {
        id: 622,
        name: "golett",
      },
      {
        id: 623,
        name: "golurk",
      },
      {
        id: 624,
        name: "pawniard",
      },
      {
        id: 625,
        name: "bisharp",
      },
      {
        id: 626,
        name: "bouffalant",
      },
      {
        id: 631,
        name: "heatmor",
      },
      {
        id: 632,
        name: "durant",
      },
      {
        id: 636,
        name: "larvesta",
      },
      {
        id: 637,
        name: "volcarona",
      },
      {
        id: 638,
        name: "cobalion",
      },
      {
        id: 639,
        name: "terrakion",
      },
      {
        id: 640,
        name: "virizion",
      },
      {
        id: 641,
        name: "tornadus",
      },
      {
        id: 641,
        name: "tornadus-therian",
      },
      {
        id: 642,
        name: "thundurus",
      },
      {
        id: 642,
        name: "thundurus-therian",
      },
      {
        id: 643,
        name: "reshiram",
      },
      {
        id: 644,
        name: "zekrom",
      },
      {
        id: 645,
        name: "landorus",
      },
      {
        id: 645,
        name: "landorus-therian",
      },
      {
        id: 646,
        name: "kyurem",
      },
      {
        id: 646,
        name: "kyurem-white",
      },
      {
        id: 646,
        name: "kyurem-black",
      },
      {
        id: 647,
        name: "keldeo",
      },
      {
        id: 647,
        name: "keldeo-resolute",
      },
      {
        id: 648,
        name: "meloetta",
      },
      {
        id: 648,
        name: "meloetta-pirouette",
      },
      {
        id: 649,
        name: "genesect",
      },
      {
        id: 650,
        name: "chespin",
      },
      {
        id: 651,
        name: "quilladin",
      },
      {
        id: 652,
        name: "chesnaught",
      },
      {
        id: 653,
        name: "fennekin",
      },
      {
        id: 654,
        name: "braixen",
      },
      {
        id: 655,
        name: "delphox",
      },
      {
        id: 656,
        name: "froakie",
      },
      {
        id: 657,
        name: "frogadier",
      },
      {
        id: 658,
        name: "greninja",
      },
      {
        id: 658,
        name: "greninja-ash",
      },
      {
        id: 659,
        name: "bunnelby",
      },
      {
        id: 660,
        name: "diggersby",
      },
      {
        id: 666,
        name: "vivillon",
      },
      {
        id: 666,
        name: "vivillon-fancy",
      },
      {
        id: 666,
        name: "vivillon-pokeball",
      },
      {
        id: 667,
        name: "litleo",
      },
      {
        id: 668,
        name: "pyroar",
      },
      {
        id: 669,
        name: "flabébé",
      },
      {
        id: 670,
        name: "floette",
      },
      {
        id: 671,
        name: "florges",
      },
      {
        id: 672,
        name: "skiddo",
      },
      {
        id: 673,
        name: "gogoat",
      },
      {
        id: 676,
        name: "furfrou",
      },
      {
        id: 677,
        name: "espurr",
      },
      {
        id: 678,
        name: "meowstic",
      },
      {
        id: 678,
        name: "meowstic-f",
      },
      {
        id: 682,
        name: "spritzee",
      },
      {
        id: 683,
        name: "aromatisse",
      },
      {
        id: 684,
        name: "swirlix",
      },
      {
        id: 685,
        name: "slurpuff",
      },
      {
        id: 686,
        name: "inkay",
      },
      {
        id: 687,
        name: "malamar",
      },
      {
        id: 688,
        name: "binacle",
      },
      {
        id: 689,
        name: "barbaracle",
      },
      {
        id: 690,
        name: "skrelp",
      },
      {
        id: 691,
        name: "dragalge",
      },
      {
        id: 692,
        name: "clauncher",
      },
      {
        id: 693,
        name: "clawitzer",
      },
      {
        id: 694,
        name: "helioptile",
      },
      {
        id: 695,
        name: "heliolisk",
      },
      {
        id: 696,
        name: "tyrunt",
      },
      {
        id: 697,
        name: "tyrantrum",
      },
      {
        id: 698,
        name: "amaura",
      },
      {
        id: 699,
        name: "aurorus",
      },
      {
        id: 701,
        name: "hawlucha",
      },
      {
        id: 702,
        name: "dedenne",
      },
      {
        id: 710,
        name: "pumpkaboo",
      },
      {
        id: 710,
        name: "pumpkaboo-small",
      },
      {
        id: 710,
        name: "pumpkaboo-large",
      },
      {
        id: 710,
        name: "pumpkaboo-super",
      },
      {
        id: 711,
        name: "gourgeist",
      },
      {
        id: 711,
        name: "gourgeist-small",
      },
      {
        id: 711,
        name: "gourgeist-large",
      },
      {
        id: 711,
        name: "gourgeist-super",
      },
      {
        id: 712,
        name: "bergmite",
      },
      {
        id: 713,
        name: "avalugg",
      },
      {
        id: 714,
        name: "noibat",
      },
      {
        id: 715,
        name: "noivern",
      },
      {
        id: 716,
        name: "xerneas",
      },
      {
        id: 717,
        name: "yveltal",
      },
      {
        id: 719,
        name: "diancie",
      },
      {
        id: 719,
        name: "diancie-mega",
      },
      {
        id: 720,
        name: "hoopa",
      },
      {
        id: 720,
        name: "hoopa-unbound",
      },
      {
        id: 721,
        name: "volcanion",
      },
    ],
  },
  national_usum: {
    name: "Other Pokémon",
    pokemon: [
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 251,
        name: "celebi",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 323,
        name: "camerupt-mega",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
      {
        id: 386,
        name: "deoxys-attack",
      },
      {
        id: 386,
        name: "deoxys-defense",
      },
      {
        id: 386,
        name: "deoxys-speed",
      },
      {
        id: 396,
        name: "starly",
      },
      {
        id: 397,
        name: "staravia",
      },
      {
        id: 398,
        name: "staraptor",
      },
      {
        id: 399,
        name: "bidoof",
      },
      {
        id: 400,
        name: "bibarel",
      },
      {
        id: 401,
        name: "kricketot",
      },
      {
        id: 402,
        name: "kricketune",
      },
      {
        id: 403,
        name: "shinx",
      },
      {
        id: 404,
        name: "luxio",
      },
      {
        id: 405,
        name: "luxray",
      },
      {
        id: 406,
        name: "budew",
      },
      {
        id: 407,
        name: "roserade",
      },
      {
        id: 412,
        name: "burmy",
      },
      {
        id: 413,
        name: "wormadam",
      },
      {
        id: 413,
        name: "wormadam-sandy",
      },
      {
        id: 413,
        name: "wormadam-trash",
      },
      {
        id: 414,
        name: "mothim",
      },
      {
        id: 415,
        name: "combee",
      },
      {
        id: 416,
        name: "vespiquen",
      },
      {
        id: 417,
        name: "pachirisu",
      },
      {
        id: 420,
        name: "cherubi",
      },
      {
        id: 421,
        name: "cherrim",
      },
      {
        id: 421,
        name: "cherrim-sunshine",
      },
      {
        id: 422,
        name: "shellos",
      },
      {
        id: 423,
        name: "gastrodon",
      },
      {
        id: 431,
        name: "glameow",
      },
      {
        id: 432,
        name: "purugly",
      },
      {
        id: 433,
        name: "chingling",
      },
      {
        id: 434,
        name: "stunky",
      },
      {
        id: 435,
        name: "skuntank",
      },
      {
        id: 436,
        name: "bronzor",
      },
      {
        id: 437,
        name: "bronzong",
      },
      {
        id: 441,
        name: "chatot",
      },
      {
        id: 442,
        name: "spiritomb",
      },
      {
        id: 453,
        name: "croagunk",
      },
      {
        id: 454,
        name: "toxicroak",
      },
      {
        id: 455,
        name: "carnivine",
      },
      {
        id: 465,
        name: "tangrowth",
      },
      {
        id: 468,
        name: "togekiss",
      },
      {
        id: 472,
        name: "gliscor",
      },
      {
        id: 477,
        name: "dusknoir",
      },
      {
        id: 489,
        name: "phione",
      },
      {
        id: 490,
        name: "manaphy",
      },
      {
        id: 491,
        name: "darkrai",
      },
      {
        id: 492,
        name: "shaymin",
      },
      {
        id: 492,
        name: "shaymin-sky",
      },
      {
        id: 493,
        name: "arceus",
      },
      {
        id: 493,
        name: "arceus-fighting",
      },
      {
        id: 493,
        name: "arceus-flying",
      },
      {
        id: 493,
        name: "arceus-poison",
      },
      {
        id: 493,
        name: "arceus-ground",
      },
      {
        id: 493,
        name: "arceus-rock",
      },
      {
        id: 493,
        name: "arceus-bug",
      },
      {
        id: 493,
        name: "arceus-ghost",
      },
      {
        id: 493,
        name: "arceus-steel",
      },
      {
        id: 493,
        name: "arceus-fire",
      },
      {
        id: 493,
        name: "arceus-water",
      },
      {
        id: 493,
        name: "arceus-grass",
      },
      {
        id: 493,
        name: "arceus-electric",
      },
      {
        id: 493,
        name: "arceus-psychic",
      },
      {
        id: 493,
        name: "arceus-ice",
      },
      {
        id: 493,
        name: "arceus-dragon",
      },
      {
        id: 493,
        name: "arceus-dark",
      },
      {
        id: 493,
        name: "arceus-fairy",
      },
      {
        id: 494,
        name: "victini",
      },
      {
        id: 495,
        name: "snivy",
      },
      {
        id: 496,
        name: "servine",
      },
      {
        id: 497,
        name: "serperior",
      },
      {
        id: 498,
        name: "tepig",
      },
      {
        id: 499,
        name: "pignite",
      },
      {
        id: 500,
        name: "emboar",
      },
      {
        id: 501,
        name: "oshawott",
      },
      {
        id: 502,
        name: "dewott",
      },
      {
        id: 503,
        name: "samurott",
      },
      {
        id: 504,
        name: "patrat",
      },
      {
        id: 505,
        name: "watchog",
      },
      {
        id: 509,
        name: "purrloin",
      },
      {
        id: 510,
        name: "liepard",
      },
      {
        id: 511,
        name: "pansage",
      },
      {
        id: 512,
        name: "simisage",
      },
      {
        id: 513,
        name: "pansear",
      },
      {
        id: 514,
        name: "simisear",
      },
      {
        id: 515,
        name: "panpour",
      },
      {
        id: 516,
        name: "simipour",
      },
      {
        id: 517,
        name: "munna",
      },
      {
        id: 518,
        name: "musharna",
      },
      {
        id: 519,
        name: "pidove",
      },
      {
        id: 520,
        name: "tranquill",
      },
      {
        id: 521,
        name: "unfezant",
      },
      {
        id: 522,
        name: "blitzle",
      },
      {
        id: 523,
        name: "zebstrika",
      },
      {
        id: 527,
        name: "woobat",
      },
      {
        id: 528,
        name: "swoobat",
      },
      {
        id: 529,
        name: "drilbur",
      },
      {
        id: 530,
        name: "excadrill",
      },
      {
        id: 532,
        name: "timburr",
      },
      {
        id: 533,
        name: "gurdurr",
      },
      {
        id: 534,
        name: "conkeldurr",
      },
      {
        id: 535,
        name: "tympole",
      },
      {
        id: 536,
        name: "palpitoad",
      },
      {
        id: 537,
        name: "seismitoad",
      },
      {
        id: 538,
        name: "throh",
      },
      {
        id: 539,
        name: "sawk",
      },
      {
        id: 543,
        name: "venipede",
      },
      {
        id: 544,
        name: "whirlipede",
      },
      {
        id: 545,
        name: "scolipede",
      },
      {
        id: 554,
        name: "darumaka",
      },
      {
        id: 555,
        name: "darmanitan",
      },
      {
        id: 555,
        name: "darmanitan-zen",
      },
      {
        id: 556,
        name: "maractus",
      },
      {
        id: 562,
        name: "yamask",
      },
      {
        id: 563,
        name: "cofagrigus",
      },
      {
        id: 574,
        name: "gothita",
      },
      {
        id: 575,
        name: "gothorita",
      },
      {
        id: 576,
        name: "gothitelle",
      },
      {
        id: 577,
        name: "solosis",
      },
      {
        id: 578,
        name: "duosion",
      },
      {
        id: 579,
        name: "reuniclus",
      },
      {
        id: 585,
        name: "deerling",
      },
      {
        id: 586,
        name: "sawsbuck",
      },
      {
        id: 588,
        name: "karrablast",
      },
      {
        id: 589,
        name: "escavalier",
      },
      {
        id: 590,
        name: "foongus",
      },
      {
        id: 591,
        name: "amoonguss",
      },
      {
        id: 595,
        name: "joltik",
      },
      {
        id: 596,
        name: "galvantula",
      },
      {
        id: 597,
        name: "ferroseed",
      },
      {
        id: 598,
        name: "ferrothorn",
      },
      {
        id: 599,
        name: "klink",
      },
      {
        id: 600,
        name: "klang",
      },
      {
        id: 601,
        name: "klinklang",
      },
      {
        id: 613,
        name: "cubchoo",
      },
      {
        id: 614,
        name: "beartic",
      },
      {
        id: 615,
        name: "cryogonal",
      },
      {
        id: 616,
        name: "shelmet",
      },
      {
        id: 617,
        name: "accelgor",
      },
      {
        id: 626,
        name: "bouffalant",
      },
      {
        id: 631,
        name: "heatmor",
      },
      {
        id: 632,
        name: "durant",
      },
      {
        id: 633,
        name: "deino",
      },
      {
        id: 634,
        name: "zweilous",
      },
      {
        id: 635,
        name: "hydreigon",
      },
      {
        id: 647,
        name: "keldeo",
      },
      {
        id: 647,
        name: "keldeo-resolute",
      },
      {
        id: 648,
        name: "meloetta",
      },
      {
        id: 648,
        name: "meloetta-pirouette",
      },
      {
        id: 649,
        name: "genesect",
      },
      {
        id: 659,
        name: "bunnelby",
      },
      {
        id: 660,
        name: "diggersby",
      },
      {
        id: 666,
        name: "vivillon-fancy",
      },
      {
        id: 666,
        name: "vivillon-pokeball",
      },
      {
        id: 672,
        name: "skiddo",
      },
      {
        id: 673,
        name: "gogoat",
      },
      {
        id: 677,
        name: "espurr",
      },
      {
        id: 678,
        name: "meowstic",
      },
      {
        id: 678,
        name: "meowstic-f",
      },
      {
        id: 682,
        name: "spritzee",
      },
      {
        id: 683,
        name: "aromatisse",
      },
      {
        id: 684,
        name: "swirlix",
      },
      {
        id: 685,
        name: "slurpuff",
      },
      {
        id: 710,
        name: "pumpkaboo",
      },
      {
        id: 710,
        name: "pumpkaboo-small",
      },
      {
        id: 710,
        name: "pumpkaboo-large",
      },
      {
        id: 710,
        name: "pumpkaboo-super",
      },
      {
        id: 711,
        name: "gourgeist",
      },
      {
        id: 711,
        name: "gourgeist-small",
      },
      {
        id: 711,
        name: "gourgeist-large",
      },
      {
        id: 711,
        name: "gourgeist-super",
      },
      {
        id: 712,
        name: "bergmite",
      },
      {
        id: 713,
        name: "avalugg",
      },
      {
        id: 719,
        name: "diancie",
      },
      {
        id: 719,
        name: "diancie-mega",
      },
      {
        id: 720,
        name: "hoopa",
      },
      {
        id: 720,
        name: "hoopa-unbound",
      },
      {
        id: 721,
        name: "volcanion",
      },
    ],
  },
  national_bdsp: {
    name: "National Pokédex",
    pokemon: [
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 251,
        name: "celebi",
      },
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 351,
        name: "castform-sunny",
      },
      {
        id: 351,
        name: "castform-rainy",
      },
      {
        id: 351,
        name: "castform-snowy",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
      {
        id: 386,
        name: "deoxys-attack",
      },
      {
        id: 386,
        name: "deoxys-defense",
      },
      {
        id: 386,
        name: "deoxys-speed",
      },
      {
        id: 462,
        name: "magnezone",
      },
      {
        id: 463,
        name: "lickilicky",
      },
      {
        id: 464,
        name: "rhyperior",
      },
      {
        id: 465,
        name: "tangrowth",
      },
      {
        id: 466,
        name: "electivire",
      },
      {
        id: 467,
        name: "magmortar",
      },
      {
        id: 468,
        name: "togekiss",
      },
      {
        id: 469,
        name: "yanmega",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 472,
        name: "gliscor",
      },
      {
        id: 473,
        name: "mamoswine",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 475,
        name: "gallade",
      },
      {
        id: 476,
        name: "probopass",
      },
      {
        id: 477,
        name: "dusknoir",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 486,
        name: "regigigas",
      },
      {
        id: 487,
        name: "giratina",
      },
      {
        id: 487,
        name: "giratina-origin",
      },
      {
        id: 488,
        name: "cresselia",
      },
      {
        id: 489,
        name: "phione",
      },
      {
        id: 491,
        name: "darkrai",
      },
      {
        id: 492,
        name: "shaymin",
      },
      {
        id: 492,
        name: "shaymin-sky",
      },
      {
        id: 493,
        name: "arceus",
      },
      {
        id: 493,
        name: "arceus-fighting",
      },
      {
        id: 493,
        name: "arceus-flying",
      },
      {
        id: 493,
        name: "arceus-poison",
      },
      {
        id: 493,
        name: "arceus-ground",
      },
      {
        id: 493,
        name: "arceus-rock",
      },
      {
        id: 493,
        name: "arceus-bug",
      },
      {
        id: 493,
        name: "arceus-ghost",
      },
      {
        id: 493,
        name: "arceus-steel",
      },
      {
        id: 493,
        name: "arceus-fire",
      },
      {
        id: 493,
        name: "arceus-water",
      },
      {
        id: 493,
        name: "arceus-grass",
      },
      {
        id: 493,
        name: "arceus-electric",
      },
      {
        id: 493,
        name: "arceus-psychic",
      },
      {
        id: 493,
        name: "arceus-ice",
      },
      {
        id: 493,
        name: "arceus-dragon",
      },
      {
        id: 493,
        name: "arceus-dark",
      },
      {
        id: 493,
        name: "arceus-fairy",
      },
    ],
  },
  paldea: {
    name: "Paldea Pokédex",
    pokemon: [
      {
        id: 906,
        name: "sprigatito",
      },
      {
        id: 907,
        name: "floragato",
      },
      {
        id: 908,
        name: "meowscarada",
      },
      {
        id: 909,
        name: "fuecoco",
      },
      {
        id: 910,
        name: "crocalor",
      },
      {
        id: 911,
        name: "skeledirge",
      },
      {
        id: 912,
        name: "quaxly",
      },
      {
        id: 913,
        name: "quaxwell",
      },
      {
        id: 914,
        name: "quaquaval",
      },
      {
        id: 915,
        name: "lechonk",
      },
      {
        id: 916,
        name: "oinkologne",
      },
      {
        id: 916,
        name: "oinkologne-f",
      },
      {
        id: 917,
        name: "tarountula",
      },
      {
        id: 918,
        name: "spidops",
      },
      {
        id: 919,
        name: "nymble",
      },
      {
        id: 920,
        name: "lokix",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 661,
        name: "fletchling",
      },
      {
        id: 662,
        name: "fletchinder",
      },
      {
        id: 663,
        name: "talonflame",
      },
      {
        id: 921,
        name: "pawmi",
      },
      {
        id: 922,
        name: "pawmo",
      },
      {
        id: 923,
        name: "pawmot",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 734,
        name: "yungoos",
      },
      {
        id: 735,
        name: "gumshoos",
      },
      {
        id: 819,
        name: "skwovet",
      },
      {
        id: 820,
        name: "greedent",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 401,
        name: "kricketot",
      },
      {
        id: 402,
        name: "kricketune",
      },
      {
        id: 666,
        name: "vivillon",
      },
      {
        id: 666,
        name: "vivillon-fancy",
      },
      {
        id: 666,
        name: "vivillon-pokeball",
      },
      {
        id: 415,
        name: "combee",
      },
      {
        id: 416,
        name: "vespiquen",
      },
      {
        id: 821,
        name: "rookidee",
      },
      {
        id: 822,
        name: "corvisquire",
      },
      {
        id: 823,
        name: "corviknight",
      },
      {
        id: 440,
        name: "happiny",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 418,
        name: "buizel",
      },
      {
        id: 419,
        name: "floatzel",
      },
      {
        id: 194,
        name: "wooper-paldea",
      },
      {
        id: 980,
        name: "clodsire",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 833,
        name: "chewtle",
      },
      {
        id: 834,
        name: "drednaw",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 475,
        name: "gallade",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 924,
        name: "tandemaus",
      },
      {
        id: 925,
        name: "maushold",
      },
      {
        id: 925,
        name: "maushold-four",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 926,
        name: "fidough",
      },
      {
        id: 927,
        name: "dachsbun",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 761,
        name: "bounsweet",
      },
      {
        id: 762,
        name: "steenee",
      },
      {
        id: 763,
        name: "tsareena",
      },
      {
        id: 928,
        name: "smoliv",
      },
      {
        id: 929,
        name: "dolliv",
      },
      {
        id: 930,
        name: "arboliva",
      },
      {
        id: 438,
        name: "bonsly",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 744,
        name: "rockruff",
      },
      {
        id: 745,
        name: "lycanroc",
      },
      {
        id: 745,
        name: "lycanroc-midnight",
      },
      {
        id: 745,
        name: "lycanroc-dusk",
      },
      {
        id: 837,
        name: "rolycoly",
      },
      {
        id: 838,
        name: "carkol",
      },
      {
        id: 839,
        name: "coalossal",
      },
      {
        id: 403,
        name: "shinx",
      },
      {
        id: 404,
        name: "luxio",
      },
      {
        id: 405,
        name: "luxray",
      },
      {
        id: 396,
        name: "starly",
      },
      {
        id: 397,
        name: "staravia",
      },
      {
        id: 398,
        name: "staraptor",
      },
      {
        id: 741,
        name: "oricorio",
      },
      {
        id: 741,
        name: "oricorio-pom-pom",
      },
      {
        id: 741,
        name: "oricorio-pa'u",
      },
      {
        id: 741,
        name: "oricorio-sensu",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 548,
        name: "petilil",
      },
      {
        id: 549,
        name: "lilligant",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 840,
        name: "applin",
      },
      {
        id: 841,
        name: "flapple",
      },
      {
        id: 842,
        name: "appletun",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 931,
        name: "squawkabilly",
      },
      {
        id: 931,
        name: "squawkabilly-blue",
      },
      {
        id: 931,
        name: "squawkabilly-yellow",
      },
      {
        id: 931,
        name: "squawkabilly-white",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 429,
        name: "mismagius",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 739,
        name: "crabrawler",
      },
      {
        id: 740,
        name: "crabominable",
      },
      {
        id: 757,
        name: "salandit",
      },
      {
        id: 758,
        name: "salazzle",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 878,
        name: "cufant",
      },
      {
        id: 879,
        name: "copperajah",
      },
      {
        id: 443,
        name: "gible",
      },
      {
        id: 444,
        name: "gabite",
      },
      {
        id: 445,
        name: "garchomp",
      },
      {
        id: 932,
        name: "nacli",
      },
      {
        id: 933,
        name: "naclstack",
      },
      {
        id: 934,
        name: "garganacl",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 846,
        name: "arrokuda",
      },
      {
        id: 847,
        name: "barraskewda",
      },
      {
        id: 550,
        name: "basculin",
      },
      {
        id: 550,
        name: "basculin-blue-striped",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 425,
        name: "drifloon",
      },
      {
        id: 426,
        name: "drifblim",
      },
      {
        id: 669,
        name: "flabébé",
      },
      {
        id: 670,
        name: "floette",
      },
      {
        id: 671,
        name: "florges",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 436,
        name: "bronzor",
      },
      {
        id: 437,
        name: "bronzong",
      },
      {
        id: 610,
        name: "axew",
      },
      {
        id: 611,
        name: "fraxure",
      },
      {
        id: 612,
        name: "haxorus",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 979,
        name: "annihilape",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 447,
        name: "riolu",
      },
      {
        id: 448,
        name: "lucario",
      },
      {
        id: 935,
        name: "charcadet",
      },
      {
        id: 936,
        name: "armarouge",
      },
      {
        id: 937,
        name: "ceruledge",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 938,
        name: "tadbulb",
      },
      {
        id: 939,
        name: "bellibolt",
      },
      {
        id: 704,
        name: "goomy",
      },
      {
        id: 705,
        name: "sliggoo",
      },
      {
        id: 706,
        name: "goodra",
      },
      {
        id: 453,
        name: "croagunk",
      },
      {
        id: 454,
        name: "toxicroak",
      },
      {
        id: 940,
        name: "wattrel",
      },
      {
        id: 941,
        name: "kilowattrel",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 700,
        name: "sylveon",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 982,
        name: "dudunsparce",
      },
      {
        id: 982,
        name: "dudunsparce-three-segment",
      },
      {
        id: 585,
        name: "deerling",
      },
      {
        id: 586,
        name: "sawsbuck",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 981,
        name: "farigiraf",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 942,
        name: "maschiff",
      },
      {
        id: 943,
        name: "mabosstiff",
      },
      {
        id: 848,
        name: "toxel",
      },
      {
        id: 849,
        name: "toxtricity",
      },
      {
        id: 849,
        name: "toxtricity-low-key",
      },
      {
        id: 702,
        name: "dedenne",
      },
      {
        id: 417,
        name: "pachirisu",
      },
      {
        id: 944,
        name: "shroodle",
      },
      {
        id: 945,
        name: "grafaiai",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 590,
        name: "foongus",
      },
      {
        id: 591,
        name: "amoonguss",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 462,
        name: "magnezone",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 672,
        name: "skiddo",
      },
      {
        id: 673,
        name: "gogoat",
      },
      {
        id: 128,
        name: "tauros-paldea-combat",
      },
      {
        id: 128,
        name: "tauros-paldea-blaze",
      },
      {
        id: 128,
        name: "tauros-paldea-aqua",
      },
      {
        id: 667,
        name: "litleo",
      },
      {
        id: 668,
        name: "pyroar",
      },
      {
        id: 434,
        name: "stunky",
      },
      {
        id: 435,
        name: "skuntank",
      },
      {
        id: 570,
        name: "zorua",
      },
      {
        id: 571,
        name: "zoroark",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 461,
        name: "weavile",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 430,
        name: "honchkrow",
      },
      {
        id: 574,
        name: "gothita",
      },
      {
        id: 575,
        name: "gothorita",
      },
      {
        id: 576,
        name: "gothitelle",
      },
      {
        id: 854,
        name: "sinistea",
      },
      {
        id: 855,
        name: "polteageist",
      },
      {
        id: 778,
        name: "mimikyu",
      },
      {
        id: 707,
        name: "klefki",
      },
      {
        id: 876,
        name: "indeedee",
      },
      {
        id: 876,
        name: "indeedee-f",
      },
      {
        id: 946,
        name: "bramblin",
      },
      {
        id: 947,
        name: "brambleghast",
      },
      {
        id: 948,
        name: "toedscool",
      },
      {
        id: 949,
        name: "toedscruel",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 753,
        name: "fomantis",
      },
      {
        id: 754,
        name: "lurantis",
      },
      {
        id: 950,
        name: "klawf",
      },
      {
        id: 951,
        name: "capsakid",
      },
      {
        id: 952,
        name: "scovillain",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 953,
        name: "rellor",
      },
      {
        id: 954,
        name: "rabsca",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 955,
        name: "flittle",
      },
      {
        id: 956,
        name: "espathra",
      },
      {
        id: 449,
        name: "hippopotas",
      },
      {
        id: 450,
        name: "hippowdon",
      },
      {
        id: 551,
        name: "sandile",
      },
      {
        id: 552,
        name: "krokorok",
      },
      {
        id: 553,
        name: "krookodile",
      },
      {
        id: 843,
        name: "silicobra",
      },
      {
        id: 844,
        name: "sandaconda",
      },
      {
        id: 749,
        name: "mudbray",
      },
      {
        id: 750,
        name: "mudsdale",
      },
      {
        id: 636,
        name: "larvesta",
      },
      {
        id: 637,
        name: "volcarona",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 957,
        name: "tinkatink",
      },
      {
        id: 958,
        name: "tinkatuff",
      },
      {
        id: 959,
        name: "tinkaton",
      },
      {
        id: 856,
        name: "hatenna",
      },
      {
        id: 857,
        name: "hattrem",
      },
      {
        id: 858,
        name: "hatterene",
      },
      {
        id: 859,
        name: "impidimp",
      },
      {
        id: 860,
        name: "morgrem",
      },
      {
        id: 861,
        name: "grimmsnarl",
      },
      {
        id: 960,
        name: "wiglett",
      },
      {
        id: 961,
        name: "wugtrio",
      },
      {
        id: 962,
        name: "bombirdier",
      },
      {
        id: 963,
        name: "finizen",
      },
      {
        id: 964,
        name: "palafin",
      },
      {
        id: 964,
        name: "palafin-hero",
      },
      {
        id: 965,
        name: "varoom",
      },
      {
        id: 966,
        name: "revavroom",
      },
      {
        id: 967,
        name: "cyclizar",
      },
      {
        id: 968,
        name: "orthworm",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 870,
        name: "falinks",
      },
      {
        id: 701,
        name: "hawlucha",
      },
      {
        id: 442,
        name: "spiritomb",
      },
      {
        id: 714,
        name: "noibat",
      },
      {
        id: 715,
        name: "noivern",
      },
      {
        id: 885,
        name: "dreepy",
      },
      {
        id: 886,
        name: "drakloak",
      },
      {
        id: 887,
        name: "dragapult",
      },
      {
        id: 969,
        name: "glimmet",
      },
      {
        id: 970,
        name: "glimmora",
      },
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 971,
        name: "greavard",
      },
      {
        id: 972,
        name: "houndstone",
      },
      {
        id: 765,
        name: "oranguru",
      },
      {
        id: 766,
        name: "passimian",
      },
      {
        id: 775,
        name: "komala",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 874,
        name: "stonjourner",
      },
      {
        id: 875,
        name: "eiscue",
      },
      {
        id: 875,
        name: "eiscue-noice",
      },
      {
        id: 871,
        name: "pincurchin",
      },
      {
        id: 769,
        name: "sandygast",
      },
      {
        id: 770,
        name: "palossand",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 422,
        name: "shellos",
      },
      {
        id: 423,
        name: "gastrodon",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 456,
        name: "finneon",
      },
      {
        id: 457,
        name: "lumineon",
      },
      {
        id: 779,
        name: "bruxish",
      },
      {
        id: 594,
        name: "alomomola",
      },
      {
        id: 690,
        name: "skrelp",
      },
      {
        id: 691,
        name: "dragalge",
      },
      {
        id: 692,
        name: "clauncher",
      },
      {
        id: 693,
        name: "clawitzer",
      },
      {
        id: 602,
        name: "tynamo",
      },
      {
        id: 603,
        name: "eelektrik",
      },
      {
        id: 604,
        name: "eelektross",
      },
      {
        id: 747,
        name: "mareanie",
      },
      {
        id: 748,
        name: "toxapex",
      },
      {
        id: 973,
        name: "flamigo",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 872,
        name: "snom",
      },
      {
        id: 873,
        name: "frosmoth",
      },
      {
        id: 459,
        name: "snover",
      },
      {
        id: 460,
        name: "abomasnow",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 613,
        name: "cubchoo",
      },
      {
        id: 614,
        name: "beartic",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 615,
        name: "cryogonal",
      },
      {
        id: 974,
        name: "cetoddle",
      },
      {
        id: 975,
        name: "cetitan",
      },
      {
        id: 712,
        name: "bergmite",
      },
      {
        id: 713,
        name: "avalugg",
      },
      {
        id: 627,
        name: "rufflet",
      },
      {
        id: 628,
        name: "braviary",
      },
      {
        id: 624,
        name: "pawniard",
      },
      {
        id: 625,
        name: "bisharp",
      },
      {
        id: 983,
        name: "kingambit",
      },
      {
        id: 633,
        name: "deino",
      },
      {
        id: 634,
        name: "zweilous",
      },
      {
        id: 635,
        name: "hydreigon",
      },
      {
        id: 976,
        name: "veluza",
      },
      {
        id: 977,
        name: "dondozo",
      },
      {
        id: 978,
        name: "tatsugiri",
      },
      {
        id: 978,
        name: "tatsugiri-droopy",
      },
      {
        id: 978,
        name: "tatsugiri-stretchy",
      },
      {
        id: 984,
        name: "great tusk",
      },
      {
        id: 985,
        name: "scream tail",
      },
      {
        id: 986,
        name: "brute bonnet",
      },
      {
        id: 987,
        name: "flutter mane",
      },
      {
        id: 988,
        name: "slither wing",
      },
      {
        id: 989,
        name: "sandy shocks",
      },
      {
        id: 990,
        name: "iron treads",
      },
      {
        id: 991,
        name: "iron bundle",
      },
      {
        id: 992,
        name: "iron hands",
      },
      {
        id: 993,
        name: "iron jugulis",
      },
      {
        id: 994,
        name: "iron moth",
      },
      {
        id: 995,
        name: "iron thorns",
      },
      {
        id: 996,
        name: "frigibax",
      },
      {
        id: 997,
        name: "arctibax",
      },
      {
        id: 998,
        name: "baxcalibur",
      },
      {
        id: 999,
        name: "gimmighoul",
      },
      {
        id: 999,
        name: "gimmighoul-roaming",
      },
      {
        id: 1000,
        name: "gholdengo",
      },
      {
        id: 1001,
        name: "wo-chien",
      },
      {
        id: 1002,
        name: "chien-pao",
      },
      {
        id: 1003,
        name: "ting-lu",
      },
      {
        id: 1004,
        name: "chi-yu",
      },
      {
        id: 1005,
        name: "roaring moon",
      },
      {
        id: 1006,
        name: "iron valiant",
      },
      {
        id: 1007,
        name: "koraidon",
      },
      {
        id: 1008,
        name: "miraidon",
      },
    ],
  },
  paldea_other: {
    name: "Other Pokémon",
    pokemon: [
      {
        id: 26,
        name: "raichu-alola",
      },
      {
        id: 52,
        name: "meowth-alola",
      },
      {
        id: 52,
        name: "meowth-galar",
      },
      {
        id: 53,
        name: "persian-alola",
      },
      {
        id: 58,
        name: "growlithe-hisui",
      },
      {
        id: 59,
        name: "arcanine-hisui",
      },
      {
        id: 100,
        name: "voltorb-hisui",
      },
      {
        id: 101,
        name: "electrode-hisui",
      },
      {
        id: 110,
        name: "weezing-galar",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 144,
        name: "articuno-galar",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 145,
        name: "zapdos-galar",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 146,
        name: "moltres-galar",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 157,
        name: "typhlosion-hisui",
      },
      {
        id: 215,
        name: "sneasel-hisui",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
      {
        id: 386,
        name: "deoxys-attack",
      },
      {
        id: 386,
        name: "deoxys-defense",
      },
      {
        id: 386,
        name: "deoxys-speed",
      },
      {
        id: 480,
        name: "uxie",
      },
      {
        id: 481,
        name: "mesprit",
      },
      {
        id: 482,
        name: "azelf",
      },
      {
        id: 483,
        name: "dialga",
      },
      {
        id: 483,
        name: "dialga-origin",
      },
      {
        id: 484,
        name: "palkia",
      },
      {
        id: 484,
        name: "palkia-origin",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 486,
        name: "regigigas",
      },
      {
        id: 487,
        name: "giratina",
      },
      {
        id: 487,
        name: "giratina-origin",
      },
      {
        id: 488,
        name: "cresselia",
      },
      {
        id: 489,
        name: "phione",
      },
      {
        id: 490,
        name: "manaphy",
      },
      {
        id: 491,
        name: "darkrai",
      },
      {
        id: 492,
        name: "shaymin",
      },
      {
        id: 492,
        name: "shaymin-sky",
      },
      {
        id: 493,
        name: "arceus",
      },
      {
        id: 493,
        name: "arceus-fighting",
      },
      {
        id: 493,
        name: "arceus-flying",
      },
      {
        id: 493,
        name: "arceus-poison",
      },
      {
        id: 493,
        name: "arceus-ground",
      },
      {
        id: 493,
        name: "arceus-rock",
      },
      {
        id: 493,
        name: "arceus-bug",
      },
      {
        id: 493,
        name: "arceus-ghost",
      },
      {
        id: 493,
        name: "arceus-steel",
      },
      {
        id: 493,
        name: "arceus-fire",
      },
      {
        id: 493,
        name: "arceus-water",
      },
      {
        id: 493,
        name: "arceus-grass",
      },
      {
        id: 493,
        name: "arceus-electric",
      },
      {
        id: 493,
        name: "arceus-psychic",
      },
      {
        id: 493,
        name: "arceus-ice",
      },
      {
        id: 493,
        name: "arceus-dragon",
      },
      {
        id: 493,
        name: "arceus-dark",
      },
      {
        id: 493,
        name: "arceus-fairy",
      },
      {
        id: 503,
        name: "samurott-hisui",
      },
      {
        id: 549,
        name: "lilligant-hisui",
      },
      {
        id: 570,
        name: "zorua-hisui",
      },
      {
        id: 571,
        name: "zoroark-hisui",
      },
      {
        id: 628,
        name: "braviary-hisui",
      },
      {
        id: 638,
        name: "cobalion",
      },
      {
        id: 639,
        name: "terrakion",
      },
      {
        id: 640,
        name: "virizion",
      },
      {
        id: 641,
        name: "tornadus",
      },
      {
        id: 641,
        name: "tornadus-therian",
      },
      {
        id: 642,
        name: "thundurus",
      },
      {
        id: 642,
        name: "thundurus-therian",
      },
      {
        id: 643,
        name: "reshiram",
      },
      {
        id: 644,
        name: "zekrom",
      },
      {
        id: 645,
        name: "landorus",
      },
      {
        id: 645,
        name: "landorus-therian",
      },
      {
        id: 646,
        name: "kyurem",
      },
      {
        id: 646,
        name: "kyurem-white",
      },
      {
        id: 646,
        name: "kyurem-black",
      },
      {
        id: 647,
        name: "keldeo",
      },
      {
        id: 647,
        name: "keldeo-resolute",
      },
      {
        id: 648,
        name: "meloetta",
      },
      {
        id: 648,
        name: "meloetta-pirouette",
      },
      {
        id: 705,
        name: "sliggoo-hisui",
      },
      {
        id: 706,
        name: "goodra-hisui",
      },
      {
        id: 713,
        name: "avalugg-hisui",
      },
      {
        id: 719,
        name: "diancie",
      },
      {
        id: 720,
        name: "hoopa",
      },
      {
        id: 720,
        name: "hoopa-unbound",
      },
      {
        id: 721,
        name: "volcanion",
      },
      {
        id: 724,
        name: "decidueye-hisui",
      },
      {
        id: 789,
        name: "cosmog",
      },
      {
        id: 790,
        name: "cosmoem",
      },
      {
        id: 791,
        name: "solgaleo",
      },
      {
        id: 792,
        name: "lunala",
      },
      {
        id: 800,
        name: "necrozma",
      },
      {
        id: 800,
        name: "necrozma-dusk-mane",
      },
      {
        id: 800,
        name: "necrozma-dawn-wings",
      },
      {
        id: 801,
        name: "magearna",
      },
      {
        id: 801,
        name: "magearna-original",
      },
      {
        id: 863,
        name: "perrserker",
      },
      {
        id: 888,
        name: "zacian",
      },
      {
        id: 888,
        name: "zacian-crowned",
      },
      {
        id: 889,
        name: "zamazenta",
      },
      {
        id: 889,
        name: "zamazenta-crowned",
      },
      {
        id: 890,
        name: "eternatus",
      },
      {
        id: 891,
        name: "kubfu",
      },
      {
        id: 892,
        name: "urshifu",
      },
      {
        id: 892,
        name: "urshifu-rapid-strike",
      },
      {
        id: 893,
        name: "zarude",
      },
      {
        id: 894,
        name: "regieleki",
      },
      {
        id: 895,
        name: "regidrago",
      },
      {
        id: 896,
        name: "glastrier",
      },
      {
        id: 897,
        name: "spectrier",
      },
      {
        id: 898,
        name: "calyrex",
      },
      {
        id: 898,
        name: "calyrex-ice",
      },
      {
        id: 898,
        name: "calyrex-shadow",
      },
      {
        id: 899,
        name: "wyrdeer",
      },
      {
        id: 901,
        name: "ursaluna",
      },
      {
        id: 903,
        name: "sneasler",
      },
      {
        id: 905,
        name: "enamorus",
      },
      {
        id: 905,
        name: "enamorus-therian",
      },
    ],
  },
  paldea_home: {
    name: "Paldea Region",
    pokemon: [
      {
        id: 906,
        name: "sprigatito",
      },
      {
        id: 907,
        name: "floragato",
      },
      {
        id: 908,
        name: "meowscarada",
      },
      {
        id: 909,
        name: "fuecoco",
      },
      {
        id: 910,
        name: "crocalor",
      },
      {
        id: 911,
        name: "skeledirge",
      },
      {
        id: 912,
        name: "quaxly",
      },
      {
        id: 913,
        name: "quaxwell",
      },
      {
        id: 914,
        name: "quaquaval",
      },
      {
        id: 915,
        name: "lechonk",
      },
      {
        id: 916,
        name: "oinkologne",
      },
      {
        id: 916,
        name: "oinkologne-f",
      },
      {
        id: 917,
        name: "tarountula",
      },
      {
        id: 918,
        name: "spidops",
      },
      {
        id: 919,
        name: "nymble",
      },
      {
        id: 920,
        name: "lokix",
      },
      {
        id: 921,
        name: "pawmi",
      },
      {
        id: 922,
        name: "pawmo",
      },
      {
        id: 923,
        name: "pawmot",
      },
      {
        id: 924,
        name: "tandemaus",
      },
      {
        id: 925,
        name: "maushold",
      },
      {
        id: 925,
        name: "maushold-four",
      },
      {
        id: 926,
        name: "fidough",
      },
      {
        id: 927,
        name: "dachsbun",
      },
      {
        id: 928,
        name: "smoliv",
      },
      {
        id: 929,
        name: "dolliv",
      },
      {
        id: 930,
        name: "arboliva",
      },
      {
        id: 931,
        name: "squawkabilly",
      },
      {
        id: 931,
        name: "squawkabilly-blue",
      },
      {
        id: 931,
        name: "squawkabilly-yellow",
      },
      {
        id: 931,
        name: "squawkabilly-white",
      },
      {
        id: 932,
        name: "nacli",
      },
      {
        id: 933,
        name: "naclstack",
      },
      {
        id: 934,
        name: "garganacl",
      },
      {
        id: 935,
        name: "charcadet",
      },
      {
        id: 936,
        name: "armarouge",
      },
      {
        id: 937,
        name: "ceruledge",
      },
      {
        id: 938,
        name: "tadbulb",
      },
      {
        id: 939,
        name: "bellibolt",
      },
      {
        id: 940,
        name: "wattrel",
      },
      {
        id: 941,
        name: "kilowattrel",
      },
      {
        id: 942,
        name: "maschiff",
      },
      {
        id: 943,
        name: "mabosstiff",
      },
      {
        id: 944,
        name: "shroodle",
      },
      {
        id: 945,
        name: "grafaiai",
      },
      {
        id: 946,
        name: "bramblin",
      },
      {
        id: 947,
        name: "brambleghast",
      },
      {
        id: 948,
        name: "toedscool",
      },
      {
        id: 949,
        name: "toedscruel",
      },
      {
        id: 950,
        name: "klawf",
      },
      {
        id: 951,
        name: "capsakid",
      },
      {
        id: 952,
        name: "scovillain",
      },
      {
        id: 953,
        name: "rellor",
      },
      {
        id: 954,
        name: "rabsca",
      },
      {
        id: 955,
        name: "flittle",
      },
      {
        id: 956,
        name: "espathra",
      },
      {
        id: 957,
        name: "tinkatink",
      },
      {
        id: 958,
        name: "tinkatuff",
      },
      {
        id: 959,
        name: "tinkaton",
      },
      {
        id: 960,
        name: "wiglett",
      },
      {
        id: 961,
        name: "wugtrio",
      },
      {
        id: 962,
        name: "bombirdier",
      },
      {
        id: 963,
        name: "finizen",
      },
      {
        id: 964,
        name: "palafin",
      },
      {
        id: 964,
        name: "palafin-hero",
      },
      {
        id: 965,
        name: "varoom",
      },
      {
        id: 966,
        name: "revavroom",
      },
      {
        id: 967,
        name: "cyclizar",
      },
      {
        id: 968,
        name: "orthworm",
      },
      {
        id: 969,
        name: "glimmet",
      },
      {
        id: 970,
        name: "glimmora",
      },
      {
        id: 971,
        name: "greavard",
      },
      {
        id: 972,
        name: "houndstone",
      },
      {
        id: 973,
        name: "flamigo",
      },
      {
        id: 974,
        name: "cetoddle",
      },
      {
        id: 975,
        name: "cetitan",
      },
      {
        id: 976,
        name: "veluza",
      },
      {
        id: 977,
        name: "dondozo",
      },
      {
        id: 978,
        name: "tatsugiri",
      },
      {
        id: 978,
        name: "tatsugiri-droopy",
      },
      {
        id: 978,
        name: "tatsugiri-stretchy",
      },
      {
        id: 979,
        name: "annihilape",
      },
      {
        id: 980,
        name: "clodsire",
      },
      {
        id: 981,
        name: "farigiraf",
      },
      {
        id: 982,
        name: "dudunsparce",
      },
      {
        id: 982,
        name: "dudunsparce-three-segment",
      },
      {
        id: 983,
        name: "kingambit",
      },
      {
        id: 984,
        name: "great tusk",
      },
      {
        id: 985,
        name: "scream tail",
      },
      {
        id: 986,
        name: "brute bonnet",
      },
      {
        id: 987,
        name: "flutter mane",
      },
      {
        id: 988,
        name: "slither wing",
      },
      {
        id: 989,
        name: "sandy shocks",
      },
      {
        id: 990,
        name: "iron treads",
      },
      {
        id: 991,
        name: "iron bundle",
      },
      {
        id: 992,
        name: "iron hands",
      },
      {
        id: 993,
        name: "iron jugulis",
      },
      {
        id: 994,
        name: "iron moth",
      },
      {
        id: 995,
        name: "iron thorns",
      },
      {
        id: 996,
        name: "frigibax",
      },
      {
        id: 997,
        name: "arctibax",
      },
      {
        id: 998,
        name: "baxcalibur",
      },
      {
        id: 999,
        name: "gimmighoul",
      },
      {
        id: 999,
        name: "gimmighoul-roaming",
      },
      {
        id: 1000,
        name: "gholdengo",
      },
      {
        id: 1001,
        name: "wo-chien",
      },
      {
        id: 1002,
        name: "chien-pao",
      },
      {
        id: 1003,
        name: "ting-lu",
      },
      {
        id: 1004,
        name: "chi-yu",
      },
      {
        id: 1005,
        name: "roaring moon",
      },
      {
        id: 1006,
        name: "iron valiant",
      },
      {
        id: 1007,
        name: "koraidon",
      },
      {
        id: 1008,
        name: "miraidon",
      },
      {
        id: 1009,
        name: "walking wake",
      },
      {
        id: 1010,
        name: "iron leaves",
      },
      {
        id: 1011,
        name: "dipplin",
      },
      {
        id: 1012,
        name: "poltchageist",
      },
      {
        id: 1013,
        name: "sinistcha",
      },
      {
        id: 1014,
        name: "okidogi",
      },
      {
        id: 1015,
        name: "munkidori",
      },
      {
        id: 1016,
        name: "fezandipiti",
      },
      {
        id: 1017,
        name: "ogerpon",
      },
      {
        id: 1017,
        name: "ogerpon-wellspring",
      },
      {
        id: 1017,
        name: "ogerpon-hearthflame",
      },
      {
        id: 1017,
        name: "ogerpon-cornerstone",
      },
      {
        id: 1018,
        name: "archaludon",
      },
      {
        id: 1019,
        name: "hydrapple",
      },
      {
        id: 1020,
        name: "gouging fire",
      },
      {
        id: 1021,
        name: "raging bolt",
      },
      {
        id: 1022,
        name: "iron boulder",
      },
      {
        id: 1023,
        name: "iron crown",
      },
      {
        id: 1024,
        name: "terapagos",
      },
      {
        id: 1024,
        name: "terapagos-terastal",
      },
      {
        id: 1024,
        name: "terapagos-stellar",
      },
      {
        id: 1025,
        name: "pecharunt",
      },
    ],
  },
  paldea_kitakami: {
    name: "Kitakami Pokédex",
    pokemon: [
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 469,
        name: "yanmega",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 540,
        name: "sewaddle",
      },
      {
        id: 541,
        name: "swadloon",
      },
      {
        id: 542,
        name: "leavanny",
      },
      {
        id: 742,
        name: "cutiefly",
      },
      {
        id: 743,
        name: "ribombee",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 1011,
        name: "dipplin",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 424,
        name: "ambipom",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 473,
        name: "mamoswine",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 708,
        name: "phantump",
      },
      {
        id: 709,
        name: "trevenant",
      },
      {
        id: 1012,
        name: "poltchageist",
      },
      {
        id: 1013,
        name: "sinistcha",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 532,
        name: "timburr",
      },
      {
        id: 533,
        name: "gurdurr",
      },
      {
        id: 534,
        name: "conkeldurr",
      },
      {
        id: 877,
        name: "morpeko",
      },
      {
        id: 877,
        name: "morpeko-hangry",
      },
      {
        id: 446,
        name: "munchlax",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 476,
        name: "probopass",
      },
      {
        id: 736,
        name: "grubbin",
      },
      {
        id: 737,
        name: "charjabug",
      },
      {
        id: 738,
        name: "vikavolt",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 472,
        name: "gliscor",
      },
      {
        id: 629,
        name: "vullaby",
      },
      {
        id: 630,
        name: "mandibuzz",
      },
      {
        id: 782,
        name: "jangmo-o",
      },
      {
        id: 783,
        name: "hakamo-o",
      },
      {
        id: 784,
        name: "kommo-o",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 619,
        name: "mienfoo",
      },
      {
        id: 620,
        name: "mienshao",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 477,
        name: "dusknoir",
      },
      {
        id: 433,
        name: "chingling",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 607,
        name: "litwick",
      },
      {
        id: 608,
        name: "lampent",
      },
      {
        id: 609,
        name: "chandelure",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 703,
        name: "carbink",
      },
      {
        id: 580,
        name: "ducklett",
      },
      {
        id: 581,
        name: "swanna",
      },
      {
        id: 845,
        name: "cramorant",
      },
      {
        id: 550,
        name: "basculin-white-striped",
      },
      {
        id: 902,
        name: "basculegion",
      },
      {
        id: 902,
        name: "basculegion-f",
      },
      {
        id: 901,
        name: "ursaluna-bloodmoon",
      },
      {
        id: 1014,
        name: "okidogi",
      },
      {
        id: 1015,
        name: "munkidori",
      },
      {
        id: 1016,
        name: "fezandipiti",
      },
      {
        id: 1017,
        name: "ogerpon",
      },
      {
        id: 1017,
        name: "ogerpon-wellspring",
      },
      {
        id: 1017,
        name: "ogerpon-hearthflame",
      },
      {
        id: 1017,
        name: "ogerpon-cornerstone",
      },
    ],
  },
  paldea_blueberry: {
    name: "Blueberry Pokédex",
    pokemon: [
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 103,
        name: "exeggutor-alola",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 464,
        name: "rhyperior",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 466,
        name: "electivire",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 467,
        name: "magmortar",
      },
      {
        id: 900,
        name: "kleavor",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 522,
        name: "blitzle",
      },
      {
        id: 523,
        name: "zebstrika",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 868,
        name: "milcery",
      },
      {
        id: 869,
        name: "alcremie",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 731,
        name: "pikipek",
      },
      {
        id: 732,
        name: "trumbeak",
      },
      {
        id: 733,
        name: "toucannon",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 546,
        name: "cottonee",
      },
      {
        id: 547,
        name: "whimsicott",
      },
      {
        id: 764,
        name: "comfey",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 50,
        name: "diglett-alola",
      },
      {
        id: 51,
        name: "dugtrio-alola",
      },
      {
        id: 88,
        name: "grimer-alola",
      },
      {
        id: 89,
        name: "muk-alola",
      },
      {
        id: 79,
        name: "slowpoke-galar",
      },
      {
        id: 80,
        name: "slowbro-galar",
      },
      {
        id: 199,
        name: "slowking-galar",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 686,
        name: "inkay",
      },
      {
        id: 687,
        name: "malamar",
      },
      {
        id: 751,
        name: "dewpider",
      },
      {
        id: 752,
        name: "araquanid",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 74,
        name: "geodude-alola",
      },
      {
        id: 75,
        name: "graveler-alola",
      },
      {
        id: 76,
        name: "golem-alola",
      },
      {
        id: 529,
        name: "drilbur",
      },
      {
        id: 530,
        name: "excadrill",
      },
      {
        id: 677,
        name: "espurr",
      },
      {
        id: 678,
        name: "meowstic",
      },
      {
        id: 678,
        name: "meowstic-f",
      },
      {
        id: 774,
        name: "minior",
      },
      {
        id: 408,
        name: "cranidos",
      },
      {
        id: 409,
        name: "rampardos",
      },
      {
        id: 410,
        name: "shieldon",
      },
      {
        id: 411,
        name: "bastiodon",
      },
      {
        id: 572,
        name: "minccino",
      },
      {
        id: 573,
        name: "cinccino",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 559,
        name: "scraggy",
      },
      {
        id: 560,
        name: "scrafty",
      },
      {
        id: 622,
        name: "golett",
      },
      {
        id: 623,
        name: "golurk",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 595,
        name: "joltik",
      },
      {
        id: 596,
        name: "galvantula",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 211,
        name: "qwilfish-hisui",
      },
      {
        id: 904,
        name: "overqwil",
      },
      {
        id: 577,
        name: "solosis",
      },
      {
        id: 578,
        name: "duosion",
      },
      {
        id: 579,
        name: "reuniclus",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 27,
        name: "sandshrew-alola",
      },
      {
        id: 28,
        name: "sandslash-alola",
      },
      {
        id: 37,
        name: "vulpix-alola",
      },
      {
        id: 38,
        name: "ninetales-alola",
      },
      {
        id: 884,
        name: "duraludon",
      },
      {
        id: 1018,
        name: "archaludon",
      },
      {
        id: 1019,
        name: "hydrapple",
      },
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 387,
        name: "turtwig",
      },
      {
        id: 388,
        name: "grotle",
      },
      {
        id: 389,
        name: "torterra",
      },
      {
        id: 390,
        name: "chimchar",
      },
      {
        id: 391,
        name: "monferno",
      },
      {
        id: 392,
        name: "infernape",
      },
      {
        id: 393,
        name: "piplup",
      },
      {
        id: 394,
        name: "prinplup",
      },
      {
        id: 395,
        name: "empoleon",
      },
      {
        id: 495,
        name: "snivy",
      },
      {
        id: 496,
        name: "servine",
      },
      {
        id: 497,
        name: "serperior",
      },
      {
        id: 498,
        name: "tepig",
      },
      {
        id: 499,
        name: "pignite",
      },
      {
        id: 500,
        name: "emboar",
      },
      {
        id: 501,
        name: "oshawott",
      },
      {
        id: 502,
        name: "dewott",
      },
      {
        id: 503,
        name: "samurott",
      },
      {
        id: 650,
        name: "chespin",
      },
      {
        id: 651,
        name: "quilladin",
      },
      {
        id: 652,
        name: "chesnaught",
      },
      {
        id: 653,
        name: "fennekin",
      },
      {
        id: 654,
        name: "braixen",
      },
      {
        id: 655,
        name: "delphox",
      },
      {
        id: 656,
        name: "froakie",
      },
      {
        id: 657,
        name: "frogadier",
      },
      {
        id: 658,
        name: "greninja",
      },
      {
        id: 722,
        name: "rowlet",
      },
      {
        id: 723,
        name: "dartrix",
      },
      {
        id: 724,
        name: "decidueye",
      },
      {
        id: 725,
        name: "litten",
      },
      {
        id: 726,
        name: "torracat",
      },
      {
        id: 727,
        name: "incineroar",
      },
      {
        id: 728,
        name: "popplio",
      },
      {
        id: 729,
        name: "brionne",
      },
      {
        id: 730,
        name: "primarina",
      },
      {
        id: 810,
        name: "grookey",
      },
      {
        id: 811,
        name: "thwackey",
      },
      {
        id: 812,
        name: "rillaboom",
      },
      {
        id: 813,
        name: "scorbunny",
      },
      {
        id: 814,
        name: "raboot",
      },
      {
        id: 815,
        name: "cinderace",
      },
      {
        id: 816,
        name: "sobble",
      },
      {
        id: 817,
        name: "drizzile",
      },
      {
        id: 818,
        name: "inteleon",
      },
      {
        id: 1020,
        name: "gouging fire",
      },
      {
        id: 1021,
        name: "raging bolt",
      },
      {
        id: 1023,
        name: "iron crown",
      },
      {
        id: 1022,
        name: "iron boulder",
      },
      {
        id: 1024,
        name: "terapagos",
      },
      {
        id: 1024,
        name: "terapagos-terastal",
      },
      {
        id: 1024,
        name: "terapagos-stellar",
      },
      {
        id: 1009,
        name: "walking wake",
      },
      {
        id: 1010,
        name: "iron leaves",
      },
      {
        id: 1025,
        name: "pecharunt",
      },
    ],
  },
  colo_gift: {
    name: "Gift Pokémon",
    pokemon: [
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 311,
        name: "plusle",
      },
    ],
  },
  colo_snag: {
    name: "Snaggable Pokémon",
    pokemon: [
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 376,
        name: "metagross",
      },
    ],
  },
  colo_transfer: {
    name: "Transferable Pokémon",
    pokemon: [
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 251,
        name: "celebi",
      },
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
    ],
  },
  xd_gift: {
    name: "Gift Pokémon",
    pokemon: [
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 155,
        name: "cyndaquil",
      },
      {
        id: 156,
        name: "quilava",
      },
      {
        id: 157,
        name: "typhlosion",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 175,
        name: "togepi",
      },
      {
        id: 176,
        name: "togetic",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 213,
        name: "shuckle",
      },
      {
        id: 239,
        name: "elekid",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
    ],
  },
  xd_snag: {
    name: "Snaggable Pokémon",
    pokemon: [
      {
        id: 12,
        name: "butterfree",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 20,
        name: "raticate",
      },
      {
        id: 21,
        name: "spearow",
      },
      {
        id: 22,
        name: "fearow",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 37,
        name: "vulpix",
      },
      {
        id: 38,
        name: "ninetales",
      },
      {
        id: 46,
        name: "paras",
      },
      {
        id: 47,
        name: "parasect",
      },
      {
        id: 49,
        name: "venomoth",
      },
      {
        id: 51,
        name: "dugtrio",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 55,
        name: "golduck",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 58,
        name: "growlithe",
      },
      {
        id: 59,
        name: "arcanine",
      },
      {
        id: 62,
        name: "poliwrath",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 78,
        name: "rapidash",
      },
      {
        id: 82,
        name: "magneton",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 85,
        name: "dodrio",
      },
      {
        id: 86,
        name: "seel",
      },
      {
        id: 87,
        name: "dewgong",
      },
      {
        id: 88,
        name: "grimer",
      },
      {
        id: 89,
        name: "muk",
      },
      {
        id: 90,
        name: "shellder",
      },
      {
        id: 91,
        name: "cloyster",
      },
      {
        id: 97,
        name: "hypno",
      },
      {
        id: 100,
        name: "voltorb",
      },
      {
        id: 101,
        name: "electrode",
      },
      {
        id: 103,
        name: "exeggutor",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 106,
        name: "hitmonlee",
      },
      {
        id: 107,
        name: "hitmonchan",
      },
      {
        id: 108,
        name: "lickitung",
      },
      {
        id: 112,
        name: "rhydon",
      },
      {
        id: 113,
        name: "chansey",
      },
      {
        id: 114,
        name: "tangela",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 125,
        name: "electabuzz",
      },
      {
        id: 126,
        name: "magmar",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 128,
        name: "tauros",
      },
      {
        id: 131,
        name: "lapras",
      },
      {
        id: 143,
        name: "snorlax",
      },
      {
        id: 144,
        name: "articuno",
      },
      {
        id: 145,
        name: "zapdos",
      },
      {
        id: 146,
        name: "moltres",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 165,
        name: "ledyba",
      },
      {
        id: 166,
        name: "ledian",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 177,
        name: "natu",
      },
      {
        id: 178,
        name: "xatu",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 204,
        name: "pineco",
      },
      {
        id: 205,
        name: "forretress",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 216,
        name: "teddiursa",
      },
      {
        id: 217,
        name: "ursaring",
      },
      {
        id: 219,
        name: "magcargo",
      },
      {
        id: 220,
        name: "swinub",
      },
      {
        id: 221,
        name: "piloswine",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 242,
        name: "blissey",
      },
      {
        id: 249,
        name: "lugia",
      },
      {
        id: 261,
        name: "poochyena",
      },
      {
        id: 262,
        name: "mightyena",
      },
      {
        id: 273,
        name: "seedot",
      },
      {
        id: 274,
        name: "nuzleaf",
      },
      {
        id: 275,
        name: "shiftry",
      },
      {
        id: 277,
        name: "swellow",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 285,
        name: "shroomish",
      },
      {
        id: 286,
        name: "breloom",
      },
      {
        id: 296,
        name: "makuhita",
      },
      {
        id: 297,
        name: "hariyama",
      },
      {
        id: 299,
        name: "nosepass",
      },
      {
        id: 301,
        name: "delcatty",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 337,
        name: "lunatone",
      },
      {
        id: 338,
        name: "solrock",
      },
      {
        id: 343,
        name: "baltoy",
      },
      {
        id: 344,
        name: "claydol",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 355,
        name: "duskull",
      },
      {
        id: 356,
        name: "dusclops",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 363,
        name: "spheal",
      },
      {
        id: 364,
        name: "sealeo",
      },
      {
        id: 365,
        name: "walrein",
      },
      {
        id: 373,
        name: "salamence",
      },
    ],
  },
  xd_pokespot: {
    name: "Poké Spot Pokémon",
    pokemon: [
      {
        id: 27,
        name: "sandshrew",
      },
      {
        id: 28,
        name: "sandslash",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 187,
        name: "hoppip",
      },
      {
        id: 188,
        name: "skiploom",
      },
      {
        id: 189,
        name: "jumpluff",
      },
      {
        id: 194,
        name: "wooper",
      },
      {
        id: 195,
        name: "quagsire",
      },
      {
        id: 207,
        name: "gligar",
      },
      {
        id: 231,
        name: "phanpy",
      },
      {
        id: 232,
        name: "donphan",
      },
      {
        id: 283,
        name: "surskit",
      },
      {
        id: 284,
        name: "masquerain",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 328,
        name: "trapinch",
      },
      {
        id: 329,
        name: "vibrava",
      },
      {
        id: 330,
        name: "flygon",
      },
    ],
  },
  xd_transfer: {
    name: "Transferable Pokémon",
    pokemon: [
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 10,
        name: "caterpie",
      },
      {
        id: 11,
        name: "metapod",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 19,
        name: "rattata",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 29,
        name: "nidoran-f",
      },
      {
        id: 30,
        name: "nidorina",
      },
      {
        id: 31,
        name: "nidoqueen",
      },
      {
        id: 32,
        name: "nidoran-m",
      },
      {
        id: 33,
        name: "nidorino",
      },
      {
        id: 34,
        name: "nidoking",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 43,
        name: "oddish",
      },
      {
        id: 44,
        name: "gloom",
      },
      {
        id: 45,
        name: "vileplume",
      },
      {
        id: 48,
        name: "venonat",
      },
      {
        id: 50,
        name: "diglett",
      },
      {
        id: 54,
        name: "psyduck",
      },
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 60,
        name: "poliwag",
      },
      {
        id: 61,
        name: "poliwhirl",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 72,
        name: "tentacool",
      },
      {
        id: 73,
        name: "tentacruel",
      },
      {
        id: 74,
        name: "geodude",
      },
      {
        id: 75,
        name: "graveler",
      },
      {
        id: 76,
        name: "golem",
      },
      {
        id: 77,
        name: "ponyta",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 81,
        name: "magnemite",
      },
      {
        id: 84,
        name: "doduo",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 96,
        name: "drowzee",
      },
      {
        id: 98,
        name: "krabby",
      },
      {
        id: 99,
        name: "kingler",
      },
      {
        id: 102,
        name: "exeggcute",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 109,
        name: "koffing",
      },
      {
        id: 110,
        name: "weezing",
      },
      {
        id: 111,
        name: "rhyhorn",
      },
      {
        id: 116,
        name: "horsea",
      },
      {
        id: 117,
        name: "seadra",
      },
      {
        id: 118,
        name: "goldeen",
      },
      {
        id: 119,
        name: "seaking",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 124,
        name: "jynx",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 132,
        name: "ditto",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 138,
        name: "omanyte",
      },
      {
        id: 139,
        name: "omastar",
      },
      {
        id: 140,
        name: "kabuto",
      },
      {
        id: 141,
        name: "kabutops",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 151,
        name: "mew",
      },
      {
        id: 161,
        name: "sentret",
      },
      {
        id: 162,
        name: "furret",
      },
      {
        id: 163,
        name: "hoothoot",
      },
      {
        id: 164,
        name: "noctowl",
      },
      {
        id: 170,
        name: "chinchou",
      },
      {
        id: 171,
        name: "lanturn",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 182,
        name: "bellossom",
      },
      {
        id: 183,
        name: "marill",
      },
      {
        id: 184,
        name: "azumarill",
      },
      {
        id: 185,
        name: "sudowoodo",
      },
      {
        id: 186,
        name: "politoed",
      },
      {
        id: 190,
        name: "aipom",
      },
      {
        id: 191,
        name: "sunkern",
      },
      {
        id: 192,
        name: "sunflora",
      },
      {
        id: 193,
        name: "yanma",
      },
      {
        id: 198,
        name: "murkrow",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 200,
        name: "misdreavus",
      },
      {
        id: 201,
        name: "unown",
      },
      {
        id: 202,
        name: "wobbuffet",
      },
      {
        id: 203,
        name: "girafarig",
      },
      {
        id: 206,
        name: "dunsparce",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 209,
        name: "snubbull",
      },
      {
        id: 210,
        name: "granbull",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 215,
        name: "sneasel",
      },
      {
        id: 218,
        name: "slugma",
      },
      {
        id: 222,
        name: "corsola",
      },
      {
        id: 223,
        name: "remoraid",
      },
      {
        id: 224,
        name: "octillery",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 226,
        name: "mantine",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 230,
        name: "kingdra",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 234,
        name: "stantler",
      },
      {
        id: 235,
        name: "smeargle",
      },
      {
        id: 236,
        name: "tyrogue",
      },
      {
        id: 237,
        name: "hitmontop",
      },
      {
        id: 238,
        name: "smoochum",
      },
      {
        id: 240,
        name: "magby",
      },
      {
        id: 241,
        name: "miltank",
      },
      {
        id: 243,
        name: "raikou",
      },
      {
        id: 244,
        name: "entei",
      },
      {
        id: 245,
        name: "suicune",
      },
      {
        id: 250,
        name: "ho-oh",
      },
      {
        id: 251,
        name: "celebi",
      },
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 263,
        name: "zigzagoon",
      },
      {
        id: 264,
        name: "linoone",
      },
      {
        id: 265,
        name: "wurmple",
      },
      {
        id: 266,
        name: "silcoon",
      },
      {
        id: 267,
        name: "beautifly",
      },
      {
        id: 268,
        name: "cascoon",
      },
      {
        id: 269,
        name: "dustox",
      },
      {
        id: 270,
        name: "lotad",
      },
      {
        id: 271,
        name: "lombre",
      },
      {
        id: 272,
        name: "ludicolo",
      },
      {
        id: 276,
        name: "taillow",
      },
      {
        id: 278,
        name: "wingull",
      },
      {
        id: 279,
        name: "pelipper",
      },
      {
        id: 287,
        name: "slakoth",
      },
      {
        id: 288,
        name: "vigoroth",
      },
      {
        id: 289,
        name: "slaking",
      },
      {
        id: 290,
        name: "nincada",
      },
      {
        id: 291,
        name: "ninjask",
      },
      {
        id: 292,
        name: "shedinja",
      },
      {
        id: 293,
        name: "whismur",
      },
      {
        id: 294,
        name: "loudred",
      },
      {
        id: 295,
        name: "exploud",
      },
      {
        id: 298,
        name: "azurill",
      },
      {
        id: 300,
        name: "skitty",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 311,
        name: "plusle",
      },
      {
        id: 312,
        name: "minun",
      },
      {
        id: 313,
        name: "volbeat",
      },
      {
        id: 314,
        name: "illumise",
      },
      {
        id: 320,
        name: "wailmer",
      },
      {
        id: 321,
        name: "wailord",
      },
      {
        id: 324,
        name: "torkoal",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 327,
        name: "spinda",
      },
      {
        id: 331,
        name: "cacnea",
      },
      {
        id: 332,
        name: "cacturne",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 339,
        name: "barboach",
      },
      {
        id: 340,
        name: "whiscash",
      },
      {
        id: 341,
        name: "corphish",
      },
      {
        id: 342,
        name: "crawdaunt",
      },
      {
        id: 345,
        name: "lileep",
      },
      {
        id: 346,
        name: "cradily",
      },
      {
        id: 347,
        name: "anorith",
      },
      {
        id: 348,
        name: "armaldo",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 351,
        name: "castform",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 357,
        name: "tropius",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 360,
        name: "wynaut",
      },
      {
        id: 366,
        name: "clamperl",
      },
      {
        id: 367,
        name: "huntail",
      },
      {
        id: 368,
        name: "gorebyss",
      },
      {
        id: 369,
        name: "relicanth",
      },
      {
        id: 370,
        name: "luvdisc",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 377,
        name: "regirock",
      },
      {
        id: 378,
        name: "regice",
      },
      {
        id: 379,
        name: "registeel",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 385,
        name: "jirachi",
      },
      {
        id: 386,
        name: "deoxys",
      },
    ],
  },
  lumiose: {
    name: "Lumiose Pokédex",
    pokemon: [
      {
        id: 152,
        name: "chikorita",
      },
      {
        id: 153,
        name: "bayleef",
      },
      {
        id: 154,
        name: "meganium",
      },
      {
        id: 154,
        name: "meganium-mega",
      },
      {
        id: 498,
        name: "tepig",
      },
      {
        id: 499,
        name: "pignite",
      },
      {
        id: 500,
        name: "emboar",
      },
      {
        id: 500,
        name: "emboar-mega",
      },
      {
        id: 158,
        name: "totodile",
      },
      {
        id: 159,
        name: "croconaw",
      },
      {
        id: 160,
        name: "feraligatr",
      },
      {
        id: 160,
        name: "feraligatr-mega",
      },
      {
        id: 661,
        name: "fletchling",
      },
      {
        id: 662,
        name: "fletchinder",
      },
      {
        id: 663,
        name: "talonflame",
      },
      {
        id: 659,
        name: "bunnelby",
      },
      {
        id: 660,
        name: "diggersby",
      },
      {
        id: 666,
        name: "vivillon",
      },
      {
        id: 666,
        name: "vivillon-fancy",
      },
      {
        id: 666,
        name: "vivillon-pokeball",
      },
      {
        id: 13,
        name: "weedle",
      },
      {
        id: 14,
        name: "kakuna",
      },
      {
        id: 15,
        name: "beedrill",
      },
      {
        id: 15,
        name: "beedrill-mega",
      },
      {
        id: 16,
        name: "pidgey",
      },
      {
        id: 17,
        name: "pidgeotto",
      },
      {
        id: 18,
        name: "pidgeot",
      },
      {
        id: 18,
        name: "pidgeot-mega",
      },
      {
        id: 179,
        name: "mareep",
      },
      {
        id: 180,
        name: "flaaffy",
      },
      {
        id: 181,
        name: "ampharos",
      },
      {
        id: 181,
        name: "ampharos-mega",
      },
      {
        id: 504,
        name: "patrat",
      },
      {
        id: 505,
        name: "watchog",
      },
      {
        id: 406,
        name: "budew",
      },
      {
        id: 315,
        name: "roselia",
      },
      {
        id: 407,
        name: "roserade",
      },
      {
        id: 129,
        name: "magikarp",
      },
      {
        id: 130,
        name: "gyarados",
      },
      {
        id: 130,
        name: "gyarados-mega",
      },
      {
        id: 688,
        name: "binacle",
      },
      {
        id: 689,
        name: "barbaracle",
      },
      {
        id: 689,
        name: "barbaracle-mega",
      },
      {
        id: 120,
        name: "staryu",
      },
      {
        id: 121,
        name: "starmie",
      },
      {
        id: 121,
        name: "starmie-mega",
      },
      {
        id: 669,
        name: "flabébé",
      },
      {
        id: 670,
        name: "floette",
      },
      {
        id: 670,
        name: "floette-eternal",
      },
      {
        id: 670,
        name: "floette-mega",
      },
      {
        id: 671,
        name: "florges",
      },
      {
        id: 672,
        name: "skiddo",
      },
      {
        id: 673,
        name: "gogoat",
      },
      {
        id: 677,
        name: "espurr",
      },
      {
        id: 678,
        name: "meowstic",
      },
      {
        id: 678,
        name: "meowstic-f",
      },
      {
        id: 678,
        name: "meowstic-m-mega",
      },
      {
        id: 667,
        name: "litleo",
      },
      {
        id: 668,
        name: "pyroar",
      },
      {
        id: 668,
        name: "pyroar-mega",
      },
      {
        id: 674,
        name: "pancham",
      },
      {
        id: 675,
        name: "pangoro",
      },
      {
        id: 568,
        name: "trubbish",
      },
      {
        id: 569,
        name: "garbodor",
      },
      {
        id: 702,
        name: "dedenne",
      },
      {
        id: 172,
        name: "pichu",
      },
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 26,
        name: "raichu",
      },
      {
        id: 26,
        name: "raichu-alola",
      },
      {
        id: 26,
        name: "raichu-mega-x",
      },
      {
        id: 26,
        name: "raichu-mega-y",
      },
      {
        id: 173,
        name: "cleffa",
      },
      {
        id: 35,
        name: "clefairy",
      },
      {
        id: 36,
        name: "clefable",
      },
      {
        id: 36,
        name: "clefable-mega",
      },
      {
        id: 167,
        name: "spinarak",
      },
      {
        id: 168,
        name: "ariados",
      },
      {
        id: 23,
        name: "ekans",
      },
      {
        id: 24,
        name: "arbok",
      },
      {
        id: 63,
        name: "abra",
      },
      {
        id: 64,
        name: "kadabra",
      },
      {
        id: 65,
        name: "alakazam",
      },
      {
        id: 65,
        name: "alakazam-mega",
      },
      {
        id: 92,
        name: "gastly",
      },
      {
        id: 93,
        name: "haunter",
      },
      {
        id: 94,
        name: "gengar",
      },
      {
        id: 94,
        name: "gengar-mega",
      },
      {
        id: 543,
        name: "venipede",
      },
      {
        id: 544,
        name: "whirlipede",
      },
      {
        id: 545,
        name: "scolipede",
      },
      {
        id: 545,
        name: "scolipede-mega",
      },
      {
        id: 679,
        name: "honedge",
      },
      {
        id: 680,
        name: "doublade",
      },
      {
        id: 681,
        name: "aegislash",
      },
      {
        id: 681,
        name: "aegislash-blade",
      },
      {
        id: 69,
        name: "bellsprout",
      },
      {
        id: 70,
        name: "weepinbell",
      },
      {
        id: 71,
        name: "victreebel",
      },
      {
        id: 71,
        name: "victreebel-mega",
      },
      {
        id: 511,
        name: "pansage",
      },
      {
        id: 512,
        name: "simisage",
      },
      {
        id: 513,
        name: "pansear",
      },
      {
        id: 514,
        name: "simisear",
      },
      {
        id: 515,
        name: "panpour",
      },
      {
        id: 516,
        name: "simipour",
      },
      {
        id: 307,
        name: "meditite",
      },
      {
        id: 308,
        name: "medicham",
      },
      {
        id: 308,
        name: "medicham-mega",
      },
      {
        id: 309,
        name: "electrike",
      },
      {
        id: 310,
        name: "manectric",
      },
      {
        id: 310,
        name: "manectric-mega",
      },
      {
        id: 280,
        name: "ralts",
      },
      {
        id: 281,
        name: "kirlia",
      },
      {
        id: 282,
        name: "gardevoir",
      },
      {
        id: 282,
        name: "gardevoir-mega",
      },
      {
        id: 475,
        name: "gallade",
      },
      {
        id: 475,
        name: "gallade-mega",
      },
      {
        id: 228,
        name: "houndour",
      },
      {
        id: 229,
        name: "houndoom",
      },
      {
        id: 229,
        name: "houndoom-mega",
      },
      {
        id: 333,
        name: "swablu",
      },
      {
        id: 334,
        name: "altaria",
      },
      {
        id: 334,
        name: "altaria-mega",
      },
      {
        id: 531,
        name: "audino",
      },
      {
        id: 531,
        name: "audino-mega",
      },
      {
        id: 682,
        name: "spritzee",
      },
      {
        id: 683,
        name: "aromatisse",
      },
      {
        id: 684,
        name: "swirlix",
      },
      {
        id: 685,
        name: "slurpuff",
      },
      {
        id: 133,
        name: "eevee",
      },
      {
        id: 134,
        name: "vaporeon",
      },
      {
        id: 135,
        name: "jolteon",
      },
      {
        id: 136,
        name: "flareon",
      },
      {
        id: 196,
        name: "espeon",
      },
      {
        id: 197,
        name: "umbreon",
      },
      {
        id: 470,
        name: "leafeon",
      },
      {
        id: 471,
        name: "glaceon",
      },
      {
        id: 700,
        name: "sylveon",
      },
      {
        id: 427,
        name: "buneary",
      },
      {
        id: 428,
        name: "lopunny",
      },
      {
        id: 428,
        name: "lopunny-mega",
      },
      {
        id: 353,
        name: "shuppet",
      },
      {
        id: 354,
        name: "banette",
      },
      {
        id: 354,
        name: "banette-mega",
      },
      {
        id: 582,
        name: "vanillite",
      },
      {
        id: 583,
        name: "vanillish",
      },
      {
        id: 584,
        name: "vanilluxe",
      },
      {
        id: 322,
        name: "numel",
      },
      {
        id: 323,
        name: "camerupt",
      },
      {
        id: 323,
        name: "camerupt-mega",
      },
      {
        id: 449,
        name: "hippopotas",
      },
      {
        id: 450,
        name: "hippowdon",
      },
      {
        id: 529,
        name: "drilbur",
      },
      {
        id: 530,
        name: "excadrill",
      },
      {
        id: 530,
        name: "excadrill-mega",
      },
      {
        id: 551,
        name: "sandile",
      },
      {
        id: 552,
        name: "krokorok",
      },
      {
        id: 553,
        name: "krookodile",
      },
      {
        id: 66,
        name: "machop",
      },
      {
        id: 67,
        name: "machoke",
      },
      {
        id: 68,
        name: "machamp",
      },
      {
        id: 443,
        name: "gible",
      },
      {
        id: 444,
        name: "gabite",
      },
      {
        id: 445,
        name: "garchomp",
      },
      {
        id: 445,
        name: "garchomp-mega",
      },
      {
        id: 445,
        name: "garchomp-mega-z",
      },
      {
        id: 703,
        name: "carbink",
      },
      {
        id: 302,
        name: "sableye",
      },
      {
        id: 302,
        name: "sableye-mega",
      },
      {
        id: 303,
        name: "mawile",
      },
      {
        id: 303,
        name: "mawile-mega",
      },
      {
        id: 359,
        name: "absol",
      },
      {
        id: 359,
        name: "absol-mega",
      },
      {
        id: 359,
        name: "absol-mega-z",
      },
      {
        id: 447,
        name: "riolu",
      },
      {
        id: 448,
        name: "lucario",
      },
      {
        id: 448,
        name: "lucario-mega",
      },
      {
        id: 448,
        name: "lucario-mega-z",
      },
      {
        id: 79,
        name: "slowpoke",
      },
      {
        id: 79,
        name: "slowpoke-galar",
      },
      {
        id: 80,
        name: "slowbro",
      },
      {
        id: 80,
        name: "slowbro-mega",
      },
      {
        id: 80,
        name: "slowbro-galar",
      },
      {
        id: 199,
        name: "slowking",
      },
      {
        id: 199,
        name: "slowking-galar",
      },
      {
        id: 318,
        name: "carvanha",
      },
      {
        id: 319,
        name: "sharpedo",
      },
      {
        id: 319,
        name: "sharpedo-mega",
      },
      {
        id: 602,
        name: "tynamo",
      },
      {
        id: 603,
        name: "eelektrik",
      },
      {
        id: 604,
        name: "eelektross",
      },
      {
        id: 604,
        name: "eelektross-mega",
      },
      {
        id: 147,
        name: "dratini",
      },
      {
        id: 148,
        name: "dragonair",
      },
      {
        id: 149,
        name: "dragonite",
      },
      {
        id: 149,
        name: "dragonite-mega",
      },
      {
        id: 1,
        name: "bulbasaur",
      },
      {
        id: 2,
        name: "ivysaur",
      },
      {
        id: 3,
        name: "venusaur",
      },
      {
        id: 3,
        name: "venusaur-mega",
      },
      {
        id: 4,
        name: "charmander",
      },
      {
        id: 5,
        name: "charmeleon",
      },
      {
        id: 6,
        name: "charizard",
      },
      {
        id: 6,
        name: "charizard-mega-x",
      },
      {
        id: 6,
        name: "charizard-mega-y",
      },
      {
        id: 7,
        name: "squirtle",
      },
      {
        id: 8,
        name: "wartortle",
      },
      {
        id: 9,
        name: "blastoise",
      },
      {
        id: 9,
        name: "blastoise-mega",
      },
      {
        id: 618,
        name: "stunfisk",
      },
      {
        id: 618,
        name: "stunfisk-galar",
      },
      {
        id: 676,
        name: "furfrou",
      },
      {
        id: 686,
        name: "inkay",
      },
      {
        id: 687,
        name: "malamar",
      },
      {
        id: 687,
        name: "malamar-mega",
      },
      {
        id: 690,
        name: "skrelp",
      },
      {
        id: 691,
        name: "dragalge",
      },
      {
        id: 691,
        name: "dragalge-mega",
      },
      {
        id: 692,
        name: "clauncher",
      },
      {
        id: 693,
        name: "clawitzer",
      },
      {
        id: 704,
        name: "goomy",
      },
      {
        id: 705,
        name: "sliggoo",
      },
      {
        id: 705,
        name: "sliggoo-hisui",
      },
      {
        id: 706,
        name: "goodra",
      },
      {
        id: 706,
        name: "goodra-hisui",
      },
      {
        id: 225,
        name: "delibird",
      },
      {
        id: 361,
        name: "snorunt",
      },
      {
        id: 362,
        name: "glalie",
      },
      {
        id: 362,
        name: "glalie-mega",
      },
      {
        id: 478,
        name: "froslass",
      },
      {
        id: 478,
        name: "froslass-mega",
      },
      {
        id: 459,
        name: "snover",
      },
      {
        id: 460,
        name: "abomasnow",
      },
      {
        id: 460,
        name: "abomasnow-mega",
      },
      {
        id: 712,
        name: "bergmite",
      },
      {
        id: 713,
        name: "avalugg",
      },
      {
        id: 713,
        name: "avalugg-hisui",
      },
      {
        id: 123,
        name: "scyther",
      },
      {
        id: 212,
        name: "scizor",
      },
      {
        id: 212,
        name: "scizor-mega",
      },
      {
        id: 127,
        name: "pinsir",
      },
      {
        id: 127,
        name: "pinsir-mega",
      },
      {
        id: 214,
        name: "heracross",
      },
      {
        id: 214,
        name: "heracross-mega",
      },
      {
        id: 587,
        name: "emolga",
      },
      {
        id: 701,
        name: "hawlucha",
      },
      {
        id: 701,
        name: "hawlucha-mega",
      },
      {
        id: 708,
        name: "phantump",
      },
      {
        id: 709,
        name: "trevenant",
      },
      {
        id: 559,
        name: "scraggy",
      },
      {
        id: 560,
        name: "scrafty",
      },
      {
        id: 560,
        name: "scrafty-mega",
      },
      {
        id: 714,
        name: "noibat",
      },
      {
        id: 715,
        name: "noivern",
      },
      {
        id: 707,
        name: "klefki",
      },
      {
        id: 607,
        name: "litwick",
      },
      {
        id: 608,
        name: "lampent",
      },
      {
        id: 609,
        name: "chandelure",
      },
      {
        id: 609,
        name: "chandelure-mega",
      },
      {
        id: 142,
        name: "aerodactyl",
      },
      {
        id: 142,
        name: "aerodactyl-mega",
      },
      {
        id: 696,
        name: "tyrunt",
      },
      {
        id: 697,
        name: "tyrantrum",
      },
      {
        id: 698,
        name: "amaura",
      },
      {
        id: 699,
        name: "aurorus",
      },
      {
        id: 95,
        name: "onix",
      },
      {
        id: 208,
        name: "steelix",
      },
      {
        id: 208,
        name: "steelix-mega",
      },
      {
        id: 304,
        name: "aron",
      },
      {
        id: 305,
        name: "lairon",
      },
      {
        id: 306,
        name: "aggron",
      },
      {
        id: 306,
        name: "aggron-mega",
      },
      {
        id: 694,
        name: "helioptile",
      },
      {
        id: 695,
        name: "heliolisk",
      },
      {
        id: 710,
        name: "pumpkaboo",
      },
      {
        id: 710,
        name: "pumpkaboo-small",
      },
      {
        id: 710,
        name: "pumpkaboo-large",
      },
      {
        id: 710,
        name: "pumpkaboo-super",
      },
      {
        id: 711,
        name: "gourgeist",
      },
      {
        id: 711,
        name: "gourgeist-small",
      },
      {
        id: 711,
        name: "gourgeist-large",
      },
      {
        id: 711,
        name: "gourgeist-super",
      },
      {
        id: 246,
        name: "larvitar",
      },
      {
        id: 247,
        name: "pupitar",
      },
      {
        id: 248,
        name: "tyranitar",
      },
      {
        id: 248,
        name: "tyranitar-mega",
      },
      {
        id: 656,
        name: "froakie",
      },
      {
        id: 657,
        name: "frogadier",
      },
      {
        id: 658,
        name: "greninja",
      },
      {
        id: 658,
        name: "greninja-mega",
      },
      {
        id: 870,
        name: "falinks",
      },
      {
        id: 870,
        name: "falinks-mega",
      },
      {
        id: 650,
        name: "chespin",
      },
      {
        id: 651,
        name: "quilladin",
      },
      {
        id: 652,
        name: "chesnaught",
      },
      {
        id: 652,
        name: "chesnaught-mega",
      },
      {
        id: 227,
        name: "skarmory",
      },
      {
        id: 227,
        name: "skarmory-mega",
      },
      {
        id: 653,
        name: "fennekin",
      },
      {
        id: 654,
        name: "braixen",
      },
      {
        id: 655,
        name: "delphox",
      },
      {
        id: 655,
        name: "delphox-mega",
      },
      {
        id: 371,
        name: "bagon",
      },
      {
        id: 372,
        name: "shelgon",
      },
      {
        id: 373,
        name: "salamence",
      },
      {
        id: 373,
        name: "salamence-mega",
      },
      {
        id: 115,
        name: "kangaskhan",
      },
      {
        id: 115,
        name: "kangaskhan-mega",
      },
      {
        id: 780,
        name: "drampa",
      },
      {
        id: 780,
        name: "drampa-mega",
      },
      {
        id: 374,
        name: "beldum",
      },
      {
        id: 375,
        name: "metang",
      },
      {
        id: 376,
        name: "metagross",
      },
      {
        id: 376,
        name: "metagross-mega",
      },
      {
        id: 716,
        name: "xerneas",
      },
      {
        id: 717,
        name: "yveltal",
      },
      {
        id: 718,
        name: "zygarde",
      },
      {
        id: 718,
        name: "zygarde-10%",
      },
      {
        id: 718,
        name: "zygarde-complete",
      },
      {
        id: 718,
        name: "zygarde-mega",
      },
      {
        id: 719,
        name: "diancie",
      },
      {
        id: 719,
        name: "diancie-mega",
      },
      {
        id: 150,
        name: "mewtwo",
      },
      {
        id: 150,
        name: "mewtwo-mega-x",
      },
      {
        id: 150,
        name: "mewtwo-mega-y",
      },
    ],
  },
  hyperspace: {
    name: "Hyperspace Pokédex",
    pokemon: [
      {
        id: 56,
        name: "mankey",
      },
      {
        id: 57,
        name: "primeape",
      },
      {
        id: 979,
        name: "annihilape",
      },
      {
        id: 52,
        name: "meowth",
      },
      {
        id: 52,
        name: "meowth-alola",
      },
      {
        id: 52,
        name: "meowth-galar",
      },
      {
        id: 53,
        name: "persian",
      },
      {
        id: 53,
        name: "persian-alola",
      },
      {
        id: 863,
        name: "perrserker",
      },
      {
        id: 83,
        name: "farfetch’d",
      },
      {
        id: 83,
        name: "farfetch’d-galar",
      },
      {
        id: 865,
        name: "sirfetch’d",
      },
      {
        id: 104,
        name: "cubone",
      },
      {
        id: 105,
        name: "marowak",
      },
      {
        id: 105,
        name: "marowak-alola",
      },
      {
        id: 137,
        name: "porygon",
      },
      {
        id: 233,
        name: "porygon2",
      },
      {
        id: 474,
        name: "porygon-z",
      },
      {
        id: 951,
        name: "capsakid",
      },
      {
        id: 952,
        name: "scovillain",
      },
      {
        id: 952,
        name: "scovillain-mega",
      },
      {
        id: 957,
        name: "tinkatink",
      },
      {
        id: 958,
        name: "tinkatuff",
      },
      {
        id: 959,
        name: "tinkaton",
      },
      {
        id: 967,
        name: "cyclizar",
      },
      {
        id: 969,
        name: "glimmet",
      },
      {
        id: 970,
        name: "glimmora",
      },
      {
        id: 970,
        name: "glimmora-mega",
      },
      {
        id: 479,
        name: "rotom",
      },
      {
        id: 479,
        name: "rotom-heat",
      },
      {
        id: 479,
        name: "rotom-wash",
      },
      {
        id: 479,
        name: "rotom-frost",
      },
      {
        id: 479,
        name: "rotom-fan",
      },
      {
        id: 479,
        name: "rotom-mow",
      },
      {
        id: 971,
        name: "greavard",
      },
      {
        id: 972,
        name: "houndstone",
      },
      {
        id: 769,
        name: "sandygast",
      },
      {
        id: 770,
        name: "palossand",
      },
      {
        id: 352,
        name: "kecleon",
      },
      {
        id: 973,
        name: "flamigo",
      },
      {
        id: 615,
        name: "cryogonal",
      },
      {
        id: 977,
        name: "dondozo",
      },
      {
        id: 978,
        name: "tatsugiri",
      },
      {
        id: 978,
        name: "tatsugiri-droopy",
      },
      {
        id: 978,
        name: "tatsugiri-stretchy",
      },
      {
        id: 978,
        name: "tatsugiri-curly-mega",
      },
      {
        id: 978,
        name: "tatsugiri-droopy-mega",
      },
      {
        id: 978,
        name: "tatsugiri-stretchy-mega",
      },
      {
        id: 996,
        name: "frigibax",
      },
      {
        id: 997,
        name: "arctibax",
      },
      {
        id: 998,
        name: "baxcalibur",
      },
      {
        id: 998,
        name: "baxcalibur-mega",
      },
      {
        id: 999,
        name: "gimmighoul",
      },
      {
        id: 999,
        name: "gimmighoul-roaming",
      },
      {
        id: 1000,
        name: "gholdengo",
      },
      {
        id: 211,
        name: "qwilfish",
      },
      {
        id: 211,
        name: "qwilfish-hisui",
      },
      {
        id: 904,
        name: "overqwil",
      },
      {
        id: 252,
        name: "treecko",
      },
      {
        id: 253,
        name: "grovyle",
      },
      {
        id: 254,
        name: "sceptile",
      },
      {
        id: 254,
        name: "sceptile-mega",
      },
      {
        id: 255,
        name: "torchic",
      },
      {
        id: 256,
        name: "combusken",
      },
      {
        id: 257,
        name: "blaziken",
      },
      {
        id: 257,
        name: "blaziken-mega",
      },
      {
        id: 258,
        name: "mudkip",
      },
      {
        id: 259,
        name: "marshtomp",
      },
      {
        id: 260,
        name: "swampert",
      },
      {
        id: 260,
        name: "swampert-mega",
      },
      {
        id: 349,
        name: "feebas",
      },
      {
        id: 350,
        name: "milotic",
      },
      {
        id: 433,
        name: "chingling",
      },
      {
        id: 358,
        name: "chimecho",
      },
      {
        id: 358,
        name: "chimecho-mega",
      },
      {
        id: 876,
        name: "indeedee",
      },
      {
        id: 876,
        name: "indeedee-f",
      },
      {
        id: 509,
        name: "purrloin",
      },
      {
        id: 510,
        name: "liepard",
      },
      {
        id: 517,
        name: "munna",
      },
      {
        id: 518,
        name: "musharna",
      },
      {
        id: 538,
        name: "throh",
      },
      {
        id: 539,
        name: "sawk",
      },
      {
        id: 562,
        name: "yamask",
      },
      {
        id: 562,
        name: "yamask-galar",
      },
      {
        id: 563,
        name: "cofagrigus",
      },
      {
        id: 867,
        name: "runerigus",
      },
      {
        id: 767,
        name: "wimpod",
      },
      {
        id: 768,
        name: "golisopod",
      },
      {
        id: 768,
        name: "golisopod-mega",
      },
      {
        id: 827,
        name: "nickit",
      },
      {
        id: 828,
        name: "thievul",
      },
      {
        id: 852,
        name: "clobbopus",
      },
      {
        id: 853,
        name: "grapploct",
      },
      {
        id: 778,
        name: "mimikyu",
      },
      {
        id: 900,
        name: "kleavor",
      },
      {
        id: 877,
        name: "morpeko",
      },
      {
        id: 877,
        name: "morpeko-hangry",
      },
      {
        id: 622,
        name: "golett",
      },
      {
        id: 623,
        name: "golurk",
      },
      {
        id: 623,
        name: "golurk-mega",
      },
      {
        id: 821,
        name: "rookidee",
      },
      {
        id: 822,
        name: "corvisquire",
      },
      {
        id: 823,
        name: "corviknight",
      },
      {
        id: 174,
        name: "igglybuff",
      },
      {
        id: 39,
        name: "jigglypuff",
      },
      {
        id: 40,
        name: "wigglytuff",
      },
      {
        id: 926,
        name: "fidough",
      },
      {
        id: 927,
        name: "dachsbun",
      },
      {
        id: 396,
        name: "starly",
      },
      {
        id: 397,
        name: "staravia",
      },
      {
        id: 398,
        name: "staraptor",
      },
      {
        id: 398,
        name: "staraptor-mega",
      },
      {
        id: 325,
        name: "spoink",
      },
      {
        id: 326,
        name: "grumpig",
      },
      {
        id: 931,
        name: "squawkabilly",
      },
      {
        id: 931,
        name: "squawkabilly-blue",
      },
      {
        id: 931,
        name: "squawkabilly-yellow",
      },
      {
        id: 931,
        name: "squawkabilly-white",
      },
      {
        id: 739,
        name: "crabrawler",
      },
      {
        id: 740,
        name: "crabominable",
      },
      {
        id: 740,
        name: "crabominable-mega",
      },
      {
        id: 932,
        name: "nacli",
      },
      {
        id: 933,
        name: "naclstack",
      },
      {
        id: 934,
        name: "garganacl",
      },
      {
        id: 316,
        name: "gulpin",
      },
      {
        id: 317,
        name: "swalot",
      },
      {
        id: 41,
        name: "zubat",
      },
      {
        id: 42,
        name: "golbat",
      },
      {
        id: 169,
        name: "crobat",
      },
      {
        id: 935,
        name: "charcadet",
      },
      {
        id: 936,
        name: "armarouge",
      },
      {
        id: 937,
        name: "ceruledge",
      },
      {
        id: 942,
        name: "maschiff",
      },
      {
        id: 943,
        name: "mabosstiff",
      },
      {
        id: 848,
        name: "toxel",
      },
      {
        id: 849,
        name: "toxtricity",
      },
      {
        id: 849,
        name: "toxtricity-low-key",
      },
      {
        id: 944,
        name: "shroodle",
      },
      {
        id: 945,
        name: "grafaiai",
      },
      {
        id: 335,
        name: "zangoose",
      },
      {
        id: 336,
        name: "seviper",
      },
      {
        id: 439,
        name: "mime jr.",
      },
      {
        id: 122,
        name: "mr. mime",
      },
      {
        id: 122,
        name: "mr. mime-galar",
      },
      {
        id: 866,
        name: "mr. rime",
      },
      {
        id: 590,
        name: "foongus",
      },
      {
        id: 591,
        name: "amoonguss",
      },
      {
        id: 485,
        name: "heatran",
      },
      {
        id: 485,
        name: "heatran-mega",
      },
      {
        id: 721,
        name: "volcanion",
      },
      {
        id: 638,
        name: "cobalion",
      },
      {
        id: 639,
        name: "terrakion",
      },
      {
        id: 640,
        name: "virizion",
      },
      {
        id: 647,
        name: "keldeo",
      },
      {
        id: 647,
        name: "keldeo-resolute",
      },
      {
        id: 648,
        name: "meloetta",
      },
      {
        id: 648,
        name: "meloetta-pirouette",
      },
      {
        id: 649,
        name: "genesect",
      },
      {
        id: 720,
        name: "hoopa",
      },
      {
        id: 720,
        name: "hoopa-unbound",
      },
      {
        id: 802,
        name: "marshadow",
      },
      {
        id: 808,
        name: "meltan",
      },
      {
        id: 809,
        name: "melmetal",
      },
      {
        id: 491,
        name: "darkrai",
      },
      {
        id: 491,
        name: "darkrai-mega",
      },
      {
        id: 380,
        name: "latias",
      },
      {
        id: 380,
        name: "latias-mega",
      },
      {
        id: 381,
        name: "latios",
      },
      {
        id: 381,
        name: "latios-mega",
      },
      {
        id: 382,
        name: "kyogre",
      },
      {
        id: 382,
        name: "kyogre-primal",
      },
      {
        id: 383,
        name: "groudon",
      },
      {
        id: 383,
        name: "groudon-primal",
      },
      {
        id: 384,
        name: "rayquaza",
      },
      {
        id: 384,
        name: "rayquaza-mega",
      },
      {
        id: 801,
        name: "magearna",
      },
      {
        id: 801,
        name: "magearna-original",
      },
      {
        id: 801,
        name: "magearna-mega",
      },
      {
        id: 801,
        name: "magearna-original-mega",
      },
      {
        id: 807,
        name: "zeraora",
      },
      {
        id: 807,
        name: "zeraora-mega",
      },
    ],
  },
};
