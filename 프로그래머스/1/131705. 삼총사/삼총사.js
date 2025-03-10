function solution(number) {
    //3명의 정수 번호를 더했을때 0이되면 삼총사
    //5명일때 => -2, 0, 2 를 더했을 때 0이면 삼총사 
    //삼총사를 만들 수 있는 방법 => 조합
    //작은 것부터 모두 돌아서 조건을 맞추기 하면 되지 않을까?
    
    let cnt = 0
    //for문 3번 => sort를 안해도 됨 모두 조합할거니까
    for (let i=0; i<number.length; i++) {
        //i가 증가할 때마다 
        for (let j=i+1; j<number.length; j++) {
            //j보다 커야함
            for (let k=j+1;k<number.length;k++ ) {
                //3개가 모두 0이 되는지 확인해야 함
                if(number[i] + number[j] + number[k] === 0) cnt ++
            }
        }
    }
    // console.log(cnt)
   return cnt 
}