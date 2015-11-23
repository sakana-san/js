$(function() {
	$('.p-modalOpen').on('click', function() {
		//キーボード操作などにより、オーバーレイが多重起動するのを防止する
		$(this).blur();
		if($('.p-modalOverlay')[0]) return false;

		$('.p-modal').append('<div class="p-modalOverlay"></div>');
		$('.p-modalOverlay').fadeIn();
		$('.p-modalContent').fadeIn();

		centeringModal();

		$('.p-modalOverlay, .c-btnModalClose').on('unbind click', function() {
			$('.p-modalContent, .p-modalOverlay').fadeOut(function() {
				$('.p-modalOverlay').remove();
			});
		});
	});

	$(window).resize(centeringModal);

	function centeringModal() {
		var width = $(window).width();
		var height = $(window).height();
		var contentWidth = $('.p-modalContent').outerWidth();
		var contentHeight = $('.p-modalContent').outerHeight();
		var pxLeft = ((width - contentWidth) / 2);
		var pxTop = ((height - contentHeight) / 2);

		$('.p-modalContent').css({'left': pxLeft + 'px', 'top': pxTop + 'px'});
	}
});