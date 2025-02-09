function solution(arr, n) {
    if (arr.length % 2 === 0) {
        //짝수
        return arr.map((item, idx) =>{
            if (idx % 2 === 1) return item + n
            else return item
        })
    } else {
         return arr.map((item, idx) =>{
            if (idx % 2 === 0) return item + n
            else return item
        })
        //홀수
    }
}