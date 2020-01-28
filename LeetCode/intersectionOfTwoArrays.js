function intersectionOfTwoArrays(nums1,nums2) { // Set 으로 다시풀기
    let result = [];
    let longArray = [];
    let shortArray = []; // 롱, 숏 배열 왜 필요한지??

    if (nums1.length > nums2.length) {  // ->삼항연산자?..
        longArray = longArray.concat(nums1);
        shortArray = shortArray.concat(nums2);
    } else {
        longArray = longArray.concat(nums2);
        shortArray = shortArray.concat(nums1);
    }

    for (let i = 0; i < shortArray.length; i++) {
        for (let j = 0; j < longArray.length; j++) {
            if (shortArray[i] === longArray[j]) {
                if (!result.includes(shortArray[i])) { //
                    result.push(shortArray[i]);
                }
            }
        }
    }
    return result.sort((a, b) => b - a);
}


// HashSet 이용해서 구
function intersectionOfTwoArrays2(nums1,nums2) {
    const result = new Set();
    const numsSet = new Set(nums1);

    for(let i = 0; i < nums2.length - 1; i++) {
        if(numsSet.has(nums2[i])) {
            result.add(nums2[i]);
        }continue;
    }

    return Array.from(result).sort((a, b) => b - a);
}

let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4];
console.log(intersectionOfTwoArrays2(nums1,nums2));