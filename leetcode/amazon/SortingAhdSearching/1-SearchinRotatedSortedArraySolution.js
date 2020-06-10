// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// 인풀배열 자체가 정렬이 되어져있다. 혹은 정렬된 두부분으로 되어져있다.
// 맨 왼쪽과 맨 오른쪽과 그 중간을 잡고 시작하면서 target이 없는 쪽은 확 떙긴다(볼 필요가 없는쪽은 안보는 로직)

const search = function(rotated, target) {
  let left = 0;
  let right = rotated.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2); // 왼쪽과 오른쪽의 가운데 잡기

    if (rotated[middle] === target) { // mid는계속 변경되고 nums에 target이 있다면 결국 이부분에서 리턴되고 답이 도출될것이다.
      return middle;
    }

    if (rotated[left] <= rotated[middle]) { // 왼쪽원소가 mid원소보다 작거나 같으면

      if (rotated[left] <= target && target < rotated[middle]) { // 왼쪽원소가 mid원소보다 작거나 같으면서 타켓이 mid원소보다 작으면 mid~right사이는 볼것도없다.
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {

      if (rotated[middle] < target && target <= rotated[right]) { // 타겟이 미드보다 크다면 미드보다 큰쪽을 몰아야 한다.
        left = middle + 1;
      } else {
        right = middle - 1;
      }

    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))