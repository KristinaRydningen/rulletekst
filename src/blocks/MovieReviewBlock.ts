import { Block } from "payload";

export const MovieReviewBlock: Block = {
  slug: "movie-review-block",
  interfaceName: "MovieReviewBlock",
  labels: {
    singular: "Filmanmeldelse",
    plural: "Filmanmeldelser",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Tittel",
      required: true,
    },
    {
      name: "dice",
      type: "select",
      label: "Terningkast",
      required: true,
      hasMany: true,
      options: [
        {
          label: "Terningkast 1",
          value: "1",
        },
        {
          label: "Terningkast 2",
          value: "2",
        },
      ],
    },
    {
      name: "director",
      type: "text",
      label: "Regissør",
      required: true,
    },
    {
      name: "length",
      type: "number",
      label: "Spilletid",
      required: true,
    },
    {
      name: "agelimit",
      type: "number",
      label: "Aldersgrense",
      required: true,
    },
    {
      name: "actors",
      type: "text",
      label: "Skuespillere",
      required: true,
    },
  ],
};
