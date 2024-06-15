// Solution to problem 48. Rotate Image (matrix)
//
// https://leetcode.com/problems/rotate-image/

let rotateMatrix = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  matrix = matrix.map((e) => e.reverse());

  console.log(matrix);
};

let m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let res = rotateMatrix(m);
