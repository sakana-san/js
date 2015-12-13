//基本的なajaxの呼び出し
$(function() {
	$('.is-click').on('click', function() {
		$.ajax({
			url: './contents.html',
			type: 'GET',
			dataType: 'html',
		}).done(function(data) {
			$('.p-contents').html(data);
		});
	}); 
});

//郵便番号呼び出し
$(function() {
	var check = function() {
		var zipOne = $('#zipCodePrimary').val();
		var zipTwo = $('#zipCodesecondary').val();
		if(!zipOne.match(/^\d{3}$/) || !zipTwo.match(/^\d{4}$/)) {
			return;
		}
		$.ajax({
			url: 'http://api.aoikujira.com/zip/json/' + zipOne + zipTwo,
			type: 'GET',
			dataType: 'json'
		}).done(function(data) {
			$('#address').val(data.state + data.city + data.address);
		});
	};

	$('#zipCodePrimary').on('keyup', check);
	$('#zipCodesecondary').on('keyup', check);
});

//簡易掲示板
$(function() {
	var showMessages = function(messages) {
		var boxes = [];
		for (var i=0; i<messages.length; i++) {
			var box = $('<div>').addClass('response');
			$('<p>').addClass('body').text(messages[i].body).appendTo(box);
			$('<p>').addClass('name').text('太郎さん' + messages[i].remoteIp).appendTo(box);
			$('<p>').addClass('createAt').text(messages[i].createAt).appendTo(box);
			boxes.push(box);
		}
		$('#messages').empty().append(boxes);
	};
	var loadMessages = function() {
		$.ajax({
			url: "http://edu.happy-kakurembo.com/api/bbs/messages",
			type: 'GET',
			dataType: 'json',
		}).done(function(res) {
			showMessages(res.data);
		});
	};
	loadMessages();

	$('#postButton').on('click', function(e) {
		var body = $('textarea[name=body]');
		if(body.val().trim().length !== 0) {
			$.ajax({
				url: 'http://edu.happy-kakurembo.com/api/bbs/messages',
				type: 'POST',
				data: $('form').serialize(),
				dataType: 'json'
			}).done(function(res) { 
				body.val('');
				loadMessages();
			});
		}
		e.preventDefault();
	});

	$("#reloadButton").on("click", function(e) {
		loadMessages();
		e.preventDefault();
	});

	$('#deleteButton').on('click', function(e) {
		$.ajax({
			url: "http://edu.happy-kakurembo.com/api/bbs/messages",
			type: 'GET',
			dataType: 'json',
		}).done(function(res) {
			$('.response').fadeOut();
		});
	});
});

/*
//ローディング呼び出し
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