export const createFenwickTree = () => {
  let tree = null;
  let numbers = null;

  const parseArray = function (array) {
    numbers = array.slice();
    tree = Array.from({ length: array.length + 1 }).map(() => 0);

    for (let i = 0; i < array.length; i++) {
      setTreeValues(i + 1, array[i]);
    }

    return this;
  };

  const getRangeResult = (start, end) => {
    const getRangeResultRecursive = (index) => {
      if (index === 0) {
        return 0;
      }

      return tree[index] + getRangeResultRecursive(getParentIndex(index));
    };

    return getRangeResultRecursive(end + 1);
  };

  const update = (index, value) => {
    setTreeValues(index + 1, value - numbers[index]);
    numbers[index] = value;
    return numbers[index];
  };

  const setTreeValues = (treeIndex, value) => {
    if (treeIndex >= tree.length) {
      return;
    }

    tree[treeIndex] = tree[treeIndex] + value;
    return setTreeValues(getNextIndex(treeIndex), value);
  };

  const getNextIndex = (index) => {
    const mask = ~index + 1;
    const complimentary = index & mask;
    return index + complimentary;
  };

  const getParentIndex = (childIndex) => {
    const mask = ~childIndex + 1;
    const complimentary = childIndex & mask;
    return childIndex - complimentary;
  };

  return {
    parseArray,
    update,
    getRangeResult,
  };
};
