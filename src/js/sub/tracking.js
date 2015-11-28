/*
//ノーマルタイプ
window.onload = function() {
	var fixNav = $('.p-sideCassette');
	var content = $('.p-content');
	var test = $('.p-slideArea');
	var targetTop = fixNav.offset().top; 
	var contentTop = content.offset().top;

	var scroll = content.height() - fixNav.height();
	console.log(content.height());
	console.log(fixNav.height());
	console.log(scroll);
	$(window).on('scroll', function() {
		var ws = $(window).scrollTop();
		$('.scroll').text(ws);
		if (ws > scroll) {
			fixNav.css({position: 'fixed', top: scroll - ws + 'px'});
		} else if (ws > targetTop) {
			fixNav.css({ position: 'fixed', top: 0 });
		} else {
			fixNav.css({ position: 'relative', top: 0 });
		}
	});
}
*/
//offset().top
//一番上から、要素までの距離。

//位置指定
$(window).on('load', function() {
	var fixedNav = $('.p-sideCassette');
	var content = $('.p-content');
	var scrollStop = $('.is-scrollStop');
	var scrollStopTop = scrollStop.offset().top;
	var targetTop = fixedNav.offset().top;
	var scroll = scrollStopTop - (fixedNav.height() - scrollStop.height());
	$(window).on('scroll', function() {
		var ws = $(window).scrollTop();
		$('.scroll').html(ws);
		if (ws > scroll) {
			fixedNav.css({position: 'fixed', top: scroll - ws + 'px'});
		} else if (ws > targetTop) {
			fixedNav.css({position: 'fixed', top: 0});
		} else {
			fixedNav.css({position: 'relative', top: 0});
		}
	});
});

//最初非表示途中から表示
$(window).on('load', function() {
	var fixedtransition = $('.p-transition');
	var content = $('.p-content');
	var scrollStart = $('.is-scrollStart');
	var contentTop = content.offset().top;
	var fixedtransitionTop = fixedtransition.offset().top;
	var scrollStartTop = scrollStart.offset().top;
	var scroll = scrollStartTop - scrollStart.height();
	console.log(scroll);
	$(window).on('scroll', function() {
		var ws = $(this).scrollTop();
		if(ws > scroll) {
			fixedtransition.css({position: 'fixed', bottom: 0}).fadeOut();
			console.log('3です');
		} else if (ws > contentTop){
			fixedtransition.css({position: 'fixed', bottom: 0}).fadeIn();
			console.log('フェードイン');
		} else {
			fixedtransition.fadeOut();
			console.log('フェードアウト');
		}
	});
});









