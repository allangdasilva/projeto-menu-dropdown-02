const ICON_MENU = document.querySelector('.icon-menu');

function menuOpen(){
    const MENU_CONTENT = document.querySelector('.menu-content');
    const MENU_HAMBURGER = document.querySelector('.menu-hamburger');

    MENU_CONTENT.classList.toggle('menu-content-active');
    MENU_HAMBURGER.classList.toggle('menu-hamburger-active');
}

ICON_MENU.addEventListener('click', menuOpen);
