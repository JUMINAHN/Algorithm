function solution(arr, k) {
    // 중복을 제거하면서 순서를 유지하는 배열 생성
    const uniqueArr = [...new Set(arr)];
    
    // 결과 배열 생성
    const result = uniqueArr.slice(0, k);
    
    // k개보다 적으면 -1로 채우기
    while (result.length < k) {
        result.push(-1);
    }
    
    return result;
}
