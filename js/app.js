debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//Botão do menu mobile
$('.mobile-btn').click(function(){
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
});

/*Slider*/

(function() {
    function slider (sliderName, velocidade) {
        var sliderClass = '.' + sliderName,
            activeClass = 'active',
            rotate = setInterval(rotateSlide, velocidade);

        $(sliderClass+ '> :first').addClass(activeClass);

        $(sliderClass).hover(function() {
            clearInterval(rotate);
        }, function() {
            rotate = setInterval(rotateSlide, velocidade);
        });

        function rotateSlide() {
            var activeSlide = $(sliderClass+ '> .' + activeClass),
                nextSlide = activeSlide.next();
            
            if(nextSlide.length == 0) {
                nextSlide = $(sliderClass+ '> :first');
            }
            activeSlide.removeClass(activeClass);
            nextSlide.addClass(activeClass);
        }
    }

    slider('introducao', 5000);
    slider('carousel-promo', 5000);
})();

//Não deixa aderir ao plano até aceitar os termos

$('[name=termosAceitos]').click(function() {
    var cheked = $('[name=termosAceitos]').is(':checked');
    if(cheked == true) {
        $('.modalidades a').removeClass('disabled');
        $('.aderir a').removeClass('disabled');
    }
    else {
        $('.modalidades a').addClass('disabled');
          $('.aderir a').addClass('disabled');
    }
});