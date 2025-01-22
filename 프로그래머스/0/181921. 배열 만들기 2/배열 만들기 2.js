function solution(l, r) {
    const result = []
    for (let i=l; i<=r ; i++) {
        if([...String(i)].every((item) => (item === '0' || item === '5')))  {
            result.push(i)   
        }
    }
//     빈값도 truthy로 판단하기 떄문에
    return result.length > 0 ? result : [-1]
}