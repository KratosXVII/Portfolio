// Sticky navbar and top scroll

const header = document.querySelector("header");
window.addEventListener("scroll", function (){
    header.classList.toggle("sticky", window.scrollY > 0);
});

const toTop = document.querySelector(".top");
window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

// JavaScript for Nav button

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");
menu.addEventListener("click", () => {
    menu.classList.toggle("Active")
    nav.classList.toggle("Active")
});

// JavaScript for four svgs

function AutoRefresh() {
    var circle1 = document.querySelector('.circle1');
    circle1.classList.toggle('active');
    var circle2 = document.querySelector('.circle2');
    circle2.classList.toggle('active');
    var circle3 = document.querySelector('.circle3');
    circle3.classList.toggle('active');
    var circle4 = document.querySelector('.circle4');
    circle4.classList.toggle('active');
    var circle5 = document.querySelector('.circle5');
    circle5.classList.toggle('active');
    setTimeout(function () {
        circle1.classList.remove('active');
        circle2.classList.remove('active');
        circle3.classList.remove('active');
        circle4.classList.remove('active');
        circle5.classList.remove('active');
    }, 3000);
    let number1 = document.getElementById("number-1");
    let counter1 = 0;
    setInterval(() => {
        if (counter1 === 80) {
            clearInterval();
        }
        else {
            counter1 += 1;
            number1.innerHTML = counter1 + "%";
        }
    }, 24);
    let number2 = document.getElementById("number-2");
    let counter2 = 0;
    setInterval(() => {
        if (counter2 === 70) {
            clearInterval();
        }
        else {
            counter2 += 1;
            number2.innerHTML = counter2 + "%";
        }
    }, 26);
    let number3 = document.getElementById("number-3");
    let counter3 = 0;
    setInterval(() => {
        if (counter3 === 90) {
            clearInterval();
        }
        else {
            counter3 += 1;
            number3.innerHTML = counter3 + "%";
        }
    }, 20);
    let number4 = document.getElementById("number-4");
    let counter4 = 0;
    setInterval(() => {
        if (counter4 === 75) {
            clearInterval();
        }
        else {
            counter4 += 1;
            number4.innerHTML = counter4 + "%";
        }
    }, 26);
    let number5 = document.getElementById("number-5");
    let counter5 = 0;
    setInterval(() => {
        if (counter5 === 80) {
            clearInterval();
        }
        else {
            counter5 += 1;
            number5.innerHTML = counter5 + "%";
        }
    }, 24);
}

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
sr.reveal('.content-section',{delay: 190, origin: 'bottom'})
sr.reveal('.image-section',{delay: 210, origin: 'right'})
sr.reveal('#skill-section',{delay: 210, origin: 'bottom'})
sr.reveal('.service-section',{delay: 210, origin: 'bottom'})
sr.reveal('.contact-text',{delay: 310, origin: 'left'})
sr.reveal('.contact-form',{delay: 210, origin: 'right'})