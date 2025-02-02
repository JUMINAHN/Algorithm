function solution(num_list) {
    //짝수라면 반으로 나누고
    //홀수라면 1을 뺸 뒤 반으로 나누면 마지막엔 1이 된다.
    //계속 반복
    // const checkEveryOne = num_list.every((item) => (item === 1)) //true & false
    let idx = 0
    while(!num_list.every((item) => (item === 1))) {//그니까 모두 true가 되기전까지
        num_list = num_list.map((item) => {
        if (item === 1) {
            return 1 //이건 카운트할 필요가 없음
        }
        else if(item % 2 === 0) {
            idx++
            return item / 2
        }
        else {
            idx++
            return (item -1) / 2
        }
        //idx++ //그럼 한싸이클 return 밖이라서 안들어감
    })
        // num_list = newArr  1될 떄 까지 반복?
    }
    return idx
    }