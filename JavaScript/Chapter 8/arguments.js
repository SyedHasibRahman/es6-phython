function add(a, b){
  var result = a + b;
  console.log(result)
}
add(30, 70)

function sub(a, b){
  var result = a - b
  console.log(result)
}
sub(50, 80)

// function with variables
var arr1 = [1, 2, 3]
var arr2 = [5, 7, 9]
var arr3 = [9, 7, 5]
// Sum from variables

var sum1 = 0
for(var i = 0; i <arr1.length; i++){
  sum1+= arr1[i]
}
console.log(sum1);

var sum2 = 0
for(var i = 0; i < arr2.length; i++){
  sum2 += arr2[i]
}
console.log(sum2);

var sum3 = 0;
for (var i = 0; i < arr3.length; i++){
  sum3 += arr3[i]
}
console.log(sum3);

// Sum of array with function
var arr5 = [33, 55, 77, 99, 11]
console.log('Sum of array with function <br>');
function sumOfArray(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  console.log(sum);
}
sumOfArray(arr5)
console.log('Argument Object in JavaScript');
 function test(a, b, c){
   // console.log(arguments)
   for(var i = 0; i <arguments.length; i++){
     console.log(arguments[i])
   }
 }
// test()
test(10, 20, 30)

console.log('Argument Object in JavaScript 2');
function addAll(){
  var sum = 0;
  for (var i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }
  console.log(sum)
}
addAll(1,2,3);
addAll(1,2,3,4,5,6,7,8,9,10);
