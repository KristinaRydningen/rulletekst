import config from "@payload-config";
import { getPayload } from "payload";
import PreviewCard from "@/components/PreviewCard/PreviewCard";
import Grid from "@/components/Grid/Grid";

export default async function ArticlesPage() {
  const payload = await getPayload({ config });
  const articles = await payload.find({
    collection: "article",
    depth: 1,
  });

  if (!articles) {
    throw new Error("Noe gikk galt...");
  }

  if (articles.docs.length === 0) {
    return <p>Det finnes ingen artikler enda.</p>;
  }

  return (
    <>
      <h1>Artikler</h1>
      <Grid>
        {articles.docs.map((block) => {
          const authorName =
            typeof block.author === "object" && block.author !== null
              ? block.author.name || "Ukjent forfatter"
              : "Ukjent forfatter";
          const imageUrl =
            typeof block.thumbnail === "object" && block.thumbnail !== null
              ? block.thumbnail.url
              : undefined;

          return (
            <PreviewCard
              key={block.id}
              title={block.title}
              subtitle={block.subtitle}
              author={authorName}
              url={`articles/${block.slug}`}
              date={block.createdAt}
              img={imageUrl ?? undefined}
            />
          );
        })}
      </Grid>
    </>
  );
}
