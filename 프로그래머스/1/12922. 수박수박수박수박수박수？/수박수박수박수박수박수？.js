function solution(n) {
    //repeat을 하고 -> 홀수면 pop해주면 되지 않나?
    //짝수면?
    let waterClap = '수박'
    if (n % 2 === 0)  {
        //repeat인거지?
        return waterClap.repeat(n/2)
    } else {
        const result = waterClap.repeat(n/2 + 1).split('')
        result.pop()
        // console.log(result)
        return result.join('')
    }
}