// function makes10(a, b) {
//   if (a || b == 10) {
//     return true;
//   } else if (a + b === 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(makes10(9, 10));
// console.log(makes10(9, 9));
// console.log(makes10(8, 3));

// 2)
// function fun(a, b) {
//   if (a < b) {
//     console.log(b);
//   } else {
//     console.log(a);
//   }
// }
// fun(50, 6);
// fun(5, 100);

// 3)
// const fun = (str) => {
//   let len = str.length / 2;
//   let res = str.substring(len, len + 1);
//   if (str.length % 2 === 0) {
//     return str.substring(len - 1, len + 1);
//   } else {
//     return str.substring(len, len + 1);
//   }
// };
// console.log(fun("1234567890"));


// let ar ="Azizbek"
// let res = ar.split("").reverse().join("")
// console.log(res);

// 4 =======================================

// const fun = (str) => {
//   let res = "";
//   for (let i in str) {
//     if (i % 2 === 0) {
//       res += str[i];
//     }
//   }
//   console.log(res);
// };
// fun("Islom");

// 5 ====================================

// const fun = (str) => {
//   let res = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i];
//   }
//   console.log(res);
// };
// fun("Islmo", 0);
// let text = "Islom";
// let res = text.split("");
// let res2 = res.reverse("");
// console.log(res);
