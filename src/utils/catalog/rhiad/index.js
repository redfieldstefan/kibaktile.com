const lineDrawing = "/catalog/rhiad/Timeless-Rhiad-6x6-8x8.png";
const fourPiece = "/catalog/rhiad/Rhiad-4pc-linedrawing.png";
const rhiadGreyWhite = "/catalog/rhiad/Rhiad-grey-white-config.jpg";
const rhiadBlueWhite = "/catalog/rhiad/Rhiad-blue-white-config.jpg";
const rhiadMWWhite = "/catalog/rhiad/Rhiad-MW-white-config.jpg";

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
