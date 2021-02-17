export const hamiltonianPath = (edgesList, nodesCount) => {
  const path = [edgesList[0][0]];

  let neighborEdges = edgesList.filter(
    ([from, to]) =>
      from === path[path.length - 1] || to === path[path.length - 1]
  );

  while (neighborEdges.length && path.length < nodesCount) {
    const [from, to] = neighborEdges.pop();
    const neighbor = from === path[path.length - 1] ? to : from;

    if (path.includes(neighbor)) {
      continue;
    }

    path.push(neighbor);
    neighborEdges = edgesList.filter(
      ([from, to]) => from === neighbor || to === neighbor
    );
  }

  return path.length === nodesCount;
};
