function solution(a, b, c, d) {
    let input = [a, b, c, d];
    const dice = {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0
    };
    input.forEach(num => dice[num]++);

    const counts = Object.values(dice);
    const maxCount = Math.max(...counts);
    const entries = Object.entries(dice).filter(([, count]) => count > 0).sort((a, b) => b[1] - a[1]);

    // 점수 계산 로직
    if (maxCount === 4) {
        return 1111 * entries[0][0];
    } else if (maxCount === 3) {
        const [p, q] = entries.map(e => Number(e[0]));
        return Math.pow(10 * p + q, 2);
    } else if (maxCount === 2) {
        if (entries.length === 2) {
            const [p, q] = entries.map(e => Number(e[0]));
            return (p + q) * Math.abs(p - q);
        } else {
            const [, q, r] = entries.map(e => Number(e[0]));
            return q * r;
        }
    } else {
        return Math.min(...input);
    }
}
