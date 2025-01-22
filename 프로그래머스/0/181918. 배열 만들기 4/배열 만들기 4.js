function solution(arr) {
    const stk = [] //그냥 arr[i]를 stk에 추가
    let i = 0;
    while (i < arr.length) {
        if (stk.length === 0) {
            stk.push(arr[i])
            i++
        } else if (stk.length > 0 && stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i])
            i++
        } else {
            stk.pop()
        }
    }
    return stk;
}