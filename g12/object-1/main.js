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
let obj = {
  id: 1,
  name: "WebBrain",
  offline: true,
  online: true,
  individual: false,
};
let res = "";
// function Search(obj, str) {
//   for (i in obj) {
//     `${(str = obj[i])}`;
//     if (str == obj[i]) {
//       console.log(str);
//     } else {
//       console.log("error");
//     }
//   }
// }
// Search(obj, "1");

function Search(obj, val) {
  let res = {};
  for (key in obj) {
    if (obj[key] === val) {
      res[key] = val;
    }
  }
  console.log(res);
}
Search(obj, 1);
