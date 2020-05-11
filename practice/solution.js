// [[1, 4], [3, 4], [3, 10]]       	[1, 10]
// [[1, 1], [2, 2], [1, 2]]     	[2, 1]


function solution(v) {
  const xMap = new Map();
  const yMap = new Map();
  let result = [0,0];

  for (let i = 0; i < v.length; i++) {
      if (!xMap.has(v[i][0])) {
        xMap.set(v[i][0], 1)
      } else {
        let tmp = xMap.get(v[i][0]) + 1;
        xMap.set(v[i][0], tmp)
      }

      if (!yMap.has(v[i][1])) {
        yMap.set(v[i][1], 1)
      } else {
        let tmp = yMap.get(v[i][1]) + 1;
        yMap.set(v[i][1], tmp)
      }

  }

  for(let j = 0; j < v.length; j++) {
    if(xMap.get(v[j][0]) === 1 || xMap.size === 1) {
      result[0] = v[j][0]
    }
    if(yMap.get(v[j][1]) === 1 || yMap.size === 1) {
      result[1] = v[j][1]
    }
  }

  console.log(result)
}



function solution2(v) {
  let xArr = [];
  let yArr = [];

  for (let i = 0; i < v.length; i++) {
    if(xArr.includes(v[i][0])) {
      let tmp = xArr.findIndex((val) => (
        val === v[i][0]
      ));
      xArr.splice(tmp,1);
    } else {
      xArr.push(v[i][0])
    }

    if(yArr.includes(v[i][1])) {
      let tmp = yArr.findIndex((val) => (
        val === v[i][1]
      ));
      yArr.splice(tmp,1);
    } else {
      yArr.push(v[i][1])
    }
  }

  return[...xArr,...yArr]
}


const v = [[1, 1], [2, 2], [1, 2]];
solution2(v);