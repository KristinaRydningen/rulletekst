import config from "@payload-config";
import { getPayload } from "payload";

import MovieNightBanner from "@/components/MovieNightBanner/MovieNightBanner";
import PreviewCard from "@/components/PreviewCard/PreviewCard";
import Grid from "@/components/Grid/Grid";

export default async function HomePage() {
  const payload = await getPayload({ config });
  const homepage = await payload.findGlobal({
    slug: "landings-side",
    depth: 2,
  });

  if (!homepage || !homepage.layout) {
    throw new Error("Noe gikk galt...");
  }

  return (
    <>
      {homepage.layout.map((block) => {
        switch (block.blockType) {
          case "movie-night-banner-block": {
            return <MovieNightBanner key={block.id} title={block.title} />;
          }
          case "movie-review-card-block": {
            if (typeof block.review !== "object" || block.review === null) {
              return null;
            }

            const authorName =
              typeof block.review.author === "object" &&
              block.review.author !== null
                ? block.review.author.name || "Skrevet av Rulletekst"
                : "";

            return (
              <Grid>
                <PreviewCard
                  key={block.id}
                  title={block.review.title}
                  subtitle={block.review.subtitle ?? ""}
                  author={authorName}
                  url={`/reviews/${block.review.slug}`}
                />
              </Grid>
            );
          }
          default: {
            return null;
          }
        }
      })}
    </>
  );
}
