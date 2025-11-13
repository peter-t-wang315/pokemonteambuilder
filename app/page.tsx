"use client";
import { Text } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";
import { PokemonSprite } from "./components/PokemonSprite";

export default function Home() {
  const [allGames, setAllGames] = useState<string[]>([
    "Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, Paldea",
  ]);
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <Text
        size="9"
        weight="bold"
        style={{ width: "100%", marginBottom: "20px", alignSelf: "center" }}
      >
        Welcome to the Pok&eacute;mon Easy Team Builder!
      </Text>
    </main>
  );
}
