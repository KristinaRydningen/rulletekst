import { Block, slugField } from "payload";

export const MovieReviewCardBlock: Block = {
  slug: "movie-review-card-block",
  interfaceName: "MovieReviewCardBlock",
  labels: {
    singular: "Filmanmeldelse",
    plural: "Filmanmeldelser",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Anmeldelsens tittel",
      required: true,
      unique: true,
    },
    {
      name: "subtitle",
      type: "text",
      label: "Pirrende undertittel",
      required: true,
      unique: true,
    },
    slugField(),
  ],
};
