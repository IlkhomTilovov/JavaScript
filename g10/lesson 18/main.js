// var getDate = (id) => {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
// }
// const getCache = (func) => {
//     let cache = new Map()
//     return function (x) {
//         if (cache.has(x)) {
//             console.log(cache.get(x));
//         } else {
//             let res = func(x)
//             console.log(res);
//             cache.set(x, res)
//         }
//     }
// }
// getDate = getCache(getDate)



// let ar = [12, 3, 322, 4, 5, 3];
// ar.sort((a, b) => b - a);
// ar.splice(0, 1);
// console.l2og(ar);
let a = 2;
let b = 5;

// console.log(b,a);
if ((a = (b / b) * b) && (b = (a / a) * a)) {
    console.log(`${a} a - ${b} b`);
}



