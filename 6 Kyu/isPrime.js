// 6Kyu

// Teamate Solution worked
function isPrime(num) {
  if (num <= 1) {
//       console.log(false)
    return false
}else if (num == 2) {
  return true  
} else if (num == 3) {
  return true
}else if (num >= 4) {
    for (i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
        if (num % i == 0) {
//             console.log(false)
            return false
        }
    }
}
// console.log(true)
return true
}

// isPrime(13)

// My solution did not work
function isPrime(num) {
    if (num <= 1) {
        return false
    } else {
        let z = num % 3
        if (z != 0){
            return true
        } else {
            return false
        }
    }
}


// isPrime(3)
