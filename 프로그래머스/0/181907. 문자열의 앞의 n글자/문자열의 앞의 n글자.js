function solution(my_string, n) {
    //앞의 n글자로 이루어진 문자열을 return
    return [...my_string].slice(0, n).join('')
}