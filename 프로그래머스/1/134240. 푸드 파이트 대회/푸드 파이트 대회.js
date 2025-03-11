function solution(food) {
    // food자체에 ->   
    // idx = 1 -> 3 / 2 -> floor = 1를 1번
    // idx = 2 -> 4 / 2 -> 2를 2번
    // idx = 3 -> 6 / 2 -> 3을 3번
    //그리고 0을 붙여서 대칭으로 뒤집기
    let result = []
    food.forEach((item, idx) => {
        const re = Math.floor(item / 2)
        for (let i =0; i < re; i++) {
            result.push(idx)
        }
    })
    return result.join('') + 0 + result.reverse().join('') //문자열끼리 더하기
    // console.log(newArr)
}