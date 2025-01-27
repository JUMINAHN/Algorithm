function solution(q, r, code) {
    //code의 각 idx를 q로 나누었을 때 나머지가 r인 문자를 앞에서부터 순서대로 이어붙인 무자열
    //qjnwezgrpirldywt
    //0 , 1, 2, 3 , 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 , 14, 15
    //q로 나누었을 때 나머지가 1
    // - ㅣ          ㅣ      ㅣ      ㅣ           ㅣ
    return [...code].filter((num, idx) => (idx % q === r)).join('')
    // console.log(result)
    // var answer = '';
    // return answer;
}