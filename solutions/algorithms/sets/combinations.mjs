export const combinationsWithRepetition = (set, combLen) => {
  const combinations = [];

  const combinationsRecursive = (lastMember, currCombo) => {
    if (currCombo.length === combLen) {
      combinations.push(currCombo);
      return;
    }

    for (let i = lastMember; i < set.length; i++) {
      combinationsRecursive(i, [...currCombo, set[i]]);
    }
  };

  combinationsRecursive(0, []);

  return combinations;
};

export const combinationsWithoutRepetition = (set, combLen) => {
  const combinations = [];

  const combinationsRecursive = (nextMember, currCombo) => {
    if (currCombo.length === combLen) {
      combinations.push(currCombo);
      return;
    }

    for (let i = nextMember; i < set.length; i++) {
      combinationsRecursive(i + 1, [...currCombo, set[i]]);
    }
  };

  combinationsRecursive(0, []);

  return combinations;
};
