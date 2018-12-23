let togle = document.getElementById("myBtn");
let hamLi = document.getElementById("hamLi");
let btn_up = document.getElementById("Btn_up");

function myFunction() {
    togle.classList.toggle("active");
    hamLi.classList.toggle("open");
}
togle.addEventListener("click", myFunction);




//Up
//let btnUp = document.getElementById("Btn_up");
//btnUp.addEventListener("click", Up);
//
//function Up(){
//   window.scrollTo(0,0);
//}


var html, body, scrollToTopButton;
window.onload = function() {
  html = document.documentElement;
  body = document.body;
  scrollToTopButton = document.getElementById("Btn_up");
};


function scrollToTop(totalTime, easingPower) {
  //console.log("here");
  let timeInterval = 1; //in ms
  let scrollTop = Math.round(body.scrollTop || html.scrollTop);
  //var by=- scrollTop;
  let timeLeft = totalTime;
  let scrollByPixel = setInterval(function() {
    let percentSpent = (totalTime - timeLeft) / totalTime;
    if (timeLeft >= 0) {
      let newScrollTop = scrollTop * (1 - easeInOut(percentSpent, easingPower));
      body.scrollTop = newScrollTop;
      html.scrollTop = newScrollTop;
      //console.log(easeInOut(percentSpent,easingPower));
      timeLeft--;
    } else {
      clearInterval(scrollByPixel);
      //Add hash to the url after scrolling
      //window.location.hash = hash;
    }
  }, timeInterval);
}


function easeInOut(t, power) {
  if (t < 0.5) {
    return 0.5 * Math.pow(2 * t, power);
  } else {
    return 0.5 * (2 - Math.pow(2 * (1 - t), power));
  }
}

window.onscroll = controlScrollToTopButton;

function controlScrollToTopButton() {
  let windowInnerHeight = window.innerHeight;
  if (
    body.scrollTop > windowInnerHeight ||
    html.scrollTop > windowInnerHeight
  ) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
}



