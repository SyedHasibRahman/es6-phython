var arr = [4, 5, 9, 6, 7]
var arr2 = [5, 10, 35, 27]

// console.log(arr.join(' | '))
// // console.log(arr.fill(0));
// arr.fill(true)
// console.log(arr);

var arr3 = arr.concat(arr2)
console.log(arr3);

// console.log(Array.isArray(arr));

var a = [1, 2]
var b = Array.from(a)
b[0] = 5
console.log(a);
console.log(b);
