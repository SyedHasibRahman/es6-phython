var persons =[
  {
    name: 'A',
    age: 26
  },
  {
    name: 'B',
    age: 19
  },
  {
    name: 'C',
    age: 29
  },
  {
    name: 'D',
    age: 31
  }
]
var arr = [4, 5, 7, 4, 7, 6, 54, 8, 9, 0, 67, -1]
//
// arr.sort()
// console.log(arr);
//
// persons.sort()
// console.log(persons)

arr.sort(function (a, b){
  if(a > b){
    return 1
  }else if (a < b){
    return -1
  }else{
    return 0
  }
})
console.log(arr);

persons.sort(function (a, b) {
  if(a.age > b.age){
    return 1
  }else if (a.age < b.age){
    return - 1
  }else{
    return 0
  }
})
console.log(persons)

var res1 = arr.every(function (value){
  return value % 2 === 0
})
console.log('Even Number:' +res1);
var res1 = arr.every(function (value){
  return value >= 0
})
console.log('All number is greater than 0:' + res1);

var res2 = arr.some(function (value){
  return value % 2 === 1
})
console.log('Some function Odd Number:' + res2);

var res3 = arr.some(function (value){
  return value < 0
})
console.log('Minium One Negative Number: ' + res3);
