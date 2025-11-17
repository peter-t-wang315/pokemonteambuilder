"use client";
import { Text } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";
import { PokemonSprite } from "./components/PokemonSprite";
import { GameTitles } from "./data/gameTitles";
import { TitleCard } from "./components/TitleCard";

export default function Home() {
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
        style={{
          width: "100%",
          marginBottom: "20px",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        Welcome to the Pok&eacute;mon Easy Team Builder!
      </Text>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          width: "70%",
          justifyItems: "center",
        }}
      >
        {Object.entries(GameTitles).map(([gameTitle, value]) => (
          <TitleCard key={gameTitle} title={gameTitle} />
        ))}
      </div>
    </main>
  );
}
