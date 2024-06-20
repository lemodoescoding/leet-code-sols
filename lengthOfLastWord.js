// Solution for problem 58. Length of last word
//
// https://leetcode.com/problems/length-of-last-word/

let lengthOfLastWord = function (s) {
  s = s.trim();

  s = s.split(" ");
  console.log(s);
  return s[s.length - 1].length;
};

let res = lengthOfLastWord("WMJRubt    pGogxAgEXzFNOHxVPvkLdoamHOhz");
console.log(res);
