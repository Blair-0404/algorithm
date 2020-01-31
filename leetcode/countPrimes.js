// Example:
// Input: 10
// Output: 4
// (Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.)

function countPrimes(n) {
    let primeNums = 0;
    let isPrime = true;

    for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNums += 1;
        }
        isPrime = true;
    }
    return primeNums;
}

console.log(countPrimes(10));