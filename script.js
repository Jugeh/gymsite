//valitaan luokan mukaan "hampurilaisvalikko" ja navbarin linkit
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

//kun hampurilaisvalikkoa klikataan ohjelma suorittaa funktion, jolla se aukaisee tai sulkee valikon
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
