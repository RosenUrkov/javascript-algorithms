import { createDoublyLinkedList } from "./doubly-linked-list.mjs";

export const graph = (() => {
  const generateEdgesList = (nodesCount) => {
    return Array.from({ length: nodesCount }).map(() => {
      const weight = Math.floor(Math.random() * nodesCount);
      const from = Math.floor(Math.random() * nodesCount);

      let to = Math.floor(Math.random() * nodesCount);
      while (from === to) {
        to = Math.floor(Math.random() * nodesCount);
      }

      return [from, to, weight];
    });
  };

  // [from, to, weight] -> edges list
  const linkAdjacency = (nodesCount, edgesList) => {
    const adjList = Array.from({ length: nodesCount }).map(() =>
      createDoublyLinkedList()
    );

    return edgesList.reduce((list, [from, to, weight]) => {
      list[from].append([to, weight]);
      list[to].append([from, weight]);

      return list;
    }, adjList);
  };

  // [from, to, weight] -> edges list
  const linkNeighborhoodMatrix = (nodesCount, edgesList) => {
    const matrix = Array.from({ length: nodesCount }).map(() =>
      Array.from({ length: nodesCount }).map(() => null)
    );

    edgesList.forEach(([from, to, weight]) => {
      matrix[from][to] = weight;
    });

    return matrix;
  };

  return {
    generateEdgesList,
    linkAdjacency,
    linkNeighborhoodMatrix,
  };
})();
