import { type CollectionConfig } from "payload";

export const Article: CollectionConfig = {
  slug: "article",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Tittel",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "URL-navn",
      type: "text",
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
