"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // polyfill flat
  if (!Array.prototype.flat) Array.prototype.flat = function () {
    return function f(arr) {
      return arr.reduce(function (a, v) {
        return Array.isArray(v) ? a.concat(f(v)) : a.concat(v);
      }, []);
    }(this);
  };
});
$(document).ready(function () {
  $(window).on('load resize', function () {
    if ($(window).width() < 640) {
      $('.hero__block-slider:not(.slick-initialized)').slick({
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1
      });
    } else {
      $(".hero__block-slider.slick-initialized").slick("unslick");
    }
  });
});