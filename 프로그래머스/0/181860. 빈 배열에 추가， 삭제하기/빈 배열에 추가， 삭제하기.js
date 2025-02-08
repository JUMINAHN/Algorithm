//Array.fill?
function solution(arr, flag) {
    const arrX = []
    //접근 로직은 복잡하지만 대충 맞음 => 문제 난독 이슈
    flag.forEach((item, idx) => {
        if(flag[idx]) {
            for (let i=0; i<arr[idx]*2;i++) {
                arrX.push(arr[idx])
            }
        } else {
            for (let i=0; i<arr[idx] ; i++) {
                arrX.pop()
            }
        }
    })
    return arrX
}
