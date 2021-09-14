var date = new Date()
console.log(date);//2020-05-06T04:09:07.902Z

console.log(date.toDateString()); // Wed May 06 2020
console.log(date.toTimeString()); // 10:09:07 GMT+0600 (Bangladesh Standard Time)
console.log(date.toLocaleString()); // 5/6/2020, 10:09:07 AM

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
