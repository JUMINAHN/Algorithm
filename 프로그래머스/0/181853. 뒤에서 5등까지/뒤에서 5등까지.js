function solution(num_list) {
    // num_list.sort() //사전 순
    return num_list.sort((a,b) => a-b).slice(0,5) //오름 차순
    // console.log(num_list)
}