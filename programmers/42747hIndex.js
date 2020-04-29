function hIndex(array) {
  let retArr = [];

  if(array[0] === 0) {
    return 0
  }

  for(let HIndex = 0; HIndex <= array.length; HIndex++) {
    let HCount = 0;

    for(let curIdx = 0; curIdx < array.length; curIdx++) {
      if(array[curIdx] >= HIndex) {
        HCount ++;
      }
    }
    if(HCount === HIndex) {
      retArr.push(HIndex);
    }
  }

  return retArr.pop();
}

const array = [4,4,4,5,0];

console.log(hIndex(array));

// 한 문항이 통과가 안되는데 어떤 케이스인지 잘 모르겠다..