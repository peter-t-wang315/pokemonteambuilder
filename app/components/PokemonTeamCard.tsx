import { Card, Text } from "@radix-ui/themes";
import { PokemonSprite } from "./PokemonSprite";

export function PokemonTeamCard({
  PokemonDetails,
  onClick,
}: {
  PokemonDetails: { name: string; id: number };
  onClick: (pokemon: { name: string; id: number }) => void;
}) {
  function formatName(str: string) {
    return str
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <Card
      key={PokemonDetails.name}
      className="pokemon-team-card"
      onClick={() => onClick(PokemonDetails)}
    >
      {PokemonDetails.name !== "" && (
        <Text style={{ textAlign: "center" }}>
          {formatName(PokemonDetails.name)}
        </Text>
      )}
      <PokemonSprite pokemonName={PokemonDetails.name} scale={2} />
    </Card>
  );
}
