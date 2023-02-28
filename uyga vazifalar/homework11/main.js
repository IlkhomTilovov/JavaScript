// let arr = ([2, 4, 5, 6, 3, 3, 7, 8, 9, 4, 3, 6]);
// let res =eval(arr.join("+"))
// console.log(res);

let char = (arr) => {
    let res = {}
    for (sanoq of arr) {
        if (sanoq in res) {
            res[sanoq] = res[sanoq] + 1
        } else {
            res[sanoq] = 1;
        }
    }
    console.log(res);
}
char(["webbrain", "academy"])