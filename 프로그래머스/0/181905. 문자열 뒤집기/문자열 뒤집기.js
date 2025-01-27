function solution(my_string, s, e) {
    //my_string에서 s부터 e까지를 뒤집은 문자열을 return
    //my_string + my_string.reverse() 
    let answer = [...my_string].slice(0,s).join('') + [...my_string].slice(s,e+1).reverse().join('')+[...my_string].slice(e+1).join('');
    console.log(answer)   
    return answer;
}