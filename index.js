// Button animation design

const btn = document.querySelector("#btn");
btn.onmousemove = function (e) {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
}

// JS for Hamburger menu

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");
menu.addEventListener("click", () => {
    menu.classList.toggle("Active")
    nav.classList.toggle("Active")
});

// Js for the preloader

var loader = document.querySelector("#preloader");
window.addEventListener("load", () =>{
    loader.style.display =  "none";
});

// Scroll reveal feature

const sr = ScrollReveal({
    distance: '25px',
    duration: 2500,
    reset: true
})

sr.reveal('header',{delay: 140, origin: 'top'})
sr.reveal('.dev-info',{delay: 140, origin: 'bottom'})
sr.reveal('.content',{delay: 140, origin: 'bottom'})
sr.reveal('.media-icons',{delay: 140, origin: 'bottom'})