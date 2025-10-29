"use client";
import { Button, Text } from "@radix-ui/themes";
import { fetchAllGames } from "./request";

export default function TestingPage() {
  return (
    <div>
      <Text>Click me big guy bruddah.</Text>
      <Button
        onClick={async () => {
          const x = await fetchAllGames();
          console.log(x);
        }}
        variant="soft"
        radius="full"
      >
        Here bruh.
      </Button>
    </div>
  );
}
