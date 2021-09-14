var arr = [4, 8, 1, 3, 6, 7, 9, 2]

// var filterArr = arr.filter(function (value) {
//     // return value % 2 === 0
//     // return value % 2 === 1
//     return value > 3
// })
// console.log(filterArr);

function myFilter(arr, cb) {
  var newArr = []
  for (var i = 0; i <arr.length; i++){
    // if (arr[i] % 2 === 0){
    if (cb(arr[i], i, arr)){
      newArr.push(arr[i])
    }
  }
  return newArr
}
// console.log(myFilter(arr));
console.log(myFilter(arr, function(value){
  return value % 2 === 0
}))
console.log(myFilter(arr, function(value){
  return value > 3
}))
