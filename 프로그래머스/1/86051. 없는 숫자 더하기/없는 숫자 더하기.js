function solution(numbers) {
    const arr = Array.from({length:10}, (_, i) => i) //Array.from을 활용해서 0부터 9까지 생성
    //그럼 반대로 arr.length를 모두 돌면서 numbers에 있는지 확인 => 그니까 numbers에 없는 것을 찾는거 자체 전제가 밑에는 안되었떤 것
    const result = arr.filter((item) => !numbers.includes(item))
    // console.log(result)
    return result.reduce((acc, num) => acc+num ,0)
    
    //왜 안될까?
    // const result = numbers.filter((item) => (arr.includes(item))) //includes가 아닌것 !하니까 안됨
    // console.log(result)
}