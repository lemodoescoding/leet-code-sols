// Problem 13. Roman To Integer
// https://leetcode.com/problems/roman-to-integer/

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

let romanToInt = function (s) {
  s = s.split("");
  let res = 0;

  while (s.length !== 0) {
    let current = romanNums[s[0]],
      next = romanNums[s[1]];

    if (next && current < next) {
      res += next - current;
      s.shift();
    } else {
      res += current;
    }

    s.shift();
  }

  return res;
};

let res = romanToInt("XLIV");
