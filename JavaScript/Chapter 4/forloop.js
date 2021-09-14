// For Loops

for (var i=0; i<10; i++ ){
  console.log((i + 1) + ' Syed Hasib');
}

//
var x = 100;
for ( x; x<120; x++){
  console.log((x + 1) + ' Hasib');
}

console.log(' Loop y');

for(var y = 1; y<20; y++){
  if( y % 2 == 1){
    console.log(y);
  }
}
console.log(' Even Number');

for( t = 1; t< 30; t++){
  if(t % 2 == 0){
    console.log(t);
  }
}


var sum = 0;
for (var i%2 = 0; i <=10; i++){
  console.log(sum + ' + ' + i  + ' = ' + (sum+i));
  sum += i
}
console.log('Result = ' + sum);
