function solution(num_list) {
    //num_list ---> num_list -1 > num_list -2 => num_list -1 - (num_list-2)
    // num_list -1 <= num_list -2 = (num_list - 1) * 2 마지막 배열에 추가
    // for ..of 는 마지막을 구분하기 어려우니까
    // 뒤에서 부터 접근?
//     for (let i=0; i < num_list.length ; i++) {

//     }
    //for문을 돌필요가 없고 특정 idx에만 접근하면 되는게 아닌가?
    let lastNum = num_list[num_list.length-1]
    let lastNumPrev = num_list[num_list.length-2]
    let result = (lastNum > lastNumPrev) ? lastNum-lastNumPrev : lastNum * 2
    num_list.push(result)
    return num_list
}