const calc = function (n1, n2) {
    for (let i = 1; i <= n1; i++) {
        // console.log(`i is ${i}`);
        for (let j = 1; j <= n2; j++) {
            // console.log(`j is ${j}`);
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
}

calc(9, 9)