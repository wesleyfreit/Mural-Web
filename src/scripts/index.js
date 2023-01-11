import * as dados from "./dados.js";
import * as login from "./login.js";
import * as menu from "./menu.js";

/*window.addEventListener("load", () => {
  if (!dados.verificarUser()) {
    login.exibir();
  }
});*/

document.querySelector("#openMenu").addEventListener("click", menu.exibir);

document.querySelector(".header-nav-background").addEventListener("click", menu.fechar);