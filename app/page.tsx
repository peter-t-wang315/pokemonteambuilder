import { Text } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [allGames, setAllGames] = useState<string[]>([
    "Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, Paldea",
  ]);
  return (
    <div>
      <main>
        <Text>Gang gang</Text>
      </main>
    </div>
  );
}
