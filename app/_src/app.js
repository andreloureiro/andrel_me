var App = (function() {

  var init = function() {
    mobileMenu();
    eventTracking();
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

  var eventTracking = function() {
  	var shareTwitter = document.querySelectorAll('.share__link.twitter'),
  			shareFacebook = document.querySelectorAll('.share__link.facebook'),
  			goOpus = document.querySelector('.go-opus'),
  			goNubexpress = document.querySelectorAll('.go-nubexpress');
  	if (shareTwitter) {
  		for (var i = 0; i < shareTwitter.length; i++) {
	  		shareTwitter[i].addEventListener('click', function () {
	  			_gaq.push(['_trackEvent', 'Social', 'Share', 'Twitter']);
	  		});
	  	};
  	};
  	if (shareFacebook) {
  		for (var i = 0; i < shareFacebook.length; i++) {
	  		shareFacebook[i].addEventListener('click', function () {
	  			_gaq.push(['_trackEvent', 'Social', 'Share', 'Facebook']);
	  		});
	  	};
  	};
  	if (goOpus) {
  		goOpus.addEventListener('click', function () {
	  		_gaq.push(['_trackEvent', 'Links', 'Exit', 'Sobre - Opus']);
	  	});
  	};
  	if (goNubexpress) {
  		for (var i = 0; i < goNubexpress.length; i++) {
	  		goNubexpress[i].addEventListener('click', function () {
	  			_gaq.push(['_trackEvent', 'Social', 'Exit', 'Projetos - Nubexpress']);
	  			alert('ok');
	  		});
	  	};
  	};
  };

  return {
    init: init,
    mobileMenu: mobileMenu
  }
}())