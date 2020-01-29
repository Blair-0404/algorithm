const strA = '1011';
const strB = '10';

function addBinary(strA, strB) {
    // const reverseStrA = strA.split('').reverse().join(''); // '1101'
    // const reverseStrB = strB.split('').reverse().join(''); // '01'
    // const maxLengthStr = Math.max(reverseStrA.length, reverseStrB.length); // 4
    // const minLengthStr = Math.min(reverseStrA.length, reverseStrB.length); // 2
    //
    // let carry = 0;
    // let result = [];

    for (let i = 0; i < minLengthStr; i++) {
        switch (parseInt(reverseStrA[i]) + parseInt(reverseStrB[i])) {
            case 3: // 111
                result += '1';
                carry = 1;
                break;
            case 2:
                result += '0';
                carry = 1;
                break;
            case 1:
                result += '1';
                carry = 0;
                break;
            case 0:
                result += '0';
                carry = 0;
                break;
        }
    }
}

console.log(addBinary(strA, strB));