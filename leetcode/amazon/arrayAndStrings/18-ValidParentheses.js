function solution(s) {
  const pairObj = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    } else {
      let tmpBracket = stack[stack.length - 1];

      if (pairObj[tmpBracket] === s[i]) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return !stack.length;
}

console.log(solution("()[]{}"))
console.log(solution("([)]"))
console.log(solution("{[]}"))
console.log(solution("]"))