const login_sec = document.querySelector(".form-section");
const register_link = document.querySelector(".register-link");
const login_link = document.querySelector(".login-link");

register_link.addEventListener("click", () =>{
    login_sec.classList.add("active");
})
login_link.addEventListener("click", () =>{
    login_sec.classList.remove("active");
})

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");
menu.addEventListener("click", () => {
    menu.classList.toggle("Active")
    nav.classList.toggle("Active")
});

const showpass1 = document.querySelector("#show-password-1");
const pass1 = document.querySelector("#password-1");

showpass1.addEventListener("click", function() {
    const fields = this.classList;
    if (fields[1] === 'fa-eye'){
        this.classList.remove("fa-eye");
    }
    else{
        this.classList.add("fa-eye");
    }
    this.classList.toggle("fa-eye-slash");
    const type = pass1.getAttribute("type") === "password" ? "text" : "password";
    pass1.setAttribute("type", type);
});
const showpass2 = document.querySelector("#show-password-2");
const pass2 = document.querySelector("#password-2");

showpass2.addEventListener("click", function() {
    const fields = this.classList;
    if (fields[1] === 'fa-eye'){
        this.classList.remove("fa-eye");
    }
    else{
        this.classList.add("fa-eye");
    }
    this.classList.toggle("fa-eye-slash");
    const type = pass2.getAttribute("type") === "password" ? "text" : "password";
    pass2.setAttribute("type", type);
});
const showpass3 = document.querySelector("#show-password-3");
const pass3 = document.querySelector("#password-3");

showpass3.addEventListener("click", function() {
    const fields = this.classList;
    if (fields[1] === 'fa-eye'){
        this.classList.remove("fa-lock");
    }
    else{
        this.classList.add("fa-lock");
    }
    this.classList.toggle("fa-lock-open");
    const type = pass3.getAttribute("type") === "password" ? "text" : "password";
    pass3.setAttribute("type", type);
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

sr.reveal('header',{delay: 140, origin: 'top'})
sr.reveal('.container',{delay: 180, origin: 'bottom'});
sr.reveal('.item',{delay: 200, origin: 'left'});
sr.reveal('.form-section',{delay: 200, origin: 'right'});