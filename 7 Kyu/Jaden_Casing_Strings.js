String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => 
        word.charAt(0).toLocaleUpperCase() + word.slice(1)
    ).join(' ');
};

let str1 = "how can mirrors be real if our eyes aren't real";
console.log(str1.toJadenCase()); 
// Expected output: "How Can Mirrors Be Real If Our Eyes Aren't Real"

let str2 = "the moment that truth is organized it becomes a lie";
console.log(str2.toJadenCase()); 
// Expected output: "The Moment That Truth Is Organized It Becomes A Lie"

let str3 = "life is but a dream for the dead";
console.log(str3.toJadenCase()); 
// Expected output: "Life Is But A Dream For The Dead"

let str4 = "if newborn babies could speak they would be the most intelligent beings on planet earth";
console.log(str4.toJadenCase()); 
// Expected output: "If Newborn Babies Could Speak They Would Be The Most Intelligent Beings On Planet Earth"
