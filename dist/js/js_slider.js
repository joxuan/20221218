let slider = document.querySelector('.slider');
let index = 1;
let timer;

const initCircle = () => {
    let circle = slider.querySelector('.circle');
    let children = slider.querySelectorAll('.item div');
    children.forEach((item, index) => {
        let span = document.createElement('span');
        span.dataset.index = index + 1;
        circle.append(span);
    });
}

const getCurrent = (index) => {
    return slider.querySelector(`.item div:nth-child(${index})`);
}

const getCircle = (index) => {
    return slider.querySelector(`.circle span:nth-child(${index})`);
}

initCircle();

getCurrent(index).classList.add('active');
getCircle(index).classList.add('active');

timer = setInterval(() => {
    getCurrent(index).classList.remove('active');
    getCircle(index).classList.remove('active');

    index++;
    let children = slider.querySelectorAll('.item div');
    if (index > children.length) {
        index = 1;
    }

    getCurrent(index).classList.add('active');
    getCircle(index).classList.add('active');
}, 3000);

slider.addEventListener('click', (e) => {
    let target = e.target;
    if (target.tagName == 'SPAN') {
        clearInterval(timer);
        getCurrent(index).classList.remove('active');
        getCircle(index).classList.remove('active');

        index = target.dataset.index;

        getCurrent(index).classList.add('active');
        getCircle(index).classList.add('active');

        timer = setInterval(() => {
            getCurrent(index).classList.remove('active');
            getCircle(index).classList.remove('active');

            index++;
            let children = slider.querySelectorAll('.item div');
            if (index > children.length) {
                index = 1;
            }

            getCurrent(index).classList.add('active');
            getCircle(index).classList.add('active');
        }, 3000);
    }
});