function solution(my_string, is_suffix) {
    //특정 인덱스부터 시작하는 문자열 == 접미사
    //is_suffix가 my_stirng의 접미사인지 확인
   if ([...my_string].slice(my_string.length - is_suffix.length).join('') === is_suffix) {
        return 1
   } else {
       return 0
   }
    // var answer = 0;
    // return answer;
}