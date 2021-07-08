export const getBit = (number, bitPosition) => {
  return (number >> bitPosition) & 1;
};

export const setBit = (number, bitPosition) => {
  return number | (1 << bitPosition);
};

export const clearBit = (number, bitPosition) => {
  return number & ~(1 << bitPosition);
};

export const updateBit = (number, bitPosition, bitValue) => {
  const mask = ~(1 << bitPosition);
  let bitValueNormalized = bitValue ? 1 : 0;
  return (number & mask) | (bitValueNormalized << bitPosition);
};
export const isEven = (number) => {
  return (number & 1) === 0;
};

export const isPositive = (number) => {
  if (number === false) {
    return false;
  }
  return ((number >> 31) & 1) === 0;
};

export const multiplyByTwo = (number) => {
  return number << 1;
};

export const divideByTwo = (number) => {
  return number >> 1;
};

export const switchSign = (number) => {
  return ~number + 1;
};

export const bitLength = (number) => {
  let bitCounter = 0;
  while (1 << bitCounter <= number) {
    bitCounter++;
  }
  return bitCounter;
};

export function countSetBits(originalNumber) {
    let setBitsCount = 0;
    let number = originalNumber;
    while (number) {
        setBitsCount += number & 1;
        number >>= 1;
    }
return setBitsCount;

}

export function bitsDiff(numberA, numberB) {
    return countSetBits(numberA ^ numberB);
}

export const multiplyUnsigned = (number1, number2) => {};

export const multiply = (a, b) => {};
