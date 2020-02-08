function solution(phone_number) {
    let result = [];

    for (let i = phone_number.length - 1; i >= 0; i--) {
        if (i >= phone_number.length - 4) {
            result.unshift(phone_number[i]);
        } else {
            result.unshift('*');
        }
    }
    return result.join('');
}

function solution2(phone_number) {
    return phone_number.replace(/\d(?=(\d{4}))/g, '*');
}

console.log(solution2('01040504858'));