
let stackArr = [];

function last(oneArr) {
    return oneArr[oneArr.length - 1];
}

class Minstack {
    stack = [];


push(x) {
    if(stackArr.length === 0) {
        stackArr.push([x, x]);
        return
    }

    stackArr.push([x, ])

}
}