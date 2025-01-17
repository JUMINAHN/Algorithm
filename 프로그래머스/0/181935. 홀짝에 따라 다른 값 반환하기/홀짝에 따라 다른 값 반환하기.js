function solution(n) {
    //n이 매개변수 => n이 홀수라면 n이하의 홀수인 모든 양의 정수의 합 rturn
    //n이 짝수라면 => n이하의 짝수인 모든 양의 접수의 제곱의 합을 return 하는 함수
    let resultSum = 0
    if (n % 2 === 1) {
        for (let i =1; i <= n ; i++) {
            if (i % 2 === 1) {
                resultSum += i
            }
        }
    } else {
            for (let i =1; i <= n ; i++) {
            if (i % 2 === 0) {
                resultSum += (i * i)
            }
        }
    }
    return resultSum;
}