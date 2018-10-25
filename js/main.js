let togle = document.getElementById("myBtn");
let hamLi = document.getElementById("hamLi");

function myFunction() {
    togle.classList.toggle("active");
    hamLi.classList.toggle("open");
}
togle.addEventListener("click", myFunction);


//Up
let btnUp = document.getElementById("Btn_up");
btnUp.addEventListener("click", Up);

function Up(){
   window.scrollTo(0,0);
}


//$(document).ready(function(){
//    $('.hamburger').click(function(){
//        $('.hamburger').toggleClass('active')
//        $('.hamLi').style.display = 'block';
//    });
//});
