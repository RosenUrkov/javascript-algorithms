export const maximumSubarray = (array) => {
  const subArraysSum = array.slice();

  for (let i = 1; i < subArraysSum.length; i++) {
    if (subArraysSum[i - 1] + subArraysSum[i] > subArraysSum[i]) {
      subArraysSum[i] = subArraysSum[i - 1] + subArraysSum[i];
    }
  }

  let maxSum = Math.max(...subArraysSum);
  const endOfSequence = subArraysSum.findIndex((x) => x === maxSum);

  const result = [];
  for (let i = endOfSequence; i >= 0; i--) {
    result.push(array[i]);

    if (maxSum - array[i] === 0) {
      break;
    }

    maxSum -= array[i];
  }

  return result.reverse();
};
