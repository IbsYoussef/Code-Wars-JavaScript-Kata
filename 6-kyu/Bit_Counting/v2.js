var countBits = n => {
    let numBinary = n.toString(2).split('');
    let final = 0;

    for (let i = 0; i < numBinary.length; i++){
        final += Number(numBinary[i])
    }

    return final;
}