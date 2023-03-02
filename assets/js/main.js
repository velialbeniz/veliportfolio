console.info('HELLO! HOW CAN I HELP YOU?');

// scrool smoothing

$("header nav a").click(function(){
	var to = $(this).attr('href');
	$("html, body").animate({scrollTop: $(to).offset().top-120}, 700);
});

// loading play active

$(document).ready(function(){
	$('.loading').addClass('play');
	setTimeout(function(){
		$('.loading').addClass('active');

		setTimeout(function(){
			$('.anim').each(function(){
				$this = $(this);
				if( $this.offset().top < $(window).height() ){
					$this.addClass('play');
				}
			});
		}, 200);
	}, 2000);
});

$("header .menu").click(function(){
	$('header').toggleClass('active');
});

$(window).scroll(function(){
	var s = $(this).scrollTop();

	$('.anim').each(function(){
		$this = $(this);
		if(s > $this.offset().top-($(window).height()/1.3)){
			$this.addClass('play');
		}
	});

	if(s > 100){
		$('header').addClass('scrolled');
	}
	else{
		$('header').removeClass('scrolled');
	}
});

// slider 

$('.slick').slick({
	autoplay: true,
	autoplaySpeed: 2000,
	fade: true,
	arrows: false,
	infinite: true,
});

// cv pop-up

$('.cv').click(function(){
	$(this).toggleClass('active');
	$('.resume').toggleClass('active');
	$('.dark-bg').toggleClass('active');
});
$('.close').click(function(){
	$(this).removeClass('active');
	$('.resume').removeClass('active');
	$('.dark-bg').removeClass('active');
});
$('.dark-bg').click(function(){
	$(this).removeClass('active');
	$('.dark-bg').removeClass('active');
	$('.resume').removeClass('active');
});