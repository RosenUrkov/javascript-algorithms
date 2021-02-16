const circleRadius = 1;

const getNGonSideLength = (sideLength, splitCounter) => {
  if (splitCounter <= 0) {
    return sideLength;
  }

  const halfSide = sideLength / 2;

  const perpendicular = Math.sqrt(circleRadius ** 2 - halfSide ** 2);
  const excessRadius = circleRadius - perpendicular;
  const splitSideLength = Math.sqrt(excessRadius ** 2 + halfSide ** 2);

  return getNGonSideLength(splitSideLength, splitCounter - 1);
};

const getNGonSideCount = (splitCount) => {
  const hexagonSidesCount = 6;
  return hexagonSidesCount * (splitCount ? 2 ** splitCount : 1);
};

export const liuHuiPiAlgorithm = (splitCount = 1) => {
  const nGonSideLength = getNGonSideLength(circleRadius, splitCount - 1);
  const nGonSideCount = getNGonSideCount(splitCount - 1);
  const nGonPerimeter = nGonSideLength * nGonSideCount;
  const approximateCircleArea = (nGonPerimeter / 2) * circleRadius;

  return approximateCircleArea / circleRadius ** 2;
};

console.log(liuHuiPiAlgorithm(5));
