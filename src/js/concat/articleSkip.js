
//aタグを使って任意の場所にスクロール
$(function() {
	$('.anc').on('click', function() {
		var url = this.href;
		var part = url.split('#');
		var target = part[1];
		var tagetTop = $('#' + target).offset().top;
		$('body,html').animate({scrollTop: tagetTop}, 1000);
		return false;
	});
});