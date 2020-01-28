// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

function intersectionOfTwoArrays(nums1,nums2) {
    let result = [];
    let longArray = [];
    let shortArray = [];

    if(nums1.length > nums2.length) {  // ->삼항연산자로 고쳐보기
        longArray = longArray.concat(nums1);
        shortArray = shortArray.concat(nums2);
    } else {
        longArray = longArray.concat(nums2);
        shortArray = shortArray.concat(nums1);
    }

    for(let i = 0; i < shortArray.length; i++) {
        for(let j = 0; j < longArray.length; j++) {
            if(shortArray[i] === longArray[j]) {
                if(!result.includes(shortArray[j]))
                result.push(shortArray[i])
                break;
            } else continue;
        }
    }
    return result.sort((a, b) => b - a);
}

let nums1 = [1,2,2,1,4];
let nums2 = [2,2,4];
console.log(intersectionOfTwoArrays(nums1,nums2));