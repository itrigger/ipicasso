import "./jquery-global.js";
import $ from "jquery";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './vendor/jquery.accordion';
import './vendor/mosaic';



$(document).ready(function () {

  const mySwiper = new Swiper('.module-mp-cat-news .swiper-container', {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.module-mp-cat-news .swiper-button-next',
      prevEl: '.module-mp-cat-news .swiper-button-prev',
    },
  });

  const mySwiper2 = new Swiper('.module-mp-cat-actions .swiper-container', {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.module-mp-cat-actions .swiper-button-next',
      prevEl: '.module-mp-cat-actions .swiper-button-prev',
    },
  });

  const mySwiper3 = new Swiper('.module-mp-media-center .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.module-mp-media-center .swiper-button-next',
      prevEl: '.module-mp-media-center .swiper-button-prev',
    },
  });

  $("#mp-accordion [data-accordion]").accordion({
    singleOpen: false
  });
  /*https://jquery-mosaic.tin.cat/*/
  $('.js-mosaic').Mosaic({
    maxRows: 2,
    innerGap: 20,
    maxRowHeight: 279
  });
});

