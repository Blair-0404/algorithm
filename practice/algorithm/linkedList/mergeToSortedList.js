// Input = '1->2->4','2->3->4';
// output = '1->2->2->3->4->4';

 class ListNode {
     constructor(val) {
         this.val = val;
         this.next = null;
     }
 }

// ## 더미이용 해서 더 작은것을 찾아가는 방식으로 구현 ##
// 1. dummy를 초기에 생성 [let dummy = new ListNode(-1)] , 초기 dummy를 가르킬 헤드 생성[let head = dummy]
// 2. li.val과 l2.val을 비교하며 더 작은것을 dummy다음으로 붙인다. (붙여진 l은 다음노드로 이동해준다.) [while의 if문]
// 3. dummy를 방금앞에서 추가한 노드로 바꿔둔다. [while]
// 4. 2의 과정을 l1,l2중 하나라도 null이 나올때까지 반복한다. [while의 조건]
// 5. l1,l2중 남아있는 노드(null이아닌)를 dummy다음으로 붙인다. [dummy = dummy.next]
// 6. 1.에서 생성했던 헤드를 사용해서 연결이 완성되어있을 전체 더미를 리턴한다.  [return head.next]
const mergeTwoLists = function(l1, l2) {
     let dummy = new ListNode(-1);
     let head = dummy;

     while (l1 !== null && l2 !== null) { // null은 연결된 다음 노드가 없음을 의미
         if (l1.val <= l2.val) {
             dummy.next = l1;
             l1 = l1.next; // l1(현재1).next인 2를 l1로 할
         } else {
             dummy.next = l2;
             l2 = l2.next;
         }
         dummy = dummy.next;
     }

     dummy.next = l1 === null ? l2 : l1;

     return head.next;
};

// 재귀 이용해서 구현
const mergeTwoLists2 = function(l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};