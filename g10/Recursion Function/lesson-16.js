// Recursion functsions

// let n = 4;
// const sum = (n) => {
//     let s = 0;
//     for (let i = 1; i <= n; i++) {
//         s += i;
//     }
//     console.log(s);
// }
// sum(4);


// let res = 0
// const sum = (n) => {
//     // console.log(n);
//     if (n === 1) return res += 1;
//     else {
//         res += n
//         return sum(n - 1)
//     }
// }
// sum(4);
// console.log(res);

let company = {
    sales: [
        { name: "John", salary: 1000 },
        { name: "Alice", salary: 1600 },
    ],
    development: {
        sites: [
            { name: "Peter", salary: 2000 },
            { name: "Alex", salary: 1800 },
        ],
        internals: [{ name: "Jack", salary: 1300 }]
    },
};
function getCalc(comapny) {
    if (Array.isArray(comapny)) {
        return comapny.reduce((prev, current) => prev + current.salary, 0)
    } else {
        let sum = 0;
        for (let subdep of Object.values(comapny)) {
            sum += getCalc(subdep);
        }
        return sum;
    }
}
getCalc(company)