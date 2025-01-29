function solution(arr, query) {
    //query를 순회하면서
    //짝수 idx에서는 arr에서 query[i]번 인덱스를 제외하고, query[i] 뒷 부분을 잘라서 버림
    //홀수 idx에서는 arr에서 query[i]번 인덱스를 제외하고, query[i] 앞 부분을잘라서 버림
    //그니까 지금 배열의 수는 계속 줄어들게되고, query를 순회할 때 나오는 q는 => arr[i]의 i가 되는 것
    //근데 q가 => idx고 => idx에 맞게 홀 짝을 구하면서 되는 것
    
    // for (q of query) {
    //     if (q % 2 === 0) {
    //         //특정 함수 제거..?
    //         //짝
    //         arr = 
    //     } else {
    //         //홀
    //     }
    // }
   
    //pop도 아니었는데 => 특정함수가 제거되지 않아서 아마 replace로 "" => str
    //reduce는 누적인데 괜찮을까? 
    const result = query.reduce((acc, idx) => {
        //일단 초기값은 arr
        console.log(acc) //첫번째에는 값이 나옴
        if (idx % 2 === 0) {
            //replace가 str타입?
            //짝수
            return acc[idx+1] = ''
            // acc.replace(acc[idx+1], "")
        } else {
            //홀수
            return acc[idx-1] =''
            // acc.replace(acc[idx-1], "")
        }
    },arr)
    console.log(result)
}