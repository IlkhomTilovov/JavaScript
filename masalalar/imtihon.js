// let users = [
//   { id: 1, yaer: 1998, engine: 1, name: "Tico" },
//   { id: 2, yaer: 2005, engine: 1.2, name: "Matiz" },
//   { id: 3, yaer: 2010, engine: 1.6, name: "Gentra" },
//   { id: 4, yaer: 2010, engine: 1.5, name: "Cobalt" },
//   { id: 5, yaer: 2012, engine: 2, name: "Malibu" },
//   { id: 6, yaer: 2000, engine: 1.2, name: "Damas" },
//   { id: 7, yaer: 2018, engine: 2.4, name: "Tracker" },
// ];

// const updateUsers = (user) => {
//   return users.map((value) =>
//     value.id == user.id ? { ...value, [user.type]: user.value } : value
//   );
// };
// console.log(updateUsers({ id: 2, type: "name", value: "BMW" }));

// let list = [
//   { id: 1, name: "Eshmat", title: "CEO" },
//   { id: 2, name: "Toshmat", title: "CTO" },
//   { id: 3, name: "Gulmat", title: "HR" },
//   { id: 4, name: "Holmat", title: "CEE" },
// ];

// const updateUser = (user) => {
//   return list.map((value) =>
//     value.id == user.id ? { ...value, [user.type]: user.title } : value
//   );
// };
// console.log(updateUser({ id: 4, type: "title", title: "HR" }));

// let obj = [
//   ["name", "webbrain"],
//   ["title", "IT Center"],
// ];
// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));
// // console.log(Object.entries(obj));
// console.log(Object.fromEntries(obj));

// let arr = [1, 2, 3, 4, 5];
// let res = arr.map((value) => {
//   return value ** 2;
// });
// console.log(res);

// function moment() {
//   moment.local = () => console.log("webbrain");
//   return {
//     format() {
//       console.log("working");
//     },
//   };
// }
// moment().format();
// moment.local();
// let res = 0;
// const getNum = (num) => {
//   if (num === 1) return (res += 1);
//   else {
//     res += num;
//     return getNum(num - 1);
//   }
// };
// console.log(getNum(4));

// console.log("webbrain" || true);
// console.log("webbrain" && true);
// console.log("webbrain" || true);
// console.log("webbrain" ?? true);
// console.log(null || "webbrain");

// let user = {
//   name: "Webbrain",
//   surname: "Academy",
//   info: {
//     name: "bvbn",
//   },
// };
// let obj = {
//   id: 2,
//   name: "moshmal",
//   surname: "mosh kal",
//   get() {
//     console.log(this.name);
//   },
// };
// obj.get();

// const getNum = (n) => {
//   let a = 5;
//   let b = 3;
//   if (n % a === 0 && n % b === 0) {
//     console.log("5 ga ham 3 ga bo'linadi");
//   } else if (n % b === 0) {
//     console.log("3 ga bo'linadi");
//   } else if (n % a === 0) {
//     console.log("5 ga bo'linadi");
//   }
// };
// getNum(35);

// let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array.prototype.delete = function (id, name, age) {
//   let res = this.filter(
//     (value) => value !== id && value !== name && value !== age
//   );
//   console.log(res);
// };
// ar.delete(3, 9, 5);

let obj = {
  name: "webbrain",
  title: "IT Center",
};
console.log(Object.entries(obj));
