function solution(my_string, is_prefix) {
    //접두사는 특정 인덱스까지의 문자열
    //접두사이면 1, 아니면 0을 return => 이건 endWith이 아닌 startWith
    return +my_string.startsWith(is_prefix);
}