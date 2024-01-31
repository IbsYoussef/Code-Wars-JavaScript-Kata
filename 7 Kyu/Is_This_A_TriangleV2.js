function isTriangle(a,b,c){
    var sides = [a,b,c].sort((x,y) => x - y)

    return sides[0] + sides[1] > Math.max(...sides)
}