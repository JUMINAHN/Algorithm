function solution(a, b, flag) {
    //a,b 와 boolean 변수 flag가 주어질 때
    //flag === true이면, a+b
    //flag === false이면, a-b
    // if (flag) {
    //     return a + b
    // } else {
    //     return a - b
    // }
    return flag ? (a+b) : (a-b)
}