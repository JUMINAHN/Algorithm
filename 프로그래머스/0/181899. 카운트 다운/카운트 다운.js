function solution(start_num, end_num) {
    const answer = [];
    for (i=start_num ; i >= end_num ; i--) { //부등호 표기
        answer.push(i)
    }
    return answer;
}