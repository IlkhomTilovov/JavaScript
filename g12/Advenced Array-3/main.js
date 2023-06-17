let users = [
  { id: 1, yaer: 1998, engine: 1, name: "Tico" },
  { id: 2, yaer: 2005, engine: 1.2, name: "Matiz" },
  { id: 3, yaer: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, yaer: 2010, engine: 1.5, name: "Cobalt" },
  { id: 5, yaer: 2012, engine: 2, name: "Malibu" },
  { id: 6, yaer: 2000, engine: 1.2, name: "Damas" },
  { id: 7, yaer: 2018, engine: 2.4, name: "Tracker" },
];

// Read    ==============================================================

// const sortByYear = () => {
//   let res = users.sort((a, b) => b.year - a.year);
//   users = res;
// };
// sortByYear();

// ======================================================================

// const sortById = (user) => {
//   let res = [];
//   user.filter((value) => {
//     if (value.id % 2 === 1) {
//       res.push(value);
//     }
//   });
//   res.sort((a, b) => b.id - a.id);
//   users = res;
// };
// sortById(users);
// console.log(users);

// ======================================================================

// Read    ==============================================================

// const sortByAlppha = () => {
//   let res = users.sort((a, b) => b.name.localeCompare(a.name));
//   users = res;
// };
// sortByAlppha();
// console.log(users);

// ======================================================================

// const sortAlpha = (user) => {
//   let res = [];
//   user.filter((value) => {
//     if (value.name.length < 5) {
//       res.push(value);
//     }
//   });
//   console.log(res);
// };
// sortAlpha(users);

// Read    ==============================================================

// Delete    ==============================================================

// const deleteUsers = (id) => {
//   let res = users.filter((v) => v.id !== id);
//   users = res;
// };
// deleteUsers(2);
// console.log(users);

// ======================================================================

// const deleteUser = (user) => {
//     users=[...users]
//   let res = users.filter((value) => value.engine !== user);
//   users = res;
// };
// deleteUser(2);
// console.log(users);

// Update    ==============================================================

// const addUser = (user) => {
//   users = [...users, { id: users.length + 1, ...user }];
// };
// addUser({ year: 2019, name: "Webbrain" }); =================================================
// console.log(users);

// ======================================================================

// let random = Number((Math.random() * 5).toPrecision(2));
// const addUsers = (user) => {
//   return (users = [...users, { id: users.length + 1, ...user }]);
// };
// console.log(addUsers({ year: 2019, engine: random, name: "Mercedes" }));

// const updateUsers = (user) => {
//   return users.map((value) =>
//     value.id == user.id ? { ...value, [user.type]: user.value } : value
//   );
// };
// console.log(updateUsers({ id: 2, type: "name", value: "BMW" }));

// const getName = (key) => {
//   let res = users.filter((value) =>
//     value.name.toLowerCase().includes(key.toLowerCase())
//   );
//   users = res;
// };
// getName("Gentra");
// console.log(users);

// let users = [
//   { id: 1, yaer: 1998, engine: 1, name: "Tico" },
//   { id: 2, yaer: 2005, engine: 1.2, name: "Matiz" },
//   { id: 3, yaer: 2010, engine: 1.6, name: "Gentra" },
//   { id: 4, yaer: 2010, engine: 1.5, name: "Cobalt" },
//   { id: 5, yaer: 2012, engine: 2, name: "Malibu" },
//   { id: 6, yaer: 2000, engine: 1.2, name: "Damas" },
//   { id: 7, yaer: 2018, engine: 2.4, name: "Tracker" },
// ];

// const deleteID = (user) => {
//   return users.filter((v) => v.id !== user);
// };
// console.log(deleteID(2));

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
// console.log(array.filter(isPrime));

// let list = [
//   { id: 1, name: "eshmat", title: "CTO" },
//   { id: 2, name: "toshmat", title: "CEO" },
//   { id: 5, name: "eshmat", title: "CTO" },
//   { id: 6, name: "toshmat", title: "CEO" },
// ];
// const getTitle = (arr) => {
//   let arr2 = arr.reduce((obj, value) => {
//     let res = obj;
//     Object.keys(res).indexOf(value.title.toLowerCase()) === -1
//       ? (res[value.title.toLowerCase()] = [value])
//       : (res[value.title.toLowerCase()] = res[value.title.toLowerCase()].concat(
//           [value]
//         ));
//     return res;
//   }, {});
//   console.log(arr2);
//   console.log(arr2);
//   arr.map((i) => {
//     Object.keys(i).map((j) => {
//       if (j === "title") {
//         let key = i[j].toLowerCase();

//         // if (Object.keys(result).indexOf(key) !== -1) {
//         //   console.log("salom");
//         //   result[key] = [];
//         // }
//       }
//     });
//   });
//   console.log(result);
// };
// getTitle(list);

// const upDateUsr = (id) => {
//   return users.filter((value) => {
//     if (value.id !== id) {
//       return value;
//     }
//   });
// };
// console.log(upDateUsr(2));

// const createUser = () => {
//   let user = [
//     ...users,
//     { id: users.length + 1, year: 2019, engine: 2.6, name: "BMW" },
//   ];
//   console.log(user);
// };
// createUser();

// const usersDelete = (id) => {
//   let user = users.filter((v) => {
//     if (v.id !== id) {
//       console.log(v);
//     }
//   });
//   console.log(user);
// };
// usersDelete(2);

// ==============================================================================
// const updateUsers = (user) => {
//   return users.map((value) =>
//     value.id == user.id ? { ...value, [user.type]: user.value } : value
//   );
// };
// console.log(updateUsers({ id: 2, type: "name", value: "BMW" }));

const updateUsr = (user) => {
  users.map((v) => {
    if (v.id == user.id) {
      [...users, { ...v, [user.type]: user.v }];
    }
    console.log(v);
  });
};
updateUsr({ id: 4, type: "name", value: "BMW" });
