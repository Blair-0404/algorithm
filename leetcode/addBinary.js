function calculateBinarySum(a, b) {
    const strA = a.split('').reverse(); // strA = ['0','0','1']
    const strB = b.split('').reverse(); // strB = ['0','1']

    let result = [];
    let sum = '0';
    let carry = '0';
    let minStr = strA.length > strB.length ? strB : strA;
    let maxStr = strA.length > strB.length ? strA : strB;
    for (let i = 0; i < minStr.length; i++) {
        switch (strA[i] + strB[i] + carry) {
            case '101':
            case '110':
            case '011':
                sum = '0';
                carry = '1';
                break;
            case '111' :
                sum = '1';
                carry = '1';
                break;
            case '000' :
                sum = '0';
                carry = '0';
                break;
            case '001':
            case '010':
            case '100':
                sum = '1';
                carry = '0';
                break;
        }
        result.push(sum);
    }

    for(let i = minStr.length; i < maxStr.length; i++) {
        switch (carry + maxStr[i]) {
            case '10':
            case '01':
                sum = '1';
                carry = '0';
                break;
            case '11':
                sum = '0';
                carry = '1';
                break;
            case '00':
                sum = '0';
                carry = '0';
                break;
        }
        result.push(sum);
    }

    if(carry !== '0') {
        result.push(carry);
    }

    return result.reverse().join('');
}

const a = '100';
const b = '10';

console.log(calculateBinarySum(a,b));