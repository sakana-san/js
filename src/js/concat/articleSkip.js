
$(function() {
	//aタグを使って任意の場所にスクロール
	$('.anc').on('click', function() {
		var url = this.href;
		var part = url.split('#');
		var target = part[1];
		var targetTop = $('#' + target).offset().top;
		$('body,html').animate({scrollTop: targetTop}, 1000);
		return false;
	});

	//aタグ無しバージョン
	$('.c-sampleList__btn').on('click', function() {
		var count = $(this).index();
		var position = $('.p-sampleList-boxContent').eq(count).offset().top - 20;
		$('body,html').animate({scrollTop: position}, 1000);
		return false;
	});
	$('.c-sectionPageTop').on('click', function() {
		var sampleTop = $('.p-sampleList').offset().top -20;
		$('body,html').animate({scrollTop: sampleTop}, 1000);
		return false;
	});
});