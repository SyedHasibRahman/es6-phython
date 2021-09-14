
var a = 'I am'
var b = 'Syed Hasib'

var c = a.concat(' ', b)
// var d = c.substr(4, 4)
// console.log(d)

console.log(c.charAt(5));

console.log(c.startsWith('I am'));

console.log(c.endsWith('Hasib'));

console.log(c.toUpperCase('Hasib'));

console.log(c.toLowerCase('Hasib'));
console.log('           Spach!        '.trim());
console.log(c.split(' ')); //Spach Thake split hoba


var str = 'Syed Hasibur Rahman'
var length = 0

while (true){
  if(str.charAt(length) == ''){
    break
  }else{
    length++
  }
}
console.log(length)

console.log(c.length);
