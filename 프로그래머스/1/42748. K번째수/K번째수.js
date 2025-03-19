function solution(array, commands) {
    const final = []
    for (let i=0; i<commands.length;i++) {
        const res = array.slice(commands[i][0] - 1, commands[i][1])
        res.sort((a,b) => a-b)
        final.push(res[commands[i][2] - 1])
    }
    return final
}