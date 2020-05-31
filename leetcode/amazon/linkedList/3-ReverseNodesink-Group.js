// Given this linked list: 1->2->3->4->5
// For k = 2, you should return: 2->1->4->3->5
// For k = 3, you should return: 3->2->1->4->5



var reverseKGroup = function(head, k) {
  const root = new ListNode();
  root.next = head;

  let prev = root; // prev.next --> start of group
  let i = 0;
  while (i < k && head) { // head --> start of next group
    head = head.next;
    i += 1;
    if (i === k) {
      const [reversedHead, reversedTail] = reverse(prev.next, k);
      prev.next = reversedHead;
      reversedTail.next = head;
      prev = reversedTail;
      i = 0;
    }
  }

  return root.next;
};

function reverse(curr, length) {
  const tail = curr;
  let prev = null;
  while (length > 0) {
    const next = curr.next; // 1. 다음노드를 next에 담아놓기(끊을것이므로)
    curr.next = prev; // 2. 다음노드를 가르키는 화살표는 전 노드로(전노드없을시엔 null)을 가르키도록 변경)
    prev = curr; // 3. 현재 노드가 전 노드가 되기
    curr = next; // 4. 담아뒀던 다음 노드는 현재 노드가 되기
    length -= 1;
  }
  return [prev, tail];
}
