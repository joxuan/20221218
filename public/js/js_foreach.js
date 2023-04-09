let student = {
    name: 'David',
    age: 18,
    eat() {
        console.log('Eat!');
    },
    'like-food': 'water',
};

for (let field in student) {
    console.log(field, student[field]);
}

console.log(student.name);
console.log(student['like-food']);

// while (true) {
// console.log('run');
// }


(() => {
    // console.log('情境一')
    // let num1 = 10;
    // const run = function () {
    //     let num2 = 20;
    //     num1 = 30;
    //     console.log(num1, num2);
    // }

    // run();
    // console.log(num1);
    // console.log(num2);
})();

(() => {
    // console.log('情境二')
    // let num1 = 10;
    // const run = function (num1) {
    //     // let num1 = xxx
    //     let num2 = 20;
    //     num1 = 30;
    //     console.log(num1, num2);
    // }

    // run();
    // console.log(num1);
    // console.log(num2);
})();

(() => {
    console.log('情境三')
    let num1 = 10;
    const run = function () {
        num2 = 20;
        num1 = 30;
        console.log(num1, num2);
    }

    run();
    console.log(num1);
    console.log(num2);
})();


(() => {
    let student = {
        name: 'David'
    }

    let student2 = student;

    student.name = 'John';

    console.log(`student name is ${student.name}, student2 name is ${student2.name}`)

    student2.name = 'Dan';

    console.log(`student name is ${student.name}, student2 name is ${student2.name}`)
})()