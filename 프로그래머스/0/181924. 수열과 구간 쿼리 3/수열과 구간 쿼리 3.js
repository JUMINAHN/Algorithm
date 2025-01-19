function solution(arr, queries) {
    //서로 자리 바꾸기
    //근데 배열 자체가 변경이 되나?..? => 새로운 배열을 만들어줘야하는건 아닌지?
    for (query of queries) {
        let i = query[0]
        let j = query[1]
        //새로운 배열 반환
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}