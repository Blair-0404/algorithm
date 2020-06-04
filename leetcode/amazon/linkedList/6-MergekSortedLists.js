// Input:
//   [
//     1->4->5,
//     1->3->4,
//     2->6
//    ]
// Output: 1->1->2->3->4->4->5->6

const mergeKLists = function(lists) {
  if (lists.length === 0 ) {
    return null;
  }

  while(lists.length > 1) {
    const a = lists.shift();
    const b = lists.shift();
    const c = mergeList(a,b);
    lists.push(c);
  }

  return lists[0]
}



function mergeList(a, b) {
  const runner = new ListNode(1);
  let tmp = runner;

  while(a !== null && b !== null) {
    if(a.val < b.val) {
      tmp.next = a;
      a = a.next;
    } else {
      tmp.next = b;
      b = b.next;
    }
    tmp = tmp.next
  }

  if(a) {
    tmp.next = a
  } else if(b) {
    tmp.next = b
  }

  return runner.next;
};
























