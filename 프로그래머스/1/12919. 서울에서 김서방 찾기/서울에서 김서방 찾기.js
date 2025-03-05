function solution(seoul) {
    const result = seoul.findIndex((item, idx) => item === 'Kim')
    // console.log(result)
    return `김서방은 ${result}에 있다`
    }