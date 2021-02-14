import { euclideanDistance } from "../math/euclidean-distance.mjs";

export const kNearestNeighbors = (objectCoords, dataset, k) => {
  const closestClassesByPresence = dataset
    .map((data) => {
      return {
        ...data,
        distance: +euclideanDistance(objectCoords, data.coords),
      };
    })
    .sort((x, y) => x.distance - y.distance)
    .slice(0, k)
    .map((x) => x.class)
    .reduce((classesByPresence, currentClass) => {
      if (!classesByPresence[currentClass]) {
        classesByPresence[currentClass] = 0;
      }

      classesByPresence[currentClass] += 1;
      return classesByPresence;
    }, {});

  return Object.keys(closestClassesByPresence).sort(
    (x, y) => closestClassesByPresence[y] - closestClassesByPresence[x]
  )[0];
};
