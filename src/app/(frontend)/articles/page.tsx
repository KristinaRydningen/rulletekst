import config from "@payload-config";
import { getPayload } from "payload";

import ArticleCard from "@/components/ArticleContent/ArticleContent";
import { ArticlePage } from "@/globals/ArticlePage";

export default async function ArticlesPage() {
  const payload = await getPayload({ config });
  const articlepage = await payload.findGlobal({
    slug: "article-page",
  });

  if (!articlepage || !articlepage.articlePageLayout) {
    throw new Error("Noe gikk galt...");
  }

  return (
    <>
      {articlepage.articlePageLayout.map((block) => {
        return (
          <ArticleCard
            title={block.title}
            subtitle={block.subtitle}
            articleText={block.articleText}
          />
        );
      })}
    </>
  );
}
