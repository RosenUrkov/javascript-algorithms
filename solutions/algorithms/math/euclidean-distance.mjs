export const euclideanDistance = (coords1, coords2) => {
  return Math.sqrt(
    coords1.reduce((acc, _, i) => {
      return acc + Math.pow(coords1[i] - coords2[i], 2);
    }, 0)
  ).toFixed(2);
};
