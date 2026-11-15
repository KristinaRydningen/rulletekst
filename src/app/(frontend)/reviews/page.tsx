import config from "@payload-config";
import { getPayload } from "payload";
import PreviewCard from "@/components/PreviewCard/PreviewCard";
import Grid from "@/components/Grid/Grid";
export default async function MovieReviewPage() {
  const payload = await getPayload({ config });
  const reviews = await payload.find({
    collection: "review",
  });

  return (
    <>
      <h1>Anmeldelser</h1>
      <Grid>
        {reviews.docs.map((review) => {
          const authorName =
            typeof review.author === "object" && review.author !== null
              ? review.author.name
              : "Skrevet av Rulletekst.no";

          return (
            <PreviewCard
              key={review.id}
              title={review.title}
              subtitle={review.subtitle ?? ""}
              author={authorName}
              url={`reviews/${review.slug}`}
              date={review.createdAt}
            />
          );
        })}
      </Grid>
    </>
  );
}
