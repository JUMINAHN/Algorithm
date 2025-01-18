function solution(num_list) {
    //num_list가 주어질 때 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1 크면 0
    let addResult = num_list.reduce((acc, num) => {
        //0부터 시작
        return (acc + num) //계속 누적
    }, 0)
    let powResult = num_list.reduce((acc, num) => {
        return (acc * num) //누적 곲 -> 이건안되는건가?
    }, 1) //초기값 주의 => 0부터 하면 안됨 => 계속 0이 됨 누적이 되어야하니까 1
    console.log(addResult)
    console.log(powResult)
    return (Math.pow(addResult, 2) < powResult) ? 0 : 1
}