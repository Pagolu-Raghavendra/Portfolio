$(document).ready(function(){
  // Typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Full Stack Developer", "Data Scientist", "Python Developer", "Undergraduate Student"],
    typeSpeed: 30,
    backSpeed: 50,
    loop: true
  });

//projects owl carousel script
$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 800,
  autoplayHoverPause: true,
  responsive: {
      0:{
          items: 1,
          nav: false
      },
      100:{
          items: 2,
          nav: false
      },
      400:{
          items: 3,
          nav: false
      }
  }
});
});

// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
  });
}

//Preventing ctrlKey and cmdKey function
document.addEventListener("keydown", function (event){
  if (event.ctrlKey){
     event.preventDefault(); 
  }
  if(event.metaKey){
    event.preventDefault();
  }
  if(event.keyCode == 123){
     event.preventDefault();
  }
});

//Preventing rightclick function
document.addEventListener('contextmenu', 
  event => event.preventDefault()
);
