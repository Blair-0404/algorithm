
function solution(numbers, hand) {
  const lSet = new Set([1, 4, 7]);
  const rSet = new Set([3, 6, 9]);
  let lPoint = '*';
  let rPoint = '#';
  let result = '';

  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] === 0) {
      zeroDistance(lPoint,rPoint)
    }

    if (lSet.has(numbers[i])) {
      result += 'L';
      lPoint = numbers[i]
    } else if (rSet.has(numbers[i])) {
        result += "R";
        rPoint = numbers[i]
      } else {
        if(calcDistance(lPoint,numbers[i]) < calcDistance(rPoint, numbers[i])) {
          result += 'L';
          lPoint = numbers[i]
        } else if(calcDistance(rPoint,numbers[i]) < calcDistance(lPoint, numbers[i])) {
          result += 'R';
          rPoint = numbers[i]
        } else {
          result += hand[0].toUpperCase();
        }
      }
    }

  return result;
}

const calcDistance = (hand, target) => {
  if (Math.abs(target - hand) % 2 === 0) {
    return 2;
  } else if (Math.abs(target - hand) === 1 || Math.abs(target - hand) === 3) {
    return 1;
  } else if (Math.abs(target - hand) === 5 || Math.abs(target - hand) === 7) {
    return 3;
  }
};

const zeroDistance = (lPoint,rPoint) => {
    if(Math.abs(lPoint - rPoint) === 2) {
      result += hand[0].toUpperCase();
    }
    else {
      if (calcDistance(lPoint,numbers[i]) > calcDistance(rPoint, numbers[i]))
    } {
      result += 'L';
      lPoint = numbers[i]
    }  else if(calcDistance(rPoint,numbers[i]) > calcDistance(lPoint, numbers[i])) {
      result += 'R';
      rPoint = numbers[i]
    }
    }

}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]; // result = "LRLLLRLLRRL"
const hand = "right";

console.log(solution(numbers, hand));