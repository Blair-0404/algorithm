// 프라미스는 자바스크립트 비동기 처리에 사용되는 객체!입니다.
// 첫번째 인자로resolve메소드, 두번째인자로reject메소드를 가질 수 있는 객체이다.??? res, rej메소드를 가진다는건가?인자는 뭔말이지
// -> 프라미스 객체를 반환하는 로직이 실행되면 성공시 res 실패시 rej를 탄다?
// resolve가 실행된 프라미스객체가 반환된다면 -> 실행되는 쪽에서는 .then()메소드를 타게되고
// reject가 반환된다면 -> 실행되는 쪽에서는 .catch()메소드를 타게 되는것이다.

//promise에서 resolve(or reject)를 반환하면 resolve(or reject)가 갖고 있던 인수는 then(or catch)의 인수로 전달된다.

//예시 1 - promise의 반환된 결과에 따른 실행부의 결과와 인자전달
// 선언부
const promise1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    const success = "success";
    const failed = "failed";
    console.log("성공? 실패?");

    resolve(success);
    reject(failed);
  }, 1000);
});
// (promise1사용하는)실행부
promise1
  .then(function(success) {
    console.log(success);
  })
  .catch(function(failed) {
    console.log(failed);
  });



//예시 2 - promise의 반환된 결과에 따른 실행부의 결과와 결과에 따른 성공콜백함수or실패콜백함수 실행
// 선언부
const promise2 = new Promise(function(res, rej) {
  setTimeout(function() {
    const name = "유니니";
    // res(name);
    rej(name);
  }, 1000);
});

//성공콜백함수
function onFullfilled(name) {
  console.log("안녕하세요 " + name + " 님!");
}
//실패콜백함수
function onRejected(name) {
  console.log(name + "님! 연결을 다시 해주세요");
}
// 실행부 즉 .then은 인자로 성공콜백함수를 받는다.
promise2.then(onFullfilled).catch(onRejected);



//예시 3 - promise의 반환된 조건문 결과에 따른 실행부의 결과
//선언부
const promise3 = new Promise(function(res, rej) {
  setTimeout(function() {
    const num = 20;
    if (num <= 10) {
      res(num);
    } else {
      rej(`오류: ${num}은 10 이상입니다. 10 이하를 입력해 주세요`);
    }
  }, 1000);
});

//실행부
promise3
  .then(function(num) {
    console.log(`성공-10이하숫자인 ${num}를 입력했습니다`);
  })
  .catch(function(err) {
    console.log(err);
  });



//예시 4 - .then 메서드는은 두번째 인자로 실패콜백함수를 가질 수 있다.(비추..)
//        이 경우에는 catch메서드에서 처리할 내용을 then메서드 하나로 작성할 수 있다.
// 실행부
promise3.then(
  function(num) {
    console.log(`성공-10이하숫자인 ${num}를 입력했습니다`);
  },
  function(err) {
    console.log(err);
  }
);