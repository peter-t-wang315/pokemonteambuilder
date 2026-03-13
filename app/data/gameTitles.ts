interface IGameTitles {
  [key: string]: {
    gen: number;
    dex_slugs: string[];
    versions?: { slug: string; name: string }[];
    mega?: boolean;
    gmax?: boolean;
    tera?: boolean;
  };
}

export const GameTitles: IGameTitles = {
  rby: {
    gen: 1,
    dex_slugs: ["kanto"],
    versions: [
      { slug: "red", name: "Red" },
      { slug: "blue", name: "Blue" },
      { slug: "yellow", name: "Yellow" },
    ],
  },
  gsc: {
    gen: 2,
    dex_slugs: ["johto"],
    versions: [
      { slug: "gold", name: "Gold" },
      { slug: "silver", name: "Silver" },
      { slug: "crystal", name: "Crystal" },
    ],
  },
  rse: {
    gen: 3,
    dex_slugs: ["hoenn", "national_rse"],
    versions: [
      { slug: "ruby", name: "Ruby" },
      { slug: "sapphire", name: "Sapphire" },
      { slug: "emerald", name: "Emerald" },
    ],
  },
  colo: {
    gen: 3,
    dex_slugs: ["colo_gift", "colo_snag", "colo_transfer"],
  },
  frlg: {
    gen: 3,
    dex_slugs: ["kanto", "national_frlg"],
    versions: [
      { slug: "firered", name: "FireRed" },
      { slug: "leafgreen", name: "LeafGreen" },
    ],
  },
  xd: {
    gen: 3,
    dex_slugs: ["xd_gift", "xd_snag", "xd_pokespot", "xd_transfer"],
  },
  dpp: {
    gen: 4,
    dex_slugs: ["sinnoh", "sinnoh_pt", "national_dppt"],
    versions: [
      { slug: "diamond", name: "Diamond" },
      { slug: "pearl", name: "Pearl" },
      { slug: "platinum", name: "Platinum" },
    ],
  },
  hgss: {
    gen: 4,
    dex_slugs: ["johto_hgss", "national_hgss"],
    versions: [
      { slug: "heartgold", name: "HeartGold" },
      { slug: "soulsilver", name: "SoulSilver" },
    ],
  },
  bw: {
    gen: 5,
    dex_slugs: ["unova", "white_forest", "national_bw"],
    versions: [
      { slug: "black", name: "Black" },
      { slug: "white", name: "White" },
    ],
  },
  b2w2: {
    gen: 5,
    dex_slugs: ["unova_b2w2", "national_b2w2"],
    versions: [
      { slug: "black2", name: "Black 2" },
      { slug: "white2", name: "White 2" },
    ],
  },
  xy: {
    gen: 6,
    dex_slugs: [
      "kalos_central",
      "kalos_coastal",
      "kalos_mountain",
      "national_xy",
    ],
    versions: [
      { slug: "x", name: "X" },
      { slug: "y", name: "Y" },
    ],
    mega: true,
  },
  oras: {
    gen: 6,
    dex_slugs: ["hoenn_oras", "national_oras"],
    versions: [
      { slug: "omega_ruby", name: "Omega Ruby" },
      { slug: "alpha_sapphire", name: "Alpha Sapphire" },
    ],
    mega: true,
  },
  sm: {
    gen: 7,
    dex_slugs: ["alola", "alola_scan", "national_sm"],
    versions: [
      { slug: "sun", name: "Sun" },
      { slug: "moon", name: "Moon" },
    ],
    mega: true,
  },
  usum: {
    gen: 7,
    dex_slugs: [
      "alola_usum",
      "alola_scan_usum",
      "alola_wormhole_usum",
      "national_usum",
    ],
    versions: [
      { slug: "ultra_sun", name: "Ultra Sun" },
      { slug: "ultra_moon", name: "Ultra Moon" },
    ],
    mega: true,
  },
  lgpe: {
    gen: 7,
    dex_slugs: ["kanto_lgpe"],
    versions: [
      { slug: "lets_go_pikachu", name: "Let's Go Pikachu!" },
      { slug: "lets_go_eevee", name: "Let's Go Eevee!" },
    ],
    mega: true,
  },
  swsh: {
    gen: 8,
    dex_slugs: ["galar", "galar_armor", "galar_crown", "galar_other"],
    versions: [
      { slug: "sword", name: "Sword" },
      { slug: "shield", name: "Shield" },
    ],
    gmax: true,
  },
  bdsp: {
    gen: 8,
    dex_slugs: ["sinnoh", "national_bdsp"],
    versions: [
      { slug: "brilliant_diamond", name: "Brilliant Diamond" },
      { slug: "shining_pearl", name: "Shining Pearl" },
    ],
  },
  arceus: {
    gen: 8,
    dex_slugs: ["hisui"],
  },
  sv: {
    gen: 9,
    dex_slugs: [
      "paldea",
      "paldea_kitakami",
      "paldea_blueberry",
      "paldea_other",
    ],
    versions: [
      { slug: "scarlet", name: "Scarlet" },
      { slug: "violet", name: "Violet" },
    ],
    tera: true,
  },
  lza: {
    gen: 9,
    dex_slugs: ["lumiose", "hyperspace", "lza_transfer"],
    mega: true,
  },
  home: {
    gen: 100,
    dex_slugs: [
      "kanto_home",
      "johto_home",
      "hoenn_home",
      "sinnoh_home",
      "unova_home",
      "kalos_home",
      "alola_home",
      "galar_home",
      "hisui_home",
      "paldea_home",
      "other_home",
    ],
    mega: true,
    gmax: true,
    tera: true,
  },
};
