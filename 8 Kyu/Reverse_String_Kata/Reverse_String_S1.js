// 8 kyu Reversed Strings
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function ReverseString(str) {

const revArray = [];
const length = str.length - 1;

for(let i = length; i >= 0; i--) {
    revArray.push(str[i]);
}

return revArray.join('');
}
