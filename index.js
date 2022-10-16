// Initialize Variables
var button = document.querySelector(".hamburger-btn")
var dropDown = document.querySelector(".hamburger-menu")
var menu = document.querySelector(".menu")

// Open and Close Hamburger Menu Function
function openClose(e) {
    dropDown.classList.toggle("show-menu")
    button.focus()
    console.log('clicked button')
    if (dropDown.classList.contains("show-menu")){
        button.setAttribute ("aria-expanded", true)
    } else {
        button.setAttribute ("aria-expanded", false)
    }
  }
  
button.onclick = openClose

// Close functions for the menu 
function backOut (e) {
    dropDown.classList.remove("show-menu");
    button.setAttribute ("aria-expanded", false)
    button.focus()
}

document.onkeyup = function (e) {
    if (e.key === 'Escape') {
        backOut()
    }
}

document.body.onclick = function (e) {
    if (!menu.contains(e.target)){
        backOut()
    }
}
