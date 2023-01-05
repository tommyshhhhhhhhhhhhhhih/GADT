var scrollVal = $(this).scrollTop();
if (scrollVal > 1 ) {
    $('header').css({
        'padding':'16px 0',
    });
} else {
    $('header').css({
        'padding':'30px 0',
    });
}

$(document).ready(function() {
    // scroll header 樣式
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
            $('header').css({
                'padding':'16px 0',
            });
        } else {
            $('header').css({
                'padding':'30px 0',
            });
        }
    });

    //mobile nav
	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
	});

    var windowWidth = window.innerWidth;
    
    if(windowWidth < 1024){
    }else{
        $('nav').removeClass('open');
        $('body').removeClass('hidden');
    }

    $('.nav-icon').click(function(){
        $('nav').toggleClass('open');
        $('body').toggleClass('hidden');
    });
    

    //header
    $('.about').click(function(){
        $('nav.open').removeClass('open');
        $('button.nav-icon').removeClass('open');
        $('body').removeClass('hidden');
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 800);
    });
    $('.starter').click(function(){
        $('nav.open').removeClass('open');
        $('button.nav-icon').removeClass('open');
        $('body').removeClass('hidden');
        $('html, body').animate({
            scrollTop: $('#starter').offset().top
        }, 800);
    });
});







