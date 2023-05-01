// 1-msiol ===============================================

// const user = {
//   name: "John",
//   surname: "Smith",
//   name: "Pate",
// };
// delete user.name;
// console.log(user);

// 2-msiol ===============================================

// let schedule = {};
// const isEmpty = (schedule) => {
//   if (Object.keys(schedule).length === 0) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// };
// isEmpty(schedule);

// 3-msiol ===============================================

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pate: 130,
// };

// let sum = 0;
// for (i in salaries) {
//   sum += salaries[i];
// }
// console.log(sum);

// 4-msiol ===============================================

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// const kara = (obj) => {
//   let res = "";
//   for (i in obj) {
//     if (typeof obj[i] === "number") {
//       obj[i] = obj[i] * 2;
//     }
//   }
//   console.log(obj);
// };
// kara(menu);

// 5-msiol ===============================================

// object keylarini toping
// let obj = {
//   id: 1,
//   name: "WebBrain",
// };
// for (i in obj) {
//   console.log(i);
// }

// 6-msiol ===============================================

// object valuelarining raqamga tenglarini toping
// let obj = {
//   id: 1,
//   key: 123,
//   name: "WebBrain",
// };

// for (i in obj) {
//   if (typeof obj[i] === "number") {
//     console.log(`${i} :`, obj[i]);
//   }
// }

// 7-msiol ===============================================

// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };

// for(i in obj){
//     if(typeof obj[i]=== "boolean"){
//         console.log(`${i} :`, obj[i]);
//     }
// }

// 8-msiol ===============================================

// object va string berilgan .agar object keylari ichida
// stringga teng bolgan key bolsa shu key va valueni chiqazing
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };

// function Search(obj, val) {
//   let res = {};
//   for (key in obj) {
//     if (obj[key] === val) {
//       res[key] = val;
//     }
//   }
//   console.log(res);
// }
// Search(obj, "s");

// 9-msiol ===============================================

// object va string berilgan.  string bor bolgan object valuelarining chiqaring
// let obj = {
//   id: 1,
//   name: "atirgul",
//   color: "qizil",
//   count: 10,
//   price: "10$",
// };
// const searchValue = (obj, str) => {
//   for (i in obj) {
//     if (typeof obj[i] === "string") {
//       console.log(obj[i]);
//     }
//   }
// };
// searchValue(obj, "qizil");

// 10-msiol ===============================================

// let obj = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   child: {
//     id: 1,
//     name: "Ali",
//     age: 48,
//     child: {
//       id: 1,
//       name: "Umar",
//       age: 20,
//     },
//   },
// };
// let sum = 0;
// while (obj) {
//   sum += obj.age;
//   obj = obj.child;
// }
// console.log(sum);

// const seconds = (s) => {
//   if ((s = 3600)) {
//     console.log(s * 2);
//   }
// };
// seconds();

// function cubes(a, b) {
//   return a ** b;
// }
// function log(res) {
//   console.log(res);
// }
// log(cubes(3, 2));
// log(cubes(5, 3));
// log(cubes(6, 4));

// =====================================================
// let obj = {
//   name: "Ziyod",
//   Surname: "Tilovov",
//   age: 26,
//   foundend: 2022,
// };
// const funCount = (str) => {
//   let unli = ["a", "i", "u", "o", "e"];
//   let count = 0;
//   for (let i of str.toString().toLowerCase()) {
//     if (unli.indexOf(i) !== -1) {
//       count++;
//     }
//   }
//   return count;
// };
// const funResalt = () => {
//   let count = 0;
//   Object?.keys(obj)?.map((i) => {
//     count += funCount(i);
//     count += funCount(obj[i]);
//   });
//   return count;
// };
// console.log(`${funResalt()}ta unli harf bor`);
// ======================================================

// const funResultObj = (obj, num) => {
//   for (let i in obj) {
//     if (obj[i] > num) {
//       obj[i] = obj[i] - num;
//     } else {
//       obj[i] = num - obj[i];
//     }
//   }
//   return obj;
// };
// const funMinSumma = (obj) => {
//   let num = obj[Object?.keys(obj)[0]];
//   for (let i in obj) {
//     if (num > obj[i]) {
//       num = obj[i];
//     }
//   }
//   return num;
// };
// const funResult = (obj, num) => {
//   return funMinSumma(funResultObj(obj, num));
// };
// console.log(funResult({ x: 23, y: 2, z: 21 }, 12));

// let text = "LOrem ipsum";
// let array = [];
// let count = 0;
// const funResultText = () => {

// };
// // funResultText();
// const funResult = () => {
//   let arr = [];
//   let count = 0;
//   // while (arr.length < 10) {
//   //   count++;
//   //   if (arr.indexOf(num) === -1) {
//   //     arr.push(num);
//   //   }
//   // }qq1
//   for (let i = 0; i < 100; i++) {
//     let num = Math.trunc(Math.random() * (100 - 1 + 1) + 1);
//     if (arr.indexOf(num) === -1) {
//       arr.push(num);
//     }
//   }
//   console.log(arr.length);
// };
// funResult();
// let notKey = ["country", "age"];

// let user = {
//   islom: "",
//   age: "",
//   gmail: "islom@gmail",
//   country: "",
// };
// let error = {};
// // error["islom"] = "blue";
// // console.log(error);
// // const funKeyValue = () => {
// //   for (let i in user) {
// //     if (user[i].length > 0) {
// //       error[i] = "blue";
// //     } else {
// //       error[i] = "red";
// //     }
// //   }
// //   console.log(error);
// // };
// // funKeyValue();

// const funKeyValue = () => {
//   for (let i of notKey) {
//     delete user[i];
//   }

//   for (let i in user) {
//     if (user[i].length > 0) {
//       error[i] = "blue";
//     } else {
//       error[i] = "red";
//     }
//   }
//   console.log(error);
// };
// funKeyValue();
// let arr = [2, 5, 5, 5, 2, 5, 5, 6, 5];
// let arr2 = [];
// for (let i of arr) {
//   if (arr2.length === 0) {
//     arr2.push(i);
//   }
//   if (arr2.indexOf(i) === -1) {
//     arr2.push(i);
//   }
// }
// console.log(arr2);

let arr = [2, 5, 5, 5, 2, 5, 5, 6, 5];
for (let i of arr) {
  if (arr.indexOf(i) == 5) {
    arr.splice(i, 0);
  }
}
console.log(arr); 
