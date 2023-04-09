// const bindLi = () => {
//     let lis = document.querySelectorAll('#menu li');

//     lis.forEach(li => {
//         li.addEventListener('click', () => {
//             console.log(li.innerHTML)
//         })
//     })
// }

// bindLi();



let addBtn = document.querySelector('#add-btn');

// addBtn.addEventListener('click', () => {
//     let menu = document.querySelector('#menu');
//     let li = document.createElement('li');
//     li.innerHTML = '5';
//     menu.appendChild(li);
//     // bindLi();
// })

let menu = document.querySelector('#menu');

// menu.addEventListener('click', (e) => {
//     let target = e.target;
//     let tag = target.tagName;
//     if (tag == 'LI') {
//         console.log(target.innerHTML);
//     }
// })


let note = document.querySelector('#note');

note.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Note Show!');
})


let submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('submit valid')
    let test = document.querySelector('#input-test')
    if (test.value) {
        submitBtn.parentNode.submit();
    }
})


// let timer = setTimeout(() => {
//     console.log(11111);
// }, 3000)

// clearTimeout(timer);

let timer = setInterval(() => {
    console.log(1);
}, 1000)


let stopBtn = document.querySelector('#stop-btn');

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
})