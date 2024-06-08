// Solution to problem 7. Reverse Integer
//
// https://leetcode.com/problems/reverse-integer/

let reverseInteger = function (x) {
  let res = "";
  if (x == 0) return x;

  if (x < 0) res += "-";
  while (Math.abs(x) !== 0) {
    let lastDigit = Math.abs(x % 10);

    res += lastDigit;

    x = Math.floor(Math.abs(x) / 10);
  }

  const integerBound = Math.pow(2, 31) - 1;

  res = parseInt(res);

  if (Math.abs(res) > integerBound) return 0;

  return 0;
};

let res = reverseInteger(1534236469);
console.log(res);
