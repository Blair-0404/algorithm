// 숫자를 => 로마문자로
function solution(num) {
  const refArray = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  let retStr = '';

  let j = 0;
  while (num > 0) {
    if (num >= refArray[j][0]) {
      retStr += refArray[j][1];
      num -= refArray[j][0];
    } else {
      j++
    }
  }

  return retStr
}

// const num = 25; // XXV
// const num = 1994; // MCMXCIV
// const num = 20; // XX
// const num = 2000; // MM
// console.log(solution(num));

// 로마문자를 => 숫자로
function solution2(s) {
  const refArr = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  let retNum = 0;

  let j = 0;
  let curIdx = 0;
  while (curIdx < s.length) {
    if (s.slice(curIdx,curIdx + refArr[j][1].length) === refArr[j][1]) {
      retNum += refArr[j][0]  * 1;
      curIdx = curIdx + refArr[j][1].length;
    } else {
      j++
    }
  }

  return retNum;
}




// const num = 'XXV' // 25
// const num2 = "MCMXCIV"; // 1994
// const num2 = 'XX' // 20
const num2 = 'III' // 2000
console.log(solution2(num2));