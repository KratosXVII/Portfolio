const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");
menu.addEventListener("click", () => {
    menu.classList.toggle("Active")
    nav.classList.toggle("Active")
});

// Loadbar animation
var loader = document.querySelector(".preloader");
window.addEventListener("load", () =>{
    loader.style.display =  "none";
});

// Scroll reveal feature

const sr = ScrollReveal({
    distance: '25px',
    duration: 2500,
    reset: true
})

sr.reveal('.pricing',{delay: 200, origin: 'left'})