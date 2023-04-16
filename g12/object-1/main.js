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

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const kara = (obj) => {
  let res = "";
  for (i in obj) {
    if (typeof obj[i] === "number") {
      obj[i] = obj[i] * 2;
    }
  }
  console.log(obj);
};
kara(menu);
