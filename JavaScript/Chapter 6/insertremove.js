
var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// Remove exjisting index 3 to 9
// arr[3] = 9
// arr.push(9)
// arr.unshift(9)
// arr.splice(3, 0, 7, 9) // Main Part

// arr[3] = undefined
// arr.pop() // Last element will Remove
// arr.shift() // First element will Remove

// arr.splice(3, 1) // Main Part
arr.splice(3, 1, 44 ) // Main Part
console.log(arr);
