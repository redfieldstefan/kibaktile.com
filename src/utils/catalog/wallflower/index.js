const lineDrawing = "/catalog/wallflower/Wallflower-8x8.png";
const fourPiece = "/catalog/wallflower/Wallflower-4pc-linedrawing.png";
const DBGRConfig = "/catalog/wallflower/Wallflower-DB-GR-config.jpg";
const DEKQConfig = "/catalog/wallflower/Wallflower-DE-KQ-config.jpg";
const GSConfig = "/catalog/wallflower/Wallflower-GS-config.jpg";
const JKWhiteConfig = "/catalog/wallflower/Wallflower-DB-GR-config.jpg";

export default {
  name: "Wallflower",
  description: `Another classic Kibak Tile Sakura pattern, what
    can we say? We love the all-around utility of these kimono
    inspired patterns. Go for a pop of happy color in the laundry
    room or powder room, or infuse a little urbane elegance with
    our more organic, earthy, specialty glazes.`,
  lineDrawing,
  painted: DEKQConfig,
  fourPiece,
  slides: [
    DBGRConfig,
    DEKQConfig,
    GSConfig,
    JKWhiteConfig,
    fourPiece,
    lineDrawing,
  ],
  url: "/catalog/wallflower/",
  dimensions: ["6x6", "8x8"],
  priceGroup: 2
};
