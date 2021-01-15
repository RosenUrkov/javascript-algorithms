export const fisherYatesShuffle = (sequenceArr) => {
  const permutation = [];
  const len = sequenceArr.length;

  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * sequenceArr.length);
    permutation.push(sequenceArr.splice(randomIndex, 1)[0]);
  }

  return permutation;
};
