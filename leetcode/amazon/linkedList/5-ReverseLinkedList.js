// function solution(head) {
//   let prev = null;
//   let curNode = head;
//
//   while(curNode) {
//     let next = curNode.next;
//     curNode.next = prev;
//     prev = curNode;
//     curNode = next;
//   }
//
//   return prev
// }
