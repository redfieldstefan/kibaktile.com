const lineDrawing = "/catalog/camelot/Timeless-Camelot-6x6-8x8.png";
const fourPiece = "/catalog/camelot/Camelot-4pc-linedrawing.png";
const timelessCamelot = "/catalog/camelot/Camelot-warm.jpg";
const cWFourConfig = "/catalog/camelot/Camelot-cw4-config.jpg";
const GRIHConfig = "/catalog/camelot/Camelot-GR-IH-config.jpg";
const camelotBacksplash = "/catalog/camelot/Camelot-backsplash-install.jpg";

export default {
  name: "Camelot",
  description: `Timeless Camelot, originally part of our Euro-
    Classic line for Ann Sacks, Camelot easily transforms a
    kitchen or bath from routine to showstopper. This pattern
    adds color and interest to the walls/floors of any
    Contemporary, Traditional, Craftsman, or Farmhouse style
    interior. Choose from our Warm, Cool, Neutral, or white color
    ways, OR infuse a bit of your own color story to create a truly
    personal look.`,
  lineDrawing,
  painted: timelessCamelot,
  fourPiece,
  slides: [
    GRIHConfig,
    timelessCamelot,
    cWFourConfig,
    camelotBacksplash,
    fourPiece,
    lineDrawing
  ],
  url: "/catalog/camelot/",
  rotationClass: "rotate-right",
  dimensions: ["6x6", "8x8"],
  priceGroup: 1
};
