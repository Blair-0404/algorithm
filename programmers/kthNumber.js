// for, sort사용 ( 불통 )
// function solution1(array, commands) {
//     let result = [];
//
//     for(let i = 0; i < commands.length; i++) {
//         const startIndex = commands[i][0] - 1;
//         const endIndex = commands[i][1];
//         const idx = commands[i][2] - 1;
//
//         const arraySlice = array.slice(startIndex, endIndex).sort();
//
//         result.push(arraySlice[idx]);
//     }
//
//     return result;
// }
//
// ( 통과 )
// function solution2(array, commands) {
//     let retArr = [];
//
//     for (let i = 0; i < commands.length; i++) {
//         let sortedSlicedArr = array.slice((commands[i][0] - 1), commands[i][1]).sort((a, b) => (a - b));
//         const targetIdx = commands[i][2] - 1;
//         retArr.push(sortedSlicedArr[targetIdx]);
//     }
//
//     return retArr
// }

// ( 통과 - 제일 빨랐다. )
// array 고차원 함수 forEach 사용
function solution3(array, commands) {
  let retArr = [];

  commands.forEach((val) => {
    let sortedSlicedArr = array.slice((val[0] - 1), val[1]).sort((a, b) => (a - b));
    const targetIdx = val[2];
    retArr.push(sortedSlicedArr[targetIdx - 1]);
  });
  return retArr
}


const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];


console.log(solution3(array, commands));
