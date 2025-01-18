function solution(a, d, included) {
    //등차수열? == 연속하는 두 항의 차이가 모두 일정한 수
    //첫째항이 a, 공차가 d인 등차수열에서 include[i]가 i+1항 ==> 즉0번째 idx는 1항
    //1항부터 n항까지 include가 true인 것만 더한다.
    
    //filter이랑, reduce모두 배열 => 그냥 for문으로 해결
    let result = 0
    let acc = a
    for (let i=0 ; i< included.length ;i++) {
        if (included[i]) { //참일때 값을 더함
            result += acc //순서가 acc먼저
        }
        acc += d // 3 7 11 15 19 => 3 15 19 
        
    }
    return result
    }