
// // ==================================Yuzlik sonlar=========================================

// let num = 1

// let m = parseInt(num / 1000);
// num = num % 1000;

// let y = parseInt(num / 100);
// num = num % 100;

// let o = parseInt(num / 10);
// num = num % 10;

// c = num;

// a = '', b = '', d = '', q = ""
// switch (m) {

//     case 1:
//         q = "bir ming";
//         break;
//     case 2:
//         q = "ikki ming";
//         break;
//     case 3:
//         q = "uch ming";
//         break;
//     case 4:
//         q = "tor ming";
//         break;
//     case 5:
//         q = "besh ming";
//         break;
//     case 6:
//         q = "olti ming";
//         break;
//     case 7:
//         q = "yetti ming";
//         break;
//     case 8:
//         q = "sakkiz ming";
//         break;
//     case 9:
//         q = "to'qiz ming";
//         break;
// }


// switch (y) {
//     case 1:
//         a = "bir yuz";
//         break;
//     case 2:
//         a = "ikki yuz";
//         break;
//     case 3:
//         a = "uch yuz";
//         break;
//     case 4:
//         a = "tor yuz";
//         break;
//     case 5:
//         a = "besh yuz";
//         break;
//     case 6:
//         a = "olti yuz";
//         break;
//     case 7:
//         a = "yetti yuz";
//         break;
//     case 8:
//         a = "sakkiz yuz";
//         break;
//     case 9:
//         a = "to'qiz yuz";
//         break;
// }
// switch (o) {
//     case 1:
//         b = "o'n";
//         break;
//     case 2:
//         b = "yigirma";
//         break;
//     case 3:
//         b = "o'tiz";
//         break;
//     case 4:
//         b = "qirq";
//         break;
//     case 5:
//         b = "ellik";
//         break;
//     case 6:
//         b = "oltmush";
//         break;
//     case 7:
//         b = "yetmush";
//         break;
//     case 8:
//         b = "sakson";
//         break;
//     case 9:
//         b = "to'qson";
//         break;
// }
// switch (c) {
//     case 1:
//         d = "bir";
//         break;
//     case 2:
//         d = "ikki";
//         break;
//     case 3:
//         d = "uch";
//         break;
//     case 4:
//         d = "tort";
//         break;
//     case 5:
//         d = "besh";
//         break;
//     case 6:
//         d = "olti";
//         break;
//     case 7:
//         d = "yetti";
//         break;
//     case 8:
//         d = "sakkiz";
//         break;
//     case 9:
//         d = "to'qqiz"
//         break;
// }
// console.log(q, a, b, d);


// ==================================Tub sonlar=========================================


// let n = 10;

// let c = 0;

// let i = 1;


// for (let i = 1; i <= 100; i++) {
//     for (let j = 2; j <= i; j++) {
//         if (i % j == 0) {
//             c++;
//         }
//     }
//     if (c == 2) {
//         console.log(`bu tub son :${i}`);
//     }
//     c = 0;
// }

let n = 10;

let c = 0;

let i = 1;

for (let j =2; j <= n; j++) {
    for (let i = 1; i <= j; i++) {
        if (j % i === 0) {
            c++;
        }
    }
    if (c == 2) {
        console.log(`tub son ${j}`);
    }
    c = 0;
}

// let a = 2
// console.log(++a);//4
// console.log(a);//5

// let n = 10;

// c = 0;

// for (let j = 2; j <= n; j++) {
//     for (let i = 1; i <= j; i++) {
//         if (j % i === 0) {
//             c++;
//         }
//     }
//     if (c == 2) {
//         console.log(`tub son ${j}`);
//     }
//     c = 0;
// }

// 1 masala ========================================


// let k = 1;
// let n = 10;

// for (k; k <= n; k++) {
//     console.log(k);
// }

// 2 masala ========================================

// let a = 4;
// let b = 10;

// for (a; a <= b; a++) {
//     console.log(a);
// }



// 3-masala  ========================================

// a va b butun son sonlari berilgan (a<b),a vab sonlari orasidagi barcha butun sonlarni
// (a va b dan  tashqari) kamayish tartibida chiqaruvchi programa tuzilsin


// let a = 4;
// let b = 10;

// for (--b; a < b; b--) {
//     console.log(b);
// }

// 4-masala  ========================================

// bit kg konfetning narxi 3 sum 1dan 10kg gachakondetni narxini chiqarish

// let narx = 3;
// let kg = 1;
// for (kg; kg <= 10; kg++){
//     console.log(`${narx*kg} sum : ${kg}kg`);
// }


// 5-masala  ========================================

// bit kg konfetning narxi 3 sum 0dan 10kg gachakondetni narxini chiqarish

// let narx = 3;
// let kg = 1;
// for (--kg; kg <= 10; kg++){
//     console.log(`${narx*kg} sum : ${kg}kg`);
// }

// 6 - masala ======================================

// console.log(`\n 1 karaliklar \n `);

// let a = 1;
// for (let kara = 1; a <= 10; a++) {
//     console.log(`${kara} * ${a} = ${a * kara} `);
// }
// console.log(`\n 2 karaliklar \n`);

// let b = 1;
// for (let kara = 2; b <= 10; b++) {
//     console.log(`${kara} * ${b} = ${b * kara} `);
// }
// console.log(`\n 3 karaliklar \n `);

// let c = 1;
// for (let kara = 3; c <= 10; c++) {
//     console.log(`${kara} * ${c} = ${c * kara} `);
// }
// console.log(`\n 4 karaliklar \n`);

// let q = 1;
// for (let kara = 4; q <= 10; q++) {
//     console.log(`${kara} * ${q} = ${q * kara} `);
// }
// console.log(`\n 5 karaliklar \n`);

// let w = 1;
// for (let kara = 5; w <= 10; w++) {
//     console.log(`${kara} * ${w} = ${w * kara} `);
// }
// console.log(`\n 6 karaliklar \n`);

// let e = 1;
// for (let kara = 6; e <= 10; e++) {
//     console.log(`${kara} * ${e} = ${e * kara} `);
// }
// console.log(`\n 7 karaliklar \n`);

// let r = 1;
// for (let kara = 7; r <= 10; r++) {
//     console.log(`${kara} * ${r} = ${r * kara} `);
// }
// console.log(`\n 8 karaliklar \n`);

// let t = 1;
// for (let kara = 8; t <= 10; t++) {
//     console.log(`${kara} * ${t} = ${t * kara} `);
// }
// console.log(`\n 9 karaliklar \n`);

// let y = 1;
// for (let kara = 9; y <= 10; y++) {
//     console.log(`${kara} * ${y} = ${y * kara} `);
// }
// console.log(`\n 10 karaliklar \n`);

// let i = 1;
// for (let kara = 10; i <= 10; i++) {
//     console.log(`${kara} * ${i} = ${i * kara} `);
// }


