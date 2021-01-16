export const staircaseR = (stairs) => {
  const memo = {};

  const staircaseRecursive = (stairs) => {
    if (stairs < 0) {
      return 0;
    }
    if (stairs === 0) {
      return 1;
    }

    if (!memo[stairs]) {
      const oneStepAttempt = staircaseRecursive(stairs - 1);
      const twoStepsAttempt = staircaseRecursive(stairs - 2);

      memo[stairs] = oneStepAttempt + twoStepsAttempt;
    }

    return memo[stairs];
  };

  return staircaseRecursive(stairs);
};

export const staircaseDP = (stairs) => {
  const possibilities = Array.from({ length: stairs }).map(() => 0);
  possibilities[0] = 1;
  possibilities[1] = 2;

  for (let i = 2; i < possibilities.length; i++) {
    possibilities[i] = possibilities[i - 1] + possibilities[i - 2];
  }

  return possibilities[possibilities.length - 1];
};
