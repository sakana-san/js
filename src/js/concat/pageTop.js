$(function() {

/*
	//ノーマルタイプ
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 60) {
			$('.js-pageTop').fadeIn();
		} else {
			$('.js-pageTop').fadeOut();
		}
		//$('.pos').text($(this).scrollTop());
	});
	//クリックされたら上に戻る
	$('.js-pageTop').on('click', function() {
		$('body, html').animate({scrollTop: 0}, 500);
		return false;
	});
*/

	//下から出てくるタイプ
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 60) {
			$('.js-pageTop').addClass('is-active');
			$('.js-pageTop').stop().animate({bottom: '10px'}, 200);
		} else {
			$('.js-pageTop').stop().animate({bottom: '-70px'}, 200);
		}
	});

	$('.js-pageTop').on('click', function() {
		$('body, html').animate({scrollTop: 0}, 500);
		return false;
	});
});