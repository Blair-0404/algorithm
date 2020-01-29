function findSingleNumber1(nums) {
    const maxNumber = Math.max(...nums);
    let emptyArray = [];

    for (let i = 0; i < maxNumber + 1; i++) {
        emptyArray.push(0);
    }

    for (let i = 0; i < nums.length; i++) {
        let numsIdxValue = nums[i];
        emptyArray[numsIdxValue] += 1;
    }

    for (let i = 0; i < emptyArray.length + 1; i++) {
        if (emptyArray[i] === 1) {
            return i;
        }
    }
}
현
// 해시맵이용해서 구
function findSingleNumber2(nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; ++i) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    const entries = [...map.entries()];
    for (let i = 0; i < entries.length; ++i) {
        if (entries[i][1] === 1) {
            return entries[i][0];
        }
    }
}

// function findSingleNumber(numberArray) {
//     numberArray.sort();
//     let result = numberArray[0];
//     let isChecked = false;
//     for(let i = 1; i < numberArray.length; i++) {
//         if (result !== numberArray[i]) {
//             if (isChecked) {
//                 return result;
//             } else {
//                 isChecked = true;
//             }
//         } else {
//             result = numberArray[i];
//             isChecked = false;
//         }
//     }
// }

// 비트 XOR연산 이용해서 구현
function findSingleNumber3(numberArray) {
    let result = 0;

    for (let i = 0; i < numberArray.length; ++i) {
        result ^= numberArray[i];
    }

    return result;
}

console.log(findSingleNumber3([0,0,1,5,5,1,10000,333,444,333,444]));