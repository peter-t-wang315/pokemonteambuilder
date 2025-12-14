interface IGameTitles {
  [key: string]: {
    dex_slugs: string[];
    versions?: { slug: string; name: string }[];
    mega?: boolean;
    gmax?: boolean;
    tera?: boolean;
  };
}

export const GameTitles: IGameTitles = {
  rby: {
    dex_slugs: ["kanto"],
    versions: [
      { slug: "red", name: "Red" },
      { slug: "blue", name: "Blue" },
      { slug: "yellow", name: "Yellow" },
    ],
  },
  gsc: {
    dex_slugs: ["johto"],
    versions: [
      { slug: "gold", name: "Gold" },
      { slug: "silver", name: "Silver" },
      { slug: "crystal", name: "Crystal" },
    ],
  },
  rse: {
    dex_slugs: ["hoenn", "national_rse"],
    versions: [
      { slug: "ruby", name: "Ruby" },
      { slug: "sapphire", name: "Sapphire" },
      { slug: "emerald", name: "Emerald" },
    ],
  },
  colo: {
    dex_slugs: ["colo_gift", "colo_snag", "colo_transfer"],
  },
  frlg: {
    dex_slugs: ["kanto", "national_frlg"],
    versions: [
      { slug: "firered", name: "FireRed" },
      { slug: "leafgreen", name: "LeafGreen" },
    ],
  },
  xd: {
    dex_slugs: ["xd_gift", "xd_snag", "xd_pokespot", "xd_transfer"],
  },
  dpp: {
    dex_slugs: ["sinnoh", "sinnoh_pt", "national_dppt"],
    versions: [
      { slug: "diamond", name: "Diamond" },
      { slug: "pearl", name: "Pearl" },
      { slug: "platinum", name: "Platinum" },
    ],
  },
  hgss: {
    dex_slugs: ["johto_hgss", "national_hgss"],
    versions: [
      { slug: "heartgold", name: "HeartGold" },
      { slug: "soulsilver", name: "SoulSilver" },
    ],
  },
  bw: {
    dex_slugs: ["unova", "white_forest", "national_bw"],
    versions: [
      { slug: "black", name: "Black" },
      { slug: "white", name: "White" },
    ],
  },
  b2w2: {
    dex_slugs: ["unova_b2w2", "national_b2w2"],
    versions: [
      { slug: "black2", name: "Black 2" },
      { slug: "white2", name: "White 2" },
    ],
  },
  xy: {
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
    dex_slugs: ["hoenn_oras", "national_oras"],
    versions: [
      { slug: "omega_ruby", name: "Omega Ruby" },
      { slug: "alpha_sapphire", name: "Alpha Sapphire" },
    ],
    mega: true,
  },
  sm: {
    dex_slugs: ["alola", "alola_scan", "national_sm"],
    versions: [
      { slug: "sun", name: "Sun" },
      { slug: "moon", name: "Moon" },
    ],
    mega: true,
  },
  usum: {
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
    dex_slugs: ["kanto_lgpe"],
    versions: [
      { slug: "lets_go_pikachu", name: "Let's Go Pikachu!" },
      { slug: "lets_go_eevee", name: "Let's Go Eevee!" },
    ],
    mega: true,
  },
  swsh: {
    dex_slugs: ["galar", "galar_armor", "galar_crown", "galar_other"],
    versions: [
      { slug: "sword", name: "Sword" },
      { slug: "shield", name: "Shield" },
    ],
    gmax: true,
  },
  bdsp: {
    dex_slugs: ["sinnoh", "national_bdsp"],
    versions: [
      { slug: "brilliant_diamond", name: "Brilliant Diamond" },
      { slug: "shining_pearl", name: "Shining Pearl" },
    ],
  },
  arceus: {
    dex_slugs: ["hisui"],
  },
  sv: {
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
    dex_slugs: ["lumiose", "lumiose_hyperspace", "lza_transfer"],
    mega: true,
  },
  home: {
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
