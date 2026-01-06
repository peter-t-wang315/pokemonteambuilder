import { Button, Heading, Link } from "@radix-ui/themes";

// This layout makes it so that every other page outside of home now has a special layout(with header).
export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        gap: "1rem",
        padding: "20px 40px",
        boxSizing: "border-box",
      }}
    >
      {/* Header centered */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Button asChild variant="outline" style={{ padding: 40 }}>
          <Link href="/">
            <Heading>Pokemon Team Builder</Heading>
          </Link>
        </Button>
      </div>

      {/* Page content stretches full width */}
      <div style={{ flex: 1, width: "100%" }}>{children}</div>
    </div>
  );
}
