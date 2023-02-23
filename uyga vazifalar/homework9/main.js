

// let check = (str1, str2) => {
//     if (str1.localeCompare("webbrain") === str2.localeCompare("webbrain")) {
//         console.log(`"Bu malumotlar bir biriga to'g'ri keladi"`);
//     } else if (str1.localeCompare(str2)===str1.localeCompare()){
//         console.log(`"Bu malumotlar bir biriga qisman to'g'ri keladi"`);
//     }else{
//         console.log("Bu malumot bir biriga to'g'ri kelmaydi");
//     }
// }
// check("webbrain","webbrain")



// let str1 = "webbrain"
// let str2 = new String ("rain")
// console.log(str1.localeCompare(str2)== str2.localeCompare(str1));
// let getCount = (str) => {
//     for(check of str){

//     }
// }
// getCount("webbrain")



// let truncate = (str = "webbrain", n = 5) => {
//     console.log(str.slice(0, n));
// }
// truncate($1200)
let menu = {
    pul: "",
    kurs: ""
};

let getCurrency = () => {

    for (key in menu) {
        if (isNaN(key) === false) {
            let pul = pul + key;
        } else {
            let kurs = kurs + key;
        }
    }
}
getCurrency("$1200");
console.log(`"pul" ${menu.pul.length}`);

