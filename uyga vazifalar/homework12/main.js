
// const upkey = (str => {
//     let res = ""
//     let count = 0
//     for (l of str) {

//         // l === " " ? (count = 1) : (res += l)

//         if (l === " ") {
//             count = 1
//         } else {
//             res = res + (count != 0 ? l.toUpperCase() : l)
//             count = 0
//         }
//     }
//     console.log(res);
// })
// upkey(" webbrain academy")

const getCount = (str) => {
    let res = {}
    for (l of str) {
        if (l in res) {
            res[l] = res[l] + 1
        } else {
            l !== " " && (res[l] = 1)
        }
        console.log(res);
    }
}
getCount("Webbrain Academy")