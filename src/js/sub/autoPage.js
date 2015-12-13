$(function() {
	$('.is-click').on('click', function() {
	$('body').append('<div class="p-loading"></div>');
	$('.p-loading').html('<span class="c-iconLoading is-txt"></span>');
	$.ajax({
		url: '../dist/js/sub/autoPageLoading.js',
		type: 'GET',
		dataType: 'script',
		timeuout:10000,
		success: function( data ) {
			alert('成功です');
		},
		error: function( data ) {
			alert('失敗');
		},
		complete: function(data) {
			$('.p-loading').remove();
		}
		});
	}); 
});
	/*
	function message(msg) {
		var messageTxt = '';
		if(msg != '') {
			message = '<div class="c-iconLoading is-txt">' + msg + '</div>';
		}
		if($('.p-loading').size() === 0) {
			$('body').append('<div class="p-loading">' + message + '</div>');
		}
	}
	function removeLoading() {
		$('.p-loading').remove();
	}z
});

/*
	
	function messageText(msg) {
		var message = '';
		if (msg != ' ') {
			message = '<div class="c-iconLoading is-txt">' + msg + '</div>';
		}
		if($('.p-laoding').size() === 0) {
			$('body').append('<div class="p-loading">' + message + '</div>');
		}
	}
	function removeLoading() {
		$('.p-loading').remove();
	}
*/