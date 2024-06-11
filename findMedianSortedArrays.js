// Solution to problem 4. Median of Two Sorted Arrays
//
// https://leetcode.com/problems/median-of-two-sorted-arrays/
let findMedianSortedArrays = function (nums1, nums2) {
  let listNum = [];

  for (const num of nums1) {
    listNum.push(num);
  }

  for (const num of nums2) {
    listNum.push(num);
  }

  listNum = listNum.sort((a, b) => a - b);
  let n = listNum.length - 1;
  let mid = Math.floor(n / 2);

  return (n + 1) % 2 == 0
    ? (listNum[mid] + listNum[mid + 1]) / 2
    : listNum[mid];
};

let res = findMedianSortedArrays([1, 3], [2, 4]);
console.log(res);
