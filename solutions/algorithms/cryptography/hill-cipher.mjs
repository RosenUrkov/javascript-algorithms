import { matrices } from "../math/matrices.mjs";

export const hillCipher = (string) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const punctuationSymbols = [" ", ",", ".", "!", "?"];

  const keyMatrix = [
    [6, 24, 1],
    [13, 16, 10],
    [20, 17, 15],
  ];

  const messageMatrix = Array.from({
    length: keyMatrix[0].length,
  }).map(() => []);

  for (let i = 0; i < string.length; i++) {
    if (punctuationSymbols.includes(string[i])) {
      continue;
    }

    const letterIndex = letters.indexOf(string[i].toUpperCase());
    messageMatrix[i % messageMatrix.length].push(letterIndex);
  }

  const multiplicationMatrix = matrices.multiplyMatrices(
    keyMatrix,
    messageMatrix
  );

  const encryptedMsgMatrix = matrices.module(
    letters.length,
    multiplicationMatrix
  );

  const encryptedMessage = [];
  for (let row = 0; row < encryptedMsgMatrix.length; row++) {
    for (let col = 0; col < encryptedMsgMatrix[0].length; col++) {
      const encryptedLetterIndex = encryptedMsgMatrix[row][col];
      encryptedMessage.push(letters[encryptedLetterIndex].toLowerCase());
    }
  }

  return encryptedMessage.join("");
};
