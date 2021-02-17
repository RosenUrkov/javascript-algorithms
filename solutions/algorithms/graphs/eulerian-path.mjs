export const eurelianPath = (edgesList, nodesCount) => {
  const edgesConnected = Array.from({ length: nodesCount + 1 }).map(() => 0);

  for (let i = 0; i < edgesList.length; i++) {
    const [from, to] = edgesList[i];

    edgesConnected[from]++;
    edgesConnected[to]++;
  }

  const eulerianCycle = edgesConnected.every((x) => x % 2 === 0);
  if (eulerianCycle) {
    return "cycle";
  }

  const eulerianTrail = edgesConnected.filter((x) => x % 2 === 1).length === 2;
  if (eulerianTrail) {
    return "trail";
  }

  return "none";
};
