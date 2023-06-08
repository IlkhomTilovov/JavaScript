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

// let obj = {
//   name: "Webbrain",
//   title: "IT center",
// };
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));
// console.log(Object.value(obj));
// console.log(Object.formEntries(obj));

//1. array ichida berilgan sonlarni ikkiga kuppaytiruvchi funksiya yozing.

// For example:
// [1, 2, 3]-- > [2, 4, 6]

// 6-misol ====================================

// const kopayturvchi = (str) => {
//   let res = [];
//   for (let i of str) {
//     res.push(i * 2);
//   }
//   console.log(res);
// };

// kopayturvchi([1, 2, 3]);

// 7-misol ====================================

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

// 8 - misol ====================================

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

// 9 - misol ====================================
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

// 10 - misol ====================================

// const solve = (a, b, c) => {
//   return Math.abs(eval(`${b}${a}${c}`));
// };
// console.log(solve("+", 4, 7));
// console.log(solve("-", 15, 18));
// console.log(solve("*", 5, 5));
// console.log(solve("/", 49, 7));

// 11 - misol ====================================

// const getText = (str) => {
//   let res = "";
//   for (let i of str) {
//     if (i == "@") {
//       i = "a";
//       res += i;
//     } else {
//       res += i;
//     }
//   }
//   console.log(res);
// };
// getText("WebBr@in Ac@demy");

// 12 - misol ====================================

// const getText = (str) => {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[i + 1]) {
//       res += str[i];
//     }
//   }
//   console.log(res);
// };
// getText("webbbraiiin accaddemmy");

// 13 - misol ====================================

// const getNum = (num) => {
//   let result = 0;
//   let kop = 1;
//   for (let i = 0; i < num.length; i++) {
//     let res = +num[i];
//     if (res % 2 === 1) {
//       result += res;
//     } else if (res % 2 == 0) {
//       kop *= res;
//     }
//   }
//   console.log(`Qo'shilgan son : ${result} | Ko'paytirilgan son : ${kop}`);
// };
// getNum("1234512412");

// 14 - misol ====================================

// 1. binary sonlarni decimal sonlarga aylantiring.

// const binary = (arr) => {
//   let res = arr.join("");
//   return parseInt(res, 2);
// };
// console.log(binary([0, 0, 1, 1]));
// console.log(binary([0, 1, 0, 1]));

// 15 - misol ====================================

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

// 16 - misol ====================================

// 3. eng qisqa so'zlar  miqdorini hisoblang

// function findShort(s) {
//   let result = s.split(" ");
//   return result.sort((a, b) => {
//     return a.length - b.length;
//   })[0];
// }
// console.log(findShort("Let's travel abroad shall we"));

// console.log(
//   findShort(
//     "turns out random test cases are easier than writing out basic ones"
//   )
// );

// 17 - misol ====================================

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

// 18 - misol ====================================

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

// let a = ["1, 2, 3, 4, 5, 6, 7"];
// console.log(a.substr(2, 6));

// const getNum = (a, b) => {
//   let res = [];
//   for (let i of a) {
//     if (i !== b) {
//       res.push(i);
//     }
//   }
//   console.log(res);
// };
// getNum([1, 2, 3], 2);

const getNum = (a, b) => {
  let list = "";
  for (let i = -1; i < a.length; i++) {
    list += `<tr>`;
    for (let j = -1; j < b.length; j++) {
      list += `
        <th>${
          i === -1
            ? i === -1 && j === -1
              ? "#"
              : `${b[j]}`
            : j === -1
            ? `${a[i] * 1}`
            : `<p>${a[i] * b[j]}</p>`
        }</th>
      `;
      if (b.length === j) {
        list += `</tr>`;
      }
    }
  }
  document.getElementById("table").innerHTML = list;
};
getNum([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
document.querySelector("#table").addEventListener("click", ({ target }) => {
  console.log((target.style.opacity = "1"));
  // const content = element.outerHTML;);
});
