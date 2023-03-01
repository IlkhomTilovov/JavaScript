// let num = [1, 3, 2, 5, 3, 6, 8, 9, 6];
// let str = ["orange", "apple", "banana", "kiwi"];



// // filter ==============================


// let res = num.filter((value, index) => {
//     return true
// })
// console.log(res);

// Sort ================================

// let ar = [12, 3, 23, 5, 26, 4, 3, 5, 6];
// while (ar.length > 1) {
//     console.log(ar);
//     ar = ar.sort((a, b) => b - a);
//     if (ar[0] - ar[1] !== 0) {
//         ar.push(ar[0] - ar[1]);
//         console.log(ar);
//     }
//     ar.splice(0, 2)
// }
// console.log(ar);
let ar = [12, 3, 23, 5, 26, 4, 3, 5, 6];
while (ar.length > 1) {
    // console.log(ar);
    ar = ar.sort((a, b) => b - a);
    if (!(ar[0] - ar[1]) ) {
        ar.push(ar[0] - ar[1]);
        // console.log(ar);
    }
    ar.splice(0, 2)
}
console.log(ar);