
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

//         if (str[i] === str[i + 1]) {

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

const textGet = (str) => {
    
}
textGet("non")