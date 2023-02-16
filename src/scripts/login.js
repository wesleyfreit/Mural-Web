//import { setUser } from "./dados";
let count = 1;

const exibir = () => {
  const main = document.querySelector("main");
  //main.location.href = "https://wesleyfreit.github.io/Mural-Web/views/login";
  window.location.href = "../../views/login.html";
  //return setUser;
};

const transicao = () => {
  count++;
  if(count > 4){
    count = 1;
  }
  document.querySelector("#radio" + count).checked = true;
}

export { exibir, transicao };
