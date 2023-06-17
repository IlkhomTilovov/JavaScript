import data from "./mock.js";
const baza = document.querySelector("#container");
// baza.style.cssText = `
// text-align: center;
// `;
// console.log(baza);

// const button = document.querySelector("#button");
// button.onclick = () => {
//   baza.scrollBy({
//     behavior: "smooth",
//     top: 25,
//   });
// };

// console.log(container.getBoundingClientRect());

// const button = document.querySelector("#button");
// const tepa = baza.clientHeight;
// button.onclick = () => {
//   console.log(baza.clientHeight);
//   console.log(baza.scrollHeight);
//   if (baza.clientHeight !== baza.scrollHeight) {
//     button.innerText = "Show less";
//     baza.style.height = `${baza.scrollHeight}px`;
//   } else {
//     button.innerText = "Show more";
//     baza.style.height = `${tepa}px`;
//   }
// };

const body = document.querySelector("#body");
const list = document.createElement("div");

const displayData = (data) => {
  list.innerHTML = "";
  data.map((user) => {
    const userElement = document.createElement("h3");
    const onDelete = (data, id) => {
      let result = [];
      result = data.filter((user) => {
        return user.id !== id;
      });
      displayData(result);
    };
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.onclick = () => onDelete(data, user.id);
    userElement.innerText = `${user.id}. ${user.fullName}`;
    userElement.append(button);
    list.append(userElement);
  });
};

displayData(data);
body.append(list);
