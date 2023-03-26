let users = [
    { id: 1, name: "eshmat" },
    { id: 2, name: "toshmat" },
    { id: 3, name: "gulmat" },
    { id: 4, name: "holmat" },
];

function* generator() {
    let id = users.length;
    while (1) {
        yield ++id;
    }
}
const id = generator()

const del = (id) => {
    let res = users.filter((value) => value.id !== id);
    users = res;
}
const add = (newUser) => {
    users = [...users, { id: id.next().value, ...newUser }]
};
del(2)
add({ name: "web" })
add({ name: "web" })
add({ name: "web" })
del(4)
console.log(users);








// function* generator() {
//     let param = yield 1;
//     yield 2 + param;
//     let g = yield 3;
//     yield 4 + g;
// }
// const generate = generator()

// console.log(generate.next());
// console.log(generate.next(3));
// console.log(generate.next());
// console.log(generate.next(1));

// function* generator() {
//     let id = 1;
//     while (1) {
//         yield ++id;
//     }
// }
// const generate = generator()
// console.log(generate.next());
// const id = generator()
// console.log(generate.next());
// console.log(id.next());
// console.log(generate.next());
// console.log(generate.next());