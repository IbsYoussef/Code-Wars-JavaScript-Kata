function filter_list(l) {
    let filtered = []
    
    for (let i = 0; i < l.length; i++){
        if (typeof l[i] === 'number' && l[i] >= 0){
            filtered.push(l[i])
        }
    }

    return filtered
}

