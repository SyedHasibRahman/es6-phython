// Search Data

var arr = [4, 2, 7, 8, 6, 87, 3, 9]

var find = 32
var isFound = false

for( var i = 0; i < arr.length; i++){
  if(arr[i] === find){
    console.log('Data is found ' + i)
    isFound = true
    break
  }
}
if(!isFound){
  console.log('Data Is Not Founded')
}
