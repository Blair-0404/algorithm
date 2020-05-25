

function solution(num) {
  num = num.toString().split('').reverse();

  let result = [];

  for(let i = 0; i < num.length; i ++) {
    if(i !== 0 && (i) % 3 === 0) {
      result.unshift(",");
      result.unshift(num[i])
    } else {
      result.unshift(num[i])
    }
  }

  return result.join('')
}

console.log(solution(1234567890000))
console.log(solution(30000))



