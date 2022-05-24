//deixar o menu um pouquinho transparente
window.addEventListener("scroll", function () {
    if (window.scrolly > 150) {
        document.querySelector("navbar").style.opacity = 0.9;
    } else {
        document.querySelector("navbar").style.opacity = 1
    }
});