import { Block } from "payload";

export const ArticleCardBlock: Block = {
  slug: "article-block",
  interfaceName: "ArticleCardBlock",
  labels: {
    singular: "Artikkel",
    plural: "Artikler",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Artikkelens tittel",
      required: true,
      unique: true,
    },
    {
      name: "subtitle",
      type: "text",
      label: "Artikkelens undertittel",
      required: true,
    },
    {
      name: "articleText",
      type: "richText",
      label: "Artikkelens innhold",
      required: true,
    },
  ],
};
