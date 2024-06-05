// Problem 1002. Find Common Characters
// https://leetcode.com/problems/find-common-characters/

const INITIAL_CHARCODE = "a".charCodeAt(0);
const ALPHABET_COUNT = 26;

function findCommonChars(words) {
  let commonChars = [];

  const charFrequency = Array(ALPHABET_COUNT).fill(Infinity);

  for (const word of words) {
    const wordFrequency = Array(ALPHABET_COUNT).fill(0);

    for (const c of word) {
      let charCodeAtIndex = c.charCodeAt(0) - INITIAL_CHARCODE;

      wordFrequency[charCodeAtIndex] += 1;
    }

    for (let i = 0; i < ALPHABET_COUNT; i++) {
      charFrequency[i] = Math.min(charFrequency[i], wordFrequency[i]);
    }
  }

  charFrequency.forEach((freq, index) => {
    let freqOfChar = freq;
    while (freqOfChar !== 0) {
      commonChars.push(String.fromCharCode(index + INITIAL_CHARCODE));
      freqOfChar--;
    }
  });

  return commonChars;
}

let strs = ["bella", "label", "roller"];

let res = findCommonChars(strs);

console.log(res);
