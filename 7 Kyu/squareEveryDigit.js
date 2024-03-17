function squareDigits(num){
    return parseInt(num.toString().split('').map(n => n * n).join(''))
}