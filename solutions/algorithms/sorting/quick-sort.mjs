export const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array.pop();

  const left = [];
  const right = [];

  array.forEach((x) => {
    if (x <= pivot) {
      left.push(x);
    } else {
      right.push(x);
    }
  });

  return [...quickSort(left), pivot, ...quickSort(right)];
};
