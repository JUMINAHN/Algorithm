function solution(rank, attendance) {
    //높은 순서대로 각각 a , b, c번 -> rank : 등수가 높은 순서대로 (낮은 숫자 우선 )
    //10000 * a + 100 * b + c
    //등수가 가장 높은 3명을 선발 
    //rank[i]는 i번 학생의 선발 고사 등수 
    
    //rank.sort((a,b) => a-b)
    //console.log(rank)
    const trueAt = rank.filter((item, idx) => {
        if (attendance[idx]) return item
    })
    trueAt.sort((a,b) => a-b) //각각의 idx를 곱해줘야 한다.
    const sliceNum = trueAt.slice(0,3)
    
    // sliceNum.forEach((item) => console.log(item, 'item'))
    // console.log(rank.findIndex(1)) => index를 찾는 것
    //console.log(rank.lastIndexOf(1)) => 중복은 안될 것 같아서
    
    const result = sliceNum.map((item) => {
        // console.log(item, 'item')
        // return attendance.lastIndexOf(item)
        // console.log(rank.find(item))
        // const subResult = rank.filter((filterItem) => item === filterItem)
        return rank.findIndex((filterItem) => item === filterItem)
    })
    console.log(result)
    return result[0] * 10000 + 100 * result[1] + result[2]
    // console.log(result[0][0], result[1][0], result[2][0])
    
}