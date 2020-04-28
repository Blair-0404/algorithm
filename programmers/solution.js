// function solution(arr) {
//   let count = 0;
//   let result = 0;
//
//   for(let retNum = 0; retNum < arr.length; retNum++) {
//     for (let i = arr.length; i > 0; i--) {
//       if(arr[arr.length - i] > retNum) {
//         count ++;
//       }
//       if(count === retNum) {
//         result = retNum
//       }
//     }
//   }
//
//   return result;
// }
//
// const arr = [17,18,19,3];
// console.log(solution(arr));
// retNum = 0에서 시작
// 배열의 원소중에서 retNum이상인 원소들(=count)이 retNum개이면 return retNum!
//    단! count > retNum이면 stop and retNum++

