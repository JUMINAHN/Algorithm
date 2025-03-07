function solution(a, b) {
    const result = a.map((item, idx) => item * b[idx])
    return result.reduce((acc, num)=> acc+num,0)
    
}