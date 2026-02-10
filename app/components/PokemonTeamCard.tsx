import { Card, Text } from "@radix-ui/themes";
import { PokemonSprite } from "./PokemonSprite";
import { GradientOrb } from "./GradientOrb";

export function PokemonTeamCard({
  PokemonDetails,
  onClick,
}: {
  PokemonDetails: { name: string; id: number; types: string[] };
  onClick: (pokemon: { name: string; id: number; types: string[] }) => void;
}) {
  function formatName(str: string) {
    return str
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  PokemonDetails.name &&
    console.log("POkemonDetails in PokemonTeamCard: ", PokemonDetails);

  return (
    <Card
      key={PokemonDetails.name}
      className="pokemon-team-card"
      onClick={() => onClick(PokemonDetails)}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Gradient Orb Background */}
      <GradientOrb
        type1={PokemonDetails.types[0]}
        type2={PokemonDetails.types[1]}
        blur={16}
      />

      {PokemonDetails.name !== "" && (
        <Text style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          {formatName(PokemonDetails.name)}
        </Text>
      )}
      <PokemonSprite pokemonName={PokemonDetails.name} scale={2} />
    </Card>
  );
}
