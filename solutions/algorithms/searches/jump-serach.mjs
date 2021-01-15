export const jumpSearch = (sortedArr, target) => {
  const jumpStep = Math.floor(Math.sqrt(sortedArr.length));

  let startIntervalIndex = 0;
  let endIntervalIndex = jumpStep;

  while (startIntervalIndex <= endIntervalIndex) {
    if (
      sortedArr[startIntervalIndex] <= target &&
      target < sortedArr[endIntervalIndex]
    ) {
      return sortedArr.indexOf(target, startIntervalIndex);
    }

    startIntervalIndex = endIntervalIndex;
    endIntervalIndex = Math.min(
      endIntervalIndex + jumpStep,
      sortedArr.length - 1
    );
  }

  return -1;
};
