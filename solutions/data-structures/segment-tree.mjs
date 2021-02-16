const createTreeNode = (
  value,
  startRange = null,
  endRange = null,
  left = null,
  right = null
) => {
  return {
    value,
    startRange,
    endRange,
    left,
    right,
  };
};

export const createSegmentTree = (
  rangeFn = (x, y) => (x < y ? x : y),
  emptyFnElement = Number.MAX_SAFE_INTEGER
) => {
  let root = null;

  const parseArray = function (array) {
    const parseArrayRecursive = (start, end) => {
      if (start === end - 1) {
        return createTreeNode(array[start], start, end - 1);
      }

      const midIndex = Math.floor((start + end + 1) / 2);

      const left = parseArrayRecursive(start, midIndex);
      const right = parseArrayRecursive(midIndex, end);

      const value = rangeFn(left.value, right.value);
      return createTreeNode(value, start, end - 1, left, right);
    };

    root = parseArrayRecursive(0, array.length);
    return this;
  };

  const getRangeResult = (start, end) => {
    if (root === null) {
      return null;
    }

    const getRangeResultRecursive = (node) => {
      // total overlap
      if (node.startRange >= start && node.endRange <= end) {
        return node.value;
      }

      // partial overlap
      if (
        (node.startRange < start && node.endRange > end) ||
        (node.startRange <= start &&
          start <= node.endRange &&
          node.endRange <= end) ||
        (node.startRange >= start &&
          node.startRange <= end &&
          node.endRange >= end)
      ) {
        const leftResult = getRangeResultRecursive(node.left);
        const rightResult = getRangeResultRecursive(node.right);

        return rangeFn(leftResult, rightResult);
      }

      // no overlap
      return emptyFnElement;
    };

    return getRangeResultRecursive(root);
  };

  return {
    parseArray,
    getRangeResult,
  };
};
