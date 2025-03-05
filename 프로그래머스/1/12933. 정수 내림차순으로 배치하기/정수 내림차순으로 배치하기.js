function solution(n) {
    const result = [...String(n)].sort((a, b) => Number(b) - Number(a))
    // const result = [...String(n)].map((item) => Number(item))
    // console.log(result)
    return Number(result.join(''))
    }