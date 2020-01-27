const strA = "()[]{}}";
const strB = "{[]}";

function validParentheses(bracketStr) {
    const bracketMap = new Map();
    bracketMap.set('(', ')');
    bracketMap.set('[', ']');
    bracketMap.set('{', '}');

    let bracketArray = bracketStr.split(''); // ['(', ')', '[', '[', '{', '}']
    let tmp = [];

    for (let i = 0; i < bracketArray.length; i++) {
        if (bracketArray[i] === '(' || bracketArray[i] === '[' || bracketArray[i] === '{') {
            tmp.push(bracketArray[i]);

        } else if (bracketMap.get(tmp[tmp.length - 1]) === bracketArray[i]) {
            tmp.pop();
        }

    }

    if(tmp.length === 0) {
        return true;
    } return false;
}



console.log(validParentheses(strA));