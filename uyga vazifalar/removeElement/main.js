const data = [
  {
    title: "Hello1",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
    amet nesciunt, quibusdam, ad perferendis laborum error facilis
    voluptatum veritatis rerum hic. Necessitatibus optio quam molestiae
    amet mollitia officiis quidem, a sit ducimus sapiente quibusdam
    doloribus eos rerum cum iusto. Similique excepturi consequuntur
    reprehenderit tempore ut repellat dolore. Reprehenderit, repudiandae
    exercitationem!`,
  },
  {
    title: "Hello2",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
    amet nesciunt, quibusdam, ad perferendis laborum error facilis
    voluptatum veritatis rerum hic. Necessitatibus optio quam molestiae
    amet mollitia officiis quidem, a sit ducimus sapiente quibusdam
    doloribus eos rerum cum iusto. Similique excepturi consequuntur
    reprehenderit tempore ut repellat dolore. Reprehenderit, repudiandae
    exercitationem!`,
  },
  {
    title: "Hello3",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
    amet nesciunt, quibusdam, ad perferendis laborum error facilis
    voluptatum veritatis rerum hic. Necessitatibus optio quam molestiae
    amet mollitia officiis quidem, a sit ducimus sapiente quibusdam
    doloribus eos rerum cum iusto. Similique excepturi consequuntur
    reprehenderit tempore ut repellat dolore. Reprehenderit, repudiandae
    exercitationem!`,
  },
];

const parent = document.querySelector(".parent");
data.forEach((elem) => {
  let container = document.createElement("div");
  let remove = document.createElement("img");
  remove.setAttribute("src", "delete-1-svgrepo-com.svg");
  remove.addEventListener("click", () => {
    container.style.display = "none";
  });
  container.style.width = `600px`;
  container.style.margin = `20px auto`;
  container.style.background = `bisque`;

  let title = document.createElement("h1");
  title.innerText = elem.title;
  let box = document.createElement("div");
  box.style.cssText = `
    display: flex;
    justify-content: space-between;
  `;
  box.append(title, remove);
  let text = document.createElement("p");
  text.style.cssText = `
    padding: 0 50px; 
  `;
  text.innerText = elem.text;
  container.append(box, text);
  parent.append(container);
});
