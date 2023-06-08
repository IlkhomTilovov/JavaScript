// function sum(x){
//     return function sum(y){
//         return function (z){
//             return x+y+z
//         }
//     }
// }
// console.log(sum(1)(2)(3))
//                              =========================
// function sum(a) {
//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   f.toPrimitive = function () {
//     return currentSum;
//   };

//   return f;
// }
// console.log(sum(1)(2)(3)(4));
//                              =========================
// const sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b); // it takes an argument and return a function which again can take an argument.
//     }
//     return a; // it will keep on adding 1+2+3+4..
//   };
// };
// // function sum(firstArgument) {
// //   const nextSum = (secondArgument) =>
// //     sum.call(null, firstArgument + secondArgument);
// //   nextSum.valueOf = () => firstArgument;
// //   return nextSum;
// // }
// console.log(sum(1)(2)(5)(7)(15)());

// const sum = (a) => {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     } else if (b == undefined) {
//       b * 1;
//     }
//     return a;
//   };
// };
// console.log(sum(1)(2)(3)(4));


for(let x = 0; x< 10; x++){
    for(let y = 0; y <x; y++){
        document.write("*");
    }
    document.write("<br>");
}
// let person2 = Object.assign({},person);
// let person2 = JSON.parse(JSON.stringify(person));

// person2.adress.name = "HASANBOY";

// console.log(person2.adress.name);
// console.log(person.adress.name);

