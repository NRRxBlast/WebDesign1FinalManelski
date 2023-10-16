//Variables (getter and setter)
let getClick = 1, setClick;

//Sets which display to go to based on the disp parameter. Saves number to local storage.
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
  else if(disp == 5){
    setClick = localStorage.setItem("value", 5);
  }
  
}
//Gets local storage numnber to properly ensure that the correct tab is currently being displayed by adjusting the css display values based on local storage value.
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

//Changes selected tab within navigation on html pages using the tab parameter. Code adjusts the css display style.
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

//Alerts the user that the feature is not yet ready.
function faqAlert(){
  alert("Sorry, this feature is not yet ready. Come back in the future!");
}