function findHappyNumber(n, set) { // 19
    let numArray = n.toString().split(''); //['1', '9']
    let sum = 0;

    for (let i = 0;  i < numArray.length; ++i) {
        sum += numArray[i] * numArray[i];
    }

    if (sum === 1) return true;
    else {
        if (set.has(sum)) {
            return false;
        }
        set.add(sum);
        return findHappyNumber(sum, set);
    }
}

function solution(n) {
    return findHappyNumber(n, new Set());
}

console.log(solution(50));