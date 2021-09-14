
var point = {
  x: 10,
  y: 20,
  z: 15
}
console.log(point.x);
console.log(point.y);
console.log(point.x + point.z);

console.log(point['x']);
console.log(point['z']);

var show ='x'
console.log(point[show]);
point.x = 45
point.a = 17
console.log(point);
console.log(point.d)

point['y'] = 100;

var prop = 'z'
point[prop] = 55;
console.log(point)
