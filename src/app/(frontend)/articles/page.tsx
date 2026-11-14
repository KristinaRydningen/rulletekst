import config from "@payload-config";
import { getPayload } from "payload";
import PreviewCard from "@/components/PreviewCard/PreviewCard";
import Grid from "@/components/Grid/Grid";

export default async function ArticlesPage() {
  const payload = await getPayload({ config });
  const articles = await payload.find({
    collection: "article",
  });

  if (!articles) {
    throw new Error("Noe gikk galt...");
  }

  if (articles.docs.length === 0) {
    return <p>Det finnes ingen artikler enda.</p>;
  }

  return (
    <>
      <Grid>
        {articles.docs.map((block) => {
          return (
            <PreviewCard
              key={block.id}
              title={block.title}
              subtitle={block.subtitle}
              author={block.createdAt}
              url={`articles/${block.slug}`}
            />
          );
        })}
      </Grid>
    </>
  );
}
