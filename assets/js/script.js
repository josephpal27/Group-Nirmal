
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

let productCards = document.querySelectorAll('.product-cards-row .product-card');

productCards.forEach((productCard) => {
    productCard.addEventListener('mouseenter', () => {
        let layer1 = productCard.querySelector('.layer-1');
        let layer2 = productCard.querySelector('.layer-2');
        layer1.classList.add('hide');
        layer2.classList.add('show');
    });

    productCard.addEventListener('mouseleave', () => {
        let layer1 = productCard.querySelector('.layer-1');
        let layer2 = productCard.querySelector('.layer-2');
        layer1.classList.remove('hide');
        layer2.classList.remove('show');
    });
});

// ----------------------------------------------------------------------------------------------------

