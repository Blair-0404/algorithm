function solution(p) {
  if (p.length === 0) { // 1.입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
    return ''
  }
  const {u, v} = split(p); // 2.문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.

  if (isValid(u)) { // 3.문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
    return u + solution(v) // 3-1.수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
  } else { // 4.문자열 u가 "올바른 괄호 문자열"이 아니라면
    return '(' + solution(v) + ')' + makeNewU(u)
  }
}

const isValid = (str) => { // u가 올바른 구성인가?
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(') {
      stack.push(char)
    } else {
      stack.pop()
    }
  }
  return stack.length === 0
}

const split = (p) => { // 비구조화 할당으로 u(최초 균형잡힌 괄호) ,v(나머지) 쪼개서 리턴하기
  let count = 0
  for (let idx = 0; idx < p.length; idx++) {
    const char = p[idx]
    if (char === '(') {
      count++
    } else {
      count--
    }
    if (count === 0) {
      return {u: p.slice(0, idx + 1), v: p.slice(idx + 1)}
    }
  }
}

const makeNewU = (u) => { // u가 올바르지 않다면 맨 앞, 맨뒤를 반대괄호로 바꾸기
  const result = Array.from(u.slice(1, u.length - 1))
    .map((char) => {
      if (char === '(') {
        return ')'
      } else {
        return '('
      }
    })
    .join('')
  return result
}

const p = ")(";
console.log(solution(p));