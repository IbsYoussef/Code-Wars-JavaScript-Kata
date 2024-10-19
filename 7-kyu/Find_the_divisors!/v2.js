
const divisors = (integer) => {
    if (isPrime(integer)) return '(integer) is prime';

    let divisors = [];

    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;

}

const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Test cases
console.log(divisors(12));  // Should return [2, 3, 4, 6]
console.log(divisors(25));  // Should return [5]
console.log(divisors(13));  // Should return '13 is prime'
console.log(divisors(24));  // Should return [2, 3, 4, 6, 8, 12]
console.log(divisors(1));   // Should return []
console.log(divisors(37));  // Should return '37 is prime'
console.log(divisors(100)); // Should return [2, 4, 5, 10, 20, 25, 50]