// scoville            	    K	return
// [1, 2, 3, 9, 10, 12]	    7	2

// function solution(scoville, K) {
//     let count = 0;
//     let moreSpicy = false;
//
//     scoville.sort(function (a, b) {
//         return a - b
//     });
//
//     let check = function() {
//         for(let i = 0; i < scoville.length; i++) {
//             if(scoville[i] < K) {
//                 return moreSpicy;
//             }
//         }
//         moreSpicy = true;
//     };
//
//     check();
//     if (moreSpicy) {
//         while(!moreSpicy) {
//             let tmp = scoville[0] + (scoville[1] * 2);
//             scoville.splice(0, 2);
//             scoville.unshift(tmp);
//             count += 1;
//             check();
//         }
//     } else {
//         return count;
//     }
// }

function solution(scoville, K) {
    scoville.sort((a, b) => a - b);

    let count = 0;
    while (scoville[0] < K) {
        if (scoville.length < 2) {
            return -1;
        }

        count++;

        const first = scoville.shift();
        const second = scoville.shift();
        const newScoville = first + (second * 2);

        if (scoville.length === 0) {
            scoville.push(newScoville);
        } else {
            for (let i = 0; i < scoville.length; ++i) {
                if (newScoville <= scoville[i]) {
                    scoville = [...scoville.slice(0, i), newScoville, ...scoville.slice(i)];
                    break;
                }
            }
        }
    }

    return count;
}


console.log(solution([1, 2, 3, 9, 10, 12], 7));