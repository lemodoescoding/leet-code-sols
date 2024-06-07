// Solution Problem 415. Add Strings
//
// https://leetcode.com/problems/add-strings

let addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1;

  let res = "";
  let left = 0;

  while (i >= 0 || j >= 0 || left > 0) {
    let sum = 0;
    if (i >= 0) {
      sum += num1[i] - 0;
      i--;
    }

    if (j >= 0) {
      sum += num2[j] - 0;
      j--;
    }

    sum += left;

    left = 0;

    while (sum >= 10) {
      sum = sum - 10;
      left++;
    }

    res = (sum % 10).toString() + res;
  }

  return res;
};

let res = addStrings("11", "123");
let res2 = addStrings("1", "9");
console.log(res);
console.log(res2);
