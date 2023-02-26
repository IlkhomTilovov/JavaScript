// let obj = {
//     name: "webbrain",
//     age: 23,
//     child: {
//         name: "eshmat",
//         age: 11,
//         child: {
//             name: "toshmat",
//             age: 33,
//         },
//     },
// };

// let sum = 0;

// while (obj) {
//     sum += obj.child;
//     obj = obj.child;
// }
// console.log(sum);


let obj = {
    child: {
        childname: "testing name"
    },
};
console.log(obj);
obj = { ...obj.child };
console.log(obj);