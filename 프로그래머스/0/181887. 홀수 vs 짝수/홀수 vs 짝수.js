function solution(num_list) {
    //가장 첫번쨰원소를 1번원소 => 0부터 count하는게 아님, 홀수번쨰의 합과 짝수번쨰 합 중 큰 값 return
    // 0이 여기서 홀수로 작용
    // const odd = num_list.reduce((acc, num) => {},0) //reduce도 되나?
    const odd = num_list.filter((num, idx) => {if (idx % 2 === 0) return true}).reduce((acc, num) => acc + num ,0)
    const even = num_list.filter((num, idx) => {if (idx % 2 === 1) return true}).reduce((acc, num) => acc + num ,0)
    if (odd > even) return odd
    else if(odd < even) return even
    else return odd
    }