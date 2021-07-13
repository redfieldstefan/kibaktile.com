const lineDrawing = "/catalog/hana/Hana.png";
const fourPiece = "/catalog/hana/Hana-4pc-linedrawing.png";
const hanaBlueWhiteline = "/catalog/hana/Hana-blue-whiteline-config.jpg";
const hanaCPConfig = "/catalog/hana/Hana-CP-config.jpg";
const hanaEAGRConfig = "/catalog/hana/Hana-EA-GR-config.jpg";
const hanaGGGRConfig = "/catalog/hana/Hana-GG-GR-config.jpg";
const hanaGS2Config = "/catalog/hana/Hana-GS-2-config.jpg";
const hanaSpeckledWhite = "/catalog/hana/Hana-speckled-white-config.jpg";

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
    hanaBlueWhiteline,
    hanaCPConfig,
    hanaEAGRConfig,
    hanaGGGRConfig,
    hanaGS2Config,
    hanaSpeckledWhite,
    fourPiece,
    lineDrawing
  ],
  url: "/catalog/hana/",
  rotationClass: "rotate-mirror",
  dimensions: ["6x6", "8x8"],
  priceGroup: 2
};
