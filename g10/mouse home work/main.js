
let container = document.getElementById("container")
let ball = document.getElementById("ball")
// container.onmouseup = ({ clientX, clientY }) => {
//     ball.style.top = `${clientY - 30}px`
//     ball.style.left = `${clientX - 30}px`
// }
// container.onclick = ({ clientX, clientY }) => {
//     ball.style.top = `${clientY - 30}px`
//     ball.style.left = `${clientX - 30}px`
// }

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
