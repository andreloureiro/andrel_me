var App = (function() {

  var init = function() {
    mobileMenu()
  };

  var mobileMenu = function() {
    var launcher = document.querySelector('.mobile-launcher'),
      mobMenu = document.querySelector('.menu'),
      mobMenuClose = document.querySelector('.mobile-menu-close');
    launcher.addEventListener('click', function() {
      // mobMenu.classList.add('menu--ACTIVE');
      document.body.classList.add('mobile-menu--ACTIVE');
    });
    mobMenuClose.addEventListener('click', function() {
      // mobMenu.classList.remove('menu--ACTIVE');
      document.body.classList.remove('mobile-menu--ACTIVE');
    })
  };

  return {
    init: init
  }
}())