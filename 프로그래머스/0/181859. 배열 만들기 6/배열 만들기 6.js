function solution(arr) {
    //arr => 0,1로 구성
    const stk =[]
    let i = 0 //i가 arr보다 길이가 작으면 반복 => 언제까지? 같을 때 까지
    //stk === [] => stk.push(arr[i]), i++
    //stk.length > 0 => stk[stk.length-1] === arr[i] => stk.pop(), i++
    //stk.length > 0 => stk[stk.length-1] !== arr[i] => stk.push(arr[i]), i++
    arr.forEach((item, idx) => {
        if(stk.length > 0) {
            //2차 검증
            if(stk[stk.length-1] === arr[idx]){
                stk.pop()
            } else {
                stk.push(arr[idx])
            }
        } else {
            stk.push(arr[idx]) //하고
        }
    })  
    return stk.length > 0 ? stk : [-1]
}