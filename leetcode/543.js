// 이진트리의 가장 긴 diameter를 구하는 문제였다.
// 맨위 루트 노드에서부터 내려오면서 그떄그떄 길이를 넘겨주며 풀어야했는데.. 재귀로 푸는것이 관건


const diameterOfBinaryTree = function (root) {
  let answer = 0;

  const recursive = function (node) {
    if (node === null) {
      return 0;
    }

    const left = recursive(node.left);
    const right = recursive(node.right);
    answer = Math.max(answer, left + right);

    return Math.max(left, right) + 1;
  };

  recursive(root);

  return answer;
};
