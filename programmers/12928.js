function solution(n) {
  let result = 0;

  for(let i = 1; i <= Math.sqrt(n); i++) {
    if(n % i === 0) {
      if (i !== Math.sqrt(n)) result += (n / i);
      result += i;
    }
  }

  return result;
}

console.log(solution(25));