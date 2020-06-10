// function getData(callbackFunc) {
//   $.get('url 주소/products/1', function(response) {
//     callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
//   });
// }
//
// getData(function(tableData) {
//   console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
// });
//
//
// function getData(callback) {
//   return new Promise(function(resolve, reject) { // 선언부
//     $.get('url 주소/products/1', function(response) {
//       resolve(response); // res 또는 rej가 실행된 결과도 프라미스?
//     });
//   });
// }
// // 실행
// getData().then(function(tableData) {  // resolve()의 결과 값이 여기로 전달됨
//   console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
// });
// // then으 싱행결과도 프라미스 객체여서 또 then을 실행할수있다.




// pending상태 (비동기가 시작되지 않았거나 시작됬지만 아직 완료되지 않은 상태
const pending = new Promise(function(res,rej) {

});
// console.log(pending); //Promise { <pending> }


// fulfilled상태 (비동기가 성공적으로 완료되서 응답을 받은 상태 - 이경우에는 then이 실행
const fulfilled = new Promise(function(res,rej) {
  res();
});
// console.log(fulfilled);  //Promise { undefined }


// rejedted상태 (비동기가 실패해서 rejec된 상태 - 이경우에는 catch가 실행된다.
const rejected = new Promise(function(res, rej) {
  rej();
});
// console.log(rejected);  // Promise { <rejected> undefined }



const promise = function () {
  return new Promise(function(res,rej) {
    const number = 100;
    res(number)
  })
}

// 여러개의 프라미스 연결
// promise().then(function(resData) {
//   console.log(resData)
// }).then(function(res){
//   console.log('성공')
// }).then(function(res) {
//   console.log('또성공')
// }).then(function(res) {
//   console.log(res) // 성공은 했지만 받은결과가 없으면 이렇게 undifined가 뜬다.
// })

function fetchItems() {
  return new Promise(function(resolve, reject) {
    var items = [1,2,3];
    resolve(items)
  });
}

const s = async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
}

s()