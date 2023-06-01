const hearts = document.querySelectorAll("#heart");
// console.log(hearts.length);
for(var i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", Switch, false);
};

function Switch(e){
    const fields = this.classList;
    if(fields[2] === "bx-heart"){
        this.classList.remove("bx-heart");
        this.classList.add("bxs-heart");
        this.style.color = "#ff0404";
    }
    else{
        this.classList.remove("bxs-heart");
        this.classList.add("bx-heart");
        this.style.color = "#ffff";
    }
}

// Loadbar animation
var loader = document.querySelector(".preloader");
window.addEventListener("load", () =>{
    loader.style.display =  "none";
});

// Scroll Reveal animation
const sr = ScrollReveal({
    distance: '25px',
    duration: 2500,
    reset: true
})

sr.reveal('.project-section',{delay: 200, origin: 'bottom'})