/*
Kata: Double Char
Link: https://www.codewars.com/kata/56b1f01c247c01db92000076/javascript
Description: Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!

*/


function doubleChar(str) {
    return str.split('').map(c => c.repeat(2)).join('');
}

// Test cases
console.log(doubleChar("String")); // "SSttrriinngg"
console.log(doubleChar("Hello World")); // "HHeelllloo  WWoorrlldd"
console.log(doubleChar("1234!_ ")); // "11223344!!__  "