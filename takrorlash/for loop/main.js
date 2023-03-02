// let name = "webbrain"
// for (let i in name) {
//     console.log(name[i]);
// }




// for (i = 1; i <= 10; i++) {
//     console.log(`\n${i} - karraliklar \n`);
//     for (j = 0; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }
outer: for (i = 10; i >= 1; i -= 1) {
    inner: for (j = 1; j <= 10; j += 10) {
        if (i <= 0) break outer
        ichida: for (a = 1; a <= 10; a++) {
            if (j <= 10) break inner;

        }
    }
    console.log(`${i} + ${j} = ${i + j}`);
}



























// for (i = 1; i <= 20; i++) {
//     console.log(`\n${i} - karraliklar\n`);
//     for (j = 0; j <= 20; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }























