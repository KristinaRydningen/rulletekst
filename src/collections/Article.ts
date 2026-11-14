import { type CollectionConfig, slugField } from "payload";

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
    slugField({
      fieldToUse: "title",
    }),
  ],
};
