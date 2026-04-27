"use client";

import { ReactNode } from "react";
import { ITypeChartEntry, TypeChart } from "@/app/data/typeChart";
import { Text } from "@radix-ui/themes";

const TYPE_COLORS: Record<string, string> = {
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
};

interface Props {
  gameTypeChart: TypeChart;
  individualCoverages: ITypeChartEntry[];
}

function TypePill({
  type,
  primary,
  sub,
  borderColor,
  glow,
}: {
  type: string;
  primary: ReactNode;
  sub: ReactNode;
  borderColor: string;
  glow?: string;
}) {
  const bg = TYPE_COLORS[type] ?? "#555";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        padding: "5px 8px",
        borderRadius: 8,
        border: `2px solid ${borderColor}`,
        boxShadow: glow ?? "none",
        background: `${bg}22`,
        minWidth: 62,
        flex: "0 0 auto",
      }}
    >
      <Text
        size="1"
        weight="bold"
        style={{ textTransform: "capitalize", color: bg, filter: "brightness(1.4)" }}
      >
        {type}
      </Text>
      <div style={{ display: "flex", gap: 4, alignItems: "center", fontSize: 10 }}>
        {primary}
      </div>
      {sub && (
        <div style={{ display: "flex", gap: 4, fontSize: 9, color: "#888" }}>
          {sub}
        </div>
      )}
    </div>
  );
}

export function TypeCoveragePanel({ gameTypeChart, individualCoverages }: Props) {
  const allTypes = Object.keys(gameTypeChart);

  if (individualCoverages.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "#888",
          padding: "20px 0",
          border: "1px solid #333",
          borderRadius: 8,
        }}
      >
        <Text>Add Pokemon to your team to see type coverage.</Text>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 16,
        border: "1px solid #333",
        borderRadius: 10,
        background: "#111",
      }}
    >
      {/* Defensive Coverage */}
      <div>
        <Text size="3" weight="bold" style={{ display: "block", marginBottom: 4 }}>
          Defensive Coverage
        </Text>
        <Text size="1" style={{ display: "block", marginBottom: 10, color: "#888" }}>
          How your team handles incoming attacks —{" "}
          <span style={{ color: "#4FC3F7" }}>✦ immune</span>{" "}
          <span style={{ color: "#81C784" }}>↓ resist</span>{" "}
          <span style={{ color: "#E57373" }}>↑ weak</span>
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {allTypes.map((type) => {
            const immuneCount = individualCoverages.filter((c) => c.immune.has(type)).length;
            const resistCount = individualCoverages.filter((c) => c.resists.has(type)).length;
            const weakCount = individualCoverages.filter((c) => c.weak.has(type)).length;
            const net = immuneCount * 2 + resistCount - weakCount;

            let borderColor = "#444";
            let glow: string | undefined;
            if (net >= 3) { borderColor = "#00C853"; glow = "0 0 8px #00C85355"; }
            else if (net > 0) { borderColor = "#64DD17"; }
            else if (net < -2) { borderColor = "#DD2C00"; glow = "0 0 8px #DD2C0055"; }
            else if (net < 0) { borderColor = "#FF6D00"; }

            const indicators: ReactNode[] = [];
            if (immuneCount > 0) indicators.push(<span key="i" style={{ color: "#4FC3F7" }}>✦×{immuneCount}</span>);
            if (resistCount > 0) indicators.push(<span key="r" style={{ color: "#81C784" }}>↓×{resistCount}</span>);
            if (weakCount > 0) indicators.push(<span key="w" style={{ color: "#E57373" }}>↑×{weakCount}</span>);
            if (indicators.length === 0) indicators.push(<span key="n" style={{ color: "#555" }}>—</span>);

            return (
              <TypePill
                key={type}
                type={type}
                primary={indicators}
                sub={null}
                borderColor={borderColor}
                glow={glow}
              />
            );
          })}
        </div>
      </div>

      {/* Offensive Coverage */}
      <div>
        <Text size="3" weight="bold" style={{ display: "block", marginBottom: 4 }}>
          Offensive Coverage
        </Text>
        <Text size="1" style={{ display: "block", marginBottom: 10, color: "#888" }}>
          Types your team can hit super-effectively
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {allTypes.map((type) => {
            const seCount = individualCoverages.filter((c) => c.weakens.has(type)).length;
            const nveCount = individualCoverages.filter((c) => c.resistedBy.has(type)).length;
            const covered = seCount > 0;

            const borderColor = covered ? "#00C853" : "#DD2C00";
            const glow = covered ? "0 0 6px #00C85355" : "0 0 6px #DD2C0055";

            const primary: ReactNode[] = covered
              ? [<span key="se" style={{ color: "#81C784" }}>✓ ×{seCount}</span>]
              : [<span key="no" style={{ color: "#E57373" }}>✗ none</span>];
            const sub =
              nveCount > 0 ? (
                <span style={{ color: "#E57373" }}>NVE ×{nveCount}</span>
              ) : null;

            return (
              <TypePill
                key={type}
                type={type}
                primary={primary}
                sub={sub}
                borderColor={borderColor}
                glow={glow}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
