$(function() {

	//スクロールがされたら表示、戻ったら非表示
	$(window).on('scroll', function() {
		$('.pos').text($(this).scrollTop());
		if ($(this).scrollTop() > 60) {
			$('.js-pageTop').fadeIn();
		} else {
			$('.js-pageTop').fadeOut();
		}
	});

	//クリックされたら上に戻る
	$('.js-pageTop').on('click', function() {
		$('body, html').animate({scrollTop: 0}, 500);
		return false;
	});
});