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


let res = 0
const sum = (n) => {
    // console.log(n);
    if (n === 1) return res += 1;
    else {
        res += n
        return sum(n - 1)
    }
}
sum(4);
console.log(res);