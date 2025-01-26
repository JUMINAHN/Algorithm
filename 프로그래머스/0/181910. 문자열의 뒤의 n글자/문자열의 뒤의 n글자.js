function solution(my_string, n) {
    //my_string의 뒤의 n글자로 이루어진 문자열을 return
    const result = [...my_string].slice(my_string.length-n) //길이칸큼이니까
    // console.log(result)
    // var answer = '';
    return result.join("");
}