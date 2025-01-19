function solution(n, control) {
    //control == w(n+1), s(n-1), d(n+10), a(n-10)
    //결론적으로 n을 바꿨을때 마지막에 나오는 n의 값 return
    //누적 값 for..of 나 reduce 사용
    //1. reduce
    let result = [...control].reduce((acc, str) => {
        //일단 쉬운 => 일반적인 부분
        if (str === 'w') return acc + 1
        if (str === 's') return acc - 1
        if (str === 'd') return acc + 10
        if (str === 'a') return acc - 10
            // return acc + num //누적값을 더해가는 방식이지만
        }, n) //초기값
    return result
}