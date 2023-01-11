const headerNavBackground = document.querySelector(".header-nav-background");
const headerNav = document.querySelector(".header-nav");
const container = document.querySelector(".container");

const exibir = () => {
    headerNav.classList.toggle("active");
    headerNavBackground.style.display = "block";
};

const fechar = () => {
    headerNav.style.animationName = "slideof";
    headerNav.style.animationDuration = "0.5s";
    container.style.pointerEvents = "none";
    setTimeout(() => {
        container.style.pointerEvents = "all";
        headerNav.classList.toggle("active");
        headerNavBackground.style.display = "none";
        headerNav.style.animationName = "slidein";
        
    }, 400);
};

export { exibir, fechar };
