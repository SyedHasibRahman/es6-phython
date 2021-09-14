function sayHi(n){
  if(n === 0){
    return ;
  }
  console.log('Hi, I am calling');
  sayHi(n - 1)
}
sayHi(10)

function sum(n){
  if(n === 0){
    return 1
  }
  return n + sum(n-1)
}
console.log(sum(5));


function fact(n){
  if(n === 1){

  }
}
