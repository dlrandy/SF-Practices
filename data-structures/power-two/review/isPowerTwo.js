export const isPowerOfTwo = (number) => {
    if (number < 1) {
        return false;
    }

    while (number !== 1) {
        if (number % 2 !== 0) {
            return false;
        }
        number = Math.floor(number / 2);
    }

    return true;
};
 
export const isPowerOfTwoBitWise = (number) => {
  if (number < 1) {
      return false;
  }
  // 位操作的优先级最小
  return (number & (number - 1)) === 0;
};
