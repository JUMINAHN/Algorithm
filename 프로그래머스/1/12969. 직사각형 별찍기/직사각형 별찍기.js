process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let row = []
    for(let i=0; i<b;i++){
        let col = []
        for(let j=0; j<a; j++) {
            // console.log('*', /n)   
            col.push('*')
        }
        row.push(col.join(''))
    }
    // console.log(row.join(''))
    // return row
    for (let i=0; i<row.length;i++){
        console.log(row[i])
    }
    
});