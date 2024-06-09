// Solution to problem 1. Two Sum using Hash Map (which actually just an associative array in PHP)
//
// https://leetcode.com/problems/two-sum/

let twoSum = function (nums, target) {
  const hashTable = new Map();

  for (const [i, n] of nums.entries()) {
    let complement = target - n;

    if (hashTable.has(complement)) return [hashTable.get(complement), i];

    hashTable.set(n, i);
  }

  return [];
};

let res = twoSum([2, 7, 11, 15], 9);

console.log(res);
