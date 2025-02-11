function solution(n_str) {
    const num = [...n_str].findIndex((item) => item !== '0')
    return n_str.slice(num)
    }