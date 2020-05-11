function solution(p) {
  if (p.length === 0) {
    return '';
  }
  const {u, v} = splitStr(p);

  if (isBalance(u)) {
    return u + solution(v);
  } else {
    return '(' + solution(v) + ')' + repairedU(u);
  }

}

const isBalance = (u) => {
  const stack = [];

  for (let idx = 0; idx < u.length; idx++) {
    if (u[idx] === '(') {
      stack.push(u[idx]);
    } else {
      stack.pop()
    }
  }

  return stack.length === 0;
};

const splitStr = (p) => {
  let count = 0;

  for (let idx = 0; idx < p.length; idx++) {
    if (p[idx] === '(') {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      return {u: p.slice(0, idx + 1), v: p.slice(idx + 1)}
    }
  }
};

const repairedU = (u) => {
  let updatedU = u.split('').slice(1, u.length - 1);

  for (let i = 0; i < updatedU.length; i++) {
    if (updatedU[i] === '(') {
      updatedU[i] = ')'
    } else {
      updatedU[i] = '('
    }
  }

  return updatedU.join('')
};

const p = ")(";
console.log(solution(p));