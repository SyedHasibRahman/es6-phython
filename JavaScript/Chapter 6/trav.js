console.log('Array Printing');
var arr = [3, 4, 6, 5, 7, 8]
for(var i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

console.log(" Increment array VALUES");
for (var i= 0; i < arr.length; i++){
  arr[i] = arr[i] + 5
}
console.log(arr);

console.log('Sum From array VALUES');
var arr2 = [3, 4, 5, 6, 7, 9, 8]
var sum = 0;
for (var i = 0; i < arr2.length; i++){
  sum += arr2[i]
}
console.log(sum);

console.log('Even Number Printing from array (arr2)');
for (var i = 0; i < arr2.length; i++){
  if(arr2[i] % 2 === 0){
    console.log(arr2[i]);
  }
}

console.log('Odd Number Printing from array (arr2)');

for (var i = 0; i < arr2.length; i++){
  if (arr2[i] % 2 === 1){
    console.log(arr2[i]);
  }
}
