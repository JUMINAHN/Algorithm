function solution(arr, query) {
    //query의 홀짝여부를 판단하는것?
    for (let i = 0; i < query.length; i++) {
        if (i % 2 === 0) { //짝수이면
            arr = arr.slice(0, query[i] + 1); //0부터 query[i까지]
        } else { //홀수이면?
            arr = arr.slice(query[i]); //query[i-1]은제거하니까 query[i]부터 뒤까지
        }
    }
    return arr;
}
