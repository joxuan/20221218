let addBtn = document.querySelector('#add-btn');
let itemName = document.querySelector('#item-name');
let item = document.querySelector('#item');

const appendItem = (name) => {
    let li = document.createElement('li');
    let input = document.createElement('input');
    let div = document.createElement('div');

    div.innerHTML = name;
    input.type = 'checkbox';

    li.appendChild(input);
    li.appendChild(div);

    item.appendChild(li); // 效能比較好
}

const appendItemES6 = (name) => {
    let li = `<li>
        <input type="checkbox">
        <div>${name}</div>
    </li>`;
    item.innerHTML += li; // 效能比較差
}

addBtn.addEventListener('click', () => {
    let name = itemName.value;
    console.log(name);
    // appendItem(name);
    appendItemES6(name);
})