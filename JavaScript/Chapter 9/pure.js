// What is pure function

console.log('Pure function Example.');
function sqr(n) {
  return n*n
}
console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));

console.log('Not pure function');
var n = 10
function change(){
  n = 100
}
change()
console.log(n);

console.log('Not pure function');
var point = {
  x: 45,
  y: 30
}
function printPoint(point){
  point.x = 100;
  point.y = 200;
  console.log(point)
}
printPoint(point)
console.log(point)
