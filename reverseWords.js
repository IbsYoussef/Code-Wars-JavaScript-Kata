const reverseWords = (str) => {
    return str.split('').reduce((r, c) => c + r, '')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')) 