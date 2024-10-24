/*
Kata: Convert number to reversed array of digits
Link: 
Description: 
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

*/

const digitize = (n) => n.toString().split("").reverse().map(n => parseInt(n, 10));

// Test cases
console.log(digitize(35231)) // [1,3,2,5,3]
console.log(digitize(54321)) // [1,2,3,4,5]
console.log(digitize(2468)) // [8,6,4,2]