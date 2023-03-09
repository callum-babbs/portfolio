// ---- Scroll to top button ----
//Scroll detection
document.addEventListener("scroll", handleScroll);

//Get the button
var toTopButton = document.getElementById("myBtn");

toTopButton.addEventListener("click", scrollToTop);

function handleScroll() {
    var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var GOLDEN_RATIO = 0.3;
  
    if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
      //show button
      toTopButton.style.display = "block";
    } else {
      //hide button
      toTopButton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

