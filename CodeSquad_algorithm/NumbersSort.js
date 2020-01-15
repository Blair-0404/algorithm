// N개의 숫자들이 담긴 배열을(정렬되있지 않음) 오름차순으로 정렬하는 코드 구현하기
// 예시 = [9, 6, 3, 4, 1, 3, 6, 7, 2, 5] => [1, 2, 3, 3, 4, 5, 6, 6, 7, 9]

// 계획 : 1. 숫자들이 오름차순으로 정렬로 들어갈 result=[]새 배열을 만들기
//      2. array배열이 길이가 0이 될때까지 반복문 돌기
//      3. 반복문은 -> 인덱스 i를 나머지 인덱스들과 같거나 큰지 비교해서 나머지 인덱스들이 모두 i보다 작으면 i를 result배열에 unshift하기
//         (unshift는 배열의 앞에 들어가는 것 이므로 가장 마지막에(배열의 맨 앞으로) 들어갈 i는 가장 작은 수가 된다.(오름차순)


function numbersSort(array) {
    const count = array.length;




    return result.unshift(count);
}



const array = [9, 6, 3, 4, 1, 3, 6, 7, 2, 5];
console.log(numbersSort(array));