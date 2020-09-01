window.$ = require('jquery');
window.jQuery = $;
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

$(document).ready(function () {

  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})
