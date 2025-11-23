import { IGamePokedex } from "@/interfaces/IGamePokedex";

export async function fetchGamesPokedex({
  pokedexNum,
  fetchNationalDex = false,
}: {
  pokedexNum: number | number[];
  fetchNationalDex?: boolean;
}): Promise<IGamePokedex | IGamePokedex[]> {
  // If we are getting multiple pokedex's, fetch all at once and return it all.
  if (Array.isArray(pokedexNum)) {
    // This adds the national dex to the end of the game. This is used for mainline games as all games are backwards compatible.
    fetchNationalDex && pokedexNum.push(1);
    const results = await Promise.all(
      pokedexNum.map((num) =>
        fetch(`https://pokeapi.co/api/v2/pokedex/${num}/`, {
          method: "GET",
          next: { revalidate: 60 },
        }).then(async (res) => {
          if (!res.ok) {
            throw new Error(
              `Failed to fetch pokedex ${num}: ${res.statusText}`
            );
          }
          const resData = await res.json();
          const { id, name, pokemon_entries } = resData;
          return { id, name, pokemon_entries };
        })
      )
    );
    return results;
  }
  // If we're just grabbing the one pokedex.
  else {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokedex/${pokedexNum}/`,
      {
        method: "GET",
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch generation: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  }
}

// TODO: Need to be able to grab all of the games from the API so that things can be fully automated.
export async function fetchAllGames(): Promise<any> {
  const res = await fetch("https://pokeapi.co/api/v2/version-group/", {
    method: "GET",
    // optional: revalidate cache (Next.js App Router)
    next: { revalidate: 60 }, // cache for 1 minute
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch all Pokemon games: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
}

export async function fetchGamesPokeAPIPokedexNumbers(): Promise<any> {
  const res = await fetch(
    "https://pokeapi.co/api/v2/version-group/ultra-sun-ultra-moon",
    {
      method: "GET",
      // optional: revalidate cache (Next.js App Router)
      next: { revalidate: 60 }, // cache for 1 minute
    }
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch games PokeAPI Pokedex Numbers: ${res.statusText}`
    );
  }

  const data = await res.json();
  return data;
}

export async function fetchPokemonGeneration(): Promise<any> {
  const res = await fetch("https://pokeapi.co/api/v2/generation/", {
    method: "GET",
    // optional: revalidate cache (Next.js App Router)
    next: { revalidate: 60 }, // cache for 1 minute
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch generation: ${res.statusText}`);
  }
  const data = await res.json();
  return data;
}
