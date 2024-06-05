// Solution Problem 12. Integer to Roman
// https://leetcode.com/problems/integer-to-roman/

const romanNums = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

let intToRoman = function (num) {
  let res = "";

  for (const roman in romanNums) {
    let value = parseInt(romanNums[roman]);

    while (num >= value) {
      res += roman;
      num -= value;
    }
  }

  console.log(res);
};

let res = intToRoman(5678);

console.log(res);
