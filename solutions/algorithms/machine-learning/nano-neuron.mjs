const createNanoNeuron = (w, b) => {
  return {
    w,
    b,
    predict(x) {
      return x * this.w + this.b;
    },
  };
};

const celsiusToFahrenheit = (c) => {
  const w = 1.8;
  const b = 32;

  return c * w + b;
};

const generateDataSets = () => {
  // xTrain -> [0, 1, 2, ...],
  // yTrain -> [32, 33.8, 35.6, ...]
  const xTrain = [];
  const yTrain = [];

  for (let x = 0; x < 100; x += 1) {
    const y = celsiusToFahrenheit(x);
    xTrain.push(x);
    yTrain.push(y);
  }

  // xTest -> [0.5, 1.5, 2.5, ...]
  // yTest -> [32.9, 34.7, 36.5, ...]
  const xTest = [];
  const yTest = [];

  // By starting from 0.5 and using the same step of 1 as we have used for training set
  // we make sure that test set has different data comparing to training set.
  for (let x = 0.5; x < 100; x += 1) {
    const y = celsiusToFahrenheit(x);
    xTest.push(x);
    yTest.push(y);
  }

  return [xTrain, yTrain, xTest, yTest];
};

const predictionCost = (y, prediction) => {
  return (y - prediction) ** 2 / 2; // i.e. -> 235.6
};

const forwardPropagation = (model, xTrain, yTrain) => {
  const m = xTrain.length;
  const predictions = [];
  let cost = 0;

  for (let i = 0; i < m; i += 1) {
    const prediction = model.predict(xTrain[i]);
    cost += predictionCost(yTrain[i], prediction);
    predictions.push(prediction);
  }

  // We are interested in average cost.
  cost /= m;
  return [predictions, cost];
};

const backwardPropagation = (predictions, xTrain, yTrain) => {
  const m = xTrain.length;
  // At the beginning we don't know in which way our parameters 'w' and 'b' need to be changed.
  // Therefore we're setting up the changing steps for each parameters to 0.
  let dW = 0;
  let dB = 0;

  for (let i = 0; i < m; i += 1) {
    dW += (yTrain[i] - predictions[i]) * xTrain[i];
    dB += yTrain[i] - predictions[i];
  }

  // We're interested in average deltas for each params.
  dW /= m;
  dB /= m;

  return [dW, dB];
};

const trainModel = (model, epochs, alpha, xTrain, yTrain) => {
  // The is the history array of how NanoNeuron learns.
  const costHistory = [];

  // Let's start counting epochs.
  for (let epoch = 0; epoch < epochs; epoch += 1) {
    // Forward propagation.
    const [predictions, cost] = forwardPropagation(model, xTrain, yTrain);
    costHistory.push(cost);

    // Backward propagation.
    const [dW, dB] = backwardPropagation(predictions, xTrain, yTrain);

    // Adjust our NanoNeuron parameters to increase accuracy of our model predictions.
    model.w += alpha * dW;
    model.b += alpha * dB;
  }

  return costHistory;
};

const w = Math.random(); // i.e. -> 0.9492
const b = Math.random(); // i.e. -> 0.4570
const nanoNeuron = createNanoNeuron(w, b);

const [xTrain, yTrain, xTest, yTest] = generateDataSets();

const epochs = 70000;
const alpha = 0.0005;
const trainingCostHistory = trainModel(
  nanoNeuron,
  epochs,
  alpha,
  xTrain,
  yTrain
);

console.log("Cost before the training:", trainingCostHistory[0]); // i.e. -> 4694.3335043
console.log("Cost after the training:", trainingCostHistory[epochs - 1]); // i.e. -> 0.0000024

console.log("NanoNeuron parameters:", { w: nanoNeuron.w, b: nanoNeuron.b }); // i.e. -> {w: 1.8, b: 31.99}

const [predictions, testCost] = forwardPropagation(nanoNeuron, xTest, yTest);
console.log("Cost on new testing data:", testCost); // i.e. -> 0.0000023

const tempInCelsius = 70;
const customPrediction = nanoNeuron.predict(tempInCelsius);
console.log(
  `NanoNeuron "thinks" that ${tempInCelsius}°C in Fahrenheit is:`,
  customPrediction
); // -> 158.0002
console.log("Correct answer is:", celsiusToFahrenheit(tempInCelsius)); // -> 158
