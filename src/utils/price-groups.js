const priceGroups = {
	1: {
		"4x4": 14,
		"6x6": 26,
		"8x8": 30
	},
	2: {
		"4x4": 18,
		"6x6": 30,
		"8x8": 34
	},
	3: {
		"4x4": 22,
		"6x6": 32,
		"8x8": 36
	},
};

export const calculateCost = (priceGroup, dimension) => {
  if(!priceGroup) {
    return;
  }

  const pricePerTile = priceGroups[priceGroup][dimension];
  return findPricePerFoot(pricePerTile, dimension);
};

export const findPricePerFoot = (price, dimension) => {
	if(dimension === "4x4") {
		return price * 9;
	} else if (dimension === "6x6") {
		return price * 4;
	} else if (dimension === "8x8") {
		return price * 2.25
	}
};

export default priceGroups;
