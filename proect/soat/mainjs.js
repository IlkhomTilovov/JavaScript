// setInterval(setAsosiy, 1000);
// const milSoat = document.querySelector("[bu-soat-mili]");
// const milMinut = document.querySelector("[bu-daqiqa-mili]");
// const milSekunt = document.querySelector("[bu-sekunt-mili]");

// function setAsosiy() {
//   const currentDate = new Date();
//   const secondsRatio = currentDate.getSeconds() / 60;
//   const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
//   const hoursRatio = (minutesRatio + currentRetio.getHours()) / 12;
//   setRotation(milSekunt, secondsRatio);
//   setRotation(milMinut, minutesRatio);
//   setRotation(milSoat, hoursRatio);
// }

// function setRotation(element, rotationRatio) {
//   element.style.setProperty("--rotation", rotationRatio * 360);
// }

// setAsosiy();

setInterval(setAsosiy, 1000);

const milSoat = document.querySelector("[bu-soat-mili]");
const milMinut = document.querySelector("[bu-minut-mili]");
const milSekund = document.querySelector("[bu-sekunt-mili]");

function setAsosiy() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(milSekund, secondsRatio);
  setRotation(milMinut, minutesRatio);
  setRotation(milSoat, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
setAsosiy();
