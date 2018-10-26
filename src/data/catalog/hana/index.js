import lineDrawing from "./Hana.png";
import fourPiece from "./Hana-4pc-linedrawing.png";
import hanaBlueWhiteline from "./Hana-blue-whiteline-config.jpg";
import hanaCPConfig from "./Hana-CP-config.jpg";
import hanaEAGRConfig from "./Hana-EA-GR-config.jpg";
import hanaGGGRConfig from "./Hana-GG-GR-config.jpg";
import hanaGS2Config from "./Hana-GS-2-config.jpg";
import hanaSpeckledWhite from "./Hana-speckled-white-config.jpg";

export default {
  name: "Hana",
  description: `Brand new to the Kibak line Hana can add pretty and
    texture to any installation without going girlie on you. Ideal
    for a bit of Asian infusion, Hana also takes the edge off
    industrial, or use it for a softer version of modern.`,
  lineDrawing,
  painted: hanaBlueWhiteline,
  fourPiece,
  slides: [
    lineDrawing,
    fourPiece,
    hanaBlueWhiteline,
    hanaCPConfig,
    hanaEAGRConfig,
    hanaGGGRConfig,
    hanaGS2Config,
    hanaSpeckledWhite
  ],
  url: "/catalog/hana/",
  rotationClass: "rotate-mirror",
  priceGroup: 2
};
