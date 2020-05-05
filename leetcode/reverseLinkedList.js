// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
class Head {
  val;
  next;

  constructor() {
    this.val = val;
    this.next = next;
  }
}

const head = new Head();
// linkedlist가 있고 앞에 head가 있을떄?
function reverseList(head) {
  let node = head;
  let prev = null;

  while (node !== null) {
    let nextNode = node.next;
    node.next = prev;
    prev = node;
    node = nextNode;
  }
  return prev;
}
