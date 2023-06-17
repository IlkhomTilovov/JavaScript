const polya = document.querySelector("#polya");
const ball = document.querySelector("#ball");

polya.addEventListener("click", (event) => {
  const { offsetX: x, offsetY: y } = event;
  ball.style.top = `${y - 40}px`;
  ball.style.left = `${x - 40}px`;
});
ball.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
});
