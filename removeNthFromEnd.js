// Solution to problem 19. Remove Nth Node From End of List
//
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

let removeNthFromEnd = function (head, n) {
  let res = new ListNode(0, head);
  let dummy = res;

  for (let i = 0; i < n; i++) {
    head = head.next;
  }

  while (head !== null) {
    head = head.next;
    dummy = dummy.next;
  }

  dummy.next = dummy.next.next;

  return res.next;
};

function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}
