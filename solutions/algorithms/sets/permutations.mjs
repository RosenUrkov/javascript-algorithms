export const permutationsWithRepetition = (number) => {
  const permutationsRecursive = (currNumber) => {
    if (currNumber === 1) {
      return Array.from({ length: number }).map((_, i) => [i + 1]);
    }

    const lowerPermutations = permutationsRecursive(currNumber - 1);
    const newPermutations = [];

    for (let i = 0; i < lowerPermutations.length; i++) {
      for (let j = 1; j <= number; j++) {
        newPermutations.push([...lowerPermutations[i], j]);
      }
    }

    return newPermutations;
  };

  return permutationsRecursive(number);
};

export const permutationsWithoutRepetition = (number) => {
  const permutationsRecursive = (currNumber) => {
    if (currNumber === 1) {
      return Array.from({ length: number }).map((_, i) => new Set().add(i + 1));
    }

    const lowerPermutations = permutationsRecursive(currNumber - 1);
    const newPermutations = [];

    for (let i = 0; i < lowerPermutations.length; i++) {
      for (let j = 1; j <= number; j++) {
        if (!lowerPermutations[i].has(j)) {
          const newPermutation = new Set(lowerPermutations[i].values());
          newPermutation.add(j);

          newPermutations.push(newPermutation);
        }
      }
    }

    return newPermutations;
  };

  return permutationsRecursive(number);
};

console.log(permutationsWithoutRepetition(3));
