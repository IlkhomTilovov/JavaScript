// function getData() {
//     return fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
// }
// function getCached(func) {
//     let cache = new Map()
//     return function (a) {
//         if (cache.has(a)) {
//             console.log(cache.get(a));
//             return cache.get(a)
//         }
//         let res = func()
//         return cache.set(a, res)
//     }
// }
// getData = getCached(getData)
// getData()


