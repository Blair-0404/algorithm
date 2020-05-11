function solution(map) {
  const nc = map.length;
  const queue = [{direction: 1, position: 0}, {direction: 2, position: 0}];
  map[0][0] = -1;

  while (queue.length !== 0) {
    const {direction, position} = queue.shift();
    const row = Math.floor(position / nc);
    const col = position % nc;

    if (col + 1 < nc && map[row][col + 1] !== 1) { // right
      if (direction === 1 && (map[row][col + 1] === 0 || map[row][col + 1] >= map[row][col] + 100)) {
        map[row][col + 1] = map[row][col] + 100;
        queue.push({direction: 1, position: row * nc + col + 1});
      } else if (map[row][col + 1] === 0 || map[row][col + 1] >= map[row][col] + 600) {
        map[row][col + 1] = map[row][col] + 600;
        queue.push({direction: 1, position: row * nc + col + 1});
      }
    }
    if (row + 1 < nc && map[row + 1][col] !== 1) { // down
      if (direction === 2 && (map[row + 1][col] === 0 || map[row + 1][col] >= map[row][col] + 100)) {
        map[row + 1][col] = map[row][col] + 100;
        queue.push({direction: 2, position: (row + 1) * nc + col});
      } else if (map[row + 1][col] === 0 || map[row + 1][col] >= map[row][col] + 600) {
        map[row + 1][col] = map[row][col] + 600;
        queue.push({direction: 2, position: (row + 1) * nc + col});
      }
    }
    if (col - 1 >= 0 && map[row][col - 1] !== 1) { // left
      if (direction === 3 && (map[row][col - 1] === 0 || map[row][col - 1] >= map[row][col] + 100)) {
        map[row][col - 1] = map[row][col] + 100;
        queue.push({direction: 3, position: row * nc + col - 1});
      } else if (map[row][col - 1] === 0 || map[row][col - 1] >= map[row][col] + 600) {
        map[row][col - 1] = map[row][col] + 600;
        queue.push({direction: 3, position: row * nc + col - 1});
      }
    }
    if (row - 1 >= 0 && map[row - 1][col] !== 1) { // up
      if (direction === 4 && (map[row - 1][col] === 0 || map[row - 1][col] >= map[row][col] + 100)) {
        map[row - 1][col] = map[row][col] + 100;
        queue.push({direction: 4, position: (row - 1) * nc + col});
      } else if (map[row - 1][col] === 0 || map[row - 1][col] >= map[row][col] + 600) {
        map[row - 1][col] = map[row][col] + 600;
        queue.push({direction: 4, position: (row - 1) * nc + col});
      }
    }
  }

  return map[nc - 1][nc - 1] + 1;
}