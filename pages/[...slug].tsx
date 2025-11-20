import { useRouter } from "next/router";
import { GameTitles } from "../app/data/gameTitles";
import { useEffect } from "react";

export default function GamePage() {
  const router = useRouter();
  const { slug } = router.query;
  const path = Array.isArray(slug) ? slug.join("/") : slug || "";

  useEffect(() => {
    // Have to make sure the path is there because on first load, router.query takes a second to correctly
    // populate and we don't want to redirect to notfound immediately because it hasn't populated on first render.
    if (path != "" && !GameTitles[path]) {
      router.replace("/notfound");
    }
  }, [path]);

  if (!GameTitles[path]) {
    return null;
  }

  return (
    <div>
      <h1>{GameTitles[path].firstPokedexNumber} Page</h1>
    </div>
  );
}
