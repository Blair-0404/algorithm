function addBinary(a, b) {
    let aPos = a.length - 1; // 3
    let bPos = b.length - 1; // 2
    let carry = 0;
    let result = ''; // sum 값들 저장

    while (aPos >= 0 || bPos >= 0) {
        const aValue = aPos >= 0 ? parseInt(a[aPos]) : 0;
        const bValue = bPos >= 0 ? parseInt(b[bPos]) : 0;

        switch(aValue + bValue + carry) {
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
        aPos--;
        bPos--;
    }

    return result += carry;
}

const a = '100';
const b = '111';
console.log(addBinary(a,b));