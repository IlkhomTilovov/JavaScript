// for (i = 1; i <= 10; i++) {
//     console.log(`\n${i} - karraliklar\n`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j} `);
//     }
// }

// let a = 1;
// for (let kara = 1; a <= 10; a++) {
//     console.log(`${kara} * ${a} = ${a * kara} `);
// }


// let title;
// title = "Webbrain";
// console.log(title);
// let total = 208
// function get(grade) {
//     let res = grade * 100 / 208
//     console.log(res);
// }

// get(52);
// get(104);


// let title;
// title = "Webbrain";
// console.log(title);
// let total = 208
// function get(grade) {
//     let res = grade * 100 / 208
//     console.log(res);
// }
// get()
// get(52);
// get(104);


// function getName(name){
//     return name;
// }

// console.log(getName("Toshmatov"));


function get(grade, total) {
    let res = (grade * 100) / 208;
    return res;
}

console.log(get(200) > 50 ? "passed" : "faild");