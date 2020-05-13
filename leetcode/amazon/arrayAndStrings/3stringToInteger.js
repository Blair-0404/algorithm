// 32비트에 저장할 수 있는 정수 값의 범위는 0부터 4,294,967,295, 또는 −2,147,483,648부터 2,147,483,647까지이다.
// ''애초에 빈거면 0 이답?


// input이 ' ', '.1'일때는 돌아가지 않음 ㅠ
function solution(str) {
  let result = '';
  let sign = +1;

  if (parseInt(str) < -2147483648) {
    return -2147483648
  } else if (parseInt(str) > 2147483647) {
    return 2147483647
  }

  if (str === '' || str === 0) {
    return 0
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        continue;
      }

      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 122) {
        if (!result) {
          return 0
        }
      }

      if (str.charCodeAt(i) === 45) {
        sign = -1;
      }

      if ((str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) || (str.charCodeAt(i) === 46)) {
        result += str[i]
      }
    }
  }

  return parseInt(result) === NaN ? 0 : parseInt(result) * sign;

}


// 괜찮은 풀이로 다시 공부함 filter라는 변수에 숫자와 부호와 공백을 넣어놓고 시작
// let myAtoi = function(str) {
//   let filter = '0123456789+- ';
//   let res = 0;
//   let sign = 1;
//   for(let char of str){
//     let index = filter.indexOf(char);
//     if(index !== -1) {
//       if(char === " ") continue;
//       if(filter[10] === "+") filter = filter.slice(0,10);
//       if(char === "+") continue;
//       if(char === "-") { sign = -sign; continue }
//       res = res*10 + index
//     } else {
//       break;
//     }
//   }
//   res = res*sign;
//   if(res > 2**31-1) res = 2**31-1;
//   else if (res < -(2**31)) res = -(2**31);
//   return res
// }


// const str = "    -47";
// const str = "4193 with words";
// const str = "words and 987";
// const str = " -91283472332";
// const str = " ";
// const str = "3.14159";
// const str = ".1";

console.log(solution(str));
