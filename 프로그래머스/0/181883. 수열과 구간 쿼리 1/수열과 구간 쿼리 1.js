function solution(arr, queries) {
    //queries => query => [s,e]꼴
    //s <= idx <= e인 모든 idx에 대해 arr[idx] += 1
    //query 자체 idx를 의미 => 모든 i에 대해 
    for ([s,e] of queries) {
        //이 s부터 e까지 
        for(let i=s ; i<=e ; i++) {
            arr[i] += 1
        }
    }
    return arr
}
