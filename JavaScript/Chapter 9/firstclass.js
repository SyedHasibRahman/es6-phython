function add(a, b){
  return a+b
}

// 1. A function can be stored in Variable
var sum = add
console.log(sum(5, 6));
console.log(typeof sum)

// 2. A function Can be stored in an Array
var arr = []
arr.push(add)
console.log(arr);
console.log(arr[0](4, 7));

// 3. A Function can be stored in an Object
var obj = {
  sum: add
}
console.log(obj);
console.log(obj.sum(7, 9));

// 4. We can Create Function as Need
setTimeout(function () {
  console.log('I have created... ')
}, 100)

// 5. We can pass Function as an Argument

//6. We can return 
