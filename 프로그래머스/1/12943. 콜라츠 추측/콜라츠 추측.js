function solution(num) {
    //짝수 2 나누기
    //홀수면 3곱하고 1더하기
    //1이 나올떄까지 반복하기
    //작업회수 그리고 500번까지 안되면 -1
    let cnt = 0
    for(let i=0; i<500; i++) {
        if (num === 1) {
            return cnt
        }
        if (num % 2 === 0) {
            num = num /2
            cnt++
        } else {
            num = (num*3)+1
            cnt++
        }
    }
    return -1
}