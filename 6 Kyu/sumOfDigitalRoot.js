// Sum of Digits / Digital Root Kata 6 kyu

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

let digitalRoot = n => {
    if (n < 10) return n;
    
    let sum = 0;
    while (n > 0) {
        sum += n % 10; // Add the last digit to the sum
        n = Math.floor(n / 10); // Remove the last digit from n
    }
    
    // Recursively call digitalRoot on the sum until it becomes a single digit
    return digitalRoot(sum);

}

// Another users solution to the same problem
function digital_root(n) {
    return (n - 1) % 9 + 1;
}