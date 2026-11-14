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
      name: "review",
      type: "relationship",
      relationTo: "review",
      required: true,
    },
  ],
};
