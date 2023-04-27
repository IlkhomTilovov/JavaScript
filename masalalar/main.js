function makes10(a, b) {
  if (a || b == 10) {
    return true;
  } else if (a + b === 10) {
    return true;
  } else {
    return false;
  }
}
console.log(makes10(9, 10));
console.log(makes10(9, 9));
console.log(makes10(8, 3));
