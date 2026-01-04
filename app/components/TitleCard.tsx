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
      style={{
        padding: "10px",
      }}
    >
      {/* This div helps with the image's padding in the card. Doing this allows the card to set the padding and then
      the div takes the remainder of the height and width and lets the image fill that space. */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
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
