export const fibonacciSequence = (n) => {
  const fibonacciSeq = [1];
  let currentValue = 1;
  let previousValue = 0;

  for (let i = 2; i <= n; i++) {
    currentValue = currentValue + previousValue;
    previousValue = currentValue - previousValue;
    fibonacciSeq.push(currentValue);
  }

  return fibonacciSeq;
};

export const fibonacciNth = (n) => {
  let currentValue = 1;
  let previousValue = 0;

  for (let i = 2; i <= n; i++) {
    currentValue = currentValue + previousValue;
    previousValue = currentValue - previousValue;
  }

  return currentValue;
};
