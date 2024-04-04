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
