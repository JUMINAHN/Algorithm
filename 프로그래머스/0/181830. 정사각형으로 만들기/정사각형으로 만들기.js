function solution(arr) {
    //이차원 arr이 매개변수 => arr의 행의 수가 더 많다면 열의 수가 행의수와 같아지도록 0을 추가
    //열이 더 많다면? 행의 수가 열과 같아지도록 0을 추가
    const row = arr.length
    const col = arr[0].length
    //row가 더 많다면? => row 하나씩 돌떄마다 기존 값에 0을 더 추가
    //col이 더 많다면 => row를 하나 더 추가
    if (row > col) {
        arr.map((item) => {
            for (let i=0; i < row-col; i++) {
                item.push(0)
            }
        })
    } else { //col
        //지금 arr에 추가
        for (let i=0; i< col-row; i++) {
            arr.push(new Array(col).fill(0))
        }
    } 
    return arr

}