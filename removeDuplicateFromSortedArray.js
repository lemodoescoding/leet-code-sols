// Solution to problem 26. Remove Duplicates from Sorted Arrays
//
// Two Solution Approach: 1. Using two pointer, 2. Using Set
//
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

let removeDuplicatesFromSortedArray = function (nums) {
  let i = 0;

  while (i <= nums.length) {
    let d = i;

    let current = nums[i];

    while (nums[d] === current && nums[d] !== undefined) {
      d++;
    }

    nums.splice(i, d - i - 1);
    i++;
  }

  return nums.length;
};

let removeDuplicatesFromSortedArrayV2 = function (nums) {
  let unique = new Set(),
    i = nums.length - 1;

  while (i >= 0) {
    let current = nums[i];
    if (unique.has(current)) nums.splice(i, 1);

    unique.add(nums[i]);
    i--;
  }

  console.log(nums);
};

let res = removeDuplicatesFromSortedArray([1, 1, 2]);
let res2 = removeDuplicatesFromSortedArrayV2([1, 1, 1]);
