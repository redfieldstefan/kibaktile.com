import lineDrawing from "./Timeless-Rhiad-6x6-8x8.png";
import fourPiece from "./Rhiad-4pc-linedrawing.png";
import rhiadGreyWhite from "./Rhiad-grey-white-config.jpg";
import rhiadBlueWhite from "./Rhiad-blue-white-config.jpg";
import rhiadMWWhite from "./Rhiad-MW-white-config.jpg";

export default {
  name: "Rhiad",
  lineDrawing,
  painted: rhiadMWWhite,
  fourPiece,
  description: `Another Kibak classic from our Andalusian series
    shown through Ann Sacks, Rhiad never disappoints. For
    impact and longevity Rhiad has to be a contender for every
    interior storyboard.`,
  slides: [
    rhiadGreyWhite,
    rhiadBlueWhite,
    rhiadMWWhite,
    fourPiece,
    lineDrawing
  ],
  url: "/catalog/rhiad/",
  rotationClass: "rotate-right",
  dimensions: ["6x6", "8x8"],
  priceGroup: 3
};
