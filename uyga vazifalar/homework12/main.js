
// const upkey = (str => {
//     let res = ""
//     let count = 0
//     for (l of str) {
//         if (l === " ") {
//             count = 1
//         } else {
//             res = res + (count != 0 ? l.toUpperCase() : l)
//             count = 0
//         }
//     }
//     console.log(res);
// })
// upkey(" webbrain academy")

// const getCount = (str) => {
//     let res = {}
//     for (l of str) {
//         if (l in res) {
//             res[l] = res[l] + 1
//         } else {
//             l !== " " && (res[l] = 1)
//         }
//         console.log(res);
//     }
// }
// getCount("Webbrain Academy")

// const getCount = (str) => {
//     let res = {}
//     for (l of str) {
//         if (l in res) {
//             res[l] = res[l] + 1;
//         } else {
//             l !== " " && (res[l] = 1)
//         }
//     }
//     console.log(res);
// }
// getCount("webbrain academy")



// const getCount = (str) => {
//     let res = {}
//     for (l of str) {
//         if (l in res) {
//             res[l] = res[l.toUpperCase()] + 1;
//         } else {
//             l !== " " && (res[l.toLowerCase()] + 1)
//         }
//     }
//     console.log(res);
// }
// getCount("webbrain academy")


// 1 - misol:

// let getUpper = (str) => {
//     let upper = "";
//     let lower = "";
//     for (i of str) {
//         (i === i.toUpperCase()) ? upper += 1 : lower += i;

//     }
//     console.log(`${upper.length}ta kota, ${lower.length}ta kichik`);
// }
// getUpper("Webbrain Academy");


// const getCower = (str) => {
//     let kotta = ""
//     let kichik = ""
//     for (i of str) {
//         (i === i.toUpperCase()) ? i === " " ? '' : kotta += 1 : kichik += i;
//     }
//     console.log(`${kotta.length}ta kota, ${kichik.length}ta kichik`);

// }
// getCower("Webbrain Academy")

// const getWeb = (str) => {
//     let result = ""
//     for (let i of str) {
//         if (i === "@") {
//             result += "a"
//         } else {
//             result += i
//         }
//     }
//     return result
// }
// console.log(getWeb("Webbr@in Ac@demy"))

// function duplicate(str) {

//     let result = ""
//     let i = 0
//     for (let i = 0; i < str.length; i++) {

//         if (str[i] !== str[i + 1]) {

//             result += str[i]
//         }
//     }
//     console.log(result)

// }
// duplicate("webbbraiiin accaddemmy")




// const strNum = (str) => {
//     let res = ""
//      students.filter((value) => value.id !== id)

//     for (i of str) {
//         if (i !== isNaN) {
//             if (str[i] !== str[i + 1].Number)
//             res += str[i];
//         }
//     }
//     console.log(res);
// }
// strNum("We66ra1n Acad4my")

// const strNum = (str) => {
//     let res = "";
//     for (i of str) {
//         if (i !== " " === !isNaN(i)) {
//             res += i;
//         }
//     }
//     console.log(res);
// }
// strNum("We66ra1n Acad4my")

// 5==========================================

// const textGet = (str) => {
//     let res = ""
//     for (i of str) {
//         if (i += i)
//             res += i
//     }
//     console.log(res);
// }
// textGet("Webbrain")

// 6=========================================

// const textGet = (str) => {
//     let res = str.split("")
//     let strRev = res.reverse().join("")
//     for (i of str) {
//         console.log(str);
//         if (strRev === str) {
//             console.log(`${str} bu palindrom xisoblanadi`);
//         } else {
//             console.log(`${str} Bu palindrom emas`);
//         }
//     }
// }
// textGet("ucu")


// 7==============================================

// const teng = (str) => {
//     let str1 = "web"
//     let str2 = "ewb"
//     let res1 = str1.split("")
//     let res2 = str2.split("")
//     let res = res1 === res2

//     for (i of res1)
//         if (res1 === res2) {

//         }
//     console.log(res);
// }
// teng()

// let str1 = "web"
// let str2 = "ewb"
// str1 = str1.toLowerCase().split("").sort().join()
// str2 = str2.toLowerCase().split("").sort().join()

// console.log(str1 === str2);


// 8==================================================

// const text = (str) => {
//     let res = {}
//     for (i of str) {
//         if (i in res) {
//             res[i] = res[i] + 1;
//         } else {
//             i !== " " && (res[i] = 1);
//         }
//     }
//     console.log(res);
// }

// text("webbrain academy")

// 9===================================================

// const text = (str) => {
//     let res = {}
//     for (i of str) {
//         if (i in res) {
//             res[i] = res[i] + 1;
//         } else {
//             i !== " " && (res[i] = 1);
//         }
//     }
//     console.log(res);
// }

// text("webbraiiin")




// const text = (str) => {
//     let res = ""
//     let count = 1
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++
//         } else {
//             res += str[i]
//             if (count > 1) {
//                 res += count
//                 count = 1
//             }
//         }
//     }
//     console.log(res)
// }
// text("webbraaiiin")

// 10=======================================


// let obj = { title: "webbrain", age: 2 }
// console.log(Object.keys(obj));


// 11=========================================

// let obj = {
//     title: "Webbrain",
//     age: 2,
//     child: {
//         age: 4,
//         name: "Webbrain",
//         child: {
//             age: 3,
//         },
//     },
// }
// console.log(obj.age + obj.child.age + obj.child.child.age);

// 

// let obj = {
//     title: "Webbbrain",
//     age: 2,
//     child: {
//         title: "Webbrain",
//         age: 4,
//         child: {
//             title: "Webbrain",
//             age: 3
//         }
//     }
// }
// let sum = 0;
// while (obj) {
//     sum += obj.age
//     obj = obj.child
// }
// console.log(sum);

// let obj = {
//     id: 1,
//     name: "Webbrain",
//     offline: true,
//     online: true,
//     indicidual: false
// };



// for (i in obj) {
//     if (typeof obj[i] === "boolean") {
//         console.log(`${i} | ${obj[i]}`);
//     }
// }

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// let str1 = arr1.toString();
// let str2 = arr1.toString();

// function num(str1, str2) {
//     if (str1.localeCompare() === str2.localeCompare()) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(num(str1, str2));









// let arr = [1, 64, 8, 27, 64, 125];

// for (let i = 0; i < arr.length; i++) {
//   let str = arr[i].toString();
//   if (str.length === 2) {
//     console.log(str);
//   }
// }



// let a = [7, 2, 8, 2, 43, 9, 20, 5, 2, 3, 4]
// while (a.length > 1) {
//     a = a.sort((a, b) => b - a);
//     console.log(a);
//     if ((a[0] - a[1]) !== 0) {
//         a.push(a[0] - a[1])
//     }
//     a.splice(0, 2);
// }
// console.log(a);
