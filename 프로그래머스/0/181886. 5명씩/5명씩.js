function solution(names) {
    //5명씩 자르는데 list에 넣고 0번째 idx를 돌리는?
    const group = []
    for (let i=0; i<names.length; i+=5) { //5명씩 짜르는 것
        const myGroup = names.slice(i, i+5)
        group.push(myGroup)
    }
    // console.log(group) //여기서도 0번 idx
    // for (g of group) {
    //     console.log(g[0])
    // }
    return group.map(([a,b,c,d,e]) => a)
    // console.log(result)
}