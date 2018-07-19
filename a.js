var floatIcon = document.querySelector(".float-icon");
var floatMenu = document.querySelector(".menu-wrap");

var speechBubble = document.querySelector(".fa-comment-o");
var closeMenu = document.querySelector(".fa-times");

speechBubble.style.display = "block";
closeMenu.style.display = "none";
floatMenu.style.display = "none";

floatIcon.addEventListener("click", function(){
  if (floatMenu.style.display === "none"){
    floatMenu.style.display = "block";
    speechBubble.style.display = "none";
    closeMenu.style.display = "block";
  }
  else {
    floatMenu.style.display = "none";
    closeMenu.style.display = "none";
    speechBubble.style.display = "block";
  }
});
