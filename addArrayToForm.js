// Solution Problem 989. Add to Array-Form of Integer
//
// https://leetcode.com/problems/add-to-array-form-of-integer/

let addToArrayForm = function (num, k) {
  let i = num.length - 1;

  let carry = 0;
  while (i >= 0 || k || carry > 0) {
    let sum = 0,
      lastDigit = 0;

    if (k) {
      lastDigit = k % 10; // take the last digit integer
      k = Math.floor(k / 10);
    }

    sum += (num[i] ? num[i] : 0) + lastDigit + carry;

    carry = Math.floor(sum / 10);

    if (i >= 0) {
      num[i] = sum % 10;
    }

    if (i < 0 && (sum > 0 || k > 0)) {
      num.unshift(sum % 10);
    }

    i--;
  }

  return num;
};

let res = addToArrayForm(
  [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
  516,
);

let res2 = addToArrayForm([2, 1, 5], 806);
console.log(res);
