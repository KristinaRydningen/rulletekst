import ArticleContent from "@/components/ArticleContent/ArticleContent";
import { getPayload } from "payload";
import config from "@payload-config";
import { Article } from "@/collections/Article";
import { notFound } from "next/navigation";

type spesificArticleProps = {
  params: Promise<{ slug: string }>;
};

export default async function spesificArticle({
  params,
}: spesificArticleProps) {
  const { slug } = await params;
  const payload = await getPayload({ config });
  const articlepage = await payload.find({
    collection: "article",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const article = articlepage.docs[0];

  if (!article) {
    notFound();
  }

  return (
    <ArticleContent
      title={article.title}
      subtitle={article.subtitle}
      articleText={article.articleText}
    />
  );
}
