function solution(str_list) {
    // "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장
    //  "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트
    // 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return하도록
    let strL = str_list.indexOf('l') !== -1 ? str_list.indexOf('l') : str_list.length + 1
    let strR = str_list.indexOf('r') !== -1 ? str_list.indexOf('r') : str_list.length + 1
    
    if(strL > strR) {
        //먼저 나오는 문자열이 r일 때
        return str_list.slice(str_list.indexOf("r")+1)
    } else {
        return str_list.slice(0, str_list.indexOf("l"))
    }
}