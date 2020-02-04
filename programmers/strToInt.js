function solution1(s) {
    let result = 0;
    let startPos = s[0] === '-' ? 1 : 0;

    for (let i = startPos; i < s.length; i++) {
        result += s[i] * Math.pow(10, (s.length - i - 1));
    }

    if(s[0] === '-') {
        result = result * -1;
    }

    return result;
}

function solution1(s) {
    let result = 0;
    let startPos = s[0] === '-' ? 1 : 0;

    for (let i = startPos; i < s.length; i++) {
        let target = parseInt(s[i]);

        for (let j = 0; j < s.length - i - 1; ++j) {
            target *= 10;
        }

        result += target;
    }

    if(s[0] === '-') {
        result = result * -1;
    }

    return result;
}


function solution3(s) {
    let result = 0;
    let startPos = s[0] === '-' ? 1 : 0;

    for (let i = startPos; i < s.length; ++i) {
        result = result * 10 + parseInt(s[i]);
    }

    if(startPos) {
        result = result * -1;
    }

    return result;
}



console.log(solution3('-123'));
