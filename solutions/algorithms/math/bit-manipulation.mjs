export const bitManipulations = (() => {
  const getBit = (number, bitPosition) => {
    const shifted = number >> bitPosition;
    return shifted & 1;
  };

  const setBit = (number, bitPosition, bitValue) => {
    const mask = 1 << bitPosition;

    if (bitValue === 1) {
      return number | mask;
    }

    return number & ~mask;
  };

  const isEven = (number) => {
    return (number & 1) === 0;
  };

  const isPositive = (number) => {
    const shifted = number >> 31;
    return (shifted & 1) === 0;
  };

  const multiplyByTwo = (number) => {
    return number << 1;
  };

  const divideByTwo = (number) => {
    return number >> 1;
  };

  const switchSign = (number) => {
    return ~number + 1;
  };

  const multiplyTwoSignedNumbers = (num1, num2) => {
    if (num1 === 0 || num2 === 0) {
      return 0;
    }

    if (num2 === 1) {
      return num1;
    }

    if (isEven(num2)) {
      return multiplyTwoSignedNumbers(num1 << 1, num2 >> 1);
    }

    if (isPositive(num2)) {
      const divider = (num2 - 1) >> 1;
      return multiplyTwoSignedNumbers(num1 << 1, divider + num1);
    }

    const divider = (num2 + 1) >> 1;
    return multiplyTwoSignedNumbers(num1 << 1, divider - num1);
  };

  const multiplyTwoUnsignedNumbers = (num1, num2) => {
    let multiplier = 0;
    let multiplyCoeff = num2;

    let result = 0;
    while (multiplyCoeff > 0) {
      const currentBit = multiplyCoeff & 1;
      result += currentBit ? num1 << multiplier : 0;

      multiplier += 1;
      multiplyCoeff >>= 1;
    }

    return result;
  };

  const countSetBits = (number) => {
    let result = 0;
    let shiftNumber = number;

    while (shiftNumber > 0) {
      result += shiftNumber & 1;
      shiftNumber >>= 1;
    }

    return result;
  };

  const countBitsToFlipOneNumberToAnother = (num1, num2) => {
    return countSetBits(num1 ^ num2);
  };

  const countBitsOfANumber = (number) => {
    let result = 0;
    let shiftNumber = number;

    while (shiftNumber > 0) {
      result += 1;
      shiftNumber >>= 1;
    }

    return result;
  };

  const isPowerOfTwo = (number) => {
    return (number & (number - 1)) === 0;
  };

  const fullAdder = (num1, num2) => {
    let carryBit = 0;
    let result = 0;

    for (let i = 0; i < 32; i++) {
      const bit1 = getBit(num1, i);
      const bit2 = getBit(num2, i);
      const carryIn = carryBit;

      const bitSum = bit1 ^ bit2;
      const carrySum = bitSum ^ carryIn;

      const carryOut = (bitSum & carryIn) | (bit1 & bit2);
      carryBit = carryOut;

      result = setBit(result, i, carrySum);
    }

    return result;
  };

  return {
    getBit,
    setBit,
    isEven,
    isPositive,
    multiplyByTwo,
    divideByTwo,
    switchSign,
    multiplyTwoSignedNumbers,
    multiplyTwoUnsignedNumbers,
    countSetBits,
    countBitsToFlipOneNumberToAnother,
    countBitsOfANumber,
    isPowerOfTwo,
    fullAdder,
  };
})();
