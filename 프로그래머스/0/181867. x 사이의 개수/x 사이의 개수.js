function solution(myString) {
    const result = myString.split('x') //여기 length를 하면 배열의 총 개수가 반환된다.
    return result.map((item) => item.length)
    // console.log(numResult)
}