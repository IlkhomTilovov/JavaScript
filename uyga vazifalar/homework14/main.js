// function moment() {
//     return {
//         format(time) {

//         }
//     }
// }
// moment().format("LT")




setInterval(() => {
    let date = new Date();
    LT.innerHTML = `${date.getHours()} : ${date.getMinutes()}`
}, 1000)
setInterval(() => {
    let date = new Date();
    LTS.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
}, 1000)
setInterval(() => {
    let date = new Date();
    L.innerHTML = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
}, 1000)














































 
// let form = "LT";
// let form = "LTS";
// let form = "L";
// let form = "l";
// let form = "LL";
// let form = "ll"; 
// let form = "LLL";
// let form = "lll"; 
// let form = "LLLL"; 
// let form = "llll";


// let moment = () => {
//     let data = new Date();
//     return {
//         format(time) {
//             if (time === 'LT') {
//                 console.log(`${data.getHours()}:${data.getMinutes()}`);
//             } else if (time === "LTS") {
//                 setInterval(() => {
//                     let d = new Date();
//                     console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
//                 }, 1000);
//             }
//             else if (time === "L") {
//                 console.log(`${data.getDate() < 10 ? 0 : ""}${data.getDate()}/${data.getMonth() < 10 ? 0 : ""}${data.getMonth() + 1}/${data.getFullYear()}`);
//             } else if (time === "l") {
//                 console.log(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);
//             } else if (time === "LL") {
//                 console.log(`${data.getDate()} ${month[data.getMonth()]} ${data.getFullYear()}`);
//             } else if (time === "ll") {
//                 console.log(`${data.getDate()} ${month[data.getMonth()].slice(0, 3)} ${data.getFullYear()}`);
//             } else if (time === "LLL") {
//                 console.log(`${data.getDate()} ${month[data.getMonth()]} ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`);
//             } else if (time === "lll") {
//                 console.log(`${data.getDate()} ${month[data.getMonth()].slice(0, 3)} ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`);
//             } else if (time === "LLLL") {
//                 console.log(`${data.getDate()} ${month[data.getMonth()]} ${data.getFullYear()}, ${week[data.getDay() - 1]} ${data.getHours()}:${data.getMinutes()}`);
//             } else if (time === "llll") {
//                 console.log(`${data.getDate()} ${month[data.getMonth()].slice(0, 3)} ${data.getFullYear()}, ${week[data.getDay() - 1].slice(0, 3)} ${data.getHours()}:${data.getMinutes()}`);
//             }
//         }
//     }
// }

// moment().format(form);




