function solution(numbers, n) {
    //numbers 원소를 더하다가 n보다 커지는 순간 이떄까지 더했떤 합을 return
    return numbers.reduce((acc, num) => {
        //이걸 하되 커지면 => 근데 애초에 acc가 undefined? => 초기값 0 설정?
        if (acc > n) { 
            return acc + 0
            //일단 그냥 빠져나가기 => 이거 떄문인가? => 여기서 undefined => 원하는대론 잘돼,,
        } 
        return acc + num //그전까지 더해 => if 조건문으로 씌우지 않아서 그런듯?
    }, 0)
    }