function solution(s) {
  const bracketMap = new Map();
  bracketMap.set('(',')');
  bracketMap.set('[',']');
  bracketMap.set('{','}');

  let tmpArr = [];

  for(let i = 0; i < s.length; i++) {

    if((s[i]==='(') || (s[i]==='[') || (s[i]==='{')) {
      tmpArr.push(s[i]);
    } else {
      if(bracketMap.get(tmpArr[tmpArr.length - 1]) === s[i]) {
        tmpArr.pop()
      } else {
        return false
      }
    }
  }
  if(tmpArr.length <= 0) {
    return true
  } else {
    return false
  }
}


console.log(solution('}')); // f
console.log(solution('(])')); // f
console.log(solution('[])')); // f
console.log(solution('[{}]')); // t
console.log(solution('(){}[]')); // t
console.log(solution('')); // t
