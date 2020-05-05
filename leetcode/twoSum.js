// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// 배열 돌면서 구현 (시간효율도가 낮음)
function solution(nums,target) {
    for(let j = 0; j < nums.length; j++) {
        for(let k = j + 1; k < nums.length; k++) {
            if(nums[j] + nums[k] === target) {
                return [j,k]
            }
        }
    }
}

// 해시맵으로 구현
function solution2() {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]

        } else {
            map.set(nums[i], i)
        }
    }
    return []
}
const nums = [-3, 4, 2, 90];
const target = 0;

console.log(solution2(nums,target));