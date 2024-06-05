// Problem 9. Palindrome Number

// https://leetcode.com/problems/palindrome-number

let isPalindrome = function (num) {
  if (num < 0) return false;
  let originalNum = num;
  let rev_num = 0;

  while (num > 0) {
    rev_num = rev_num * 10 + (num % 10);
    console.log(rev_num);
    num = Math.floor(num / 10);
  }

  return rev_num == originalNum;
};

let res = isPalindrome(123);
