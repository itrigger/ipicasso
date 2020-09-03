import "./jquery-global.js";
import $ from "jquery";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './vendor/jquery.accordion';





$(document).ready(function () {

  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $("#mp-accordion [data-accordion]").accordion({
    singleOpen: false
  });
})
