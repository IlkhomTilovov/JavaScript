
//  const mentor = [
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
//     { id: 1, name: "eshmat" },
// ];
// export { user, mentor } 
// export default user;

let user = [
    { id: 1, name: "eshmat" },
    { id: 2, name: "eshmat" },
    { id: 3, name: "eshmat" },
    { id: 4, name: "eshmat" },
    { id: 5, name: "Toshmat" },
    { id: 6, name: "eshmat" },
    { id: 7, name: "eshmat" },
    { id: 8, name: "eshmat" },
    { id: 9, name: "eshmat" },
];

const add = (addData) => {
    user = [...user, { ...addData }]

}
add({ name: "Toshmat" })
console.log(user);

const del = (delData) => {
    let delUser = user.filter(vl => vl.id !== delData)
    user = delUser
}
del(5)
console.log(user);