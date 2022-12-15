let search_button = document.getElementById('search_button');
let search_bar = document.getElementById('search_bar');

function open_search(){
    search_button.style.display = "none";
    search_bar.style.display = "inline-block";
    search_bar.focus();
}

function close_search(){
    search_bar.style.display = "none";
    search_button.style.display = "block";
}

search_bar.addEventListener('keydown', verif_key);
function verif_key(e) {
    if(e.code=="Enter"){alert("Cette fonctionnalité n'est pas encore disponible.\nNous vous prions de nous en excuser.")};
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("custom-slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}