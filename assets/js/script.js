
// Functionality For Navbar
let navMenuBtn = document.querySelector('nav .menu-btn button');
let navMenu = document.querySelector('nav .nav-menu');

navMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !navMenuBtn.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// ----------------------------------------------------------------------------------------------------
// Functionality For Home Banner Pop Up
let popUpBox = document.querySelector('.banner-pop-up');
let popUpCloseBtn = document.querySelector('.banner-pop-up i');

popUpCloseBtn.addEventListener('click', () => {
    popUpBox.classList.add('hide');
})

// ----------------------------------------------------------------------------------------------------