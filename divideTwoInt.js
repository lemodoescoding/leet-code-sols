// Solution to problem 29. Divide Two Integers
//
// https://leetcode.com/problems/divide-two-integers/

let divideTwoInt = function (dividend, divisor) {
  const isNeg = (dividend > 0) ^ (divisor > 0);

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let mul = 0;
  while (divisor <= dividend) {
    let val = divisor;
    let count = 1;

    while (val + val <= dividend) {
      val += val;
      count += count;
    }

    dividend = dividend - val;
    mul += count;
  }

  if (mul > Math.pow(2, 31) - 1) {
    return isNeg ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  }
  return isNeg ? -mul : mul;
};

let res = divideTwoInt(-2147483648, -1);
console.log(res);
