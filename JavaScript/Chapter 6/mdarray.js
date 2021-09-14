// Multi Dimensional Array

var arr = [
  [78, 99, 87, 77],
  [80, 75, 98, 90],
  [91, 85, 90, 87]
]
for(var i = 0; i < arr.length; i++){
  for(var j = 0; j < arr[i].length; j++){
    console.log('Element ' + i + ' > ' + j + ': ' + arr[i][j])
  }
}
