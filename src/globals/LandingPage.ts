import { MovieNightBannerBlock } from "@/blocks/MovieNightBannerBlock";
import { MovieReviewCardBlock } from "@/blocks/MovieReviewCardBlock";
import type { GlobalConfig } from "payload";

export const LandingPage: GlobalConfig = {
  slug: "landings-side",
  label: "Landingsside",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "layout",
      label: "Forside moduler",
      type: "blocks",
      blocks: [MovieNightBannerBlock, MovieReviewCardBlock],
    },
  ],
};
