// 완전탐색 ( 중요 )

function solution(numbers) {
    let visited = [];
    const set = new Set();
    for (let i = 0; i < numbers.length; ++i) {
        visited.push(false);
    }

    recursive(numbers, visited, set, '');

    return set.size;
}

// [1, 7]
function recursive(numbers, visited, set, prev) {
    for (let i = 0; i < numbers.length; ++i) {
        if (!visited[i]) {
            visited[i] = true;
            const str = prev + numbers[i];
            if (isPrime(parseInt(str))) {
                set.add(parseInt(str));
            }
            recursive(numbers, visited, set, str); // '1' // 액자식구성들어가는 부분....
            visited[i] = false;
        }
    }
}

function isPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); ++i) {
        if (number % i === 0) return false;
    }

    return true;
}

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

console.log(solution("011"));
console.log(biggestPrime('335'));