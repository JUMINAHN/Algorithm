function solution(arr1, arr2) {
    //이차원 배열
    let row = []
    for(let i=0; i<arr1.length; i++) {
        let col = []
        for (let j=0; j<arr1[0].length; j++) {
            col.push(arr1[i][j] + arr2[i][j])
        }
        row.push(col)
    }
    // console.log(row)
    return row
}