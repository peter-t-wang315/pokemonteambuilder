"use client";
import { Card } from "@radix-ui/themes";
import Image from "next/image";

export function TitleCard({ title }: { title: string }) {
  return (
    <Card style={{ width: 260, height: 100 }}>
      <Image
        key={title}
        src={`/gameTitles/${title}.png`}
        alt={title}
        fill
        style={{
          objectFit: "contain",
          maxWidth: "100%",
          maxHeight: "100%",
          padding: "20px 50px",
        }}
      />
    </Card>
  );
}
``;
