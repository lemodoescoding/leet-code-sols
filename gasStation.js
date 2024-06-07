// Problem 134. Gas Station
//
// https://leetcode.com/problems/gas-station/

let canCompleteCircuit = function (gas, cost) {
  let n = gas.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    gas[i] -= cost[i];
    sum += gas[i];
  }

  if (sum < 0) return -1;

  let t = 0,
    res = 0;
  for (let j = 0; j < n; j++) {
    t += gas[j];
    if (t < 0) {
      t = 0;
      res = j + 1;
    }
  }

  return res;
};

let gases = [1, 2, 3, 4, 5];
let costs = [3, 4, 5, 1, 2];
let res = canCompleteCircuit(gases, costs);

console.log(res);
