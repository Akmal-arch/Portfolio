// script.js
document.addEventListener("DOMContentLoaded", () => {
    const navbarCont = document.getElementById("navbarCont");
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbarCont.classList.add("scrolled");
            header.classList.add("scrolled");
        } else {
            navbarCont.classList.remove("scrolled");
            header.classList.remove("scrolled");
        }
    });
});