console.log('Long Way');
var name = 'Fahim'

var fullname = ''
if (name.length == 0){
  fullname = 'Syed Hasib'
}else{
  fullname = name
}
console.log(fullname);
console.log(' shorhand 1 ');
var name2 = ''
fullname2 = name2 || 'Syed Hasib'
console.log(fullname2);

console.log(' Second Way');

var isOk = false
if(isOk){
  console.log("Okay");
}else {
  console.log("Not okay");
}
console.log(' ShorHand 2');

isOk && console.log('Okay shorhand');
