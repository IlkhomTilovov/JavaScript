// let arr = ([2, 4, 5, 6, 3, 3, 7, 8, 9, 4, 3, 6]);
// let res =eval(arr.join("+"))
// console.log(res);



// let arr = ([2, 4, 5, 6, 3, 3, 7, 8, 9, 4, 3, 6]);
// let res = arr.reduce((a, b, index) => {return a + b}, 0);
// console.log(res);

// let char = (arr) => {
//     let res = {}
//     for (sanoq of arr) {
//         if (sanoq in res) {
//             res[sanoq] = res[sanoq] + 1
//         } else {
//             res[sanoq] = 1;
//         }
//     }
//     console.log(res);
// }
// char(["webbrain", "academy"])

// let arr = ["webbrain", "academy"];
// let getCount = (array) => {
//     let str = arr.join("");
//     let obj = {};
//     for (val of str) {
//         (val in obj) ? obj[val] = obj[val] + 1 : obj[val] = 1;
//     }
//     console.log(obj);
// }
// getCount(arr);




const users = [
    { id: 1, year: 1998, engine: 1, name: "tico" },
    { id: 2, year: 2005, engine: 1.2, name: "matiz" },
    { id: 3, year: 2010, engine: 1.6, name: "gentra" },
    { id: 4, year: 2010, engine: 1.5, name: "cobalt" },
    { id: 5, year: 2012, engine: 2, name: "malibu" },
    { id: 6, year: 2000, engine: 1.2, name: "damas" },
    { id: 7, year: 2018, engine: 2.4, name: "tracker" }
];

let res = users.filter(value => {
    if (value.year < 2000)
        console.log(value);

});
