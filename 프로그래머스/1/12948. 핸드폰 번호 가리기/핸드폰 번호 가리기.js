function solution(phone_number) {
    //뒷문자 4개 제외하고 모두 *처리
    return phone_number.split('').map((item, idx) => {
        if(idx >= phone_number.length-4) return item
        else return '*'
    }).join('')
    // console.log(result)
}