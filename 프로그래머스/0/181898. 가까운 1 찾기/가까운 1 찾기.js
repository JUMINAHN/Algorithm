function solution(arr, idx) {
    //idx가 주어졌을 때 => idx보다 크면서 배열의 값이 1인 가장 작은 idx
    //그니까 idx 범위보다 커야하고, 배열의 값이 1이어야 함, 단 idx 범위보단 크되 가장 작은 => 먼저 성립되는 것
    //하나만 만족? => some? // find?
    
    //3보다크면서인데 왜 테스트 3은..?
    const result = arr.findIndex((num, index) => {
        if (idx <= index && num === 1) {
            return true
        }
    })
    return result
    
    //맨 처음 값
    // const answer = arr.find((num, index) => {
    //     if (index > idx && num === 1) {
    //         return index
    //     }
    // })
    // var answer = 0;
    // return answer;
}