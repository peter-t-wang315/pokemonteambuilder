"use client";
import { Card } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function TitleCard({ title }: { title: string }) {
  const router = useRouter();

  return (
    <Card
      className={"title-card"}
      onClick={() => {
        router.push(`/${title}`);
      }}
    >
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
