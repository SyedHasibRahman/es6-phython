// Comparing Two Objects

var obj1 = {
  a: 10,
  b: 20
}

var obj2 = {
  a: 10,
  b: 201
}

if (obj1.a === obj2.a && obj1.b === obj2.b){
  console.log(true);
}else{
  console.log(false);
}
// Short way
// Json Objects
console.log('Json Objects');
console.log(JSON.stringify((obj1) === (obj2)));
