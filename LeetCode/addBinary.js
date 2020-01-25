function calculateBinarySum(a, b) {
    const strA = a.split('').reverse(); // strA = ['0','0','1']
    const strB = a.split('').reverse(); // strB = ['0','1']

    let result = [];
    let sum = 0;
    let carry = 0;
    for (let i = 0; i < strA.length; i++) {
        switch (strA[i] + strB[i]) {
            case '00' :
                sum = '0';
                carry = '0';
                break;
            case '11' :
                sum = '0';
                carry = '1';
                break;
            case '10' || '01' :
                sum = '1';
                carry = '0';
                break;
        }
        result.push(sum);

        switch (strA[i+1] + strB[i+1] + carry) {
            case '101' || '001' || '110' :
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
            case '001' || '010' || '100' :
                sum = '1';
                carry = '0';
                break;
        }
        result.push(sum);
    }
    return result.reverse();
}

const a = '100';
const b = '10';

console.log(calculateBinarySum(a,b));