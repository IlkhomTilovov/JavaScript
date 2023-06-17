
let container = document.getElementById("container")
let ball = document.getElementById("ball")
container.onmouseup = ({ clientX, clientY }) => {
    ball.style.top = `${clientY - 30}px`
    ball.style.left = `${clientX - 30}px`
}
container.onclick = ({ clientX, clientY }) => {
    ball.style.top = `${clientY - 30}px`
    ball.style.left = `${clientX - 30}px`
}

ball.onclick = ({ offsetX, offsetY, clientX, clientY }) => {
    if (offsetY >= 0 && offsetY < 20 && offsetX >= 0 && offsetX < 20) {
        ball.style.top = `${clientY + 100}px`
        ball.style.left = `${clientX + 100}px`
    } else if (offsetY >= 20 && offsetY <= 30 && offsetX >= 0 && offsetX <= 10) {
        ball.style.left = `${clientX + 100}px`
    } else if (offsetX >= 10 && offsetX < 25 && offsetY >= 30 && offsetY < 50) {
        ball.style.top = `${clientY - 100}px`
        ball.style.left = `${clientX + 100}px`
    }
}

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
// });

// promise.then(function (result) {
//     console.log(result); // 1
//     return result * 2;
// });

// promise.then(function (result) {
//     console.log(result); // 1
//     return result * 2;
// });

// promise.then(function (result) {
//     console.log(result); // 1
//     return result * 2;
// });

// const Students = function (callback) {
//     new Promise((resolve) => {
//         setTimeout(() => { resolve('1-qadam'); }, 1000);
//     }).then(console.log);
//     setTimeout(callback, 1000);
//     console.log('2-qadam');
// };
// const addStudent = function () {
//     console.log('3-qadam');
// };
// Students(addStudent);

// let users = [
//     { id: 1, name: "Umar" },
//     { id: 2, name: "Ismoil" },
//     { id: 3, name: "Ali" },
// ]
// let user = { id: 4, name: "Muhammad" }


// let obj = {
//     Name: "umar"
// }
// let obj2 = {
//     Name: "umar"
// }
// console.log(obj == obj2)

// const adventurer = {
//     name: 'Alice',
//     cat: {
//       name: 'Dinah'
//     }
//   };
  
//   const dogName = adventurer.dog?.name;
//   console.log(dogName);
//   // Expected output: undefined
  
//   console.log(adventurer.someNonExistentMethod?.());
  // Expected output: undefined
