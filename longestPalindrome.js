// Solution to problem 5. Longest Palindromic Substring
//
// Time complexity: O(n^2)
//
// https://leetcode.com/problems/longest-palindromic-substring/

let longestPalindrome = function (s) {
  if (s.length == 0) return "";

  let max_length = 0,
    index_at = 0;

  for (let i = 0; i < s.length; i++) {
    // check the max length of the palindrome both on when string length is odd and even
    let even = checkPalindrome(s, i, i + 1),
      odd = checkPalindrome(s, i, i);

    if (Math.max(even, odd) > max_length) {
      max_length = Math.max(even, odd);
      index_at = i;
    }
  }

  let start = index_at - Math.floor((max_length - 1) / 2),
    end = start + max_length;

  return s.substring(start, end);
};

function checkPalindrome(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left -= 1;
    right += 1;
  }

  return right - left - 1;
}

let res = longestPalindrome("thfopofit");
console.log(res);
