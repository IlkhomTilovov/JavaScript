// function Binary(num) {
//     if (num % 2 === 0) {
//         return "no'l";
//     }

//     let binary = "";
//     while (num > 0) {
//         const full = num % 2;
//         binary = full + binary;
//         num = Math.floor(num / 2);
//     }

//     return binary;
// }
// console.log(Binary(5));

// let num = 5;
// for (num = 1; num <= 10; num++) {
//     if (num % 2 === 0) {
//         console.log(juft);
//     } else {
//         console.log(toq);
//     }
//     if (`${juft + 1}`) {
//         console.log("2ta 0");

//     } else if (toq + 1) {
//         console.log("2ta 1");
//     }
//     console.log(num.toString(2));
// }
// // console.log(num.toString(2));
// // 101  2ta bir 1ta no'l


// function getBynary(num) {
//     let bynar = num.toString(2);
//     let one = "";
//     let zero = "";
//     for (vl in bynar) {
//         switch(bynar[vl]) {
//             case "1":
//             one += "1";
//             break;
//             case "0":
//             zero += "0";
//         }
//     }
//     console.log(bynar);
//     console.log(`1 dan ${one.length} ta qatnashgan`);
//     console.log(`0 dan ${zero.length} ta qatnashgan`);
// }
// getBynary(5);



// Min va Max==========================

// function minMax(num1, num2) {
//     num1 > num2 ? console.log(num1 - num2) : console.log(num2 - num1);
// }
// minMax(60, 61, 12, 35, 123,7);

// function minMax(min, max) {
//     Math.min();
//     // Math.max(60, 94, 23, 54, 123, 34, 234, 23, 5, 23, 4, 32, 123, 61);
//     min < max ? console.log(max - min) : console.log(max - min);
// }
// minMax(60, 94, 23, 54, 123, 34, 23, 5, 23, 4, 32, 123, 61)

// function maxMin(max, min) {
//     max: Math.max(60, 94, 23, 54, 123, 34, 234, 23, 5, 23, 4, 32, 123, 61);
//     min: Math.min(60, 94, 23, 54, 123, 34, 234, 23, 5, 23, 4, 32, 123, 61);
//     min < max ? console.log(max - min) : console.log(max - min);
// }
// maxMin();


// function maxMin(max, min) {
//     min(60, 94, 23, 54, 123, 34, 234, 23, 5, 23, 4, 32, 123, 61)
//     max(60, 94, 23, 54, 123, 34, 234, 23, 5, 23, 4, 32, 123, 61)
//     min < max ? console.log(max - min) : console.log(max - min);
// }
// maxMin(min.length, max.length)



// math.round bu xar bir butun soni yaxlitlab beradi va 12.4 bolsa pasga soni yaxlitlab beradi agar 12.5 dan oshiq bolsa 13 qilib beradi
// math.floor bu ham soni yaxlitlab beradi faqat pasga qarab yaxlitlaydi
// math.ceil bu esa tepaga qarap yaxlitlab beradi 
// math.trunc esa kasrli soni olib tashlaydi yani 12.4 bolsa 12 chiqarib beradi shuning uchun 4ni ignor qilib yuboradi
// parseInt Math.trunc ga o'xshab ishlaydi



function randomInteger(min, max) {
    let plus = Math.floor(Math.random() * max);
    let minus = Math.floor(Math.random() * min);
    if (plus >= min) {
        console.log(plus);
    } else if (minus <= min) {
        console.log(min + Math.floor(Math.random() * 5));
    } else {
        console.log(min);
    }
}
randomInteger(10, 11);
























// // let day = Math.round(Math.random() * 31);
// // let month = Math.round(Math.random() * 12);
// // let year = Math.round(Math.random() * 10000);
// let year = 1997;

// // console.log(year);
// // console.log(day);
// // console.log(month);
// let day = 6;
// let month = 1;
// let n = year - 1;
// let r = n % 5;
// let rang;
// switch (r) {
//     case 0:
//         rang = "yashil";
//         break;
//     case 1:
//         rang = "qizil";
//         break;
//     case 2:
//         rang = "sariq";
//         break;
//     case 3:
//         rang = "oq";
//         break;
//     case 4:
//         rang = "qora";
//         break;
//     default:
//         rang = "bunday rang yoq";
//         break;
// }
// let f = n % 12;
// let muchal;
// console.log(rang);
// switch (f) {
//     case 0:
//         muchal = "sichqon";
//         break;
//     case 1:
//         muchal = "sigir";
//         break;
//     case 2:
//         muchal = "yolbars";
//         break;
//     case 3:
//         muchal = "quyon ";
//         break;
//     case 4:
//         muchal = "ajdar";
//         break;
//     case 5:
//         muchal = "ilon";
//         break;
//     case 6:
//         muchal = "ot";
//         break;
//     case 7:
//         muchal = "qo`y";
//         break;
//     case 8:
//         muchal = "maymun ";
//         break;
//     case 9:
//         muchal = "tovuq";
//         break;
//     case 10:
//         muchal = "it";
//         break;
//     case 11:
//         muchal = "tong`iz";
//         break;
//     default:
//         muchal = "bunday muchal yoq";
//         break;
// }
// console.log(muchal);

// if ((month == 1 && day >= 20 && day <= 31) || (month == 2 && day <= 18)) {
//     console.log("qovga");
// } else if ((month == 2 && day > 18 && day <= 29) || (month == 3 && day <= 20)) {
//     console.log("baliq");
// } else if ((month == 3 && day > 20 && day <= 31) || (month == 4 && day <= 19)) {
//     console.log("Qo`y");
// } else if ((month == 4 && day > 19 && day <= 30) || (month == 5 && day <= 20)) {
//     console.log("buzoq");
// } else if ((month == 5 && day > 20 && day <= 31) || (month == 6 && day <= 21)) {
//     console.log("egizaklar");
// } else if ((month == 6 && day > 21 && day <= 31) || (month == 7 && day <= 22)) {
//     console.log("qisqichbaqa");
// } else if ((month == 7 && day > 22 && day <= 30) || (month == 8 && day <= 22)) {
//     console.log("arslon");
// } else if ((month == 8 && day > 22 && day <= 31) || (month == 9 && day <= 22)) {
//     console.log("parizodaya");
// } else if (
//     (month == 9 && day > 22 && day <= 30) ||
//     (month == 10 && day <= 22)
// ) {
//     console.log("tarozi");
// } else if (
//     (month == 10 && day > 22 && day <= 31) ||
//     (month == 11 && day <= 22)
// ) {
//     console.log("chayon");
// } else if (
//     (month == 11 && day > 22 && day <= 30) ||
//     (month == 12 && day <= 21)
// ) {
//     console.log("o'qotar");
// } else if (
//     (month == 12 && day > 21 && day <= 31) ||
//     (month == 1 && day <= 19)
// ) {
//     console.log("echki");
// }