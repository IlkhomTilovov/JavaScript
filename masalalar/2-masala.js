// 1 - misol ====================================

// 1. binary sonlarni decimal sonlarga aylantiring.

// const binary = (arr) => {
//   let res = arr.join("");
//   return parseInt(res, 2);
// };
// console.log(binary([0, 0, 1, 1]));
// console.log(binary([0, 1, 0, 1]));

// 2 - misol ====================================

// 2. so'z ichidagi unli harflar miqdorini hisoblang

// function Unli(str) {
//   let res = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "A" ||
//       str[i] === "e" ||
//       str[i] === "E" ||
//       str[i] === "I" ||
//       str[i] === "i" ||
//       str[i] === "U" ||
//       str[i] === "u" ||
//       str[i] === "O" ||
//       str[i] === "o"
//     ) {
//       res += 1;
//     }
//   }
//   console.log(res);
// }
// Unli("satrioeAsfgrhaehasdfadjsdfasfasdf");

// 3 - misol ====================================

// 3. eng qisqa so'zlar  miqdorini hisoblang

function findShort(s) {
  let result = s.split(" ");
  return result.sort((a, b) => {
    return a.length - b.length;
  })[0];
}
console.log(findShort("Let's travel abroad shall we"));

console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);

// 4 - misol ====================================

// const duplicates = (arr) => {
//   let res = [];
//   //   let result = arr.sort((a, b) => b - a);

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count > 1 && res.indexOf(arr[i]) === -1) {
//       res.push(arr[i]);
//     }
//   }
//   console.log(res);
// };
// duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]);
// duplicates([(0, 1, 2, 3, 4, 5)]);

// 5 - misol ====================================

// const getNum = (arr) => {
//   let minNum = Math.min(...arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (minNum === arr[i]) {
//       arr.splice(i, 1);
//       break;
//     }
//   }
//   console.log(arr);
// };
// getNum([1, 2, 3, 4, 5]);
// getNum([5, 3, 2, 1, 4]);
// getNum([2, 2, 1, 2, 1]);
