function filter_list(l) {
    return l.filter(v =>{return typeof v === 'number' && v >= 0})
}