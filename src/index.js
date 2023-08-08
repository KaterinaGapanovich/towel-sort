module.exports = function towelSort (matrix) {
 
  let myResultArr = [];
  if (matrix == null) {
    return [];
  }

  let newCounter = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (y % 2 == 0) { myResultArr[newCounter] = matrix[y][x];
      } else {
        myResultArr[newCounter] = matrix[y][matrix[y].length - 1 - x];
      }
      
      newCounter++;
    }
  }
  return myResultArr;
}
