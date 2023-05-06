// let ar = ["Orange", "Apple", "Kiwi"];
// console.log(ar.map((element)=>element.toUpperCase()));

// let ar = ["Orange", "Apple", "Kiwi"];
// let num = [1, 2, 3, 4];
// // let b = new Array(1,2,3,4);

// console.log(ar[0]);

// let num = [1, 2, 3, 4, 23, 35, 24, 23, 42, 5, 5, 43, 2, 3, 5, 42];

// console.log(eval(num.join("+")));

// const taqqoslash = (ar1, ar2) => {
//   return ar1.join() === ar2.join();
// };
// console.log(taqqoslash([1, 2], [1, 2]));

// const camelize = (str) => {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 0) {
//       res += str[i].toUpperCase();
//     } else {
//       if (str[i] === "-") {
//         res += str[i + 1].toUpperCase();
//         i++;
//       } else {
//         res += str[i];
//       }
//     }
//   }
//   console.log(res);
// };
// camelize("backround-color");
// camelize("list-style-image");
// camelize("-webkit-transition");

// const getCount = (str) => {
//   console.log(str);
// };
// const getArray = (str) => {
//   let res = {};
//   let arr = [];
//   for (let f = 0; f < str.length; f++) {
//     for (let i of str[f]) {
//       if (i in res) {
//         res[i] = res[i] + 1;
//       } else {
//         i !== " " && (res[i] = 1);
//       }
//     }
//   }
//   for (let i in res) {
//     arr.push(`${i} = ${res[i]}`);
//   }
//   console.log(arr);
// };
// getArray(["webb rain", "academy"]);
// function fun(str, num) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     res += str[i].split("").join();
//   }
//   let b = res.substring(num);
//   console.log(b);
// }
// fun("Islom", 1);
// let str = "12345";
// let num = 1;
// console.log(str.substr(num, str.length));
// function fun(str, num) {
//   let res = str.substring(0, num);
//   let sub = str.substring(num);
//   for (let i = sub.length - 1; i >= 0; i--) {
//     res += sub[i];
//   }
//   console.log(res);
// }
// fun("Islom", 1);
