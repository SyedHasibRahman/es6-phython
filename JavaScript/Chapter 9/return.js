// function greet(msg){
//   function greeting(name) {
//     return msg + ', ' + name + '!'
//   }
//   return greeting;
// }
// var gm = greet('Good Morning')
// var gn = greet('Good Night')
// var hello = greet('Hello')
// // console.log(typeof gm);
// var msg = gm('Syed Hasib')
// console.log(msg)
// console.log(gn('Syed Fahim'))

// function base(b){
//   function power(n){
//     var result = 1
//     for (var i = 1; i <= n; i++){
//       result *= n
//     }
//     return result
//   }
//   return power
// }

function base(b){
  return function(n){
    var result = 1
    for (var i = 1; i <= b; i++){
      result *= n
    }
    return result
  }
}

var base10 = base(10)
var base5 = base(5)
console.log(base10(2))

console.log(base5(5))

console.log(base10(3))
