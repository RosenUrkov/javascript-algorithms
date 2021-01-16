export const createDisjointSet = () => {
  const sets = [];

  const mapElToIndex = new Map();
  const mapIndexToEl = new Map();

  const add = (element) => {
    const index = sets.length;

    mapElToIndex.set(element, index);
    mapIndexToEl.set(index, element);
    sets.push(-1);

    return element;
  };

  const union = (element1, element2) => {
    const index1 = mapElToIndex.get(element1);
    const index2 = mapElToIndex.get(element2);

    const representativeIndex1 = unionFind(index1);
    const representativeIndex2 = unionFind(index2);

    if (representativeIndex1 === representativeIndex2) {
      return false;
    }

    sets[representativeIndex1] = representativeIndex2;
    return true;
  };

  const find = (element) => {
    const index = mapElToIndex.get(element);
    const representativeIndex = unionFind(index);
    return mapIndexToEl.get(representativeIndex);
  };

  const unionFind = (index) => {
    if (sets[index] < 0) {
      return index;
    }

    sets[index] = unionFind(sets[index]);
    return sets[index];
  };

  return {
    add,
    union,
    find,
  };
};
