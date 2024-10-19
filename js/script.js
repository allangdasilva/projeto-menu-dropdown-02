const ICON_MENU = document.querySelector('.icon-menu')

ICON_MENU.addEventListener('click', menuOpen)

function menuOpen(){
    const MENU_CONTENT = document.querySelector('.menu-content')

    MENU_CONTENT.classList.toggle('menu-content-active')
}