function solution(nums) {

  if (nums.length < 3) {
    return []
  }

  nums = nums.sort((a, b) => a - b);
  const tmpSet = new Set();
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    let tmpSum = nums[i] + nums[left] + nums[right];

    while (left < right) {
      tmpSum = nums[i] + nums[left] + nums[right];
      if (tmpSum === 0) {
        tmpSet.add([nums[i], nums[left], nums[right]].toString());
        left++;
        right--;
      } else if (tmpSum < 0) {
        left++;
      } else if (tmpSum > 0) {
        right--;
      }
    }
  }

  let tmpArr = Array.from(tmpSet);

  tmpArr.forEach((val) => {
    let tmp = val.split(',');
    tmp.forEach((str, idx) => tmp[idx] = parseInt(str));
    result.push(tmp)
  });

  return result
}


// tmpArr 만드는 과정을 빼고 sum이 0 이면 set에 있는지 확인하고 없으면 바로 resul에 push하도록 리팩토링 했었으나 그건.. 시간초과..왜지;; 이유를 모르겠다.
// JS특성인지... Set에 배열들이있을떄 그 배열들의 중복처리는 안되는것같다..그래서 스트링으로 묶어서 넣고 체크하는식으로 구현함
function solution2(nums) {

  if (nums.length < 3) {
    return []
  }

  let sortedNums = nums.sort((a, b) => a - b);
  const resultSet = new Set();
  const result = [];

  for (let i = 0; i < sortedNums.length - 2; i++) {
    let lNumber = i + 1;
    let rNumber = sortedNums.length - 1;
    let tmpSum = sortedNums[i] + sortedNums[lNumber] + sortedNums[rNumber];

    while (lNumber < rNumber) {
      tmpSum = sortedNums[i] + sortedNums[lNumber] + sortedNums[rNumber];

      if (tmpSum === 0) {
        if(!resultSet.has(([sortedNums[i], sortedNums[lNumber], sortedNums[rNumber]].toString()))) {
          resultSet.add([sortedNums[i], sortedNums[lNumber], sortedNums[rNumber]].toString());
          result.push([sortedNums[i], sortedNums[lNumber], sortedNums[rNumber]])
        }
        lNumber++;
        rNumber--;
      } else if (tmpSum < 0) {
        lNumber++;
      } else if (tmpSum > 0) {
        rNumber--;
      }
    }
  }

  // let tmpArr = Array.from(resultSet);
  //
  // tmpArr.forEach((val) => {
  //   let tmp = val.split(',');
  //   tmp.forEach((str, idx) => tmp[idx] = parseInt(str));
  //   result.push(tmp)
  // });

  return result
}


// console.log(solution([-1, 0, 1, 2, -1, -4])); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
// console.log(solution([-1, 0, 1])); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
// console.log(solution([0, 0, 0, 0])); // [[0,0,0]]
// console.log(solution([])); // []
// console.log(solution([1, 2, -2, -1])); // []
// console.log(solution([0])); // []
console.log(solution([3, 0, -2, -1, 1, 2])); // [[-2,-1,3],[-2,0,2],[-1,0,1]]
