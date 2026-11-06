import { ArticleCardBlock } from "@/blocks/ArticleBlock";
import type { GlobalConfig } from "payload";

export const ArticlePage: GlobalConfig = {
  slug: "article-page",
  label: "Artikkelside",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "articlePageLayout",
      label: "Artikkelside layout",
      type: "blocks",
      blocks: [ArticleCardBlock],
    },
  ],
};
