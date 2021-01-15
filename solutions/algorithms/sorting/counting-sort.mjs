export const countingSort = (array) => {
  const helper = {};

  array.forEach((num) => {
    helper[num] = helper[num] ? helper[num] + 1 : 1;
  });

  let offset = 0;
  Object.keys(helper).forEach((key) => {
    offset += helper[key];
    helper[key] = offset;
  });

  const result = [];
  array.forEach((num) => {
    const index = helper[num] - 1;
    helper[num]--;
    result[index] = num;
  });

  return result;
};
