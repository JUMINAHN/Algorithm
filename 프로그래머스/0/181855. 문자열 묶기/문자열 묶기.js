function solution(strArr) {
    //console.log(Math.max(strArr))
    let MaxNum = 0
    strArr.forEach((item) => {
        if(MaxNum < item.length) MaxNum = item.length
    })
    //console.log(MaxNum) => 맞게 들어갔고
    // const countArr = [].fill(0, MaxNum+1)
    // const countArr = ([].fill(MaxNum+1, 0)) => [0,0,0,0]인 배열,, 이렇게 만들면 안되나
    // console.log(countArr)
    let countArr = []
    // countArr = countArr.fill(MaxNum, 0) //false로 잡혀서 안드가는건 아닐 텐데
    for (let i =0 ; i<MaxNum+1; i++) {
        countArr.push(0)
    }
    // console.log(countArr)
    //이제 본격적으로 count
    strArr.forEach((item, idx) => {
        countArr[item.length] += 1
    })
    // console.log(countArr)
    // console.log(Math.max(countArr))
//    console.log([...countArr]) //배열분해 방법
    countArr.sort() //일단 기억이 안나서 => 맨뒤로 하고
    return countArr[countArr.length - 1]
    // console.log(countArr)
    // return Math.max([...countArr])
    }