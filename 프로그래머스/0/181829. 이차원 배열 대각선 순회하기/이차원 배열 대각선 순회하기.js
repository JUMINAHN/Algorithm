function solution(board, k) {
    //i+k 가 <=k를 만족하는 i,k에 대한 board[i][j]를의합을 return
    let sum = 0
    board.map((row, rI) => {
        row.map((_, cI) => {
            if (rI + cI <= k) {
                sum += board[rI][cI]
            }
        })
    })
    return sum
    // console.log(sum)
}