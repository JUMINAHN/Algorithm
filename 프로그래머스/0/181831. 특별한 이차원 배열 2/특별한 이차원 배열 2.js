function solution(arr) {
    //arr이 다음을 만족하면 1, 아니면 0
    //arr[i][j]와 arr[j][i]가 같으면 1 => 대칭이면 
    //가로 1 세로 1, 가로 2, 세로 2가 같으면 일치하는 것
    //길이 
    let n = arr.length
    let result = []
    for (let i=0 ; i< n; i++) {
        if(arr[i][0] === arr[0][i]) result.push(1)
        else result.push(0)
    }
    console.log(result)
    return (result.includes(0)) ? 0 : 1
}