class ListNode { //ClassListNode 객체를 만드는 공장생성
    val; // ClassListNode 객체의 구성요소들 선언 (인자생성(선언)?)
    next;
    tmp = 3; // //즉 인스턴스화되면 매개변수가 들어간 constructor가 실행된 후 변화된 이 구성요소들이 담겨있는 객체가 생성되는것이다.

    constructor(val) { //인스턴스화 할때 실행될 constructor생성 (& constructor에 매개변수생성(parameter))
        this.val = val + this.tmp;
        this.next = null;
        this.tmp = this.tmp + this.sum();
    }

    sum() {
        return  3;
    }
}

const node1 = new ListNode(10);  // Listnode 클래스의 constructor에 매개변수를 넣어 (constructor 를)실행시켜서 node1이라는 변수에 할당해준다.
// const node2 = new ListNode(20,node1);
// const node3 = new ListNode(30,node2);
// const node4 = new ListNode(40,node3);
// const node5 = new ListNode(50,node4);
// const headNode6 = new ListNode(60,node5);
console.log(node1); // 결과는 매개변수로10이 들어간 새로운 ClassListNode 객체가 찍힌다.
