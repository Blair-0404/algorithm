class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor() {
    this.head = new Node("head");
  }

  display() {
    let curNode = this.head;

    while(curNode.next !== null) {
      console.log(curNode.next.value);
      curNode = curNode.next;
    }
    console.log('-연결리스트 출력-');
  }

  //find 주의하기
  find(findVal) {
    let curNode = this.head;

    while(curNode.value !== findVal) {
      curNode = curNode.next;
    }

    return  curNode
  }

  //insert 주의하기
  insert(newVal, preVal) {
    let preNode = this.find(preVal);
    let newNode = new Node(newVal);

    let tmp = preNode.next;
    preNode.next = newNode;
    newNode.next = tmp;
  }

  append(addVal) {
    let curNode = this.head;
    let newNode = new Node(addVal);

    while(curNode.next !== null) {
      curNode = curNode.next;
    }

    curNode.next = newNode;
  }

  remove(delVal) {
    let curNode = this.head;
    let removeNode = this.find(delVal);

    while(curNode.next !== removeNode) {
      curNode = curNode.next;
    }
    curNode.next = removeNode.next
  }
}

const linkedList = new LinkedList();

linkedList.insert('a', 'head');
linkedList.append('b');
linkedList.append('d');
linkedList.insert('c', 'd');
linkedList.append('F');
linkedList.remove('F');
linkedList.display();

