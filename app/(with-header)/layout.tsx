import { Button, Heading, Link } from "@radix-ui/themes";

// This layout is the layout for the rest of the pages(slug + not found). This layout takes the base layout and simply adds a header to each page
// layout. This button can be used to navigate back to the home page.
// IF YOU DECIDE TO ADD A FOOTER THAT SHOULD BE DONE AT THE BASE LAYOUT AS THAT STILL EXISTS.
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
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Button asChild variant="outline" style={{ padding: 40 }}>
          <Link href="/">
            <Heading>Pokemon Team Builder</Heading>
          </Link>
        </Button>
      </div>

      <div style={{ flex: 1, display: "flex" }}>{children}</div>
    </div>
  );
}
