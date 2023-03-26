let number = document.querySelector('#number-value');
let btn = document.querySelector('#calc-btn');
let response = document.querySelector('#response');

const numberToLevel = (value) => {
    if (value >= 90) {
        return '甲';
    }

    if (value >= 80) {
        return '乙'
    }

    if (value >= 70) {
        return '丙'
    }

    if (value >= 60) {
        return '丁'
    }

    return '不及格';
}

const calc = () => {
    let value = number.value;
    let level = numberToLevel(value);
    response.querySelector('span').innerHTML = level;
    response.classList.add('active');

    number.value = '';
    number.focus();

    if (value < 60) {
        response.classList.add('fail');
    } else {
        response.classList.remove('fail');
    }
}

console.log(number, btn, response);


btn.addEventListener('click', () => {
    calc();
})

number.addEventListener('keyup', (e) => {
    let key = e.key;
    if (key == 'Enter') {
        calc();
    }
})