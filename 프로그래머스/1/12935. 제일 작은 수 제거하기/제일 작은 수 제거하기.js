function solution(arr) {
    //배열에서 min 구하기..
    // console.log(arr.join(' '))
    // const res = Math.min(arr.join(' '))
    // console.log(res)
    let prev = arr[0]
    for (let i=1; i<arr.length;i++) {
        if (arr[i] < prev) {
            prev = arr[i]
        }
    }
    // console.log(prev)
    const res = arr.filter((item) => item !== prev)
    // console.log(res)
    return res.length !== 0 ? res : [-1]
}