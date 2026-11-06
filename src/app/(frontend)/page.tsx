import config from "@payload-config";
import { getPayload } from "payload";

import MovieNightBanner from "@/components/MovieNightBanner/MovieNightBanner";
import MovieReviewCard from "@/components/MovieReviewCard/MovieReviewCard";
import BlocksGrid from "@/components/BlocksGrid/BlocksGrid";

export default async function HomePage() {
  const payload = await getPayload({ config });
  const homepage = await payload.findGlobal({
    slug: "landings-side",
  });

  if (!homepage || !homepage.layout) {
    throw new Error("Noe gikk galt...");
  }

  return (
    <main>
      <BlocksGrid>
        {homepage.layout.map((block) => {
          switch (block.blockType) {
            case "movie-night-banner-block": {
              return <MovieNightBanner key={block.id} title={block.title} />;
            }
            case "movie-review-card-block": {
              return (
                <MovieReviewCard
                  key={block.id}
                  title={block.title}
                  subtitle={block.subtitle}
                />
              );
            }
            default: {
              return null;
            }
          }
        })}
      </BlocksGrid>
    </main>
  );
}
