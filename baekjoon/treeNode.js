// input 받으면 -> arr에 담기
// arr = [
//     ['A', 'B', 'C'],   // arr[1]
//     ['B', 'D', '.'],   // arr[2]
//     ['C', 'E', 'F'],   // arr[3]
//     ['E', '.', '.'],       .
//     ['F', '.', 'G'],       .
//     ['D', '.', '.'],       .
//     ['G', '.', '.']    // arr[7]
//       ];

// arr의 index들을 Map에 넣기 (key : 부모노드 , value : 왼,오 자식노드)
// Map {
//     'A' => { left: 'B', right: 'C' },
//     'B' => { left: 'D', right: '.' },
//     'C' => { left: 'E', right: 'F' },
//     'E' => { left: '.', right: '.' },
//     'F' => { left: '.', right: 'G' },
//     'D' => { left: '.', right: '.' },
//     'G' => { left: '.', right: '.' }
// }


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
    console.log(map);
}

function preOrderTraversal(headKey, map) {
    const children = map.get(headKey);

    let result = headKey; //루트
    if (children.left !== '.') result += preOrderTraversal(children.left, map); //왼쪽
    if (children.right !== '.') result += preOrderTraversal(children.right, map); //오른쪽

    return result;
}

function inOrderTraversal(headKey, map) {
    const children = map.get(headKey);

    let result = '';
    if (children.left !== '.') result += inOrderTraversal(children.left, map); //왼쪽
    result += headKey; // 루트
    if (children.right !== '.') result += inOrderTraversal(children.right, map); // 오른쪽

    return result;
}

function postOrderTraversal(headKey, map) {
    const children = map.get(headKey);

    let result = '';
    if (children.left !== '.') result += postOrderTraversal(children.left, map); // 왼쪽
    if (children.right !== '.') result += postOrderTraversal(children.right, map); // 오른쪽
    result += headKey; // 루트

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
