import { Block, slugField } from "payload";

export const MovieNightBannerBlock: Block = {
  slug: "movie-night-banner-block",
  interfaceName: "MovieNightBannerBlock",
  labels: {
    singular: "Kveldens film banner",
    plural: "Kveldens film bannere",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Tittelen på kveldens film",
      required: true,
      unique: true,
    },
    slugField(),
  ],
};
