function solution(numbers) {
    //numbers에서 서로 다른 인덱스 두개를 뽑아서 만들 수 있는 모든 수를 오름차순에 담아 return
    let arr = []
    for (let i =0; i< numbers.length;i++){
        for (let j=i+1; j<numbers.length;j++) {
            if (arr.includes(numbers[i] + numbers[j])) continue
            arr.push(numbers[i] + numbers[j])
        }
    }
    arr.sort((a,b) => a-b)
    return arr
}