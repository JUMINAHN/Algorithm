function solution(myString) { //x기준으로 자르면 x는 없음
    return myString.split('x').sort().filter((item) => item) //사전순 sort => item 값이 있는것만 반환
    // console.log(result)
}