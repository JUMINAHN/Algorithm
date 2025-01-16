function solution(a, b) {
    //a+b와 2*a*b중 더 큰 값을 return
    return Math.max(Number(`${a}${b}`), (2*a*b))
}