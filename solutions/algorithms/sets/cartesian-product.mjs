export const cartesianProduct = (set1, set2) => {
  const resultSet = [];

  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      resultSet.push([set1[i], set2[j]]);
    }
  }

  return resultSet;
};
