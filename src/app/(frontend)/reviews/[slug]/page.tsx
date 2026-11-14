import config from "@payload-config";
import { getPayload } from "payload";
import MovieReviewContent from "@/components/MovieReviewContent/MovieReviewContent";
import { notFound } from "next/navigation";

type SpesificReviewProps = {
  params: Promise<{ slug: string }>;
};

export default async function SpesificReview({ params }: SpesificReviewProps) {
  const { slug } = await params;
  const payload = await getPayload({ config });
  const reviews = await payload.find({
    collection: "review",
    depth: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!reviews) {
    throw new Error(`Noe gikk galt.`);
  }

  if (reviews.docs.length === 0) {
    return <p>Det finnes ingen filmanmeldelser enda.</p>;
  }

  const review = reviews.docs[0];

  if (!review) {
    notFound();
  }

  const authorName =
    typeof review.author === "object" && review.author !== null
      ? review.author.name
      : "Skrevet av Rulletekst.no";

  return (
    <>
      <MovieReviewContent
        title={review.title}
        director={review.director}
        dice={Number(review.dice)}
        length={review.length}
        ageLimit={review.agelimit}
        actors={review.actors ?? []}
        textContent={review.text}
        author={authorName}
        date={review.createdAt}
      />
    </>
  );
}
