//해시테이블 생성하기

let myIntro1 = new Object();
myIntro1.name = '김영지';
myIntro1.nickname = '레이첼';
myIntro1.age = 30;
console.log(myIntro1); // { name: '김영지', nickname: '레이첼', age: 30 }


let myIntro2 = new Array();
myIntro2.name = '김영지';
myIntro2.nickname = '레이첼';
myIntro2.age = 30;
console.log(myIntro2); // [ name: '김영지', nickname: '레이첼', age: 30 ]


let myIntro = new Array();
myIntro['name'] = '김영지';
myIntro['nickname'] = '레이첼';
myIntro['age'] = 30;
console.log(myIntro); // [ name: '김영지', nickname: '레이첼', age: 30 ]

