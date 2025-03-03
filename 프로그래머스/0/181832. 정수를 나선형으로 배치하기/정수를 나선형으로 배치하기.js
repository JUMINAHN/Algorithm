function solution(n) {
    const arr = new Array(n).fill(0).map((item) => {
        return new Array(n).fill(0)
    })
    const data_row = [0, 1, 0, -1] //idx 옮기는 것 
    const data_col = [1, 0, -1, 0] 
    //1. 0이 아니면 그곳에 방문할 수 없다 그니까 조건문 자체에 포함
    //2. 방향전환 K => 지금 우/하/좌/상인데 이게 즉 IDX
    //3. 범위를 벗어나면 안됨 + 1번과 같은 맥락인데 => O <= N+K && M+K && < N && N !== 0 && M !== 0
    //4. 범위를 벗어나게 되면 (K+1) % 4 => 방향에 따른 이제 범위 전환을 위해서 
    //5. 그럼 오른쪽이면 오른쪽 시작 쭉~~~하고, 값을 채워넣음 => 그니까 값 채워넣으면 i++인것 -> 그리고 전환
    let idx =1;
    let row =0
    let col =0
    let k=0
    arr[row][col] = idx //0,0에 idx대입 => 그리고 k만큼 더함
    idx ++ 
    while (idx <= Math.pow(n,2)) {
        //row는 계속 값이 바껴야 함 
        if  (0 <= row+data_row[k] && row+data_row[k] < n && 
    0 <= col+data_col[k] && col+data_col[k] < n && 
    arr[row+data_row[k]][col+data_col[k]] === 0){
            //여기 반영해야함
            //TypeError: Cannot read properties of undefined (reading '4') => 지금 arr[4]때문잉ㄴ듯?
            arr[row+data_row[k]][col+data_col[k]] = idx
            row += data_row[k]
            col += data_col[k]
            idx++
        } else {
            k = (k+1) % 4
        }
    }
    console.log(arr)
    return arr
}