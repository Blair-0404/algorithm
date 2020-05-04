class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  // value 를 갖고있는 노드 찾아내기!
  find(value) {
    let curNode = this.head;
    while (curNode.val !== value) {
      curNode = curNode.next;
    }
    return curNode;
  }

  // linkedList 출력
  display() {
    let curNode = this.head;
    while(curNode.next !== null) {
      console.log(curNode.next.val);
      curNode = curNode.next;
    }
    console.log('-print linkedList-')
  }

  // 삽입(*어디*에 *새 노드를* 삽입할건지???)
  insert(ValueOfNewNode, value) {
    let newNode = new Node(ValueOfNewNode);
    let curNode = this.find(value);
    let tmp = curNode.next;

    curNode.next = newNode;
    newNode.next = tmp;
  }

  // 추가
  add(ValueOfNewNode) {
    let newNode = new Node(ValueOfNewNode);
    let curNode = this.head;

    while(curNode.next !== null) {
      curNode = curNode.next;
    }
    curNode.next = newNode
  }

  // 제거(*어떤 노드*를 제거할건지???)
  remove(value) {
    let curNode = this.head;
    let removeNode = this.find(value);

    while (curNode.next !== removeNode) {
      curNode = curNode.next;
    }
    let tmp = removeNode.next;
    curNode.next = tmp;
  }



}

const linkedList = new LinkedList();

linkedList.insert('A',"head");
linkedList.insert('B','A');
linkedList.insert('C','B');
linkedList.add('D');
linkedList.display();

linkedList.insert(1,'head');
linkedList.insert(4,'A');
linkedList.display();

linkedList.remove(1);
linkedList.remove(4);
linkedList.display();

