// Get the input field
var input = document.getElementById("search");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
// Number 13 is the "Enter" key on the keyboard
if (event.keyCode === 13) {
// Cancel the default action, if needed
event.preventDefault();
// Trigger the button element with a click
document.getElementById("search-button").click();
}
}); 

function search(){
let term = document.getElementById('search').value.toLowerCase();
let divs = document.getElementsByClassName("csl-right-inline");

for (let x = 0; x < divs.length; x++) {
  let div = divs[x];
  let content = div.innerHTML.trim().toLowerCase();
  if (content.indexOf(term)==-1) {
      div.parentElement.style.display = 'none';
  }
  else{
    div.parentElement.style.display = 'block';
  }
}
}

function reset(){
document.getElementById('search').value = "";
let divs = document.getElementsByClassName("csl-entry");
for (let x = 0; x < divs.length; x++) {
  let div = divs[x];
    div.style.display = 'block';
  }
}


//Get the button:
mybutton = document.getElementById("myBtn");
  
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function toggle(){
    document.body.classList.toggle('dark');

    // Let's say the theme is equal to light
  let theme = "light";
  // If the body contains the .dark-theme class...
  if (document.body.classList.contains("dark")) {
    // ...then let's make the theme dark
    theme = "dark";
  }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);

}


// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");
document.getElementById("darkSwitch").checked = false;
// If the current theme in localStorage is "dark"...
if (currentTheme == "dark") {
  // ...then use the .dark-theme class
  document.body.classList.add("dark");
  document.getElementById("darkSwitch").checked = true;
}

var newScript = document.createElement("script");
        newScript.src = "https://badge.dimensions.ai/badge.js";
        var x = document.getElementsByTagName("span");
        var i;
        for (i = 0; i < x.length; i++) {
        //x[i].style.backgroundColor = "red";
        x[i].appendChild(newScript);
    } 

    function showBadges(){
            
        let divs = document.getElementsByClassName("__dimensions_badge_embed__");
        
        let checkBox = document.getElementById("badgeswitch");

        for (let x = 0; x < divs.length; x++) {
            let div = divs[x];
            
            if (checkBox.checked==true) {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        }
    }
