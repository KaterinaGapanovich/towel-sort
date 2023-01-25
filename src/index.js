/*const arr = [ 
              [ 1, 2, 3 ], 
              [ 4, 5, 6 ], 
              [ 7, 8, 9 ], ];

 b = arr.join().split(',').sort(function(a, b) { return a - b }), 
 //приводим исходный к одномерному, сортируем
newarr = [];
for(var i = 0; i < arr.length; i++){ newarr[i] = b.splice(0, arr[0].length).reverse() } 
//заполняем новый массив

console.log( newarr
  arr.reduce((acc, cur, i) => {
    return acc.concat((cur.reverse(), i)), [];
  })

); */

//let newArray = array.flat(); возвращает нов массив, в кот все элем на уровень выше

//matrix.flat().sort(function(a, b) { return (b % 2 == 0) ? matrix[a][b] : matrix[b][matrix[b].length - 1 - a]}) сортировка по возрастанию


// You should implement your task here.

module.exports = function towelSort (matrix) {
 
  var resultArrey = [];
  if (matrix == null) {
    return [];
  }
  var counter = 0;
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (y % 2 == 0) {
        resultArrey[counter] = matrix[y][x];   
      } else {
        resultArrey[counter] = matrix[y][matrix[y].length - 1 - x];
      } 
      counter++;
    }
  }
  return resultArrey;

}
