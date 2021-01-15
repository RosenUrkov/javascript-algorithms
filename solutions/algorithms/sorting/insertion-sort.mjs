export const insertionSort = (array) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let insertIndex = result.length;

    for (let j = result.length; j >= 0; j--) {
      if (array[i] < result[j]) {
        insertIndex = j;
      }
    }

    result.splice(insertIndex, 0, array[i]);
  }

  return result;
};

console.log(insertionSort([4, 2, 3, 1, -1, 0, 8, 5, 19, -2]));
