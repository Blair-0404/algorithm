class HashSet {
  constructor() {
    this.arr = [];
    this.isVal = false;
  }

  add(key) {
    this.arr.push(key);
    console.log(this.arr);
  }

  remove(key) {
    for(let i = 0; i < this.arr.length; i++) {
      if(key === this.arr[i]) {
        this.arr.splice(i, 1)
      }
    }
    console.log(this.arr);
  }

  contains(key) {
    for(let i = 0; i < this.arr.length; i++) {
      if(key === this.arr[i]) {
        this.isVal = true;
        break
      }
    }
    return this.isVal;
  }

}

const MyHashSet = new HashSet();
MyHashSet.add(2);
MyHashSet.add(3);
MyHashSet.contains(2);
