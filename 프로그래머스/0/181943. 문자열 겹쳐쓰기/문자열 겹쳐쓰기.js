//해당 문제 다시 풀어보기 => Blog 참고로 약간 부족한 부분
function solution(my_string, overwrite_string, s) {
    let result = [...my_string]
    //splice가 배열에 적용됨
    result.splice(s, overwrite_string.length, overwrite_string)
    return result.join("")
}
