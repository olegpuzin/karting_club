"use strict"

const burgerButton = document.querySelector('.burger_btn');
if(burgerButton) {
    const headerNav = document.querySelector('.header_nav');
    burgerButton.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burgerButton.classList.toggle('_open_burger_btn');
        headerNav.classList.toggle('_open_header_nav');
    });
};

const swiper = new Swiper('.swiper', {
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    loop: true,

    autoplay: {
        delay: 1500,
    },
});