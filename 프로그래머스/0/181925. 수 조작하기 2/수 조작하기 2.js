function solution(numLog) {
    //이전 이후값 저장
    let acc = 0
    let prev = 0
    let now = 0 //acc가 
    let result = ''
    for (let i=1 ; i <numLog.length ; i++) {
        prev = numLog[i-1] // 이전
        now = numLog[i] //현재
        if (now - prev === 10) result += 'd'
        if (now - prev === -10) result += 'a'
        if (now - prev === -1) result += 's'
        if (now - prev === 1) result += 'w'
    }
    return result 
//     for (num of numLog) {
//         //acc += num //num data계속 추가
        
//     }
    
}