function solution(key, lock) {
  const keyLen = key.length;
  const lockLen = lock.length;

  const mapLen = (keyLen)*2 + lockLen-2;
  const mapGen = len => Array(len).fill(0).map(_=>Array(len).fill(0));
  const maps = mapGen(mapLen);

  // insert lock
  for(let i=0;i<lockLen;i++){
    for(let j=0;j<lockLen;j++){
      const offset = keyLen - 1;
      maps[offset+i][offset+j] = lock[i][j];
    }
  }

  // only rectangle
  // not clone
  function rotate(arr) {
    const arrLen = arr.length;
    const arrLenHalf = Math.ceil(arrLen / 2);

    for (let i = 0; i < arrLenHalf; i++) {
      for (let j = i; j < arrLen - i - 1; j++) {
        const temp = arr[i][j];
        const offset = arrLen - i - 1;

        arr[i][j] = arr[offset - j + i][i];
        arr[offset - j + i][i] = arr[offset][offset - j + i];
        arr[offset][offset - j + i] = arr[j][offset];
        arr[j][offset] = temp;
      }
    }
  }

  function isAnswer(){
    let res = true;
    for(let i=0;i<lockLen;i++){
      for(let j=0;j<lockLen;j++){
        const offset = keyLen-1;
        if(maps[offset+i][offset+j] % 2 == 0){
          return false;
        }
      }
    }
    return true;
  }

  function mapMark(offsetY, offsetX, mark){
    for(let y=0; y<keyLen ;y++){
      for(let x=0; x<keyLen ;x++){
        maps[y + offsetY][x + offsetX] += key[y][x]*mark;
      }
    }
  }

  function unLock(){
    const canMoveSize = mapLen - keyLen + 1;
    for(let i=0;i < canMoveSize ;i++){
      for(let j=0;j < canMoveSize ;j++){
        const offsetY = i;
        const offsetX = j;

        mapMark(offsetY,offsetX, 1);
        if(isAnswer()) return true;
        mapMark(offsetY,offsetX, -1);
      }
    }
    return false;
  }

  if(unLock()) return true;
  rotate(key);

  if(unLock()) return true;
  rotate(key);

  if(unLock()) return true;
  rotate(key);

  if(unLock()) return true;
  return false;
}

console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]],[[1, 1, 1], [1, 1, 0], [1, 0, 1]]));