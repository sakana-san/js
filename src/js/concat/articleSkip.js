
//aタグを使って任意の場所にスクロール
$(function() {
	$('.anc').on('click', function() {
		var url = this.href;
		var part = url.split('#');
		var target = part[1];
		var targetTop = $('#' + target).offset().top;
		$('body,html').animate({scrollTop: targetTop}, 1000);
		return false;
	});
});


//aタグ無し編
$(function() {
	$('.c-sampleList__btn').on('click', function() {
		var space = 20;
		var i = $('.c-sampleList__btn').index(this);
		var position = $('.p-sampleList-boxContent').eq(i).offset().top - space;
		console.log(position);
		$('body,html').animate({scrollTop: position}, 800);
		return false;
	});
	$('.c-sectionPageTop').on('click', function() {
		var space = 20;
		var sampleTop = $('.p-sampleList').offset().top - space;
		console.log(sampleTop);
		$('body,html').animate({scrollTop: sampleTop}, 800);
		return false;
	});
});

