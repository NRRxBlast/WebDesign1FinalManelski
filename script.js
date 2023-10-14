let getClick = 1, setClick;

function homePage(){
  window.location.href="index.html";
}
function contentPage(){
  
  window.location.href="content.html";
  
  
}
function faqPage(){
  window.location.href="faq.html";
}
function setDisplay(disp){
  if(disp == 1){
    setClick = localStorage.setItem("value", 1);
  }
  else if(disp == 2){
    setClick = localStorage.setItem("value", 2);
  }
  else if(disp == 3){
    setClick = localStorage.setItem("value", 3);
  }
  else if(disp == 4){
    setClick = localStorage.setItem("value", 4);
  }
}
function getDisplay(){
  getClick = localStorage.getItem("value");
  if(getClick == 1){
    document.getElementById("contentColorsPatterns").style.display = "flex";
    document.getElementById("contentTypography").style.display = "none";
    document.getElementById("contentButtons").style.display = "none";
    document.getElementById("contentLayout").style.display = "none";
    
  }
  else if(getClick == 2){
    document.getElementById("contentColorsPatterns").style.display = "none";
    document.getElementById("contentTypography").style.display = "grid";
    document.getElementById("contentButtons").style.display = "none";
    document.getElementById("contentLayout").style.display = "none";
  }
  else if(getClick == 3){
    document.getElementById("contentColorsPatterns").style.display = "none";
    document.getElementById("contentTypography").style.display = "none";
    document.getElementById("contentButtons").style.display = "flex";
    document.getElementById("contentLayout").style.display = "none";
  }
  else if(getClick == 4){
    document.getElementById("contentColorsPatterns").style.display = "none";
    document.getElementById("contentTypography").style.display = "none";
    document.getElementById("contentButtons").style.display = "none";
    document.getElementById("contentLayout").style.display = "block";
  }
  localStorage.setItem("value", 1);
}

 function changeTab(tab){
      if(tab == 1){
        document.getElementById("contentColorsPatterns").style.display = "flex";
        document.getElementById("contentTypography").style.display = "none";
        document.getElementById("contentButtons").style.display = "none";
        document.getElementById("contentLayout").style.display = "none";
      }
      else if(tab == 2){
        document.getElementById("contentColorsPatterns").style.display = "none";
        document.getElementById("contentTypography").style.display = "grid";
        document.getElementById("contentButtons").style.display = "none";
        document.getElementById("contentLayout").style.display = "none";
      }
      else if(tab == 3){
        document.getElementById("contentColorsPatterns").style.display = "none";
        document.getElementById("contentTypography").style.display = "none";
        document.getElementById("contentButtons").style.display = "flex";
        document.getElementById("contentLayout").style.display = "none";
      }
      else if(tab == 4){
        document.getElementById("contentColorsPatterns").style.display = "none";
        document.getElementById("contentTypography").style.display = "none";
        document.getElementById("contentButtons").style.display = "none";
        document.getElementById("contentLayout").style.display = "block";
      }
    }