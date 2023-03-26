// let users = [
//     { id: 1, name: "eshmat" },
//     { id: 2, name: "toshmat" },
//     { id: 3, name: "gulmat" },
//     { id: 4, name: "holmat" },
// ];
// const del = (id) => {
//     let res = users.filter((value) => value.id !== id);
//     users = res;
// }
// const add = (newUser) => {
//     users = [...users, { ...newUser, id: users.length + 1 }]
// };
// add({ name: "web" })
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
const generate = generator()
console.log(generate.next());