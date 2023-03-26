let doms = {}

for (let i = 0; i < 10; i++) {
    doms[`n${i}`] = document.querySelector(`#num-${i}`);
}

doms.n7.addEventListener('click', () => {
    console.log('n7 clicked.');
})

console.log('n7 is bind.');