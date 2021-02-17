import { createStack } from "../../data-structures/stack.mjs";

export const articulationPoints = (edgesList, nodesCount) => {
  const tryTraverseGraph = (edgesList) => {
    const visited = new Set();

    const stack = createStack();
    stack.push(edgesList[0][0]);

    while (!stack.isEmpty()) {
      const node = stack.pop();

      if (visited.has(node)) {
        continue;
      }

      visited.add(node);

      edgesList
        .filter(([from, to]) => from === node)
        .forEach(([_, to]) => stack.push(to));

      edgesList
        .filter(([from, to]) => to === node)
        .forEach(([from, _]) => stack.push(from));
    }

    return visited.size !== nodesCount - 1;
  };

  const points = [];

  for (let node = 1; node <= nodesCount; node++) {
    const edgesWithoutNode = edgesList.filter(
      ([from, to]) => from !== node && to !== node
    );

    const isArticPoint = tryTraverseGraph(edgesWithoutNode);
    if (isArticPoint) {
      points.push(node);
    }
  }

  return points;
};
