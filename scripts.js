// ---- Scroll to top button ----

//Get the button
var toTopButton = document.getElementById("myBtn");

var rootElement = document.documentElement;

toTopButton.addEventListener("click", scrollToTop);

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

