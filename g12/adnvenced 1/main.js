// const title = (str) => {
//   let res = "";
//   for (let i = 97; i <= 122; i++) {
//     for (let j = 1; j <= str.length.charCodeAt(); j++) {
//         console.log();
//     }
//   }
// };
// title("webbrain academy");

const getZiplash = (str) => {
  let res = "";
  let zip = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      zip++;
    } else {
      res += str[i];
      if (zip > 1) {
        res += zip;
        zip = 1;
      }
    }
  }
  console.log(res);
};
getZiplash("webbraiiiiiin");
