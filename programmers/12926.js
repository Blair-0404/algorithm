function solution(s, n) {
  let result = "";
  let array = s.split('');

  for(let i = 0; i < array.length; i++){
    let asciiCd = array[i].charCodeAt(0);
    if (asciiCd >= 65 && asciiCd <= 90){ //A~Z
      asciiCd = asciiCd + n;
      if(asciiCd > 90){
        asciiCd = asciiCd -26;
      }
    }
    else if (asciiCd >= 95 && asciiCd <= 122){ //a~z
      asciiCd = asciiCd + n;
      if(asciiCd > 122){
        asciiCd = asciiCd -26;
      }
    }
    result += String.fromCharCode(asciiCd);
  }
  return result;
}

console.log(solution('AB', 2));
