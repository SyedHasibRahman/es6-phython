var obj = {
  x: 40,
  y: 60,
  z: 75
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Object Clone
var obj2 = Object.assign({}, obj)
obj2.x = 'Hasib'
console.log(obj);
console.log(obj2)
