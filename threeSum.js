// Problem solution to 15. 3Sum
//
// https://leetcode.com/problems/3sum/

let threeSumV1 = function (nums) {
  nums = nums.sort((a, b) => a - b);

  if (nums.length < 3) return [];

  let vector = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let low = i + 1,
      high = nums.length - 1;

    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];

      if (sum > 0) {
        high--;
        continue;
      } else if (sum < 0) {
        low++;
        continue;
      } else {
        vector.push([nums[i], nums[low], nums[high]]);

        let lastLow = nums[low],
          lastHigh = nums[high];

        while (low < high && nums[low] == lastLow) {
          low++;
        }

        while (low < high && nums[high] == lastHigh) {
          high--;
        }

        console.log(lastLow, lastHigh, low, high);
      }
    }
  }

  console.log(vector);
};

let threeSumV2 = function (nums) {
  nums = nums.sort((a, b) => a - b);

  if (nums.length < 3) return [];

  const res = [];
  const hashMap = new Map();

  for (const [i, num] of nums.entries()) {
    hashMap.set(num, i);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    for (let j = i + 1; j < nums.length - 1; j++) {
      let required = -1 * (nums[i] + nums[j]);

      if (hashMap.has(required) && hashMap.get(required) > j) {
        res.push([nums[i], nums[j], required]);
      }

      j = hashMap.get(nums[j]);
    }

    i = hashMap.get(nums[i]);
  }

  return res;
};

let test1 = [-1, 0, 1, 2, -1, -4];
let res = threeSumV1(test1);
