"use client";
import { Button, Text } from "@radix-ui/themes";
import { fetchGeneration } from "./request";

export default function TestingPage() {
  return (
    <div>
      <Text>Click me big guy bruddah.</Text>
      <Button
        onClick={async () => {
          const x = await fetchGeneration();
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
