class ListNode {
    val;
    next;

    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}


const node1 = new ListNode(10,null);
const node2 = new ListNode(20,node1);
const node3 = new ListNode(30,node2);
const node4 = new ListNode(40,node3);
const node5 = new ListNode(50,node4);
const headNode6 = new ListNode(60,node5);
console.log(headNode6);
