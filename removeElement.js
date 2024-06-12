// Solution to problem 27. Remove Element
//
// https://leetcode.com/problems/remove-element/

let removeElement = function (nums, val) {
  let k = nums.length - 1;
  for (let i = k; i >= 0; i--) {
    if (nums[i] == val) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
};

let res = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log(res);
