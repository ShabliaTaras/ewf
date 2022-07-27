$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });
  $(".header__btn-menu").on("click", function () {
    $(".header__btn-menu").toggleClass("header__btn-menu--active");
  });
  $(".header__btn-menu--active").on("click", function () {
    $(".header__btn-menu").removeClass("header__btn-menu--active");
  });
  $(".header__btn-menu").on("click", function () {
    $(".menu").toggleClass("menu--open");
  });
  if ($(window).width() < 550) {
    $(".buy-process__item--delivery").appendTo($(".buy-process__items-box"));
  }
  if ($(window).width() < 660) {
    $(".menu__list-item").appendTo($(".menu.menu--appended ul"));
  }
  $(".top__slider").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  let mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".living",
    },
    animation: {
      effects: "fade translateZ(-100px)",
    },
  });
});

$(function () {
  AOS.init();
});
