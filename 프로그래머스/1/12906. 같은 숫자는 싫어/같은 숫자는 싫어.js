function solution(arr){
    //arr => 0~9
    //연속적으로 나타나는 숫자는 하나만 남기고 전부 제거
    //기존 arr 순서 유지해야함
    //set으로 묶고 정렬?X
    
    //findIndex 처음? =>X
    // let newArr = []
    // arr.forEach((item) => {
    //     //있으면? => XX, 연속에만 해당됨
    //     newArr.includes(item)
    // })
    let newArr = [arr[0]]
    // let prev = -1 //아무것도 없을떄 => num
    arr.forEach((item, idx) => {
        if (idx === 0 || (arr[idx-1] === item)) return //0일떈 페스
        // prev = arr[idx-1]
        else newArr.push(item)
    })
    // console.log(newArr)
    return newArr
    }