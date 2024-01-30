function DNAtoRNA(dna) {
    let rna = ''

    for (let acid of dna){
        if (acid == "T"){
            rna += "U"
        } else {
            rna += acid
        }
    }

    return rna
}

console.log("Test 1 (GCTA):", DNAtoRNA("GCTA") + "\n"); // Expected output: "GCUA"
console.log("Test 2 (Empty String):", DNAtoRNA("") + "\n"); // Expected output: ""
console.log("Test 3 (GGGCCC):", DNAtoRNA("GGGCCC") + "\n"); // Expected output: "GGGCCC"
console.log("Test 4 (TTTTT):", DNAtoRNA("TTTTT") + "\n"); // Expected output: "UUUUU"
console.log("Test 5 (GTCAAGTCTGATCGTACGTA):", DNAtoRNA("GTCAAGTCTGATCGTACGTA") + "\n"); // Expected output: "GUCAAGUCUGAUCGUACGUA"
