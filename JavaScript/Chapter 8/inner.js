// function something(greet, name){
//   function sayHi(){
//     console.log(greet, name)
//   }
//   sayHi()
// }
// something('Welcome!', 'Hasib')

function innerFun(greet, name) {
  function firstName(){
    if (name){
      return name.split(' ')[0]
    }else {
      return ''
    }
  }
  var message = greet + ' ' + firstName()
  console.log(message)
}

innerFun('Welcome!', 'SyedHasib')
