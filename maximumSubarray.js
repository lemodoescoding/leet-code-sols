// Solution to problem 53. Maximum Subarray
//
// Using Kadane's algorithm
// https://leetcode.com/problems/maximum-subarray/

let maximumSubarray = function (nums) {
  let best_sum = -Infinity,
    current_sum = 0;

  for (let i = 0; i < nums.length; i++) {
    current_sum = Math.max(nums[i], current_sum + nums[i]);
    best_sum = Math.max(current_sum, best_sum);
  }

  return best_sum;
};

let res = maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(res);
