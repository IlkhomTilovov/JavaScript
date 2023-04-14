// let a = 5;
// let b = 3;
// console.log(a > b);
// let obhavo = "issiq";
// switch (obhavo) {
//   case "yomgir":
//     console.log("Bugun ob-havo yomg'ir");
//     break;
//   case "bulut":
//     console.log("bugun ob-havo bulutli");
//     break;
//   case "issiq":
//     console.log("Bugun ob-havo issiq");
//     break;
//   default:
//     console.log("No data");
// }

// for (let a = 1; a <= 7; a += 3) {
//   console.log(a);
// }

// let a = 2;
// for (a; a <= 10; a++) {
//   console.log(` ${a} karraliklar n/`);
//   for (let i = 2; i < 10; i++) {
//     console.log(`${a} * ${i} = ${a * i}`);
//   }
// }
// let k = 10;
// for (let n = 1; n <= k; n++) {
//   console.log(`${k}`);
// }

// let a = 8;
// let b = 20;

// for (a; a <= b; a++) {
//   console.log(a);
// }

// let k = 1;

// let s = 3;

// for (k; k <= 10; k++) {
//   console.log(`${k} - kg  *  ${s} - narx = ${k * s}sum`);
// }

// let k = 1;

// let s = 5;

// for (k; k <= 10; k++) {
//   console.log(`${k / 10} - kg  *  ${s} - narx = ${Math.ceil((k / 10) * s)}sum`);
// }

// let n = 1111111111117;
// let num = 0;
// let juft = 0;
// let toq = 0;
// for (let i = 0; i < 10; i++) {
//   num = n % 10;
//   n = parseInt(n / 10);
//   if (num % 2 === 0) {
//     juft += num;
//   } else if (num % 2 === 1) {
//     toq += num;
//   }
// }
// console.log(`${juft} - Juft sonlar | ${toq} - Toq sonlar`);

// let n = 100;
// let c = 0;

// for (let i = 2; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       c++;
//     }
//   }
//   if (c == 2) {
//     console.log(`tub son ${i}`);
//   }
//   c = 0;
// }

// if(c==2){
//     console.log(c);
// }

// let n = 123;
// for (let i = 0; i < n; i++) {
//   tub = n % 10;
//   n = parseInt(n / 10);
//   console.log(tub);
// }
// let n = 123;
// for (let i = 0; i < n; i++) {
//   num = n % 10;
//   console.log(num);
//   n = parseInt(n / 10);
// }

// const num = () => {
//   for (let i = 0; i < n; i++) {
//     let tub = 0;
//     tub = n % 10;
//     n = parseInt(n / 10);
//     console.log(tub);
//   }
// };
// num();

// for (let i = 1; i < n; i++) {
//   let tub = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       tub = false;
//       break;
//     }
//   }
//   if (tub) {
//     console.log(i);
//   }
// }

// let i = 1;
// for (i; i <= 00; i++) {
//   tub = true;
//   for (let b = 2; b < i; b++) {
//     if (i % b === 0) {
//       tub = false;
//       break;
//     }
//   }
//   if (tub == true) {
//     console.log(i);
//   }
// }

let n = 123456;

for (let i = 0; i < 10; i++) {
  num = n % 10;
  n = parseInt(n / 10);
  let tub = true;
  for (let b = 2; b < num; b++) {
    if (num % b === 0) {
      tub = false;
      break;
    }
  }
    if (tub == true) {
      console.log(num);
    }
}
