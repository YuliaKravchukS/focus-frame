'use strict';


const mobMenu = document.querySelector('.backdrop-mob-menu');
const btnCloseMenu = document.querySelector('.btn-mob-close');
const menu = document.querySelector('.burger-menu-btn');
const mobListMenu = document.querySelector('.mob-menu-list');

menu.addEventListener('click', ()=> mobMenu.classList.add('is-open'));
btnCloseMenu.addEventListener(('click'), ()=> mobMenu.classList.remove('is-open'));
mobListMenu.addEventListener(('click'), ()=> mobMenu.classList.remove('is-open'));