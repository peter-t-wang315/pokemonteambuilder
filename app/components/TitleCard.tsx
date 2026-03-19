"use client";
import { Card } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function TitleCard({ title }: { title: string }) {
  const router = useRouter();

  return (
    <Card
      className="title-card"
      onClick={() => router.push(`/${title}`)}
      style={{
        padding: "10px",
        width: "100%",
        aspectRatio: "3 / 2",
        cursor: "pointer",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src={`/gameTitles/${title}.png`}
          alt={title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </Card>
  );
}
