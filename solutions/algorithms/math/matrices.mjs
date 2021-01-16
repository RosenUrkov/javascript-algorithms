export const matrices = (() => {
  const add = (matrix1, matrix2) => {
    const resultMatrix = Array.from({ length: matrix1.length }).map(() => []);

    for (let row = 0; row < matrix1.length; row++) {
      for (let col = 0; col < matrix1[0].length; col++) {
        resultMatrix[row][col] = matrix1[row][col] + matrix2[row][col];
      }
    }

    return resultMatrix;
  };

  const subtract = (matrix1, matrix2) => {
    const resultMatrix = Array.from({ length: matrix1.length }).map(() => []);

    for (let row = 0; row < matrix1.length; row++) {
      for (let col = 0; col < matrix1[0].length; col++) {
        resultMatrix[row][col] = matrix1[row][col] - matrix2[row][col];
      }
    }

    return resultMatrix;
  };

  const module = (constant, matrix) => {
    const resultMatrix = Array.from({ length: matrix.length }).map(() => []);

    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        resultMatrix[row][col] = matrix[row][col] % constant;
      }
    }

    return resultMatrix;
  };

  const multiplyConstant = (constant, matrix) => {
    const resultMatrix = Array.from({ length: matrix.length }).map(() => []);

    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        resultMatrix[row][col] = constant * matrix[row][col];
      }
    }

    return resultMatrix;
  };

  const multiplyMatrices = (matrix1, matrix2) => {
    if (matrix1[0].length !== matrix2.length) {
      throw new Error(
        "The cols of the first matrix should be equal to the rows of the second one!"
      );
    }

    const resultMatrix = Array.from({
      length: matrix1.length,
    }).map(() => []);

    for (let i = 0; i < matrix1.length; i++) {
      for (let j = 0; j < matrix2[0].length; j++) {
        let dotProduct = 0;
        for (let k = 0; k < matrix1[0].length; k++) {
          dotProduct += matrix1[i][k] * matrix2[k][j];
        }

        resultMatrix[i][j] = dotProduct;
      }
    }

    return resultMatrix;
  };

  const transposing = (matrix) => {
    const resultMatrix = Array.from({
      length: matrix[0].length,
    }).map(() => []);

    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        resultMatrix[col][row] = matrix[row][col];
      }
    }

    return resultMatrix;
  };

  return {
    add,
    subtract,
    module,
    multiplyConstant,
    multiplyMatrices,
    transposing,
  };
})();
