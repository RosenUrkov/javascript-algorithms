export const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.round(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex, array.length);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (!leftSorted[leftIndex]) {
      result.push(...rightSorted.slice(rightIndex));
      break;
    }
    if (!rightSorted[rightIndex]) {
      result.push(...leftSorted.slice(leftIndex));
      break;
    }

    if (leftSorted[leftIndex] <= rightSorted[rightIndex]) {
      result.push(leftSorted[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightSorted[rightIndex]);
      rightIndex++;
    }
  }

  return result;
};
