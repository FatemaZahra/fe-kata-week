const countValidTriangles = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (
        arr[i][j] + arr[i][j + 1] > arr[i][j + 2] &&
        arr[i][j + 1] + arr[i][j + 2] > arr[i][j] &&
        arr[i][j + 2] + arr[i][j] > arr[i][j + 1]
      ) {
        count++;
      }
    }
  }
  return count;
};

module.exports = countValidTriangles;
