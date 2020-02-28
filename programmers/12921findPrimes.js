// function solution(n) {
//   let primeCount = 1;
//
//   if (n === 2) {
//     return primeCount;
//   } else {
//
//     for (let i = 2; i <= n; i++) {
//       if (i % 2 !== 0) {
//         let sqrt = Math.floor(Math.sqrt(i));
//         if (sqrt * sqrt === i) {
//           primeCount += 0;
//           continue;
//         }
//         primeCount += 1;
//         console.log("*" +i)
//       }
//     }
//   }
//   return primeCount;
// }


// function solution(n) {
//   let primeCount = 2; //2, 3
//
//   if (n === 2) {
//     return primeCount = 1;
//   } else {
//
//     for (let i = 2; i <= n; i++) {
//       if (i % 2 !== 0) {
//         let sqrtOfNum = Math.floor(Math.sqrt(i));
//         if (i % sqrtOfNum === 0) {
//           primeCount += 0;
//           continue;
//         }
//         primeCount += 1;
//         console.log("*" +i)
//       }
//     }
//   }
//   return primeCount;
// }

//for문으로 구현
function solution1(n) {
  let primeCount = 0;

  for (let i = 2; i <= n; i++) { // 15
    let isPrime = true;

    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) { // 3
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeCount += 1;
    }
  }

  return primeCount;
}

// hashSet으로 구현
function solution2(num) {
  let numSet = new Set();

  for (let i = 3; i <= num; i += 2) {
    numSet.add(i);
  }

  numSet.add(2);
  for (let j = 3; j <= Math.floor(Math.sqrt(num)); j++) {
    if (numSet.has(j)) {
      for (let k = j * 2; k <= num; k += j) {
        numSet.delete(k);
      }
    }
  }

  return numSet.size;
}


console.log(solution1(15));