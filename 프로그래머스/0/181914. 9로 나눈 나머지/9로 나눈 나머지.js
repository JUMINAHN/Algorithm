function solution(number) {
    // console.log(Number(number) % 9)  //number자체를 문자값
    // console.log(number % 9) //이건 그냥 나누기 => 나머지..랑 다르지 않나

    const result = [...number].reduce((acc, num) => acc + Number(num), 0) //누적합인 것 확인 후 명시
    // console.log(result % 9)
    // let final = 0
    return result % 9
    // if ((number / 9) === (result % 9)) {
    //     final = result % 9 
    // }
    // console.log(final)
}