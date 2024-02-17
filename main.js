'use strict';


const mobMenu = document.querySelector('.backdrop-mob-menu');
const btnCloseMenu = document.querySelector('.btn-mob-close');
const menu = document.querySelector('.burger-menu');
const mobListMenu = document.querySelector('.mob-menu-list');
const scrollTop = document.getElementById('scrollTop');
console.log(mobMenu);
console.log(btnCloseMenu);
console.log(menu);

menu.addEventListener('click', onMenuClick);
btnCloseMenu.addEventListener(('click'), onBtnCloseMenuClick);
mobListMenu.addEventListener(('click'), onBtnCloseMenuClick);

function onMenuClick(){
    mobMenu.classList.add('is-open');
}

function onBtnCloseMenuClick(){
    mobMenu.classList.remove('is-open');
}

window.onscroll = () => {
    
    if (window.scrollY > 400) {
        scrollTop.classList.remove('isShowScroll_hide');
    } else if (window.scrollY < 400) {
        scrollTop.classList.add('isShowScroll_hide');
    }
};

scrollTop.addEventListener('click', ()=> window.scrollTo(0, 0))