function solution(arr) {
    let maxCount = 0;
    for (let num of arr) {
        let count = 0;
        let current = num;
        while (true) {
            if (current >= 50 && current % 2 === 0) {
                current = current / 2;
            } else if (current < 50 && current % 2 === 1) {
                current = current * 2 + 1;
            } else {
                break;
            }
            count++;
            if (current === num) break;
        }
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
}
