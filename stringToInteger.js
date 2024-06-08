// Solution on Problem 8. String to Integer (atoi)
//
// https://leetcode.com/problems/string-to-integer-atoi/

let myAtoi = function (s) {
  const integerPositiveBound = Math.pow(2, 31) - 1;
  const integerNegativeBound = Math.pow(-2, 31);

  s = s.trim();

  let sign = 1;
  let index = 0;
  let res = 0;

  if (s[0] == "+") {
    sign = 1;
    index++;
  } else if (s[0] == "-") {
    sign = -1;
    index++;
  }

  while (index < s.length) {
    if (s[index] < "0" || s[index] > "9") break;

    res = res * 10 + parseInt(s[index]);

    index++;
  }

  res = res * sign;
  if (res > integerPositiveBound && res >= 0) {
    return integerPositiveBound;
  }

  if (res < integerNegativeBound && res < 0) {
    return integerNegativeBound;
  }

  return res;
};

let res = myAtoi("words and 987");
console.log(res);
