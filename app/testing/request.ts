export async function fetchGamesPokedex(): Promise<any> {
  // const res = await fetch("https://pokeapi.co/api/v2/pokedex/paldea/", {
  const res = await fetch("https://pokeapi.co/api/v2/pokedex/updated-alola/", {
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
