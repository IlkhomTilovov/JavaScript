// Recursion functsions

let n = 4;
const sum = (n) => {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    console.log(s);
}
sum(4);