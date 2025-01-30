function solution(num_list, n) {
    //n번쨰 이후 원소부터 맨뒤까지 자른 것을 앞에두고
    return [...num_list.slice(n), ...num_list.slice(0, n)];
}