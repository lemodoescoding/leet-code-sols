// Solution to problem 43. Multiply Strings
//
// https://leetcode.com/problems/multiply-strings/

let multiply = function (num1, num2) {
  if (num1.length === 0 || num2.length === 0 || num1 === "0" || num2 === "0")
    return "0";

  let j = num1.length - 1,
    i = num2.length - 1;

  let res = new Array(i + j + 2).fill(0);

  while (j >= 0) {
    for (let k = i; k >= 0; k--) {
      const sumIndex = j + k + 1,
        carryIndex = j + k;

      const sum = Number(num1[j]) * Number(num2[k]) + res[sumIndex];
      res[sumIndex] = sum % 10;
      res[carryIndex] += Math.floor(sum / 10);
    }

    j--;
  }

  if (res[0] === 0) res.shift();

  console.log(res);
};

let res = multiply("123", "456");
