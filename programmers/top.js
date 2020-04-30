// heights	        return
// [6,9,5,7,4]	    [0,0,2,2,4]
// [3,9,9,3,5,7,2]	[0,0,0,3,3,3,6]
// [1,5,3,6,7,6,5]	[0,0,2,0,0,5,6]

function solution1(heights) {
    let answer = [];

    for (let i = heights.length - 1; i > 0; i--) {
        let isConnection = false;

        for (let j = i - 1; j >= 0; j--) {
            if (heights[j] > heights[i]) {
                answer.unshift(j + 1);
                isConnection = true;
                break;
            }
            // isConnection = false;
        }

        if (isConnection === false) {
            answer.unshift(0);
        }
    }
    answer.unshift(0)
    return answer;
}



class StackItem {
    height;
    index;

    constructor(height, index) {
        this.height = height;
        this.index = index;
    }
}

function solution2(heights) {
    let answer = [];
    let stack = [];

    for (let i = 0; i < heights.length; i++) {
        let isPushed = false;

        while (stack.length !== 0) {
            const top = stack[stack.length - 1]; // { height: , index: }

            if (top.height > heights[i]) {
                answer.push(top.index);
                stack.push({ height: heights[i], index: i + 1}); // new StackItem(heights[i], i + 1);
                isPushed = true;
                break;
            }

            stack.pop();
        }

        if (!isPushed) {
            stack.push({ height: heights[i], index: i + 1 });
            answer.push(0);
        }
    }

    return answer;
}


//20200501
function top(arr) {
    let isMoreHeight = false;

    for (let i = arr.length - 1; i >= 0; i--) {

        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[i]) {
                arr[i] = j + 1;
                isMoreHeight = true;
                break;
            }
        }
        if(!isMoreHeight) {
            arr[i] = 0;
        }
        isMoreHeight = false;

    }

    return arr;
}

const heights = [6, 9, 5, 7, 4];
console.log(solution2(heights));
