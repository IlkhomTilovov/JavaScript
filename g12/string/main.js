//  1 - Misol =============================================
// const getFunc = (str1, str2) => {
//   if (str1.localeCompare(str2) === 0) {
//     console.log("Bu malumot bir biri bilan to'g'ri keladi");
//   } else if (str1.localeCompare(str2) === 1) {
//     console.log("Bu malumot bir biri bilan qisman keladi");
//   } else {
//     console.log("Bu malumot bir biri bilan to'g'ri kelmaydi");
//   }
// };

// getFunc("Webbrain", "Webbrai");

//  2 - Misol =============================================

// const getCount = (str) => {
//   let res = {};
//   for (let i of str) {
//     if (i in res) {
//       res[i] = res[i] + 1;
//     } else {
//       i !== " " && (res[i] = 1);
//     }
//   }
//   console.log(res);
// };
// getCount("webbrain");

//  3 - Misol =============================================

// const truncate = (str, n) => {
//   return str.substring(0, n);
// };
// console.log(truncate("Webbrain academy", 5));

//  4 - Misol =============================================

// const getCurrency = (str) => {
//   let res = "";
//   if (str) {
//     for (let i of str) {
//       if (!isNaN(i)) {
//         res += i;
//       }
//     }
//     console.log(res);
//   } else {
//     console.log("error");
//   }
// };
// getCurrency("$1200");

//  5 - Misol =============================================

// const capitilize = (str) => {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i === 0) {
//       res += str[i].toUpperCase();
//     } else {
//       if (str[i] === " ") {
//         res += str[i];
//         res += str[i + 1].toUpperCase();
//         i++;
//       } else {
//         res += str[i];
//       }
//     }
//   }
//   console.log(res);
// };
// capitilize("webbrain academy it center");

//   6- Misol =============================================

// const getCount = (str) => {
//   let res = { numbers: 0, letter: 0, char: 0 };
//   for (let i of str) {
//     if (!isNaN(i)) {
//       res = { ...res, numbers: res.numbers + 1 };
//     } else if (i.charCodeAt() > 64) {
//       if (
//         i.charCodeAt() < 91 ||
//         (i.charCodeAt() > 97 && i.charCodeAt() < 123)
//       ) {
//         res = { ...res, letter: res.letter + 1 };
//       }
//     } else {
//       res = { ...res, char: res.char + 1 };
//     }
//   }
//   console.log(res);
// };
// getCount("webbr@<>!n_2022");
// console.log("w" !== "w".toUpperCase());

// const getCount = (str) => {
//     let res = { numbers: 0, letter: 0, char: 0 };

//     for (let i of str) {
//       if (!isNaN(i)) {
//         res.numbers++;
//       } else if (i !== i.toUpperCase()) {
//         res.letter++;
//       } else {
//         res.char++;
//       }
//     }
//     console.log(res);
//   };
//   getCount("webbr@<>!n_2022");
