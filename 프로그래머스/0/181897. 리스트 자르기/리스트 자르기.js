function solution(n, slicer, num_list) {
    //slicer == a, b, c
    // n==1 -> 0~b
    // n==2 -> a~
    // n==3 -> a~b
    // n==4 -> a~b,c -> filter
    let [a,b,c] = slicer
    const result = []
    // if (n=== 1) return num_list.slice(,b+1) //이건 안되나봄
    if (n=== 1) return num_list.slice(0,b+1) 
    else if (n=== 2) return num_list.slice(a)
    else if (n=== 3) return num_list.slice(a,b+1)
    //아까 처럼 필터 이용하려고 했는데 index가 바뀌어버림
    else {
        for (let i=a; i<=b; i+=c) {
            result.push(num_list[i])
        }
        return result
    }
}