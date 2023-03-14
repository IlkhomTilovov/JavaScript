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



let ar = [12, 3, 322, 4, 5, 3];
ar.sort((a, b) => b - a);
ar.splice(0, 1);
console.log(ar);
