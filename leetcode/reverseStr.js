function reverseStr(str) {
  let retArr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') {
      retArr.push(str[i])
    }
  }
  return retArr
}

// 추가공간 사용 없이 swap으로 풀어보기
function reverseStr2(str) {

  str = str.split('');
  let changeCount = Math.ceil(str.length / 2) - 1;

  for(let i = 0, j = 1; i < changeCount; i++) {
    let tmp = str[i];
    str[i] = str[str.length - j];
    str[str.length - j] = tmp;
    j++;
  }

  return str
}

const str = '레이첼';
console.log(reverseStr2(str));