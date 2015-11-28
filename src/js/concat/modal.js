$(function() {
	//ノーマルタイプのModal
	$('.is-modalRun').on('click', function() {
		//キーボード操作などにより、オーバーレイが多重起動するのを防止する
		$(this).blur();
		if($('.p-modalOverlay')[0]) return false;

		$('.p-modal').append('<div class="p-modalOverlay"></div>');
		$('.p-modalContent').fadeIn();

		centeringModal();
		modalOverlay();
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

	function modalOverlay() {
		$('.p-modalOverlay').fadeIn();
		$('.p-modalOverlay, .c-btnModalClose').on('click', function() {
			$('.p-modalContent, .p-modalOverlay').fadeOut(function() {
				$('.p-modalOverlay').remove();
			});
		});
	}
});


$(function() {
	//複数指定のモーダルタイプ
	var nowModal = null;

	var modals = $('.is-modalRuns');
	for (var i=0; i<modals.length; i++) {
		modals[i].onclick = function() {
			//ボタンからフォーカスを外す
			this.blur();
			var target = this.getAttribute('data-target');
			
			if(typeof(target) == 'undefined' || !target || target === null) {
				return false;
			}

			nowModal = document.getElementById(target);
			if (nowModal === null) {
				return false;
			}
			$('.p-modal').append('<div class="p-modalOverlay"></div>');
			$('.p-modalOverlay').fadeIn();

			centeringModal();

			$(nowModal).fadeIn();
			$('.p-modalOverlay, .c-btnModalClose').on('unbind click', function() {
				$('#' + target + ', .p-modalOverlay').fadeOut(function() {
					$('.p-modalOverlay').remove();
				});
				nowModal = null;
			});
		}
	}

	$(window).resize(centeringModal);

	function centeringModal() {
		
		if (nowModal === null) return false ;
		var width = $(window).width();
		var height = $(window).height();
		var contentWidth = $(nowModal).outerWidth();
		var contentHeight = $(nowModal).outerHeight();
		var pxLeft = ((width - contentWidth) / 2);
		var pxTop = ((height - contentHeight) / 2);

		$(nowModal).css({'left': pxLeft + 'px', 'top': pxTop + 'px'});
	}
});
















