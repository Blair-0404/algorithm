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
      const [reversedHead, reversedTail] = reverse(prev.next, k); // reversedHead = 2, reversedTail = 1
      prev.next = reversedHead;
      reversedTail.next = head;
      prev = reversedTail;
      i = 0;
    }
  }

  return root.next;
};

function reverse(curr, length) { // 1<-2<-3->4->5로 뒤집는 거라면 1노드부터 2번 화살표를 바꿔야한다 => 즉 인자는 (1,2) 노드1부터, 2번 화살표바꾸기
  const tail = curr;
  let prev = null;
  while (length > 0) {
    const next = curr.next; // 1. 다음노드를 next에 담아놓기(끊을것이므로)
    curr.next = prev; // 2. 다음노드를 가르키는 화살표는 전 노드로(전노드없을시엔 null)을 가르키도록 변경)
    prev = curr; // 3. 현재 노드가 전 노드가 되기
    curr = next; // 4. 담아뒀던 다음 노드는 현재 노드가 되기
    length -= 1;
  }
  return [prev, tail]; // 결과는 prev = 화살표 바꾸기가 끝난 노드 tail = 인풋의 첫인자(시작노드)
                       // 즉 함수의 첫인자가 이함수의 리턴값 tail이 된다.
// }


const reverseKGroup = function(head, k) {
  const root = new ListNode(-1);
  root.next = head;

  //
  let i = 0;

  while(head) {
    if(i % k === 0) {
      //
    } else {
      head = head.next;
    }
    i++;
  }

  return root.next;
};

const reverse = function(curr, count) {
  const end = curr;
  let prev = null;

  while(count > 0) {
    const next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
    count--;
  }
  return end
}