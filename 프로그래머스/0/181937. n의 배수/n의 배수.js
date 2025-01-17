function solution(num, n) {
    //num이 n의 배수이면 1 아니면 0
    if((num % n) == 0) {
        return 1
    } else {
        return 0
    }
}