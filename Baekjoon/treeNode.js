// const arr = [
//     ['7'],             // arr[0]
//     ['A', 'B', 'C'],   // arr[1]
//     ['B', 'D', '.'],   // arr[2]
//     ['C', 'E', 'F'],   // arr[3]
//     ['E', '.', '.'],
//     ['F', '.', 'G'],
//     ['D', '.', '.'],
//     ['G', '.', '.']    // arr[7]
// ];


function createTreeNode(arr) {
    const treeMap = new Map();

    for (let i = 0; i < arr.length; ++i) {
        const valueObj = {
            left: arr[i][1],
            right: arr[i][2]
        };
        treeMap.set(arr[i][0], valueObj);
    }

    return treeMap;
}

function traversal(inputArr) {
    const map = createTreeNode(inputArr);

    console.log(preOrderTraversal('A', map));
    console.log(inOrderTraversal('A', map));
    console.log(postOrderTraversal('A', map));
}

function preOrderTraversal(headKey, map) {
    const children = map.get(headKey);

    let result = headKey;
    if (children.left !== '.') result += preOrderTraversal(children.left, map);
    if (children.right !== '.') result += preOrderTraversal(children.right, map);

    return result;
}

function inOrderTraversal(headKey, map) {
    const children = map.get(headKey);

    let result = '';
    if (children.left !== '.') result += inOrderTraversal(children.left, map);
    result += headKey;
    if (children.right !== '.') result += inOrderTraversal(children.right, map);

    return result;
}

function postOrderTraversal(headKey, map) {
    const children = map.get(headKey);

    let result = '';
    if (children.left !== '.') result += postOrderTraversal(children.left, map);
    if (children.right !== '.') result += postOrderTraversal(children.right, map);
    result += headKey;

    return result;
}

const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let isLineNumber = true;
let lineNumber = 0;
let arr = [];

rl.on('line', (input) => {
    if (isLineNumber) {
        lineNumber = parseInt(input);
        isLineNumber = false;
    } else {
        arr.push(input.split(' '));
        if (--lineNumber === 0) {
            traversal(arr);
            rl.close();
        }
    }
});
