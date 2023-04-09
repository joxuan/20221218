let say = document.querySelector('#say');

say.addEventListener('click', () => {
    let displayName = document.querySelector('#display-name');
    let name = displayName.value;

    let response = document.querySelector('#response');

    if (!name) {
        response.classList.remove('active');
    } else {
        response.innerHTML = `Hi, ${name}`;
        response.classList.add('active');
    }
})

let quit = false;

let ss = quit ? 'Bye' : 'Welcome';

let s2 = '';

if (quit) {
    s2 = 'Bye';
} else {
    s2 = 'Welcome';
}

console.log(ss, s2);