function say(nick, age) {
  console.log(`별명:${nick}, 나이:${age}, 이름:${this.name}`)
}

const uni = {name: "김윤희"};
const yj = {name: "김영지"};

// apply (함수의 인자가 배열)
say.apply(uni, ['제시', 33]);
say.apply(yj, ['블레어', 30]);

// call (함수의 인자가 쉼표)
say.call(uni, '제시', '33');
say.call(yj, '블레어', 30);

// bind (새롭게 바인딩한 함수를 만든다. 즉 호출은 되지않음 새로만든 함수!를 호출해야 함)
say.bind(yj, '블레어', 30); // 호출되지 않음.
say.bind(yj)('블레어', 30); // 만들어진 함수를 다시 호출해야함
// 또는 당연한 얘기지만 변수에 넣어서 변수를 호출
let sayToYj = say.bind(yj);
sayToYj('블레어', 30);

const foo = {
  topic: "foo",
  func: function(number) {
    return this.topic + number
  }
}
console.log(foo.func(2))

const boo = {topic: "boo"}
console.log(foo.func.call(boo,2))
console.log(foo.func.apply(boo,[2]))
console.log(foo.func.bind(boo,2))
console.log(foo.func.bind(boo)(2))