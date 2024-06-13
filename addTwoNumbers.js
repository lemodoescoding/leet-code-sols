// Solution to problem 2. Add Two Numbers
//
// for parameter l1 and l2 must be an object containing val and next property
// which called Node;
//
// https://leetcode.com/problems/add-two-numbers/

class Node {
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }
}

let addTwoNumbers = function (l1, l2) {
  let dummy = new Node(),
    res = dummy;

  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    let total = 0;

    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }

    total += carry;

    carry = Math.floor(total / 10);

    dummy.next = new Node(total % 10);
    dummy = dummy.next;
  }

  return res.next;
};
