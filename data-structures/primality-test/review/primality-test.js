export const trialDivision = (number) => {
    // 去除小数
  if (number % 1 !== 0) {
    return false;
  }
  // 小于等于1的数肯定不是质数
  if (number <= 1) {
    return false;
  }
  // 大于1小于3的数是质数
  if (number <= 3) {
    return true;
  }
  // 大于3的任何偶数都不是质数，同时也过滤掉所有能被2整数的因数
  if (number % 2 === 0) {
    return false;
  }

  // 开平方取得最大的除数
  let dividedNumber = Math.floor(Math.sqrt(number));
  // 取从3开始的每一个奇数，直至到开平方数，任何比开平方大的数，
  // 实际上都已经遍历过了
  for (let i = 3; i <= dividedNumber; i += 2) {
    // 如果能被任何一个奇数整数就不是质数
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
