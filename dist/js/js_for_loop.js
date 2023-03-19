const calc = function (n1, n2) {
    for (let i = 1; i <= n1; i++) {
        // console.log(`i is ${i}`);
        for (let j = 1; j <= n2; j++) {
            // console.log(`j is ${j}`);
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
}

const makeThead = function (n1) {
    let thead = document.querySelector('#display-table thead');
    let content = '<tr><th></th>';

    for (let i = 1; i <= n1; i++) {
        content += `<th>${i}</th>`;
    }

    content += '</tr>';

    thead.innerHTML = content;
}

let makeBtn = document.querySelector('#make-btn');

makeBtn.addEventListener('click', () => {
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');

    if (!num1.value) {
        alert('數字1 未填寫');
        num1.focus();
        return;
    }

    if (!num2.value) {
        alert('數字2 未填寫');
        num2.focus();
        return;
    }

    let n1 = +num1.value;
    let n2 = +num2.value;

    makeThead(n1);

    calc(n1, n2);
});