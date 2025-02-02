function solution(num_list) {
    //길이가 11이상이면 모든 합
    const allSum = num_list.reduce((acc, item) => acc + item)
    const allMul = num_list.reduce((acc, item) => acc * item)
    
    //10이하이면 모든 곲을 return
    return num_list.length >= 11 ? allSum : allMul
}