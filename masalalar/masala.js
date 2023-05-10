// 1-misol ====================================

// const kopayturvchi = (str) => {
//   let res = [];
//   for (let i of str) {
//     res.push(i * 2);
//   }
//   console.log(res);
// };

// kopayturvchi([1, 2, 3]);

// 2-misol ====================================

// for shunaqa qilish kere tushuncham boyicha agar 
// arrayda array o'girib keyin reverse qilib keyin join qilib qoysak xam bo'ladi

// const getReverse = (str) => {
//   let res = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i];
//   }
//   console.log(res);
// };
// getReverse("world");
// getReverse("word");
// getReverse("webbrain");

// 3 - misol ====================================

// 3.shart: array ichidagi valuelar length ga qarab joylashtirish.

// For example
// Order(["Bozor", "Stakan", "Ko'z", "   Muzlatkich"])

// Your function would return the following array:
// Order(["Ko'z", "Bozor", "Stakan", "Muzlatkich"])

// const getArray = (str) => {
//   let res = [];
//   return str.sort((a, b) => {
//     return a.length - b.length;
//   });
// };
// console.log(getArray(["Bozor", "Stakan", "Ko'z", "   Muzlatkich"]));

// 4 - misol ====================================
// const Get = (str) => {
//   let res = "";
//   for (let i of str) {
//     if (i !== " ") {
//       res += i;
//     }
//   }
//   console.log(res);
// };
// Get("8 j 8   mBliB8g  imjB8B8  jl  B");

// 5 - misol ====================================

// const solve = (a, b, c) => {
//   return Math.abs(eval(`${b}${a}${c}`));
// };
// console.log(solve("+", 4, 7));
// console.log(solve("-", 15, 18));
// console.log(solve("*", 5, 5));
// console.log(solve("/", 49, 7));

