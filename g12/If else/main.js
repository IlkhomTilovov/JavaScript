// let a = 17;
// let b = 14;

// console.log(a);
// if (a > b) {
//   console.log("a=", a);
//   console.log("b=", b);
// }

let n = 100;

c = 0;

for (let j = 2; j <= n; j++) {
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



// let num = 9999;

// let jj = (num += "");
// let nums = 0;
// for (i = 0; i < jj.length; i++) {
//   nums = nums + Number(jj[i]);
// }
// console.log(nums);


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


let num = 2156

let m = parseInt(num / 1000);
num = num % 1000;

let y = parseInt(num / 100);
num = num % 100;

let o = parseInt(num / 10);
num = num % 10;

c = num;

a = '', b = '', d = '', q = ""
switch (m) {

    case 1:
        q = "bir";
        break;
    case 2:
        q = "ikki";
        break;
    case 3:
        q = "uch";
        break;
    case 4:
        q = "tor";
        break;
    case 5:
        q = "besh";
        break;
    case 6:
        q = "olti";
        break;
    case 7:
        q = "yetti";
        break;
    case 8:
        q = "sakkiz";
        break;
    case 9:
        q = "to'qiz";
        break;
}


switch (y) {
    case 1:
        a = "bir";
        break;
    case 2:
        a = "ikki";
        break;
    case 3:
        a = "uch";
        break;
    case 4:
        a = "tor";
        break;
    case 5:
        a = "besh";
        break;
    case 6:
        a = "olti";
        break;
    case 7:
        a = "yetti";
        break;
    case 8:
        a = "sakkiz";
        break;
    case 9:
        a = "to'qiz";
        break;
}
switch (o) {
    case 1:
        a = "bir";
        break;
    case 2:
        a = "ikki";
        break;
    case 3:
        a = "uch";
        break;
    case 4:
        a = "tor";
        break;
    case 5:
        a = "besh";
        break;
    case 6:
        a = "olti";
        break;
    case 7:
        a = "yetti";
        break;
    case 8:
        a = "sakkiz";
        break;
    case 9:
        a = "to'qiz";
        break;
}
switch (c) {
    case 1:
        d = "bir";
        break;
    case 2:
        d = "ikki";
        break;
    case 3:
        d = "uch";
        break;
    case 4:
        d = "tort";
        break;
    case 5:
        d = "besh";
        break;
    case 6:
        d = "olti";
        break;
    case 7:
        d = "yetti";
        break;
    case 8:
        d = "sakkiz";
        break;
    case 9:
        d = "to'qqiz"
        break;
}
console.log(q, a, b, d);