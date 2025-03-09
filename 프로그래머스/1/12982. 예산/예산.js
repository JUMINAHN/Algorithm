function solution(d, budget) {
    //순서대로 안해도 되네 => 그리디네 최적의 해 
    d.sort((a,b) => a-b)
    let total = 0
    let cnt = 0
    for (let i=0; i<d.length;i++) {
        if (total + d[i] > budget) break
        total += d[i]
        cnt++
    }
    return cnt
 
}