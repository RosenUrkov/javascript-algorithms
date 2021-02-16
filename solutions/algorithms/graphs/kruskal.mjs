export const kruskal = (edgesList, nodesCount) => {
  const treesMap = Array.from({ length: nodesCount + 1 }).map(() => 0);
  const resultEdges = [];

  let treesCount = 1;

  edgesList
    .sort((x, y) => x[2] - y[2])
    .forEach((edge) => {
      const [from, to] = edge;

      if (treesMap[from] === 0) {
        if (treesMap[to] === 0) {
          treesMap[from] = treesCount;
          treesMap[to] = treesCount;
          treesCount++;
        } else {
          treesMap[from] = treesMap[to];
        }

        resultEdges.push(edge);
      } else {
        if (treesMap[to] === 0) {
          treesMap[to] = treesMap[from];
          resultEdges.push(edge);
        } else if (treesMap[from] !== treesMap[to]) {
          const oldTree = treesMap[to];

          for (let i = 1; i < treesMap.length; i++) {
            if (treesMap[i] === oldTree) {
              treesMap[i] = treesMap[from];
            }
          }

          resultEdges.push(edge);
        }
      }
    });

  return {
    treesCount,
    treesMap: treesMap,
    resultEdges,
  };
};
