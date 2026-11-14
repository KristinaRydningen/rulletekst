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
    <Grid>
      {reviews.docs.map((review) => {
        return (
          <PreviewCard
            key={review.id}
            title={review.title}
            subtitle={review.subtitle ?? ""}
            author={review.createdAt}
            url={`reviews/${review.slug}`}
          />
        );
      })}
    </Grid>
  );
}
