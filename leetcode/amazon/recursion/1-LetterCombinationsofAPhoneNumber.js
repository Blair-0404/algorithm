

function solution(digits) {
  const numberMap = new Map();
  const resultArr = [];

  numberMap.set("2", "abc");
  numberMap.set("3", "def");
  numberMap.set("4", "ghi");
  numberMap.set("5", "jkl");
  numberMap.set("6", "mno");
  numberMap.set("7", "pqrs");
  numberMap.set("8", "tuv");
  numberMap.set("9", "wxyz");

  if(!digits) {
    return []
  } else {
    backtrack(digits, 0, numberMap)
  }

  return resultArr
}

function backtrack(digits,curPos,Map) {
  let tmpArr = [];
  let curNum = Map.get(digits[curPos]); // abc
  let nextNum = Map.get(digits[curPos + 1]); // def

  for(let i = 0; i < curNum.length; i++) {
    let j = 0;
    while(j < nextNum.length) {
      tmpArr.push(curNum[i] + nextNum[j]);
      j++;
    }
  }
  // curPos = nextNum + 1;
  // if(cu)

}

console.log(solution("23"))
