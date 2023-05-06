// 1 - misol

// let users = [
//     { id: 1, yaer: 1998, engine: 1, name: "Tico" },
//     { id: 2, yaer: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, yaer: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, yaer: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, yaer: 2012, engine: 2, name: "Malibu" },
//     { id: 6, yaer: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, yaer: 2018, engine: 2.4, name: "Tracker" },
//   ];

// const getCar = (str) => {
//   let res = users.filter((value) => {
//     return value.yaer < 2000;
//   });
//   console.log(res);
// };
// getCar(users);

// 2 - misol

// let users = [
//     { id: 1, yaer: 1998, engine: 1, name: "Tico" },
//     { id: 2, yaer: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, yaer: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, yaer: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, yaer: 2012, engine: 2, name: "Malibu" },
//     { id: 6, yaer: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, yaer: 2018, engine: 2.4, name: "Tracker" },
//   ];

// const getCar = (str) => {
//     let res = users.filter((value) => {
//       return value.yaer >= 2010;
//     });
//     console.log(res);
//   };
//   getCar(users);

// 3 - misol

// let users = [
//     { id: 1, yaer: 1998, engine: 1, name: "Tico" },
//     { id: 2, yaer: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, yaer: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, yaer: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, yaer: 2012, engine: 2, name: "Malibu" },
//     { id: 6, yaer: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, yaer: 2018, engine: 2.4, name: "Tracker" },
//   ];

// const getCar = (str) => {
//   let res = users.sort((a, b) => {
//     return a.engine - b.engine;
//   });
//   console.log(res);
// };
// getCar(users);

// 4 - misol

// let users = [
//     { id: 1, yaer: 1998, engine: 1, name: "Tico" },
//     { id: 2, yaer: 2005, engine: 1.2, name: "Matiz" },
//     { id: 3, yaer: 2010, engine: 1.6, name: "Gentra" },
//     { id: 4, yaer: 2010, engine: 1.5, name: "Cobalt" },
//     { id: 5, yaer: 2012, engine: 2, name: "Malibu" },
//     { id: 6, yaer: 2000, engine: 1.2, name: "Damas" },
//     { id: 7, yaer: 2018, engine: 2.4, name: "Tracker" },
//   ];

// const getCar = (str) => {
//   let res = users.sort((a, b) => {
//     return a.year - b.year;
//   });
//   console.log(res);
// };
// getCar(users);

// 5 - misol

// let users = [
//   { id: 1, yaer: 1998, engine: 1, name: "Tico" },
//   { id: 2, yaer: 2005, engine: 1.2, name: "Matiz" },
//   { id: 3, yaer: 2010, engine: 1.6, name: "Gentra" },
//   { id: 4, yaer: 2010, engine: 1.5, name: "Cobalt" },
//   { id: 5, yaer: 2012, engine: 2, name: "Malibu" },
//   { id: 6, yaer: 2000, engine: 1.2, name: "Damas" },
//   { id: 7, yaer: 2018, engine: 2.4, name: "Tracker" },
// ];

// const getCar = (str) => {
//   let res = str.sort((a, b) => {
//     return a.name.localeCompare(b.name);
//   });

//   console.log(res);
// };
// getCar(users);

// let user = ["ziyod", "toxir", "xoji", "sardor"];
// console.log(user.sort((a, b) => b.localeCompare(a)));

// 6 - misol

let users = [
  { id: 1, year: 1998, engine: 1, name: "Tico" },
  { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
  { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
  { id: 5, year: 2012, engine: 2, name: "Malibu" },
  { id: 6, year: 2000, engine: 1.2, name: "Damas" },
  { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
];

const getCar = (str) => {
  let res = str.map((i) => {
    if (i.year <= 2000) {
      i = { ...i, status: "eski" };
    } else if (i.year >= 2001 && i.year <= 2010) {
      i = { ...i, status: "o'rta" };
    } else {
      i = { ...i, status: "yangi" };
    }
    return i;
  });
  console.log(res);
};
getCar(users);
