// Solution Problem number 66. Plus One
//
// https://leetcode.com/problems/plus-one/

let plusOne = function (digits) {
  let i = digits.length - 1;

  digits[i] += 1;

  let carry = 0;
  while (i >= 0) {
    let sum = 0;
    if (i >= 0) {
      sum += digits[i] + carry;

      carry = Math.floor(sum / 10);

      digits[i] = sum % 10;
    }

    console.log(carry);

    if (carry > 0 && i == 0) {
      digits.unshift(carry);
    }

    i--;
  }

  return digits;
};

let res = plusOne([4, 9, 9, 9]);

console.log(res);
