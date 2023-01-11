const headerNavBackground = document.querySelector(".header-nav-background");
const headerNav = document.querySelector(".header-nav");

const exibir = () => {
    headerNav.classList.toggle("active");
    headerNavBackground.style.display = "block";
};

const fechar = () => {
    headerNav.style.animationName = "slideof";
    headerNav.style.animationDuration = "0.5s";
    setTimeout(() => {
        headerNav.classList.toggle("active");
        headerNavBackground.style.display = "none";
        headerNav.style.animationName = "slidein";
    }, 300);
};

export { exibir, fechar };
