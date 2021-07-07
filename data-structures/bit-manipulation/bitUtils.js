/**
 * js 是使用64位表示有符号数字的，但是位处理使用的是有符号32位的补码表示
 *
 * 处理完之后返回的是64位的有符号的
 *
 * java里的位操作使用的是整数，但是js只有双精度浮点数。所以位操作将操作数转换成整数
 * 在将整数转化回来。
 */
export const getBit = (number, bitPosition) => {
  return (number >> bitPosition) & 1;
};

export const setBit = (number, bitPosition) => {
  return number | (1 << bitPosition);
};

export const clearBit = (number, bitPosition) => {
  const mask = ~(1 << bitPosition);
  return number & mask;
};

export const updateBit = (number, bitPosition, bitValue) => {
  const bitValueNormalized = bitValue ? 1 : 0;
  const clearMask = ~(1 << bitPosition);
  return (number & clearMask) | (bitValueNormalized << bitPosition);
};
export const isEven = (number) => {
  return (number & 1) === 0;
};

export const isPositive = (number) => {
  if (number === 0) {
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
  let bitsCounter = 0;
  while (1 << bitsCounter <= number) {
    bitsCounter += 1;
  }

  return bitsCounter;
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

export const multiplyUnsigned = (number1, number2) => {
  let result = 0;
  let multiplier = number2;
  let bitIndex = 0;
  while (multiplier !== 0) {
    if (multiplier & 1) {
      result += number1 << bitIndex;
    }

    bitIndex += 1;
    multiplier >>= 1;
  }
  return result;
};

export const multiply = (a, b) => {
  if (b === 0 || a === 0) {
    return 0;
  }

  const multiplyByOddPositive = () =>
    multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
  const multiplyByOddNegative = () =>
    multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;
  const multiplyByEven = () => multiply(multiplyByTwo(a), divideByTwo(b));
  const multiplyByOdd = () =>
    isPositive(b) ? multiplyByOddPositive() : multiplyByOddNegative();

  return isEven(b) ? multiplyByEven() : multiplyByOdd();
};
