// s = "leetcode"
// return 0.
//
// s = "loveleetcode",
// return 2.


function solution(s) {
  const sMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!sMap.has(s[i])) {
      sMap.set(s[i], 0)
    } else {
      let tmpVal = sMap.get(s[i]) + 1;
      sMap.set(s[i], tmpVal)
    }
  }
  
  for (let j = 0; j < s.length; j++) {
    if (sMap.get(s[j]) === 0) {
      return j
    }
  }

  return -1

}

console.log(solution("leetcode"))
console.log(solution("loveleetcode"))