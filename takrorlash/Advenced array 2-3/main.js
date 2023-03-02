
// Filter ===================================

// let num = [1, 2, 34, 3, 22, 45, 0];
// let str = ["orange", "apple", "banana", "kiwi"];
// let res = num.filter((value, index) => {
//     return value < 10;
// })

// let res2 = str.filter(function (value, index) {
//     return value.length <= 5;
// })
// console.log(res);
// console.log(res2);

// let students = [
//     { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//     { id: 2, year: 2000, name: "Asilbek Tolipov" },
//     { id: 3, year: 2002, name: "Najmiddin Nazorov" },
//     { id: 4, year: 2002, name: "Abdullox Mominov" },
//     { id: 5, year: 1995, name: "Sardor Turboyev" },
//     { id: 6, year: 2002, name: "Mohichehra Hudoyberdiyeva" },
//     { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//     { id: 8, year: 2002, name: "Shohruh Shukurov" }
// ];

// let res1 = students.filter((value) =>
//     value.year === 2002
// )

// let res = students.filter((value) => value.id >= 5)
// console.log(res);


// sort=======================================

// let num = [20, 11, 53, 42, 6, 84, 95, 0, 32, 71]
// let res = num.sort()
// let res1 = num.sort((a, b) => a - b)
// console.log(res);
// console.log(res1);

// let str = ["Orange", "apple", "banana", "Kiwi"];
// let res = str.sort((a, b) => a.localeCompare(b))
// console.log(res);

// let students = [
//     { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
//     { id: 2, year: 2000, name: "Asilbek Tolipov" },
//     { id: 3, year: 2002, name: "Najmiddin Nazorov" },
//     { id: 4, year: 2002, name: "Abdullox Mominov" },
//     { id: 5, year: 1995, name: "Sardor Turboyev" },
//     { id: 6, year: 2002, name: "Mohichehra Hudoyberdiyeva" },
//     { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
//     { id: 8, year: 2002, name: "Shohruh Shukurov" }
// ];
// let res = students.sort((a, b) => a.name.localeCompare(b.name))

// console.log(res);


// find =================================================

// let num = [20, 11, 53, 42, 6, 84, 95, 0, 32, 71]
// let res = num.find((value) => {
//     // console.log(value);
//     return value === 1
// })
// console.log(res);


let students = [
    { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
    { id: 2, year: 2000, name: "Asilbek Tolipov" },
    { id: 3, year: 2002, name: "Najmiddin Nazorov" },
    { id: 4, year: 2002, name: "Abdullox Mominov" },
    { id: 5, year: 1995, name: "Sardor Turboyev" },
    { id: 6, year: 2002, name: "Mohichehra Hudoyberdiyeva" },
    { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
    { id: 8, year: 2002, name: "Shohruh Shukurov" }
];
let res = students.find((value) => {
    return value.id === 5
}).name

console.log(res);


// ForEach va Map ====================================
// let num = [20, 11, 53, 42, 6, 84, 95, 0, 32, 71]
// let res = num.forEach((value, index) => {
//     console.log(value + 2);
// })
// console.log("======");
// let resmap = num.map((value, index) => {
//     console.log(value);
//     return "hey";
// })
// // console.log(res);
// // console.log("====");
// console.log(resmap);

// Every ==============================================

// let num = [20, 11, 53, 42, 6, 84, 95, 0, 32, 71];
// console.log(num.every((value) => typeof value === "number"));
// console.log(num.every((value) => !isNaN(value * 1)));
// console.log(num.every((value) => !isNaN(value)));
// console.log(num.every((value) => isNaN(value)));

// Some ===============================================

// let num = [20, 11, 53, 42, 6, 84, 95, 0, 32, 71];
// console.log(num.some((value) => typeof value === "string"));

// Fill ==============================================

// let num = [20, 11, 53, 42, 6, 84, 95, 0, 32, 71];
// console.log(num.fill(8118, 4, 7));

// CopyWithin

// let num = [20, 11, 53, 42, 6, 84, 95, 0, 32, 71];
// console.log(num.copyWithin(1, 2, 6));

// Reducer ===========================================

// let num = [1, 2, 3, 4, 5];

// let res = num.reduce((sum, current, i) => {
//     console.log(i, sum, i - sum);
//     return i - sum;
// }, 0);
// console.log(res);

//               Current
// 0 - 0 = 0     1-0=1     
// 1 - 0 = 1     2-1=1
// 2 - 1 = 1     3-2=1
// 3 - 1 = 2     4-3=1
// 4 - 2 = 2     5-4=1


// flat =============================================

// let num = [1, [2, [3, [4]]], 5, 6, 7, 8];
// console.log(num);
// console.log(num.flat(Infinity).reduce((s, c) => s + c, 0));




