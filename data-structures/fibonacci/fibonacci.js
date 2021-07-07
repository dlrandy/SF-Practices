 export const fibonacciSequence = (n) => {
     const fibSeq = [1];
    if (n === 1) {
        return fibSeq;
    }
    let currentValue = 1;
    let previousValue = 0;
    let iterationCounter = n - 1;
    while (iterationCounter) {
        currentValue += previousValue;
        previousValue = currentValue - previousValue;
        fibSeq.push(currentValue);
        iterationCounter -= 1;
    }

     return fibSeq;
 }
 
 export const fibonacciNth = (n) => {
    let currentValue = 1;
    let previousValue = 0;
    if (n === 1) {
        return currentValue;
    }

    let iterationCounter = n - 1;
    while (iterationCounter) {
        currentValue += previousValue;
        previousValue = currentValue - previousValue;
        iterationCounter -= 1;
    }

     return currentValue;
 }
 