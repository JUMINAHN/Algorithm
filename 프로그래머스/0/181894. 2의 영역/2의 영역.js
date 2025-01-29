function solution(arr) {
    //2부터 2까지 짜름
    //앞 idx, 뒤 idx
    let sI = 0
    let eI = arr.length - 1
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === 2) {
            sI = i
            break
        }
    }
    for (let i=arr.length-1 ; i >= 0; i --) {
        if (arr[i] === 2) {
            eI = i
            break
        }
    }
    return arr.slice(sI, eI+1).includes(2) ? arr.slice(sI, eI+1) : [-1]
}