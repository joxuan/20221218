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

addBtn.addEventListener('click', () => {
    let menu = document.querySelector('#menu');
    let li = document.createElement('li');
    li.innerHTML = '5';
    menu.appendChild(li);
    // bindLi();
})

let menu = document.querySelector('#menu');

menu.addEventListener('click', (e) => {
    let target = e.target;
    let tag = target.tagName;
    if (tag == 'LI') {
        console.log(target.innerHTML);
    }
})