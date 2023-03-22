// let data = "bulut"
// switch (data) {
//     case "yomgir":
//         console.log("Bugun yomgir");
//         break;
//     case "qor":
//         console.log("Bugun qor");
//         break;
//     case "bulut":
//         console.log("Bugun bulut");
//         break;
//     default:
//         console.log("No date");
// }


// for (i = 1; i <= 10; i++) {
//     console.log("Hi Webbrain");
// }

// break =================================== 

// Toq sonni chiqarish

// for (i = 1; i <= 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);

// }
// outer: for (i = 10; i >= 1; i -= 1) {
//     inner: for (j = 1; j <= 10; j += 10) {
//         if (i <= 0) break outer
//         for (a = 1; a <= 10; a++){
//             if(j<=0)break inner;

//         }
//     }
//     console.log(`${i} + ${j} = ${i + j}`);
// }
// outer: for (i = 10; i >= 1; i += 10) {
//     inner: for (j = 1; j <= 10; j += 1) {
//         if (i === 4) break outer;
//         console.log(`${i} + ${j} = ${i + j}`);
//     }
//     console.log("");
// }

// for (i = 2; i <= 10; i++) {
//     console.log(`\n${i} - karraliklar \n`);
//     for (j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }