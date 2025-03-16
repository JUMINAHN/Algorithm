//20분 고민
function solution(sizes) {
// 1. 좌/우 중 가장 큰 수를 찾는다
// 2. 좌에 가장 큰 수가 있따면 좌/우 위치를 바꿔서 제일 큰수가 모두 좌쪽으로 가게한다.
//  >우에 가장 큰 수가 있따면 제일 큰수가 모두 우쪽으로 가게 한다.
// 3. 그리고 가장 큰 수끼리 곱하면 된다.
    
//생각해보니까 가장 큰 숫자를 a,b를 비교해서 다 왼쪽으로 몰아서, 가장 큰쪽 왼쪽 오른쪽 구하면 => 5분
    for(let i=0; i<sizes.length; i++) {
        let max = Math.max(sizes[i][0], sizes[i][1])
        let min = Math.min(sizes[i][0], sizes[i][1])
        // console.log(max,min)
        sizes[i][0] = max
        sizes[i][1] = min
    }
    let left = sizes[0][0]
    let right = sizes[0][1]
    sizes.forEach((item) => {
        if (item[0] > left) {
            left = item[0]
        }
        if (item[1] > right) {
            right = item[1]
        }
    })
    // console.log(left, right)
    return left*right
    
    // let left = []
    // let right = []
    // for (let i=0; i<sizes.length;i++) {
    //     left.push(sizes[i][0])
    //     right.push(sizes[i][1])
    // }
    // let big = Math.max(Math.max(...left), Math.max(...right))
    // console.log(big)
    
    
    
}