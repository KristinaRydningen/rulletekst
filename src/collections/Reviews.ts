import { title } from "node:process";
import { type CollectionConfig, slugField } from "payload";

export const Review: CollectionConfig = {
  slug: "review",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Tittel",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      label: "Undertittel",
    },
    {
      name: "dice",
      type: "select",
      label: "Terningkast",
      required: true,
      options: [
        {
          label: "Terningkast 1",
          value: "1",
        },
        {
          label: "Terningkast 2",
          value: "2",
        },
        {
          label: "Terningkast 3",
          value: "3",
        },
        {
          label: "Terningkast 4",
          value: "4",
        },
        {
          label: "Terningkast 5",
          value: "5",
        },
        {
          label: "Terningkast 6",
          value: "6",
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
      label: "Spilletid i minutter",
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
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "text",
      type: "richText",
      label: "Anmeldelsens tekst",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      label: "Skrevet av",
      required: true,
    },
    slugField({
      fieldToUse: "title",
    }),
  ],
};
