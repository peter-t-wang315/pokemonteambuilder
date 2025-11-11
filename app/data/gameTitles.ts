interface IGameTitles {
  [key: string]: {
    // Thought I would need these. Don't think I will anymore but I already added them soooo they can stay I suppose... Easter eeeeegg.
    versionGroups?: number[];
    // This is used to grab the Pokedex for each game from PokeAPI.
    pokeAPIPokedexId?: number[];
    // This is used to cut the National dex off at a certain point for each game. Each game has backwards compatability with all previous games,
    // so this is how we can determine what pokemon are technically available from Home in each game and to just add the national dex up to that point.
    firstPokedexNumber?: number;
    mega?: boolean;
    gmax?: boolean;
  };
}

export const GameTitles: IGameTitles = {
  rby: {
    versionGroups: [1, 2],
    pokeAPIPokedexId: [2],
    firstPokedexNumber: 1,
  },
  gsc: {
    versionGroups: [3, 4],
    pokeAPIPokedexId: [3],
    firstPokedexNumber: 152,
  },
  rse: {
    versionGroups: [5, 6],
    pokeAPIPokedexId: [4],
    firstPokedexNumber: 252,
  },
  frlg: {
    versionGroups: [7],
    pokeAPIPokedexId: [2],
    firstPokedexNumber: 1,
  },
  dpp: {
    versionGroups: [8, 9],
    pokeAPIPokedexId: [5, 6],
    firstPokedexNumber: 387,
  },
  hgss: {
    versionGroups: [10],
    pokeAPIPokedexId: [7],
    firstPokedexNumber: 152,
  },
  bw: {
    versionGroups: [11],
    pokeAPIPokedexId: [8],
    firstPokedexNumber: 494,
  },
  colo: {
    versionGroups: [12],
  },
  xd: {
    versionGroups: [13],
  },
  b2w2: {
    versionGroups: [14],
    pokeAPIPokedexId: [9],
    firstPokedexNumber: 494,
  },
  xy: {
    versionGroups: [15],
    pokeAPIPokedexId: [12, 13, 14],
    firstPokedexNumber: 650,
    mega: true,
  },
  oras: {
    versionGroups: [16],
    pokeAPIPokedexId: [15],
    firstPokedexNumber: 252,
    mega: true,
  },
  sm: {
    versionGroups: [17],
    pokeAPIPokedexId: [16, 17, 18, 19, 20],
    firstPokedexNumber: 722,
    mega: true,
  },
  usum: {
    versionGroups: [18],
    pokeAPIPokedexId: [21, 22, 23, 24, 25],
    firstPokedexNumber: 722,
    mega: true,
  },
  lgpe: {
    versionGroups: [19],
    pokeAPIPokedexId: [26],
    firstPokedexNumber: 1,
    mega: true,
  },
  swsh: {
    versionGroups: [20],
    pokeAPIPokedexId: [27, 28, 29],
    firstPokedexNumber: 810,
    gmax: true,
  },
  sv: {},
  la: {},
  lza: { mega: true },
  home: { pokeAPIPokedexId: [1], mega: true, gmax: true },
};
