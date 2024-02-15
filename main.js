'use strict';


const mobMenu = document.querySelector('.backdrop-mob-menu');
const btnCloseMenu = document.querySelector('.btn-mob-close');
const menu = document.querySelector('.burger-menu-btn');
const mobListMenu = document.querySelector('.mob-menu-list');
const scrollTop = document.getElementById('scrollTop');

menu.addEventListener('click', ()=> mobMenu.classList.add('is-open'));
menu.addEventListener('mouseenter', ()=> menu.style.transform = 'scale(1.2)');
menu.addEventListener('mouseleave', ()=> menu.style.transform = 'scale(1)');
btnCloseMenu.addEventListener(('click'), ()=> mobMenu.classList.remove('is-open'));
btnCloseMenu.addEventListener('mouseenter', ()=> btnCloseMenu.style.transform = 'scale(1.2)');
btnCloseMenu.addEventListener('mouseleave', ()=> btnCloseMenu.style.transform = 'scale(1)');
mobListMenu.addEventListener(('click'), ()=> mobMenu.classList.remove('is-open'));
window.onscroll = () => {
    
    if (window.scrollY > 400) {
        scrollTop.classList.remove('isShowScroll_hide');
    } else if (window.scrollY < 400) {
        scrollTop.classList.add('isShowScroll_hide');
    }
};

scrollTop.addEventListener('click', ()=> window.scrollTo(0, 0))