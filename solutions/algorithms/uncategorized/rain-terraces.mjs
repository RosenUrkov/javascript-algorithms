export const rainTerracesDP = (elevationMap) => {
  const heightsMap = elevationMap.map((height) => ({
    height,
    left: null,
    right: null,
  }));

  let leftHeight = heightsMap[0].height;
  for (let i = 1; i < heightsMap.length; i++) {
    heightsMap[i].left = leftHeight;
    leftHeight =
      leftHeight > heightsMap[i].height ? leftHeight : heightsMap[i].height;
  }

  let rightHeight = heightsMap[heightsMap.length - 1].height;
  for (let i = heightsMap.length - 2; i >= 0; i--) {
    heightsMap[i].right = rightHeight;
    rightHeight =
      rightHeight > heightsMap[i].height ? rightHeight : heightsMap[i].height;
  }

  let waterTotal = 0;
  for (let i = 1; i < heightsMap.length - 1; i++) {
    const { height, left, right } = heightsMap[i];
    const minWall = Math.min(left, right);
    waterTotal += minWall < height ? 0 : minWall - height;
  }

  return waterTotal;
};
