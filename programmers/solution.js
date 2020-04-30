// function solution(arr) {
//   let isMoreHeight = false;
//
//   for (let i = arr.length - 1; i >= 0; i--) {
//
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[j] > arr[i]) {
//         arr[i] = j + 1;
//         isMoreHeight = true;
//         break;
//       }
//     }
//     if(!isMoreHeight) {
//       arr[i] = 0;
//     }
//     isMoreHeight = false;
//
//   }
//
//   return arr;
// }

const arr = [3,9,9,3,5,7,2];
console.log(solution(arr));
