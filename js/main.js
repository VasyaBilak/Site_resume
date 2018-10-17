let togle = document.getElementById("myBtn");
let hamLi = document.getElementById("hamLi");

function myFunction() {
    togle.classList.toggle("active");
    hamLi.classList.toggle("open");
}
togle.addEventListener("click", myFunction);



//$(document).ready(function(){
//    $('.hamburger').click(function(){
//        $('.hamburger').toggleClass('active')
//        $('.hamLi').style.display = 'block';
//    });
//});
