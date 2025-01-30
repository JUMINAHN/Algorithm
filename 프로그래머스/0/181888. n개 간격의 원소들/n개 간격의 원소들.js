function solution(num_list, n) {
    //num_list간격마다
    const answer = [];
    for (let i=0; i< num_list.length ; i+=n){
        answer.push(num_list[i])
    }
    return answer;
}