let parent = document.querySelector(".parent")
let btn = document.querySelector("button")

// console.log(parent.getAttribute('class'));
// parent.setAttribute('id', 'border');
// console.log(parent.getAttribute("class"));

// let dv = document.createElement("div")
// let txt = document.createTextNode("Hey DOM")
// dv.setAttribute("id", "border")
// dv.append(txt)
// dv.prepend(txt)
// parent.append(dv)

// dv = parent.cloneNode(true);
// console.log(dv.hasAttribute('class'));
// console.log(dv.getAttribute('class'));

// parent.style.backgroundColor = "red"
// parent.style.fontSize = "20px"
// parent.style.cssText = `
// color:white;
// `

// console.log(parent.children[0].children)
// let chl = parent.children[0].children;
// for (let el = 0; el < chl.length; el++) {
//     if (el % 2 == 0) {
//         chl[el].style.color = "red"
//     } else {
//         chl[el].style.color = "blue"
//     }
// }

// console.log(parent.offsetTop);
// console.log(parent.offsetLeft);
// console.log(parent.offsetWidth);
// console.log(parent.clientWidth);
// console.log(parent.scrollWidth);
console.log(parent.scrollHeight);

function expand() {
    if (parent.clientHeight === parent.scrollHeight) {
        parent.style.height = "150px"
        btn.innerHTML = "Show more"

    } else {

        parent.style.height = `${parent.scrollHeight}px`
        btn.innerHTML = "Show less"
    }
}
function sr() {
    if (parent.scroll(0, parent.scrollHeight)) {
        parent.scroll(0, parent.scrollTop)
    } else {
        parent.scroll(0, parent.scrollHeight)
    }
}
