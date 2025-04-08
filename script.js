const navbar = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        navbar.style.backgroundColor='rgba(0, 0, 0, 0)';
    } else {
        navbar.style.backgroundColor='rgba(0, 0, 0, 0.817)';
    }
});
