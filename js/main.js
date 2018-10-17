//let togle = document.getElementById("myBtn");
//let hamLi = document.getElementById("hamLi");
//
//function myFunction() {
//    hamLi.style.display = 'block';
//   }
//togle.addEventListener("click", myFunction);



$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active')
        $('.hamLi').style.display = 'block';
    });
});
