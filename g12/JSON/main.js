// ============================================
const getVaxt = () => {
  let date = new Date();
  return date.getHours();
};

const getMinut = () => {
  let date = new Date();
  return date.getMinutes();
};

const getSecond = () => {
  let date = new Date();
  return date.getSeconds();
};

// =====================================

const getYil = (s) => {
  let date = new Date();
  return date.getFullYear();
};

const getOy = (s) => {
  let date = new Date();
  if (date.getMonth() <= 9) {
    return `0${date.getMonth() + 1}`;
  } else {
    return date.getMonth() + 1;
  }
};

const getKun = (s) => {
  let date = new Date();
  return date.getDate();
};

// ===================================

const getOy1 = (s) => {
  let date = new Date();
  if (date.getMonth() + 1 === 1) {
    return "January";
  } else if (date.getMonth() + 1 === 2) {
    return "February";
  } else if (date.getMonth() + 1 === 3) {
    return "March";
  } else if (date.getMonth() + 1 === 4) {
    return "April";
  } else if (date.getMonth() + 1 === 5) {
    return "May";
  } else if (date.getMonth() + 1 === 6) {
    return "June";
  } else if (date.getMonth() + 1 === 7) {
    return "July";
  } else if (date.getMonth() + 1 === 8) {
    return "August";
  } else if (date.getMonth() + 1 === 9) {
    return "September";
  } else if (date.getMonth() + 1 === 10) {
    return "Octember";
  } else if (date.getMonth() + 1 === 11) {
    return "November";
  } else if (date.getMonth() + 1 === 12) {
    return "December";
  }
};

const getOy2 = (s) => {
  let date = new Date();
  if (date.getMonth() + 1 === 1) {
    return "Jan";
  } else if (date.getMonth() + 1 === 2) {
    return "Feb";
  } else if (date.getMonth() + 1 === 3) {
    return "Mar";
  } else if (date.getMonth() + 1 === 4) {
    return "Apr";
  } else if (date.getMonth() + 1 === 5) {
    return "May";
  } else if (date.getMonth() + 1 === 6) {
    return "Jun";
  } else if (date.getMonth() + 1 === 7) {
    return "Jul";
  } else if (date.getMonth() + 1 === 8) {
    return "Aug";
  } else if (date.getMonth() + 1 === 9) {
    return "Sep";
  } else if (date.getMonth() + 1 === 10) {
    return "Oct";
  } else if (date.getMonth() + 1 === 11) {
    return "Nov";
  } else if (date.getMonth() + 1 === 12) {
    return "Dec";
  }
};

const getHafta = () => {
  let date = new Date();
  if (date.getDay() === 0) {
    return "Sunday";
  } else if (date.getDay() === 1) {
    return "Monday";
  } else if (date.getDay() === 2) {
    return "Tuesday";
  } else if (date.getDay() === 3) {
    return "Wednesday";
  } else if (date.getDay() === 4) {
    return "Thursday";
  } else if (date.getDay() === 5) {
    return "Friday";
  } else if (date.getDay() === 6) {
    return "Saturday";
  }
};
const getHafta2 = () => {
  let date = new Date();
  if (date.getDay() === 0) {
    return "Sun";
  } else if (date.getDay() === 1) {
    return "Mon";
  } else if (date.getDay() === 2) {
    return "Tue";
  } else if (date.getDay() === 3) {
    return "Wed";
  } else if (date.getDay() === 4) {
    return "Thu";
  } else if (date.getDay() === 5) {
    return "Fri";
  } else if (date.getDay() === 6) {
    return "Sat";
  }
};

const moment = (s) => {
  if (s === "LT") {
    return `${getVaxt()}:${getMinut()}`;
  } else if (s === "LTS") {
    return `${getVaxt()}:${getMinut()}:${getSecond()}`;
  } else if (s === "L") {
    return `${getOy()}/${getKun()}/${getYil()}`;
  } else if (s === "l") {
    return `${getOy()}/${getKun()}/${getYil()}`;
  } else if (s === "LL") {
    return `${getOy1()} ${getKun()}, ${getYil()}`;
  } else if (s === "ll") {
    return `${getOy2()} ${getKun()}, ${getYil()}`;
  } else if (s === "LLL") {
    return `${getOy1()} ${getKun()}, ${getYil()} ${getVaxt()}:${getMinut()}`;
  } else if (s === "lll") {
    return `${getOy2()} ${getKun()}, ${getYil()} ${getVaxt()}:${getMinut()}`;
  } else if (s === "LLLL") {
    return `${getHafta()} ${getOy2()} ${getKun()},${getYil()} ${getVaxt()}:${getMinut()}`;
  } else if (s === "llll") {
    return `${getHafta2()} ${getOy2()} ${getKun()},${getYil()} ${getVaxt()}:${getMinut()}`;
  }
};
console.log(moment("LTS"));


