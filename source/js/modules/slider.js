module.exports = function () {
    var Swiper = require('swiper');

    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        loop: true,
    });
};