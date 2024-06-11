// Solution to problem 3. Longest Substring Without Repeating Characters
//
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

let lengthOfLongestSubstring = function (s) {
  let left = 0,
    max = 0,
    charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    max = Math.max(max, right - left + 1);
    console.log(charSet);
  }

  return max;
};

let test = "hghghg";

let res = lengthOfLongestSubstring(test);
console.log(res);
