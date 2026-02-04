"use client";
import { Text } from "@radix-ui/themes";
import { GameTitles } from "../data/gameTitles";
import { TitleCard } from "../components/TitleCard";

// This is the home page's page code. This uses the straight up default layout.tsx for it's layout and therefore doesn't have the button like
// the other pages that rely on the other layout.
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
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 16,
          width: "100%",
          maxWidth: "900px",
          justifyItems: "center",
        }}
      >
        {Object.entries(GameTitles).map(([gameTitle, value], index) => (
          <TitleCard key={gameTitle} title={gameTitle} />
        ))}
      </div>
    </main>
  );
}
