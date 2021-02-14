import { euclideanDistance } from "../math/euclidean-distance.mjs";

export const kMeans = (dataset, k) => {
  const clusters = Array.from({ length: k }).map((_, i) => {
    return {
      name: i,
      coords: dataset[Math.floor(Math.random() * dataset.length)].coords,
    };
  });

  const clusteredData = dataset.map((data) => {
    return {
      ...data,
      clusterName: null,
      clusterDistance: Number.MAX_SAFE_INTEGER,
    };
  });

  while (true) {
    const changesMade = assignClosestClusters(clusteredData, clusters);

    if (changesMade < clusteredData.length / 5) {
      break;
    }

    centerClusters(clusteredData, clusters);
  }

  return {
    clusters,
    data: clusteredData,
  };
};

const assignClosestClusters = (data, clusters) => {
  return clusters.reduce((changedClusterData, cluster) => {
    return (
      changedClusterData +
      data.reduce((changedAcc, dataPoint) => {
        const distance = +euclideanDistance(cluster.coords, dataPoint.coords);
        if (
          dataPoint.clusterName === cluster.name ||
          distance < dataPoint.clusterDistance
        ) {
          const shouldCountChange =
            dataPoint.clusterName === cluster.name ? 0 : 1;

          dataPoint.clusterDistance = distance;
          dataPoint.clusterName = cluster.name;

          return changedAcc + shouldCountChange;
        }

        return changedAcc;
      }, 0)
    );
  }, 0);
};

const centerClusters = (data, clusters) => {
  clusters.forEach((cluster) => {
    const dataPerCluster = data.filter(
      (dataPoint) => dataPoint.clusterName === cluster.name
    );

    const [xSum, ySum] = dataPerCluster.reduce(
      ([xAcc, yAcc], { coords }) => [xAcc + coords[0], yAcc + coords[1]],
      [0, 0]
    );

    const averageCoords = [
      Math.floor(xSum / dataPerCluster.length),
      Math.floor(ySum / dataPerCluster.length),
    ];

    cluster.coords = averageCoords;
  });
};
