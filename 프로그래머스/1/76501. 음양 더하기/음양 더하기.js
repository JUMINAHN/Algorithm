function solution(absolutes, signs) {
    const result = absolutes.map((item, idx) => {
        //이거 음수일 경우 => 음수 변환?
        if(!signs[idx]) return -item
        else return item
    })
    // console.log(result)
    return result.reduce((acc, num) => acc + num,0)
}