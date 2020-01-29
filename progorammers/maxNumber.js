function solution(numbers) {
    numbers.sort((first, second) => {
        const firstStr = first.toString();
        const secondStr = second.toString();
        let firstIndex = 0;
        let secondIndex = 0;

        while (true) {
            if (firstStr[firstIndex] > secondStr[secondIndex]) {
                return -1;
            } else if (firstStr[firstIndex] < secondStr[secondIndex]) {
                return 1;
            } else {
                if (firstIndex === firstStr.length - 1 && secondIndex === secondStr.length - 1) {
                    return 0;
                }

                firstIndex = firstIndex === firstStr.length - 1 ? firstIndex : firstIndex + 1;
                secondIndex = secondIndex === secondStr.length - 1 ? secondIndex : secondIndex + 1;
            }
        }


        // do {
        //     if (firstStr[firstIndex] > secondStr[secondIndex]) {
        //         return -1;
        //     } else if (firstStr[firstIndex] < secondStr[secondIndex]) {
        //         return 1;
        //     } else {
        //         firstIndex = firstIndex === firstStr.length - 1 ? firstIndex : firstIndex + 1;
        //         secondIndex = secondIndex === secondStr.length - 1 ? secondIndex : secondIndex + 1;
        //     }
        // } while (firstIndex !== firstStr.length - 1 || secondIndex !== secondStr.length - 1);


        // return (secondStr + firstStr) * 1 - (firstStr + secondStr) * 1;
    });

    const result = numbers.join('');

    if (result.startsWith('0')) return '0';
    else return result;
}

const arr = [6, 10, 2];
console.log(solution(arr));
