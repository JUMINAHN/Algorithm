function solution(n) {
    //12 => 1, 2, 3, 4 ,6 ,12 
    //약수를 어떻게 구하지? 
    //n => 1부터 n까지 나누는데, 나눠지는 것?
    let result = []
    for (let i=1; i<=n; i++) {
        if (n % i === 0) {
            result.push(i)
        }
    }
    // console.log(result)
    return result.reduce((acc, num) => acc + num ,0)
}