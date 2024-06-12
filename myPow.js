// Solution to problem 50. Pow(x, n) using binary exponentiation method
//
// https://leetcode.com/problems/powx-n/

let myPow = function (x, n) {
  let tempN = n;
  if (n < 0) {
    tempN *= -1;
    x = 1 / x;
  }

  if (tempN == 0) return 1;

  let res = myPow(x, Math.floor(tempN / 2));

  if (tempN % 2 == 1) {
    return res * res * x;
  }

  return res * res;
};

let res = myPow(2, 10);

console.log(res);
