function solution(arr, queries)  {
    //s,e,k
    //s <= i <= e인 모든 i에 대해 i가 k의 배수이면..?? => 그냥 딱 i가 배수인지만 확인
    //0은 무조건 포함 idx % k === 0이어야 함
    // arr[i]에 1을 더한다. => 약수이면
    for ([s,e,k] of queries) {
        // console.log(s,e,k)
        arr.forEach((num, i) => {
            if((s <= i && i <= e) && (i % k == 0)) {
                // console.log(i)
                arr[i] += 1
            }
        })
        //여기서 다시 올라갈건데 arr다시 확인
        // console.log(arr)
    }
    return arr
  }