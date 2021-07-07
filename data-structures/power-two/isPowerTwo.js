export const isPowerOfTwo = (number) => {
  if (number < 1) {
    return false;
  }
  let dividedNumber = number;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false;
    }
    dividedNumber = Math.floor(dividedNumber / 2);
  }

  return true;
};
/**
 * 2的幂的二进制一般都是只含有一个1的(处理有符号的整数， -128)，一旦减1
 * 除了符号位外都是1，在与上原来的数，一定会得0；
 */
export const isPowerOfTwoBitWise = (number) => {
  if (number < 1) {
    return false;
  }

  return (number & (number - 1)) === 0;
};
