var burgerButton = document.querySelector('.hamburger-btn')
var burgerMenu = document.getElementById('main-menu')

function menuToggle() {
    burgerMenu.classList.toggle('show-menu')
    if (burgerMenu.classList.contains('show-menu')){
        this.ariaExpanded = true
    }else{
        this.ariaExpanded = false
    }
}

burgerButton.addEventListener('click', menuToggle)

document.onkeydown = function(e){
    if (e.key === 'Escape' && burgerMenu.classList.contains('show-menu')) {
        if (burgerMenu.contains(document.activeElement)) {
            burgerButton.focus()
            menuToggle()
        }else{
            menuToggle()
            burgerButton.blur()
        }
    }
    if (e.key === 'Tab') {
        if (!burgerMenu.contains(document.activeElement) && burgerMenu.classList.contains('show-menu')) {
            burgerButton.focus()
        }
    }
}

document.onclick = function(e) {
    if (!document.querySelector('nav').contains(e.target) && burgerMenu.classList.contains('show-menu')) {
        menuToggle()
    }
}
