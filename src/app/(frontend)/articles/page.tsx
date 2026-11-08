import config from "@payload-config";
import { getPayload } from "payload";
import ArticlePreviewCard from "@/components/ArticlePreviewCard/ArticlePreviewCard";
import ArticlesGrid from "@/components/ArticlesGrid/ArticlesGrid";

export default async function ArticlesPage() {
  const payload = await getPayload({ config });
  const articles = await payload.find({
    collection: "article",
  });

  console.log(articles.docs[0].articleText.root.children);

  if (!articles) {
    throw new Error("Noe gikk galt...");
  }

  return (
    <>
      <ArticlesGrid>
        {articles.docs.map((block) => {
          return (
            <ArticlePreviewCard
              key={block.id}
              title={block.title}
              subtitle={block.subtitle}
              author={block.createdAt}
              url={block.slug}
            />
          );
        })}
      </ArticlesGrid>
    </>
  );
}
