// 완전탐색 ( 중요 )
// 프로그래머스 풀이 (재귀함수 사용)
function solution(numbers) {
    let visited = [];
    const primeSet = new Set();
    for (let i = 0; i < numbers.length; ++i) {
        visited.push(false);
    }

    recursive(numbers, visited, primeSet, '');

    return primeSet.size;
}

// [1, 7]
function recursive(numbers, visited, primeSet, prev) {
    for (let i = 0; i < numbers.length; ++i) {
        if (!visited[i]) {
            visited[i] = true;
            const str = prev + numbers[i];
            if (isPrime(parseInt(str))) {
                primeSet.add(parseInt(str));
            }
            recursive(numbers, visited, primeSet, str); // '1' // 액자식구성들어가는 부분....
            visited[i] = false;
        }
    }
}

function isPrime(number) { // 현재 number가 소수인지 판별해주는 함
    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); ++i) {
        if (number % i === 0) return false;
    }

    return true;
}

console.log(solution("011"));






// 다른 예제 - 주어진 넘버스트링으로 만들수있는 (넘버스트링길이와 같은)모든 경우의 수중 max 값을 구하라.
// [1,2,3,...,9]
function biggestPrime(numbers) {
    let visited = [];
    for (let i = 0; i < numbers.length; ++i) {
        visited.push(false);
    }

    return recv(numbers, visited, '');
}

function recv(numbers, visited, prev) {
    if (prev.length === numbers.length) {
        if (isPrime(parseInt(prev))) {
            return prev;
        } else {
            return -1;
        }
    }

    let max = -1;
    for (let i = 0; i < numbers.length; ++i) {
        if (!visited[i]) {
            visited[i] = true;
            max = Math.max(max, parseInt(recv(numbers, visited, prev + numbers[i])));
            visited[i] = false;
        }
    }

    return max;
}

console.log(solution('17'));