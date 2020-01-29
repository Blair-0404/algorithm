const givenNums = [3, 2, 4, 5, 51];
const target = 6;

function findTwoSum(givenNums,target) {
    let givenNumsMap = new Map();
    //  givenNums.forEach((number, idx) => {
    //     givenNumsMap.set(number, idx);
    // });

    for(let i = 0; i < givenNums.length; i++) {
        let tmp = target - givenNums[i];
        if(givenNumsMap.has(tmp)) {
            return [givenNumsMap.get(tmp), i];
        }
        givenNumsMap.set(givenNums[i], i);
    }
}

console.log(findTwoSum(givenNums,target));



//
// function findTwoSum(givenNums,target) {
//     let result = [];
//     for (let i = 0; i < givenNums.length - 1; i++) {
//         for(let j = i + 1; j < givenNums.length; j++) {
//             if((givenNums[i] + givenNums[j]) === target) {
//                 result.push(i,j);
//                 return result;
//             }
//         }
//     }
// }
//
//
// const givenNums = [2, 7, 50, 15, 50];
// const target = 100;
// console.log(findTwoSum(givenNums,target));