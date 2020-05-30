// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


function solution(l1, l2) {
  let head = new ListNode(1);
  let dummy = head;

  while (l1 !== null && l2 !== null) {

    if (l1.val <= l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }

  dummy.next = l1 ? l1 : l2;

  return head.next;
}