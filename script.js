let getClick, setClick;

function homePage(){
  window.location.href="index.html";
}
function contentPage(){
  
  window.location.href="content.html";
  changeDisplay();
  
}
function faqPage(){
  window.location.href="faq.html";
}
function changeDisplay(){
  document.getElementById("contentColorsPatterns").style.display = "none";
}