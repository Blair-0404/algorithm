const givenNums = [2, 7, 49, 51];
const target = 100;

function findTwoSum(givenNums,target) {
    let result = [];
    let givenNumsMap = new Map();
    givenNums.map((number, idx) => {
        givenNumsMap.set(number, idx);
    });

    for(let i = 0; i < givenNumsMap.size; i++) {
        let tmp = target - givenNums[i];
        if(givenNumsMap.has(tmp)) {
            result.push(givenNumsMap.get(givenNums[i]));
            result.push(givenNumsMap.get(tmp));
            return result;
        }
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