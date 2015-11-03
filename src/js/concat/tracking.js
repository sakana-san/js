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

//offset().top
//一番上から、要素までの距離。
