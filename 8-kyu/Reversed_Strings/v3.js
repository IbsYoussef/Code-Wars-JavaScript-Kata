/*
Kata: Reversed Strings
Link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018
Description: Complete the solution so that it reverses the string passed into it.

Examples:
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

/*
Pseudocode:
1: Initialise an empty string variable
2: Iterate from the end of the string to the beginning with a for loop
3: Add each individual character to the variable
4:Return the result
*/

function solution(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

// Test Cases
console.log(solution('world')) // => dlrow
console.log(solution('word')) // => 'drow'
console.log(solution('Hello World')) // => "dlroW olleh"

/* 

CodeWars Test Cases:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution('world'), 'dlrow');
    assert.strictEqual(solution('hello'), 'olleh');
    assert.strictEqual(solution(''), '');
    assert.strictEqual(solution('h'), 'h');
  });
});  

*/
