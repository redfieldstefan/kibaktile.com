import lineDrawing from "./Wallflower-8x8.png";
import fourPiece from "./Wallflower-4pc-linedrawing.png";
import DBGRConfig from "./Wallflower-DB-GR-config.jpg";
import DEKQConfig from "./Wallflower-DE-KQ-config.jpg";
import GSConfig from "./Wallflower-GS-config.jpg";
import JKWhiteConfig from "./Wallflower-DB-GR-config.jpg";

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
    lineDrawing,
    fourPiece,
    DBGRConfig,
    DEKQConfig,
    GSConfig,
    JKWhiteConfig
  ],
  url: "/catalog/wallflower/",
  dimensions: ["6x6", "8x8"],
  priceGroup: 2
};
