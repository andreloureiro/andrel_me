var App = (function() {

  var init = function() {
    mobileMenu()
  };

  var mobileMenu = function() {
    var launcher = document.querySelector('.mobile-launcher'),
      close = document.querySelector('.menu .close'),
      menu = document.querySelector('.menu'),
      logo = document.querySelector('.header__logo'),
      content = document.querySelector('.content');
    launcher.addEventListener('click', function() {
      menu.classList.add('menu--ACTIVE');
    });
    close.addEventListener('click', function() {
      menu.classList.remove('menu--ACTIVE');
    });
  };

  return {
    init: init,
    mobileMenu: mobileMenu
  }
}())