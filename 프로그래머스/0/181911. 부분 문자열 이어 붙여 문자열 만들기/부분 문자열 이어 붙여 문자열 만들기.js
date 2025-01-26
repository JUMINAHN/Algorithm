function solution(my_strings, parts) {
    //길이가 같음 -> 두 개 문자열
    //parts[i] => [s,e]
    //my_string[i] => my_string[s,e]
    let answer = '';
    // for ([s, e] of parts) {
    //     //s, e 각각 하나씩
    //     my_strings.
    // }
    // 하나를 기준으로 잡고 일단 돌려야 할 듯
    parts.forEach(([s,e], idx) => {
        answer += [...my_strings[idx]].slice(s, e+1).join('')
    })
    // console.log(answer)
    
    return answer;
}