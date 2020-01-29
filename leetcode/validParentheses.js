const strA = "()[]{[]}";
const strB = "{[]}";

function validParentheses(s) {
    const bracketMap = new Map();
    bracketMap.set('(', ')');
    bracketMap.set('[', ']');
    bracketMap.set('{', '}');

    let bracketArray = s.split(''); // ['(', ')', '[', '[', '{', '}']
    let tmp = [];

    for (let i = 0; i < bracketArray.length; i++) {
        if (bracketArray[i] === '(' || bracketArray[i] === '[' || bracketArray[i] === '{') {
            tmp.push(bracketArray[i]);

        } else {
            if (tmp.length === 0) {
                return false;
            }

            if (bracketMap.get(tmp[tmp.length - 1]) === bracketArray[i]) {
                tmp.pop();
            } else {
                return false;
            }
        }
    }

    if(tmp.length === 0) {
        return true;
    } return false;
}



console.log(validParentheses(strA));