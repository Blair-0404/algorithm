function develop(progresses, speeds) {

  let ret = [];
  let days = [];
  let count = 0;

  progresses.forEach((val, idx) => (
    days.push(Math.ceil((100 - val) / speeds[idx]))
  ));

  let maxDayIdx = 0;

  for (let i = 0; i < days.length; i++) {
    if (days[maxDayIdx] >= days[i]) {
      count++;
    } else {
      ret.push(count);
      maxDayIdx = i;
      count = 1;
    }
  }
  ret.push(count);
  return ret;
}

let progresses = [93, 30, 55];
let speeds = [1, 30, 5];


console.log(develop(progresses, speeds));