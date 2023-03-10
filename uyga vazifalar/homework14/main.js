// function moment() {
//     return {
//         format(time) {

//         }
//     }
// }
// moment().format("LT")
// let date = new Date()
// let a = date.getMonth()

// if (a < 10) {
//     a = "0" + (a + 1);
// }
// console.log(a);

// setInterval(() => {
//     let date = new Date();
//     LT.innerHTML = `${date.getHours()} : ${date.getMinutes()}`
// }, 1000)
// setInterval(() => {
//     let date = new Date();
//     LTS.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
// }, 1000)
// setInterval(() => {
//     let date = new Date();
//     L.innerHTML = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
//     if (date.getMonth() < 10) {
//         date.getMonth() = "0" + date.getMonth()
//     }

// }, 1000)



let date = new Date();
let months = date.getMonth();
let day = date.getDate();

if (months < 10) {
    months += 1;
    months = "0" + (months);
}
if (day < 10) {
    day = "0" + (day + 1);
}


let oy = date.getMonth();

switch (oy) {
    case 0:
        oy = "January";
        break;
    case 1:
        oy = "February";
        break;
    case 2:
        oy = "March";
        break;
    case 3:
        oy = "April"
        break;
    case 4:
        oy = "May"
        break;
    case 5:
        oy = "Juny"
        break;
    case 6:
        oy = "July"
        break;
    case 7:
        oy = "August"
        break;
    case 8:
        oy = "Semtember"
        break;
    case 9:
        oy = "October"
        break;
    case 10:
        oy = "November"
        break;
    case 11:
        oy = "December"
        break;
}


let oylar = date.getMonth();

switch (oylar) {
    case 0:
        oylar = "Jan";
        break;
    case 1:
        oylar = "Feb";
        break;
    case 2:
        oylar = "Mar";
        break;
    case 3:
        oylar = "Apr"
        break;
    case 4:
        oylar = "May"
        break;
    case 5:
        oylar = "Jun"
        break;
    case 6:
        oylar = "Jul"
        break;
    case 7:
        oylar = "Aug"
        break;
    case 8:
        oylar = "Sem"
        break;
    case 9:
        oylar = "Oct"
        break;
    case 10:
        oylar = "Nov"
        break;
    case 11:
        oylar = "Dec"
        break;
}

let hafta = date.getDay();

switch (hafta) {
    case 0:
        hafta = "Sunday";
        break;
    case 1:
        hafta = "Monday";
        break;
    case 2:
        hafta = "Tuesday";
        break;
    case 3:
        hafta = "Wednesday"
        break;
    case 4:
        hafta = "Thusday"
        break;
    case 5:
        hafta = "Friday"
        break;
    case 6:
        hafta = "Saturday"
        break;
}

let haftalar = date.getDay();

switch (haftalar) {
    case 0:
        haftalar = "Sun";
        break;
    case 1:
        haftalar = "Mon";
        break;
    case 2:
        haftalar = "Tue";
        break;
    case 3:
        haftalar = "Wed"
        break;
    case 4:
        haftalar = "Thu"
        break;
    case 5:
        haftalar = "Fri"
        break;
    case 6:
        haftalar = "Sat"
        break;
}





setInterval(() => {
    let date = new Date();
    LT.innerHTML = `${date.getHours()} : ${date.getMinutes()}`;

    LTS.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

    L.innerHTML = `${day}/${months}/${date.getFullYear()}`;

    l.innerHTML = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    LL.innerHTML = `${date.getDate()}/${oy}/${date.getFullYear()}`;

    ll.innerHTML = `${date.getDate()}/${oylar}/${date.getFullYear()}`;

    LLL.innerHTML = `${date.getDate()}/${oy}/${date.getFullYear()}, ${date.getHours()} : ${date.getMinutes()}`;

    lll.innerHTML = `${date.getDate()}/${oylar}/${date.getFullYear()}, ${date.getHours()} : ${date.getMinutes()}`;

    llll.innerHTML = `${haftalar} ${date.getDate()}/${oylar}/${date.getFullYear()}, ${date.getHours()} : ${date.getMinutes()}`;

    LLLL.innerHTML = `${hafta} ${date.getDate()}/${oylar}/${date.getFullYear()}, ${date.getHours()} : ${date.getMinutes()}`;
}, 1000);















































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




