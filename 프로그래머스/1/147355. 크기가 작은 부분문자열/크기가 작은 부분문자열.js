function solution(t, p) {
    //t에서 p와 길이가 같은 부분 문자열중에서, 이 부분 문자열이 나타내는 수가 p보다 작거나 같은 것이 나오는 횟수 리턴
    //idx를 부분 짤라줌
    //slice한 값들이 계속 달라지는 것 => t = 7, p = 4 => 일다은 p만큼
    let tl = t.length
    let pl = p.length
    let count = 0
    for (let i=0; i<tl-pl+1; i++) {
        const sub = Number([...t].slice(i, i+pl).join(''))
        if (sub <= p) count++
    }
    // console.log(count)
    return count
}