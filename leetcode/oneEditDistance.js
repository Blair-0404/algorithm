// Input: s = "ab", t = "acb"
// Output: true


function oneEditDistance(s, t) {
  let result = false;
  const sortedS = s.split('').sort();
  const sortedT = t.split('').sort();
  let maxLength = 1;

    if(sortedS.length + 1 === sortedT.length) {
      maxLength = sortedT.length;
    } else if (sortedT + 1 === sortedS.length) {
      maxLength = sortedS.length;
    }
  // for(let t = 0; )


}



const s = "dcab";
const t = "dab";
console.log(oneEditDistance(s,t));