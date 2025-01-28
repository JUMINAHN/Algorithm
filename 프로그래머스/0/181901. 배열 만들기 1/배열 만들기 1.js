function solution(n, k) {
    //1<= x <= n -> k배수를 return
    //reduce? => 근데 이건 배열이 있어야 함
    //이거도 되지만? 굳이 그냥 애초에 세팅
    const answer = []
    for (let i=1*k; i <= n ; i+=k) {
        answer.push(i)
    }
    return answer;
}