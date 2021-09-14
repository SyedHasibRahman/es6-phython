var date = new Date()

// 0 = Sunday, 1- Monday, 2- Tuesday ...

var today = date.getDay()

switch(today){
  case 0:
    console.log('Today is Sunday');
    break
  case 1:
    console.log('Today is Monday');
  case 2:
    console.log('Today is Tuesday');
  case 3:
    console.log('Today is Wednesday');
  case 4:
    console.log('Today is Tuesday');
  case 5:
    console.log('Today is Friday');
  case 6:
    console.log('Today is Saturday');
  break
  default: console.log('Not a Valid Number');
}
