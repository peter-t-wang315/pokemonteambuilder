export async function fetchGeneration(): Promise<any> {
  const res = await fetch(`https://pokeapi.co/api/v2/generation/1/`, {
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
