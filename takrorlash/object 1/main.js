// let name = "surname"
// let user = {
//     name: "Joshqin",
//     surname: "Tilla sotak",
//     age: 12
// }
// user.name = "Dilmurod"
// console.log(user[name]);

// let schedule = {
//     name:"Azizbek"
// }

// let res = Object.keys(schedule);
// isEmpty = (str) => {
//     if (res[0]) {
//         console.log(false);
//     } else {
//         console.log(true);
//     }
// }
// isEmpty(schedule)

// let obj = {
//     john: 100,
//     ann: 130,
//     pate: 160
// }
// let sum = 0;
// const get = (str) => {
//     for (i in str) {
//         sum += str[i]
//     }
//     console.log(sum);
// }
// get(obj)


// let menu = {
//     with: 200,
//     height: 600,
//     title: "my menu"
// }
// // let res = 0
// const get = (str) => {
//     for (i in str) {
//         if (typeof str[i] === "number") {
//             str[i] = str[i] * 2
//         } else {
//             delete str[i]
//         }
//     }
// }
// get(menu)
// console.log(menu);



// function getBynary(num) {
//     let bynar = num.toString(2);
//     let one = "";
//     let zero = "";
//     for (vl in bynar) {
//         switch (bynar[vl]) {
//             case "1":
//                 one += "1";
//                 break;
//             case "0":
//                 zero += "0";
//         }
//     }
//     console.log(bynar);
//     console.log(`1 dan ${one.length} ta qatnashgan`);
//     console.log(`0 dan ${zero.length} ta qatnashgan`);
// }
// getBynary(Math.random());
let obj = {
    id: 1,
    name: "Webbrain",
    offline: true,
    online: true,
    indicidual: false
};



for (i in obj) {
    if (typeof obj[i] === "boolean") {
        console.log(`${i} | ${obj[i]}`);
    }
}