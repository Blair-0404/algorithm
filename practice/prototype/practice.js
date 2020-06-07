// JS는 객체지향 언어이지만 다른 객체치향 언어들처럼 클래스를 갖고있지는 않다. 즉 상속기능이 없다.
// es6에서 클래스가 추가됬지는 했다.
// (그러나 syntax suger일 뿐이지 JS가 클래스기반 객체지향언어로 바뀐것은 아니다! 여전히 프로토타입 기반 객체지향언어임)
class People {
  constructor() {
    this.eyes = 2;
    this.nose = 1;
  }
}
const lee = new People()
const choi = new People()

// isSame(lee,choi); // false
// console.log(lee.eyes);  // => 2
// console.log(choi.eyes); // => 2

// 같은지 확인하는 함수
function isSame(a,b) {
  if(a === b) {
    console.log('true')
  } else {
    console.log('false')
  }
}




// 사실 JS에서는 function(){}과 new 생성자함수 클래스를 비스무리하게 흉내는 낼 수 있다.
function Person() {
  this.eyes = 2;
  this.nose = 1;
}

const kim = new Person();
const park = new Person();
// 위의 코드는 new Person이 될때마다 kim과 park변수에 담길 새로운 Person객체가 생성이되는 것이다. 즉 각자가 같은객체를 갖고있을 뿐이고 메모리도 각각 할당된다.
console.log(kim.eyes);  // => 2
console.log(park.eyes); // => 2
isSame(kim,park) // false    같은 함수를 객체화 시켰을뿐 같은 것을 참조하는것은 아니기때문에 두 객체는 엄연히 다르다.

const YJ = kim;
isSame(kim,YJ) // true    Person함수를 객체화시킨 kim을 다시 YJ에 담았기 때문에 두 변수는 같은 객체를 참조하게된다.

// -> 즉 여기서 알 수 있는것은 kim과 park는 똑같은 객체,똑같은 객체의 속성을 갖고있지만 메모리는 각각 두배를 잡아먹게되고 메모리 효율이 떨어지는 것 이다.
// kim과 park의 속성값이 똑같다면 메모리공간도 하나로 합쳐져서 쓸순없을까?
// 프로토타입을 사용하면 된다.!
Person.prototype.finger = 10; // 이렇게 프로토타입객체를 활용해서 속성을 만들면 Person생성자 함수로 객체를 만든 객체들은 모두 이 속성을 공유할 수 있게될 뿐 아니라 메모리도 한 곳에만 생성되서 낭비가 되지 않는다.
console.log(kim.finger) // 10
console.log(park.finger) // 10

// 그렇다면 JS에서 상속은 어떻게 이루어 지는건가? 바로 프로토타입!!


